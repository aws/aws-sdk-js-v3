import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * A Cell and its properties
 */
export interface CellOutput {
  /**
   * The arn for the Cell
   */
  CellArn: string | undefined;

  /**
   * The name of the Cell
   */
  CellName: string | undefined;

  /**
   * A list of Cell arns
   */
  Cells: string[] | undefined;

  /**
   * A list of Cell ARNs and/or RecoveryGroup ARNs
   */
  ParentReadinessScopes: string[] | undefined;

  /**
   * A collection of tags associated with a resource
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
 * A collection of rules used in a readiness check
 */
export interface ListRulesOutput {
  /**
   * The resource type the rule applies to.
   */
  ResourceType: string | undefined;

  /**
   * A description of the rule
   */
  RuleDescription: string | undefined;

  /**
   * The Rule's ID.
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
 * Information relating to readiness check status
 */
export interface Message {
  /**
   * The text of a readiness check message
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
 * A resource used for checking the readiness of a Resource Set
 */
export interface ReadinessCheckOutput {
  /**
   * Arn associated with ReadinessCheck
   */
  ReadinessCheckArn: string | undefined;

  /**
   * Name for a ReadinessCheck
   */
  ReadinessCheckName?: string;

  /**
   * Name of the ResourceSet to be checked
   */
  ResourceSet: string | undefined;

  /**
   * A collection of tags associated with a resource
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
 * Summary of ReadinessCheck status, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary
 */
export interface ReadinessCheckSummary {
  /**
   * The readiness of this ReadinessCheck
   */
  Readiness?: Readiness | string;

  /**
   * The name of a ReadinessCheck which is part of the given RecoveryGroup or Cell
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
 * Guidance for improving Recovery Group resilliancy
 */
export interface Recommendation {
  /**
   * Guidance text for recommendation
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
 * A Recovery Group generally containing multiple Cells
 */
export interface RecoveryGroupOutput {
  /**
   * A list of Cell arns
   */
  Cells: string[] | undefined;

  /**
   * The arn for the RecoveryGroup
   */
  RecoveryGroupArn: string | undefined;

  /**
   * The name of the RecoveryGroup
   */
  RecoveryGroupName: string | undefined;

  /**
   * A collection of tags associated with a resource
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
 * The NLB resource a DNS Target Resource points to
 */
export interface NLBResource {
  /**
   * An NLB resource arn
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
 * The Route 53 resource a DNS Target Resource record points to
 */
export interface R53ResourceRecord {
  /**
   * The DNS target name
   */
  DomainName?: string;

  /**
   * The Resource Record set id
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
 * The target resource the R53 record points to
 */
export interface TargetResource {
  /**
   * The NLB resource a DNS Target Resource points to
   */
  NLBResource?: NLBResource;

  /**
   * The Route 53 resource a DNS Target Resource record points to
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
 * A component for DNS/Routing Control Readiness Checks
 */
export interface DNSTargetResource {
  /**
   * The DNS Name that acts as ingress point to a portion of application
   */
  DomainName?: string;

  /**
   * The Hosted Zone ARN that contains the DNS record with the provided name of target resource.
   */
  HostedZoneArn?: string;

  /**
   * The R53 Set Id to uniquely identify a record given a Name and a Type
   */
  RecordSetId?: string;

  /**
   * The Type of DNS Record of target resource
   */
  RecordType?: string;

  /**
   * The target resource the R53 record points to
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
 * The resource element of a ResourceSet
 */
export interface Resource {
  /**
   * The component id of the resource, generated by the service when dnsTargetResource is used
   */
  ComponentId?: string;

  /**
   * A component for DNS/Routing Control Readiness Checks
   */
  DnsTargetResource?: DNSTargetResource;

  /**
   * A list of RecoveryGroup ARNs and/or Cell ARNs that this resource is contained within.
   */
  ReadinessScopes?: string[];

  /**
   * The ARN of the AWS resource, can be skipped if dnsTargetResource is used
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
 * Result with status for an individual resource.
 */
export interface ResourceResult {
  /**
   * The component id of the resource
   */
  ComponentId?: string;

  /**
   * The time the resource was last checked for readiness, in ISO-8601 format, UTC.
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * The readiness of the resource.
   */
  Readiness: Readiness | string | undefined;

  /**
   * The ARN of the resource
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
 * A collection of resources of the same type
 */
export interface ResourceSetOutput {
  /**
   * The arn for the ResourceSet
   */
  ResourceSetArn: string | undefined;

  /**
   * The name of the ResourceSet
   */
  ResourceSetName: string | undefined;

  /**
   * AWS Resource Type of the resources in the ResourceSet
   */
  ResourceSetType: string | undefined;

