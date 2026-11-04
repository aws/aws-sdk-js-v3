// smithy-typescript generated code
import type { NetworkType, RuleType, Status } from "./enums";

/**
 * A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.
 *
 * @public
 */
export interface ClusterEndpoint {
  /**
   * A cluster endpoint. Specify an endpoint and Amazon Web Services Region when you want to set or retrieve a routing control state in the cluster.
   *
   * To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The Amazon Web Services Region for a cluster endpoint.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.
   *
   * To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.
   *
   * @public
   */
  ClusterEndpoints?: ClusterEndpoint[] | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The Amazon Web Services account ID of the cluster owner.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * A control panel represents a group of routing controls that can be changed together in a single transaction.
 *
 * @public
 */
export interface ControlPanel {
  /**
   * The Amazon Resource Name (ARN) of the cluster that includes the control panel.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.
   *
   * @public
   */
  DefaultControlPanel?: boolean | undefined;

  /**
   * The name of the control panel. You can use any non-white space character in the name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of routing controls in the control panel.
   *
   * @public
   */
  RoutingControlCount?: number | undefined;

  /**
   * The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The Amazon Web Services account ID of the control panel owner.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
 *
 * @public
 */
export interface RoutingControl {
  /**
   * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
   *
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * The name of the routing control.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the routing control.
   *
   * @public
   */
  RoutingControlArn?: string | undefined;

  /**
   * The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The Amazon Web Services account ID of the routing control owner.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes.
 *
 * @public
 */
export interface RuleConfig {
  /**
   * Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
   *
   * @public
   */
  Inverted: boolean | undefined;

  /**
   * The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
   *
   * @public
   */
  Threshold: number | undefined;

  /**
   * A rule can be one of the following: ATLEAST, AND, or OR.
   *
   * @public
   */
  Type: RuleType | undefined;
}

/**
 * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
 *
 * @public
 */
export interface AssertionRule {
  /**
   * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.
   *
   * @public
   */
  AssertedControls: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * Name of the assertion rule. You can use any non-white space character in the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The criteria that you set for specific assertion routing controls (AssertedControls) that designate how many routing control states must be ON as the result of a transaction. For example, if you have three assertion routing controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion routing control states must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.
   *
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assertion rule.
   *
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * The deployment status of an assertion rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;

  /**
   * The Amazon Web Services account ID of the assertion rule owner.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
 *
 * For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
 *
 * @public
 */
export interface GatingRule {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * An array of gating routing control Amazon Resource Names (ARNs). For a simple "on/off" switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.
   *
   * @public
   */
  GatingControls: string[] | undefined;

  /**
   * The name for the gating rule. You can use any non-white space character in the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The criteria that you set for gating routing controls that designate how many of the routing control states must be ON to allow you to update target routing control states.
   *
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gating rule.
   *
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * The deployment status of a gating rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control. As a simple example, if you have a single gating control, it acts as an overall "on/off" switch for a set of target routing controls. You can use this to manually override automated failover, for example.
   *
   * @public
   */
  TargetControls: string[] | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;

  /**
   * The Amazon Web Services account ID of the gating rule owner.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * A safety rule. A safety rule can be an assertion rule or a gating rule.
 *
 * @public
 */
export interface Rule {
  /**
   * An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control state is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
   *
   * @public
   */
  ASSERTION?: AssertionRule | undefined;

  /**
   * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
   *
   * For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
   *
   * @public
   */
  GATING?: GatingRule | undefined;
}

/**
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
 *
 * @public
 */
export interface AssertionRuleUpdate {
  /**
   * The name of the assertion rule. You can use any non-white space character in the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assertion rule.
   *
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * Creates a cluster.
 *
 * @public
 */
export interface CreateClusterRequest {
  /**
   * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The tags associated with the cluster.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The cluster that was created.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * The details of the control panel that you're creating.
 *
 * @public
 */
export interface CreateControlPanelRequest {
  /**
   * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster for the control panel.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the control panel.
   *
   * @public
   */
  ControlPanelName: string | undefined;

  /**
   * The tags associated with the control panel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateControlPanelResponse {
  /**
   * Information about a control panel.
   *
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * The details of the routing control that you're creating.
 *
 * @public
 */
export interface CreateRoutingControlRequest {
  /**
   * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that includes the routing control.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
   *
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * The name of the routing control.
   *
   * @public
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface CreateRoutingControlResponse {
  /**
   * The routing control that is created.
   *
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * A new assertion rule for a control panel.
 *
 * @public
 */
export interface NewAssertionRule {
  /**
   * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.
   *
   * @public
   */
  AssertedControls: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * The name of the assertion rule. You can use any non-white space character in the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be ON as the result of a transaction. For example, if you have three assertion controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion controls must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.
   *
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * A new gating rule for a control panel.
 *
 * @public
 */
export interface NewGatingRule {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * The gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
   *
   * @public
   */
  GatingControls: string[] | undefined;

