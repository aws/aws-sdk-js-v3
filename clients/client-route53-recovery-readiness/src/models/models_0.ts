import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Information about a cell.</p>
 */
export interface CellOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn: string | undefined;

  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CellOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CellOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Readiness rule information, including the resource type, rule ID, and rule description.</p>
 */
export interface ListRulesOutput {
  /**
   * <p>The resource type that the readiness rule applies to.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The description of a readiness rule.</p>
   */
  RuleDescription: string | undefined;

  /**
   * <p>The ID for the readiness rule.</p>
   */
  RuleId: string | undefined;
}

export namespace ListRulesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Information relating to readiness check status.</p>
 */
export interface Message {
  /**
   * <p>The text of a readiness check message.</p>
   */
  MessageText?: string;
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

/**
 * <p>A readiness check.</p>
 */
export interface ReadinessCheckOutput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ReadinessCheckOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReadinessCheckOutput): any => ({
    ...obj,
  });
}

export enum Readiness {
  NOT_AUTHORIZED = "NOT_AUTHORIZED",
  NOT_READY = "NOT_READY",
  READY = "READY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary.</p>
 */
export interface ReadinessCheckSummary {
  /**
   * <p>The readiness status of this readiness check.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>The name of a readiness check.</p>
   */
  ReadinessCheckName?: string;
}

export namespace ReadinessCheckSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReadinessCheckSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Recommendations that are provided to make an application more recovery resilient.</p>
 */
export interface Recommendation {
  /**
   * <p>Text of the recommendations that are provided to make an application more recovery resilient.</p>
   */
  RecommendationText: string | undefined;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>A representation of the application, typically containing multiple cells.</p>
 */
export interface RecoveryGroupOutput {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace RecoveryGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecoveryGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Network Load Balancer resource that a DNS target resource points to.</p>
 */
export interface NLBResource {
  /**
   * <p>The Network Load Balancer resource Amazon Resource Name (ARN).</p>
   */
  Arn?: string;
}

export namespace NLBResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NLBResource): any => ({
    ...obj,
  });
}

/**
 * <p>The Route 53 resource that a DNS target resource record points to.</p>
 */
export interface R53ResourceRecord {
  /**
   * <p>The DNS target domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The Route 53 Resource Record Set ID.</p>
   */
  RecordSetId?: string;
}

export namespace R53ResourceRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: R53ResourceRecord): any => ({
    ...obj,
  });
}

/**
 * <p>The target resource that the Route 53 record points to.</p>
 */
export interface TargetResource {
  /**
   * <p>The Network Load Balancer Resource.</p>
   */
  NLBResource?: NLBResource;

  /**
   * <p>The Route 53 resource.</p>
   */
  R53Resource?: R53ResourceRecord;
}

export namespace TargetResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetResource): any => ({
    ...obj,
  });
}

/**
 * <p>A component for DNS/routing control readiness checks and architecture checks.</p>
 */
export interface DNSTargetResource {
  /**
   * <p>The domain name that acts as an ingress point to a portion of the customer application.</p>
   */
  DomainName?: string;

  /**
   * <p>The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.</p>
   */
  HostedZoneArn?: string;

  /**
   * <p>The Route 53 record set ID that uniquely identifies a DNS record, given a name and a type.</p>
   */
  RecordSetId?: string;

  /**
   * <p>The type of DNS record of the target resource.</p>
   */
  RecordType?: string;

  /**
   * <p>The target resource of the DNS target resource.</p>
   */
  TargetResource?: TargetResource;
}

export namespace DNSTargetResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DNSTargetResource): any => ({
    ...obj,
  });
}

/**
 * <p>The resource element of a resource set.</p>
 */
export interface Resource {
  /**
   * <p>The component identifier of the resource, generated when DNS target resource is used.</p>
   */
  ComponentId?: string;

  /**
   * <p>The DNS target resource.</p>
   */
  DnsTargetResource?: DNSTargetResource;

  /**
   * <p>A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.</p>
   */
  ReadinessScopes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource.</p>
   */
  ResourceArn?: string;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a successful Resource request, with status for an individual resource.</p>
 */
export interface ResourceResult {
  /**
   * <p>The component id of the resource.</p>
   */
  ComponentId?: string;

  /**
   * <p>The time (UTC) that the resource was last checked for readiness, in ISO-8601 format.</p>
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>The readiness of a resource.</p>
   */
  Readiness: Readiness | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;
}

export namespace ResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceResult): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of resources of the same type.</p>
 */
export interface ResourceSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ResourceSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a successful Rule request, with status for an individual rule.</p>
 */
