// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ThrottleReason } from "./enums";
import { LambdaCoreServiceException as __BaseException } from "./LambdaCoreServiceException";

/**
 * One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * The exception type.
   *
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
 * The request would exceed a network connector limit. For `CreateNetworkConnector`, the account has reached the maximum number of network connectors allowed. For `UpdateNetworkConnector`, the connector has reached the maximum number of versions allowed.
 *
 * @public
 */
export class NetworkConnectorLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#NetworkConnectorLimitExceededException";
  readonly name = "NetworkConnectorLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The exception type.
   *
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
 * The request could not be completed due to a conflict with the current state of the resource. For example, attempting to update a connector that is not in `ACTIVE` state.
 *
 * @public
 */
export class ResourceConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#ResourceConflictException";
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The exception type.
   *
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
 * An internal service error occurred. Retry the request with exponential backoff.
 *
 * @public
 */
export class ServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#ServiceException";
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * The exception type.
   *
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
 * The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * The number of seconds to wait before retrying the request.
   *
   * @public
   */
  retryAfterSeconds?: string | undefined;

  /**
   * The exception type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The reason for the throttling.
   *
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
 * The specified network connector does not exist. Verify the identifier (ID, name, or ARN) and Region.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lambdacore#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The exception type.
   *
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
