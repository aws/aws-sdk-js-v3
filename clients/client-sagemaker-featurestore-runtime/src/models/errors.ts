// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  SageMakerFeatureStoreRuntimeServiceException as __BaseException,
} from "./SageMakerFeatureStoreRuntimeServiceException";

/**
 * You do not have permission to perform an action.
 *
 * @public
 */
export class AccessForbidden extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden";
  readonly name = "AccessForbidden" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessForbidden, __BaseException>) {
    super({
      name: "AccessForbidden",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessForbidden.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An internal failure occurred. Try your request again. If the problem persists, contact Amazon Web Services customer support.
 *
 * @public
 */
export class InternalFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure";
  readonly name = "InternalFailure" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailure, __BaseException>) {
    super({
      name: "InternalFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service is currently unavailable.
 *
 * @public
 */
export class ServiceUnavailable extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable";
  readonly name = "ServiceUnavailable" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailable, __BaseException>) {
    super({
      name: "ServiceUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    this.Message = opts.Message;
  }
}

/**
 * There was an error validating your request.
 *
 * @public
 */
export class ValidationError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError";
  readonly name = "ValidationError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationError, __BaseException>) {
    super({
      name: "ValidationError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A resource that is required to perform an action was not found.
 *
 * @public
 */
export class ResourceNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound";
  readonly name = "ResourceNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service rejected the update because the provided `EventTime` is older than the record's current `EventTime`. To persist the update, retrieve the record's latest `EventTime` and resubmit the request with an `EventTime` that is equal to or newer than the current value.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerfeaturestoreruntime#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}
