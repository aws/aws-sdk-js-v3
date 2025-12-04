// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ResourceType, ServiceCode } from "./enums";
import { SSMIncidentsServiceException as __BaseException } from "./SSMIncidentsServiceException";

/**
 * <p>You don't have sufficient access to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>Request references a resource which doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier for the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
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
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * Originating service code
   * @public
   */
  serviceCode: ServiceCode | undefined;

  /**
   * Originating quota code
   * @public
   */
  quotaCode: string | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * If present in the output, the operation can be retried after this time
   * @public
   */
  retryAfter?: Date | undefined;

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
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
    this.retryAfter = opts.retryAfter;
  }
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier for the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * Originating service code
   * @public
   */
  serviceCode: ServiceCode | undefined;

  /**
   * Originating quota code
   * @public
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}
