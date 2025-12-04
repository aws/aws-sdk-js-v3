// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RedshiftDataServiceException as __BaseException } from "./RedshiftDataServiceException";

/**
 * <p>The Amazon Redshift Data API operation failed because the maximum number of active sessions exceeded.</p>
 * @public
 */
export class ActiveSessionsExceededException extends __BaseException {
  readonly name = "ActiveSessionsExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveSessionsExceededException, __BaseException>) {
    super({
      name: "ActiveSessionsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveSessionsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of active statements exceeds the limit.</p>
 * @public
 */
export class ActiveStatementsExceededException extends __BaseException {
  readonly name = "ActiveStatementsExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveStatementsExceededException, __BaseException>) {
    super({
      name: "ActiveStatementsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveStatementsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An SQL statement encountered an environmental error while running.</p>
 * @public
 */
export class BatchExecuteStatementException extends __BaseException {
  readonly name = "BatchExecuteStatementException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
  /**
   * <p>Statement identifier of the exception.</p>
   * @public
   */
  StatementId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchExecuteStatementException, __BaseException>) {
    super({
      name: "BatchExecuteStatementException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchExecuteStatementException.prototype);
    this.Message = opts.Message;
    this.StatementId = opts.StatementId;
  }
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;
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
 * <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Resource identifier associated with the exception.</p>
   * @public
   */
  ResourceId: string | undefined;
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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception message.</p>
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
 * <p>Connection to a database failed.</p>
 * @public
 */
export class DatabaseConnectionException extends __BaseException {
  readonly name = "DatabaseConnectionException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseConnectionException, __BaseException>) {
    super({
      name: "DatabaseConnectionException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseConnectionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Redshift Data API operation failed due to timeout.</p>
 * @public
 */
export class QueryTimeoutException extends __BaseException {
  readonly name = "QueryTimeoutException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTimeoutException, __BaseException>) {
    super({
      name: "QueryTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The SQL statement encountered an environmental error while running.</p>
 * @public
 */
export class ExecuteStatementException extends __BaseException {
  readonly name = "ExecuteStatementException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Statement identifier of the exception.</p>
   * @public
   */
  StatementId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecuteStatementException, __BaseException>) {
    super({
      name: "ExecuteStatementException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecuteStatementException.prototype);
    this.Message = opts.Message;
    this.StatementId = opts.StatementId;
  }
}
