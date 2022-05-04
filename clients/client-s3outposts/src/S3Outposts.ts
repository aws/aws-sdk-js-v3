// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "./commands/ListEndpointsCommand";
import {
  ListSharedEndpointsCommand,
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
} from "./commands/ListSharedEndpointsCommand";
import { S3OutpostsClient } from "./S3OutpostsClient";

/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
export class S3Outposts extends S3OutpostsClient {
  /**
   * <p>Creates an endpoint and associates it with the specified Outpost.</p>
   *         <note>
   *             <p>It can take up to 5 minutes for this action to finish.</p>
   *          </note>
   *         <p></p>
   *         <p>Related actions include:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointCommandOutput) => void
  ): Promise<CreateEndpointCommandOutput> | void {
    const command = new CreateEndpointCommand(args);
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
   * <p>Deletes an endpoint.</p>
   *             <note>
   *             <p>It can take up to 5 minutes for this action to finish.</p>
   *          </note>
   *         <p></p>
   *         <p>Related actions include:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): Promise<DeleteEndpointCommandOutput> | void {
    const command = new DeleteEndpointCommand(args);
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
   * <p>Lists endpoints associated with the specified Outpost. </p>
   *         <p>Related actions include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointsCommandOutput>;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointsCommandOutput) => void
  ): Promise<ListEndpointsCommandOutput> | void {
    const command = new ListEndpointsCommand(args);
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
   * <p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p>
   *         <p>Related actions include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedEndpointsCommandOutput>;
  public listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;
  public listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;
  public listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSharedEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): Promise<ListSharedEndpointsCommandOutput> | void {
    const command = new ListSharedEndpointsCommand(args);
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
