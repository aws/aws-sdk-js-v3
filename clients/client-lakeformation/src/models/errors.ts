// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LakeFormationServiceException as __BaseException } from "./LakeFormationServiceException";

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
 * <p>A specified entity does not exist.</p>
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
 * <p>Contains details about an error related to a transaction commit that was in progress.</p>
 * @public
 */
export class TransactionCommitInProgressException extends __BaseException {
  readonly name = "TransactionCommitInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCommitInProgressException, __BaseException>) {
    super({
      name: "TransactionCommitInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCommitInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 * @public
 */
export class TransactionCommittedException extends __BaseException {
  readonly name = "TransactionCommittedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCommittedException, __BaseException>) {
    super({
      name: "TransactionCommittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCommittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains details about an error related to a transaction that was cancelled.</p>
 * @public
 */
export class TransactionCanceledException extends __BaseException {
  readonly name = "TransactionCanceledException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCanceledException, __BaseException>) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCanceledException.prototype);
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
 * <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
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
 * <p>Contains details about an error where the query request expired.</p>
 * @public
 */
export class ExpiredException extends __BaseException {
  readonly name = "ExpiredException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredException, __BaseException>) {
    super({
      name: "ExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains details about an error related to statistics not being ready.</p>
 * @public
 */
export class StatisticsNotReadyYetException extends __BaseException {
  readonly name = "StatisticsNotReadyYetException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatisticsNotReadyYetException, __BaseException>) {
    super({
      name: "StatisticsNotReadyYetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatisticsNotReadyYetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains details about an error where the query request was throttled.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
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
   * <p>A message describing the problem.</p>
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
 * <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 * @public
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name = "PermissionTypeMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the problem.</p>
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
 * <p>Contains details about an error related to work units not being ready.</p>
 * @public
 */
export class WorkUnitsNotReadyYetException extends __BaseException {
  readonly name = "WorkUnitsNotReadyYetException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkUnitsNotReadyYetException, __BaseException>) {
    super({
      name: "WorkUnitsNotReadyYetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkUnitsNotReadyYetException.prototype);
    this.Message = opts.Message;
  }
}
