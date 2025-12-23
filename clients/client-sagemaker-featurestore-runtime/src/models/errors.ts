// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  SageMakerFeatureStoreRuntimeServiceException as __BaseException,
} from "./SageMakerFeatureStoreRuntimeServiceException";

/**
 * <p>You do not have permission to perform an action.</p>
 * @public
 */
export class AccessForbidden extends __BaseException {
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
 * <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
 * @public
 */
export class InternalFailure extends __BaseException {
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
 * <p>The service is currently unavailable.</p>
 * @public
 */
export class ServiceUnavailable extends __BaseException {
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
 * <p>There was an error validating your request.</p>
 * @public
 */
export class ValidationError extends __BaseException {
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
 * <p>A resource that is required to perform an action was not found.</p>
 * @public
 */
export class ResourceNotFound extends __BaseException {
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
