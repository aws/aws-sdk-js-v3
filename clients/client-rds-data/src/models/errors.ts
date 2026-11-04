// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { RDSDataServiceException as __BaseException } from "./RDSDataServiceException";

/**
 * You don't have sufficient access to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * There is an error in the call or in a SQL statement. This exception is deprecated.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * There was an error in processing the SQL statement.
 *
 * @public
 */
export class DatabaseErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#DatabaseErrorException";
  readonly name = "DatabaseErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseErrorException, __BaseException>) {
    super({
      name: "DatabaseErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseErrorException.prototype);
  }
}

/**
 * The DB cluster doesn't have a DB instance.
 *
 * @public
 */
export class DatabaseNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#DatabaseNotFoundException";
  readonly name = "DatabaseNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseNotFoundException, __BaseException>) {
    super({
      name: "DatabaseNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseNotFoundException.prototype);
  }
}

/**
 * A request was cancelled because the Aurora Serverless DB instance was paused. The Data API request automatically resumes the DB instance. Wait a few seconds and try again.
 *
 * @public
 */
export class DatabaseResumingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#DatabaseResumingException";
  readonly name = "DatabaseResumingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseResumingException, __BaseException>) {
    super({
      name: "DatabaseResumingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseResumingException.prototype);
  }
}

/**
 * The writer instance in the DB cluster isn't available.
 *
 * @public
 */
export class DatabaseUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#DatabaseUnavailableException";
  readonly name = "DatabaseUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseUnavailableException, __BaseException>) {
    super({
      name: "DatabaseUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseUnavailableException.prototype);
  }
}

/**
 * There are insufficient privileges to make the call.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.
 *
 * @public
 */
export class HttpEndpointNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#HttpEndpointNotEnabledException";
  readonly name = "HttpEndpointNotEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HttpEndpointNotEnabledException, __BaseException>) {
    super({
      name: "HttpEndpointNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HttpEndpointNotEnabledException.prototype);
  }
}

/**
 * An internal error occurred.
 *
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * The resource is in an invalid state.
 *
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#InvalidResourceStateException";
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * The Secrets Manager secret used with the request isn't valid.
 *
 * @public
 */
export class InvalidSecretException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#InvalidSecretException";
  readonly name = "InvalidSecretException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecretException, __BaseException>) {
    super({
      name: "InvalidSecretException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecretException.prototype);
  }
}

/**
 * There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:
 *
 * - RDS Data API timed out retrieving the secret.
 * - The secret provided wasn't found.
 * - The secret couldn't be decrypted.
 *
 * @public
 */
export class SecretsErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#SecretsErrorException";
  readonly name = "SecretsErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecretsErrorException, __BaseException>) {
    super({
      name: "SecretsErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecretsErrorException.prototype);
  }
}

/**
 * The service specified by the `resourceArn` parameter isn't available.
 *
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#ServiceUnavailableError";
  readonly name = "ServiceUnavailableError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableError, __BaseException>) {
    super({
      name: "ServiceUnavailableError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

/**
 * The execution of the SQL statement timed out.
 *
 * @public
 */
export class StatementTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#StatementTimeoutException";
  readonly name = "StatementTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * The database connection ID that executed the SQL statement.
   *
   * @public
   */
  dbConnectionId?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatementTimeoutException, __BaseException>) {
    super({
      name: "StatementTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatementTimeoutException.prototype);
    this.dbConnectionId = opts.dbConnectionId;
  }
}

/**
 * The transaction ID wasn't found.
 *
 * @public
 */
export class TransactionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#TransactionNotFoundException";
  readonly name = "TransactionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionNotFoundException, __BaseException>) {
    super({
      name: "TransactionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionNotFoundException.prototype);
  }
}

/**
 * The `resourceArn`, `secretArn`, or `transactionId` value can't be found.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * There was a problem with the result because of one of the following conditions:
 *
 * - It contained an unsupported data type.
 * - It contained a multidimensional array.
 * - The size was too large.
 *
 * @public
 */
export class UnsupportedResultException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rdsdata#UnsupportedResultException";
  readonly name = "UnsupportedResultException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedResultException, __BaseException>) {
    super({
      name: "UnsupportedResultException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedResultException.prototype);
  }
}
