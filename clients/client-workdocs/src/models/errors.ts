// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { WorkDocsServiceException as __BaseException } from "./WorkDocsServiceException";

/**
 * The resource hierarchy is changing.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
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
 * The resource does not exist.
 *
 * @public
 */
export class EntityNotExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#EntityNotExistsException";
  readonly name = "EntityNotExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The IDs of the non-existent resources.
   *
   * @public
   */
  EntityIds?: string[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotExistsException, __BaseException>) {
    super({
      name: "EntityNotExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotExistsException.prototype);
    this.Message = opts.Message;
    this.EntityIds = opts.EntityIds;
  }
}

/**
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @public
 */
export class FailedDependencyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#FailedDependencyException";
  readonly name = "FailedDependencyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyException, __BaseException>) {
    super({
      name: "FailedDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified document version is not in the INITIALIZED state.
 *
 * @public
 */
export class ProhibitedStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#ProhibitedStateException";
  readonly name = "ProhibitedStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProhibitedStateException, __BaseException>) {
    super({
      name: "ProhibitedStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProhibitedStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more of the dependencies is unavailable.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The operation is not permitted.
 *
 * @public
 */
export class UnauthorizedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#UnauthorizedOperationException";
  readonly name = "UnauthorizedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperationException, __BaseException>) {
    super({
      name: "UnauthorizedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperationException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * The caller does not have access to perform the action on the resource.
 *
 * @public
 */
export class UnauthorizedResourceAccessException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#UnauthorizedResourceAccessException";
  readonly name = "UnauthorizedResourceAccessException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedResourceAccessException, __BaseException>) {
    super({
      name: "UnauthorizedResourceAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedResourceAccessException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.
 *
 * @public
 */
export class DocumentLockedForCommentsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#DocumentLockedForCommentsException";
  readonly name = "DocumentLockedForCommentsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentLockedForCommentsException, __BaseException>) {
    super({
      name: "DocumentLockedForCommentsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentLockedForCommentsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The requested operation is not allowed on the specified comment object.
 *
 * @public
 */
export class InvalidCommentOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#InvalidCommentOperationException";
  readonly name = "InvalidCommentOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommentOperationException, __BaseException>) {
    super({
      name: "InvalidCommentOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommentOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The limit has been reached on the number of custom properties for the specified resource.
 *
 * @public
 */
export class CustomMetadataLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#CustomMetadataLimitExceededException";
  readonly name = "CustomMetadataLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomMetadataLimitExceededException, __BaseException>) {
    super({
      name: "CustomMetadataLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomMetadataLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Another operation is in progress on the resource that conflicts with the current operation.
 *
 * @public
 */
export class ConflictingOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#ConflictingOperationException";
  readonly name = "ConflictingOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingOperationException, __BaseException>) {
    super({
      name: "ConflictingOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource already exists.
 *
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#EntityAlreadyExistsException";
  readonly name = "EntityAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The maximum of 100,000 files and folders under the parent folder has been exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#LimitExceededException";
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
 * The limit has been reached on the number of labels for the specified resource.
 *
 * @public
 */
export class TooManyLabelsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#TooManyLabelsException";
  readonly name = "TooManyLabelsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLabelsException, __BaseException>) {
    super({
      name: "TooManyLabelsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLabelsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The pagination marker or limit fields are not valid.
 *
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#InvalidArgumentException";
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You've reached the limit on the number of subscriptions for the WorkDocs instance.
 *
 * @public
 */
export class TooManySubscriptionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#TooManySubscriptionsException";
  readonly name = "TooManySubscriptionsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManySubscriptionsException, __BaseException>) {
    super({
      name: "TooManySubscriptionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManySubscriptionsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The operation is invalid.
 *
 * @public
 */
export class InvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#InvalidOperationException";
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The password is invalid.
 *
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#InvalidPasswordException";
  readonly name = "InvalidPasswordException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The response is too large to return. The request must include a filter to reduce the size of the response.
 *
 * @public
 */
export class RequestedEntityTooLargeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#RequestedEntityTooLargeException";
  readonly name = "RequestedEntityTooLargeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestedEntityTooLargeException, __BaseException>) {
    super({
      name: "RequestedEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestedEntityTooLargeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * This exception is thrown when a valid checkout ID is not presented on document version upload calls for a document that has been checked out from Web client.
 *
 * @public
 */
export class DraftUploadOutOfSyncException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#DraftUploadOutOfSyncException";
  readonly name = "DraftUploadOutOfSyncException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DraftUploadOutOfSyncException, __BaseException>) {
    super({
      name: "DraftUploadOutOfSyncException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DraftUploadOutOfSyncException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource is already checked out.
 *
 * @public
 */
export class ResourceAlreadyCheckedOutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException";
  readonly name = "ResourceAlreadyCheckedOutException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyCheckedOutException, __BaseException>) {
    super({
      name: "ResourceAlreadyCheckedOutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyCheckedOutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The storage limit has been exceeded.
 *
 * @public
 */
export class StorageLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#StorageLimitExceededException";
  readonly name = "StorageLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageLimitExceededException, __BaseException>) {
    super({
      name: "StorageLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The storage limit will be exceeded.
 *
 * @public
 */
export class StorageLimitWillExceedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#StorageLimitWillExceedException";
  readonly name = "StorageLimitWillExceedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageLimitWillExceedException, __BaseException>) {
    super({
      name: "StorageLimitWillExceedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageLimitWillExceedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The last user in the organization is being deactivated.
 *
 * @public
 */
export class DeactivatingLastSystemUserException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#DeactivatingLastSystemUserException";
  readonly name = "DeactivatingLastSystemUserException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeactivatingLastSystemUserException, __BaseException>) {
    super({
      name: "DeactivatingLastSystemUserException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeactivatingLastSystemUserException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * The user is undergoing transfer of ownership.
 *
 * @public
 */
export class IllegalUserStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workdocs#IllegalUserStateException";
  readonly name = "IllegalUserStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalUserStateException, __BaseException>) {
    super({
      name: "IllegalUserStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalUserStateException.prototype);
    this.Message = opts.Message;
  }
}
