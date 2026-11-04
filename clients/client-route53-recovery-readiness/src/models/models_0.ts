// smithy-typescript generated code
import type { Readiness } from "./enums";

/**
 * Information about a cell.
 *
 * @public
 */
export interface CellOutput {
  /**
   * The Amazon Resource Name (ARN) for the cell.
   *
   * @public
   */
  CellArn: string | undefined;

  /**
   * The name of the cell.
   *
   * @public
   */
  CellName: string | undefined;

  /**
   * A list of cell ARNs.
   *
   * @public
   */
  Cells: string[] | undefined;

  /**
   * The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
   *
   * @public
   */
  ParentReadinessScopes: string[] | undefined;

  /**
   * Tags on the resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Readiness rule information, including the resource type, rule ID, and rule description.
 *
 * @public
 */
export interface ListRulesOutput {
  /**
   * The resource type that the readiness rule applies to.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The description of a readiness rule.
   *
   * @public
   */
  RuleDescription: string | undefined;

  /**
   * The ID for the readiness rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * Information relating to readiness check status.
 *
 * @public
 */
export interface Message {
  /**
   * The text of a readiness check message.
   *
   * @public
   */
  MessageText?: string | undefined;
}

/**
 * A readiness check.
 *
 * @public
 */
export interface ReadinessCheckOutput {
  /**
   * The Amazon Resource Name (ARN) associated with a readiness check.
   *
   * @public
   */
  ReadinessCheckArn: string | undefined;

  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * Name of the resource set to be checked.
   *
   * @public
   */
  ResourceSet: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary.
 *
 * @public
 */
export interface ReadinessCheckSummary {
  /**
   * The readiness status of this readiness check.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * The name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName?: string | undefined;
}

/**
 * Recommendations that are provided to make an application more recovery resilient.
 *
 * @public
 */
export interface Recommendation {
  /**
   * Text of the recommendations that are provided to make an application more recovery resilient.
   *
   * @public
   */
  RecommendationText: string | undefined;
}

/**
 * A representation of the application, typically containing multiple cells.
 *
 * @public
 */
export interface RecoveryGroupOutput {
  /**
   * A list of a cell's Amazon Resource Names (ARNs).
   *
   * @public
   */
  Cells: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recovery group.
   *
   * @public
   */
  RecoveryGroupArn: string | undefined;

  /**
   * The name of the recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;

  /**
   * The tags associated with the recovery group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The Network Load Balancer resource that a DNS target resource points to.
 *
 * @public
 */
export interface NLBResource {
  /**
   * The Network Load Balancer resource Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The Route 53 resource that a DNS target resource record points to.
 *
 * @public
 */
export interface R53ResourceRecord {
  /**
   * The DNS target domain name.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The Route 53 Resource Record Set ID.
   *
   * @public
   */
  RecordSetId?: string | undefined;
}

/**
 * The target resource that the Route 53 record points to.
 *
 * @public
 */
export interface TargetResource {
  /**
   * The Network Load Balancer Resource.
   *
   * @public
   */
  NLBResource?: NLBResource | undefined;

  /**
   * The Route 53 resource.
   *
   * @public
   */
  R53Resource?: R53ResourceRecord | undefined;
}

/**
 * A component for DNS/routing control readiness checks and architecture checks.
 *
 * @public
 */
export interface DNSTargetResource {
  /**
   * The domain name that acts as an ingress point to a portion of the customer application.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
   *
   * @public
   */
  HostedZoneArn?: string | undefined;

  /**
   * The Route 53 record set ID that uniquely identifies a DNS record, given a name and a type.
   *
   * @public
   */
  RecordSetId?: string | undefined;

  /**
   * The type of DNS record of the target resource.
   *
   * @public
   */
  RecordType?: string | undefined;

  /**
   * The target resource of the DNS target resource.
   *
   * @public
   */
  TargetResource?: TargetResource | undefined;
}

/**
 * The resource element of a resource set.
 *
 * @public
 */
export interface Resource {
  /**
   * The component identifier of the resource, generated when DNS target resource is used.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The DNS target resource.
   *
   * @public
   */
  DnsTargetResource?: DNSTargetResource | undefined;

