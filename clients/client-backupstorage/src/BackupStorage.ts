// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BackupStorageClient, BackupStorageClientConfig } from "./BackupStorageClient";
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

const commands = {
  DeleteObjectCommand,
  GetChunkCommand,
  GetObjectMetadataCommand,
  ListChunksCommand,
  ListObjectsCommand,
  NotifyObjectCompleteCommand,
  PutChunkCommand,
  PutObjectCommand,
  StartObjectCommand,
};

export interface BackupStorage {
  /**
   * @see {@link DeleteObjectCommand}
   */
  deleteObject(args: DeleteObjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectCommandOutput>;
  deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
  deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChunkCommand}
   */
  getChunk(args: GetChunkCommandInput, options?: __HttpHandlerOptions): Promise<GetChunkCommandOutput>;
  getChunk(args: GetChunkCommandInput, cb: (err: any, data?: GetChunkCommandOutput) => void): void;
  getChunk(
    args: GetChunkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChunkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectMetadataCommand}
   */
  getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectMetadataCommandOutput>;
  getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    cb: (err: any, data?: GetObjectMetadataCommandOutput) => void
  ): void;
  getObjectMetadata(
    args: GetObjectMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChunksCommand}
   */
  listChunks(args: ListChunksCommandInput, options?: __HttpHandlerOptions): Promise<ListChunksCommandOutput>;
  listChunks(args: ListChunksCommandInput, cb: (err: any, data?: ListChunksCommandOutput) => void): void;
  listChunks(
    args: ListChunksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChunksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectsCommand}
   */
  listObjects(args: ListObjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListObjectsCommandOutput>;
  listObjects(args: ListObjectsCommandInput, cb: (err: any, data?: ListObjectsCommandOutput) => void): void;
  listObjects(
    args: ListObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyObjectCompleteCommand}
   */
  notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyObjectCompleteCommandOutput>;
  notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    cb: (err: any, data?: NotifyObjectCompleteCommandOutput) => void
  ): void;
  notifyObjectComplete(
    args: NotifyObjectCompleteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyObjectCompleteCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChunkCommand}
   */
  putChunk(args: PutChunkCommandInput, options?: __HttpHandlerOptions): Promise<PutChunkCommandOutput>;
  putChunk(args: PutChunkCommandInput, cb: (err: any, data?: PutChunkCommandOutput) => void): void;
  putChunk(
    args: PutChunkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChunkCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectCommand}
   */
  putObject(args: PutObjectCommandInput, options?: __HttpHandlerOptions): Promise<PutObjectCommandOutput>;
  putObject(args: PutObjectCommandInput, cb: (err: any, data?: PutObjectCommandOutput) => void): void;
  putObject(
    args: PutObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link StartObjectCommand}
   */
  startObject(args: StartObjectCommandInput, options?: __HttpHandlerOptions): Promise<StartObjectCommandOutput>;
  startObject(args: StartObjectCommandInput, cb: (err: any, data?: StartObjectCommandOutput) => void): void;
  startObject(
    args: StartObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartObjectCommandOutput) => void
  ): void;
}

/**
 * @public
 * The frontend service for Cryo Storage.
 */
export class BackupStorage extends BackupStorageClient implements BackupStorage {}
createAggregatedClient(commands, BackupStorage);
