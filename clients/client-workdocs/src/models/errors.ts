// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkDocsServiceException as __BaseException } from "./WorkDocsServiceException";

/**
 * <p>The resource hierarchy is changing.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
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
 * <p>The resource does not exist.</p>
 * @public
 */
export class EntityNotExistsException extends __BaseException {
  readonly name = "EntityNotExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The IDs of the non-existent resources.</p>
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
 * <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 * @public
 */
export class FailedDependencyException extends __BaseException {
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
 * <p>The specified document version is not in the INITIALIZED state.</p>
 * @public
 */
export class ProhibitedStateException extends __BaseException {
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
 * <p>One or more of the dependencies is unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
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
 * <p>The operation is not permitted.</p>
 * @public
 */
export class UnauthorizedOperationException extends __BaseException {
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
 * <p>The caller does not have access to perform the action on the resource.</p>
 * @public
 */
export class UnauthorizedResourceAccessException extends __BaseException {
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
 * <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 * @public
 */
export class DocumentLockedForCommentsException extends __BaseException {
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
 * <p>The requested operation is not allowed on the specified comment object.</p>
 * @public
 */
export class InvalidCommentOperationException extends __BaseException {
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
 * <p>The limit has been reached on the number of custom properties for the specified
 *             resource.</p>
 * @public
 */
export class CustomMetadataLimitExceededException extends __BaseException {
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
 * <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 * @public
 */
export class ConflictingOperationException extends __BaseException {
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
 * <p>The resource already exists.</p>
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
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
 * <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
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
 * <p>The limit has been reached on the number of labels for the specified
 *             resource.</p>
 * @public
 */
export class TooManyLabelsException extends __BaseException {
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
 * <p>The pagination marker or limit fields are not valid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
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
 * <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
 * @public
 */
export class TooManySubscriptionsException extends __BaseException {
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
 * <p>The operation is invalid.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
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
 * <p>The password is invalid.</p>
 * @public
 */
export class InvalidPasswordException extends __BaseException {
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
 * <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
 * @public
 */
export class RequestedEntityTooLargeException extends __BaseException {
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
 * <p>This exception is thrown when a valid checkout ID is not presented on document
 *             version upload calls for a document that has been checked out from Web client.</p>
 * @public
 */
export class DraftUploadOutOfSyncException extends __BaseException {
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
 * <p>The resource is already checked out.</p>
 * @public
 */
export class ResourceAlreadyCheckedOutException extends __BaseException {
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
 * <p>The storage limit has been exceeded.</p>
 * @public
 */
export class StorageLimitExceededException extends __BaseException {
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
 * <p>The storage limit will be exceeded.</p>
 * @public
 */
export class StorageLimitWillExceedException extends __BaseException {
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
 * <p>The last user in the organization is being deactivated.</p>
 * @public
 */
export class DeactivatingLastSystemUserException extends __BaseException {
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
 * <p>The user is undergoing transfer of ownership.</p>
 * @public
 */
export class IllegalUserStateException extends __BaseException {
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
