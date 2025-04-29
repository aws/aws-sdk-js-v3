// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SSMGuiConnectServiceException as __BaseException } from "./SSMGuiConnectServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * <p>An error occurred due to a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The S3 bucket where RDP connection recordings are stored.</p>
 * @public
 */
export interface S3Bucket {
  /**
   * <p>The Amazon Web Services account number that owns the S3 bucket.</p>
   * @public
   */
  BucketOwner: string | undefined;

  /**
   * <p>The name of the S3 bucket where RDP connection recordings are stored.</p>
   * @public
   */
  BucketName: string | undefined;
}

/**
 * <p>Determines where recordings of RDP connections are stored.</p>
 * @public
 */
export interface RecordingDestinations {
  /**
   * <p>The S3 bucket where RDP connection recordings are stored.</p>
   * @public
   */
  S3Buckets: S3Bucket[] | undefined;
}

/**
 * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
 * @public
 */
export interface ConnectionRecordingPreferences {
  /**
   * <p>Determines where recordings of RDP connections are stored.</p>
   * @public
   */
  RecordingDestinations: RecordingDestinations | undefined;

  /**
   * <p>The ARN of a KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same Amazon Web Services Region as the node you start an RDP connection to.</p>
   * @public
   */
  KMSKeyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesRequest {
  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * <p>Your request exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface GetConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesRequest {
  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences: ConnectionRecordingPreferences | undefined;

  /**
   * <p>User-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRecordingPreferencesResponse {
  /**
   * <p>Service-provided idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The set of preferences used for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region. This includes details such as which S3 bucket recordings are stored in.</p>
   * @public
   */
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences | undefined;
}
