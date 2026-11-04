// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * The requester doesn't have permissions to perform the requested operation.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * An error occurred on the server side.
 *
 * @public
 */
export class InternalServerError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InternalServerError";
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource ID isn't valid. Verify that you entered the correct ID and try again.
 *
 * @public
 */
export class InvalidResourceId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidResourceId";
  readonly name = "InvalidResourceId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceId, __BaseException>) {
    super({
      name: "InvalidResourceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceId.prototype);
  }
}

/**
 * The resource type isn't valid. For example, if you are attempting to tag an EC2 instance, the instance must be a registered managed node.
 *
 * @public
 */
export class InvalidResourceType extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidResourceType";
  readonly name = "InvalidResourceType" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceType, __BaseException>) {
    super({
      name: "InvalidResourceType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceType.prototype);
  }
}

/**
 * The `Targets` parameter includes too many tags. Remove one or more tags and try the command again.
 *
 * @public
 */
export class TooManyTagsError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#TooManyTagsError";
  readonly name = "TooManyTagsError" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsError, __BaseException>) {
    super({
      name: "TooManyTagsError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsError.prototype);
  }
}

/**
 * There are concurrent updates for a resource that supports one update at a time.
 *
 * @public
 */
export class TooManyUpdates extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#TooManyUpdates";
  readonly name = "TooManyUpdates" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyUpdates, __BaseException>) {
    super({
      name: "TooManyUpdates",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyUpdates.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error returned if an attempt is made to register a patch group with a patch baseline that is already registered with a different patch baseline.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
 * The specified OpsItem is in the process of being deleted.
 *
 * @public
 */
export class OpsItemConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemConflictException";
  readonly name = "OpsItemConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemConflictException, __BaseException>) {
    super({
      name: "OpsItemConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A specified parameter argument isn't valid. Verify the available arguments and try again.
 *
 * @public
 */
export class OpsItemInvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemInvalidParameterException";
  readonly name = "OpsItemInvalidParameterException" as const;
  readonly $fault = "client" as const;
  ParameterNames?: string[] | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemInvalidParameterException, __BaseException>) {
    super({
      name: "OpsItemInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemInvalidParameterException.prototype);
    this.ParameterNames = opts.ParameterNames;
    this.Message = opts.Message;
  }
}

/**
 * The request caused OpsItems to exceed one or more quotas.
 *
 * @public
 */
export class OpsItemLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemLimitExceededException";
  readonly name = "OpsItemLimitExceededException" as const;
  readonly $fault = "client" as const;
  ResourceTypes?: string[] | undefined;
  Limit?: number | undefined;
  LimitType?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemLimitExceededException, __BaseException>) {
    super({
      name: "OpsItemLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemLimitExceededException.prototype);
    this.ResourceTypes = opts.ResourceTypes;
    this.Limit = opts.Limit;
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * The specified OpsItem ID doesn't exist. Verify the ID and try again.
 *
 * @public
 */
export class OpsItemNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemNotFoundException";
  readonly name = "OpsItemNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemNotFoundException, __BaseException>) {
    super({
      name: "OpsItemNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The Amazon Resource Name (ARN) is already associated with the OpsItem.
 *
 * @public
 */
export class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemRelatedItemAlreadyExistsException";
  readonly name = "OpsItemRelatedItemAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  ResourceUri?: string | undefined;
  OpsItemId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemRelatedItemAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsItemRelatedItemAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemRelatedItemAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceUri = opts.ResourceUri;
    this.OpsItemId = opts.OpsItemId;
  }
}

/**
 * You can't specify a managed node ID in more than one association.
 *
 * @public
 */
export class DuplicateInstanceId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DuplicateInstanceId";
  readonly name = "DuplicateInstanceId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateInstanceId, __BaseException>) {
    super({
      name: "DuplicateInstanceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateInstanceId.prototype);
  }
}

/**
 * The specified command ID isn't valid. Verify the ID and try again.
 *
 * @public
 */
export class InvalidCommandId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidCommandId";
  readonly name = "InvalidCommandId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommandId, __BaseException>) {
    super({
      name: "InvalidCommandId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommandId.prototype);
  }
}

/**
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @public
 */
export class InvalidInstanceId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInstanceId";
  readonly name = "InvalidInstanceId" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceId, __BaseException>) {
    super({
      name: "InvalidInstanceId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceId.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @public
 */
export class DoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DoesNotExistException";
  readonly name = "DoesNotExistException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DoesNotExistException, __BaseException>) {
    super({
      name: "DoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DoesNotExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM document). You can only supply values to parameters defined in the SSM document.
 *
 * @public
 */
export class InvalidParameters extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidParameters";
  readonly name = "InvalidParameters" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameters, __BaseException>) {
    super({
      name: "InvalidParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified association already exists.
 *
 * @public
 */
export class AssociationAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociationAlreadyExists";
  readonly name = "AssociationAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationAlreadyExists, __BaseException>) {
    super({
      name: "AssociationAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationAlreadyExists.prototype);
  }
}

/**
 * You can have at most 2,000 active associations.
 *
 * @public
 */
export class AssociationLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociationLimitExceeded";
  readonly name = "AssociationLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationLimitExceeded, __BaseException>) {
    super({
      name: "AssociationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationLimitExceeded.prototype);
  }
}

/**
 * The specified SSM document doesn't exist.
 *
 * @public
 */
export class InvalidDocument extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocument";
  readonly name = "InvalidDocument" as const;
  readonly $fault = "client" as const;
  /**
   * The SSM document doesn't exist or the document isn't available to the user. This exception can be issued by various API operations.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocument, __BaseException>) {
    super({
      name: "InvalidDocument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocument.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The document version isn't valid or doesn't exist.
 *
 * @public
 */
export class InvalidDocumentVersion extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocumentVersion";
  readonly name = "InvalidDocumentVersion" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentVersion, __BaseException>) {
    super({
      name: "InvalidDocumentVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The output location isn't valid or doesn't exist.
 *
 * @public
 */
export class InvalidOutputLocation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidOutputLocation";
  readonly name = "InvalidOutputLocation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutputLocation, __BaseException>) {
    super({
      name: "InvalidOutputLocation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutputLocation.prototype);
  }
}

/**
 * The schedule is invalid. Verify your cron or rate expression and try again.
 *
 * @public
 */
export class InvalidSchedule extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidSchedule";
  readonly name = "InvalidSchedule" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchedule, __BaseException>) {
    super({
      name: "InvalidSchedule",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchedule.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified tag key or value isn't valid.
 *
 * @public
 */
export class InvalidTag extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidTag";
  readonly name = "InvalidTag" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTag, __BaseException>) {
    super({
      name: "InvalidTag",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTag.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might not have permission to perform the operation.
 *
 * @public
 */
export class InvalidTarget extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidTarget";
  readonly name = "InvalidTarget" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTarget, __BaseException>) {
    super({
      name: "InvalidTarget",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTarget.prototype);
    this.Message = opts.Message;
  }
}

/**
 * TargetMap parameter isn't valid.
 *
 * @public
 */
export class InvalidTargetMaps extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidTargetMaps";
  readonly name = "InvalidTargetMaps" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetMaps, __BaseException>) {
    super({
      name: "InvalidTargetMaps",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetMaps.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The document doesn't support the platform type of the given managed node IDs. For example, you sent an document for a Windows managed node to a Linux node.
 *
 * @public
 */
export class UnsupportedPlatformType extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedPlatformType";
  readonly name = "UnsupportedPlatformType" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlatformType, __BaseException>) {
    super({
      name: "UnsupportedPlatformType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlatformType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An error occurred because of a conflict with a concurrent request or the current state of the resource. Retry your request.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ConflictException";
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

/**
 * The request exceeds the service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * The unique ID of the resource referenced in the failed request.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type of the resource referenced in the failed request.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The quota code recognized by the Amazon Web Services Service Quotas service.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * The code for the Amazon Web Services service that owns the quota.
   *
   * @public
   */
  ServiceCode: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * The specified document already exists.
 *
 * @public
 */
export class DocumentAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DocumentAlreadyExists";
  readonly name = "DocumentAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentAlreadyExists, __BaseException>) {
    super({
      name: "DocumentAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You can have at most 500 active SSM documents.
 *
 * @public
 */
export class DocumentLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DocumentLimitExceeded";
  readonly name = "DocumentLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentLimitExceeded, __BaseException>) {
    super({
      name: "DocumentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The content for the document isn't valid.
 *
 * @public
 */
export class InvalidDocumentContent extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocumentContent";
  readonly name = "InvalidDocumentContent" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the validation error.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentContent, __BaseException>) {
    super({
      name: "InvalidDocumentContent",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentContent.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The version of the document schema isn't supported.
 *
 * @public
 */
export class InvalidDocumentSchemaVersion extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocumentSchemaVersion";
  readonly name = "InvalidDocumentSchemaVersion" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentSchemaVersion, __BaseException>) {
    super({
      name: "InvalidDocumentSchemaVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentSchemaVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The size limit of a document is 64 KB.
 *
 * @public
 */
export class MaxDocumentSizeExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#MaxDocumentSizeExceeded";
  readonly name = "MaxDocumentSizeExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxDocumentSizeExceeded, __BaseException>) {
    super({
      name: "MaxDocumentSizeExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxDocumentSizeExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The requested operation is no longer supported by Systems Manager.
 *
 * @public
 */
export class NoLongerSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#NoLongerSupportedException";
  readonly name = "NoLongerSupportedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoLongerSupportedException, __BaseException>) {
    super({
      name: "NoLongerSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoLongerSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token.
 *
 * @public
 */
export class IdempotentParameterMismatch extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#IdempotentParameterMismatch";
  readonly name = "IdempotentParameterMismatch" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatch, __BaseException>) {
    super({
      name: "IdempotentParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error returned when the caller has exceeded the default resource quotas. For example, too many maintenance windows or patch baselines have been created.
 *
 * For information about resource quotas in Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceLimitExceededException";
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * You don't have permission to view OpsItems in the specified account. Verify that your account is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations management account.
 *
 * @public
 */
export class OpsItemAccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemAccessDeniedException";
  readonly name = "OpsItemAccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemAccessDeniedException, __BaseException>) {
    super({
      name: "OpsItemAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The OpsItem already exists.
 *
 * @public
 */
export class OpsItemAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemAlreadyExistsException";
  readonly name = "OpsItemAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  OpsItemId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsItemAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.OpsItemId = opts.OpsItemId;
  }
}

/**
 * An OpsMetadata object already exists for the selected resource.
 *
 * @public
 */
export class OpsMetadataAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataAlreadyExistsException";
  readonly name = "OpsMetadataAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataAlreadyExistsException, __BaseException>) {
    super({
      name: "OpsMetadataAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataAlreadyExistsException.prototype);
  }
}

/**
 * One of the arguments passed is invalid.
 *
 * @public
 */
export class OpsMetadataInvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataInvalidArgumentException";
  readonly name = "OpsMetadataInvalidArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataInvalidArgumentException, __BaseException>) {
    super({
      name: "OpsMetadataInvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataInvalidArgumentException.prototype);
  }
}

/**
 * Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.
 *
 * @public
 */
export class OpsMetadataLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataLimitExceededException";
  readonly name = "OpsMetadataLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataLimitExceededException, __BaseException>) {
    super({
      name: "OpsMetadataLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataLimitExceededException.prototype);
  }
}

/**
 * The system is processing too many concurrent updates. Wait a few moments and try again.
 *
 * @public
 */
export class OpsMetadataTooManyUpdatesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException";
  readonly name = "OpsMetadataTooManyUpdatesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataTooManyUpdatesException, __BaseException>) {
    super({
      name: "OpsMetadataTooManyUpdatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataTooManyUpdatesException.prototype);
  }
}

/**
 * A sync configuration with the same name already exists.
 *
 * @public
 */
export class ResourceDataSyncAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceDataSyncAlreadyExistsException";
  readonly name = "ResourceDataSyncAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  SyncName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceDataSyncAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncAlreadyExistsException.prototype);
    this.SyncName = opts.SyncName;
  }
}

/**
 * You have exceeded the allowed maximum sync configurations.
 *
 * @public
 */
export class ResourceDataSyncCountExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceDataSyncCountExceededException";
  readonly name = "ResourceDataSyncCountExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncCountExceededException, __BaseException>) {
    super({
      name: "ResourceDataSyncCountExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncCountExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified sync configuration is invalid.
 *
 * @public
 */
export class ResourceDataSyncInvalidConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException";
  readonly name = "ResourceDataSyncInvalidConfigurationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncInvalidConfigurationException, __BaseException>) {
    super({
      name: "ResourceDataSyncInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncInvalidConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The activation isn't valid. The activation might have been deleted, or the ActivationId and the ActivationCode don't match.
 *
 * @public
 */
export class InvalidActivation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidActivation";
  readonly name = "InvalidActivation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActivation, __BaseException>) {
    super({
      name: "InvalidActivation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActivation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The activation ID isn't valid. Verify that you entered the correct ActivationId or ActivationCode and try again.
 *
 * @public
 */
export class InvalidActivationId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidActivationId";
  readonly name = "InvalidActivationId" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActivationId, __BaseException>) {
    super({
      name: "InvalidActivationId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActivationId.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified association doesn't exist.
 *
 * @public
 */
export class AssociationDoesNotExist extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociationDoesNotExist";
  readonly name = "AssociationDoesNotExist" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationDoesNotExist, __BaseException>) {
    super({
      name: "AssociationDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified parameter to be shared could not be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * You must disassociate a document from all managed nodes before you can delete it.
 *
 * @public
 */
export class AssociatedInstances extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociatedInstances";
  readonly name = "AssociatedInstances" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedInstances, __BaseException>) {
    super({
      name: "AssociatedInstances",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedInstances.prototype);
  }
}

/**
 * You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.
 *
 * @public
 */
export class InvalidDocumentOperation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocumentOperation";
  readonly name = "InvalidDocumentOperation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentOperation, __BaseException>) {
    super({
      name: "InvalidDocumentOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more of the parameters specified for the delete operation isn't valid. Verify all parameters and try again.
 *
 * @public
 */
export class InvalidDeleteInventoryParametersException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDeleteInventoryParametersException";
  readonly name = "InvalidDeleteInventoryParametersException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeleteInventoryParametersException, __BaseException>) {
    super({
      name: "InvalidDeleteInventoryParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeleteInventoryParametersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request isn't valid.
 *
 * @public
 */
export class InvalidInventoryRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInventoryRequestException";
  readonly name = "InvalidInventoryRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryRequestException, __BaseException>) {
    super({
      name: "InvalidInventoryRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The delete inventory option specified isn't valid. Verify the option and try again.
 *
 * @public
 */
export class InvalidOptionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidOptionException";
  readonly name = "InvalidOptionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOptionException, __BaseException>) {
    super({
      name: "InvalidOptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The parameter type name isn't valid.
 *
 * @public
 */
export class InvalidTypeNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidTypeNameException";
  readonly name = "InvalidTypeNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeNameException, __BaseException>) {
    super({
      name: "InvalidTypeNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The OpsMetadata object doesn't exist.
 *
 * @public
 */
export class OpsMetadataNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataNotFoundException";
  readonly name = "OpsMetadataNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataNotFoundException, __BaseException>) {
    super({
      name: "OpsMetadataNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataNotFoundException.prototype);
  }
}

/**
 * The parameter couldn't be found. Verify the name and try again.
 *
 * > **Note:** For the `DeleteParameter` and `GetParameter` actions, if the specified parameter doesn't exist, the `ParameterNotFound` exception is *not* recorded in CloudTrail event logs.
 *
 * @public
 */
export class ParameterNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterNotFound";
  readonly name = "ParameterNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterNotFound, __BaseException>) {
    super({
      name: "ParameterNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterNotFound.prototype);
  }
}

/**
 * Error returned if an attempt is made to delete a patch baseline that is registered for a patch group.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified sync name wasn't found.
 *
 * @public
 */
export class ResourceDataSyncNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceDataSyncNotFoundException";
  readonly name = "ResourceDataSyncNotFoundException" as const;
  readonly $fault = "client" as const;
  SyncName?: string | undefined;
  SyncType?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncNotFoundException, __BaseException>) {
    super({
      name: "ResourceDataSyncNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncNotFoundException.prototype);
    this.SyncName = opts.SyncName;
    this.SyncType = opts.SyncType;
    this.Message = opts.Message;
  }
}

/**
 * The specified policy document is malformed or invalid, or excessive `PutResourcePolicy` or `DeleteResourcePolicy` calls have been made.
 *
 * @public
 */
export class MalformedResourcePolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#MalformedResourcePolicyDocumentException";
  readonly name = "MalformedResourcePolicyDocumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedResourcePolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedResourcePolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedResourcePolicyDocumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The hash provided in the call doesn't match the stored hash. This exception is thrown when trying to update an obsolete policy version or when multiple requests to update a policy are sent.
 *
 * @public
 */
export class ResourcePolicyConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourcePolicyConflictException";
  readonly name = "ResourcePolicyConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyConflictException, __BaseException>) {
    super({
      name: "ResourcePolicyConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more parameters specified for the call aren't valid. Verify the parameters and their values and try again.
 *
 * @public
 */
export class ResourcePolicyInvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourcePolicyInvalidParameterException";
  readonly name = "ResourcePolicyInvalidParameterException" as const;
  readonly $fault = "client" as const;
  ParameterNames?: string[] | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyInvalidParameterException, __BaseException>) {
    super({
      name: "ResourcePolicyInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyInvalidParameterException.prototype);
    this.ParameterNames = opts.ParameterNames;
    this.Message = opts.Message;
  }
}

/**
 * No policies with the specified policy ID and hash could be found.
 *
 * @public
 */
export class ResourcePolicyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourcePolicyNotFoundException";
  readonly name = "ResourcePolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyNotFoundException, __BaseException>) {
    super({
      name: "ResourcePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You specified the `Safe` option for the DeregisterTargetFromMaintenanceWindow operation, but the target is still referenced in a task.
 *
 * @public
 */
export class TargetInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#TargetInUseException";
  readonly name = "TargetInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetInUseException, __BaseException>) {
    super({
      name: "TargetInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The filter name isn't valid. Verify that you entered the correct name and try again.
 *
 * @public
 */
export class InvalidFilter extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidFilter";
  readonly name = "InvalidFilter" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilter, __BaseException>) {
    super({
      name: "InvalidFilter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilter.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified token isn't valid.
 *
 * @public
 */
export class InvalidNextToken extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidNextToken";
  readonly name = "InvalidNextToken" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The version you specified isn't valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the `$LATEST` parameter to view the latest version of the association.
 *
 * @public
 */
export class InvalidAssociationVersion extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAssociationVersion";
  readonly name = "InvalidAssociationVersion" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAssociationVersion, __BaseException>) {
    super({
      name: "InvalidAssociationVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAssociationVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified execution ID doesn't exist. Verify the ID number and try again.
 *
 * @public
 */
export class AssociationExecutionDoesNotExist extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociationExecutionDoesNotExist";
  readonly name = "AssociationExecutionDoesNotExist" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationExecutionDoesNotExist, __BaseException>) {
    super({
      name: "AssociationExecutionDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationExecutionDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified key isn't valid.
 *
 * @public
 */
export class InvalidFilterKey extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidFilterKey";
  readonly name = "InvalidFilterKey" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterKey, __BaseException>) {
    super({
      name: "InvalidFilterKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterKey.prototype);
  }
}

/**
 * The filter value isn't valid. Verify the value and try again.
 *
 * @public
 */
export class InvalidFilterValue extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidFilterValue";
  readonly name = "InvalidFilterValue" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterValue, __BaseException>) {
    super({
      name: "InvalidFilterValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterValue.prototype);
    this.Message = opts.Message;
  }
}

/**
 * There is no automation execution information for the requested automation execution ID.
 *
 * @public
 */
export class AutomationExecutionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationExecutionNotFoundException";
  readonly name = "AutomationExecutionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionNotFoundException, __BaseException>) {
    super({
      name: "AutomationExecutionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The permission type isn't supported. *Share* is the only supported permission type.
 *
 * @public
 */
export class InvalidPermissionType extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidPermissionType";
  readonly name = "InvalidPermissionType" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPermissionType, __BaseException>) {
    super({
      name: "InvalidPermissionType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPermissionType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The operating systems you specified isn't supported, or the operation isn't supported for the operating system.
 *
 * @public
 */
export class UnsupportedOperatingSystem extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedOperatingSystem";
  readonly name = "UnsupportedOperatingSystem" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperatingSystem, __BaseException>) {
    super({
      name: "UnsupportedOperatingSystem",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperatingSystem.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified filter value isn't valid.
 *
 * @public
 */
export class InvalidInstanceInformationFilterValue extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInstanceInformationFilterValue";
  readonly name = "InvalidInstanceInformationFilterValue" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceInformationFilterValue, __BaseException>) {
    super({
      name: "InvalidInstanceInformationFilterValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceInformationFilterValue.prototype);
  }
}

/**
 * The specified filter value isn't valid.
 *
 * @public
 */
export class InvalidInstancePropertyFilterValue extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInstancePropertyFilterValue";
  readonly name = "InvalidInstancePropertyFilterValue" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstancePropertyFilterValue, __BaseException>) {
    super({
      name: "InvalidInstancePropertyFilterValue",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstancePropertyFilterValue.prototype);
  }
}

/**
 * The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and try again.
 *
 * @public
 */
export class InvalidDeletionIdException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDeletionIdException";
  readonly name = "InvalidDeletionIdException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeletionIdException, __BaseException>) {
    super({
      name: "InvalidDeletionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeletionIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.
 *
 * @public
 */
export class InvalidFilterOption extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidFilterOption";
  readonly name = "InvalidFilterOption" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterOption, __BaseException>) {
    super({
      name: "InvalidFilterOption",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterOption.prototype);
  }
}

/**
 * The association wasn't found using the parameters you specified in the call. Verify the information and try again.
 *
 * @public
 */
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsItemRelatedItemAssociationNotFoundException";
  readonly name = "OpsItemRelatedItemAssociationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsItemRelatedItemAssociationNotFoundException, __BaseException>) {
    super({
      name: "OpsItemRelatedItemAssociationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsItemRelatedItemAssociationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request or operation couldn't be performed because the service is throttling requests.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * The quota code recognized by the Amazon Web Services Service Quotas service.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * The code for the Amazon Web Services service that owns the quota.
   *
   * @public
   */
  ServiceCode?: string | undefined;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * The request isn't valid. Verify that you entered valid contents for the command and try again.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The reason code for the invalid request.
   *
   * @public
   */
  ReasonCode?: string | undefined;
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
    this.ReasonCode = opts.ReasonCode;
  }
}

/**
 * The SSM document type isn't valid. Valid document types are described in the `DocumentType` property.
 *
 * @public
 */
export class InvalidDocumentType extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidDocumentType";
  readonly name = "InvalidDocumentType" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDocumentType, __BaseException>) {
    super({
      name: "InvalidDocumentType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDocumentType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The calendar entry contained in the specified SSM document isn't supported.
 *
 * @public
 */
export class UnsupportedCalendarException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedCalendarException";
  readonly name = "UnsupportedCalendarException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedCalendarException, __BaseException>) {
    super({
      name: "UnsupportedCalendarException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedCalendarException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The plugin name isn't valid.
 *
 * @public
 */
export class InvalidPluginName extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidPluginName";
  readonly name = "InvalidPluginName" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPluginName, __BaseException>) {
    super({
      name: "InvalidPluginName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPluginName.prototype);
  }
}

/**
 * The command ID and managed node ID you specified didn't match any invocations. Verify the command ID and the managed node ID and try again.
 *
 * @public
 */
export class InvocationDoesNotExist extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvocationDoesNotExist";
  readonly name = "InvocationDoesNotExist" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvocationDoesNotExist, __BaseException>) {
    super({
      name: "InvocationDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvocationDoesNotExist.prototype);
  }
}

/**
 * Patching for applications released by Microsoft is only available on EC2 instances and advanced instances. To patch applications released by Microsoft on on-premises servers and VMs, you must enable advanced instances. For more information, see [Turning on the advanced-instances tier](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export class UnsupportedFeatureRequiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedFeatureRequiredException";
  readonly name = "UnsupportedFeatureRequiredException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureRequiredException, __BaseException>) {
    super({
      name: "UnsupportedFeatureRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureRequiredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified aggregator isn't valid for the group type. Verify that the aggregator you provided is supported.
 *
 * @public
 */
export class InvalidAggregatorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAggregatorException";
  readonly name = "InvalidAggregatorException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAggregatorException, __BaseException>) {
    super({
      name: "InvalidAggregatorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAggregatorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified inventory group isn't valid.
 *
 * @public
 */
export class InvalidInventoryGroupException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInventoryGroupException";
  readonly name = "InvalidInventoryGroupException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryGroupException, __BaseException>) {
    super({
      name: "InvalidInventoryGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryGroupException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified inventory item result attribute isn't valid.
 *
 * @public
 */
export class InvalidResultAttributeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidResultAttributeException";
  readonly name = "InvalidResultAttributeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResultAttributeException, __BaseException>) {
    super({
      name: "InvalidResultAttributeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResultAttributeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The query key ID isn't valid.
 *
 * @public
 */
export class InvalidKeyId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidKeyId";
  readonly name = "InvalidKeyId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeyId, __BaseException>) {
    super({
      name: "InvalidKeyId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeyId.prototype);
  }
}

/**
 * The specified parameter version wasn't found. Verify the parameter name and version, and try again.
 *
 * @public
 */
export class ParameterVersionNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterVersionNotFound";
  readonly name = "ParameterVersionNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterVersionNotFound, __BaseException>) {
    super({
      name: "ParameterVersionNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterVersionNotFound.prototype);
  }
}

/**
 * The specified service setting wasn't found. Either the service name or the setting hasn't been provisioned by the Amazon Web Services service team.
 *
 * @public
 */
export class ServiceSettingNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ServiceSettingNotFound";
  readonly name = "ServiceSettingNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceSettingNotFound, __BaseException>) {
    super({
      name: "ServiceSettingNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceSettingNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A parameter version can have a maximum of ten labels.
 *
 * @public
 */
export class ParameterVersionLabelLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterVersionLabelLimitExceeded";
  readonly name = "ParameterVersionLabelLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterVersionLabelLimitExceeded, __BaseException>) {
    super({
      name: "ParameterVersionLabelLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterVersionLabelLimitExceeded.prototype);
  }
}

/**
 * This operation is not supported for the current account. You must first enable the Systems Manager integrated experience in your account.
 *
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedOperationException";
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20 accounts per API operation to share a private document.
 *
 * By default, you can share a private document with a maximum of 1,000 accounts and publicly share up to five documents.
 *
 * If you need to increase the quota for privately or publicly shared Systems Manager documents, contact Amazon Web Services Support.
 *
 * @public
 */
export class DocumentPermissionLimit extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DocumentPermissionLimit";
  readonly name = "DocumentPermissionLimit" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentPermissionLimit, __BaseException>) {
    super({
      name: "DocumentPermissionLimit",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentPermissionLimit.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You specified too many custom compliance types. You can specify a maximum of 10 different types.
 *
 * @public
 */
export class ComplianceTypeCountLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ComplianceTypeCountLimitExceededException";
  readonly name = "ComplianceTypeCountLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplianceTypeCountLimitExceededException, __BaseException>) {
    super({
      name: "ComplianceTypeCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplianceTypeCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more content items isn't valid.
 *
 * @public
 */
export class InvalidItemContentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidItemContentException";
  readonly name = "InvalidItemContentException" as const;
  readonly $fault = "client" as const;
  TypeName?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidItemContentException, __BaseException>) {
    super({
      name: "InvalidItemContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidItemContentException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * The inventory item size has exceeded the size limit.
 *
 * @public
 */
export class ItemSizeLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ItemSizeLimitExceededException";
  readonly name = "ItemSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  TypeName?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ItemSizeLimitExceededException, __BaseException>) {
    super({
      name: "ItemSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ItemSizeLimitExceededException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * The size of inventory data has exceeded the total size limit for the resource.
 *
 * @public
 */
export class TotalSizeLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#TotalSizeLimitExceededException";
  readonly name = "TotalSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TotalSizeLimitExceededException, __BaseException>) {
    super({
      name: "TotalSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TotalSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You have exceeded the limit for custom schemas. Delete one or more custom schemas and try again.
 *
 * @public
 */
export class CustomSchemaCountLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#CustomSchemaCountLimitExceededException";
  readonly name = "CustomSchemaCountLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomSchemaCountLimitExceededException, __BaseException>) {
    super({
      name: "CustomSchemaCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomSchemaCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You specified invalid keys or values in the `Context` attribute for `InventoryItem`. Verify the keys and values, and try again.
 *
 * @public
 */
export class InvalidInventoryItemContextException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidInventoryItemContextException";
  readonly name = "InvalidInventoryItemContextException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInventoryItemContextException, __BaseException>) {
    super({
      name: "InvalidInventoryItemContextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInventoryItemContextException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The inventory item has invalid content.
 *
 * @public
 */
export class ItemContentMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ItemContentMismatchException";
  readonly name = "ItemContentMismatchException" as const;
  readonly $fault = "client" as const;
  TypeName?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ItemContentMismatchException, __BaseException>) {
    super({
      name: "ItemContentMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ItemContentMismatchException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * The sub-type count exceeded the limit for the inventory type.
 *
 * @public
 */
export class SubTypeCountLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#SubTypeCountLimitExceededException";
  readonly name = "SubTypeCountLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubTypeCountLimitExceededException, __BaseException>) {
    super({
      name: "SubTypeCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubTypeCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The `Context` attribute that you specified for the `InventoryItem` isn't allowed for this inventory type. You can only use the `Context` attribute with inventory types like `AWS:ComplianceItem`.
 *
 * @public
 */
export class UnsupportedInventoryItemContextException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedInventoryItemContextException";
  readonly name = "UnsupportedInventoryItemContextException" as const;
  readonly $fault = "client" as const;
  TypeName?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedInventoryItemContextException, __BaseException>) {
    super({
      name: "UnsupportedInventoryItemContextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedInventoryItemContextException.prototype);
    this.TypeName = opts.TypeName;
    this.Message = opts.Message;
  }
}

/**
 * Inventory item type schema version has to match supported versions in the service. Check output of GetInventorySchema to see the available schema version for each type.
 *
 * @public
 */
export class UnsupportedInventorySchemaVersionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedInventorySchemaVersionException";
  readonly name = "UnsupportedInventorySchemaVersionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedInventorySchemaVersionException, __BaseException>) {
    super({
      name: "UnsupportedInventorySchemaVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedInventorySchemaVersionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A hierarchy can have a maximum of 15 levels. For more information, see [Requirements and constraints for parameter names](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export class HierarchyLevelLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#HierarchyLevelLimitExceededException";
  readonly name = "HierarchyLevelLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HierarchyLevelLimitExceededException, __BaseException>) {
    super({
      name: "HierarchyLevelLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HierarchyLevelLimitExceededException.prototype);
  }
}

/**
 * Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you can't change a parameter from a `String` type to a `SecureString` type. You must create a new, unique parameter.
 *
 * @public
 */
export class HierarchyTypeMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#HierarchyTypeMismatchException";
  readonly name = "HierarchyTypeMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HierarchyTypeMismatchException, __BaseException>) {
    super({
      name: "HierarchyTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HierarchyTypeMismatchException.prototype);
  }
}

/**
 * There is a conflict in the policies specified for this parameter. You can't, for example, specify two Expiration policies for a parameter. Review your policies, and try again.
 *
 * @public
 */
export class IncompatiblePolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#IncompatiblePolicyException";
  readonly name = "IncompatiblePolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatiblePolicyException, __BaseException>) {
    super({
      name: "IncompatiblePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatiblePolicyException.prototype);
  }
}

/**
 * The request doesn't meet the regular expression requirement.
 *
 * @public
 */
export class InvalidAllowedPatternException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAllowedPatternException";
  readonly name = "InvalidAllowedPatternException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAllowedPatternException, __BaseException>) {
    super({
      name: "InvalidAllowedPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAllowedPatternException.prototype);
  }
}

/**
 * A policy attribute or its value is invalid.
 *
 * @public
 */
export class InvalidPolicyAttributeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidPolicyAttributeException";
  readonly name = "InvalidPolicyAttributeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyAttributeException, __BaseException>) {
    super({
      name: "InvalidPolicyAttributeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyAttributeException.prototype);
  }
}

/**
 * The policy type isn't supported. Parameter Store supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification.
 *
 * @public
 */
export class InvalidPolicyTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidPolicyTypeException";
  readonly name = "InvalidPolicyTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyTypeException, __BaseException>) {
    super({
      name: "InvalidPolicyTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyTypeException.prototype);
  }
}

/**
 * The parameter already exists. You can't create duplicate parameters.
 *
 * @public
 */
export class ParameterAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterAlreadyExists";
  readonly name = "ParameterAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterAlreadyExists, __BaseException>) {
    super({
      name: "ParameterAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterAlreadyExists.prototype);
  }
}

/**
 * You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more parameters and try again.
 *
 * @public
 */
export class ParameterLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterLimitExceeded";
  readonly name = "ParameterLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterLimitExceeded, __BaseException>) {
    super({
      name: "ParameterLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterLimitExceeded.prototype);
  }
}

/**
 * Parameter Store retains the 100 most recently created versions of a parameter. After this number of versions has been created, Parameter Store deletes the oldest version when a new one is created. However, if the oldest version has a *label* attached to it, Parameter Store won't delete the version and instead presents this error message:
 *
 * `An error occurred (ParameterMaxVersionLimitExceeded) when calling the PutParameter operation: You attempted to create a new version of parameter-name by calling the PutParameter API with the overwrite flag. Version version-number, the oldest version, can't be deleted because it has a label associated with it. Move the label to another version of the parameter, and try again.`
 *
 * This safeguard is to prevent parameter versions with mission critical labels assigned to them from being deleted. To continue creating new parameters, first move the label from the oldest version of the parameter to a newer one for use in your operations. For information about moving parameter labels, see [Move a parameter label (console)](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-console-move) or [Move a parameter label (CLI)](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-cli-move) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export class ParameterMaxVersionLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterMaxVersionLimitExceeded";
  readonly name = "ParameterMaxVersionLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterMaxVersionLimitExceeded, __BaseException>) {
    super({
      name: "ParameterMaxVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterMaxVersionLimitExceeded.prototype);
  }
}

/**
 * The parameter name isn't valid.
 *
 * @public
 */
export class ParameterPatternMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ParameterPatternMismatchException";
  readonly name = "ParameterPatternMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterPatternMismatchException, __BaseException>) {
    super({
      name: "ParameterPatternMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterPatternMismatchException.prototype);
  }
}

/**
 * You specified more than the maximum number of allowed policies for the parameter. The maximum is 10.
 *
 * @public
 */
export class PoliciesLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#PoliciesLimitExceededException";
  readonly name = "PoliciesLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PoliciesLimitExceededException, __BaseException>) {
    super({
      name: "PoliciesLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PoliciesLimitExceededException.prototype);
  }
}

/**
 * The parameter type isn't supported.
 *
 * @public
 */
export class UnsupportedParameterType extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#UnsupportedParameterType";
  readonly name = "UnsupportedParameterType" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedParameterType, __BaseException>) {
    super({
      name: "UnsupportedParameterType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedParameterType.prototype);
  }
}

/**
 * The PutResourcePolicy API action enforces two limits. A policy can't be greater than 1024 bytes in size. And only one policy can be attached to `OpsItemGroup`. Verify these limits and try again.
 *
 * @public
 */
export class ResourcePolicyLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourcePolicyLimitExceededException";
  readonly name = "ResourcePolicyLimitExceededException" as const;
  readonly $fault = "client" as const;
  Limit?: number | undefined;
  LimitType?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyLimitExceededException, __BaseException>) {
    super({
      name: "ResourcePolicyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyLimitExceededException.prototype);
    this.Limit = opts.Limit;
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * You attempted to register a `LAMBDA` or `STEP_FUNCTIONS` task in a region where the corresponding service isn't available.
 *
 * @public
 */
export class FeatureNotAvailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#FeatureNotAvailableException";
  readonly name = "FeatureNotAvailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureNotAvailableException, __BaseException>) {
    super({
      name: "FeatureNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureNotAvailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified step name and execution ID don't exist. Verify the information and try again.
 *
 * @public
 */
export class AutomationStepNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationStepNotFoundException";
  readonly name = "AutomationStepNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationStepNotFoundException, __BaseException>) {
    super({
      name: "AutomationStepNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationStepNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The signal isn't valid for the current Automation execution.
 *
 * @public
 */
export class InvalidAutomationSignalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAutomationSignalException";
  readonly name = "InvalidAutomationSignalException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationSignalException, __BaseException>) {
    super({
      name: "InvalidAutomationSignalException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationSignalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN) was provided for an Amazon Simple Notification Service topic.
 *
 * @public
 */
export class InvalidNotificationConfig extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidNotificationConfig";
  readonly name = "InvalidNotificationConfig" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNotificationConfig, __BaseException>) {
    super({
      name: "InvalidNotificationConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNotificationConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The S3 bucket doesn't exist.
 *
 * @public
 */
export class InvalidOutputFolder extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidOutputFolder";
  readonly name = "InvalidOutputFolder" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOutputFolder, __BaseException>) {
    super({
      name: "InvalidOutputFolder",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOutputFolder.prototype);
  }
}

/**
 * The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about configuring the IAM role for Run Command notifications, see [Monitoring Systems Manager status changes using Amazon SNS notifications](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @public
 */
export class InvalidRole extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidRole";
  readonly name = "InvalidRole" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRole, __BaseException>) {
    super({
      name: "InvalidRole",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRole.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The association isn't valid or doesn't exist.
 *
 * @public
 */
export class InvalidAssociation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAssociation";
  readonly name = "InvalidAssociation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAssociation, __BaseException>) {
    super({
      name: "InvalidAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An Automation runbook with the specified name couldn't be found.
 *
 * @public
 */
export class AutomationDefinitionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationDefinitionNotFoundException";
  readonly name = "AutomationDefinitionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionNotFoundException, __BaseException>) {
    super({
      name: "AutomationDefinitionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An Automation runbook with the specified name and version couldn't be found.
 *
 * @public
 */
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException";
  readonly name = "AutomationDefinitionVersionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionVersionNotFoundException, __BaseException>) {
    super({
      name: "AutomationDefinitionVersionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionVersionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The number of simultaneously running Automation executions exceeded the allowable limit.
 *
 * @public
 */
export class AutomationExecutionLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationExecutionLimitExceededException";
  readonly name = "AutomationExecutionLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationExecutionLimitExceededException, __BaseException>) {
    super({
      name: "AutomationExecutionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationExecutionLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The supplied parameters for invoking the specified Automation runbook are incorrect. For example, they may not match the set of parameters permitted for the specified Automation document.
 *
 * @public
 */
export class InvalidAutomationExecutionParametersException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAutomationExecutionParametersException";
  readonly name = "InvalidAutomationExecutionParametersException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationExecutionParametersException, __BaseException>) {
    super({
      name: "InvalidAutomationExecutionParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationExecutionParametersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Indicates that the Change Manager change template used in the change request was rejected or is still in a pending state.
 *
 * @public
 */
export class AutomationDefinitionNotApprovedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AutomationDefinitionNotApprovedException";
  readonly name = "AutomationDefinitionNotApprovedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AutomationDefinitionNotApprovedException, __BaseException>) {
    super({
      name: "AutomationDefinitionNotApprovedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AutomationDefinitionNotApprovedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified target managed node for the session isn't fully configured for use with Session Manager. For more information, see [Setting up Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html) in the *Amazon Web Services Systems Manager User Guide*. This error is also returned if you attempt to start a session on a managed node that is located in a different account or Region
 *
 * @public
 */
export class TargetNotConnected extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#TargetNotConnected";
  readonly name = "TargetNotConnected" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotConnected, __BaseException>) {
    super({
      name: "TargetNotConnected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotConnected.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified update status operation isn't valid.
 *
 * @public
 */
export class InvalidAutomationStatusUpdateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidAutomationStatusUpdateException";
  readonly name = "InvalidAutomationStatusUpdateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutomationStatusUpdateException, __BaseException>) {
    super({
      name: "InvalidAutomationStatusUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutomationStatusUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You have reached the maximum number versions allowed for an association. Each association has a limit of 1,000 versions.
 *
 * @public
 */
export class AssociationVersionLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#AssociationVersionLimitExceeded";
  readonly name = "AssociationVersionLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociationVersionLimitExceeded, __BaseException>) {
    super({
      name: "AssociationVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociationVersionLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The update isn't valid.
 *
 * @public
 */
export class InvalidUpdate extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#InvalidUpdate";
  readonly name = "InvalidUpdate" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUpdate, __BaseException>) {
    super({
      name: "InvalidUpdate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUpdate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The updated status is the same as the current status.
 *
 * @public
 */
export class StatusUnchanged extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#StatusUnchanged";
  readonly name = "StatusUnchanged" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatusUnchanged, __BaseException>) {
    super({
      name: "StatusUnchanged",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatusUnchanged.prototype);
  }
}

/**
 * The document has too many versions. Delete one or more document versions and try again.
 *
 * @public
 */
export class DocumentVersionLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DocumentVersionLimitExceeded";
  readonly name = "DocumentVersionLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentVersionLimitExceeded, __BaseException>) {
    super({
      name: "DocumentVersionLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentVersionLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The content of the association document matches another document. Change the content of the document and try again.
 *
 * @public
 */
export class DuplicateDocumentContent extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DuplicateDocumentContent";
  readonly name = "DuplicateDocumentContent" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateDocumentContent, __BaseException>) {
    super({
      name: "DuplicateDocumentContent",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateDocumentContent.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The version name has already been used in this document. Specify a different version name, and then try again.
 *
 * @public
 */
export class DuplicateDocumentVersionName extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#DuplicateDocumentVersionName";
  readonly name = "DuplicateDocumentVersionName" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateDocumentVersionName, __BaseException>) {
    super({
      name: "DuplicateDocumentVersionName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateDocumentVersionName.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to an application in Application Manager.
 *
 * @public
 */
export class OpsMetadataKeyLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#OpsMetadataKeyLimitExceededException";
  readonly name = "OpsMetadataKeyLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpsMetadataKeyLimitExceededException, __BaseException>) {
    super({
      name: "OpsMetadataKeyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpsMetadataKeyLimitExceededException.prototype);
  }
}

/**
 * Another `UpdateResourceDataSync` request is being processed. Wait a few minutes and try again.
 *
 * @public
 */
export class ResourceDataSyncConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssm#ResourceDataSyncConflictException";
  readonly name = "ResourceDataSyncConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDataSyncConflictException, __BaseException>) {
    super({
      name: "ResourceDataSyncConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDataSyncConflictException.prototype);
    this.Message = opts.Message;
  }
}