export interface RuleResult {
  /**
   * <p>The time the resource was last checked for readiness, in ISO-8601 format, UTC.</p>
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>Details about the resource's readiness.</p>
   */
  Messages: Message[] | undefined;

  /**
   * <p>The readiness at rule level.</p>
   */
  Readiness: Readiness | string | undefined;

  /**
   * <p>The identifier of the rule.</p>
   */
  RuleId: string | undefined;
}

export namespace RuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleResult): any => ({
    ...obj,
  });
}

/**
 * User does not have sufficient access to perform this action.
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

/**
 * Updating or deleting a resource can cause an inconsistent state.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export interface CreateCellRequest {
  /**
   * <p>The name of the cell to create.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Amazon Web Services Regions.</p>
   */
  Cells?: string[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateCellRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCellRequest): any => ({
    ...obj,
  });
}

export interface CreateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateCellResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCellResponse): any => ({
    ...obj,
  });
}

/**
 * An unexpected error occurred.
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

/**
 * Request was denied due to request throttling.
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

/**
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export interface CreateCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization: string | undefined;
}

export namespace CreateCrossAccountAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCrossAccountAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface CreateCrossAccountAuthorizationResponse {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization?: string;
}

export namespace CreateCrossAccountAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCrossAccountAuthorizationResponse): any => ({
    ...obj,
  });
}

export interface CreateReadinessCheckRequest {
  /**
   * <p>The name of the readiness check to create.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to check.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateReadinessCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReadinessCheckRequest): any => ({
    ...obj,
  });
}

export interface CreateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateReadinessCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReadinessCheckResponse): any => ({
    ...obj,
  });
}

export interface CreateRecoveryGroupRequest {
  /**
   * <p>A list of the cell Amazon Resource Names (ARNs) in the recovery group.</p>
   */
  Cells?: string[];

  /**
   * <p>The name of the recovery group to create.</p>
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRecoveryGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecoveryGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRecoveryGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecoveryGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateResourceSetRequest {
  /**
   * <p>The name of the resource set to create.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects in the resource set.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A tag to associate with the parameters for a resource set.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateResourceSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceSetRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateResourceSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceSetResponse): any => ({
    ...obj,
  });
}

export interface DeleteCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;
}

export namespace DeleteCellRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCellRequest): any => ({
    ...obj,
  });
}

/**
 * The requested resource does not exist.
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export interface DeleteCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization: string | undefined;
}

export namespace DeleteCrossAccountAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrossAccountAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface DeleteCrossAccountAuthorizationResponse {}

export namespace DeleteCrossAccountAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrossAccountAuthorizationResponse): any => ({
    ...obj,
  });
}

export interface DeleteReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

export namespace DeleteReadinessCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReadinessCheckRequest): any => ({
    ...obj,
  });
}

export interface DeleteRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

export namespace DeleteRecoveryGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecoveryGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;
}

export namespace DeleteResourceSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceSetRequest): any => ({
    ...obj,
  });
}

export interface GetArchitectureRecommendationsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

export namespace GetArchitectureRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetArchitectureRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface GetArchitectureRecommendationsResponse {
  /**
   * <p>The time that a recovery group was last assessed for recommendations, in UTC ISO-8601 format.</p>
   */
  LastAuditTimestamp?: Date;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the recommendations for the customer's application.</p>
   */
  Recommendations?: Recommendation[];
}

export namespace GetArchitectureRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetArchitectureRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;
}

export namespace GetCellRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCellRequest): any => ({
    ...obj,
  });
}

export interface GetCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetCellResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCellResponse): any => ({
    ...obj,
  });
}

export interface GetCellReadinessSummaryRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace GetCellReadinessSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCellReadinessSummaryRequest): any => ({
    ...obj,
  });
}

export interface GetCellReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at a cell level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summaries for the readiness checks that make up the cell.</p>
   */
  ReadinessChecks?: ReadinessCheckSummary[];
}

export namespace GetCellReadinessSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCellReadinessSummaryResponse): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

export namespace GetReadinessCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckRequest): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetReadinessCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckResponse): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckResourceStatusRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).</p>
   */
  ResourceIdentifier: string | undefined;
}

export namespace GetReadinessCheckResourceStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckResourceStatusRequest): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckResourceStatusResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at a rule level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Details of the rule's results.</p>
   */
  Rules?: RuleResult[];
}

export namespace GetReadinessCheckResourceStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckResourceStatusResponse): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckStatusRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

