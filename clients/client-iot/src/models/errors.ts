// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
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
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
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
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
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
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
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
 * <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 * @public
 */
export class TransferAlreadyCompletedException extends __BaseException {
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
 * <p>You are not authorized to perform this operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
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
 * <p>The request conflicts with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A resource with the same name already exists.</p>
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
 * <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
 * <p>Service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
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
 * <p>The request is not valid.</p>
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
 * <p>A limit has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 * @public
 */
export class VersionConflictException extends __BaseException {
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
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
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
 * <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 * @public
 */
export class ConflictingResourceUpdateException extends __BaseException {
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
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalException extends __BaseException {
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
 * <p>The resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that caused the exception.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ARN of the resource that caused the exception.</p>
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
 * <p>The certificate is invalid.</p>
 * @public
 */
export class CertificateValidationException extends __BaseException {
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
 * <p>The query is invalid.</p>
 * @public
 */
export class InvalidQueryException extends __BaseException {
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
 * <p>The index is not ready.</p>
 * @public
 */
export class IndexNotReadyException extends __BaseException {
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
 * <p>The aggregation is invalid.</p>
 * @public
 */
export class InvalidAggregationException extends __BaseException {
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
 * <p>The policy documentation is not valid.</p>
 * @public
 */
export class MalformedPolicyException extends __BaseException {
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
 * <p>The number of policy versions exceeds the limit.</p>
 * @public
 */
export class VersionsLimitExceededException extends __BaseException {
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
 * <p>The Rule-SQL expression can't be parsed correctly.</p>
 * @public
 */
export class SqlParseException extends __BaseException {
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
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 * @public
 */
export class DeleteConflictException extends __BaseException {
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
 * <p>The certificate operation is not allowed.</p>
 * @public
 */
export class CertificateStateException extends __BaseException {
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
 * <p>The resource is not configured.</p>
 * @public
 */
export class NotConfiguredException extends __BaseException {
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
 * <p>The registration code is invalid.</p>
 * @public
 */
export class RegistrationCodeValidationException extends __BaseException {
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
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 * @public
 */
export class CertificateConflictException extends __BaseException {
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
 * <p>The resource registration failed.</p>
 * @public
 */
export class ResourceRegistrationFailureException extends __BaseException {
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
 * <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 * @public
 */
export class TaskAlreadyExistsException extends __BaseException {
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
 * <p>The response is invalid.</p>
 * @public
 */
export class InvalidResponseException extends __BaseException {
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
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 * @public
 */
export class TransferConflictException extends __BaseException {
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
