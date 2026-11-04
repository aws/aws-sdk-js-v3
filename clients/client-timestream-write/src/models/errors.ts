// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { RejectedRecord } from "./models_0";
import { TimestreamWriteServiceException as __BaseException } from "./TimestreamWriteServiceException";

/**
 * You are not authorized to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * Timestream was unable to process this request because it contains resource that already exists.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
 * The requested endpoint was not valid.
 *
 * @public
 */
export class InvalidEndpointException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#InvalidEndpointException";
  readonly name = "InvalidEndpointException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointException, __BaseException>) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#ResourceNotFoundException";
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
 * The instance quota of resource exceeded for this account.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * An invalid or malformed request.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * WriteRecords would throw this exception in the following cases:
 *
 * - Records with duplicate data where there are multiple records with the same dimensions, timestamps, and measure names but:
 *
 *   - Measure values are different
 *   - Version is not present in the request *or* the value of version in the new record is equal to or lower than the existing value
 *
 *   In this case, if Timestream rejects data, the `ExistingVersion` field in the `RejectedRecords` response will indicate the current record’s version. To force an update, you can resend the request with a version for the record set to a value greater than the `ExistingVersion`.
 * - Records with timestamps that lie outside the retention duration of the memory store.
 * - Records with dimensions or measures that exceed the Timestream defined limits.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html) in the Amazon Timestream Developer Guide.
 *
 * @public
 */
export class RejectedRecordsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.timestreamwrite#RejectedRecordsException";
  readonly name = "RejectedRecordsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @public
   */
  RejectedRecords?: RejectedRecord[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RejectedRecordsException, __BaseException>) {
    super({
      name: "RejectedRecordsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RejectedRecordsException.prototype);
    this.Message = opts.Message;
    this.RejectedRecords = opts.RejectedRecords;
  }
}
