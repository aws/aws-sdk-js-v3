// smithy-typescript generated code
import { Readiness } from "./enums";

/**
 * <p>Information about a cell.</p>
 * @public
 */
export interface CellOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   * @public
   */
  CellArn: string | undefined;

  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   * @public
   */
  Cells: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   * @public
   */
  ParentReadinessScopes: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Readiness rule information, including the resource type, rule ID, and rule description.</p>
 * @public
 */
export interface ListRulesOutput {
  /**
   * <p>The resource type that the readiness rule applies to.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The description of a readiness rule.</p>
   * @public
   */
  RuleDescription: string | undefined;

  /**
   * <p>The ID for the readiness rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>Information relating to readiness check status.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The text of a readiness check message.</p>
   * @public
   */
  MessageText?: string | undefined;
}

/**
 * <p>A readiness check.</p>
 * @public
 */
export interface ReadinessCheckOutput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   * @public
   */
  ReadinessCheckArn: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * <p>Name of the resource set to be checked.</p>
   * @public
   */
  ResourceSet: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary.</p>
 * @public
 */
export interface ReadinessCheckSummary {
  /**
   * <p>The readiness status of this readiness check.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>The name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName?: string | undefined;
}

/**
 * <p>Recommendations that are provided to make an application more recovery resilient.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>Text of the recommendations that are provided to make an application more recovery resilient.</p>
   * @public
   */
  RecommendationText: string | undefined;
}

/**
 * <p>A representation of the application, typically containing multiple cells.</p>
 * @public
 */
export interface RecoveryGroupOutput {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   * @public
   */
  Cells: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   * @public
   */
  RecoveryGroupArn: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The Network Load Balancer resource that a DNS target resource points to.</p>
 * @public
 */
export interface NLBResource {
  /**
   * <p>The Network Load Balancer resource Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The Route 53 resource that a DNS target resource record points to.</p>
 * @public
 */
export interface R53ResourceRecord {
  /**
   * <p>The DNS target domain name.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The Route 53 Resource Record Set ID.</p>
   * @public
   */
  RecordSetId?: string | undefined;
}

/**
 * <p>The target resource that the Route 53 record points to.</p>
 * @public
 */
export interface TargetResource {
  /**
   * <p>The Network Load Balancer Resource.</p>
   * @public
   */
  NLBResource?: NLBResource | undefined;

  /**
   * <p>The Route 53 resource.</p>
   * @public
   */
  R53Resource?: R53ResourceRecord | undefined;
}

/**
 * <p>A component for DNS/routing control readiness checks and architecture checks.</p>
 * @public
 */
export interface DNSTargetResource {
  /**
   * <p>The domain name that acts as an ingress point to a portion of the customer application.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.</p>
   * @public
   */
  HostedZoneArn?: string | undefined;

  /**
   * <p>The Route 53 record set ID that uniquely identifies a DNS record, given a name and a type.</p>
   * @public
   */
  RecordSetId?: string | undefined;

  /**
   * <p>The type of DNS record of the target resource.</p>
   * @public
   */
  RecordType?: string | undefined;

  /**
   * <p>The target resource of the DNS target resource.</p>
   * @public
   */
  TargetResource?: TargetResource | undefined;
}

/**
 * <p>The resource element of a resource set.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The component identifier of the resource, generated when DNS target resource is used.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The DNS target resource.</p>
   * @public
   */
  DnsTargetResource?: DNSTargetResource | undefined;

  /**
   * <p>A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.</p>
   * @public
   */
  ReadinessScopes?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>The result of a successful Resource request, with status for an individual resource.</p>
 * @public
 */
export interface ResourceResult {
  /**
   * <p>The component id of the resource.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The time (UTC) that the resource was last checked for readiness, in ISO-8601 format.</p>
   * @public
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>The readiness of a resource.</p>
   * @public
   */
  Readiness: Readiness | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>A collection of resources of the same type.</p>
 * @public
 */
export interface ResourceSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   * @public
   */
  ResourceSetArn: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The result of a successful Rule request, with status for an individual rule.</p>
 * @public
 */
export interface RuleResult {
  /**
   * <p>The time the resource was last checked for readiness, in ISO-8601 format, UTC.</p>
   * @public
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>Details about the resource's readiness.</p>
   * @public
   */
  Messages: Message[] | undefined;

  /**
   * <p>The readiness at rule level.</p>
   * @public
   */
  Readiness: Readiness | undefined;

