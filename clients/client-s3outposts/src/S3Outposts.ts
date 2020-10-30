import { S3OutpostsClient } from "./S3OutpostsClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
export class S3Outposts extends S3OutpostsClient {
  /**
   * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
   *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
   *             actions within your virtual private cloud (VPC). </p>
   *         <p>This action creates an endpoint and associates it with the specified Outpost. </p>
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
   * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
   *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
   *             actions within your virtual private cloud (VPC). </p>
   *         <p>This action deletes an endpoint.
   *             </p>
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
   * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
   *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
   *             actions within your virtual private cloud (VPC). </p>
   *         <p>This action lists endpoints associated with the Outpost.
   *             </p>
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
}
