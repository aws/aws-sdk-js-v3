// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FederationSourceErrorCode } from "./enums";
import { GlueServiceException as __BaseException } from "./GlueServiceException";

/**
 * <p>Access to a resource was denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource to be created or added already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A specified entity does not exist</p>
 * @public
 */
export class EntityNotFoundException extends __BaseException {
  readonly name = "EntityNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Indicates whether or not the exception relates to a federated source.</p>
   * @public
   */
  FromFederationSource?: boolean | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFoundException, __BaseException>) {
    super({
      name: "EntityNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
    this.Message = opts.Message;
    this.FromFederationSource = opts.FromFederationSource;
  }
}

/**
 * <p>An encryption operation failed.</p>
 * @public
 */
export class GlueEncryptionException extends __BaseException {
  readonly name = "GlueEncryptionException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlueEncryptionException, __BaseException>) {
    super({
      name: "GlueEncryptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlueEncryptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal service error occurred.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input provided was not valid.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Indicates whether or not the exception relates to a federated source.</p>
   * @public
   */
  FromFederationSource?: boolean | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
    this.FromFederationSource = opts.FromFederationSource;
  }
}

/**
 * <p>The operation timed out.</p>
 * @public
 */
export class OperationTimeoutException extends __BaseException {
  readonly name = "OperationTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationTimeoutException, __BaseException>) {
    super({
      name: "OperationTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource numerical limit was exceeded.</p>
 * @public
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  readonly name = "ResourceNumberLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNumberLimitExceededException, __BaseException>) {
    super({
      name: "ResourceNumberLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNumberLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource was not ready for a transaction.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A federation source failed.</p>
 * @public
 */
export class FederationSourceException extends __BaseException {
  readonly name = "FederationSourceException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code of the problem.</p>
   * @public
   */
  FederationSourceErrorCode?: FederationSourceErrorCode | undefined;

  /**
   * <p>The message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederationSourceException, __BaseException>) {
    super({
      name: "FederationSourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederationSourceException.prototype);
    this.FederationSourceErrorCode = opts.FederationSourceErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>A federation source failed, but the operation may be retried.</p>
 * @public
 */
export class FederationSourceRetryableException extends __BaseException {
  readonly name = "FederationSourceRetryableException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederationSourceRetryableException, __BaseException>) {
    super({
      name: "FederationSourceRetryableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederationSourceRetryableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error that indicates your data is in an invalid state.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The throttling threshhold was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The session is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalSessionStateException extends __BaseException {
  readonly name = "IllegalSessionStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalSessionStateException, __BaseException>) {
    super({
      name: "IllegalSessionStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalSessionStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A federated resource already exists.</p>
 * @public
 */
export class FederatedResourceAlreadyExistsException extends __BaseException {
  readonly name = "FederatedResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The associated Glue resource already exists.</p>
   * @public
   */
  AssociatedGlueResource?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FederatedResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "FederatedResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FederatedResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.AssociatedGlueResource = opts.AssociatedGlueResource;
  }
}

/**
 * <p>An exception thrown when you try to start another job while running a column stats generation job.</p>
 * @public
 */
export class ColumnStatisticsTaskRunningException extends __BaseException {
  readonly name = "ColumnStatisticsTaskRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskRunningException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The same unique identifier was associated with two different records.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A value could not be validated.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
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

/**
 * <p>The requested operation conflicts with another operation.</p>
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
  readonly name = "IntegrationConflictOperationFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictOperationFault, __BaseException>) {
    super({
      name: "IntegrationConflictOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictOperationFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The data processed through your integration exceeded your quota.</p>
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
  readonly name = "IntegrationQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationQuotaExceededFault, __BaseException>) {
    super({
      name: "IntegrationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationQuotaExceededFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal server error occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The KMS key specified is not accessible.</p>
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  readonly name = "KMSKeyNotAccessibleFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSKeyNotAccessibleFault, __BaseException>) {
    super({
      name: "KMSKeyNotAccessibleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSKeyNotAccessibleFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation is not available in the region.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name = "OperationNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 * @public
 */
export class CrawlerRunningException extends __BaseException {
  readonly name = "CrawlerRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerRunningException, __BaseException>) {
    super({
      name: "CrawlerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is transitioning.</p>
 * @public
 */
export class SchedulerTransitioningException extends __BaseException {
  readonly name = "SchedulerTransitioningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerTransitioningException, __BaseException>) {
    super({
      name: "SchedulerTransitioningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerTransitioningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified integration could not be found.</p>
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
  readonly name = "IntegrationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationNotFoundFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The integration is in an invalid state.</p>
 * @public
 */
export class InvalidIntegrationStateFault extends __BaseException {
  readonly name = "InvalidIntegrationStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIntegrationStateFault, __BaseException>) {
    super({
      name: "InvalidIntegrationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIntegrationStateFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A specified condition was not satisfied.</p>
 * @public
 */
export class ConditionCheckFailureException extends __BaseException {
  readonly name = "ConditionCheckFailureException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionCheckFailureException, __BaseException>) {
    super({
      name: "ConditionCheckFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionCheckFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The target resource could not be found.</p>
 * @public
 */
export class TargetResourceNotFound extends __BaseException {
  readonly name = "TargetResourceNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetResourceNotFound, __BaseException>) {
    super({
      name: "TargetResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetResourceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation timed out.</p>
 * @public
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name = "PermissionTypeMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>There is a mismatch between the SupportedPermissionType used in the query request
   *           and the permissions defined on the target table.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionTypeMismatchException, __BaseException>) {
    super({
      name: "PermissionTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionTypeMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 * @public
 */
export class ConcurrentRunsExceededException extends __BaseException {
  readonly name = "ConcurrentRunsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentRunsExceededException, __BaseException>) {
    super({
      name: "ConcurrentRunsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentRunsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalWorkflowStateException extends __BaseException {
  readonly name = "IllegalWorkflowStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalWorkflowStateException, __BaseException>) {
    super({
      name: "IllegalWorkflowStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalWorkflowStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The blueprint is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalBlueprintStateException extends __BaseException {
  readonly name = "IllegalBlueprintStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalBlueprintStateException, __BaseException>) {
    super({
      name: "IllegalBlueprintStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalBlueprintStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There is no applicable schedule.</p>
 * @public
 */
export class NoScheduleException extends __BaseException {
  readonly name = "NoScheduleException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoScheduleException, __BaseException>) {
    super({
      name: "NoScheduleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoScheduleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is already running.</p>
 * @public
 */
export class SchedulerRunningException extends __BaseException {
  readonly name = "SchedulerRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerRunningException, __BaseException>) {
    super({
      name: "SchedulerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 * @public
 */
export class MLTransformNotReadyException extends __BaseException {
  readonly name = "MLTransformNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MLTransformNotReadyException, __BaseException>) {
    super({
      name: "MLTransformNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MLTransformNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception thrown when you try to stop a task run when there is no task running.</p>
 * @public
 */
export class ColumnStatisticsTaskNotRunningException extends __BaseException {
  readonly name = "ColumnStatisticsTaskNotRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskNotRunningException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception thrown when you try to stop a task run.</p>
 * @public
 */
export class ColumnStatisticsTaskStoppingException extends __BaseException {
  readonly name = "ColumnStatisticsTaskStoppingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskStoppingException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskStoppingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified crawler is not running.</p>
 * @public
 */
export class CrawlerNotRunningException extends __BaseException {
  readonly name = "CrawlerNotRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerNotRunningException, __BaseException>) {
    super({
      name: "CrawlerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified crawler is stopping.</p>
 * @public
 */
export class CrawlerStoppingException extends __BaseException {
  readonly name = "CrawlerStoppingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerStoppingException, __BaseException>) {
    super({
      name: "CrawlerStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerStoppingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is not running.</p>
 * @public
 */
export class SchedulerNotRunningException extends __BaseException {
  readonly name = "SchedulerNotRunningException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerNotRunningException, __BaseException>) {
    super({
      name: "SchedulerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a version conflict.</p>
 * @public
 */
export class VersionMismatchException extends __BaseException {
  readonly name = "VersionMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}
