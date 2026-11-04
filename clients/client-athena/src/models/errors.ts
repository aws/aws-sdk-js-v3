// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AthenaServiceException as __BaseException } from "./AthenaServiceException";
import type { ThrottleReason } from "./enums";

/**
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#InternalServerException";
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
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * The error code returned when the query execution failed to process, or when the processing request for the named query failed.
   *
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
 * Indicates that the request was throttled.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The reason for the query throttling, for example, when it exceeds the concurrent query limit.
   *
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
 * A resource, such as a workgroup, was not found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The name of the Amazon resource.
   *
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
 * An exception that Athena received when it called a custom metastore. Occurs if the error is not caused by user input (`InvalidRequestException`) or from the Athena platform (`InternalServerException`). For example, if a user-created Lambda function is missing permissions, the Lambda `4XX` exception is returned in a `MetadataException`.
 *
 * @public
 */
export class MetadataException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#MetadataException";
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
 * The specified session already exists.
 *
 * @public
 */
export class SessionAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.athena#SessionAlreadyExistsException";
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