export namespace GetReadinessCheckStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckStatusRequest): any => ({
    ...obj,
  });
}

export interface GetReadinessCheckStatusResponse {
  /**
   * <p>Top level messages for readiness check status</p>
   */
  Messages?: Message[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at rule level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summary of the readiness of resources.</p>
   */
  Resources?: ResourceResult[];
}

export namespace GetReadinessCheckStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReadinessCheckStatusResponse): any => ({
    ...obj,
  });
}

export interface GetRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

export namespace GetRecoveryGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryGroupRequest): any => ({
    ...obj,
  });
}

export interface GetRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetRecoveryGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryGroupResponse): any => ({
    ...obj,
  });
}

export interface GetRecoveryGroupReadinessSummaryRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

export namespace GetRecoveryGroupReadinessSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryGroupReadinessSummaryRequest): any => ({
    ...obj,
  });
}

export interface GetRecoveryGroupReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness status at a recovery group level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summaries of the readiness checks for the recovery group.</p>
   */
  ReadinessChecks?: ReadinessCheckSummary[];
}

export namespace GetRecoveryGroupReadinessSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryGroupReadinessSummaryResponse): any => ({
    ...obj,
  });
}

export interface GetResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;
}

export namespace GetResourceSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceSetRequest): any => ({
    ...obj,
  });
}

export interface GetResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetResourceSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceSetResponse): any => ({
    ...obj,
  });
}

export interface ListCellsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListCellsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCellsRequest): any => ({
    ...obj,
  });
}

export interface ListCellsResponse {
  /**
   * <p>A list of cells.</p>
   */
  Cells?: CellOutput[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListCellsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCellsResponse): any => ({
    ...obj,
  });
}

export interface ListCrossAccountAuthorizationsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListCrossAccountAuthorizationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrossAccountAuthorizationsRequest): any => ({
    ...obj,
  });
}

export interface ListCrossAccountAuthorizationsResponse {
  /**
   * <p>A list of cross-account authorizations.</p>
   */
  CrossAccountAuthorizations?: string[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListCrossAccountAuthorizationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrossAccountAuthorizationsResponse): any => ({
    ...obj,
  });
}

export interface ListReadinessChecksRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListReadinessChecksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReadinessChecksRequest): any => ({
    ...obj,
  });
}

export interface ListReadinessChecksResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of readiness checks associated with the account.</p>
   */
  ReadinessChecks?: ReadinessCheckOutput[];
}

export namespace ListReadinessChecksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReadinessChecksResponse): any => ({
    ...obj,
  });
}

export interface ListRecoveryGroupsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListRecoveryGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListRecoveryGroupsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of recovery groups.</p>
   */
  RecoveryGroups?: RecoveryGroupOutput[];
}

export namespace ListRecoveryGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListResourceSetsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

export namespace ListResourceSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceSetsRequest): any => ({
    ...obj,
  });
}

export interface ListResourceSetsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of resource sets associated with the account.</p>
   */
  ResourceSets?: ResourceSetOutput[];
}

export namespace ListResourceSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceSetsResponse): any => ({
    ...obj,
  });
}

export interface ListRulesRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The resource type that a readiness rule applies to.</p>
   */
  ResourceType?: string;
}

export namespace ListRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesRequest): any => ({
    ...obj,
  });
}

export interface ListRulesResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of readiness rules for a specific resource type.</p>
   */
  Rules?: ListRulesOutput[];
}

export namespace ListRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourcesRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourcesResponse {
  /**
   * <p></p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourcesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys for tags you add to resources.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs), which completely replaces the previous list.</p>
   */
  Cells: string[] | undefined;
}

export namespace UpdateCellRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCellRequest): any => ({
    ...obj,
  });
}

export interface UpdateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateCellResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCellResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Name of a readiness check to describe.</p>
 */
export interface UpdateReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to be checked.</p>
   */
  ResourceSetName: string | undefined;
}

export namespace UpdateReadinessCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReadinessCheckRequest): any => ({
    ...obj,
  });
}

export interface UpdateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateReadinessCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReadinessCheckResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Name of a recovery group.</p>
 */
export interface UpdateRecoveryGroupRequest {
  /**
   * <p>A list of cell Amazon Resource Names (ARNs). This list completely replaces the previous list.</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

export namespace UpdateRecoveryGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecoveryGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateRecoveryGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecoveryGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Name of a resource set.</p>
 */
export interface UpdateResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources: Resource[] | undefined;
}

export namespace UpdateResourceSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateResourceSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceSetResponse): any => ({
    ...obj,
  });
}
