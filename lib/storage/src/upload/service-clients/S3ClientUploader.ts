import {
  AbortMultipartUploadCommand,
  AbortMultipartUploadRequest,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadRequest,
  CreateMultipartUploadCommand,
  CreateMultipartUploadRequest,
  PutObjectCommandInput,
  S3Client,
  ServiceOutputTypes,
  UploadPartCommand,
  UploadPartCommandInput,
  UploadPartCommandOutput,
} from "@aws-sdk/client-s3";

import { yieldChunk } from "../../data-chunk/yield-chunk";
import { byteLength } from "../../utils/bytelength";
import { UploadType } from "../Upload";
import { MultiPartIdentity, Uploader } from "./Uploader";

export class S3ClientUploader extends Uploader {
  private readonly client: S3Client;
  destination: MultiPartIdentity;
  dataBytesTotal: number;

  constructor(client: S3Client, data: PutObjectCommandInput, configuration_: UploadType.Configuration) {
    super(yieldChunk(data.Body!, configuration_.partSize), configuration_);
    this.dataBytesTotal = byteLength(data.Body!);
    this.client = client;
    this.destination = {
      Key: data.Key!,
      Bucket: data.Bucket!,
      UploadId: "", // filled on initialization
    };
  }

  async _initiateUpload(command: CreateMultipartUploadRequest): Promise<ServiceOutputTypes> {
    return this.client.send(new CreateMultipartUploadCommand(command));
  }
  async _uploadPart(command: UploadPartCommandInput): Promise<UploadPartCommandOutput> {
    return this.client.send(new UploadPartCommand(command));
  }
  async _completeMultipartUpload(command: CompleteMultipartUploadRequest): Promise<ServiceOutputTypes> {
    return this.client.send(new CompleteMultipartUploadCommand(command));
  }
  async _abortUpload(command: AbortMultipartUploadRequest): Promise<ServiceOutputTypes> {
    return this.client.send(new AbortMultipartUploadCommand(command));
  }
}