  /**
   * A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.
   *
   * @public
   */
  ReadinessScopes?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * The result of a successful Resource request, with status for an individual resource.
 *
 * @public
 */
export interface ResourceResult {
  /**
   * The component id of the resource.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The time (UTC) that the resource was last checked for readiness, in ISO-8601 format.
   *
   * @public
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * The readiness of a resource.
   *
   * @public
   */
  Readiness: Readiness | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * A collection of resources of the same type.
 *
 * @public
 */
export interface ResourceSetOutput {
  /**
   * The Amazon Resource Name (ARN) for the resource set.
   *
   * @public
   */
  ResourceSetArn: string | undefined;

  /**
   * The name of the resource set.
   *
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * A list of resource objects.
   *
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The result of a successful Rule request, with status for an individual rule.
 *
 * @public
 */
export interface RuleResult {
  /**
   * The time the resource was last checked for readiness, in ISO-8601 format, UTC.
   *
   * @public
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * Details about the resource's readiness.
   *
   * @public
   */
  Messages: Message[] | undefined;

  /**
   * The readiness at rule level.
   *
   * @public
   */
  Readiness: Readiness | undefined;

  /**
   * The identifier of the rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface CreateCellRequest {
  /**
   * The name of the cell to create.
   *
   * @public
   */
  CellName: string | undefined;

  /**
   * A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Amazon Web Services Regions.
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCellResponse {
  /**
   * The Amazon Resource Name (ARN) for the cell.
   *
   * @public
   */
  CellArn?: string | undefined;

  /**
   * The name of the cell.
   *
   * @public
   */
  CellName?: string | undefined;

