import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { Route53RecoveryClusterServiceException as __BaseException } from "./Route53RecoveryClusterServiceException";

/**
 * <p>You don't have sufficient permissions to query the routing control state.</p>
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
 * <p>There was a conflict with this request. Try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource in use
   */
  resourceId: string | undefined;

  /**
   * Type of the resource in use
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The cluster endpoint isn't available. Try another cluster endpoint.</p>
 */
export class EndpointTemporarilyUnavailableException extends __BaseException {
  readonly name: "EndpointTemporarilyUnavailableException" = "EndpointTemporarilyUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointTemporarilyUnavailableException, __BaseException>) {
    super({
      name: "EndpointTemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointTemporarilyUnavailableException.prototype);
  }
}

export interface GetRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Number (ARN) for the routing control that you want to get the state for.</p>
   */
  RoutingControlArn: string | undefined;
}

export namespace GetRoutingControlStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoutingControlStateRequest): any => ({
    ...obj,
  });
}

export enum RoutingControlState {
  Off = "Off",
  On = "On",
}

export interface GetRoutingControlStateResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the response.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;
}

export namespace GetRoutingControlStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoutingControlStateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was an unexpected error during processing of the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * Advice to clients on when the call can be safely retried
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request references a routing control that was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Hypothetical resource identifier that was not found
   */
  resourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied because of request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * Advice to clients on when the call can be safely retried
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>There was a validation error on the request.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field that had the validation exception.</p>
   */
  name: string | undefined;

  /**
   * <p>Information about the validation exception.</p>
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>There was a validation error on the request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation
   */
  reason?: ValidationExceptionReason | string;

  /**
   * The fields that caused the error, if applicable
   */
  fields?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

export interface UpdateRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Number (ARN) for the routing control that you want to update the state for.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control. You can set the value to be On or Off.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;
}

export namespace UpdateRoutingControlStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlStateRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingControlStateResponse {}

export namespace UpdateRoutingControlStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlStateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A routing control state.</p>
 */
export interface UpdateRoutingControlStateEntry {
  /**
   * <p>The Amazon Resource Number (ARN) for the routing control state entry.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The routing control state in a set of routing control state entries.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;
}

export namespace UpdateRoutingControlStateEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlStateEntry): any => ({
    ...obj,
  });
}

export interface UpdateRoutingControlStatesRequest {
  /**
   * <p>A set of routing control entries that you want to update.</p>
   */
  UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntry[] | undefined;
}

export namespace UpdateRoutingControlStatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlStatesRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingControlStatesResponse {}

export namespace UpdateRoutingControlStatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlStatesResponse): any => ({
    ...obj,
  });
}
