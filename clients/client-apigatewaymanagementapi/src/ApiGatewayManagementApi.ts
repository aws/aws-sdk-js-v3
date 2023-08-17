// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApiGatewayManagementApiClient, ApiGatewayManagementApiClientConfig } from "./ApiGatewayManagementApiClient";
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

const commands = {
  DeleteConnectionCommand,
  GetConnectionCommand,
  PostToConnectionCommand,
};

export interface ApiGatewayManagementApi {
  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostToConnectionCommandOutput>;
  postToConnection(
    args: PostToConnectionCommandInput,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
  postToConnection(
    args: PostToConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostToConnectionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://\{api-id\}.execute-api.\{region\}.amazonaws.com/\{stage\}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.</p>
 */
export class ApiGatewayManagementApi extends ApiGatewayManagementApiClient implements ApiGatewayManagementApi {}
createAggregatedClient(commands, ApiGatewayManagementApi);
