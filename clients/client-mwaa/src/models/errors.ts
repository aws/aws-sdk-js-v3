// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { MWAAServiceException as __BaseException } from "./MWAAServiceException";

/**
 * <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
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
 * <p>ResourceNotFoundException: The resource is not available.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>InternalServerException: An internal error has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>ValidationException: The provided input is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>An exception indicating that a client-side error occurred during the Apache Airflow
 *             REST API call.</p>
 * @public
 */
export class RestApiClientException extends __BaseException {
  readonly name = "RestApiClientException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The HTTP status code returned by the Apache Airflow REST API call.</p>
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * <p>The error response data from the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RestApiClientException, __BaseException>) {
    super({
      name: "RestApiClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RestApiClientException.prototype);
    this.RestApiStatusCode = opts.RestApiStatusCode;
    this.RestApiResponse = opts.RestApiResponse;
  }
}

/**
 * <p>An exception indicating that a server-side error occurred during the Apache Airflow
 *             REST API call.</p>
 * @public
 */
export class RestApiServerException extends __BaseException {
  readonly name = "RestApiServerException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The HTTP status code returned by the Apache Airflow REST API call.</p>
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * <p>The error response data from the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RestApiServerException, __BaseException>) {
    super({
      name: "RestApiServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RestApiServerException.prototype);
    this.RestApiStatusCode = opts.RestApiStatusCode;
    this.RestApiResponse = opts.RestApiResponse;
  }
}
