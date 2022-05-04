// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { MediaStoreDataClient } from "./MediaStoreDataClient";

/**
 * <p>An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3
 *          service. Objects are the fundamental entities that are stored in AWS Elemental
 *          MediaStore.</p>
 */
export class MediaStoreData extends MediaStoreDataClient {
  /**
   * <p>Deletes an object at the specified path.</p>
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
   * <p>Gets the headers for an object at the specified path.</p>
   */
  public describeObject(
    args: DescribeObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObjectCommandOutput>;
  public describeObject(
    args: DescribeObjectCommandInput,
    cb: (err: any, data?: DescribeObjectCommandOutput) => void
  ): void;
  public describeObject(
    args: DescribeObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObjectCommandOutput) => void
  ): void;
  public describeObject(
    args: DescribeObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeObjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeObjectCommandOutput) => void
  ): Promise<DescribeObjectCommandOutput> | void {
    const command = new DescribeObjectCommand(args);
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
   * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
   */
  public getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
  public getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
  public getObject(
    args: GetObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectCommandOutput) => void
  ): void;
  public getObject(
    args: GetObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetObjectCommandOutput) => void),
    cb?: (err: any, data?: GetObjectCommandOutput) => void
  ): Promise<GetObjectCommandOutput> | void {
    const command = new GetObjectCommand(args);
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
   * <p>Provides a list of metadata entries about folders and objects in the specified
   *          folder.</p>
   */
  public listItems(args: ListItemsCommandInput, options?: __HttpHandlerOptions): Promise<ListItemsCommandOutput>;
  public listItems(args: ListItemsCommandInput, cb: (err: any, data?: ListItemsCommandOutput) => void): void;
  public listItems(
    args: ListItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListItemsCommandOutput) => void
  ): void;
  public listItems(
    args: ListItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListItemsCommandOutput) => void),
    cb?: (err: any, data?: ListItemsCommandOutput) => void
  ): Promise<ListItemsCommandOutput> | void {
    const command = new ListItemsCommand(args);
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
   * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
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
}
