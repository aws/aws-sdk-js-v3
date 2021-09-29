import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.</p>
 */
export interface ClusterEndpoint {
  /**
   * <p>A cluster endpoint. Specify an endpoint and Amazon Web Services Region when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Cluster (Data Plane) Actions.</p>
   */
  Endpoint?: string;

  /**
   * <p>The Amazon Web Services Region for a cluster endpoint.</p>
   */
  Region?: string;
}

export namespace ClusterEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterEndpoint): any => ({
    ...obj,
  });
}

export enum Status {
  DEPLOYED = "DEPLOYED",
  PENDING = "PENDING",
  PENDING_DELETION = "PENDING_DELETION",
}

/**
 * <p>A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.</p>
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>Endpoints for a cluster. Specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.</p> <p>To get or update the routing control state, see the Amazon Route 53 Application Recovery Controller Cluster (Data Plane) Actions.</p>
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

export namespace Cluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
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

export namespace ControlPanel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlPanel): any => ({
    ...obj,
  });
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

export namespace RoutingControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingControl): any => ({
    ...obj,
  });
}

export enum RuleType {
  AND = "AND",
  ATLEAST = "ATLEAST",
  OR = "OR",
}

/**
 * <p>The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.</p>
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

export namespace RuleConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p>
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
   * <p>The criteria that you set for specific assertion controls (routing controls) that designate how many controls must be enabled as the result of a transaction. For example, if you have three assertion controls, you might specify atleast 2 for your rule configuration. This means that at least two assertion controls must be enabled, so that at least two Amazon Web Services Regions are enabled.</p>
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

export namespace AssertionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssertionRule): any => ({
    ...obj,
  });
}

/**
 * <p>A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
 */
export interface GatingRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel.</p>
   */
  ControlPanelArn: string | undefined;

  /**
   * <p>The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.</p>
   */
  GatingControls: string[] | undefined;

  /**
   * <p>The name for the gating rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The criteria that you set for specific gating controls (routing controls) that designates how many controls must be enabled to allow you to change (set or unset) the target controls.</p>
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
   * <p>Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify ATLEAST 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.</p> <p>In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

export namespace GatingRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatingRule): any => ({
    ...obj,
  });
}

/**
 * <p>A safety rule. A safety rule can be an assertion rule or a gating rule.</p>
 */
export interface Rule {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p>
   */
  ASSERTION?: AssertionRule;

  /**
   * <p>A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
   */
  GATING?: GatingRule;
}

export namespace Rule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

/**
 * <p>403 response - AccessDeniedException. You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
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

export namespace AssertionRuleUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssertionRuleUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>409 response - ConflictException.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
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
 * <p>Creates a cluster.</p>
 */
export interface CreateClusterRequest {
  /**
   * <p>Unique client idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;
}

export namespace CreateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
}

export interface CreateClusterResponse {
  /**
   * <p>The cluster that was created.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
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
 * <p>404 response - The query string contains a syntax error or resource not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
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
 * <p>402 response</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>429 response - ThrottlingException.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
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
 * <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you used parameters together incorrectly.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the control panel that you're creating.</p>
 */
export interface CreateControlPanelRequest {
  /**
   * <p>Unique client idempotency token.</p>
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
}

export namespace CreateControlPanelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateControlPanelRequest): any => ({
    ...obj,
  });
}

export interface CreateControlPanelResponse {
  /**
   * <p>Information about a control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

export namespace CreateControlPanelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateControlPanelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the routing control that you're creating.</p>
 */
export interface CreateRoutingControlRequest {
  /**
   * <p>Unique client idempotency token.</p>
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

export namespace CreateRoutingControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoutingControlRequest): any => ({
    ...obj,
  });
}

export interface CreateRoutingControlResponse {
  /**
   * <p>The routing control that is created.</p>
   */
  RoutingControl?: RoutingControl;
}

export namespace CreateRoutingControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoutingControlResponse): any => ({
    ...obj,
  });
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
   * <p>The criteria that you set for specific assertion controls (routing controls) that designate how many controls must be enabled as the result of a transaction. For example, if you have three assertion controls, you might specify atleast 2 for your rule configuration. This means that at least two assertion controls must be enabled, so that at least two Amazon Web Services Regions are enabled.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

export namespace NewAssertionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewAssertionRule): any => ({
    ...obj,
  });
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
   * <p>The criteria that you set for specific gating controls (routing controls) that designates how many controls must be enabled to allow you to change (set or unset) the target controls.</p>
   */
  RuleConfig: RuleConfig | undefined;

  /**
   * <p>Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three Amazon Web Services Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.</p> <p>In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.</p>
   */
  TargetControls: string[] | undefined;

  /**
   * <p>An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.</p>
   */
  WaitPeriodMs: number | undefined;
}

export namespace NewGatingRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewGatingRule): any => ({
    ...obj,
  });
}

/**
 * <p>The request body that you include when you create a safety rule.</p>
 */
export interface CreateSafetyRuleRequest {
  /**
   * <p>A new assertion rule for a control panel.</p>
   */
  AssertionRule?: NewAssertionRule;

  /**
   * <p>Unique client idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>A new gating rule for a control panel.</p>
   */
  GatingRule?: NewGatingRule;
}

export namespace CreateSafetyRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSafetyRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateSafetyRuleResponse {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
   */
  GatingRule?: GatingRule;
}

export namespace CreateSafetyRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSafetyRuleResponse): any => ({
    ...obj,
  });
}

export interface DeleteClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that you're deleting.</p>
   */
  ClusterArn: string | undefined;
}

