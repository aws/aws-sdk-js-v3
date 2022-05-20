// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApiGatewayManagementApiClient } from "./ApiGatewayManagementApiClient";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import {
  PostToConnectionCommand,
  PostToConnectionCommandInput,
  PostToConnectionCommandOutput,
} from "./commands/PostToConnectionCommand";

/**
 * <p>The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.</p>
 */
export class ApiGatewayManagementApi extends ApiGatewayManagementApiClient {
  /**
   * <p>Delete the connection with the provided id.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>Get information about the connection with the provided id.</p>
   */
  public getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  public getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionCommandOutput) => void
  ): Promise<GetConnectionCommandOutput> | void {
    const command = new GetConnectionCommand(args);
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
   * <p>Sends the provided data to the specified connection.</p>
   */
  public postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostToConnectionCommandOutput>;
  public postToConnection(
    args: PostToConnectionCommandInput,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
  public postToConnection(
    args: PostToConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
  public postToConnection(
    args: PostToConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PostToConnectionCommandOutput) => void),
    cb?: (err: any, data?: PostToConnectionCommandOutput) => void
  ): Promise<PostToConnectionCommandOutput> | void {
    const command = new PostToConnectionCommand(args);
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
