import { PutObjectCommandInput, S3, S3Client, ServiceOutputTypes } from "@aws-sdk/client-s3";

import { Upload as UploadType } from "./types";
export { Upload as UploadType } from "./types";
import { EventEmitter } from "events";

import { DEFAULT } from "./defaults";
import { S3ClientUploader } from "./service-clients/S3ClientUploader";
import { S3Uploader } from "./service-clients/S3Uploader";
import { Uploader } from "./service-clients/Uploader";

export class Upload extends EventEmitter {
  params: PutObjectCommandInput;
  client: UploadType.ServiceClients;
  configuration: UploadType.Configuration;
  progress: (progress: UploadType.Progress) => void = () => {};
  uploader: Uploader;
  uploadEvent = "";

  /**
   * Creates a managed upload object with a set of configuration options.
   */
  constructor(options: UploadType.Options) {
    super();

    this.params = options.params;
    this.client = options.client;

    const defaultOptions: UploadType.Configuration = {
      queueSize: DEFAULT.QUEUE_SIZE,
      partSize: DEFAULT.MIN_PART_SIZE,
      leavePartsOnError: !DEFAULT.ABORT_ON_FAILURE,
      tags: [],
    };
    this.configuration = { ...defaultOptions, ...options };
    if (this.configuration.partSize < DEFAULT.MIN_PART_SIZE) {
      throw `Part size must be larger than or equal to ${DEFAULT.MIN_PART_SIZE}`;
    }

    if (this.client instanceof S3) {
      this.uploader = new S3Uploader(this.client, this.params, this.configuration);
    } else if (this.client instanceof S3Client) {
      this.uploader = new S3ClientUploader(this.client, this.params, this.configuration);
    } else {
      throw "Invalid client type";
    }

    this.uploader.on(Uploader.uploadEvent, (output: UploadType.Progress) => {
      this.emit(this.uploadEvent, output);
    });
  }

  /**
   * Aborts a managed upload, including all concurrent upload requests.
   */
  async abort(): Promise<void> {
    await this.uploader.abort();
  }

  /**
   * Initiates the managed upload for the payload.
   */
  async done(): Promise<ServiceOutputTypes> {
    try {
      await this.uploader.intialize();
      await this.uploader.upload();
      const result = await this.uploader.complete();
      return result;
    } catch (error) {
      if (!this.configuration.leavePartsOnError) {
        this.uploader.abort();
      }
      throw error;
    }
  }

  /**
   * Adds a listener that is triggered when theuploader has uploaded more data.
   *
   * @param {string} event - httpUploadProgress: triggered when the uploader has uploaded more data.
   * @param {function} listener - Callback to run when the uploader has uploaded more data.
   */
  on(event: "httpUploadProgress", listener: (progress: UploadType.Progress) => void): any {
    this.uploadEvent = event;
    super.on(event, listener);
  }
}
