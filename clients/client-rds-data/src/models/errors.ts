// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RDSDataServiceException as __BaseException } from "./RDSDataServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 * @public
 */
export class BadRequestException extends __BaseException {
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
 * <p>There was an error in processing the SQL statement.</p>
 * @public
 */
export class DatabaseErrorException extends __BaseException {
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
 * <p>The DB cluster doesn't have a DB instance.</p>
 * @public
 */
export class DatabaseNotFoundException extends __BaseException {
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
 * <p>A request was cancelled because the Aurora Serverless v2 DB instance was paused.
 *          The Data API request automatically resumes the DB instance. Wait a few seconds and
 *          try again.</p>
 * @public
 */
export class DatabaseResumingException extends __BaseException {
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
 * <p>The writer instance in the DB cluster isn't available.</p>
 * @public
 */
export class DatabaseUnavailableException extends __BaseException {
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
 * <p>There are insufficient privileges to make the call.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
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
 * <p>The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.</p>
 * @public
 */
export class HttpEndpointNotEnabledException extends __BaseException {
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
 * <p>An internal error occurred.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
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
 * <p>The resource is in an invalid state.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
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
 * <p>The Secrets Manager secret used with the request isn't valid.</p>
 * @public
 */
export class InvalidSecretException extends __BaseException {
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
 * <p>There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>RDS Data API timed out retrieving the secret.</p>
 *             </li>
 *             <li>
 *                <p>The secret provided wasn't found.</p>
 *             </li>
 *             <li>
 *                <p>The secret couldn't be decrypted.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class SecretsErrorException extends __BaseException {
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
 * <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
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
 * <p>The execution of the SQL statement timed out.</p>
 * @public
 */
export class StatementTimeoutException extends __BaseException {
  readonly name = "StatementTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The database connection ID that executed the SQL statement.</p>
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
 * <p>The transaction ID wasn't found.</p>
 * @public
 */
export class TransactionNotFoundException extends __BaseException {
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
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
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
 * <p>There was a problem with the result because of one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>It contained an unsupported data type.</p>
 *             </li>
 *             <li>
 *                <p>It contained a multidimensional array.</p>
 *             </li>
 *             <li>
 *                <p>The size was too large.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class UnsupportedResultException extends __BaseException {
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
