// smithy-typescript generated code
import { NetworkType, RuleType, Status } from "./enums";

/**
 * <p>A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.</p>
 * @public
 */
export interface ClusterEndpoint {
  /**
   * <p>A cluster endpoint. Specify an endpoint and Amazon Web Services Region when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for a cluster endpoint.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   * @public
   */
  ClusterEndpoints?: ClusterEndpoint[] | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The Amazon Web Services account ID of the cluster owner.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * <p>A control panel represents a group of routing controls that can be changed together in a single transaction.</p>
 * @public
 */
export interface ControlPanel {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the control panel.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</p>
   * @public
   */
  DefaultControlPanel?: boolean | undefined;

  /**
   * <p>The name of the control panel. You can use any non-white space character in the name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The number of routing controls in the control panel.</p>
   * @public
   */
  RoutingControlCount?: number | undefined;

  /**
   * <p>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The Amazon Web Services account ID of the control panel owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p>
 * @public
 */
export interface RoutingControl {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn?: string | undefined;

  /**
   * <p>The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The Amazon Web Services account ID of the routing control owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * <p>The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes.</p>
 * @public
 */
export interface RuleConfig {
  /**
   * <p>Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.</p>
   * @public
   */
  Inverted: boolean | undefined;

  /**
   * <p>The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.</p>
   * @public
   */
  Threshold: number | undefined;

  /**
   * <p>A rule can be one of the following: ATLEAST, AND, or OR.</p>
   * @public
   */
  Type: RuleType | undefined;
}

/**
 * <p>An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
 * @public
 */
export interface AssertionRule {
  /**
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   * @public
   */
  AssertedControls: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>Name of the assertion rule. You can use any non-white space character in the name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific assertion routing controls (AssertedControls) that designate how many routing control states must be ON as the result of a transaction. For example, if you have three assertion routing controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion routing control states must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>The deployment status of an assertion rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;

  /**
   * <p>The Amazon Web Services account ID of the assertion rule owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
 * @public
 */
export interface GatingRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>An array of gating routing control Amazon Resource Names (ARNs). For a simple "on/off" switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.</p>
   * @public
   */
  GatingControls: string[] | undefined;

  /**
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for gating routing controls that designate how many of the routing control states must be ON to allow you to update target routing control states.</p>
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>The deployment status of a gating rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p>An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control. As a simple example, if you have a single gating control, it acts as an overall "on/off" switch for a set of target routing controls. You can use this to manually override automated failover, for example.</p>
   * @public
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;

  /**
   * <p>The Amazon Web Services account ID of the gating rule owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * <p>A safety rule. A safety rule can be an assertion rule or a gating rule.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control state is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
   * @public
   */
  ASSERTION?: AssertionRule | undefined;

  /**
   * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
   * @public
   */
  GATING?: GatingRule | undefined;
}

/**
 * <p>An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 * @public
 */
export interface AssertionRuleUpdate {
  /**
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>Creates a cluster.</p>
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The tags associated with the cluster.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The cluster that was created.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The details of the control panel that you're creating.</p>
 * @public
 */
export interface CreateControlPanelRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster for the control panel.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The name of the control panel.</p>
   * @public
   */
  ControlPanelName: string | undefined;

