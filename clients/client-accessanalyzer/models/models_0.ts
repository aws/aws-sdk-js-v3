import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>A conflict exception error.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria to use in the filter that defines the archive rule.</p>
 */
export interface Criterion {
  /**
   * <p>An "equals" operator to match for the filter used to create the rule.</p>
   */
  eq?: string[];

  /**
   * <p>A "not equals" operator to match for the filter used to create the rule.</p>
   */
  neq?: string[];

  /**
   * <p>A "contains" operator to match for the filter used to create the rule.</p>
   */
  contains?: string[];

  /**
   * <p>An "exists" operator to match for the filter used to create the rule. </p>
   */
  exists?: boolean;
}

export namespace Criterion {
  export const filterSensitiveLog = (obj: Criterion): any => ({
    ...obj,
  });
}

/**
 * <p>Creates an archive rule.</p>
 */
export interface CreateArchiveRuleRequest {
  /**
   * <p>The name of the created analyzer.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to create.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The criteria for the rule.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace CreateArchiveRuleRequest {
  export const filterSensitiveLog = (obj: CreateArchiveRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  resourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Service quote met error.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Throttling limit exceeded error.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {};
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>Validation exception error.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * <p>A list of fields that didn't validate.</p>
   */
  fieldList?: ValidationExceptionField[];
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes an archive rule.</p>
 */
export interface DeleteArchiveRuleRequest {
  /**
   * <p>The name of the analyzer that associated with the archive rule to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to delete.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace DeleteArchiveRuleRequest {
  export const filterSensitiveLog = (obj: DeleteArchiveRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves an archive rule.</p>
 */
export interface GetArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to retrieve.</p>
   */
  ruleName: string | undefined;
}

export namespace GetArchiveRuleRequest {
  export const filterSensitiveLog = (obj: GetArchiveRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an archive rule.</p>
 */
export interface ArchiveRuleSummary {
  /**
   * <p>The name of the archive rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A filter used to define the archive rule.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The time at which the archive rule was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the archive rule was last updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace ArchiveRuleSummary {
  export const filterSensitiveLog = (obj: ArchiveRuleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface GetArchiveRuleResponse {
  /**
   * <p>Contains information about an archive rule.</p>
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

export namespace GetArchiveRuleResponse {
  export const filterSensitiveLog = (obj: GetArchiveRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 */
export interface ListArchiveRulesRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the request.</p>
   */
  maxResults?: number;
}

export namespace ListArchiveRulesRequest {
  export const filterSensitiveLog = (obj: ListArchiveRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListArchiveRulesResponse {
  /**
   * <p>A list of archive rules created for the specified analyzer.</p>
   */
  archiveRules: ArchiveRuleSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export namespace ListArchiveRulesResponse {
  export const filterSensitiveLog = (obj: ListArchiveRulesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates the specified archive rule.</p>
 */
export interface UpdateArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to update the archive rules for.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to update.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A filter to match for the rules to update. Only rules that match the filter are
   *          updated.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace UpdateArchiveRuleRequest {
  export const filterSensitiveLog = (obj: UpdateArchiveRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An criterion statement in an archive rule. Each archive rule may have multiple
 *          criteria.</p>
 */
export interface InlineArchiveRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The condition and values for a criterion.</p>
   */
  filter: { [key: string]: Criterion } | undefined;
}

export namespace InlineArchiveRule {
  export const filterSensitiveLog = (obj: InlineArchiveRule): any => ({
    ...obj,
  });
}

export type Type = "ACCOUNT" | "ORGANIZATION";

/**
 * <p>Creates an analyzer.</p>
 */
export interface CreateAnalyzerRequest {
  /**
   * <p>The name of the analyzer to create.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create
   *          only one analyzer per account per Region.</p>
   */
  type: Type | string | undefined;

  /**
   * <p>Specifies the archive rules to add for the analyzer. Archive rules automatically archive
   *          findings that meet the criteria you define for the rule.</p>
   */
  archiveRules?: InlineArchiveRule[];

  /**
   * <p>The tags to apply to the analyzer.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace CreateAnalyzerRequest {
  export const filterSensitiveLog = (obj: CreateAnalyzerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request to create an analyzer.</p>
 */
export interface CreateAnalyzerResponse {
  /**
   * <p>The ARN of the analyzer that was created by the request.</p>
   */
  arn?: string;
}

export namespace CreateAnalyzerResponse {
  export const filterSensitiveLog = (obj: CreateAnalyzerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes an analyzer.</p>
 */
export interface DeleteAnalyzerRequest {
  /**
   * <p>The name of the analyzer to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace DeleteAnalyzerRequest {
  export const filterSensitiveLog = (obj: DeleteAnalyzerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves an analyzer.</p>
 */
export interface GetAnalyzerRequest {
  /**
   * <p>The name of the analyzer retrieved.</p>
   */
  analyzerName: string | undefined;
}

export namespace GetAnalyzerRequest {
  export const filterSensitiveLog = (obj: GetAnalyzerRequest): any => ({
    ...obj,
  });
}

export type AnalyzerStatus = "ACTIVE" | "CREATING" | "DISABLED" | "FAILED";

export type ReasonCode =
  | "AWS_SERVICE_ACCESS_DISABLED"
  | "DELEGATED_ADMINISTRATOR_DEREGISTERED"
  | "ORGANIZATION_DELETED"
  | "SERVICE_LINKED_ROLE_CREATION_FAILED";

/**
 * <p>Provides more details about the current status of the analyzer. For example, if the
 *          creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer
 *          with organization as the type, this failure can be due to an issue with creating the
 *          service-linked roles required in the member accounts of the AWS organization.</p>
 */
export interface StatusReason {
  /**
   * <p>The reason code for the current status of the analyzer.</p>
   */
  code: ReasonCode | string | undefined;
}

export namespace StatusReason {
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the analyzer.</p>
 */
export interface AnalyzerSummary {
  /**
   * <p>The ARN of the analyzer.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the analyzer.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of analyzer, which corresponds to the zone of trust chosen for the
   *          analyzer.</p>
   */
  type: Type | string | undefined;

  /**
   * <p>A timestamp for the time at which the analyzer was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The resource that was most recently analyzed by the analyzer.</p>
   */
  lastResourceAnalyzed?: string;

  /**
   * <p>The time at which the most recently analyzed resource was analyzed.</p>
   */
  lastResourceAnalyzedAt?: Date;

  /**
   * <p>The tags added to the analyzer.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The status of the analyzer. An <code>Active</code> analyzer successfully monitors supported resources
   *          and generates new findings. The analyzer is <code>Disabled</code> when a user action, such as removing
   *          trusted access for IAM Access Analyzer from AWS Organizations, causes the analyzer to stop
   *          generating new findings. The status is <code>Creating</code> when the analyzer creation is in progress
   *          and <code>Failed</code> when the analyzer creation has failed. </p>
   */
  status: AnalyzerStatus | string | undefined;

  /**
   * <p>The <code>statusReason</code> provides more details about the current status of the analyzer. For example, if the
   *          creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer
   *          with organization as the type, this failure can be due to an issue with creating the
   *          service-linked roles required in the member accounts of the AWS organization.</p>
   */
  statusReason?: StatusReason;
}

export namespace AnalyzerSummary {
  export const filterSensitiveLog = (obj: AnalyzerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzerResponse {
  /**
   * <p>An <code>AnalyzerSummary</code> object that contains information about the
   *          analyzer.</p>
   */
  analyzer: AnalyzerSummary | undefined;
}

export namespace GetAnalyzerResponse {
  export const filterSensitiveLog = (obj: GetAnalyzerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of analyzers.</p>
 */
export interface ListAnalyzersRequest {
  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The type of analyzer.</p>
   */
  type?: Type | string;
}

export namespace ListAnalyzersRequest {
  export const filterSensitiveLog = (obj: ListAnalyzersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzersResponse {
  /**
   * <p>The analyzers retrieved.</p>
   */
  analyzers: AnalyzerSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export namespace ListAnalyzersResponse {
  export const filterSensitiveLog = (obj: ListAnalyzersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves an analyzed resource.</p>
 */
export interface GetAnalyzedResourceRequest {
  /**
   * <p>The ARN of the analyzer to retrieve information from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to retrieve information about.</p>
   */
  resourceArn: string | undefined;
}

export namespace GetAnalyzedResourceRequest {
  export const filterSensitiveLog = (obj: GetAnalyzedResourceRequest): any => ({
    ...obj,
  });
}

export type ResourceType =
  | "AWS::IAM::Role"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::S3::Bucket"
  | "AWS::SQS::Queue";

export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

/**
 * <p>Contains details about the analyzed resource.</p>
 */
export interface AnalyzedResource {
  /**
   * <p>The ARN of the resource that was analyzed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of the resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding grants public access to the
   *          resource.</p>
   */
  isPublic: boolean | undefined;

  /**
   * <p>The actions that an external principal is granted permission to use by the policy that
   *          generated the finding.</p>
   */
  actions?: string[];

  /**
   * <p>Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
   */
  sharedVia?: string[];

  /**
   * <p>The current status of the finding generated from the analyzed resource.</p>
   */
  status?: FindingStatus | string;

  /**
   * <p>The AWS account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error message.</p>
   */
  error?: string;
}

export namespace AnalyzedResource {
  export const filterSensitiveLog = (obj: AnalyzedResource): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzedResourceResponse {
  /**
   * <p>An <code>AnalyedResource</code> object that contains information that Access Analyzer
   *          found when it analyzed the resource.</p>
   */
  resource?: AnalyzedResource;
}

export namespace GetAnalyzedResourceResponse {
  export const filterSensitiveLog = (obj: GetAnalyzedResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a finding.</p>
 */
export interface GetFindingRequest {
  /**
   * <p>The ARN of the analyzer that generated the finding.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ID of the finding to retrieve.</p>
   */
  id: string | undefined;
}

export namespace GetFindingRequest {
  export const filterSensitiveLog = (obj: GetFindingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSourceDetail {
  /**
   * <p>The ARN of the access point that generated the finding.</p>
   */
  accessPointArn?: string;
}

export namespace FindingSourceDetail {
  export const filterSensitiveLog = (obj: FindingSourceDetail): any => ({
    ...obj,
  });
}

export type FindingSourceType = "BUCKET_ACL" | "KMS_GRANT" | "POLICY" | "S3_ACCESS_POINT";

/**
 * <p>The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSource {
  /**
   * <p>Indicates the type of access that generated the finding.</p>
   */
  type: FindingSourceType | string | undefined;

  /**
   * <p>Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</p>
   */
  detail?: FindingSourceDetail;
}

export namespace FindingSource {
  export const filterSensitiveLog = (obj: FindingSource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a finding.</p>
 */
export interface Finding {
  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>The external principal that access to a resource within the zone of trust.</p>
   */
  principal?: { [key: string]: string };

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The resource that an external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The type of the resource reported in the finding.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: { [key: string]: string } | undefined;

  /**
   * <p>The time at which the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The AWS account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error.</p>
   */
  error?: string;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

export namespace Finding {
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface GetFindingResponse {
  /**
   * <p>A <code>finding</code> object that contains finding details.</p>
   */
  finding?: Finding;
}

export namespace GetFindingResponse {
  export const filterSensitiveLog = (obj: GetFindingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of resources that have been analyzed.</p>
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * <p>The ARN of the analyzer to retrieve a list of analyzed resources from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace ListAnalyzedResourcesRequest {
  export const filterSensitiveLog = (obj: ListAnalyzedResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the ARN of the analyzed resource.</p>
 */
export interface AnalyzedResourceSummary {
  /**
   * <p>The ARN of the analyzed resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The AWS account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The type of resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;
}

export namespace AnalyzedResourceSummary {
  export const filterSensitiveLog = (obj: AnalyzedResourceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * <p>A list of resources that were analyzed.</p>
   */
  analyzedResources: AnalyzedResourceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export namespace ListAnalyzedResourcesResponse {
  export const filterSensitiveLog = (obj: ListAnalyzedResourcesResponse): any => ({
    ...obj,
  });
}

export type OrderBy = "ASC" | "DESC";

/**
 * <p>The criteria used to sort.</p>
 */
export interface SortCriteria {
  /**
   * <p>The name of the attribute to sort on.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order, ascending or descending.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace SortCriteria {
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 */
export interface ListFindingsRequest {
  /**
   * <p>The ARN of the analyzer to retrieve findings from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A filter to match for the findings to return.</p>
   */
  filter?: { [key: string]: Criterion };

  /**
   * <p>The sort order for the findings returned.</p>
   */
  sort?: SortCriteria;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace ListFindingsRequest {
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a finding.</p>
 */
export interface FindingSummary {
  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: { [key: string]: string };

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The resource that the external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>Indicates whether the finding reports a resource that has a policy that allows public
   *          access.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The type of the resource that the external principal has access to.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: { [key: string]: string } | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource-based policy that generated the finding was
   *          analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was most recently updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The AWS account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The error that resulted in an Error finding.</p>
   */
  error?: string;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

export namespace FindingSummary {
  export const filterSensitiveLog = (obj: FindingSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListFindingsResponse {
  /**
   * <p>A list of findings retrieved from the analyzer that match the filter criteria specified,
   *          if any.</p>
   */
  findings: FindingSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsResponse {
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of tags applied to the specified resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags from.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are applied to the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Starts a scan of the policies applied to the specified resource.</p>
 */
export interface StartResourceScanRequest {
  /**
   * <p>The ARN of the analyzer to use to scan the policies applied to the specified
   *          resource.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to scan.</p>
   */
  resourceArn: string | undefined;
}

export namespace StartResourceScanRequest {
  export const filterSensitiveLog = (obj: StartResourceScanRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Adds a tag to the specified resource.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add the tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Removes a tag from the specified resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key for the tag to add.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * <p>Updates findings with the new values provided in the request.</p>
 */
export interface UpdateFindingsRequest {
  /**
   * <p>The ARN of the analyzer that generated the findings to update.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The state represents the action to take to update the finding Status. Use
   *             <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use
   *             <code>ACTIVE</code> to change an Archived finding to an Active finding.</p>
   */
  status: FindingStatusUpdate | string | undefined;

  /**
   * <p>The IDs of the findings to update.</p>
   */
  ids?: string[];

  /**
   * <p>The ARN of the resource identified in the finding.</p>
   */
  resourceArn?: string;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace UpdateFindingsRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
}