  /**
   * A list of Resource objects
   */
  Resources: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource
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
 * Result with status for an individual rule..
 */
export interface RuleResult {
  /**
   * The time the resource was last checked for readiness, in ISO-8601 format, UTC.
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * Details about the resource's readiness
   */
  Messages: Message[] | undefined;

  /**
   * The readiness at rule level.
   */
  Readiness: Readiness | string | undefined;

  /**
   * The identifier of the rule.
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

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * Updating or deleting a resource can cause an inconsistent state.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
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
 * The Cell to create
 */
export interface CreateCellRequest {
  /**
   * The name of the Cell to create
   */
  CellName: string | undefined;

  /**
   * A list of Cell arns contained within this Cell (for use in nested Cells, e.g. regions within which AZs)
   */
  Cells?: string[];

  /**
   * A collection of tags associated with a resource
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
   * The arn for the Cell
   */
  CellArn?: string;

  /**
   * The name of the Cell
   */
  CellName?: string;

  /**
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * A list of Cell ARNs and/or RecoveryGroup ARNs
   */
  ParentReadinessScopes?: string[];

  /**
   * A collection of tags associated with a resource
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

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * Request was denied due to request throttling.
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
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
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
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
 * The cross account authorization
 */
export interface CreateCrossAccountAuthorizationRequest {
  /**
   * The cross account authorization
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
   * The cross account authorization
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

/**
 * The ReadinessCheck to create
 */
export interface CreateReadinessCheckRequest {
  /**
   * The name of the ReadinessCheck to create
   */
  ReadinessCheckName: string | undefined;

  /**
   * The name of the ResourceSet to check
   */
  ResourceSetName: string | undefined;

  /**
   * A collection of tags associated with a resource
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
   * Arn associated with ReadinessCheck
   */
  ReadinessCheckArn?: string;

  /**
   * Name for a ReadinessCheck
   */
  ReadinessCheckName?: string;

  /**
   * Name of the ResourceSet to be checked
   */
  ResourceSet?: string;

  /**
   * A collection of tags associated with a resource
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

/**
 * The RecoveryGroup to create
 */
export interface CreateRecoveryGroupRequest {
  /**
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * The name of the RecoveryGroup to create
   */
  RecoveryGroupName: string | undefined;

  /**
   * A collection of tags associated with a resource
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
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * The arn for the RecoveryGroup
   */
  RecoveryGroupArn?: string;

  /**
   * The name of the RecoveryGroup
   */
  RecoveryGroupName?: string;

  /**
   * A collection of tags associated with a resource
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

/**
 * The ResourceSet to create
 */
export interface CreateResourceSetRequest {
  /**
   * The name of the ResourceSet to create
   */
  ResourceSetName: string | undefined;

  /**
   * AWS Resource type of the resources in the ResourceSet
   */
  ResourceSetType: string | undefined;

  /**
   * A list of Resource objects
   */
  Resources: Resource[] | undefined;

  /**
   * A collection of tags associated with a resource
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
   * The arn for the ResourceSet
   */
  ResourceSetArn?: string;

  /**
   * The name of the ResourceSet
   */
  ResourceSetName?: string;

  /**
   * AWS Resource Type of the resources in the ResourceSet
   */
  ResourceSetType?: string;

  /**
   * A list of Resource objects
   */
  Resources?: Resource[];

  /**
   * A collection of tags associated with a resource
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
   * The Cell to delete
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

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteCrossAccountAuthorizationRequest {
  /**
   * The cross account authorization
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
   * The ReadinessCheck to delete
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
   * The RecoveryGroup to delete
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
   * The ResourceSet to delete
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * Name of RecoveryGroup (top level resource) to be analyzed.
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
   * The time a Recovery Group was last assessed for recommendations in UTC ISO-8601 format.
   */
  LastAuditTimestamp?: Date;

  /**
   * A token that can be used to resume pagination from the end of the collection
   */
  NextToken?: string;

  /**
   * A list of recommendations for the customer's application
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
   * The Cell to get
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
   * The arn for the Cell
   */
  CellArn?: string;

  /**
   * The name of the Cell
   */
  CellName?: string;

  /**
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * A list of Cell ARNs and/or RecoveryGroup ARNs
   */
  ParentReadinessScopes?: string[];

  /**
   * A collection of tags associated with a resource
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
   * The name of the Cell
   */
  CellName: string | undefined;

  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * The readiness at Cell level.
   */
  Readiness?: Readiness | string;

  /**
   * Summaries for the ReadinessChecks making up the Cell
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
   * The ReadinessCheck to get
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
   * Arn associated with ReadinessCheck
   */
  ReadinessCheckArn?: string;

