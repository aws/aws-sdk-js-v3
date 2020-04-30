import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>Contains details about the analyzed resource.</p>
 */
export interface AnalyzedResource {
  __type?: "AnalyzedResource";
  /**
   * <p>The actions that an external principal is granted permission to use by the policy that
   *          generated the finding.</p>
   */
  actions?: string[];

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>An error message.</p>
   */
  error?: string;

  /**
   * <p>Indicates whether the policy that generated the finding grants public access to the
   *          resource.</p>
   */
  isPublic: boolean | undefined;

  /**
   * <p>The ARN of the resource that was analyzed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of the resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>Indicates how the access that generated the finding is granted.</p>
   */
  sharedVia?: string[];

  /**
   * <p>The current status of the finding generated from the analyzed resource.</p>
   */
  status?: FindingStatus | string;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace AnalyzedResource {
  export const isa = (o: any): o is AnalyzedResource =>
    __isa(o, "AnalyzedResource");
}

/**
 * <p>Contains the ARN of the analyzed resource.</p>
 */
export interface AnalyzedResourceSummary {
  __type?: "AnalyzedResourceSummary";
  /**
   * <p>The ARN of the analyzed resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;
}

export namespace AnalyzedResourceSummary {
  export const isa = (o: any): o is AnalyzedResourceSummary =>
    __isa(o, "AnalyzedResourceSummary");
}

/**
 * <p>Contains information about the analyzer.</p>
 */
export interface AnalyzerSummary {
  __type?: "AnalyzerSummary";
  /**
   * <p>The ARN of the analyzer.</p>
   */
  arn: string | undefined;

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
   * <p>The name of the analyzer.</p>
   */
  name: string | undefined;

  /**
   * <p>The tags added to the analyzer.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of analyzer, which corresponds to the zone of trust chosen for the
   *          analyzer.</p>
   */
  type: Type | string | undefined;
}

export namespace AnalyzerSummary {
  export const isa = (o: any): o is AnalyzerSummary =>
    __isa(o, "AnalyzerSummary");
}

/**
 * <p>Contains information about an archive rule.</p>
 */
export interface ArchiveRuleSummary {
  __type?: "ArchiveRuleSummary";
  /**
   * <p>The time at which the archive rule was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>A filter used to define the archive rule.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The name of the archive rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The time at which the archive rule was last updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace ArchiveRuleSummary {
  export const isa = (o: any): o is ArchiveRuleSummary =>
    __isa(o, "ArchiveRuleSummary");
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
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>Creates an analyzer.</p>
 */
export interface CreateAnalyzerRequest {
  __type?: "CreateAnalyzerRequest";
  /**
   * <p>The name of the analyzer to create.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.</p>
   */
  archiveRules?: InlineArchiveRule[];

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags to apply to the analyzer.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per
   *          Region.</p>
   */
  type: Type | string | undefined;
}

export namespace CreateAnalyzerRequest {
  export const isa = (o: any): o is CreateAnalyzerRequest =>
    __isa(o, "CreateAnalyzerRequest");
}

/**
 * <p>The response to the request to create an analyzer.</p>
 */
export interface CreateAnalyzerResponse {
  __type?: "CreateAnalyzerResponse";
  /**
   * <p>The ARN of the analyzer that was created by the request.</p>
   */
  arn?: string;
}

export namespace CreateAnalyzerResponse {
  export const isa = (o: any): o is CreateAnalyzerResponse =>
    __isa(o, "CreateAnalyzerResponse");
}

/**
 * <p>Creates an archive rule.</p>
 */
export interface CreateArchiveRuleRequest {
  __type?: "CreateArchiveRuleRequest";
  /**
   * <p>The name of the created analyzer.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The criteria for the rule.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The name of the rule to create.</p>
   */
  ruleName: string | undefined;
}

export namespace CreateArchiveRuleRequest {
  export const isa = (o: any): o is CreateArchiveRuleRequest =>
    __isa(o, "CreateArchiveRuleRequest");
}

/**
 * <p>The criteria to use in the filter that defines the archive rule.</p>
 */
export interface Criterion {
  __type?: "Criterion";
  /**
   * <p>A "contains" operator to match for the filter used to create the rule.</p>
   */
  contains?: string[];