export namespace DeleteClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteClusterResponse {}

export namespace DeleteClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that you're deleting.</p>
   */
  ControlPanelArn: string | undefined;
}

export namespace DeleteControlPanelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteControlPanelRequest): any => ({
    ...obj,
  });
}

export interface DeleteControlPanelResponse {}

export namespace DeleteControlPanelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteControlPanelResponse): any => ({
    ...obj,
  });
}

export interface DeleteRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control that you're deleting.</p>
   */
  RoutingControlArn: string | undefined;
}

export namespace DeleteRoutingControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoutingControlRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoutingControlResponse {}

export namespace DeleteRoutingControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoutingControlResponse): any => ({
    ...obj,
  });
}

export interface DeleteSafetyRuleRequest {
  /**
   * <p>The request body that you include when you update a safety rule.</p>
   */
  SafetyRuleArn: string | undefined;
}

export namespace DeleteSafetyRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSafetyRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteSafetyRuleResponse {}

export namespace DeleteSafetyRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSafetyRuleResponse): any => ({
    ...obj,
  });
}

export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that you're getting details for.</p>
   */
  ClusterArn: string | undefined;
}

export namespace DescribeClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterRequest): any => ({
    ...obj,
  });
}

export interface DescribeClusterResponse {
  /**
   * <p>The cluster for the DescribeCluster request.</p>
   */
  Cluster?: Cluster;
}

export namespace DescribeClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterResponse): any => ({
    ...obj,
  });
}

export interface DescribeControlPanelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that you're getting details for.</p>
   */
  ControlPanelArn: string | undefined;
}

export namespace DescribeControlPanelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeControlPanelRequest): any => ({
    ...obj,
  });
}

export interface DescribeControlPanelResponse {
  /**
   * <p>Information about the control panel.</p>
   */
  ControlPanel?: ControlPanel;
}

export namespace DescribeControlPanelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeControlPanelResponse): any => ({
    ...obj,
  });
}

export interface DescribeRoutingControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing control that you're getting details for.</p>
   */
  RoutingControlArn: string | undefined;
}

export namespace DescribeRoutingControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoutingControlRequest): any => ({
    ...obj,
  });
}

export interface DescribeRoutingControlResponse {
  /**
   * <p>Information about the routing control.</p>
   */
  RoutingControl?: RoutingControl;
}

export namespace DescribeRoutingControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoutingControlResponse): any => ({
    ...obj,
  });
}

export interface DescribeSafetyRuleRequest {
  /**
   * <p>The request body that you include when you update a safety rule.</p>
   */
  SafetyRuleArn: string | undefined;
}

export namespace DescribeSafetyRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSafetyRuleRequest): any => ({
    ...obj,
  });
}

export interface DescribeSafetyRuleResponse {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
   */
  GatingRule?: GatingRule;
}

export namespace DescribeSafetyRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSafetyRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
 */
export interface GatingRuleUpdate {
  /**
   * <p>The name for the gating rule.</p>
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

export namespace GatingRuleUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatingRuleUpdate): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) of the routing control that you're getting details for.</p>
   */
  RoutingControlArn: string | undefined;
}

export namespace ListAssociatedRoute53HealthChecksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedRoute53HealthChecksRequest): any => ({
    ...obj,
  });
}

export interface ListAssociatedRoute53HealthChecksResponse {
  /**
   * <p>Identifiers for the health checks.</p>
   */
  HealthCheckIds?: string[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListAssociatedRoute53HealthChecksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedRoute53HealthChecksResponse): any => ({
    ...obj,
  });
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

export namespace ListClustersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj,
  });
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

export namespace ListClustersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersResponse): any => ({
    ...obj,
  });
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

export namespace ListControlPanelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlPanelsRequest): any => ({
    ...obj,
  });
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

export namespace ListControlPanelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListControlPanelsResponse): any => ({
    ...obj,
  });
}

export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that you're getting routing control details for.</p>
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

export namespace ListRoutingControlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingControlsRequest): any => ({
    ...obj,
  });
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

export namespace ListRoutingControlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingControlsResponse): any => ({
    ...obj,
  });
}

export interface ListSafetyRulesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel that you're getting details for.</p>
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

export namespace ListSafetyRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSafetyRulesRequest): any => ({
    ...obj,
  });
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

export namespace ListSafetyRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSafetyRulesResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateControlPanelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateControlPanelRequest): any => ({
    ...obj,
  });
}

export interface UpdateControlPanelResponse {
  /**
   * <p>The control panel to update.</p>
   */
  ControlPanel?: ControlPanel;
}

export namespace UpdateControlPanelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateControlPanelResponse): any => ({
    ...obj,
  });
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

export namespace UpdateRoutingControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingControlResponse {
  /**
   * <p>The routing control that was updated.</p>
   */
  RoutingControl?: RoutingControl;
}

export namespace UpdateRoutingControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingControlResponse): any => ({
    ...obj,
  });
}

export interface UpdateSafetyRuleRequest {
  /**
   * <p>An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
   */
  AssertionRuleUpdate?: AssertionRuleUpdate;

  /**
   * <p>Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.</p>
   */
  GatingRuleUpdate?: GatingRuleUpdate;
}

export namespace UpdateSafetyRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSafetyRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateSafetyRuleResponse {
  /**
   * <p>An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p>
   */
  AssertionRule?: AssertionRule;

  /**
   * <p>A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
   */
  GatingRule?: GatingRule;
}

export namespace UpdateSafetyRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSafetyRuleResponse): any => ({
    ...obj,
  });
}
