// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { Route53RecoveryControlConfigServiceException as __BaseException } from "./Route53RecoveryControlConfigServiceException";

/**
 * <p>A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.</p>
 */
export interface ClusterEndpoint {
  /**
   * <p>A cluster endpoint. Specify an endpoint and Amazon Web Services Region when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   */
  Endpoint?: string;

  /**
   * <p>The Amazon Web Services Region for a cluster endpoint.</p>
   */
  Region?: string;
}

export enum Status {
  DEPLOYED = "DEPLOYED",
  PENDING = "PENDING",
  PENDING_DELETION = "PENDING_DELETION",
}

/**
 * <p>A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   */
  ClusterEndpoints?: ClusterEndpoint[];

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

/**
 * <p>A control panel represents a group of routing controls that can be changed together in a single transaction.</p>
 */
export interface ControlPanel {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the control panel.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn?: string;

  /**
   * <p>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</p>
   */
  DefaultControlPanel?: boolean;

  /**
   * <p>The name of the control panel. You can use any non-white space character in the name.</p>
   */
  Name?: string;

  /**
   * <p>The number of routing controls in the control panel.</p>
   */
  RoutingControlCount?: number;

  /**
   * <p>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

/**
 * <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p>
 */
export interface RoutingControl {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   */
  ControlPanelArn?: string;

  /**
   * <p>The name of the routing control.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn?: string;

  /**
   * <p>The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

export enum RuleType {
  AND = "AND",
  ATLEAST = "ATLEAST",
  OR = "OR",
}

/**
 * <p>The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes.</p>
 */
export interface RuleConfig {
  /**
   * <p>Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.</p>
   */
  Inverted: boolean | undefined;

  /**
   * <p>The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>A rule can be one of the following: ATLEAST, AND, or OR.</p>
   */
  Type: RuleType | string | undefined;
}

/**
 * <p>An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
 */
export interface AssertionRule {
  /**
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   */
  AssertedControls: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>Name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific assertion routing controls (AssertedControls) that designate how many routing control states must be ON as the result of a transaction. For example, if you have three assertion routing controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion routing control states must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>The deployment status of an assertion rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status: Status | string | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
 */
export interface GatingRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>An array of gating routing control Amazon Resource Names (ARNs). For a simple "on/off" switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.</p>
   */
  GatingControls: string[] | undefined;

  /**
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for gating routing controls that designate how many of the routing control states must be ON to allow you to update target routing control states.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>The deployment status of a gating rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status: Status | string | undefined;

  /**
   * <p>An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control. As a simple example, if you have a single gating control, it acts as an overall "on/off" switch for a set of target routing controls. You can use this to manually override automated failover, for example.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>A safety rule. A safety rule can be an assertion rule or a gating rule.</p>
 */
export interface Rule {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control state is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
   */
  ASSERTION?: AssertionRule;

  /**
   * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
   */
  GATING?: GatingRule;
}

/**
 * <p>403 response - You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * <p>An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 */
export interface AssertionRuleUpdate {
  /**
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>409 response - ConflictException. You might be using a predefined variable.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
 * <p>Creates a cluster.</p>
 */
export interface CreateClusterRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The tags associated with the cluster.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateClusterResponse {
  /**
   * <p>The cluster that was created.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * <p>402 response - You attempted to create more resources than the service allows based on service quotas.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * <p>429 response - LimitExceededException or TooManyRequestsException.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
 * <p>The details of the control panel that you're creating.</p>
 */
export interface CreateControlPanelRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster for the control panel.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The name of the control panel.</p>
   */
  ControlPanelName: string | undefined;

  /**
   * <p>The tags associated with the control panel.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateControlPanelResponse {
  /**
   * <p>Information about a control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

/**
 * <p>The details of the routing control that you're creating.</p>
 */
export interface CreateRoutingControlRequest {
  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the routing control.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   */
  ControlPanelArn?: string;

  /**
   * <p>The name of the routing control.</p>
   */
  RoutingControlName: string | undefined;
}

export interface CreateRoutingControlResponse {
  /**
   * <p>The routing control that is created.</p>
   */
  RoutingControl?: RoutingControl;
}

/**
 * <p>A new assertion rule for a control panel.</p>
 */
export interface NewAssertionRule {
  /**
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   */
  AssertedControls: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be ON as the result of a transaction. For example, if you have three assertion controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion controls must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>A new gating rule for a control panel.</p>
 */
export interface NewGatingRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.</p>
   */
  GatingControls: string[] | undefined;

