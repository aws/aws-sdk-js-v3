// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApiGatewayManagementApiServiceException as __BaseException } from "./ApiGatewayManagementApiServiceException";

/**
 * @public
 */
export interface DeleteConnectionRequest {
  ConnectionId: string | undefined;
}

/**
 * <p>The caller is not authorized to invoke this operation.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p>The connection with the provided id no longer exists.</p>
 * @public
 */
export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GoneException, __BaseException>) {
    super({
      name: "GoneException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GoneException.prototype);
  }
}

/**
 * <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface GetConnectionRequest {
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface Identity {
  /**
   * <p>The source IP address of the TCP connection making the request to API Gateway.</p>
   * @public
   */
  SourceIp: string | undefined;

  /**
   * <p>The User Agent of the API caller.</p>
   * @public
   */
  UserAgent: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The time in ISO 8601 format for when the connection was established.</p>
   * @public
   */
  ConnectedAt?: Date | undefined;

  Identity?: Identity | undefined;
  /**
   * <p>The time in ISO 8601 format for when the connection was last active.</p>
   * @public
   */
  LastActiveAt?: Date | undefined;
}

/**
 * <p>The data has exceeded the maximum size allowed.</p>
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PostToConnectionRequest {
  /**
   * <p>The data to be sent to the client specified by its connection id.</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>The identifier of the connection that a specific client is using.</p>
   * @public
   */
  ConnectionId: string | undefined;
}
