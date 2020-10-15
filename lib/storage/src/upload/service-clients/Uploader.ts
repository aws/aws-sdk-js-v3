import {
  AbortMultipartUploadRequest,
  CompleteMultipartUploadRequest,
  CreateMultipartUploadRequest,
  ServiceOutputTypes,
  UploadPartCommandInput,
  UploadPartCommandOutput,
} from "@aws-sdk/client-s3";
import { EventEmitter } from "events";

import { DataPart } from "../../data-chunk/yield-chunk";
import { byteLength } from "../../utils/bytelength";
import { UploadType } from "../Upload";

export interface MultiPartIdentity {
  UploadId: string;
  Bucket: string;
  Key: string;
}

export interface PartIdentity {
  threadOrigin?: number;
  PartNumber: number;
  ETag: string;
}

export abstract class Uploader extends EventEmitter {
  uploadEvent = "httpUploadProgress";
  data: AsyncGenerator<DataPart, void, unknown>;
  uploadedParts: PartIdentity[];
  dataBytesUploaded: number;
  configuration: UploadType.Configuration;

  abstract dataBytesTotal: number;
  abstract client: UploadType.ServiceClients;
  abstract destination: MultiPartIdentity;

  constructor(data: AsyncGenerator<DataPart, void, unknown>, configuration: UploadType.Configuration) {
    super();
    this.configuration = configuration;
    this.data = data;
    this.dataBytesUploaded = 0;
    this.uploadedParts = [];
  }

  abstract async _initiateUpload(command: CreateMultipartUploadRequest): Promise<ServiceOutputTypes>;
  abstract async _uploadPart(command: UploadPartCommandInput): Promise<UploadPartCommandOutput>;
  abstract async _completeMultipartUpload(command: CompleteMultipartUploadRequest): Promise<ServiceOutputTypes>;
  abstract async _abortUpload(command: AbortMultipartUploadRequest): Promise<ServiceOutputTypes>;

  async intialize() {
    const intializeCommand = {
      Bucket: this.destination.Bucket,
      Key: this.destination.Key,
    };
    this.destination = (await this._initiateUpload(intializeCommand)) as MultiPartIdentity;
    return this.destination;
  }

  async upload() {
    const activeThreads = [];
    for (let threadId = 0; threadId < this.configuration.queueSize; threadId++) {
      activeThreads.push(this._uploadThread(threadId));
    }
    await Promise.all(activeThreads);
    return this.uploadedParts;
  }

  async complete(): Promise<ServiceOutputTypes> {
    this.uploadedParts = sortParts(this.uploadedParts);
    const completeCommandInput = {
      ...this.destination,
      MultipartUpload: {
        Parts: this.uploadedParts,
      },
    };
    return this._completeMultipartUpload(completeCommandInput);
  }

  async abort(): Promise<ServiceOutputTypes> {
    return this._abortUpload(this.destination);
  }

  async _uploadThread(threadOrigin: number) {
    let targetData = await this.data.next();
    while (!targetData.done) {
      const partNumber = targetData.value && targetData.value.PartNumber;
      const body = targetData.value && targetData.value.Body;
      const uploadPartCommandInput = {
        UploadId: this.destination.UploadId,
        Bucket: this.destination.Bucket,
        Key: this.destination.Key,
        Body: body,
        PartNumber: partNumber,
      };

      const res = await this._uploadPart(uploadPartCommandInput);

      //progress update:
      this.dataBytesUploaded += byteLength(body);
      this.emit(this.uploadEvent, {
        loaded: this.dataBytesUploaded,
        total: this.dataBytesTotal,
        part: partNumber,
        Key: this.destination.Key,
        Bucket: this.destination.Bucket,
      });

      this.uploadedParts.push({
        PartNumber: partNumber,
        ETag: res.ETag || "",
      });
      targetData = await this.data.next();
    }
  }
}

export function sortParts(parts: PartIdentity[]) {
  return parts.sort((a: PartIdentity, b: PartIdentity) => a.PartNumber - b.PartNumber);
}
