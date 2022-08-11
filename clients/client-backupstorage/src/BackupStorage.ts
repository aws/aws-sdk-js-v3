// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { BackupStorageClient } from "./BackupStorageClient";
import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "./commands/DeleteObjectCommand";
import { GetChunkCommand, GetChunkCommandInput, GetChunkCommandOutput } from "./commands/GetChunkCommand";
import {
  GetObjectMetadataCommand,
  GetObjectMetadataCommandInput,
  GetObjectMetadataCommandOutput,
} from "./commands/GetObjectMetadataCommand";
import { ListChunksCommand, ListChunksCommandInput, ListChunksCommandOutput } from "./commands/ListChunksCommand";
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand";
import {
  NotifyObjectCompleteCommand,
  NotifyObjectCompleteCommandInput,
  NotifyObjectCompleteCommandOutput,
} from "./commands/NotifyObjectCompleteCommand";
import { PutChunkCommand, PutChunkCommandInput, PutChunkCommandOutput } from "./commands/PutChunkCommand";
import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import { StartObjectCommand, StartObjectCommandInput, StartObjectCommandOutput } from "./commands/StartObjectCommand";

/**
 * The frontend service for Cryo Storage.
 */
export class BackupStorage extends BackupStorageClient {
  /**
   * Delete Object from the incremental base Backup.
   */
  public deleteObject(
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectCommandOutput>;
  public deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
  public deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;
  public deleteObject(
    args: DeleteObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteObjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteObjectCommandOutput) => void
  ): Promise<DeleteObjectCommandOutput> | void {
    const command = new DeleteObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Gets the specified object's chunk.
   */
  public getChunk(args: GetChunkCommandInput, options?: __HttpHandlerOptions): Promise<GetChunkCommandOutput>;
  public getChunk(args: GetChunkCommandInput, cb: (err: any, data?: GetChunkCommandOutput) => void): void;
  public getChunk(
    args: GetChunkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChunkCommandOutput) => void
  ): void;
  public getChunk(
    args: GetChunkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChunkCommandOutput) => void),
    cb?: (err: any, data?: GetChunkCommandOutput) => void
  ): Promise<GetChunkCommandOutput> | void {
    const command = new GetChunkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get metadata associated with an Object.
   */
  public getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectMetadataCommandOutput>;
  public getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    cb: (err: any, data?: GetObjectMetadataCommandOutput) => void
  ): void;
  public getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectMetadataCommandOutput) => void
  ): void;
  public getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetObjectMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetObjectMetadataCommandOutput) => void
  ): Promise<GetObjectMetadataCommandOutput> | void {
    const command = new GetObjectMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List chunks in a given Object
   */
  public listChunks(args: ListChunksCommandInput, options?: __HttpHandlerOptions): Promise<ListChunksCommandOutput>;
  public listChunks(args: ListChunksCommandInput, cb: (err: any, data?: ListChunksCommandOutput) => void): void;
  public listChunks(
    args: ListChunksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChunksCommandOutput) => void
  ): void;
  public listChunks(
    args: ListChunksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChunksCommandOutput) => void),
    cb?: (err: any, data?: ListChunksCommandOutput) => void
  ): Promise<ListChunksCommandOutput> | void {
    const command = new ListChunksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List all Objects in a given Backup.
   */
  public listObjects(args: ListObjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListObjectsCommandOutput>;
  public listObjects(args: ListObjectsCommandInput, cb: (err: any, data?: ListObjectsCommandOutput) => void): void;
  public listObjects(
    args: ListObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectsCommandOutput) => void
  ): void;
  public listObjects(
    args: ListObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectsCommandOutput) => void),
    cb?: (err: any, data?: ListObjectsCommandOutput) => void
  ): Promise<ListObjectsCommandOutput> | void {
    const command = new ListObjectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Complete upload
   */
  public notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyObjectCompleteCommandOutput>;
  public notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    cb: (err: any, data?: NotifyObjectCompleteCommandOutput) => void
  ): void;
  public notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyObjectCompleteCommandOutput) => void
  ): void;
  public notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyObjectCompleteCommandOutput) => void),
    cb?: (err: any, data?: NotifyObjectCompleteCommandOutput) => void
  ): Promise<NotifyObjectCompleteCommandOutput> | void {
    const command = new NotifyObjectCompleteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Upload chunk.
   */
  public putChunk(args: PutChunkCommandInput, options?: __HttpHandlerOptions): Promise<PutChunkCommandOutput>;
  public putChunk(args: PutChunkCommandInput, cb: (err: any, data?: PutChunkCommandOutput) => void): void;
  public putChunk(
    args: PutChunkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChunkCommandOutput) => void
  ): void;
  public putChunk(
    args: PutChunkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutChunkCommandOutput) => void),
    cb?: (err: any, data?: PutChunkCommandOutput) => void
  ): Promise<PutChunkCommandOutput> | void {
    const command = new PutChunkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Upload object that can store object metadata String and data blob in single API call using inline chunk field.
   */
  public putObject(args: PutObjectCommandInput, options?: __HttpHandlerOptions): Promise<PutObjectCommandOutput>;
  public putObject(args: PutObjectCommandInput, cb: (err: any, data?: PutObjectCommandOutput) => void): void;
  public putObject(
    args: PutObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectCommandOutput) => void
  ): void;
  public putObject(
    args: PutObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutObjectCommandOutput) => void),
    cb?: (err: any, data?: PutObjectCommandOutput) => void
  ): Promise<PutObjectCommandOutput> | void {
    const command = new PutObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Start upload containing one or many chunks.
   */
  public startObject(args: StartObjectCommandInput, options?: __HttpHandlerOptions): Promise<StartObjectCommandOutput>;
  public startObject(args: StartObjectCommandInput, cb: (err: any, data?: StartObjectCommandOutput) => void): void;
  public startObject(
    args: StartObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartObjectCommandOutput) => void
  ): void;
  public startObject(
    args: StartObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartObjectCommandOutput) => void),
    cb?: (err: any, data?: StartObjectCommandOutput) => void
  ): Promise<StartObjectCommandOutput> | void {
    const command = new StartObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
