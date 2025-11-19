// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SSMServiceException as __BaseException } from "./SSMServiceException";

/**
 * <p>The requester doesn't have permissions to perform the requested operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>An error occurred on the server side.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
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
 * <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 * @public
 */
export class InvalidResourceId extends __BaseException {
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
 * <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 * @public
 */
export class InvalidResourceType extends __BaseException {
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
 * <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try
 *    the command again.</p>
 * @public
 */
export class TooManyTagsError extends __BaseException {
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
 * <p>There are concurrent updates for a resource that supports one update at a time.</p>
 * @public
 */
export class TooManyUpdates extends __BaseException {
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
 * <p>Error returned if an attempt is made to register a patch group with a patch baseline that is
 *    already registered with a different patch baseline.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
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
 * <p>The specified OpsItem is in the process of being deleted.</p>
 * @public
 */
export class OpsItemConflictException extends __BaseException {
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
 * <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 * @public
 */
export class OpsItemInvalidParameterException extends __BaseException {
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
 * <p>The request caused OpsItems to exceed one or more quotas.</p>
 * @public
 */
export class OpsItemLimitExceededException extends __BaseException {
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
 * <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 * @public
 */
export class OpsItemNotFoundException extends __BaseException {
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
 * <p>The Amazon Resource Name (ARN) is already associated with the OpsItem.</p>
 * @public
 */
export class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
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
 * <p>You can't specify a managed node ID in more than one association.</p>
 * @public
 */
export class DuplicateInstanceId extends __BaseException {
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
 * <p>The specified command ID isn't valid. Verify the ID and try again.</p>
 * @public
 */
export class InvalidCommandId extends __BaseException {
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
 * <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidInstanceId extends __BaseException {
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
 * <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class DoesNotExistException extends __BaseException {
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
 * <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 * @public
 */
export class InvalidParameters extends __BaseException {
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
 * <p>The specified association already exists.</p>
 * @public
 */
export class AssociationAlreadyExists extends __BaseException {
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
 * <p>You can have at most 2,000 active associations.</p>
 * @public
 */
export class AssociationLimitExceeded extends __BaseException {
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
 * <p>The specified SSM document doesn't exist.</p>
 * @public
 */
export class InvalidDocument extends __BaseException {
  readonly name = "InvalidDocument" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The SSM document doesn't exist or the document isn't available to the user. This exception
   *    can be issued by various API operations. </p>
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
 * <p>The document version isn't valid or doesn't exist.</p>
 * @public
 */
export class InvalidDocumentVersion extends __BaseException {
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
 * <p>The output location isn't valid or doesn't exist.</p>
 * @public
 */
export class InvalidOutputLocation extends __BaseException {
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
 * <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 * @public
 */
export class InvalidSchedule extends __BaseException {
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
 * <p>The specified tag key or value isn't valid.</p>
 * @public
 */
export class InvalidTag extends __BaseException {
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
 * <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 * @public
 */
export class InvalidTarget extends __BaseException {
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
 * <p>TargetMap parameter isn't valid.</p>
 * @public
 */
export class InvalidTargetMaps extends __BaseException {
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
 * <p>The document doesn't support the platform type of the given managed node IDs. For example,
 *    you sent an document for a Windows managed node to a Linux node.</p>
 * @public
 */
export class UnsupportedPlatformType extends __BaseException {
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
 * <p>The specified document already exists.</p>
 * @public
 */
export class DocumentAlreadyExists extends __BaseException {
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
 * <p>You can have at most 500 active SSM documents.</p>
 * @public
 */
export class DocumentLimitExceeded extends __BaseException {
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
 * <p>The content for the document isn't valid.</p>
 * @public
 */
export class InvalidDocumentContent extends __BaseException {
  readonly name = "InvalidDocumentContent" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of the validation error.</p>
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
 * <p>The version of the document schema isn't supported.</p>
 * @public
 */
export class InvalidDocumentSchemaVersion extends __BaseException {
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
 * <p>The size limit of a document is 64 KB.</p>
 * @public
 */
export class MaxDocumentSizeExceeded extends __BaseException {
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
 * <p>The requested operation is no longer supported by Systems Manager.</p>
 * @public
 */
export class NoLongerSupportedException extends __BaseException {
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
 * <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 * @public
 */
export class IdempotentParameterMismatch extends __BaseException {
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
 * <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
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
 * <p>You don't have permission to view OpsItems in the specified account. Verify that your account
 *    is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations
 *    management account.</p>
 * @public
 */
export class OpsItemAccessDeniedException extends __BaseException {
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
 * <p>The OpsItem already exists.</p>
 * @public
 */
export class OpsItemAlreadyExistsException extends __BaseException {
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
 * <p>An OpsMetadata object already exists for the selected resource.</p>
 * @public
 */
export class OpsMetadataAlreadyExistsException extends __BaseException {
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
 * <p>One of the arguments passed is invalid. </p>
 * @public
 */
export class OpsMetadataInvalidArgumentException extends __BaseException {
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
 * <p>Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 * @public
 */
export class OpsMetadataLimitExceededException extends __BaseException {
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
 * <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 * @public
 */
export class OpsMetadataTooManyUpdatesException extends __BaseException {
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
 * <p>A sync configuration with the same name already exists.</p>
 * @public
 */
export class ResourceDataSyncAlreadyExistsException extends __BaseException {
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
 * <p>You have exceeded the allowed maximum sync configurations.</p>
 * @public
 */
export class ResourceDataSyncCountExceededException extends __BaseException {
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
 * <p>The specified sync configuration is invalid.</p>
 * @public
 */
export class ResourceDataSyncInvalidConfigurationException extends __BaseException {
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
 * <p>The activation isn't valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode don't match.</p>
 * @public
 */
export class InvalidActivation extends __BaseException {
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
 * <p>The activation ID isn't valid. Verify that you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 * @public
 */
export class InvalidActivationId extends __BaseException {
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
 * <p>The specified association doesn't exist.</p>
 * @public
 */
export class AssociationDoesNotExist extends __BaseException {
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
 * <p>You must disassociate a document from all managed nodes before you can delete it.</p>
 * @public
 */
export class AssociatedInstances extends __BaseException {
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
 * <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 * @public
 */
export class InvalidDocumentOperation extends __BaseException {
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
 * <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 * @public
 */
export class InvalidDeleteInventoryParametersException extends __BaseException {
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
 * <p>The request isn't valid.</p>
 * @public
 */
export class InvalidInventoryRequestException extends __BaseException {
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
 * <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 * @public
 */
export class InvalidOptionException extends __BaseException {
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
 * <p>The parameter type name isn't valid.</p>
 * @public
 */
export class InvalidTypeNameException extends __BaseException {
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
 * <p>The OpsMetadata object doesn't exist. </p>
 * @public
 */
export class OpsMetadataNotFoundException extends __BaseException {
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
 * <p>The parameter couldn't be found. Verify the name and try again.</p>
 *          <note>
 *             <p>For the <code>DeleteParameter</code> and <code>GetParameter</code> actions, if the
 *     specified parameter doesn't exist, the <code>ParameterNotFound</code> exception is
 *      <i>not</i> recorded in CloudTrail event logs.</p>
 *          </note>
 * @public
 */
export class ParameterNotFound extends __BaseException {
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
 * <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
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
 * <p>The specified sync name wasn't found.</p>
 * @public
 */
export class ResourceDataSyncNotFoundException extends __BaseException {
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
 * <p>The specified policy document is malformed or invalid, or excessive
 *     <code>PutResourcePolicy</code> or <code>DeleteResourcePolicy</code> calls have been made.</p>
 * @public
 */
export class MalformedResourcePolicyDocumentException extends __BaseException {
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
 * <p>The specified parameter to be shared could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>The hash provided in the call doesn't match the stored hash. This exception is thrown when
 *    trying to update an obsolete policy version or when multiple requests to update a policy are
 *    sent.</p>
 * @public
 */
export class ResourcePolicyConflictException extends __BaseException {
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
 * <p>One or more parameters specified for the call aren't valid. Verify the parameters and their
 *    values and try again.</p>
 * @public
 */
export class ResourcePolicyInvalidParameterException extends __BaseException {
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
 * <p>No policies with the specified policy ID and hash could be found.</p>
 * @public
 */
export class ResourcePolicyNotFoundException extends __BaseException {
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
 * <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow
 *    operation, but the target is still referenced in a task.</p>
 * @public
 */
export class TargetInUseException extends __BaseException {
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
 * <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 * @public
 */
export class InvalidFilter extends __BaseException {
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
 * <p>The specified token isn't valid.</p>
 * @public
 */
export class InvalidNextToken extends __BaseException {
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
 * <p>The version you specified isn't valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 * @public
 */
export class InvalidAssociationVersion extends __BaseException {
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
 * <p>The specified execution ID doesn't exist. Verify the ID number and try again.</p>
 * @public
 */
export class AssociationExecutionDoesNotExist extends __BaseException {
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
 * <p>The specified key isn't valid.</p>
 * @public
 */
export class InvalidFilterKey extends __BaseException {
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
 * <p>The filter value isn't valid. Verify the value and try again.</p>
 * @public
 */
export class InvalidFilterValue extends __BaseException {
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
 * <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 * @public
 */
export class AutomationExecutionNotFoundException extends __BaseException {
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
 * <p>The permission type isn't supported. <i>Share</i> is the only supported
 *    permission type.</p>
 * @public
 */
export class InvalidPermissionType extends __BaseException {
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
 * <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 * @public
 */
export class UnsupportedOperatingSystem extends __BaseException {
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
 * <p>The specified filter value isn't valid.</p>
 * @public
 */
export class InvalidInstanceInformationFilterValue extends __BaseException {
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
 * <p>The specified filter value isn't valid.</p>
 * @public
 */
export class InvalidInstancePropertyFilterValue extends __BaseException {
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
 * <p>The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and
 *    try again.</p>
 * @public
 */
export class InvalidDeletionIdException extends __BaseException {
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
 * <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 * @public
 */
export class InvalidFilterOption extends __BaseException {
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
 * <p>The association wasn't found using the parameters you specified in the call. Verify the
 *    information and try again.</p>
 * @public
 */
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
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
 * <p>The request or operation couldn't be performed because the service is throttling
 *    requests.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service that owns the quota.</p>
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
 * <p>The request isn't valid. Verify that you entered valid contents for the command and try
 *    again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The reason code for the invalid request.</p>
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
 * <p>The SSM document type isn't valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 * @public
 */
export class InvalidDocumentType extends __BaseException {
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
 * <p>The calendar entry contained in the specified SSM document isn't supported.</p>
 * @public
 */
export class UnsupportedCalendarException extends __BaseException {
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
 * <p>The plugin name isn't valid.</p>
 * @public
 */
export class InvalidPluginName extends __BaseException {
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
 * <p>The command ID and managed node ID you specified didn't match any invocations. Verify the
 *    command ID and the managed node ID and try again. </p>
 * @public
 */
export class InvocationDoesNotExist extends __BaseException {
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
 * <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Turning on
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @public
 */
export class UnsupportedFeatureRequiredException extends __BaseException {
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
 * <p>The specified aggregator isn't valid for the group type. Verify that the aggregator you
 *    provided is supported.</p>
 * @public
 */
export class InvalidAggregatorException extends __BaseException {
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
 * <p>The specified inventory group isn't valid.</p>
 * @public
 */
export class InvalidInventoryGroupException extends __BaseException {
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
 * <p>The specified inventory item result attribute isn't valid.</p>
 * @public
 */
export class InvalidResultAttributeException extends __BaseException {
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
 * <p>The query key ID isn't valid.</p>
 * @public
 */
export class InvalidKeyId extends __BaseException {
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
 * <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 * @public
 */
export class ParameterVersionNotFound extends __BaseException {
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
 * <p>The specified service setting wasn't found. Either the service name or the setting hasn't
 *    been provisioned by the Amazon Web Services service team.</p>
 * @public
 */
export class ServiceSettingNotFound extends __BaseException {
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
 * <p>A parameter version can have a maximum of ten labels.</p>
 * @public
 */
export class ParameterVersionLabelLimitExceeded extends __BaseException {
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
 * <p>This operation is not supported for the current account. You must first enable the Systems Manager integrated experience in your account.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
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
 * <p>The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20
 *    accounts per API operation to share a private document.</p>
 *          <p>By default, you can share a private document with a maximum of 1,000 accounts and publicly
 *    share up to five documents.</p>
 *          <p>If you need to increase the quota for privately or publicly shared Systems Manager documents, contact
 *    Amazon Web Services Support.</p>
 * @public
 */
export class DocumentPermissionLimit extends __BaseException {
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
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 * @public
 */
export class ComplianceTypeCountLimitExceededException extends __BaseException {
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
 * <p>One or more content items isn't valid.</p>
 * @public
 */
export class InvalidItemContentException extends __BaseException {
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
 * <p>The inventory item size has exceeded the size limit.</p>
 * @public
 */
export class ItemSizeLimitExceededException extends __BaseException {
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
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 * @public
 */
export class TotalSizeLimitExceededException extends __BaseException {
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
 * <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try
 *    again.</p>
 * @public
 */
export class CustomSchemaCountLimitExceededException extends __BaseException {
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
 * <p>You specified invalid keys or values in the <code>Context</code> attribute for
 *     <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 * @public
 */
export class InvalidInventoryItemContextException extends __BaseException {
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
 * <p>The inventory item has invalid content. </p>
 * @public
 */
export class ItemContentMismatchException extends __BaseException {
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
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 * @public
 */
export class SubTypeCountLimitExceededException extends __BaseException {
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
 * <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code>
 *    isn't allowed for this inventory type. You can only use the <code>Context</code> attribute with
 *    inventory types like <code>AWS:ComplianceItem</code>.</p>
 * @public
 */
export class UnsupportedInventoryItemContextException extends __BaseException {
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
 * <p>Inventory item type schema version has to match supported versions in the service. Check
 *    output of GetInventorySchema to see the available schema version for each type.</p>
 * @public
 */
export class UnsupportedInventorySchemaVersionException extends __BaseException {
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
 * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and
 *     constraints for parameter names</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @public
 */
export class HierarchyLevelLimitExceededException extends __BaseException {
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
 * <p>Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you
 *    can't change a parameter from a <code>String</code> type to a <code>SecureString</code> type. You
 *    must create a new, unique parameter.</p>
 * @public
 */
export class HierarchyTypeMismatchException extends __BaseException {
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
 * <p>There is a conflict in the policies specified for this parameter. You can't, for example,
 *    specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 * @public
 */
export class IncompatiblePolicyException extends __BaseException {
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
 * <p>The request doesn't meet the regular expression requirement.</p>
 * @public
 */
export class InvalidAllowedPatternException extends __BaseException {
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
 * <p>A policy attribute or its value is invalid. </p>
 * @public
 */
export class InvalidPolicyAttributeException extends __BaseException {
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
 * <p>The policy type isn't supported. Parameter Store supports the following policy types:
 *    Expiration, ExpirationNotification, and NoChangeNotification.</p>
 * @public
 */
export class InvalidPolicyTypeException extends __BaseException {
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
 * <p>The parameter already exists. You can't create duplicate parameters.</p>
 * @public
 */
export class ParameterAlreadyExists extends __BaseException {
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
 * <p>You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more
 *    parameters and try again.</p>
 * @public
 */
export class ParameterLimitExceeded extends __BaseException {
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
 * <p>Parameter Store retains the 100 most recently created versions of a parameter. After this
 *    number of versions has been created, Parameter Store deletes the oldest version when a new one is
 *    created. However, if the oldest version has a <i>label</i> attached to it,
 *    Parameter Store won't delete the version and instead presents this error message:</p>
 *          <p>
 *             <code>An error occurred (ParameterMaxVersionLimitExceeded) when calling the PutParameter
 *     operation: You attempted to create a new version of <i>parameter-name</i> by
 *     calling the PutParameter API with the overwrite flag. Version
 *      <i>version-number</i>, the oldest version, can't be deleted because it has a
 *     label associated with it. Move the label to another version of the parameter, and try
 *     again.</code>
 *          </p>
 *          <p>This safeguard is to prevent parameter versions with mission critical labels assigned to
 *    them from being deleted. To continue creating new parameters, first move the label from the
 *    oldest version of the parameter to a newer one for use in your operations. For information about
 *    moving parameter labels, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-console-move">Move a parameter label (console)</a> or <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-cli-move">Move a parameter label (CLI)</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @public
 */
export class ParameterMaxVersionLimitExceeded extends __BaseException {
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
 * <p>The parameter name isn't valid.</p>
 * @public
 */
export class ParameterPatternMismatchException extends __BaseException {
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
 * <p>You specified more than the maximum number of allowed policies for the parameter. The
 *    maximum is 10.</p>
 * @public
 */
export class PoliciesLimitExceededException extends __BaseException {
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
 * <p>The parameter type isn't supported.</p>
 * @public
 */
export class UnsupportedParameterType extends __BaseException {
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
 * <p>The <a>PutResourcePolicy</a> API action enforces two limits. A policy can't be
 *    greater than 1024 bytes in size. And only one policy can be attached to
 *    <code>OpsItemGroup</code>. Verify these limits and try again.</p>
 * @public
 */
export class ResourcePolicyLimitExceededException extends __BaseException {
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
 * <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 * @public
 */
export class FeatureNotAvailableException extends __BaseException {
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
 * <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 * @public
 */
export class AutomationStepNotFoundException extends __BaseException {
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
 * <p>The signal isn't valid for the current Automation execution.</p>
 * @public
 */
export class InvalidAutomationSignalException extends __BaseException {
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
 * <p>One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon Simple Notification Service topic.</p>
 * @public
 */
export class InvalidNotificationConfig extends __BaseException {
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
 * <p>The S3 bucket doesn't exist.</p>
 * @public
 */
export class InvalidOutputFolder extends __BaseException {
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
 * <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about
 *    configuring the IAM role for Run Command notifications, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status changes using Amazon SNS notifications</a> in
 *    the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @public
 */
export class InvalidRole extends __BaseException {
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
 * <p>The request exceeds the service quota. Service quotas, also referred to as limits, are the
 *    maximum number of service resources or operations for your Amazon Web Services account.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The unique ID of the resource referenced in the failed request.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type of the resource referenced in the failed request.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>The code for the Amazon Web Services service that owns the quota.</p>
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
 * <p>The association isn't valid or doesn't exist. </p>
 * @public
 */
export class InvalidAssociation extends __BaseException {
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
 * <p>An Automation runbook with the specified name couldn't be found.</p>
 * @public
 */
export class AutomationDefinitionNotFoundException extends __BaseException {
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
 * <p>An Automation runbook with the specified name and version couldn't be found.</p>
 * @public
 */
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
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
 * <p>The number of simultaneously running Automation executions exceeded the allowable
 *    limit.</p>
 * @public
 */
export class AutomationExecutionLimitExceededException extends __BaseException {
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
 * <p>The supplied parameters for invoking the specified Automation runbook are incorrect. For
 *    example, they may not match the set of parameters permitted for the specified Automation
 *    document.</p>
 * @public
 */
export class InvalidAutomationExecutionParametersException extends __BaseException {
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
 * <p>Indicates that the Change Manager change template used in the change request was rejected or is
 *    still in a pending state.</p>
 * @public
 */
export class AutomationDefinitionNotApprovedException extends __BaseException {
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
 * <p>The specified target managed node for the session isn't fully configured for use with Session Manager.
 *    For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Setting up
 *     Session Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. This error is also returned if you
 *    attempt to start a session on a managed node that is located in a different account or
 *    Region</p>
 * @public
 */
export class TargetNotConnected extends __BaseException {
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
 * <p>The specified update status operation isn't valid.</p>
 * @public
 */
export class InvalidAutomationStatusUpdateException extends __BaseException {
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
 * <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 * @public
 */
export class AssociationVersionLimitExceeded extends __BaseException {
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
 * <p>The update isn't valid.</p>
 * @public
 */
export class InvalidUpdate extends __BaseException {
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
 * <p>The updated status is the same as the current status.</p>
 * @public
 */
export class StatusUnchanged extends __BaseException {
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
 * <p>The document has too many versions. Delete one or more document versions and try
 *    again.</p>
 * @public
 */
export class DocumentVersionLimitExceeded extends __BaseException {
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
 * <p>The content of the association document matches another document. Change the content of the
 *    document and try again.</p>
 * @public
 */
export class DuplicateDocumentContent extends __BaseException {
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
 * <p>The version name has already been used in this document. Specify a different version name,
 *    and then try again.</p>
 * @public
 */
export class DuplicateDocumentVersionName extends __BaseException {
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
 * <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
 * @public
 */
export class OpsMetadataKeyLimitExceededException extends __BaseException {
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
 * <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
 * @public
 */
export class ResourceDataSyncConflictException extends __BaseException {
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