  /**
   * <p>The tags associated with the control panel.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateControlPanelResponse {
  /**
   * <p>Information about a control panel.</p>
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * <p>The details of the routing control that you're creating.</p>
 * @public
 */
export interface CreateRoutingControlRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the routing control.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   * @public
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface CreateRoutingControlResponse {
  /**
   * <p>The routing control that is created.</p>
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * <p>A new assertion rule for a control panel.</p>
 * @public
 */
export interface NewAssertionRule {
  /**
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   * @public
   */
  AssertedControls: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be ON as the result of a transaction. For example, if you have three assertion controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion controls must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>A new gating rule for a control panel.</p>
 * @public
 */
export interface NewGatingRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.</p>
   * @public
   */
  GatingControls: string[] | undefined;

  /**
   * <p>The name for the new gating rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific gating controls (routing controls) that designate how many control states must be ON to allow you to change (set or unset) the target control states.</p>
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify ATLEAST 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.</p> <p>In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.</p>
   * @public
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>The request body that you include when you create a safety rule.</p>
 * @public
 */
export interface CreateSafetyRuleRequest {
  /**
   * <p>The assertion rule requested.</p>
   * @public
   */
  AssertionRule?: NewAssertionRule | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The gating rule requested.</p>
   * @public
   */
  GatingRule?: NewGatingRule | undefined;

  /**
   * <p>The tags associated with the safety rule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSafetyRuleResponse {
  /**
   * <p>The assertion rule created.</p>
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * <p>The gating rule created.</p>
   * @public
   */
  GatingRule?: GatingRule | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that you're deleting.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {}

/**
 * @public
 */
export interface DeleteControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteControlPanelResponse {}

/**
 * @public
 */
export interface DeleteRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control that you're deleting.</p>
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoutingControlResponse {}

/**
 * @public
 */
export interface DeleteSafetyRuleRequest {
  /**
   * <p>The ARN of the safety rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSafetyRuleResponse {}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * <p>The cluster for the DescribeCluster request.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeControlPanelResponse {
  /**
   * <p>Information about the control panel.</p>
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingControlResponse {
  /**
   * <p>Information about the routing control.</p>
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * @public
 */
export interface DescribeSafetyRuleRequest {
  /**
   * <p>The ARN of the safety rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeSafetyRuleResponse {
  /**
   * <p>The assertion rule in the response.</p>
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * <p>The gating rule in the response.</p>
   * @public
   */
  GatingRule?: GatingRule | undefined;
}

/**
 * <p>Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 * @public
 */
export interface GatingRuleUpdate {
  /**
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The resource policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksResponse {
  /**
   * <p>Identifiers for the health checks.</p>
   * @public
   */
  HealthCheckIds?: string[] | undefined;

  /**
   * <p>Next token for listing health checks.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>An array of the clusters in an account.</p>
   * @public
   */
  Clusters?: Cluster[] | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlPanelsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlPanelsResponse {
  /**
   * <p>The result of a successful ListControlPanel request.</p>
   * @public
   */
  ControlPanels?: ControlPanel[] | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of routing controls.</p>
   * @public
   */
  RoutingControls?: RoutingControl[] | undefined;
}

/**
 * @public
 */
export interface ListSafetyRulesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSafetyRulesResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of safety rules in a control panel.</p>
   * @public
   */
  SafetyRules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Request of adding tag to the resource</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys for the tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>The details of the cluster that you're updating.</p>
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.</p>
   * @public
   */
  NetworkType: NetworkType | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>The cluster that was updated.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The details of the control panel that you're updating.</p>
 * @public
 */
export interface UpdateControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The name of the control panel.</p>
   * @public
   */
  ControlPanelName: string | undefined;
}

/**
 * @public
 */
export interface UpdateControlPanelResponse {
  /**
   * <p>The control panel to update.</p>
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * <p>The details of the routing control that you're updating.</p>
 * @public
 */
export interface UpdateRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   * @public
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlResponse {
  /**
   * <p>The routing control that was updated.</p>
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * <p>A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability.</p>
 * @public
 */
export interface UpdateSafetyRuleRequest {
  /**
   * <p>The assertion rule to update.</p>
   * @public
   */
  AssertionRuleUpdate?: AssertionRuleUpdate | undefined;

  /**
   * <p>The gating rule to update.</p>
   * @public
   */
  GatingRuleUpdate?: GatingRuleUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyRuleResponse {
  /**
   * <p>The assertion rule updated.</p>
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * <p>The gating rule updated.</p>
   * @public
   */
  GatingRule?: GatingRule | undefined;
}
