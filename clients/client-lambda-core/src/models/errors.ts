// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ThrottleReason } from "./enums";
import { LambdaCoreServiceException as __BaseException } from "./LambdaCoreServiceException";

/**
 * <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The account has reached the maximum number of network connectors allowed. Delete unused connectors or request a limit increase through Service Quotas.</p>
 * @public
 */
export class NetworkConnectorLimitExceededException extends __BaseException {
  readonly name = "NetworkConnectorLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkConnectorLimitExceededException, __BaseException>) {
    super({
      name: "NetworkConnectorLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkConnectorLimitExceededException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to update a connector that is not in <code>ACTIVE</code> state.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: string | undefined;

  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The reason for the throttling.</p>
   * @public
   */
  Reason?: ThrottleReason | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
    this.Type = opts.Type;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The specified network connector does not exist. Verify the identifier (ID, name, or ARN) and Region.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}
