// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ApiGatewayManagementApiServiceException as __BaseException } from "./ApiGatewayManagementApiServiceException";

/**
 * The caller is not authorized to invoke this operation.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.apigatewaymanagementapi#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
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
 * The connection with the provided id no longer exists.
 *
 * @public
 */
export class GoneException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.apigatewaymanagementapi#GoneException";
  readonly name = "GoneException" as const;
  readonly $fault = "client" as const;
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
 * The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.apigatewaymanagementapi#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
 * The data has exceeded the maximum size allowed.
 *
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException";
  readonly name = "PayloadTooLargeException" as const;
  readonly $fault = "client" as const;
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