  /**
   * <p>An "equals" operator to match for the filter used to create the rule.</p>
   */
  eq?: string[];

  /**
   * <p>An "exists" operator to match for the filter used to create the rule. </p>
   */
  exists?: boolean;

  /**
   * <p>A "not equals" operator to match for the filter used to create the rule.</p>
   */
  neq?: string[];
}

export namespace Criterion {
  export const isa = (o: any): o is Criterion => __isa(o, "Criterion");
}

/**
 * <p>Deletes an analyzer.</p>
 */
export interface DeleteAnalyzerRequest {
  __type?: "DeleteAnalyzerRequest";
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
  export const isa = (o: any): o is DeleteAnalyzerRequest =>
    __isa(o, "DeleteAnalyzerRequest");
}

/**
 * <p>Deletes an archive rule.</p>
 */
export interface DeleteArchiveRuleRequest {
  __type?: "DeleteArchiveRuleRequest";
  /**
   * <p>The name of the analyzer that associated with the archive rule to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the rule to delete.</p>
   */
  ruleName: string | undefined;
}

export namespace DeleteArchiveRuleRequest {
  export const isa = (o: any): o is DeleteArchiveRuleRequest =>
    __isa(o, "DeleteArchiveRuleRequest");
}

/**
 * <p>Contains information about a finding.</p>
 */
export interface Finding {
  __type?: "Finding";
  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: { [key: string]: string } | undefined;

  /**
   * <p>The time at which the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>An error.</p>
   */
  error?: string;

  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The external principal that access to a resource within the zone of trust.</p>
   */
  principal?: { [key: string]: string };

  /**
   * <p>The resource that an external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>The type of the resource reported in the finding.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The current status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace Finding {
  export const isa = (o: any): o is Finding => __isa(o, "Finding");
}

export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * <p>Contains information about a finding.</p>
 */
export interface FindingSummary {
  __type?: "FindingSummary";
  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The time at which the resource-based policy that generated the finding was
   *          analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: { [key: string]: string } | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The error that resulted in an Error finding.</p>
   */
  error?: string;

  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>Indicates whether the finding reports a resource that has a policy that allows public
   *          access.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: { [key: string]: string };