  /**
   * A list of cell ARNs.
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
   *
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * Tags on the resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationRequest {
  /**
   * The cross-account authorization.
   *
   * @public
   */
  CrossAccountAuthorization: string | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationResponse {
  /**
   * The cross-account authorization.
   *
   * @public
   */
  CrossAccountAuthorization?: string | undefined;
}

/**
 * @public
 */
export interface CreateReadinessCheckRequest {
  /**
   * The name of the readiness check to create.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * The name of the resource set to check.
   *
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateReadinessCheckResponse {
  /**
   * The Amazon Resource Name (ARN) associated with a readiness check.
   *
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * Name of the resource set to be checked.
   *
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryGroupRequest {
  /**
   * A list of the cell Amazon Resource Names (ARNs) in the recovery group.
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The name of the recovery group to create.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryGroupResponse {
  /**
   * A list of a cell's Amazon Resource Names (ARNs).
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recovery group.
   *
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * The name of the recovery group.
   *
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * The tags associated with the recovery group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceSetRequest {
  /**
   * The name of the resource set to create.
   *
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * A list of resource objects in the resource set.
   *
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * A tag to associate with the parameters for a resource set.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceSetResponse {
  /**
   * The Amazon Resource Name (ARN) for the resource set.
   *
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * The name of the resource set.
   *
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * A list of resource objects.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteCellRequest {
  /**
   * The name of the cell.
   *
   * @public
   */
  CellName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAuthorizationRequest {
  /**
   * The cross-account authorization.
   *
   * @public
   */
  CrossAccountAuthorization: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAuthorizationResponse {}

/**
 * @public
 */
export interface DeleteReadinessCheckRequest {
  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryGroupRequest {
  /**
   * The name of a recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * Name of a resource set.
   *
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsRequest {
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
   * The name of a recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsResponse {
  /**
   * The time that a recovery group was last assessed for recommendations, in UTC ISO-8601 format.
   *
   * @public
   */
  LastAuditTimestamp?: Date | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the recommendations for the customer's application.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * @public
 */
export interface GetCellRequest {
  /**
   * The name of the cell.
   *
   * @public
   */
  CellName: string | undefined;
}

/**
 * @public
 */
export interface GetCellResponse {
  /**
   * The Amazon Resource Name (ARN) for the cell.
   *
   * @public
   */
  CellArn?: string | undefined;

  /**
   * The name of the cell.
   *
   * @public
   */
  CellName?: string | undefined;

  /**
   * A list of cell ARNs.
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
   *
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * Tags on the resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCellReadinessSummaryRequest {
  /**
   * The name of the cell.
   *
   * @public
   */
  CellName: string | undefined;

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
export interface GetCellReadinessSummaryResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The readiness at a cell level.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * Summaries for the readiness checks that make up the cell.
   *
   * @public
   */
  ReadinessChecks?: ReadinessCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckRequest {
  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResponse {
  /**
   * The Amazon Resource Name (ARN) associated with a readiness check.
   *
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * Name of the resource set to be checked.
   *
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusRequest {
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
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).
   *
   * @public
   */
  ResourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The readiness at a rule level.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * Details of the rule's results.
   *
   * @public
   */
  Rules?: RuleResult[] | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckStatusRequest {
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
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckStatusResponse {
  /**
   * Top level messages for readiness check status
   *
   * @public
   */
  Messages?: Message[] | undefined;

  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The readiness at rule level.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * Summary of the readiness of resources.
   *
   * @public
   */
  Resources?: ResourceResult[] | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupRequest {
  /**
   * The name of a recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupResponse {
  /**
   * A list of a cell's Amazon Resource Names (ARNs).
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recovery group.
   *
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * The name of the recovery group.
   *
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * The tags associated with the recovery group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryRequest {
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
   * The name of a recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The readiness status at a recovery group level.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * Summaries of the readiness checks for the recovery group.
   *
   * @public
   */
  ReadinessChecks?: ReadinessCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * Name of a resource set.
   *
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * The Amazon Resource Name (ARN) for the resource set.
   *
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * The name of the resource set.
   *
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * A list of resource objects.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCellsRequest {
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
export interface ListCellsResponse {
  /**
   * A list of cells.
   *
   * @public
   */
  Cells?: CellOutput[] | undefined;

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
export interface ListCrossAccountAuthorizationsRequest {
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
export interface ListCrossAccountAuthorizationsResponse {
  /**
   * A list of cross-account authorizations.
   *
   * @public
   */
  CrossAccountAuthorizations?: string[] | undefined;

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
export interface ListReadinessChecksRequest {
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
export interface ListReadinessChecksResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of readiness checks associated with the account.
   *
   * @public
   */
  ReadinessChecks?: ReadinessCheckOutput[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryGroupsRequest {
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
export interface ListRecoveryGroupsResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of recovery groups.
   *
   * @public
   */
  RecoveryGroups?: RecoveryGroupOutput[] | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
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
export interface ListResourceSetsResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of resource sets associated with the account.
   *
   * @public
   */
  ResourceSets?: ResourceSetOutput[] | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
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
   * The resource type that a readiness rule applies to.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * The token that identifies which batch of results you want to see.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of readiness rules for a specific resource type.
   *
   * @public
   */
  Rules?: ListRulesOutput[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourcesRequest {
  /**
   * The Amazon Resource Name (ARN) for a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourcesResponse {
  /**
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
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
   * The Amazon Resource Name (ARN) for a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys for tags you add to resources.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellRequest {
  /**
   * The name of the cell.
   *
   * @public
   */
  CellName: string | undefined;

  /**
   * A list of cell Amazon Resource Names (ARNs), which completely replaces the previous list.
   *
   * @public
   */
  Cells: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellResponse {
  /**
   * The Amazon Resource Name (ARN) for the cell.
   *
   * @public
   */
  CellArn?: string | undefined;

  /**
   * The name of the cell.
   *
   * @public
   */
  CellName?: string | undefined;

  /**
   * A list of cell ARNs.
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
   *
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * Tags on the resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Name of a readiness check to describe.
 *
 * @public
 */
export interface UpdateReadinessCheckRequest {
  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * The name of the resource set to be checked.
   *
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface UpdateReadinessCheckResponse {
  /**
   * The Amazon Resource Name (ARN) associated with a readiness check.
   *
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * Name of a readiness check.
   *
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * Name of the resource set to be checked.
   *
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Name of a recovery group.
 *
 * @public
 */
export interface UpdateRecoveryGroupRequest {
  /**
   * A list of cell Amazon Resource Names (ARNs). This list completely replaces the previous list.
   *
   * @public
   */
  Cells: string[] | undefined;

  /**
   * The name of a recovery group.
   *
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryGroupResponse {
  /**
   * A list of a cell's Amazon Resource Names (ARNs).
   *
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recovery group.
   *
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * The name of the recovery group.
   *
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * The tags associated with the recovery group.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Name of a resource set.
 *
 * @public
 */
export interface UpdateResourceSetRequest {
  /**
   * Name of a resource set.
   *
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * A list of resource objects.
   *
   * @public
   */
  Resources: Resource[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceSetResponse {
  /**
   * The Amazon Resource Name (ARN) for the resource set.
   *
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * The name of the resource set.
   *
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * The resource type of the resources in the resource set. Enter one of the following values for resource type:
   *
   * AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
   *
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * A list of resource objects.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}
