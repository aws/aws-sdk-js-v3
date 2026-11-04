// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudDirectoryServiceException as __BaseException } from "./CloudDirectoryServiceException";
import type { BatchWriteExceptionType } from "./enums";

/**
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#AccessDeniedException";
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
 * Operations are only permitted on enabled directories.
 *
 * @public
 */
export class DirectoryNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#DirectoryNotEnabledException";
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
 * The Facet that you provided was not well formed or could not be validated with the schema.
 *
 * @public
 */
export class FacetValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#FacetValidationException";
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
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @public
 */
export class InternalServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InternalServiceException";
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
 * Indicates that the provided ARN value is not valid.
 *
 * @public
 */
export class InvalidArnException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidArnException";
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
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#LimitExceededException";
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
 * The specified resource could not be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#ResourceNotFoundException";
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
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @public
 */
export class RetryableConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#RetryableConflictException";
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
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#ValidationException";
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
 * Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.
 *
 * @public
 */
export class InvalidAttachmentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidAttachmentException";
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
 * Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.
 *
 * @public
 */
export class SchemaAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#SchemaAlreadyExistsException";
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
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
 *
 * @public
 */
export class LinkNameAlreadyInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException";
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
 * Indicates that the requested operation can only operate on policy objects.
 *
 * @public
 */
export class NotPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#NotPolicyException";
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
 * An object has been attempted to be attached to an object that does not have the appropriate attribute value.
 *
 * @public
 */
export class IndexedAttributeMissingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#IndexedAttributeMissingException";
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
 * Indicates that the requested operation can only operate on index objects.
 *
 * @public
 */
export class NotIndexException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#NotIndexException";
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
 * A `BatchWrite` exception has occurred.
 *
 * @public
 */
export class BatchWriteException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#BatchWriteException";
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
 * Indicates that a Directory could not be created due to a naming conflict. Choose a different name and try again.
 *
 * @public
 */
export class DirectoryAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException";
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
 * A facet with the same name already exists.
 *
 * @public
 */
export class FacetAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#FacetAlreadyExistsException";
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
 * Occurs when any of the rule parameter keys or values are invalid.
 *
 * @public
 */
export class InvalidRuleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidRuleException";
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
 * Indicates that the requested index type is not supported.
 *
 * @public
 */
export class UnsupportedIndexTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#UnsupportedIndexTypeException";
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
 * A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
 *
 * @public
 */
export class DirectoryDeletedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#DirectoryDeletedException";
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
 * An operation can only operate on a disabled directory.
 *
 * @public
 */
export class DirectoryNotDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#DirectoryNotDisabledException";
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
 * Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
 *
 * @public
 */
export class FacetInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#FacetInUseException";
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
 * The specified Facet could not be found.
 *
 * @public
 */
export class FacetNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#FacetNotFoundException";
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
 * Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
 *
 * @public
 */
export class ObjectNotDetachedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#ObjectNotDetachedException";
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
 * The object could not be deleted because links still exist. Remove the links and then try the operation again.
 *
 * @public
 */
export class StillContainsLinksException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#StillContainsLinksException";
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
 * Indicates that the object is not attached to the index.
 *
 * @public
 */
export class ObjectAlreadyDetachedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException";
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
 * Occurs when any invalid operations are performed on an object that is not a node, such as calling `ListObjectChildren` for a leaf node object.
 *
 * @public
 */
export class NotNodeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#NotNodeException";
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
 * Indicates that the `NextToken` value is not valid.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidNextTokenException";
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
 * Cannot list the parents of a Directory root.
 *
 * @public
 */
export class CannotListParentOfRootException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#CannotListParentOfRootException";
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
 * Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.
 *
 * @public
 */
export class InvalidTaggingRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidTaggingRequestException";
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
 * Indicates that a schema is already published.
 *
 * @public
 */
export class SchemaAlreadyPublishedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException";
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
 * Indicates that the provided `SchemaDoc` value is not valid.
 *
 * @public
 */
export class InvalidSchemaDocException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidSchemaDocException";
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
 * An attempt to modify a Facet resulted in an invalid schema exception.
 *
 * @public
 */
export class InvalidFacetUpdateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#InvalidFacetUpdateException";
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
 * Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
 *
 * @public
 */
export class IncompatibleSchemaException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.clouddirectory#IncompatibleSchemaException";
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
