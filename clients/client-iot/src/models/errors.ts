// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";

/**
 * An unexpected error has occurred.
 *
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * The request is not valid.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * The specified resource does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ResourceNotFoundException";
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
 * The service is temporarily unavailable.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * The rate exceeds the limit.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ThrottlingException";
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
 * You can't revert the certificate transfer because the transfer is already complete.
 *
 * @public
 */
export class TransferAlreadyCompletedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#TransferAlreadyCompletedException";
  readonly name = "TransferAlreadyCompletedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferAlreadyCompletedException, __BaseException>) {
    super({
      name: "TransferAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferAlreadyCompletedException.prototype);
  }
}

/**
 * You are not authorized to perform this operation.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#UnauthorizedException";
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
 * The request conflicts with the current state of the resource.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * A resource with the same name already exists.
   *
   * @public
   */
  resourceId?: string | undefined;

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
    this.resourceId = opts.resourceId;
  }
}

/**
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InternalServerException";
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
 * Service quota has been exceeded.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ServiceQuotaExceededException";
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
 * The request is not valid.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ValidationException";
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
 * A limit has been exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#LimitExceededException";
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
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @public
 */
export class VersionConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#VersionConflictException";
  readonly name = "VersionConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionConflictException, __BaseException>) {
    super({
      name: "VersionConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionConflictException.prototype);
  }
}

/**
 * An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the `force` parameter.
 *
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InvalidStateTransitionException";
  readonly name = "InvalidStateTransitionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
  }
}

/**
 * A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.
 *
 * @public
 */
export class ConflictingResourceUpdateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ConflictingResourceUpdateException";
  readonly name = "ConflictingResourceUpdateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingResourceUpdateException, __BaseException>) {
    super({
      name: "ConflictingResourceUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingResourceUpdateException.prototype);
  }
}

/**
 * An unexpected error has occurred.
 *
 * @public
 */
export class InternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InternalException";
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * The resource already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource that caused the exception.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The ARN of the resource that caused the exception.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * The certificate is invalid.
 *
 * @public
 */
export class CertificateValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#CertificateValidationException";
  readonly name = "CertificateValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateValidationException, __BaseException>) {
    super({
      name: "CertificateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateValidationException.prototype);
  }
}

/**
 * The query is invalid.
 *
 * @public
 */
export class InvalidQueryException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InvalidQueryException";
  readonly name = "InvalidQueryException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryException, __BaseException>) {
    super({
      name: "InvalidQueryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryException.prototype);
  }
}

/**
 * The index is not ready.
 *
 * @public
 */
export class IndexNotReadyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#IndexNotReadyException";
  readonly name = "IndexNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IndexNotReadyException, __BaseException>) {
    super({
      name: "IndexNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IndexNotReadyException.prototype);
  }
}

/**
 * The aggregation is invalid.
 *
 * @public
 */
export class InvalidAggregationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InvalidAggregationException";
  readonly name = "InvalidAggregationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAggregationException, __BaseException>) {
    super({
      name: "InvalidAggregationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAggregationException.prototype);
  }
}

/**
 * The policy documentation is not valid.
 *
 * @public
 */
export class MalformedPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#MalformedPolicyException";
  readonly name = "MalformedPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyException, __BaseException>) {
    super({
      name: "MalformedPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyException.prototype);
  }
}

/**
 * The number of policy versions exceeds the limit.
 *
 * @public
 */
export class VersionsLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#VersionsLimitExceededException";
  readonly name = "VersionsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionsLimitExceededException, __BaseException>) {
    super({
      name: "VersionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionsLimitExceededException.prototype);
  }
}

/**
 * The Rule-SQL expression can't be parsed correctly.
 *
 * @public
 */
export class SqlParseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#SqlParseException";
  readonly name = "SqlParseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SqlParseException, __BaseException>) {
    super({
      name: "SqlParseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SqlParseException.prototype);
  }
}

/**
 * You can't delete the resource because it is attached to one or more resources.
 *
 * @public
 */
export class DeleteConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#DeleteConflictException";
  readonly name = "DeleteConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteConflictException, __BaseException>) {
    super({
      name: "DeleteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteConflictException.prototype);
  }
}

/**
 * The certificate operation is not allowed.
 *
 * @public
 */
export class CertificateStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#CertificateStateException";
  readonly name = "CertificateStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateStateException, __BaseException>) {
    super({
      name: "CertificateStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateStateException.prototype);
  }
}

/**
 * The resource is not configured.
 *
 * @public
 */
export class NotConfiguredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#NotConfiguredException";
  readonly name = "NotConfiguredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotConfiguredException, __BaseException>) {
    super({
      name: "NotConfiguredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotConfiguredException.prototype);
  }
}

/**
 * The registration code is invalid.
 *
 * @public
 */
export class RegistrationCodeValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#RegistrationCodeValidationException";
  readonly name = "RegistrationCodeValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistrationCodeValidationException, __BaseException>) {
    super({
      name: "RegistrationCodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistrationCodeValidationException.prototype);
  }
}

/**
 * Unable to verify the CA certificate used to sign the device certificate you are attempting to register. This is happens when you have registered more than one CA certificate that has the same subject field and public key.
 *
 * @public
 */
export class CertificateConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#CertificateConflictException";
  readonly name = "CertificateConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateConflictException, __BaseException>) {
    super({
      name: "CertificateConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateConflictException.prototype);
  }
}

/**
 * The resource registration failed.
 *
 * @public
 */
export class ResourceRegistrationFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#ResourceRegistrationFailureException";
  readonly name = "ResourceRegistrationFailureException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceRegistrationFailureException, __BaseException>) {
    super({
      name: "ResourceRegistrationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceRegistrationFailureException.prototype);
  }
}

/**
 * This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *
 * @public
 */
export class TaskAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#TaskAlreadyExistsException";
  readonly name = "TaskAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskAlreadyExistsException, __BaseException>) {
    super({
      name: "TaskAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskAlreadyExistsException.prototype);
  }
}

/**
 * The response is invalid.
 *
 * @public
 */
export class InvalidResponseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#InvalidResponseException";
  readonly name = "InvalidResponseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseException, __BaseException>) {
    super({
      name: "InvalidResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseException.prototype);
  }
}

/**
 * You can't transfer the certificate because authorization policies are still attached.
 *
 * @public
 */
export class TransferConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iot#TransferConflictException";
  readonly name = "TransferConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferConflictException, __BaseException>) {
    super({
      name: "TransferConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferConflictException.prototype);
  }
}