  /**
   * <p>The name for the new gating rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific gating controls (routing controls) that designate how many control states must be ON to allow you to change (set or unset) the target control states.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify ATLEAST 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.</p> <p>In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * <p>The request body that you include when you create a safety rule.</p>
 */
export interface CreateSafetyRuleRequest {
  /**
   * <p>The assertion rule requested.</p>
   */
  AssertionRule?: NewAssertionRule;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The gating rule requested.</p>
   */
  GatingRule?: NewGatingRule;

  /**
   * <p>The tags associated with the safety rule.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateSafetyRuleResponse {
  /**
   * <p>The assertion rule created.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>The gating rule created.</p>
   */
  GatingRule?: GatingRule;
}

export interface DeleteClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that you're deleting.</p>
   */
  ClusterArn: string | undefined;
}

export interface DeleteClusterResponse {}

export interface DeleteControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;
}

export interface DeleteControlPanelResponse {}

export interface DeleteRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control that you're deleting.</p>
   */
  RoutingControlArn: string | undefined;
}

export interface DeleteRoutingControlResponse {}

export interface DeleteSafetyRuleRequest {
  /**
   * <p>The ARN of the safety rule.</p>
   */
  SafetyRuleArn: string | undefined;
}

export interface DeleteSafetyRuleResponse {}

export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export interface DescribeClusterResponse {
  /**
   * <p>The cluster for the DescribeCluster request.</p>
   */
  Cluster?: Cluster;
}

export interface DescribeControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;
}

export interface DescribeControlPanelResponse {
  /**
   * <p>Information about the control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

export interface DescribeRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;
}

export interface DescribeRoutingControlResponse {
  /**
   * <p>Information about the routing control.</p>
   */
  RoutingControl?: RoutingControl;
}

export interface DescribeSafetyRuleRequest {
  /**
   * <p>The ARN of the safety rule.</p>
   */
  SafetyRuleArn: string | undefined;
}

export interface DescribeSafetyRuleResponse {
  /**
   * <p>The assertion rule in the response.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>The gating rule in the response.</p>
   */
  GatingRule?: GatingRule;
}

/**
 * <p>Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 */
export interface GatingRuleUpdate {
  /**
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

export interface ListAssociatedRoute53HealthChecksRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;
}

export interface ListAssociatedRoute53HealthChecksResponse {
  /**
   * <p>Identifiers for the health checks.</p>
   */
  HealthCheckIds?: string[];

