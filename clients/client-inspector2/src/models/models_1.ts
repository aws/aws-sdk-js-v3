// smithy-typescript generated code
import {
  AggregationRequest,
  AggregationResponse,
  AggregationType,
  AtigData,
  AutoEnable,
  CisaData,
  CisDateFilter,
  CisNumberFilter,
  CisScan,
  CisScanResultsAggregatedByTargetResourceFilterCriteria,
  CisScanResultsAggregatedByTargetResourceSortBy,
  CisScanStatusFilter,
  CisSecurityLevel,
  CisSessionMessage,
  CisSortOrder,
  CisStringFilter,
  CisTargetResourceAggregation,
  ComputePlatform,
  Counts,
  CoverageFilterCriteria,
  CoveredResource,
  Currency,
  Cvss2,
  Cvss3,
  DelegatedAdminAccount,
  Ec2Configuration,
  Ec2DeepInspectionStatus,
  EcrConfiguration,
  Epss,
  ExploitObserved,
  Filter,
  FilterAction,
  FilterCriteria,
  Finding,
  GroupKey,
  Member,
  ResourceType,
  ScanType,
  Schedule,
  SortOrder,
  StringFilter,
  TagFilter,
} from "./models_0";

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of scan results aggregated by a target resource to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  /**
   * <p>The resource aggregations.</p>
   * @public
   */
  targetResourceAggregations?: CisTargetResourceAggregation[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListCisScansDetailLevel = {
  MEMBER: "MEMBER",
  ORGANIZATION: "ORGANIZATION",
} as const;

/**
 * @public
 */
export type ListCisScansDetailLevel = (typeof ListCisScansDetailLevel)[keyof typeof ListCisScansDetailLevel];

/**
 * <p>A list of CIS scans filter criteria.</p>
 * @public
 */
export interface ListCisScansFilterCriteria {
  /**
   * <p>The list of scan name filters.</p>
   * @public
   */
  scanNameFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>The list of target resource ID filters.</p>
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scan status filters.</p>
   * @public
   */
  scanStatusFilters?: CisScanStatusFilter[] | undefined;

  /**
   * <p>The list of scan at filters.</p>
   * @public
   */
  scanAtFilters?: CisDateFilter[] | undefined;

  /**
   * <p>The list of scan configuration ARN filters.</p>
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scan ARN filters.</p>
   * @public
   */
  scanArnFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scheduled by filters.</p>
   * @public
   */
  scheduledByFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of failed checks filters.</p>
   * @public
   */
  failedChecksFilters?: CisNumberFilter[] | undefined;

  /**
   * <p>The list of target account ID filters.</p>
   * @public
   */
  targetAccountIdFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ListCisScansSortBy = {
  FAILED_CHECKS: "FAILED_CHECKS",
  SCAN_START_DATE: "SCAN_START_DATE",
  SCHEDULED_BY: "SCHEDULED_BY",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ListCisScansSortBy = (typeof ListCisScansSortBy)[keyof typeof ListCisScansSortBy];

/**
 * @public
 */
export interface ListCisScansRequest {
  /**
   * <p>The CIS scan filter criteria.</p>
   * @public
   */
  filterCriteria?: ListCisScansFilterCriteria | undefined;

  /**
   * <p>The detail applied to the CIS scan.</p>
   * @public
   */
  detailLevel?: ListCisScansDetailLevel | undefined;

  /**
   * <p>The CIS scans sort by order.</p>
   * @public
   */
  sortBy?: ListCisScansSortBy | undefined;

  /**
   * <p>The CIS scans sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScansResponse {
  /**
   * <p>The CIS scans.</p>
   * @public
   */
  scans?: CisScan[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   * @public
   */
  filterCriteria?: CoverageFilterCriteria | undefined;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An object that contains details on the covered resources in your environment.</p>
   * @public
   */
  coveredResources?: CoveredResource[] | undefined;
}

/**
 * @public
 */
export interface ListCoverageStatisticsRequest {
  /**
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   * @public
   */
  filterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * <p>The value to group the results by.</p>
   * @public
   */
  groupBy?: GroupKey | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoverageStatisticsResponse {
  /**
   * <p>An array with the number for each group.</p>
   * @public
   */
  countsByGroup?: Counts[] | undefined;

  /**
   * <p>The total number for all groups.</p>
   * @public
   */
  totalCounts: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsRequest {
  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsResponse {
  /**
   * <p>Details of the Amazon Inspector delegated administrator of your organization.</p>
   * @public
   */
  delegatedAdminAccounts?: DelegatedAdminAccount[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * <p>The Amazon resource number (ARN) of the filter.</p>
   * @public
   */
  arns?: string[] | undefined;

  /**
   * <p>The action the filter applies to matched findings.</p>
   * @public
   */
  action?: FilterAction | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * <p>Contains details on the filters associated with your account.</p>
   * @public
   */
  filters: Filter[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregationsRequest {
  /**
   * <p>The type of the aggregation request.</p>
   * @public
   */
  aggregationType: AggregationType | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Web Services account IDs to retrieve finding aggregation data for.</p>
   * @public
   */
  accountIds?: StringFilter[] | undefined;

  /**
   * <p>Details of the aggregation request that is used to filter your aggregation results.</p>
   * @public
   */
  aggregationRequest?: AggregationRequest | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregationsResponse {
  /**
   * <p>The type of aggregation to perform.</p>
   * @public
   */
  aggregationType: AggregationType | undefined;

  /**
   * <p>Objects that contain the results of an aggregation operation.</p>
   * @public
   */
  responses?: AggregationResponse[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortField = {
  AWS_ACCOUNT_ID: "AWS_ACCOUNT_ID",
  COMPONENT_TYPE: "COMPONENT_TYPE",
  ECR_IMAGE_PUSHED_AT: "ECR_IMAGE_PUSHED_AT",
  ECR_IMAGE_REGISTRY: "ECR_IMAGE_REGISTRY",
  ECR_IMAGE_REPOSITORY_NAME: "ECR_IMAGE_REPOSITORY_NAME",
  EPSS_SCORE: "EPSS_SCORE",
  FINDING_STATUS: "FINDING_STATUS",
  FINDING_TYPE: "FINDING_TYPE",
  FIRST_OBSERVED_AT: "FIRST_OBSERVED_AT",
  INSPECTOR_SCORE: "INSPECTOR_SCORE",
  LAST_OBSERVED_AT: "LAST_OBSERVED_AT",
  NETWORK_PROTOCOL: "NETWORK_PROTOCOL",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SEVERITY: "SEVERITY",
  VENDOR_SEVERITY: "VENDOR_SEVERITY",
  VULNERABILITY_ID: "VULNERABILITY_ID",
  VULNERABILITY_SOURCE: "VULNERABILITY_SOURCE",
} as const;

/**
 * @public
 */
export type SortField = (typeof SortField)[keyof typeof SortField];

/**
 * <p>Details about the criteria used to sort finding results.</p>
 * @public
 */
export interface SortCriteria {
  /**
   * <p>The finding detail field by which results are sorted.</p>
   * @public
   */
  field: SortField | undefined;

  /**
   * <p>The order by which findings are sorted.</p>
   * @public
   */
  sortOrder: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Details on the filters to apply to your finding results.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * <p>Details on the sort criteria to apply to your finding results.</p>
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Contains details on the findings in your environment.</p>
   * @public
   */
  findings?: Finding[] | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>Specifies whether to list only currently associated members if <code>True</code> or to
   *          list all members within the organization if <code>False</code>.</p>
   * @public
   */
  onlyAssociated?: boolean | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>An object that contains details for each member account.</p>
   * @public
   */
  members?: Member[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *          items.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon resource number (ARN) of the resource to list tags of.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUsageTotalsRequest {
  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services account IDs to retrieve usage totals for.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UsageType = {
  EC2_INSTANCE_HOURS: "EC2_INSTANCE_HOURS",
  ECR_INITIAL_SCAN: "ECR_INITIAL_SCAN",
  ECR_RESCAN: "ECR_RESCAN",
  LAMBDA_FUNCTION_CODE_HOURS: "LAMBDA_FUNCTION_CODE_HOURS",
  LAMBDA_FUNCTION_HOURS: "LAMBDA_FUNCTION_HOURS",
} as const;

/**
 * @public
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];

/**
 * <p>Contains usage information about the cost of Amazon Inspector operation.</p>
 * @public
 */
export interface Usage {
  /**
   * <p>The type scan.</p>
   * @public
   */
  type?: UsageType | undefined;

  /**
   * <p>The total of usage.</p>
   * @public
   */
  total?: number | undefined;

  /**
   * <p>The estimated monthly cost of Amazon Inspector.</p>
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * <p>The currency type used when calculating usage data.</p>
   * @public
   */
  currency?: Currency | undefined;
}

/**
 * <p>The total of usage for an account ID.</p>
 * @public
 */
export interface UsageTotal {
  /**
   * <p>The account ID of the account that usage data was retrieved for.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object representing the total usage for an account.</p>
   * @public
   */
  usage?: Usage[] | undefined;
}

/**
 * @public
 */
export interface ListUsageTotalsResponse {
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An object with details on the total usage for the requested account.</p>
   * @public
   */
  totals?: UsageTotal[] | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyRequest {
  /**
   * <p>The scan type the key encrypts.</p>
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * <p>The resource type the key encrypts.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyResponse {}

/**
 * <p>Details on the criteria used to define the filter for a vulnerability search.
 *       </p>
 * @public
 */
export interface SearchVulnerabilitiesFilterCriteria {
  /**
   * <p>The IDs for specific vulnerabilities.</p>
   * @public
   */
  vulnerabilityIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesRequest {
  /**
   * <p>The criteria used to filter the results of a vulnerability search.</p>
   * @public
   */
  filterCriteria: SearchVulnerabilitiesFilterCriteria | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VulnerabilitySource = {
  NVD: "NVD",
} as const;

/**
 * @public
 */
export type VulnerabilitySource = (typeof VulnerabilitySource)[keyof typeof VulnerabilitySource];

/**
 * <p>Contains details about a specific vulnerability Amazon Inspector can detect.</p>
 * @public
 */
export interface Vulnerability {
  /**
   * <p>The ID for the specific vulnerability.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Common Weakness Enumeration (CWE) associated with the vulnerability.</p>
   * @public
   */
  cwes?: string[] | undefined;

  /**
   * <p>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.</p>
   * @public
   */
  cisaData?: CisaData | undefined;

  /**
   * <p>The source of the vulnerability information.  Possible results are <code>RHEL</code>, <code>AMAZON_CVE</code>, <code>DEBIAN</code> or <code>NVD</code>.</p>
   * @public
   */
  source?: VulnerabilitySource | undefined;

  /**
   * <p>A description of the vulnerability.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.</p>
   * @public
   */
  atigData?: AtigData | undefined;

  /**
   * <p>The severity assigned by the vendor.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.</p>
   * @public
   */
  cvss3?: Cvss3 | undefined;

  /**
   * <p>A list of related vulnerabilities.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.</p>
   * @public
   */
  cvss2?: Cvss2 | undefined;

  /**
   * <p>The date and time when the vendor created this vulnerability.</p>
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the vendor last updated this vulnerability.</p>
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * <p>A link to the official source material for this vulnerability.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>Links to various resources with more information on this vulnerability. </p>
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * <p>An object that contains details on when the exploit was observed.</p>
   * @public
   */
  exploitObserved?: ExploitObserved | undefined;

  /**
   * <p>Platforms that the vulnerability can be detected on.</p>
   * @public
   */
  detectionPlatforms?: string[] | undefined;

  /**
   * <p>An object that contains the Exploit Prediction Scoring System (EPSS) score for a vulnerability.</p>
   * @public
   */
  epss?: Epss | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesResponse {
  /**
   * <p>Details about the listed vulnerability.</p>
   * @public
   */
  vulnerabilities: Vulnerability[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendCisSessionHealthRequest {
  /**
   * <p>A unique identifier for the scan job.</p>
   * @public
   */
  scanJobId: string | undefined;

  /**
   * <p>The unique token that identifies the CIS session.</p>
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * @public
 */
export interface SendCisSessionHealthResponse {}

/**
 * @public
 */
export interface SendCisSessionTelemetryRequest {
  /**
   * <p>A unique identifier for the scan job.</p>
   * @public
   */
  scanJobId: string | undefined;

  /**
   * <p>The unique token that identifies the CIS session.</p>
   * @public
   */
  sessionToken: string | undefined;

  /**
   * <p>The CIS session telemetry messages.</p>
   * @public
   */
  messages: CisSessionMessage[] | undefined;
}

/**
 * @public
 */
export interface SendCisSessionTelemetryResponse {}

/**
 * <p>The start CIS session message.</p>
 * @public
 */
export interface StartCisSessionMessage {
  /**
   * <p>The unique token that identifies the CIS session.</p>
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * @public
 */
export interface StartCisSessionRequest {
  /**
   * <p>A unique identifier for the scan job.</p>
   * @public
   */
  scanJobId: string | undefined;

  /**
   * <p>The start CIS session message.</p>
   * @public
   */
  message: StartCisSessionMessage | undefined;
}

/**
 * @public
 */
export interface StartCisSessionResponse {}

/**
 * <p>The stop CIS message progress.</p>
 * @public
 */
export interface StopCisMessageProgress {
  /**
   * <p>The progress' total checks.</p>
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * <p>The progress' successful checks.</p>
   * @public
   */
  successfulChecks?: number | undefined;

  /**
   * <p>The progress' failed checks.</p>
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * <p>The progress' not evaluated checks.</p>
   * @public
   */
  notEvaluatedChecks?: number | undefined;

  /**
   * <p>The progress' unknown checks.</p>
   * @public
   */
  unknownChecks?: number | undefined;

  /**
   * <p>The progress' not applicable checks.</p>
   * @public
   */
  notApplicableChecks?: number | undefined;

  /**
   * <p>The progress' informational checks.</p>
   * @public
   */
  informationalChecks?: number | undefined;

  /**
   * <p>The progress' error checks.</p>
   * @public
   */
  errorChecks?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const StopCisSessionStatus = {
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  SUCCESS: "SUCCESS",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
} as const;

/**
 * @public
 */
export type StopCisSessionStatus = (typeof StopCisSessionStatus)[keyof typeof StopCisSessionStatus];

/**
 * <p>The stop CIS session message.</p>
 * @public
 */
export interface StopCisSessionMessage {
  /**
   * <p>The status of the message.</p>
   * @public
   */
  status: StopCisSessionStatus | undefined;

  /**
   * <p>The reason for the message.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The progress of the message.</p>
   * @public
   */
  progress: StopCisMessageProgress | undefined;

  /**
   * <p>The message compute platform.</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>The message benchmark version.</p>
   * @public
   */
  benchmarkVersion?: string | undefined;

  /**
   * <p>The message benchmark profile.</p>
   * @public
   */
  benchmarkProfile?: string | undefined;
}

/**
 * @public
 */
export interface StopCisSessionRequest {
  /**
   * <p>A unique identifier for the scan job.</p>
   * @public
   */
  scanJobId: string | undefined;

  /**
   * <p>The unique token that identifies the CIS session.</p>
   * @public
   */
  sessionToken: string | undefined;

  /**
   * <p>The stop CIS session message.</p>
   * @public
   */
  message: StopCisSessionMessage | undefined;
}

/**
 * @public
 */
export interface StopCisSessionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Updates CIS targets.</p>
 * @public
 */
export interface UpdateCisTargets {
  /**
   * <p>The target account ids.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The target resource tags.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationRequest {
  /**
   * <p>The CIS scan configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The scan name for the CIS scan configuration.</p>
   * @public
   */
  scanName?: string | undefined;

  /**
   * <p>
   *          The security level for the CIS scan configuration.
   *          Security level refers to the Benchmark levels that CIS assigns to a profile.
   *       </p>
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;

  /**
   * <p>The schedule for the CIS scan configuration.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The targets for the CIS scan configuration.</p>
   * @public
   */
  targets?: UpdateCisTargets | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationResponse {
  /**
   * <p>The CIS scan configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * <p>Specifies how the ECR automated re-scan will be updated for your environment.</p>
   * @public
   */
  ecrConfiguration?: EcrConfiguration | undefined;

  /**
   * <p>Specifies how the Amazon EC2 automated scan will be updated for your environment.</p>
   * @public
   */
  ec2Configuration?: Ec2Configuration | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationRequest {
  /**
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
   * @public
   */
  activateDeepInspection?: boolean | undefined;

  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * <p>The current Amazon Inspector deep inspection custom paths for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * <p>The current Amazon Inspector deep inspection custom paths for the organization.</p>
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * <p>The status of Amazon Inspector deep inspection in your account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be added.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyRequest {
  /**
   * <p>A KMS key ID for the encryption key.</p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>The scan type for the encryption key.</p>
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * <p>The resource type for the encryption key.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyResponse {}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  action?: FilterAction | undefined;

  /**
   * <p>A description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Defines the criteria to be update in the filter.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the filter to update.</p>
   * @public
   */
  filterArn: string | undefined;

  /**
   * <p>The reason the filter was updated.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.</p>
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.</p>
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your organization.</p>
   * @public
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
