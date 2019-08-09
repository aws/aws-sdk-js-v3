import { MediaStoreDataClient } from "./MediaStoreDataClient";
import { ContainerNotFoundException } from "./types/ContainerNotFoundException";
import { DeleteObjectInput } from "./types/DeleteObjectInput";
import { DeleteObjectOutput } from "./types/DeleteObjectOutput";
import { DescribeObjectInput } from "./types/DescribeObjectInput";
import { DescribeObjectOutput } from "./types/DescribeObjectOutput";
import { GetObjectInput } from "./types/GetObjectInput";
import { GetObjectOutput } from "./types/GetObjectOutput";
import { InternalServerError } from "./types/InternalServerError";
import { ListItemsInput } from "./types/ListItemsInput";
import { ListItemsOutput } from "./types/ListItemsOutput";
import { ObjectNotFoundException } from "./types/ObjectNotFoundException";
import { PutObjectInput } from "./types/PutObjectInput";
import { PutObjectOutput } from "./types/PutObjectOutput";
import { RequestedRangeNotSatisfiableException } from "./types/RequestedRangeNotSatisfiableException";
import { DeleteObjectCommand } from "./commands/DeleteObjectCommand";
import { DescribeObjectCommand } from "./commands/DescribeObjectCommand";
import { GetObjectCommand } from "./commands/GetObjectCommand";
import { ListItemsCommand } from "./commands/ListItemsCommand";
import { PutObjectCommand } from "./commands/PutObjectCommand";

export class MediaStoreData extends MediaStoreDataClient {
  /**
   * <p>Deletes an object at the specified path.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The specified container was not found for the specified account.</p>
   *   - {ObjectNotFoundException} <p>Could not perform an operation on an object that does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteObject(args: DeleteObjectInput): Promise<DeleteObjectOutput>;
  public deleteObject(
    args: DeleteObjectInput,
    cb: (err: any, data?: DeleteObjectOutput) => void
  ): void;
  public deleteObject(
    args: DeleteObjectInput,
    cb?: (err: any, data?: DeleteObjectOutput) => void
  ): Promise<DeleteObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the headers for an object at the specified path.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The specified container was not found for the specified account.</p>
   *   - {ObjectNotFoundException} <p>Could not perform an operation on an object that does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeObject(
    args: DescribeObjectInput
  ): Promise<DescribeObjectOutput>;
  public describeObject(
    args: DescribeObjectInput,
    cb: (err: any, data?: DescribeObjectOutput) => void
  ): void;
  public describeObject(
    args: DescribeObjectInput,
    cb?: (err: any, data?: DescribeObjectOutput) => void
  ): Promise<DescribeObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The specified container was not found for the specified account.</p>
   *   - {ObjectNotFoundException} <p>Could not perform an operation on an object that does not exist.</p>
   *   - {RequestedRangeNotSatisfiableException} <p>The requested content range is not valid.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObject(args: GetObjectInput): Promise<GetObjectOutput>;
  public getObject(
    args: GetObjectInput,
    cb: (err: any, data?: GetObjectOutput) => void
  ): void;
  public getObject(
    args: GetObjectInput,
    cb?: (err: any, data?: GetObjectOutput) => void
  ): Promise<GetObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of metadata entries about folders and objects in the specified folder.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The specified container was not found for the specified account.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listItems(args: ListItemsInput): Promise<ListItemsOutput>;
  public listItems(
    args: ListItemsInput,
    cb: (err: any, data?: ListItemsOutput) => void
  ): void;
  public listItems(
    args: ListItemsInput,
    cb?: (err: any, data?: ListItemsOutput) => void
  ): Promise<ListItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The specified container was not found for the specified account.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObject(args: PutObjectInput): Promise<PutObjectOutput>;
  public putObject(
    args: PutObjectInput,
    cb: (err: any, data?: PutObjectOutput) => void
  ): void;
  public putObject(
    args: PutObjectInput,
    cb?: (err: any, data?: PutObjectOutput) => void
  ): Promise<PutObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
