// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53RecoveryControlConfigServiceException as __BaseException } from "./Route53RecoveryControlConfigServiceException";

/**
 * @public
 * <p>A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.</p>
 */
export interface ClusterEndpoint {
  /**
   * @public
   * <p>A cluster endpoint. Specify an endpoint and Amazon Web Services Region when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region for a cluster endpoint.</p>
   */
  Region?: string;
}

/**
 * @public
 * @enum
 */
export const Status = {
  DEPLOYED: "DEPLOYED",
  PENDING: "PENDING",
  PENDING_DELETION: "PENDING_DELETION",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * <p>A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Routing Control Actions.</p>
   */
  ClusterEndpoints?: ClusterEndpoint[];

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

/**
 * @public
 * <p>A control panel represents a group of routing controls that can be changed together in a single transaction.</p>
 */
export interface ControlPanel {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the control panel.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn?: string;

  /**
   * @public
   * <p>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</p>
   */
  DefaultControlPanel?: boolean;

  /**
   * @public
   * <p>The name of the control panel. You can use any non-white space character in the name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The number of routing controls in the control panel.</p>
   */
  RoutingControlCount?: number;

  /**
   * @public
   * <p>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

/**
 * @public
 * <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p>
 */
export interface RoutingControl {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   */
  ControlPanelArn?: string;

  /**
   * @public
   * <p>The name of the routing control.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn?: string;

  /**
   * @public
   * <p>The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status?: Status | string;
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  AND: "AND",
  ATLEAST: "ATLEAST",
  OR: "OR",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * <p>The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes.</p>
 */
export interface RuleConfig {
  /**
   * @public
   * <p>Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.</p>
   */
  Inverted: boolean | undefined;

  /**
   * @public
   * <p>The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.</p>
   */
  Threshold: number | undefined;

  /**
   * @public
   * <p>A rule can be one of the following: ATLEAST, AND, or OR.</p>
   */
  Type: RuleType | string | undefined;
}

/**
 * @public
 * <p>An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
 */
export interface AssertionRule {
  /**
   * @public
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   */
  AssertedControls: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>Name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The criteria that you set for specific assertion routing controls (AssertedControls) that designate how many routing control states must be ON as the result of a transaction. For example, if you have three assertion routing controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion routing control states must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * @public
   * <p>The deployment status of an assertion rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status: Status | string | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
 */
export interface GatingRule {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>An array of gating routing control Amazon Resource Names (ARNs). For a simple "on/off" switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.</p>
   */
  GatingControls: string[] | undefined;

  /**
   * @public
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The criteria that you set for gating routing controls that designate how many of the routing control states must be ON to allow you to update target routing control states.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * @public
   * <p>The deployment status of a gating rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.</p>
   */
  Status: Status | string | undefined;

  /**
   * @public
   * <p>An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control. As a simple example, if you have a single gating control, it acts as an overall "on/off" switch for a set of target routing controls. You can use this to manually override automated failover, for example.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 * <p>A safety rule. A safety rule can be an assertion rule or a gating rule.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control state is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p>
   */
  ASSERTION?: AssertionRule;

  /**
   * @public
   * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
   */
  GATING?: GatingRule;
}

/**
 * @public
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
 * @public
 * <p>An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 */
export interface AssertionRuleUpdate {
  /**
   * @public
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assertion rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
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
 * @public
 * <p>Creates a cluster.</p>
 */
export interface CreateClusterRequest {
  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The tags associated with the cluster.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * @public
   * <p>The cluster that was created.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The details of the control panel that you're creating.</p>
 */
export interface CreateControlPanelRequest {
  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster for the control panel.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The name of the control panel.</p>
   */
  ControlPanelName: string | undefined;

  /**
   * @public
   * <p>The tags associated with the control panel.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateControlPanelResponse {
  /**
   * @public
   * <p>Information about a control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

/**
 * @public
 * <p>The details of the routing control that you're creating.</p>
 */
export interface CreateRoutingControlRequest {
  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster that includes the routing control.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel that includes the routing control.</p>
   */
  ControlPanelArn?: string;

  /**
   * @public
   * <p>The name of the routing control.</p>
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface CreateRoutingControlResponse {
  /**
   * @public
   * <p>The routing control that is created.</p>
   */
  RoutingControl?: RoutingControl;
}

/**
 * @public
 * <p>A new assertion rule for a control panel.</p>
 */
export interface NewAssertionRule {
  /**
   * @public
   * <p>The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three Amazon Web Services Regions.</p>
   */
  AssertedControls: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>The name of the assertion rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be ON as the result of a transaction. For example, if you have three assertion controls, you might specify ATLEAST 2 for your rule configuration. This means that at least two assertion controls must be ON, so that at least two Amazon Web Services Regions have traffic flowing to them.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 * <p>A new gating rule for a control panel.</p>
 */
export interface NewGatingRule {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>The gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.</p>
   */
  GatingControls: string[] | undefined;

  /**
   * @public
   * <p>The name for the new gating rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The criteria that you set for specific gating controls (routing controls) that designate how many control states must be ON to allow you to change (set or unset) the target control states.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * @public
   * <p>Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify ATLEAST 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.</p> <p>In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 * <p>The request body that you include when you create a safety rule.</p>
 */
export interface CreateSafetyRuleRequest {
  /**
   * @public
   * <p>The assertion rule requested.</p>
   */
  AssertionRule?: NewAssertionRule;

  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The gating rule requested.</p>
   */
  GatingRule?: NewGatingRule;

  /**
   * @public
   * <p>The tags associated with the safety rule.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSafetyRuleResponse {
  /**
   * @public
   * <p>The assertion rule created.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * @public
   * <p>The gating rule created.</p>
   */
  GatingRule?: GatingRule;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster that you're deleting.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing control that you're deleting.</p>
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
   * @public
   * <p>The ARN of the safety rule.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * @public
   * <p>The cluster for the DescribeCluster request.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface DescribeControlPanelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeControlPanelResponse {
  /**
   * @public
   * <p>Information about the control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

/**
 * @public
 */
export interface DescribeRoutingControlRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingControlResponse {
  /**
   * @public
   * <p>Information about the routing control.</p>
   */
  RoutingControl?: RoutingControl;
}

/**
 * @public
 */
export interface DescribeSafetyRuleRequest {
  /**
   * @public
   * <p>The ARN of the safety rule.</p>
   */
  SafetyRuleArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeSafetyRuleResponse {
  /**
   * @public
   * <p>The assertion rule in the response.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * @public
   * <p>The gating rule in the response.</p>
   */
  GatingRule?: GatingRule;
}

/**
 * @public
 * <p>Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 */
export interface GatingRuleUpdate {
  /**
   * @public
   * <p>The name for the gating rule. You can use any non-white space character in the name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gating rule.</p>
   */
  SafetyRuleArn: string | undefined;

  /**
   * @public
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksRequest {
  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedRoute53HealthChecksResponse {
  /**
   * @public
   * <p>Identifiers for the health checks.</p>
   */
  HealthCheckIds?: string[];

  /**
   * @public
   * <p>Next token for listing health checks.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * @public
   * <p>An array of the clusters in an account.</p>
   */
  Clusters?: Cluster[];

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListControlPanelsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListControlPanelsResponse {
  /**
   * @public
   * <p>The result of a successful ListControlPanel request.</p>
   */
  ControlPanels?: ControlPanel[];

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of routing controls.</p>
   */
  RoutingControls?: RoutingControl[];
}

/**
 * @public
 */
export interface ListSafetyRulesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSafetyRulesResponse {
  /**
   * @public
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of safety rules in a control panel.</p>
   */
  SafetyRules?: Rule[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Request of adding tag to the resource</p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags associated with the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource that's tagged.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Keys for the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>The details of the control panel that you're updating.</p>
 */
export interface UpdateControlPanelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * @public
   * <p>The name of the control panel.</p>
   */
  ControlPanelName: string | undefined;
}

/**
 * @public
 */
export interface UpdateControlPanelResponse {
  /**
   * @public
   * <p>The control panel to update.</p>
   */
  ControlPanel?: ControlPanel;
}

/**
 * @public
 * <p>The details of the routing control that you're updating.</p>
 */
export interface UpdateRoutingControlRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   */
  RoutingControlArn: string | undefined;

  /**
   * @public
   * <p>The name of the routing control.</p>
   */
  RoutingControlName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlResponse {
  /**
   * @public
   * <p>The routing control that was updated.</p>
   */
  RoutingControl?: RoutingControl;
}

/**
 * @public
 * <p>A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability.</p>
 */
export interface UpdateSafetyRuleRequest {
  /**
   * @public
   * <p>The assertion rule to update.</p>
   */
  AssertionRuleUpdate?: AssertionRuleUpdate;

  /**
   * @public
   * <p>The gating rule to update.</p>
   */
  GatingRuleUpdate?: GatingRuleUpdate;
}

/**
 * @public
 */
export interface UpdateSafetyRuleResponse {
  /**
   * @public
   * <p>The assertion rule updated.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * @public
   * <p>The gating rule updated.</p>
   */
  GatingRule?: GatingRule;
}
