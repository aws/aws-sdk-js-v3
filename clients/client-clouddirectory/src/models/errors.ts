// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudDirectoryServiceException as __BaseException } from "./CloudDirectoryServiceException";
import { BatchWriteExceptionType } from "./enums";

/**
 * <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
 * <p>Operations are only permitted on enabled directories.</p>
 * @public
 */
export class DirectoryNotEnabledException extends __BaseException {
  readonly name = "DirectoryNotEnabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotEnabledException, __BaseException>) {
    super({
      name: "DirectoryNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 * @public
 */
export class FacetValidationException extends __BaseException {
  readonly name = "FacetValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetValidationException, __BaseException>) {
    super({
      name: "FacetValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
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
 * <p>Indicates that the provided ARN value is not valid.</p>
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name = "InvalidArnException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource could not be found.</p>
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
 * <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 * @public
 */
export class RetryableConflictException extends __BaseException {
  readonly name = "RetryableConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
 * <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 * @public
 */
export class InvalidAttachmentException extends __BaseException {
  readonly name = "InvalidAttachmentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAttachmentException, __BaseException>) {
    super({
      name: "InvalidAttachmentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAttachmentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that a schema could not be created due to a naming conflict. Please select a
 *       different name and then try again.</p>
 * @public
 */
export class SchemaAlreadyExistsException extends __BaseException {
  readonly name = "SchemaAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchemaAlreadyExistsException, __BaseException>) {
    super({
      name: "SchemaAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchemaAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
 * @public
 */
export class LinkNameAlreadyInUseException extends __BaseException {
  readonly name = "LinkNameAlreadyInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LinkNameAlreadyInUseException, __BaseException>) {
    super({
      name: "LinkNameAlreadyInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LinkNameAlreadyInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the requested operation can only operate on policy objects.</p>
 * @public
 */
export class NotPolicyException extends __BaseException {
  readonly name = "NotPolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotPolicyException, __BaseException>) {
    super({
      name: "NotPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
 * @public
 */
export class IndexedAttributeMissingException extends __BaseException {
  readonly name = "IndexedAttributeMissingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IndexedAttributeMissingException, __BaseException>) {
    super({
      name: "IndexedAttributeMissingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IndexedAttributeMissingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the requested operation can only operate on index objects.</p>
 * @public
 */
export class NotIndexException extends __BaseException {
  readonly name = "NotIndexException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotIndexException, __BaseException>) {
    super({
      name: "NotIndexException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotIndexException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 * @public
 */
export class BatchWriteException extends __BaseException {
  readonly name = "BatchWriteException" as const;
  readonly $fault = "client" as const;
  Index?: number | undefined;
  Type?: BatchWriteExceptionType | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchWriteException, __BaseException>) {
    super({
      name: "BatchWriteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchWriteException.prototype);
    this.Index = opts.Index;
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that a <a>Directory</a> could not be created due to a naming
 *       conflict. Choose a different name and try again.</p>
 * @public
 */
export class DirectoryAlreadyExistsException extends __BaseException {
  readonly name = "DirectoryAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadyExistsException, __BaseException>) {
    super({
      name: "DirectoryAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A facet with the same name already exists.</p>
 * @public
 */
export class FacetAlreadyExistsException extends __BaseException {
  readonly name = "FacetAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetAlreadyExistsException, __BaseException>) {
    super({
      name: "FacetAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Occurs when any of the rule parameter keys or values are invalid.</p>
 * @public
 */
export class InvalidRuleException extends __BaseException {
  readonly name = "InvalidRuleException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRuleException, __BaseException>) {
    super({
      name: "InvalidRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRuleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the requested index type is not supported.</p>
 * @public
 */
export class UnsupportedIndexTypeException extends __BaseException {
  readonly name = "UnsupportedIndexTypeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedIndexTypeException, __BaseException>) {
    super({
      name: "UnsupportedIndexTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedIndexTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A directory that has been deleted and to which access has been attempted. Note: The
 *       requested resource will eventually cease to exist.</p>
 * @public
 */
export class DirectoryDeletedException extends __BaseException {
  readonly name = "DirectoryDeletedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryDeletedException, __BaseException>) {
    super({
      name: "DirectoryDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryDeletedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An operation can only operate on a disabled directory.</p>
 * @public
 */
export class DirectoryNotDisabledException extends __BaseException {
  readonly name = "DirectoryNotDisabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotDisabledException, __BaseException>) {
    super({
      name: "DirectoryNotDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Occurs when deleting a facet that contains an attribute that is a target to an
 *       attribute reference in a different facet.</p>
 * @public
 */
export class FacetInUseException extends __BaseException {
  readonly name = "FacetInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetInUseException, __BaseException>) {
    super({
      name: "FacetInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified <a>Facet</a> could not be found.</p>
 * @public
 */
export class FacetNotFoundException extends __BaseException {
  readonly name = "FacetNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetNotFoundException, __BaseException>) {
    super({
      name: "FacetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the requested operation cannot be completed because the object has not
 *       been detached from the tree.</p>
 * @public
 */
export class ObjectNotDetachedException extends __BaseException {
  readonly name = "ObjectNotDetachedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotDetachedException, __BaseException>) {
    super({
      name: "ObjectNotDetachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotDetachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The object could not be deleted because links still exist. Remove the links and then
 *       try the operation again.</p>
 * @public
 */
export class StillContainsLinksException extends __BaseException {
  readonly name = "StillContainsLinksException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StillContainsLinksException, __BaseException>) {
    super({
      name: "StillContainsLinksException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StillContainsLinksException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the object is not attached to the index.</p>
 * @public
 */
export class ObjectAlreadyDetachedException extends __BaseException {
  readonly name = "ObjectAlreadyDetachedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectAlreadyDetachedException, __BaseException>) {
    super({
      name: "ObjectAlreadyDetachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectAlreadyDetachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Occurs when any invalid operations are performed on an object that is not a node, such
 *       as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 * @public
 */
export class NotNodeException extends __BaseException {
  readonly name = "NotNodeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotNodeException, __BaseException>) {
    super({
      name: "NotNodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotNodeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the <code>NextToken</code> value is not valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot list the parents of a <a>Directory</a> root.</p>
 * @public
 */
export class CannotListParentOfRootException extends __BaseException {
  readonly name = "CannotListParentOfRootException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotListParentOfRootException, __BaseException>) {
    super({
      name: "CannotListParentOfRootException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotListParentOfRootException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
 * @public
 */
export class InvalidTaggingRequestException extends __BaseException {
  readonly name = "InvalidTaggingRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTaggingRequestException, __BaseException>) {
    super({
      name: "InvalidTaggingRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTaggingRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that a schema is already published.</p>
 * @public
 */
export class SchemaAlreadyPublishedException extends __BaseException {
  readonly name = "SchemaAlreadyPublishedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchemaAlreadyPublishedException, __BaseException>) {
    super({
      name: "SchemaAlreadyPublishedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchemaAlreadyPublishedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
 * @public
 */
export class InvalidSchemaDocException extends __BaseException {
  readonly name = "InvalidSchemaDocException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchemaDocException, __BaseException>) {
    super({
      name: "InvalidSchemaDocException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchemaDocException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema
 *       exception.</p>
 * @public
 */
export class InvalidFacetUpdateException extends __BaseException {
  readonly name = "InvalidFacetUpdateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFacetUpdateException, __BaseException>) {
    super({
      name: "InvalidFacetUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFacetUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 * @public
 */
export class IncompatibleSchemaException extends __BaseException {
  readonly name = "IncompatibleSchemaException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleSchemaException, __BaseException>) {
    super({
      name: "IncompatibleSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleSchemaException.prototype);
    this.Message = opts.Message;
  }
}
