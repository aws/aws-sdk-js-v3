// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ResourceType, ValidationExceptionReason } from "./enums";
import { MarketplaceAgreementServiceException as __BaseException } from "./MarketplaceAgreementServiceException";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>User does not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.requestId = opts.requestId;
  }
}

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.requestId = opts.requestId;
  }
}

/**
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

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
    this.requestId = opts.requestId;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.requestId = opts.requestId;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier associated with the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The reason associated with the error.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The fields associated with the error.</p>
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.requestId = opts.requestId;
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}
