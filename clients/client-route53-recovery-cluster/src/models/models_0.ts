// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { Route53RecoveryClusterServiceException as __BaseException } from "./Route53RecoveryClusterServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
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
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to get the state for.</p>
   */
  RoutingControlArn: string | undefined;
}

export enum RoutingControlState {
  Off = "Off",
  On = "On",
}

export interface GetRoutingControlStateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the response.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;

  /**
   * <p>The routing control name.</p>
   */
  RoutingControlName?: string;
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
 * <p>The request references a routing control or control panel that was not found.</p>
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

export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel of the routing controls to list.</p>
   */
  ControlPanelArn?: string;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of routing controls objects that you want to return with this call. The default value is 500.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A routing control, which is a simple on/off switch that you
 * 			can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When
 * 			the state is Off, traffic does not flow. </p>
 */
export interface RoutingControl {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel where the routing control is located.</p>
   */
  ControlPanelArn?: string;

  /**
   * <p>The name of the control panel where the routing control is located.</p>
   */
  ControlPanelName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn?: string;

  /**
   * <p>The name of the routing control.</p>
   */
  RoutingControlName?: string;

  /**
   * <p>The current state of the routing control. When a routing control state is On, traffic flows to a cell. When
   * 			the state is Off, traffic does not flow. </p>
   */
  RoutingControlState?: RoutingControlState | string;
}

export interface ListRoutingControlsResponse {
  /**
   * <p>The list of routing controls.</p>
   */
  RoutingControls: RoutingControl[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * <p>The request can't update that many routing control states at the same time. Try again with fewer routing control states.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource identifier of the limit that was exceeded.</p>
   */
  resourceId?: string;

  /**
   * <p>The resource type of the limit that was exceeded.</p>
   */
  resourceType?: string;

  /**
   * <p>The code of the limit that was exceeded.</p>
   */
  limitCode: string | undefined;

  /**
   * <p>The service code of the limit that was exceeded.</p>
   */
  serviceCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.limitCode = opts.limitCode;
    this.serviceCode = opts.serviceCode;
  }
}

export interface UpdateRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to update the state for.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control. You can set the value to be On or Off.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating the state of
   * 			a routing control. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  SafetyRulesToOverride?: string[];
}

export interface UpdateRoutingControlStateResponse {}

/**
 * <p>A routing control state entry.</p>
 */
export interface UpdateRoutingControlStateEntry {
  /**
   * <p>The Amazon Resource Name (ARN) for a routing control state entry.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The routing control state in a set of routing control state entries.</p>
   */
  RoutingControlState: RoutingControlState | string | undefined;
}

export interface UpdateRoutingControlStatesRequest {
  /**
   * <p>A set of routing control entries that you want to update.</p>
   */
  UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntry[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating routing
   * 			control states. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  SafetyRulesToOverride?: string[];
}

export interface UpdateRoutingControlStatesResponse {}

/**
 * @internal
 */
export const GetRoutingControlStateRequestFilterSensitiveLog = (obj: GetRoutingControlStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRoutingControlStateResponseFilterSensitiveLog = (obj: GetRoutingControlStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingControlsRequestFilterSensitiveLog = (obj: ListRoutingControlsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingControlFilterSensitiveLog = (obj: RoutingControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingControlsResponseFilterSensitiveLog = (obj: ListRoutingControlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlStateRequestFilterSensitiveLog = (obj: UpdateRoutingControlStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlStateResponseFilterSensitiveLog = (obj: UpdateRoutingControlStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlStateEntryFilterSensitiveLog = (obj: UpdateRoutingControlStateEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlStatesRequestFilterSensitiveLog = (obj: UpdateRoutingControlStatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlStatesResponseFilterSensitiveLog = (obj: UpdateRoutingControlStatesResponse): any => ({
  ...obj,
});