  /**
   * <p>The identifier of the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface CreateCellRequest {
  /**
   * <p>The name of the cell to create.</p>
   * @public
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Amazon Web Services Regions.</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   * @public
   */
  CellArn?: string | undefined;

  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName?: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
   * @public
   */
  CrossAccountAuthorization: string | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationResponse {
  /**
   * <p>The cross-account authorization.</p>
   * @public
   */
  CrossAccountAuthorization?: string | undefined;
}

/**
 * @public
 */
export interface CreateReadinessCheckRequest {
  /**
   * <p>The name of the readiness check to create.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to check.</p>
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * <p>Name of the resource set to be checked.</p>
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryGroupRequest {
  /**
   * <p>A list of the cell Amazon Resource Names (ARNs) in the recovery group.</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The name of the recovery group to create.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceSetRequest {
  /**
   * <p>The name of the resource set to create.</p>
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects in the resource set.</p>
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A tag to associate with the parameters for a resource set.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteCellRequest {
  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
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
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsRequest {
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
   * <p>The name of a recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsResponse {
  /**
   * <p>The time that a recovery group was last assessed for recommendations, in UTC ISO-8601 format.</p>
   * @public
   */
  LastAuditTimestamp?: Date | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the recommendations for the customer's application.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * @public
 */
export interface GetCellRequest {
  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName: string | undefined;
}

/**
 * @public
 */
export interface GetCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   * @public
   */
  CellArn?: string | undefined;

  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName?: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCellReadinessSummaryRequest {
  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName: string | undefined;

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
export interface GetCellReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The readiness at a cell level.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>Summaries for the readiness checks that make up the cell.</p>
   * @public
   */
  ReadinessChecks?: ReadinessCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * <p>Name of the resource set to be checked.</p>
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusRequest {
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
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).</p>
   * @public
   */
  ResourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The readiness at a rule level.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>Details of the rule's results.</p>
   * @public
   */
  Rules?: RuleResult[] | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckStatusRequest {
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
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckStatusResponse {
  /**
   * <p>Top level messages for readiness check status</p>
   * @public
   */
  Messages?: Message[] | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The readiness at rule level.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>Summary of the readiness of resources.</p>
   * @public
   */
  Resources?: ResourceResult[] | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryRequest {
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
   * <p>The name of a recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The readiness status at a recovery group level.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>Summaries of the readiness checks for the recovery group.</p>
   * @public
   */
  ReadinessChecks?: ReadinessCheckSummary[] | undefined;
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCellsRequest {
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
export interface ListCellsResponse {
  /**
   * <p>A list of cells.</p>
   * @public
   */
  Cells?: CellOutput[] | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrossAccountAuthorizationsRequest {
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
export interface ListCrossAccountAuthorizationsResponse {
  /**
   * <p>A list of cross-account authorizations.</p>
   * @public
   */
  CrossAccountAuthorizations?: string[] | undefined;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReadinessChecksRequest {
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
export interface ListReadinessChecksResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of readiness checks associated with the account.</p>
   * @public
   */
  ReadinessChecks?: ReadinessCheckOutput[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryGroupsRequest {
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
export interface ListRecoveryGroupsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of recovery groups.</p>
   * @public
   */
  RecoveryGroups?: RecoveryGroupOutput[] | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
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
export interface ListResourceSetsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of resource sets associated with the account.</p>
   * @public
   */
  ResourceSets?: ResourceSetOutput[] | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
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
   * <p>The resource type that a readiness rule applies to.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of readiness rules for a specific resource type.</p>
   * @public
   */
  Rules?: ListRulesOutput[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourcesResponse {
  /**
   * <p></p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
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
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys for tags you add to resources.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellRequest {
  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs), which completely replaces the previous list.</p>
   * @public
   */
  Cells: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   * @public
   */
  CellArn?: string | undefined;

  /**
   * <p>The name of the cell.</p>
   * @public
   */
  CellName?: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   * @public
   */
  ParentReadinessScopes?: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Name of a readiness check to describe.</p>
 * @public
 */
export interface UpdateReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to be checked.</p>
   * @public
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface UpdateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   * @public
   */
  ReadinessCheckArn?: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   * @public
   */
  ReadinessCheckName?: string | undefined;

  /**
   * <p>Name of the resource set to be checked.</p>
   * @public
   */
  ResourceSet?: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Name of a recovery group.</p>
 * @public
 */
export interface UpdateRecoveryGroupRequest {
  /**
   * <p>A list of cell Amazon Resource Names (ARNs). This list completely replaces the previous list.</p>
   * @public
   */
  Cells: string[] | undefined;

  /**
   * <p>The name of a recovery group.</p>
   * @public
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   * @public
   */
  Cells?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   * @public
   */
  RecoveryGroupArn?: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   * @public
   */
  RecoveryGroupName?: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Name of a resource set.</p>
 * @public
 */
export interface UpdateResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   * @public
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   * @public
   */
  Resources: Resource[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   * @public
   */
  ResourceSetArn?: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   * @public
   */
  ResourceSetName?: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   * @public
   */
  ResourceSetType?: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}
