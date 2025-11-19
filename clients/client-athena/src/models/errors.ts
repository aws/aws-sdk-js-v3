// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AthenaServiceException as __BaseException } from "./AthenaServiceException";
import { ThrottleReason } from "./enums";

/**
 * <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
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
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code returned when the query execution failed to process, or when the
   *             processing request for the named query failed.</p>
   * @public
   */
  AthenaErrorCode?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.AthenaErrorCode = opts.AthenaErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that the request was throttled.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query
   *             limit.</p>
   * @public
   */
  Reason?: ThrottleReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>A resource, such as a workgroup, was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the Amazon resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
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
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>An exception that Athena received when it called a custom metastore.
 *             Occurs if the error is not caused by user input (<code>InvalidRequestException</code>)
 *             or from the Athena platform (<code>InternalServerException</code>). For
 *             example, if a user-created Lambda function is missing permissions, the
 *                 Lambda
 *             <code>4XX</code> exception is returned in a <code>MetadataException</code>.</p>
 * @public
 */
export class MetadataException extends __BaseException {
  readonly name = "MetadataException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MetadataException, __BaseException>) {
    super({
      name: "MetadataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MetadataException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified session already exists.</p>
 * @public
 */
export class SessionAlreadyExistsException extends __BaseException {
  readonly name = "SessionAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionAlreadyExistsException, __BaseException>) {
    super({
      name: "SessionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}
