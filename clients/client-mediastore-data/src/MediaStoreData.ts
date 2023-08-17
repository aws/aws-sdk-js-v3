// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "./commands/DeleteObjectCommand";
import {
  DescribeObjectCommand,
  DescribeObjectCommandInput,
  DescribeObjectCommandOutput,
} from "./commands/DescribeObjectCommand";
import { GetObjectCommand, GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { ListItemsCommand, ListItemsCommandInput, ListItemsCommandOutput } from "./commands/ListItemsCommand";
import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import { MediaStoreDataClient, MediaStoreDataClientConfig } from "./MediaStoreDataClient";

const commands = {
  DeleteObjectCommand,
  DescribeObjectCommand,
  GetObjectCommand,
  ListItemsCommand,
  PutObjectCommand,
};

export interface MediaStoreData {
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
   * @see {@link DescribeObjectCommand}
   */
  describeObject(
    args: DescribeObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObjectCommandOutput>;
  describeObject(args: DescribeObjectCommandInput, cb: (err: any, data?: DescribeObjectCommandOutput) => void): void;
  describeObject(
    args: DescribeObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectCommand}
   */
  getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
  getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
  getObject(
    args: GetObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListItemsCommand}
   */
  listItems(args: ListItemsCommandInput, options?: __HttpHandlerOptions): Promise<ListItemsCommandOutput>;
  listItems(args: ListItemsCommandInput, cb: (err: any, data?: ListItemsCommandOutput) => void): void;
  listItems(
    args: ListItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListItemsCommandOutput) => void
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
}

/**
 * @public
 * <p>An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3
 *          service. Objects are the fundamental entities that are stored in AWS Elemental
 *          MediaStore.</p>
 */
export class MediaStoreData extends MediaStoreDataClient implements MediaStoreData {}
createAggregatedClient(commands, MediaStoreData);