  /**
   * <p>Next token for listing health checks.</p>
   */
  NextToken?: string;
}

export interface ListClustersRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListClustersResponse {
  /**
   * <p>An array of the clusters in an account.</p>
   */
  Clusters?: Cluster[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListControlPanelsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListControlPanelsResponse {
  /**
   * <p>The result of a successful ListControlPanel request.</p>
   */
  ControlPanels?: ControlPanel[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListRoutingControlsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of routing controls.</p>
   */
  RoutingControls?: RoutingControl[];
}

export interface ListSafetyRulesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export interface ListSafetyRulesResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of safety rules in a control panel.</p>
   */
  SafetyRules?: Rule[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Request of adding tag to the resource</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys for the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>The details of the control panel that you're updating.</p>
 */
export interface UpdateControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The name of the control panel.</p>
   */
  ControlPanelName: string | undefined;
}

export interface UpdateControlPanelResponse {
  /**
   * <p>The control panel to update.</p>
   */
  ControlPanel?: ControlPanel;
}

/**
 * <p>The details of the routing control that you're updating.</p>
 */
export interface UpdateRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   */
  RoutingControlName: string | undefined;
}

export interface UpdateRoutingControlResponse {
  /**
   * <p>The routing control that was updated.</p>
   */
  RoutingControl?: RoutingControl;
}

/**
 * <p>A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability.</p>
 */
export interface UpdateSafetyRuleRequest {
  /**
   * <p>The assertion rule to update.</p>
   */
  AssertionRuleUpdate?: AssertionRuleUpdate;

  /**
   * <p>The gating rule to update.</p>
   */
  GatingRuleUpdate?: GatingRuleUpdate;
}

export interface UpdateSafetyRuleResponse {
  /**
   * <p>The assertion rule updated.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>The gating rule updated.</p>
   */
  GatingRule?: GatingRule;
}

/**
 * @internal
 */
export const ClusterEndpointFilterSensitiveLog = (obj: ClusterEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlPanelFilterSensitiveLog = (obj: ControlPanel): any => ({
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
export const RuleConfigFilterSensitiveLog = (obj: RuleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssertionRuleFilterSensitiveLog = (obj: AssertionRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatingRuleFilterSensitiveLog = (obj: GatingRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssertionRuleUpdateFilterSensitiveLog = (obj: AssertionRuleUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterRequestFilterSensitiveLog = (obj: CreateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterResponseFilterSensitiveLog = (obj: CreateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateControlPanelRequestFilterSensitiveLog = (obj: CreateControlPanelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateControlPanelResponseFilterSensitiveLog = (obj: CreateControlPanelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoutingControlRequestFilterSensitiveLog = (obj: CreateRoutingControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoutingControlResponseFilterSensitiveLog = (obj: CreateRoutingControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NewAssertionRuleFilterSensitiveLog = (obj: NewAssertionRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NewGatingRuleFilterSensitiveLog = (obj: NewGatingRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSafetyRuleRequestFilterSensitiveLog = (obj: CreateSafetyRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSafetyRuleResponseFilterSensitiveLog = (obj: CreateSafetyRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterRequestFilterSensitiveLog = (obj: DeleteClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterResponseFilterSensitiveLog = (obj: DeleteClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteControlPanelRequestFilterSensitiveLog = (obj: DeleteControlPanelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteControlPanelResponseFilterSensitiveLog = (obj: DeleteControlPanelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRoutingControlRequestFilterSensitiveLog = (obj: DeleteRoutingControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRoutingControlResponseFilterSensitiveLog = (obj: DeleteRoutingControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSafetyRuleRequestFilterSensitiveLog = (obj: DeleteSafetyRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSafetyRuleResponseFilterSensitiveLog = (obj: DeleteSafetyRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterRequestFilterSensitiveLog = (obj: DescribeClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterResponseFilterSensitiveLog = (obj: DescribeClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeControlPanelRequestFilterSensitiveLog = (obj: DescribeControlPanelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeControlPanelResponseFilterSensitiveLog = (obj: DescribeControlPanelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRoutingControlRequestFilterSensitiveLog = (obj: DescribeRoutingControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRoutingControlResponseFilterSensitiveLog = (obj: DescribeRoutingControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSafetyRuleRequestFilterSensitiveLog = (obj: DescribeSafetyRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSafetyRuleResponseFilterSensitiveLog = (obj: DescribeSafetyRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatingRuleUpdateFilterSensitiveLog = (obj: GatingRuleUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedRoute53HealthChecksRequestFilterSensitiveLog = (
  obj: ListAssociatedRoute53HealthChecksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedRoute53HealthChecksResponseFilterSensitiveLog = (
  obj: ListAssociatedRoute53HealthChecksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersRequestFilterSensitiveLog = (obj: ListClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersResponseFilterSensitiveLog = (obj: ListClustersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlPanelsRequestFilterSensitiveLog = (obj: ListControlPanelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListControlPanelsResponseFilterSensitiveLog = (obj: ListControlPanelsResponse): any => ({
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
export const ListRoutingControlsResponseFilterSensitiveLog = (obj: ListRoutingControlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSafetyRulesRequestFilterSensitiveLog = (obj: ListSafetyRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSafetyRulesResponseFilterSensitiveLog = (obj: ListSafetyRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateControlPanelRequestFilterSensitiveLog = (obj: UpdateControlPanelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateControlPanelResponseFilterSensitiveLog = (obj: UpdateControlPanelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlRequestFilterSensitiveLog = (obj: UpdateRoutingControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingControlResponseFilterSensitiveLog = (obj: UpdateRoutingControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSafetyRuleRequestFilterSensitiveLog = (obj: UpdateSafetyRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSafetyRuleResponseFilterSensitiveLog = (obj: UpdateSafetyRuleResponse): any => ({
  ...obj,
});
