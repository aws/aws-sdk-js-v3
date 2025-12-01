// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { StorageGatewayError } from "./models_0";
import { StorageGatewayServiceException as __BaseException } from "./StorageGatewayServiceException";

/**
 * <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.error = opts.error;
  }
}

/**
 * <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 * @public
 */
export class InvalidGatewayRequestException extends __BaseException {
  readonly name = "InvalidGatewayRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A <a>StorageGatewayError</a> that provides more detail about the cause of the
   *          error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGatewayRequestException, __BaseException>) {
    super({
      name: "InvalidGatewayRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGatewayRequestException.prototype);
    this.error = opts.error;
  }
}

/**
 * <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
  readonly name = "ServiceUnavailableError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A <a>StorageGatewayError</a> that provides more information about the cause
   *          of the error.</p>
   * @public
   */
  error?: StorageGatewayError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableError, __BaseException>) {
    super({
      name: "ServiceUnavailableError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    this.error = opts.error;
  }
}