  /**
   * <p>The resource that the external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>The type of the resource that the external principal has access to.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The time at which the finding was most recently updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace FindingSummary {
  export const isa = (o: any): o is FindingSummary =>
    __isa(o, "FindingSummary");
}

/**
 * <p>Retrieves an analyzed resource.</p>
 */
export interface GetAnalyzedResourceRequest {
  __type?: "GetAnalyzedResourceRequest";
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
  export const isa = (o: any): o is GetAnalyzedResourceRequest =>
    __isa(o, "GetAnalyzedResourceRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzedResourceResponse {
  __type?: "GetAnalyzedResourceResponse";
  /**
   * <p>An <code>AnalyedResource</code> object that contains information that Access Analyzer
   *          found when it analyzed the resource.</p>
   */
  resource?: AnalyzedResource;
}

export namespace GetAnalyzedResourceResponse {
  export const isa = (o: any): o is GetAnalyzedResourceResponse =>
    __isa(o, "GetAnalyzedResourceResponse");
}

/**
 * <p>Retrieves an analyzer.</p>
 */
export interface GetAnalyzerRequest {
  __type?: "GetAnalyzerRequest";
  /**
   * <p>The name of the analyzer retrieved.</p>
   */
  analyzerName: string | undefined;
}

export namespace GetAnalyzerRequest {
  export const isa = (o: any): o is GetAnalyzerRequest =>
    __isa(o, "GetAnalyzerRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzerResponse {
  __type?: "GetAnalyzerResponse";
  /**
   * <p>An <code>AnalyzerSummary</code> object that contains information about the
   *          analyzer.</p>
   */
  analyzer: AnalyzerSummary | undefined;
}

export namespace GetAnalyzerResponse {
  export const isa = (o: any): o is GetAnalyzerResponse =>
    __isa(o, "GetAnalyzerResponse");
}

/**
 * <p>Retrieves an archive rule.</p>
 */
export interface GetArchiveRuleRequest {
  __type?: "GetArchiveRuleRequest";
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
  export const isa = (o: any): o is GetArchiveRuleRequest =>
    __isa(o, "GetArchiveRuleRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface GetArchiveRuleResponse {
  __type?: "GetArchiveRuleResponse";
  /**
   * <p>Contains information about an archive rule.</p>
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

export namespace GetArchiveRuleResponse {
  export const isa = (o: any): o is GetArchiveRuleResponse =>
    __isa(o, "GetArchiveRuleResponse");
}

/**
 * <p>Retrieves a finding.</p>
 */
export interface GetFindingRequest {
  __type?: "GetFindingRequest";
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
  export const isa = (o: any): o is GetFindingRequest =>
    __isa(o, "GetFindingRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface GetFindingResponse {
  __type?: "GetFindingResponse";
  /**
   * <p>A <code>finding</code> object that contains finding details.</p>
   */
  finding?: Finding;
}

export namespace GetFindingResponse {
  export const isa = (o: any): o is GetFindingResponse =>
    __isa(o, "GetFindingResponse");
}

/**
 * <p>An criterion statement in an archive rule. Each archive rule may have multiple
 *          criteria.</p>
 */
export interface InlineArchiveRule {
  __type?: "InlineArchiveRule";
  /**
   * <p>The condition and values for a criterion.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace InlineArchiveRule {
  export const isa = (o: any): o is InlineArchiveRule =>
    __isa(o, "InlineArchiveRule");
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace InternalServerException {
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

/**
 * <p>Retrieves a list of resources that have been analyzed.</p>
 */
export interface ListAnalyzedResourcesRequest {
  __type?: "ListAnalyzedResourcesRequest";
  /**
   * <p>The ARN of the analyzer to retrieve a list of analyzed resources from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace ListAnalyzedResourcesRequest {
  export const isa = (o: any): o is ListAnalyzedResourcesRequest =>
    __isa(o, "ListAnalyzedResourcesRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzedResourcesResponse {
  __type?: "ListAnalyzedResourcesResponse";
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
  export const isa = (o: any): o is ListAnalyzedResourcesResponse =>
    __isa(o, "ListAnalyzedResourcesResponse");
}

/**
 * <p>Retrieves a list of analyzers.</p>
 */
export interface ListAnalyzersRequest {
  __type?: "ListAnalyzersRequest";
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of analyzer.</p>
   */
  type?: Type | string;
}

export namespace ListAnalyzersRequest {
  export const isa = (o: any): o is ListAnalyzersRequest =>
    __isa(o, "ListAnalyzersRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzersResponse {
  __type?: "ListAnalyzersResponse";
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
  export const isa = (o: any): o is ListAnalyzersResponse =>
    __isa(o, "ListAnalyzersResponse");
}

/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 */
export interface ListArchiveRulesRequest {
  __type?: "ListArchiveRulesRequest";
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export namespace ListArchiveRulesRequest {
  export const isa = (o: any): o is ListArchiveRulesRequest =>
    __isa(o, "ListArchiveRulesRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface ListArchiveRulesResponse {
  __type?: "ListArchiveRulesResponse";
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
  export const isa = (o: any): o is ListArchiveRulesResponse =>
    __isa(o, "ListArchiveRulesResponse");
}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 */
export interface ListFindingsRequest {
  __type?: "ListFindingsRequest";
  /**
   * <p>The ARN of the analyzer to retrieve findings from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A filter to match for the findings to return.</p>
   */
  filter?: { [key: string]: Criterion };

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The sort order for the findings returned.</p>
   */
  sort?: SortCriteria;
}

export namespace ListFindingsRequest {
  export const isa = (o: any): o is ListFindingsRequest =>
    __isa(o, "ListFindingsRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface ListFindingsResponse {
  __type?: "ListFindingsResponse";
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
  export const isa = (o: any): o is ListFindingsResponse =>
    __isa(o, "ListFindingsResponse");
}

/**
 * <p>Retrieves a list of tags applied to the specified resource.</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource to retrieve tags from.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags that are applied to the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export type OrderBy = "ASC" | "DESC";

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
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
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

export type ResourceType =
  | "AWS::IAM::Role"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::S3::Bucket"
  | "AWS::SQS::Queue";

/**
 * <p>Service quote met error.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
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
  export const isa = (o: any): o is ServiceQuotaExceededException =>
    __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>The criteria used to sort.</p>
 */
export interface SortCriteria {
  __type?: "SortCriteria";
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
  export const isa = (o: any): o is SortCriteria => __isa(o, "SortCriteria");
}

/**
 * <p>Starts a scan of the policies applied to the specified resource.</p>
 */
export interface StartResourceScanRequest {
  __type?: "StartResourceScanRequest";
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
  export const isa = (o: any): o is StartResourceScanRequest =>
    __isa(o, "StartResourceScanRequest");
}

/**
 * <p>Adds a tag to the specified resource.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>Throttling limit exceeded error.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

export type Type = "ACCOUNT";

/**
 * <p>Removes a tag from the specified resource.</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

/**
 * <p>The response to the request.</p>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

/**
 * <p>Updates the specified archive rule.</p>
 */
export interface UpdateArchiveRuleRequest {
  __type?: "UpdateArchiveRuleRequest";
  /**
   * <p>The name of the analyzer to update the archive rules for.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;

  /**
   * <p>A filter to match for the rules to update. Only rules that match the filter are
   *          updated.</p>
   */
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The name of the rule to update.</p>
   */
  ruleName: string | undefined;
}

export namespace UpdateArchiveRuleRequest {
  export const isa = (o: any): o is UpdateArchiveRuleRequest =>
    __isa(o, "UpdateArchiveRuleRequest");
}

/**
 * <p>Updates findings with the new values provided in the request.</p>
 */
export interface UpdateFindingsRequest {
  __type?: "UpdateFindingsRequest";
  /**
   * <p>The ARN of the analyzer that generated the findings to update.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;

  /**
   * <p>The IDs of the findings to update.</p>
   */
  ids?: string[];

  /**
   * <p>The ARN of the resource identified in the finding.</p>
   */
  resourceArn?: string;

  /**
   * <p>The state represents the action to take to update the finding Status. Use
   *             <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use
   *             <code>ACTIVE</code> to change an Archived finding to an Active finding.</p>
   */
  status: FindingStatusUpdate | string | undefined;
}

export namespace UpdateFindingsRequest {
  export const isa = (o: any): o is UpdateFindingsRequest =>
    __isa(o, "UpdateFindingsRequest");
}

/**
 * <p>Validation exception error.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A list of fields that didn't validate.</p>
   */
  fieldList?: ValidationExceptionField[];

  message: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;
}

export namespace ValidationException {
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

/**
 * <p>Contains information about a validation exception.</p>
 */
export interface ValidationExceptionField {
  __type?: "ValidationExceptionField";
  /**
   * <p>A message about the validation exception.</p>
   */
  message: string | undefined;

  /**
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;
}

export namespace ValidationExceptionField {
  export const isa = (o: any): o is ValidationExceptionField =>
    __isa(o, "ValidationExceptionField");
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation"
}
