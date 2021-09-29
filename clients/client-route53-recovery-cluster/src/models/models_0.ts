import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You don't have sufficient permissions to query the routing control state.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict with this request. Try again.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * Description of the ConflictException error
   */
  message: string | undefined;

  /**
   * Identifier of the resource in use
   */
  resourceId: string | undefined;

  /**
   * Type of the resource in use
   */
  resourceType: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster endpoint isn't available. Try another cluster endpoint.</p>
 */
export interface EndpointTemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "EndpointTemporarilyUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export namespace EndpointTemporarilyUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointTemporarilyUnavailableException): any => ({
    ...obj,
  });
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
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
  /**
   * Advice to clients on when the call can be safely retried
   */
  retryAfterSeconds?: number;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The request references a routing control that was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * Hypothetical resource identifier that was not found
   */
  resourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   */
  resourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied because of request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
  /**
   * Advice to clients on when the call can be safely retried
   */
  retryAfterSeconds?: number;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
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
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
  /**
   * Reason the request failed validation
   */
  reason?: ValidationExceptionReason | string;

  /**
   * The fields that caused the error, if applicable
   */
  fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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
