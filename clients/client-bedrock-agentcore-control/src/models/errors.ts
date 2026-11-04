// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { BedrockAgentCoreControlServiceException as __BaseException } from "./BedrockAgentCoreControlServiceException";
import type { ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";

/**
 * This exception is thrown when a request is denied per access permissions
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#AccessDeniedException";
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
 * This exception is thrown when there is a conflict performing an operation
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#InternalServerException";
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
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception is thrown when a request is made beyond the service quota
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The input fails to satisfy the constraints specified by the service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  reason: ValidationExceptionReason | undefined;
  fieldList?: ValidationExceptionField[] | undefined;
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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * Exception thrown when decryption of a secret fails.
 *
 * @public
 */
export class DecryptionFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#DecryptionFailure";
  readonly name = "DecryptionFailure" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DecryptionFailure, __BaseException>) {
    super({
      name: "DecryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DecryptionFailure.prototype);
  }
}

/**
 * Exception thrown when encryption of a secret fails.
 *
 * @public
 */
export class EncryptionFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#EncryptionFailure";
  readonly name = "EncryptionFailure" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionFailure, __BaseException>) {
    super({
      name: "EncryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionFailure.prototype);
  }
}

/**
 * Exception thrown when a resource limit is exceeded.
 *
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ResourceLimitExceededException";
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
  }
}

/**
 * This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * The operation failed because of a conflicting request. Retry the request.
 *
 * @public
 */
export class RetryableConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#RetryableConflictException";
  readonly name = "RetryableConflictException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryableConflictException, __BaseException>) {
    super({
      name: "RetryableConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryableConflictException.prototype);
  }
}

/**
 * An internal error occurred.
 *
 * @public
 */
export class ServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ServiceException";
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
  }
}

/**
 * API rate limit has been exceeded.
 *
 * @public
 */
export class ThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ThrottledException";
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
  }
}

/**
 * The request failed because it requires an active Amazon Web Services Marketplace subscription that is not present. Subscribe to the required product in Amazon Web Services Marketplace and try again.
 *
 * @public
 */
export class SubscriptionRequiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#SubscriptionRequiredException";
  readonly name = "SubscriptionRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * URL to the Marketplace listing for subscription
   * @public
   */
  subscriptionUrl?: string | undefined;

  /**
   * The product requiring subscription
   * @public
   */
  productName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionRequiredException, __BaseException>) {
    super({
      name: "SubscriptionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionRequiredException.prototype);
    this.subscriptionUrl = opts.subscriptionUrl;
    this.productName = opts.productName;
  }
}

/**
 * Exception thrown when a resource is modified concurrently by multiple requests.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockagentcorecontrol#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}
