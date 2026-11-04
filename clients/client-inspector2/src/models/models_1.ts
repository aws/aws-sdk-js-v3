// smithy-typescript generated code
import type {
  AggregationType,
  CisScanResultsAggregatedByTargetResourceSortBy,
  CisSecurityLevel,
  CisSortOrder,
  CloudProvider,
  CodeScanStatus,
  Currency,
  Ec2DeepInspectionStatus,
  FilterAction,
  GroupKey,
  InheritanceMode,
  IntegrationStatus,
  ListCisScansDetailLevel,
  ListCisScansSortBy,
  OnDemandResourceType,
  OnDemandScanStatus,
  OnDemandScanStatusReason,
  ResourceType,
  ScanType,
  SortField,
  SortOrder,
  StopCisSessionStatus,
  UsageType,
  VulnerabilitySource,
} from "./enums";
import type {
  AggregationRequest,
  AggregationResponse,
  AmiConfiguration,
  AtigData,
  AutoEnable,
  AzureProviderDetailUpdate,
  CisaData,
  CisDateFilter,
  CisNumberFilter,
  CisScan,
  CisScanResultsAggregatedByTargetResourceFilterCriteria,
  CisScanStatusFilter,
  CisSessionMessage,
  CisStringFilter,
  CisTargetResourceAggregation,
  CodeSecurityIntegrationSummary,
  CodeSecurityResource,
  CodeSecurityScanConfiguration,
  CodeSecurityScanConfigurationAssociationSummary,
  CodeSecurityScanConfigurationSummary,
  ComputePlatform,
  Connector,
  ConnectorFilterCriteria,
  ConnectorScanConfiguration,
  ConnectorScanConfigurationItem,
  Counts,
  CoverageFilterCriteria,
  CoveredResource,
  Cvss2,
  Cvss3,
  Cvss4,
  DelegatedAdminAccount,
  Ec2Configuration,
  EcrConfiguration,
  Epss,
  ExploitObserved,
  Filter,
  FilterCriteria,
  Finding,
  Member,
  Schedule,
  StringFilter,
  TagFilter,
} from "./models_0";

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  /**
   * The scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The filter criteria.
   *
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria | undefined;

  /**
   * The sort by order.
   *
   * @public
   */
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy | undefined;

  /**
   * The sort order.
   *
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of scan results aggregated by a target resource to be returned in a single page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  /**
   * The resource aggregations.
   *
   * @public
   */
  targetResourceAggregations?: CisTargetResourceAggregation[] | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A list of CIS scans filter criteria.
 *
 * @public
 */
export interface ListCisScansFilterCriteria {
  /**
   * The list of scan name filters.
   *
   * @public
   */
  scanNameFilters?: CisStringFilter[] | undefined;

  /**
   * The list of target resource tag filters.
   *
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * The list of target resource ID filters.
   *
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[] | undefined;

  /**
   * The list of scan status filters.
   *
   * @public
   */
  scanStatusFilters?: CisScanStatusFilter[] | undefined;

  /**
   * The list of scan at filters.
   *
   * @public
   */
  scanAtFilters?: CisDateFilter[] | undefined;

  /**
   * The list of scan configuration ARN filters.
   *
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;

  /**
   * The list of scan ARN filters.
   *
   * @public
   */
  scanArnFilters?: CisStringFilter[] | undefined;

  /**
   * The list of scheduled by filters.
   *
   * @public
   */
  scheduledByFilters?: CisStringFilter[] | undefined;

  /**
   * The list of failed checks filters.
   *
   * @public
   */
  failedChecksFilters?: CisNumberFilter[] | undefined;

  /**
   * The list of target account ID filters.
   *
   * @public
   */
  targetAccountIdFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 */
export interface ListCisScansRequest {
  /**
   * The CIS scan filter criteria.
   *
   * @public
   */
  filterCriteria?: ListCisScansFilterCriteria | undefined;

  /**
   * The detail applied to the CIS scan.
   *
   * @public
   */
  detailLevel?: ListCisScansDetailLevel | undefined;

  /**
   * The CIS scans sort by order.
   *
   * @public
   */
  sortBy?: ListCisScansSortBy | undefined;

