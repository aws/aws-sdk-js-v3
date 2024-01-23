// smithy-typescript generated code
import {
  AggregationRequest,
  AggregationResponse,
  AggregationType,
  AtigData,
  AutoEnable,
  CisaData,
  CisSecurityLevel,
  CisSessionMessage,
  ComputePlatform,
  Counts,
  CoverageFilterCriteria,
  CoveredResource,
  Currency,
  Cvss2,
  Cvss3,
  DelegatedAdminAccount,
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
} from "./models_0";

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An object that contains details on the covered resources in your environment.</p>
   */
  coveredResources?: CoveredResource[];
}

/**
 * @public
 */
export interface ListCoverageStatisticsRequest {
  /**
   * @public
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   */
  filterCriteria?: CoverageFilterCriteria;

  /**
   * @public
   * <p>The value to group the results by.</p>
   */
  groupBy?: GroupKey;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCoverageStatisticsResponse {
  /**
   * @public
   * <p>An array with the number for each group.</p>
   */
  countsByGroup?: Counts[];

  /**
   * @public
   * <p>The total number for all groups.</p>
   */
  totalCounts: number | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsResponse {
  /**
   * @public
   * <p>Details of the Amazon Inspector delegated administrator of your organization.</p>
   */
  delegatedAdminAccounts?: DelegatedAdminAccount[];

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * @public
   * <p>The Amazon resource number (ARN) of the filter.</p>
   */
  arns?: string[];

  /**
   * @public
   * <p>The action the filter applies to matched findings.</p>
   */
  action?: FilterAction;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * @public
   * <p>Contains details on the filters associated with your account.</p>
   */
  filters: Filter[] | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFindingAggregationsRequest {
  /**
   * @public
   * <p>The type of the aggregation request.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Web Services account IDs to retrieve finding aggregation data for.</p>
   */
  accountIds?: StringFilter[];

  /**
   * @public
   * <p>Details of the aggregation request that is used to filter your aggregation results.</p>
   */
  aggregationRequest?: AggregationRequest;
}

/**
 * @public
 */
export interface ListFindingAggregationsResponse {
  /**
   * @public
   * <p>The type of aggregation to perform.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * @public
   * <p>Objects that contain the results of an aggregation operation.</p>
   */
  responses?: AggregationResponse[];

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
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
 * @public
 * <p>Details about the criteria used to sort finding results.</p>
 */
export interface SortCriteria {
  /**
   * @public
   * <p>The finding detail field by which results are sorted.</p>
   */
  field: SortField | undefined;

  /**
   * @public
   * <p>The order by which findings are sorted.</p>
   */
  sortOrder: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Details on the filters to apply to your finding results.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>Details on the sort criteria to apply to your finding results.</p>
   */
  sortCriteria?: SortCriteria;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Contains details on the findings in your environment.</p>
   */
  findings?: Finding[];
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>Specifies whether to list only currently associated members if <code>True</code> or to
   *          list all members within the organization if <code>False</code>.</p>
   */
  onlyAssociated?: boolean;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
   * <p>An object that contains details for each member account.</p>
   */
  members?: Member[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *          items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon resource number (ARN) of the resource to list tags of.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListUsageTotalsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services account IDs to retrieve usage totals for.</p>
   */
  accountIds?: string[];
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
 * @public
 * <p>Contains usage information about the cost of Amazon Inspector operation.</p>
 */
export interface Usage {
  /**
   * @public
   * <p>The type scan.</p>
   */
  type?: UsageType;

  /**
   * @public
   * <p>The total of usage.</p>
   */
  total?: number;

  /**
   * @public
   * <p>The estimated monthly cost of Amazon Inspector.</p>
   */
  estimatedMonthlyCost?: number;

  /**
   * @public
   * <p>The currency type used when calculating usage data.</p>
   */
  currency?: Currency;
}

/**
 * @public
 * <p>The total of usage for an account ID.</p>
 */
export interface UsageTotal {
  /**
   * @public
   * <p>The account ID of the account that usage data was retrieved for.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object representing the total usage for an account.</p>
   */
  usage?: Usage[];
}

/**
 * @public
 */
export interface ListUsageTotalsResponse {
  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An object with details on the total usage for the requested account.</p>
   */
  totals?: UsageTotal[];
}

/**
 * @public
 */
export interface ResetEncryptionKeyRequest {
  /**
   * @public
   * <p>The scan type the key encrypts.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The resource type the key encrypts.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyResponse {}

/**
 * @public
 * <p>Details on the criteria used to define the filter for a vulnerability search.
 *       </p>
 */
export interface SearchVulnerabilitiesFilterCriteria {
  /**
   * @public
   * <p>The IDs for specific vulnerabilities.</p>
   */
  vulnerabilityIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesRequest {
  /**
   * @public
   * <p>The criteria used to filter the results of a vulnerability search.</p>
   */
  filterCriteria: SearchVulnerabilitiesFilterCriteria | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
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
 * @public
 * <p>Contains details about a specific vulnerability Amazon Inspector can detect.</p>
 */
export interface Vulnerability {
  /**
   * @public
   * <p>The ID for the specific vulnerability.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Common Weakness Enumeration (CWE) associated with the vulnerability.</p>
   */
  cwes?: string[];

  /**
   * @public
   * <p>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.</p>
   */
  cisaData?: CisaData;

  /**
   * @public
   * <p>The source of the vulnerability information.  Possible results are <code>RHEL</code>, <code>AMAZON_CVE</code>, <code>DEBIAN</code> or <code>NVD</code>.</p>
   */
  source?: VulnerabilitySource;

  /**
   * @public
   * <p>A description of the vulnerability.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.</p>
   */
  atigData?: AtigData;

  /**
   * @public
   * <p>The severity assigned by the vendor.</p>
   */
  vendorSeverity?: string;

  /**
   * @public
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.</p>
   */
  cvss3?: Cvss3;

  /**
   * @public
   * <p>A list of related vulnerabilities.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.</p>
   */
  cvss2?: Cvss2;

  /**
   * @public
   * <p>The date and time when the vendor created this vulnerability.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * @public
   * <p>The date and time when the vendor last updated this vulnerability.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * @public
   * <p>A link to the official source material for this vulnerability.</p>
   */
  sourceUrl?: string;

  /**
   * @public
   * <p>Links to various resources with more information on this vulnerability. </p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>An object that contains details on when the exploit was observed.</p>
   */
  exploitObserved?: ExploitObserved;

  /**
   * @public
   * <p>Platforms that the vulnerability can be detected on.</p>
   */
  detectionPlatforms?: string[];

  /**
   * @public
   * <p>An object that contains the Exploit Prediction Scoring System (EPSS) score for a vulnerability.</p>
   */
  epss?: Epss;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesResponse {
  /**
   * @public
   * <p>Details about the listed vulnerability.</p>
   */
  vulnerabilities: Vulnerability[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface SendCisSessionHealthRequest {
  /**
   * @public
   * <p>A unique identifier for the scan job.</p>
   */
  scanJobId: string | undefined;

  /**
   * @public
   * <p>The unique token that identifies the CIS session.</p>
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
   * @public
   * <p>A unique identifier for the scan job.</p>
   */
  scanJobId: string | undefined;

  /**
   * @public
   * <p>The unique token that identifies the CIS session.</p>
   */
  sessionToken: string | undefined;

  /**
   * @public
   * <p>The CIS session telemetry messages.</p>
   */
  messages: CisSessionMessage[] | undefined;
}

/**
 * @public
 */
export interface SendCisSessionTelemetryResponse {}

/**
 * @public
 * <p>The start CIS session message.</p>
 */
export interface StartCisSessionMessage {
  /**
   * @public
   * <p>The unique token that identifies the CIS session.</p>
   */
  sessionToken: string | undefined;
}

/**
 * @public
 */
export interface StartCisSessionRequest {
  /**
   * @public
   * <p>A unique identifier for the scan job.</p>
   */
  scanJobId: string | undefined;

  /**
   * @public
   * <p>The start CIS session message.</p>
   */
  message: StartCisSessionMessage | undefined;
}

/**
 * @public
 */
export interface StartCisSessionResponse {}

/**
 * @public
 * <p>The stop CIS message progress.</p>
 */
export interface StopCisMessageProgress {
  /**
   * @public
   * <p>The progress' total checks.</p>
   */
  totalChecks?: number;

  /**
   * @public
   * <p>The progress' successful checks.</p>
   */
  successfulChecks?: number;

  /**
   * @public
   * <p>The progress' failed checks.</p>
   */
  failedChecks?: number;

  /**
   * @public
   * <p>The progress' not evaluated checks.</p>
   */
  notEvaluatedChecks?: number;

  /**
   * @public
   * <p>The progress' unknown checks.</p>
   */
  unknownChecks?: number;

  /**
   * @public
   * <p>The progress' not applicable checks.</p>
   */
  notApplicableChecks?: number;

  /**
   * @public
   * <p>The progress' informational checks.</p>
   */
  informationalChecks?: number;

  /**
   * @public
   * <p>The progress' error checks.</p>
   */
  errorChecks?: number;
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
 * @public
 * <p>The stop CIS session message.</p>
 */
export interface StopCisSessionMessage {
  /**
   * @public
   * <p>The status of the message.</p>
   */
  status: StopCisSessionStatus | undefined;

  /**
   * @public
   * <p>The reason for the message.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>The progress of the message.</p>
   */
  progress: StopCisMessageProgress | undefined;

  /**
   * @public
   * <p>The message compute platform.</p>
   */
  computePlatform?: ComputePlatform;

  /**
   * @public
   * <p>The message benchmark version.</p>
   */
  benchmarkVersion?: string;

  /**
   * @public
   * <p>The message benchmark profile.</p>
   */
  benchmarkProfile?: string;
}

/**
 * @public
 */
export interface StopCisSessionRequest {
  /**
   * @public
   * <p>A unique identifier for the scan job.</p>
   */
  scanJobId: string | undefined;

  /**
   * @public
   * <p>The unique token that identifies the CIS session.</p>
   */
  sessionToken: string | undefined;

  /**
   * @public
   * <p>The stop CIS session message.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to be added to a resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Updates CIS targets.</p>
 */
export interface UpdateCisTargets {
  /**
   * @public
   * <p>The target account ids.</p>
   */
  accountIds?: string[];

  /**
   * @public
   * <p>The target resource tags.</p>
   */
  targetResourceTags?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationRequest {
  /**
   * @public
   * <p>The CIS scan configuration ARN.</p>
   */
  scanConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The scan name for the CIS scan configuration.</p>
   */
  scanName?: string;

  /**
   * @public
   * <p>
   *          The security level for the CIS scan configuration.
   *          Security level refers to the Benchmark levels that CIS assigns to a profile.
   *       </p>
   */
  securityLevel?: CisSecurityLevel;

  /**
   * @public
   * <p>The schedule for the CIS scan configuration.</p>
   */
  schedule?: Schedule;

  /**
   * @public
   * <p>The targets for the CIS scan configuration.</p>
   */
  targets?: UpdateCisTargets;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationResponse {
  /**
   * @public
   * <p>The CIS scan configuration ARN.</p>
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * @public
   * <p>Specifies how the ECR automated re-scan will be updated for your environment.</p>
   */
  ecrConfiguration: EcrConfiguration | undefined;
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
   * @public
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
   */
  activateDeepInspection?: boolean;

  /**
   * @public
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your account.</p>
   */
  packagePaths?: string[];
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * @public
   * <p>The current Amazon Inspector deep inspection custom paths for your account.</p>
   */
  packagePaths?: string[];

  /**
   * @public
   * <p>The current Amazon Inspector deep inspection custom paths for the organization.</p>
   */
  orgPackagePaths?: string[];

  /**
   * @public
   * <p>The status of Amazon Inspector deep inspection in your account.</p>
   */
  status?: Ec2DeepInspectionStatus;

  /**
   * @public
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be added.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyRequest {
  /**
   * @public
   * <p>A KMS key ID for the encryption key.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
   * <p>The scan type for the encryption key.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The resource type for the encryption key.</p>
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
   * @public
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  action?: FilterAction;

  /**
   * @public
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Defines the criteria to be update in the filter.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the filter to update.</p>
   */
  filterArn: string | undefined;

  /**
   * @public
   * <p>The reason the filter was updated.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @public
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * @public
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your organization.</p>
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
