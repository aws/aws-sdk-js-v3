// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AmplifyBackendServiceException as __BaseException } from "./AmplifyBackendServiceException";

/**
 * <p>An error returned if a request is not formed properly.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error message to inform that the request failed.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error returned if there's a temporary issue with the service.</p>
 * @public
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name = "GatewayTimeoutException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>An error message to inform that the request failed.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayTimeoutException, __BaseException>) {
    super({
      name: "GatewayTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error returned when a specific resource type is not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error message to inform that the request has failed.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The type of resource that is not found.</p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The type of limit that was exceeded.</p>
   * @public
   */
  LimitType?: string | undefined;

  /**
   * <p>An error message to inform that the request has failed.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}
