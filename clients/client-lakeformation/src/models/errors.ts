// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { LakeFormationServiceException as __BaseException } from "./LakeFormationServiceException";

/**
 * Access to a resource was denied.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * Two processes are trying to modify a resource simultaneously.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * A specified entity does not exist.
 *
 * @public
 */
export class EntityNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#EntityNotFoundException";
  readonly name = "EntityNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * An internal service error occurred.
 *
 * @public
 */
export class InternalServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#InternalServiceException";
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * A message describing the problem.
   *
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
 * The input provided was not valid.
 *
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * The operation timed out.
 *
 * @public
 */
export class OperationTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#OperationTimeoutException";
  readonly name = "OperationTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * A resource to be created or added already exists.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * A resource numerical limit was exceeded.
 *
 * @public
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ResourceNumberLimitExceededException";
  readonly name = "ResourceNumberLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * Contains details about an error related to a transaction commit that was in progress.
 *
 * @public
 */
export class TransactionCommitInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#TransactionCommitInProgressException";
  readonly name = "TransactionCommitInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error where the specified transaction has already been committed and cannot be used for `UpdateTableObjects`.
 *
 * @public
 */
export class TransactionCommittedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#TransactionCommittedException";
  readonly name = "TransactionCommittedException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error related to a transaction that was cancelled.
 *
 * @public
 */
export class TransactionCanceledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#TransactionCanceledException";
  readonly name = "TransactionCanceledException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error related to a resource which is not ready for a transaction.
 *
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ResourceNotReadyException";
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error where the query request expired.
 *
 * @public
 */
export class ExpiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ExpiredException";
  readonly name = "ExpiredException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error related to statistics not being ready.
 *
 * @public
 */
export class StatisticsNotReadyYetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#StatisticsNotReadyYetException";
  readonly name = "StatisticsNotReadyYetException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
 * Contains details about an error where the query request was throttled.
 *
 * @public
 */
export class ThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ThrottledException";
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * A message describing the error.
   *
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
 * An encryption operation failed.
 *
 * @public
 */
export class GlueEncryptionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#GlueEncryptionException";
  readonly name = "GlueEncryptionException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * Multiple resources exist with the same Amazon S3 location
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * The engine does not support filtering data based on the enforced permissions. For example, if you call the `GetTemporaryGlueTableCredentials` operation with `SupportedPermissionType` equal to `ColumnPermission`, but cell-level permissions exist on the table, this exception is thrown.
 *
 * @public
 */
export class PermissionTypeMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#PermissionTypeMismatchException";
  readonly name = "PermissionTypeMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the problem.
   *
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
 * Contains details about an error related to work units not being ready.
 *
 * @public
 */
export class WorkUnitsNotReadyYetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.lakeformation#WorkUnitsNotReadyYetException";
  readonly name = "WorkUnitsNotReadyYetException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   *
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