  /**
   * The name for the new gating rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The criteria that you set for specific gating controls (routing controls) that designate how many control states must be ON to allow you to change (set or unset) the target control states.
   *
   * @public
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify ATLEAST 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
   *
   * In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
   *
   * @public
   */
  TargetControls: string[] | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * The request body that you include when you create a safety rule.
 *
 * @public
 */
export interface CreateSafetyRuleRequest {
  /**
   * The assertion rule requested.
   *
   * @public
   */
  AssertionRule?: NewAssertionRule | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The gating rule requested.
   *
   * @public
   */
  GatingRule?: NewGatingRule | undefined;

  /**
   * The tags associated with the safety rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSafetyRuleResponse {
  /**
   * The assertion rule created.
   *
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * The gating rule created.
   *
   * @public
   */
  GatingRule?: GatingRule | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster that you're deleting.
   *
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
   * The Amazon Resource Name (ARN) of the control panel.
   *
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
   * The Amazon Resource Name (ARN) of the routing control that you're deleting.
   *
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
   * The ARN of the safety rule.
   *
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
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * The cluster for the DescribeCluster request.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeControlPanelRequest {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeControlPanelResponse {
  /**
   * Information about the control panel.
   *
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingControlRequest {
  /**
   * The Amazon Resource Name (ARN) of the routing control.
   *
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingControlResponse {
  /**
   * Information about the routing control.
   *
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * @public
 */
export interface DescribeSafetyRuleRequest {
  /**
   * The ARN of the safety rule.
   *
   * @public
   */
  SafetyRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeSafetyRuleResponse {
  /**
   * The assertion rule in the response.
   *
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * The gating rule in the response.
   *
   * @public
   */
  GatingRule?: GatingRule | undefined;
}

/**
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
 *
 * @public
 */
export interface GatingRuleUpdate {
  /**
   * The name for the gating rule. You can use any non-white space character in the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gating rule.
   *
   * @public
   */
  SafetyRuleArn: string | undefined;

  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   *
   * @public
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The resource policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksRequest {
  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the routing control.
   *
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksResponse {
  /**
   * Identifiers for the health checks.
   *
   * @public
   */
  HealthCheckIds?: string[] | undefined;

  /**
   * Next token for listing health checks.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * An array of the clusters in an account.
   *
   * @public
   */
  Clusters?: Cluster[] | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlPanelsRequest {
  /**
   * The Amazon Resource Name (ARN) of a cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListControlPanelsResponse {
  /**
   * The result of a successful ListControlPanel request.
   *
   * @public
   */
  ControlPanels?: ControlPanel[] | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of routing controls.
   *
   * @public
   */
  RoutingControls?: RoutingControl[] | undefined;
}

/**
 * @public
 */
export interface ListSafetyRulesRequest {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSafetyRulesResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of safety rules in a control panel.
   *
   * @public
   */
  SafetyRules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that's tagged.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Request of adding tag to the resource
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that's tagged.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags associated with the resource.
   *
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
   * The Amazon Resource Name (ARN) for the resource that's tagged.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys for the tags to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * The details of the cluster that you're updating.
 *
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The network type of the cluster. NetworkType can be one of the following: IPV4, DUALSTACK.
   *
   * @public
   */
  NetworkType: NetworkType | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * The cluster that was updated.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * The details of the control panel that you're updating.
 *
 * @public
 */
export interface UpdateControlPanelRequest {
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   *
   * @public
   */
  ControlPanelArn: string | undefined;

  /**
   * The name of the control panel.
   *
   * @public
   */
  ControlPanelName: string | undefined;
}

/**
 * @public
 */
export interface UpdateControlPanelResponse {
  /**
   * The control panel to update.
   *
   * @public
   */
  ControlPanel?: ControlPanel | undefined;
}

/**
 * The details of the routing control that you're updating.
 *
 * @public
 */
export interface UpdateRoutingControlRequest {
  /**
   * The Amazon Resource Name (ARN) of the routing control.
   *
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * The name of the routing control.
   *
   * @public
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlResponse {
  /**
   * The routing control that was updated.
   *
   * @public
   */
  RoutingControl?: RoutingControl | undefined;
}

/**
 * A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability.
 *
 * @public
 */
export interface UpdateSafetyRuleRequest {
  /**
   * The assertion rule to update.
   *
   * @public
   */
  AssertionRuleUpdate?: AssertionRuleUpdate | undefined;

  /**
   * The gating rule to update.
   *
   * @public
   */
  GatingRuleUpdate?: GatingRuleUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyRuleResponse {
  /**
   * The assertion rule updated.
   *
   * @public
   */
  AssertionRule?: AssertionRule | undefined;

  /**
   * The gating rule updated.
   *
   * @public
   */
  GatingRule?: GatingRule | undefined;
}
