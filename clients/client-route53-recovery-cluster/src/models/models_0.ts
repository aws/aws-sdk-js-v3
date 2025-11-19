// smithy-typescript generated code
import { RoutingControlState } from "./enums";

/**
 * @public
 */
export interface GetRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to get the state for.</p>
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingControlStateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the response.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * <p>The routing control name.</p>
   * @public
   */
  RoutingControlName?: string | undefined;
}

/**
 * <p>There was a validation error on the request.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field that had the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Information about the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel of the routing controls to list.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of routing controls objects that you want to return with this call. The default value is 500.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A routing control, which is a simple on/off switch that you
 * 			can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When
 * 			the state is set to OFF, traffic does not flow. </p>
 * @public
 */
export interface RoutingControl {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel where the routing control is located.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The name of the control panel where the routing control is located. Only ASCII characters are supported for control
   * 		panel names.</p>
   * @public
   */
  ControlPanelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn?: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   * @public
   */
  RoutingControlName?: string | undefined;

  /**
   * <p>The current state of the routing control. When a routing control state is set to ON, traffic flows to a cell. When
   * 			the state is set to OFF, traffic does not flow. </p>
   * @public
   */
  RoutingControlState?: RoutingControlState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the routing control owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * <p>The list of routing controls.</p>
   * @public
   */
  RoutingControls: RoutingControl[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to update the state for.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control. You can set the value to ON or OFF.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating the state of
   * 			a routing control. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStateResponse {}

/**
 * <p>A routing control state entry.</p>
 * @public
 */
export interface UpdateRoutingControlStateEntry {
  /**
   * <p>The Amazon Resource Name (ARN) for a routing control state entry.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The routing control state in a set of routing control state entries.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesRequest {
  /**
   * <p>A set of routing control entries that you want to update.</p>
   * @public
   */
  UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntry[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating routing
   * 			control states. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesResponse {}
