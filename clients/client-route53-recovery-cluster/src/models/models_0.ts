// smithy-typescript generated code
import type { RoutingControlState } from "./enums";

/**
 * @public
 */
export interface GetRoutingControlStateRequest {
  /**
   * The Amazon Resource Name (ARN) for the routing control that you want to get the state for.
   *
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingControlStateResponse {
  /**
   * The Amazon Resource Name (ARN) of the response.
   *
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * The state of the routing control.
   *
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * The routing control name.
   *
   * @public
   */
  RoutingControlName?: string | undefined;
}

/**
 * There was a validation error on the request.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field that had the validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Information about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * The Amazon Resource Name (ARN) of the control panel of the routing controls to list.
   *
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of routing controls objects that you want to return with this call. The default value is 500.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A routing control, which is a simple on/off switch that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow.
 *
 * @public
 */
export interface RoutingControl {
  /**
   * The Amazon Resource Name (ARN) of the control panel where the routing control is located.
   *
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * The name of the control panel where the routing control is located. Only ASCII characters are supported for control panel names.
   *
   * @public
   */
  ControlPanelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the routing control.
   *
   * @public
   */
  RoutingControlArn?: string | undefined;

  /**
   * The name of the routing control.
   *
   * @public
   */
  RoutingControlName?: string | undefined;

  /**
   * The current state of the routing control. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow.
   *
   * @public
   */
  RoutingControlState?: RoutingControlState | undefined;

  /**
   * The Amazon Web Services account ID of the routing control owner.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * The list of routing controls.
   *
   * @public
   */
  RoutingControls: RoutingControl[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStateRequest {
  /**
   * The Amazon Resource Name (ARN) for the routing control that you want to update the state for.
   *
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * The state of the routing control. You can set the value to ON or OFF.
   *
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating the state of a routing control. You can override one safety rule or multiple safety rules by including one or more ARNs, separated by commas.
   *
   * For more information, see [Override safety rules to reroute traffic](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
   *
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStateResponse {}

/**
 * A routing control state entry.
 *
 * @public
 */
export interface UpdateRoutingControlStateEntry {
  /**
   * The Amazon Resource Name (ARN) for a routing control state entry.
   *
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * The routing control state in a set of routing control state entries.
   *
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesRequest {
  /**
   * A set of routing control entries that you want to update.
   *
   * @public
   */
  UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntry[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating routing control states. You can override one safety rule or multiple safety rules by including one or more ARNs, separated by commas.
   *
   * For more information, see [Override safety rules to reroute traffic](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
   *
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesResponse {}