  /**
   * Name for a ReadinessCheck
   */
  ReadinessCheckName?: string;

  /**
   * Name of the ResourceSet to be checked
   */
  ResourceSet?: string;

  /**
   * A collection of tags associated with a resource
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * The ReadinessCheck to get
   */
  ReadinessCheckName: string | undefined;

  /**
   * The resource ARN or component Id to get
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * The readiness at rule level.
   */
  Readiness?: Readiness | string;

  /**
   * Details of the rules's results
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * The ReadinessCheck to get
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
   * Top level messages for readiness check status
   */
  Messages?: Message[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * The readiness at rule level.
   */
  Readiness?: Readiness | string;

  /**
   * Summary of resources's readiness
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
   * The RecoveryGroup to get
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
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * The arn for the RecoveryGroup
   */
  RecoveryGroupArn?: string;

  /**
   * The name of the RecoveryGroup
   */
  RecoveryGroupName?: string;

  /**
   * A collection of tags associated with a resource
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * The name of the RecoveryGroup
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * The readiness at RecoveryGroup level.
   */
  Readiness?: Readiness | string;

  /**
   * Summaries for the ReadinessChecks making up the RecoveryGroup
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
   * The ResourceSet to get
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
   * The arn for the ResourceSet
   */
  ResourceSetArn?: string;

  /**
   * The name of the ResourceSet
   */
  ResourceSetName?: string;

  /**
   * AWS Resource Type of the resources in the ResourceSet
   */
  ResourceSetType?: string;

  /**
   * A list of Resource objects
   */
  Resources?: Resource[];

  /**
   * A collection of tags associated with a resource
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A list of Cells
   */
  Cells?: CellOutput[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A list of CrossAccountAuthorizations
   */
  CrossAccountAuthorizations?: string[];

  /**
   * A token that can be used to resume pagination from the end of the collection.
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of ReadinessCheck associated with the account
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of RecoveryGroups
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of ResourceSets associated with the account
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
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;

  /**
   * Filter parameter which specifies the rules to return given a resource type.
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
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of rules
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
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
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
   * A collection of tags associated with a resource
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
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;

  /**
   * A collection of tags associated with a resource
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
   * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
   */
  ResourceArn: string | undefined;

  /**
   * A comma-separated list of the tag keys to remove from the resource.
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

/**
 * Parameters to update for the Cell
 */
export interface UpdateCellRequest {
  /**
   * The Cell to update
   */
  CellName: string | undefined;

  /**
   * A list of Cell arns, completely replaces previous list
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
   * The arn for the Cell
   */
  CellArn?: string;

  /**
   * The name of the Cell
   */
  CellName?: string;

  /**
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * A list of Cell ARNs and/or RecoveryGroup ARNs
   */
  ParentReadinessScopes?: string[];

  /**
   * A collection of tags associated with a resource
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
 * The new Readiness Check values
 */
export interface UpdateReadinessCheckRequest {
  /**
   * The ReadinessCheck to update
   */
  ReadinessCheckName: string | undefined;

  /**
   * The name of the ResourceSet to check
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
   * Arn associated with ReadinessCheck
   */
  ReadinessCheckArn?: string;

  /**
   * Name for a ReadinessCheck
   */
  ReadinessCheckName?: string;

  /**
   * Name of the ResourceSet to be checked
   */
  ResourceSet?: string;

  /**
   * A collection of tags associated with a resource
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
 * Parameters to update for the RecoveryGroup
 */
export interface UpdateRecoveryGroupRequest {
  /**
   * A list of Cell arns, completely replaces previous list
   */
  Cells: string[] | undefined;

  /**
   * The RecoveryGroup to update
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
   * A list of Cell arns
   */
  Cells?: string[];

  /**
   * The arn for the RecoveryGroup
   */
  RecoveryGroupArn?: string;

  /**
   * The name of the RecoveryGroup
   */
  RecoveryGroupName?: string;

  /**
   * A collection of tags associated with a resource
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
 * configuration for the desired
 */
export interface UpdateResourceSetRequest {
  /**
   * The ResourceSet to update
   */
  ResourceSetName: string | undefined;

  /**
   * AWS Resource Type of the resources in the ResourceSet
   */
  ResourceSetType: string | undefined;

  /**
   * A list of Resource objects
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
   * The arn for the ResourceSet
   */
  ResourceSetArn?: string;

  /**
   * The name of the ResourceSet
   */
  ResourceSetName?: string;

  /**
   * AWS Resource Type of the resources in the ResourceSet
   */
  ResourceSetType?: string;

  /**
   * A list of Resource objects
   */
  Resources?: Resource[];

  /**
   * A collection of tags associated with a resource
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