  /**
   * The CIS scans sort order.
   *
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScansResponse {
  /**
   * The CIS scans.
   *
   * @public
   */
  scans?: CisScan[] | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsRequest {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsResponse {
  /**
   * A list of code security integration summaries.
   *
   * @public
   */
  integrations?: CodeSecurityIntegrationSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration to list associations for.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
  /**
   * A list of associations between code repositories and scan configurations.
   *
   * @public
   */
  associations?: CodeSecurityScanConfigurationAssociationSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationsRequest {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationsResponse {
  /**
   * A list of code security scan configuration summaries.
   *
   * @public
   */
  configurations?: CodeSecurityScanConfigurationSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another request with the `nextToken` value returned from this request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results. Set this value to null for the first request. For subsequent calls, use the `nextToken` value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The filter criteria to apply to the list of connectors.
   *
   * @public
   */
  filterCriteria?: ConnectorFilterCriteria | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * A list of connectors.
   *
   * @public
   */
  items: Connector[] | undefined;

  /**
   * A pagination token. If this value is not null, there are additional results available. Use this token in the `nextToken` parameter of a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorScanConfigurationsRequest {
  /**
   * The list of Amazon Web Services Config connector ARNs to filter results.
   *
   * @public
   */
  awsConfigConnectorArns?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 50. To retrieve the remaining results, make another request with the `nextToken` value returned from this request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results. Set this value to null for the first request. For subsequent calls, use the `nextToken` value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorScanConfigurationsResponse {
  /**
   * A list of scan configuration items.
   *
   * @public
   */
  scanConfigurations: ConnectorScanConfigurationItem[] | undefined;

  /**
   * A pagination token. If this value is not null, there are additional results available. Use this token in the `nextToken` parameter of a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An object that contains details on the filters to apply to the coverage data for your environment.
   *
   * @public
   */
  filterCriteria?: CoverageFilterCriteria | undefined;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An object that contains details on the covered resources in your environment.
   *
   * @public
   */
  coveredResources?: CoveredResource[] | undefined;
}

/**
 * @public
 */
export interface ListCoverageStatisticsRequest {
  /**
   * An object that contains details on the filters to apply to the coverage data for your environment.
   *
   * @public
   */
  filterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * The value to group the results by.
   *
   * @public
   */
  groupBy?: GroupKey | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoverageStatisticsResponse {
  /**
   * An array with the number for each group.
   *
   * @public
   */
  countsByGroup?: Counts[] | undefined;

  /**
   * The total number for all groups.
   *
   * @public
   */
  totalCounts: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsRequest {
  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsResponse {
  /**
   * Details of the Amazon Inspector delegated administrator of your organization.
   *
   * @public
   */
  delegatedAdminAccounts?: DelegatedAdminAccount[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * The Amazon resource number (ARN) of the filter.
   *
   * @public
   */
  arns?: string[] | undefined;

  /**
   * The action the filter applies to matched findings.
   *
   * @public
   */
  action?: FilterAction | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * Contains details on the filters associated with your account.
   *
   * @public
   */
  filters: Filter[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregationsRequest {
  /**
   * The type of the aggregation request.
   *
   * @public
   */
  aggregationType: AggregationType | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Amazon Web Services account IDs to retrieve finding aggregation data for.
   *
   * @public
   */
  accountIds?: StringFilter[] | undefined;

  /**
   * Details of the aggregation request that is used to filter your aggregation results.
   *
   * @public
   */
  aggregationRequest?: AggregationRequest | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregationsResponse {
  /**
   * The type of aggregation to perform.
   *
   * @public
   */
  aggregationType: AggregationType | undefined;

  /**
   * Objects that contain the results of an aggregation operation.
   *
   * @public
   */
  responses?: AggregationResponse[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about the criteria used to sort finding results.
 *
 * @public
 */
export interface SortCriteria {
  /**
   * The finding detail field by which results are sorted.
   *
   * @public
   */
  field: SortField | undefined;

  /**
   * The order by which findings are sorted.
   *
   * @public
   */
  sortOrder: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Details on the filters to apply to your finding results.
   *
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * Details on the sort criteria to apply to your finding results.
   *
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Contains details on the findings in your environment.
   *
   * @public
   */
  findings?: Finding[] | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * Specifies whether to list only currently associated members if `True` or to list all members within the organization if `False`.
   *
   * @public
   */
  onlyAssociated?: boolean | undefined;

  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * An object that contains details for each member account.
   *
   * @public
   */
  members?: Member[] | undefined;

  /**
   * The pagination parameter to be used on the next list operation to retrieve more items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOnDemandScansRequest {
  /**
   * The ID of the resource whose on-demand scans are being listed.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource whose on-demand scans are being listed.
   *
   * @public
   */
  resourceType: OnDemandResourceType | undefined;

  /**
   * The maximum number of results to return in a single page of the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token from a previous response used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details of a single on-demand scan of a resource.
 *
 * @public
 */
export interface OnDemandScan {
  /**
   * The unique identifier of the on-demand scan.
   *
   * @public
   */
  scanId: string | undefined;

  /**
   * The ID of the resource that was scanned.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource that was scanned.
   *
   * @public
   */
  resourceType: OnDemandResourceType | undefined;

  /**
   * The current status of the on-demand scan.
   *
   * @public
   */
  scanStatus: OnDemandScanStatus | undefined;

  /**
   * The reason associated with the current on-demand scan status.
   *
   * @public
   */
  scanStatusReason?: OnDemandScanStatusReason | undefined;

  /**
   * The date and time, in ISO 8601 format, when the on-demand scan started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The date and time, in ISO 8601 format, when the on-demand scan completed. This field is absent if the scan has not completed.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListOnDemandScansResponse {
  /**
   * The list of on-demand scans that match the request.
   *
   * @public
   */
  items: OnDemandScan[] | undefined;

  /**
   * A pagination token to use in a subsequent request to retrieve the next page of results. This field is absent when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon resource number (ARN) of the resource to list tags of.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUsageTotalsRequest {
  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Web Services account IDs to retrieve usage totals for.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * Contains usage information about the cost of Amazon Inspector operation.
 *
 * @public
 */
export interface Usage {
  /**
   * The type scan.
   *
   * @public
   */
  type?: UsageType | undefined;

  /**
   * The total of usage.
   *
   * @public
   */
  total?: number | undefined;

  /**
   * The estimated monthly cost of Amazon Inspector.
   *
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * The currency type used when calculating usage data.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The cloud provider associated with the usage information.
   *
   * @public
   */
  cloudProvider?: CloudProvider | undefined;
}

/**
 * The total of usage for an account ID.
 *
 * @public
 */
export interface UsageTotal {
  /**
   * The account ID of the account that usage data was retrieved for.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object representing the total usage for an account.
   *
   * @public
   */
  usage?: Usage[] | undefined;
}

/**
 * @public
 */
export interface ListUsageTotalsResponse {
  /**
   * The pagination parameter to be used on the next list operation to retrieve more items.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An object with details on the total usage for the requested account.
   *
   * @public
   */
  totals?: UsageTotal[] | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyRequest {
  /**
   * The scan type the key encrypts.
   *
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * The resource type the key encrypts.
   *
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyResponse {}

/**
 * Details on the criteria used to define the filter for a vulnerability search.
 *
 * @public
 */
export interface SearchVulnerabilitiesFilterCriteria {
  /**
   * The IDs for specific vulnerabilities.
   *
   * @public
   */
  vulnerabilityIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesRequest {
  /**
   * The criteria used to filter the results of a vulnerability search.
   *
   * @public
   */
  filterCriteria: SearchVulnerabilitiesFilterCriteria | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a specific vulnerability Amazon Inspector can detect.
 *
 * @public
 */
export interface Vulnerability {
  /**
   * The ID for the specific vulnerability.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Common Weakness Enumeration (CWE) associated with the vulnerability.
   *
   * @public
   */
  cwes?: string[] | undefined;

  /**
   * An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.
   *
   * @public
   */
  cisaData?: CisaData | undefined;

  /**
   * The source of the vulnerability information. Possible results are `RHEL`, `AMAZON_CVE`, `DEBIAN` or `NVD`.
   *
   * @public
   */
  source?: VulnerabilitySource | undefined;

  /**
   * A description of the vulnerability.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.
   *
   * @public
   */
  atigData?: AtigData | undefined;

  /**
   * The severity assigned by the vendor.
   *
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * An object that contains the Common Vulnerability Scoring System (CVSS) Version 4 details for the vulnerability.
   *
   * @public
   */
  cvss4?: Cvss4 | undefined;

  /**
   * An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.
   *
   * @public
   */
  cvss3?: Cvss3 | undefined;

  /**
   * A list of related vulnerabilities.
   *
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.
   *
   * @public
   */
  cvss2?: Cvss2 | undefined;

  /**
   * The date and time when the vendor created this vulnerability.
   *
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * The date and time when the vendor last updated this vulnerability.
   *
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * A link to the official source material for this vulnerability.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * Links to various resources with more information on this vulnerability.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * An object that contains details on when the exploit was observed.
   *
   * @public
   */
  exploitObserved?: ExploitObserved | undefined;

  /**
   * Platforms that the vulnerability can be detected on.
   *
   * @public
   */
  detectionPlatforms?: string[] | undefined;

  /**
   * An object that contains the Exploit Prediction Scoring System (EPSS) score for a vulnerability.
   *
   * @public
   */
  epss?: Epss | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesResponse {
  /**
   * Details about the listed vulnerability.
   *
   * @public
   */
  vulnerabilities: Vulnerability[] | undefined;

  /**
   * The pagination parameter to be used on the next list operation to retrieve more items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendCisSessionHealthRequest {
  /**
   * A unique identifier for the scan job.
   *
   * @public
   */
  scanJobId: string | undefined;

  /**
   * The unique token that identifies the CIS session.
   *
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
   * A unique identifier for the scan job.
   *
   * @public
   */
  scanJobId: string | undefined;

  /**
   * The unique token that identifies the CIS session.
   *
   * @public
   */
  sessionToken: string | undefined;

  /**
   * The CIS session telemetry messages.
   *
   * @public
   */
  messages: CisSessionMessage[] | undefined;
}

/**
 * @public
 */
export interface SendCisSessionTelemetryResponse {}

/**
 * The start CIS session message.
 *
 * @public
 */
export interface StartCisSessionMessage {
  /**
   * The unique token that identifies the CIS session.
   *
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * @public
 */
export interface StartCisSessionRequest {
  /**
   * A unique identifier for the scan job.
   *
   * @public
   */
  scanJobId: string | undefined;

  /**
   * The start CIS session message.
   *
   * @public
   */
  message: StartCisSessionMessage | undefined;
}

/**
 * @public
 */
export interface StartCisSessionResponse {}

/**
 * @public
 */
export interface StartCodeSecurityScanRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The resource identifier for the code repository to scan.
   *
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface StartCodeSecurityScanResponse {
  /**
   * The unique identifier of the initiated scan.
   *
   * @public
   */
  scanId?: string | undefined;

  /**
   * The current status of the initiated scan.
   *
   * @public
   */
  status?: CodeScanStatus | undefined;
}

/**
 * @public
 */
export interface StartOnDemandScanRequest {
  /**
   * The ID of the resource to scan on demand.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource to scan on demand.
   *
   * @public
   */
  resourceType: OnDemandResourceType | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartOnDemandScanResponse {
  /**
   * The unique identifier assigned to the on-demand scan that was started.
   *
   * @public
   */
  scanId: string | undefined;
}

/**
 * The stop CIS message progress.
 *
 * @public
 */
export interface StopCisMessageProgress {
  /**
   * The progress' total checks.
   *
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * The progress' successful checks.
   *
   * @public
   */
  successfulChecks?: number | undefined;

  /**
   * The progress' failed checks.
   *
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * The progress' not evaluated checks.
   *
   * @public
   */
  notEvaluatedChecks?: number | undefined;

  /**
   * The progress' unknown checks.
   *
   * @public
   */
  unknownChecks?: number | undefined;

  /**
   * The progress' not applicable checks.
   *
   * @public
   */
  notApplicableChecks?: number | undefined;

  /**
   * The progress' informational checks.
   *
   * @public
   */
  informationalChecks?: number | undefined;

  /**
   * The progress' error checks.
   *
   * @public
   */
  errorChecks?: number | undefined;
}

/**
 * The stop CIS session message.
 *
 * @public
 */
export interface StopCisSessionMessage {
  /**
   * The status of the message.
   *
   * @public
   */
  status: StopCisSessionStatus | undefined;

  /**
   * The reason for the message.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The progress of the message.
   *
   * @public
   */
  progress: StopCisMessageProgress | undefined;

  /**
   * The message compute platform.
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * The message benchmark version.
   *
   * @public
   */
  benchmarkVersion?: string | undefined;

  /**
   * The message benchmark profile.
   *
   * @public
   */
  benchmarkProfile?: string | undefined;
}

/**
 * @public
 */
export interface StopCisSessionRequest {
  /**
   * A unique identifier for the scan job.
   *
   * @public
   */
  scanJobId: string | undefined;

  /**
   * The unique token that identifies the CIS session.
   *
   * @public
   */
  sessionToken: string | undefined;

  /**
   * The stop CIS session message.
   *
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
   * The Amazon Resource Name (ARN) of the resource to apply a tag to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to be added to a resource.
   *
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
   * The Amazon Resource Name (ARN) for the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Updates CIS targets.
 *
 * @public
 */
export interface UpdateCisTargets {
  /**
   * The target account ids.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The target resource tags.
   *
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationRequest {
  /**
   * The CIS scan configuration ARN.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * The scan name for the CIS scan configuration.
   *
   * @public
   */
  scanName?: string | undefined;

  /**
   * The security level for the CIS scan configuration. Security level refers to the Benchmark levels that CIS assigns to a profile.
   *
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;

  /**
   * The schedule for the CIS scan configuration.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The targets for the CIS scan configuration.
   *
   * @public
   */
  targets?: UpdateCisTargets | undefined;
}

/**
 * @public
 */
export interface UpdateCisScanConfigurationResponse {
  /**
   * The CIS scan configuration ARN.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * Contains details required to update an integration with GitHub.
 *
 * @public
 */
export interface UpdateGitHubIntegrationDetail {
  /**
   * The authorization code received from GitHub to update the integration.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The installation ID of the GitHub App associated with the integration.
   *
   * @public
   */
  installationId: string | undefined;
}

/**
 * Contains details required to update an integration with a self-managed GitLab instance.
 *
 * @public
 */
export interface UpdateGitLabSelfManagedIntegrationDetail {
  /**
   * The authorization code received from the self-managed GitLab instance to update the integration.
   *
   * @public
   */
  authCode: string | undefined;
}

/**
 * Contains details required to update a code security integration with a specific repository provider.
 *
 * @public
 */
export type UpdateIntegrationDetails =
  | UpdateIntegrationDetails.GithubMember
  | UpdateIntegrationDetails.GitlabSelfManagedMember
  | UpdateIntegrationDetails.$UnknownMember;

/**
 * @public
 */
export namespace UpdateIntegrationDetails {
  /**
   * Details specific to updating an integration with a self-managed GitLab instance.
   *
   * @public
   */
  export interface GitlabSelfManagedMember {
    gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail;
    github?: never;
    $unknown?: never;
  }

  /**
   * Details specific to updating an integration with GitHub.
   *
   * @public
   */
  export interface GithubMember {
    gitlabSelfManaged?: never;
    github: UpdateGitHubIntegrationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    gitlabSelfManaged?: never;
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    gitlabSelfManaged: (value: UpdateGitLabSelfManagedIntegrationDetail) => T;
    github: (value: UpdateGitHubIntegrationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) of the code security integration to update.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The updated integration details specific to the repository provider type.
   *
   * @public
   */
  details: UpdateIntegrationDetails | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated code security integration.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The current status of the updated code security integration.
   *
   * @public
   */
  status: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration to update.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * The updated configuration settings for the code security scan.
   *
   * @public
   */
  configuration: CodeSecurityScanConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated scan configuration.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * The per-scan-type inheritance reset settings for the `UpdateConfiguration` operation. Each member is independently optional. Including a member in this structure resets that scan type's configuration to inherit from the delegated administrator.
 *
 * @public
 */
export interface UpdateConfigurationInheritance {
  /**
   * The inheritance mode for Amazon EC2 scan configuration. Set to `INHERIT_FROM_ADMIN` to reset the member account's Amazon EC2 scan configuration to inherit from the delegated administrator. If omitted, the member account's existing Amazon EC2 scan configuration is not changed.
   *
   * @public
   */
  ec2Configuration?: InheritanceMode | undefined;

  /**
   * The inheritance mode for Amazon ECR scan configuration. Set to `INHERIT_FROM_ADMIN` to reset the member account's Amazon ECR scan configuration to inherit from the delegated administrator. If omitted, the member account's existing Amazon ECR scan configuration is not changed.
   *
   * @public
   */
  ecrConfiguration?: InheritanceMode | undefined;

  /**
   * The inheritance behavior for a scan-type configuration. Used with `UpdateConfigurationInheritance` to reset a member account's configuration to inherit from the delegated administrator. The only valid value is `INHERIT_FROM_ADMIN`, which resets the member account's configuration so that it inherits scan settings from the delegated administrator.
   *
   * @public
   */
  amiConfiguration?: InheritanceMode | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * The 12-digit Amazon Web Services account ID of the member account whose scan configuration you want to update. When specified, you must be the delegated administrator for this member account. If not specified, the operation updates your own configuration and propagates changes to any member accounts that have not been individually configured.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Specifies how the ECR automated re-scan will be updated for your environment.
   *
   * @public
   */
  ecrConfiguration?: EcrConfiguration | undefined;

  /**
   * Specifies how the Amazon EC2 automated scan will be updated for your environment.
   *
   * @public
   */
  ec2Configuration?: Ec2Configuration | undefined;

  /**
   * The Amazon Machine Image (AMI) scan configuration to apply to the account.
   *
   * @public
   */
  amiConfiguration?: AmiConfiguration | undefined;

  /**
   * Specifies which scan-type configurations to reset to the delegated administrator's inherited values for the targeted member account. Each member of this structure is independently optional. When specified, `ec2Configuration` and `ecrConfiguration` must be absent, and `accountId` must also be present. Only `INHERIT_FROM_ADMIN` is valid for each member. If not specified, the operation uses the `ec2Configuration` and `ecrConfiguration` parameters instead.
   *
   * @public
   */
  updateConfigurationInheritance?: UpdateConfigurationInheritance | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {}

/**
 * The provider-specific configuration details for updating a connector.
 *
 * @public
 */
export type ProviderDetailUpdate =
  | ProviderDetailUpdate.AzureMember
  | ProviderDetailUpdate.$UnknownMember;

/**
 * @public
 */
export namespace ProviderDetailUpdate {
  /**
   * The Azure-specific details for updating a connector.
   *
   * @public
   */
  export interface AzureMember {
    azure: AzureProviderDetailUpdate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    azure: (value: AzureProviderDetailUpdate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector to update.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * The updated description of the connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated provider-specific configuration details for the connector.
   *
   * @public
   */
  providerDetail?: ProviderDetailUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated connector.
   *
   * @public
   */
  connectorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorScanConfigurationRequest {
  /**
   * The ARN of the Amazon Web Services Config connector.
   *
   * @public
   */
  awsConfigConnectorArn: string | undefined;

  /**
   * The scan configuration settings to apply.
   *
   * @public
   */
  scanConfiguration: ConnectorScanConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorScanConfigurationResponse {}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationRequest {
  /**
   * Specify `TRUE` to activate Amazon Inspector deep inspection in your account, or `FALSE` to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using [BatchUpdateMemberEc2DeepInspectionStatus](https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html).
   *
   * @public
   */
  activateDeepInspection?: boolean | undefined;

  /**
   * The Amazon Inspector deep inspection custom paths you are adding for your account.
   *
   * @public
   */
  packagePaths?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * The current Amazon Inspector deep inspection custom paths for your account.
   *
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * The current Amazon Inspector deep inspection custom paths for the organization.
   *
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * The status of Amazon Inspector deep inspection in your account.
   *
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * An error message explaining why new Amazon Inspector deep inspection custom paths could not be added.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyRequest {
  /**
   * A KMS key ID for the encryption key.
   *
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * The scan type for the encryption key.
   *
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * The resource type for the encryption key.
   *
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
   * Specifies the action that is to be applied to the findings that match the filter.
   *
   * @public
   */
  action?: FilterAction | undefined;

  /**
   * A description of the filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Defines the criteria to be update in the filter.
   *
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * The name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the filter to update.
   *
   * @public
   */
  filterArn: string | undefined;

  /**
   * The reason the filter was updated.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * The Amazon Resource Number (ARN) of the successfully updated filter.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.
   *
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * The Amazon Inspector deep inspection custom paths you are adding for your organization.
   *
   * @public
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
