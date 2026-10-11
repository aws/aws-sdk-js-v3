// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CodeStarConnectionsServiceException as __BaseException } from "./CodeStarConnectionsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#AccessDeniedException";
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
 * <p>Exceeded the maximum limit for connections.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#LimitExceededException";
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
 * <p>Resource not found. Verify the connection resource ARN and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ResourceNotFoundException";
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
 * <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ResourceUnavailableException";
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ConcurrentModificationException";
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
 * <p>Received an internal server exception. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
 * <p>The input is not valid. Verify that the action is typed correctly.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>Unable to create resource. Resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
 * <p>Unable to continue. The sync blocker still exists.</p>
 * @public
 */
export class SyncConfigurationStillExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#SyncConfigurationStillExistsException";
  readonly name = "SyncConfigurationStillExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SyncConfigurationStillExistsException, __BaseException>) {
    super({
      name: "SyncConfigurationStillExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SyncConfigurationStillExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified provider type is not supported for connections.</p>
 * @public
 */
export class UnsupportedProviderTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#UnsupportedProviderTypeException";
  readonly name = "UnsupportedProviderTypeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedProviderTypeException, __BaseException>) {
    super({
      name: "UnsupportedProviderTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedProviderTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Two conflicting operations have been made on the same resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ConflictException";
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
 * <p>The operation is not supported. Check the connection status and try again.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#UnsupportedOperationException";
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
 * <p>The conditional check failed. Try again later.</p>
 * @public
 */
export class ConditionalCheckFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#ConditionalCheckFailedException";
  readonly name = "ConditionalCheckFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalCheckFailedException, __BaseException>) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The update is out of sync. Try syncing again.</p>
 * @public
 */
export class UpdateOutOfSyncException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#UpdateOutOfSyncException";
  readonly name = "UpdateOutOfSyncException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateOutOfSyncException, __BaseException>) {
    super({
      name: "UpdateOutOfSyncException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateOutOfSyncException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Retrying the latest commit failed. Try again later.</p>
 * @public
 */
export class RetryLatestCommitFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#RetryLatestCommitFailedException";
  readonly name = "RetryLatestCommitFailedException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryLatestCommitFailedException, __BaseException>) {
    super({
      name: "RetryLatestCommitFailedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryLatestCommitFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to continue. The sync blocker does not exist.</p>
 * @public
 */
export class SyncBlockerDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codestarconnections#SyncBlockerDoesNotExistException";
  readonly name = "SyncBlockerDoesNotExistException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SyncBlockerDoesNotExistException, __BaseException>) {
    super({
      name: "SyncBlockerDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SyncBlockerDoesNotExistException.prototype);
    this.Message = opts.Message;
  }
}
