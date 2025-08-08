// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AggregationRequest,
  AggregationResponse,
  AggregationType,
  AtigData,
  AutoEnable,
  AwsEc2InstanceDetails,
  AwsEcrContainerImageDetails,
  AwsLambdaFunctionDetails,
  CisaData,
  CisCheckAggregation,
  CisDateFilter,
  CisNumberFilter,
  CisReportFormat,
  CisReportStatus,
  CisScan,
  CisScanConfiguration,
  CisScanConfigurationsSortBy,
  CisScanResultDetails,
  CisScanResultDetailsFilterCriteria,
  CisScanResultDetailsSortBy,
  CisScanResultsAggregatedByChecksFilterCriteria,
  CisScanResultsAggregatedByChecksSortBy,
  CisScanResultsAggregatedByTargetResourceFilterCriteria,
  CisScanResultsAggregatedByTargetResourceSortBy,
  CisScanStatusFilter,
  CisSecurityLevel,
  CisSessionMessage,
  CisSortOrder,
  CisStringFilter,
  CisTargetResourceAggregation,
  ClusterForImageFilterCriteria,
  ClusterInformation,
  CodeRepositoryDetails,
  CodeScanStatus,
  CodeSecurityIntegrationSummary,
  CodeSecurityResource,
  CodeSecurityScanConfiguration,
  CodeSecurityScanConfigurationAssociationSummary,
  CodeSecurityScanConfigurationSummary,
  CodeVulnerabilityDetails,
  ComputePlatform,
  ConfigurationLevel,
  Counts,
  CoverageFilterCriteria,
  CoveredResource,
  Currency,
  Cvss2,
  Cvss3,
  Cvss4,
  CvssScore,
  CvssScoreDetails,
  DelegatedAdmin,
  DelegatedAdminAccount,
  Destination,
  Ec2Configuration,
  Ec2ConfigurationState,
  Ec2DeepInspectionStatus,
  EcrConfiguration,
  EcrConfigurationState,
  ExploitObserved,
  FilterAction,
  FilterCriteria,
  GroupKey,
  IntegrationStatus,
  IntegrationType,
  RelationshipStatus,
  ResourceFilterCriteria,
  SbomReportFormat,
  ScanType,
  Schedule,
  ScopeSettings,
  SortOrder,
  StringFilter,
  TagFilter,
} from "./models_0";

/**
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score.</p>
 * @public
 */
export interface Epss {
  /**
   * <p>The Exploit Prediction Scoring System (EPSS) score.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score for a finding.</p>
 * @public
 */
export interface EpssDetails {
  /**
   * <p>The EPSS score.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>The details of an exploit available for a finding discovered in your environment.</p>
 * @public
 */
export interface ExploitabilityDetails {
  /**
   * <p>The date and time of the last exploit associated with a finding discovered in your
   *          environment.</p>
   * @public
   */
  lastKnownExploitAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type ExploitAvailable = (typeof ExploitAvailable)[keyof typeof ExploitAvailable];

/**
 * @public
 * @enum
 */
export const ExternalReportStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ExternalReportStatus = (typeof ExternalReportStatus)[keyof typeof ExternalReportStatus];

/**
 * <p>Details about a filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The Amazon Resource Number (ARN) associated with this filter.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that created the filter.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Details on the filter criteria associated with this filter.</p>
   * @public
   */
  criteria: FilterCriteria | undefined;

  /**
   * <p>The action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  action: FilterAction | undefined;

  /**
   * <p>The date and time this filter was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the filter was last updated at.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The reason for the filter.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The tags attached to the filter.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const FixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;

/**
 * @public
 */
export type FixAvailable = (typeof FixAvailable)[keyof typeof FixAvailable];

/**
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 * @public
 */
export interface InspectorScoreDetails {
  /**
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   * @public
   */
  adjustedCvss?: CvssScoreDetails | undefined;
}

/**
 * <p>Details about the step associated with a finding.</p>
 * @public
 */
export interface Step {
  /**
   * <p>The component ID.</p>
   * @public
   */
  componentId: string | undefined;

  /**
   * <p>The component type.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>The component ARN. The ARN can be null and is not displayed in the Amazon Web Services
   *          console.</p>
   * @public
   */
  componentArn?: string | undefined;
}

/**
 * <p>Information on the network path associated with a finding.</p>
 * @public
 */
export interface NetworkPath {
  /**
   * <p>The details on the steps in the network path.</p>
   * @public
   */
  steps?: Step[] | undefined;
}

/**
 * <p>Details about the port range associated with a finding.</p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The beginning port in a port range.</p>
   * @public
   */
  begin: number | undefined;

  /**
   * <p>The ending port in a port range.</p>
   * @public
   */
  end: number | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

/**
 * <p>Contains the details of a network reachability finding.</p>
 * @public
 */
export interface NetworkReachabilityDetails {
  /**
   * <p>An object that contains details about the open port range associated with a
   *          finding.</p>
   * @public
   */
  openPortRange: PortRange | undefined;

  /**
   * <p>The protocol associated with a finding.</p>
   * @public
   */
  protocol: NetworkProtocol | undefined;

  /**
   * <p>An object that contains details about a network path associated with a finding.</p>
   * @public
   */
  networkPath: NetworkPath | undefined;
}

/**
 * @public
 * @enum
 */
export const PackageManager = {
  BUNDLER: "BUNDLER",
  CARGO: "CARGO",
  COMPOSER: "COMPOSER",
  DOTNET_CORE: "DOTNET_CORE",
  GEMSPEC: "GEMSPEC",
  GOBINARY: "GOBINARY",
  GOMOD: "GOMOD",
  JAR: "JAR",
  NODEPKG: "NODEPKG",
  NPM: "NPM",
  NUGET: "NUGET",
  OS: "OS",
  PIP: "PIP",
  PIPENV: "PIPENV",
  POETRY: "POETRY",
  POM: "POM",
  PYTHONPKG: "PYTHONPKG",
  YARN: "YARN",
} as const;

/**
 * @public
 */
export type PackageManager = (typeof PackageManager)[keyof typeof PackageManager];

/**
 * <p>Information on the vulnerable package identified by a finding.</p>
 * @public
 */
export interface VulnerablePackage {
  /**
   * <p>The name of the vulnerable package.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the vulnerable package.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.</p>
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * <p>The epoch of the vulnerable package.</p>
   * @public
   */
  epoch?: number | undefined;

  /**
   * <p>The release of the vulnerable package.</p>
   * @public
   */
  release?: string | undefined;

  /**
   * <p>The architecture of the vulnerable package.</p>
   * @public
   */
  arch?: string | undefined;

  /**
   * <p>The package manager of the vulnerable package.</p>
   * @public
   */
  packageManager?: PackageManager | undefined;

  /**
   * <p>The file path of the vulnerable package.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * <p>The code to run in your environment to update packages with a fix available.</p>
   * @public
   */
  remediation?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the Amazon Web Services Lambda function affected by a
   *          finding.</p>
   * @public
   */
  sourceLambdaLayerArn?: string | undefined;
}

/**
 * <p>Information about a package vulnerability finding.</p>
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * <p>The ID given to this vulnerability.</p>
   * @public
   */
  vulnerabilityId: string | undefined;

  /**
   * <p>The packages impacted by this vulnerability.</p>
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;

  /**
   * <p>The source of the vulnerability information.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>An object that contains details about the CVSS score of a finding.</p>
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>A URL to the source of the vulnerability information.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The severity the vendor has given to this vulnerability type.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>The date and time that this vulnerability was first added to the vendor's
   *          database.</p>
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;
}

/**
 * <p>Details about the recommended course of action to remediate the finding.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The recommended course of action to remediate the finding.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The URL address to the CVE remediation recommendations.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Information on how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to remediate
   *          the finding.</p>
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * <p>Contains details about the resource involved in the finding.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>An object that contains details about the Amazon EC2 instance involved in the finding.</p>
   * @public
   */
  awsEc2Instance?: AwsEc2InstanceDetails | undefined;

  /**
   * <p>An object that contains details about the Amazon ECR container image involved in the
   *          finding.</p>
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;

  /**
   * <p>A summary of the information about an Amazon Web Services Lambda function affected by a
   *          finding.</p>
   * @public
   */
  awsLambdaFunction?: AwsLambdaFunctionDetails | undefined;

  /**
   * <p>Contains details about a code repository resource associated with a finding.</p>
   * @public
   */
  codeRepository?: CodeRepositoryDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY: "AWS_ECR_REPOSITORY",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>Details about the resource involved in a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The type of resource.</p>
   * @public
   */
  type: ResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The partition of the resource.</p>
   * @public
   */
  partition?: string | undefined;

  /**
   * <p>The Amazon Web Services Region the impacted resource is located in.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The tags attached to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object that contains details about the resource involved in a finding.</p>
   * @public
   */
  details?: ResourceDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNTRIAGED: "UNTRIAGED",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  SUPPRESSED: "SUPPRESSED",
} as const;

/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const FindingType = {
  CODE_VULNERABILITY: "CODE_VULNERABILITY",
  NETWORK_REACHABILITY: "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY: "PACKAGE_VULNERABILITY",
} as const;

/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * <p>Details about an Amazon Inspector finding.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   * @public
   */
  findingArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the finding.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The type of the finding. The <code>type</code> value determines the valid values for
   *             <code>resource</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding
   *             types</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  type: FindingType | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   * @public
   */
  remediation: Remediation | undefined;

  /**
   * <p>The severity of the finding. <code>UNTRIAGED</code> applies to
   *             <code>PACKAGE_VULNERABILITY</code> type findings that the vendor has not assigned a
   *          severity yet. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for findings</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  severity: Severity | undefined;

  /**
   * <p>The date and time that the finding was first observed.</p>
   * @public
   */
  firstObservedAt: Date | undefined;

  /**
   * <p> The date and time the finding was last observed. This timestamp for this field remains
   *          unchanged until a finding is updated. </p>
   * @public
   */
  lastObservedAt: Date | undefined;

  /**
   * <p>The date and time the finding was last updated at.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>Contains information on the resources involved in a finding. The <code>resource</code>
   *          value determines the valid values for <code>type</code> in your request. For more
   *          information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding
   *             types</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>The Amazon Inspector score given to the finding.</p>
   * @public
   */
  inspectorScore?: number | undefined;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails | undefined;

  /**
   * <p>An object that contains the details of a network reachability finding.</p>
   * @public
   */
  networkReachabilityDetails?: NetworkReachabilityDetails | undefined;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be
   *             <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>. A <code>PARTIAL</code> fix
   *          means that some, but not all, of the packages identified in the finding have fixes
   *          available through updated versions.</p>
   * @public
   */
  fixAvailable?: FixAvailable | undefined;

  /**
   * <p>If a finding discovered in your environment has an exploit available.</p>
   * @public
   */
  exploitAvailable?: ExploitAvailable | undefined;

  /**
   * <p>The details of an exploit available for a finding discovered in your environment.</p>
   * @public
   */
  exploitabilityDetails?: ExploitabilityDetails | undefined;

  /**
   * <p>Details about the code vulnerability identified in a Lambda function used to filter
   *          findings.</p>
   * @public
   */
  codeVulnerabilityDetails?: CodeVulnerabilityDetails | undefined;

  /**
   * <p>The finding's EPSS score.</p>
   * @public
   */
  epss?: EpssDetails | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The target accounts.</p>
   * @public
   */
  targetAccounts?: string[] | undefined;

  /**
   * <p> The format of the report. Valid values are <code>PDF</code> and <code>CSV</code>. If no
   *          value is specified, the report format defaults to <code>PDF</code>. </p>
   * @public
   */
  reportFormat?: CisReportFormat | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportResponse {
  /**
   * <p> The URL where a PDF or CSV of the CIS scan report can be downloaded. </p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: CisReportStatus | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The target resource ID.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultDetailsFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultDetailsSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of CIS scan result details to be returned in a single page of
   *          results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsResponse {
  /**
   * <p>The scan result details.</p>
   * @public
   */
  scanResultDetails?: CisScanResultDetails[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageRequest {
  /**
   * <p>The resource Id for the Amazon ECR image.</p>
   * @public
   */
  filter: ClusterForImageFilterCriteria | undefined;

  /**
   * <p>The maximum number of results to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous request used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageResponse {
  /**
   * <p>A unit of work inside of a cluster, which can include metadata about the cluster.</p>
   * @public
   */
  cluster: ClusterInformation[] | undefined;

  /**
   * <p>The pagination token from a previous request used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration to retrieve.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The tags associated with the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The name of the code security integration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of repository provider for the integration.</p>
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * <p>The current status of the code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * <p>The reason for the current status of the code security integration.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the code security integration was created.</p>
   * @public
   */
  createdOn: Date | undefined;

  /**
   * <p>The timestamp when the code security integration was last updated.</p>
   * @public
   */
  lastUpdateOn: Date | undefined;

  /**
   * <p>The tags associated with the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The URL used to authorize the integration with the repository provider. This is only
   *          returned if reauthorization is required to fix a connection issue. Otherwise, it is
   *          null.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanRequest {
  /**
   * <p>The resource identifier for the code repository that was scanned.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;

  /**
   * <p>The unique identifier of the scan to retrieve.</p>
   * @public
   */
  scanId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanResponse {
  /**
   * <p>The unique identifier of the scan.</p>
   * @public
   */
  scanId?: string | undefined;

  /**
   * <p>The resource identifier for the code repository that was scanned.</p>
   * @public
   */
  resource?: CodeSecurityResource | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the scan.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The current status of the scan.</p>
   * @public
   */
  status?: CodeScanStatus | undefined;

  /**
   * <p>The reason for the current status of the scan.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the scan was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the scan was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The identifier of the last commit that was scanned. This is only returned if the scan
   *          was successful or skipped.</p>
   * @public
   */
  lastCommitId?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to retrieve.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * <p>The name of the scan configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The configuration settings for the code security scan.</p>
   * @public
   */
  configuration?: CodeSecurityScanConfiguration | undefined;

  /**
   * <p>The security level for the scan configuration.</p>
   * @public
   */
  level?: ConfigurationLevel | undefined;

  /**
   * <p>The scope settings that define which repositories will be scanned. If the
   *             <code>ScopeSetting</code> parameter is <code>ALL</code> the scan configuration applies
   *          to all existing and future projects imported into Amazon Inspector.</p>
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * <p>The timestamp when the scan configuration was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the scan configuration was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags associated with the scan configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * <p>Specifies how the ECR automated re-scan duration is currently configured for your
   *          environment.</p>
   * @public
   */
  ecrConfiguration?: EcrConfigurationState | undefined;

  /**
   * <p>Specifies how the Amazon EC2 automated scan mode is currently configured for your
   *          environment.</p>
   * @public
   */
  ec2Configuration?: Ec2ConfigurationState | undefined;
}

/**
 * @public
 */
export interface GetDelegatedAdminAccountRequest {}

/**
 * @public
 */
export interface GetDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  delegatedAdmin?: DelegatedAdmin | undefined;
}

/**
 * @public
 */
export interface GetEc2DeepInspectionConfigurationRequest {}

/**
 * @public
 */
export interface GetEc2DeepInspectionConfigurationResponse {
  /**
   * <p>The Amazon Inspector deep inspection custom paths for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * <p>The Amazon Inspector deep inspection custom paths for your organization.</p>
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * <p>The activation status of Amazon Inspector deep inspection in your account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * <p>An error message explaining why Amazon Inspector deep inspection configurations could not be
   *          retrieved for your account.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyRequest {
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
export interface GetEncryptionKeyResponse {
  /**
   * <p>A kms key ID.</p>
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusRequest {
  /**
   * <p>The ID of the report to retrieve the status of.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportingErrorCode = {
  BUCKET_NOT_FOUND: "BUCKET_NOT_FOUND",
  INCOMPATIBLE_BUCKET_REGION: "INCOMPATIBLE_BUCKET_REGION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  MALFORMED_KMS_KEY: "MALFORMED_KMS_KEY",
  NO_FINDINGS_FOUND: "NO_FINDINGS_FOUND",
} as const;

/**
 * @public
 */
export type ReportingErrorCode = (typeof ReportingErrorCode)[keyof typeof ReportingErrorCode];

/**
 * @public
 */
export interface GetFindingsReportStatusResponse {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;

  /**
   * <p>The status of the report.</p>
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * <p>The error code of the report.</p>
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * <p>The error message of the report.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The destination of the report.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>The filter criteria associated with the report.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to retrieve information on.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Details on a member account in your organization.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The status of the member account.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member
   *          account.</p>
   * @public
   */
  delegatedAdminAccountId?: string | undefined;

  /**
   * <p>A timestamp showing when the status of this member was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * <p>Details of the retrieved member account.</p>
   * @public
   */
  member?: Member | undefined;
}

/**
 * @public
 */
export interface GetSbomExportRequest {
  /**
   * <p>The report ID of the SBOM export to get details for.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface GetSbomExportResponse {
  /**
   * <p>The report ID of the software bill of materials (SBOM) report.</p>
   * @public
   */
  reportId?: string | undefined;

  /**
   * <p>The format of the software bill of materials (SBOM) report.</p>
   * @public
   */
  format?: SbomReportFormat | undefined;

  /**
   * <p>The status of the software bill of materials (SBOM) report.</p>
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * <p>An error code.</p>
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings</p>
   * @public
   */
  s3Destination?: Destination | undefined;

  /**
   * <p>Contains details about the resource filter criteria used for the software bill of
   *          materials (SBOM) report.</p>
   * @public
   */
  filterCriteria?: ResourceFilterCriteria | undefined;
}

/**
 * @public
 * @enum
 */
export const Service = {
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 */
export interface ListAccountPermissionsRequest {
  /**
   * <p>The service scan type to check permissions for.</p>
   * @public
   */
  service?: Service | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the NextToken value returned
   *          from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Operation = {
  DISABLE_REPOSITORY: "DISABLE_REPOSITORY",
  DISABLE_SCANNING: "DISABLE_SCANNING",
  ENABLE_REPOSITORY: "ENABLE_REPOSITORY",
  ENABLE_SCANNING: "ENABLE_SCANNING",
} as const;

/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * <p>Contains information on the permissions an account has within Amazon Inspector.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The services that the permissions allow an account to perform the given operations
   *          for.</p>
   * @public
   */
  service: Service | undefined;

  /**
   * <p>The operations that can be performed with the given permissions.</p>
   * @public
   */
  operation: Operation | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsResponse {
  /**
   * <p>Contains details on the permissions an account has to configure Amazon Inspector.</p>
   * @public
   */
  permissions: Permission[] | undefined;

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
 * <p>A list of CIS scan configurations filter criteria.</p>
 * @public
 */
export interface ListCisScanConfigurationsFilterCriteria {
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
   * <p>The list of scan configuration ARN filters.</p>
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsRequest {
  /**
   * <p>The CIS scan configuration filter criteria.</p>
   * @public
   */
  filterCriteria?: ListCisScanConfigurationsFilterCriteria | undefined;

  /**
   * <p>The CIS scan configuration sort by order.</p>
   * @public
   */
  sortBy?: CisScanConfigurationsSortBy | undefined;

  /**
   * <p>The CIS scan configuration sort order order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of CIS scan configurations to be returned in a single page of
   *          results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsResponse {
  /**
   * <p>The CIS scan configuration scan configurations.</p>
   * @public
   */
  scanConfigurations?: CisScanConfiguration[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultsAggregatedByChecksSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of scan results aggregated by checks to be returned in a single page
   *          of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksResponse {
  /**
   * <p>The check aggregations.</p>
   * @public
   */
  checkAggregations?: CisCheckAggregation[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

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
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of scan results aggregated by a target resource to be returned in a
   *          single page of results.</p>
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
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
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
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
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
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsResponse {
  /**
   * <p>A list of code security integration summaries.</p>
   * @public
   */
  integrations?: CodeSecurityIntegrationSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to list associations
   *          for.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If your request would return
   *          more than the maximum the response will return a <code>nextToken</code> value, use this
   *          value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
  /**
   * <p>A list of associations between code repositories and scan configurations.</p>
   * @public
   */
  associations?: CodeSecurityScanConfigurationAssociationSummary[] | undefined;

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
export interface ListCodeSecurityScanConfigurationsRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationsResponse {
  /**
   * <p>A list of code security scan configuration summaries.</p>
   * @public
   */
  configurations?: CodeSecurityScanConfigurationSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
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
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
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
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
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
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Web Services account IDs to retrieve finding aggregation data for.</p>
   * @public
   */
  accountIds?: StringFilter[] | undefined;

  /**
   * <p>Details of the aggregation request that is used to filter your aggregation
   *          results.</p>
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
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
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
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
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
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value
   *          returned from the previous request to continue listing results after the first page.</p>
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
  CODE_REPOSITORY_IAC: "CODE_REPOSITORY_IAC",
  CODE_REPOSITORY_SAST: "CODE_REPOSITORY_SAST",
  CODE_REPOSITORY_SCA: "CODE_REPOSITORY_SCA",
  EC2_AGENTLESS_INSTANCE_HOURS: "EC2_AGENTLESS_INSTANCE_HOURS",
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
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *          items.</p>
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
 * <p>Details on the criteria used to define the filter for a vulnerability search. </p>
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
   * <p>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA)
   *          details for the vulnerability.</p>
   * @public
   */
  cisaData?: CisaData | undefined;

  /**
   * <p>The source of the vulnerability information. Possible results are <code>RHEL</code>,
   *             <code>AMAZON_CVE</code>, <code>DEBIAN</code> or <code>NVD</code>.</p>
   * @public
   */
  source?: VulnerabilitySource | undefined;

  /**
   * <p>A description of the vulnerability.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object that contains information about the Amazon Web Services Threat Intel Group
   *          (ATIG) details for the vulnerability.</p>
   * @public
   */
  atigData?: AtigData | undefined;

  /**
   * <p>The severity assigned by the vendor.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 4 details for the vulnerability.</p>
   * @public
   */
  cvss4?: Cvss4 | undefined;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details
   *          for the vulnerability.</p>
   * @public
   */
  cvss3?: Cvss3 | undefined;

  /**
   * <p>A list of related vulnerabilities.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details
   *          for the vulnerability.</p>
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
   * <p>An object that contains the Exploit Prediction Scoring System (EPSS) score for a
   *          vulnerability.</p>
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
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *          items.</p>
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
 * @public
 */
export interface StartCodeSecurityScanRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The resource identifier for the code repository to scan.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface StartCodeSecurityScanResponse {
  /**
   * <p>The unique identifier of the initiated scan.</p>
   * @public
   */
  scanId?: string | undefined;

  /**
   * <p>The current status of the initiated scan.</p>
   * @public
   */
  status?: CodeScanStatus | undefined;
}

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
   * <p> The security level for the CIS scan configuration. Security level refers to the
   *          Benchmark levels that CIS assigns to a profile. </p>
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
 * <p>Contains details required to update an integration with GitHub.</p>
 * @public
 */
export interface UpdateGitHubIntegrationDetail {
  /**
   * <p>The authorization code received from GitHub to update the integration.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The installation ID of the GitHub App associated with the integration.</p>
   * @public
   */
  installationId: string | undefined;
}

/**
 * <p>Contains details required to update an integration with a self-managed GitLab
 *          instance.</p>
 * @public
 */
export interface UpdateGitLabSelfManagedIntegrationDetail {
  /**
   * <p>The authorization code received from the self-managed GitLab instance to update the
   *          integration.</p>
   * @public
   */
  authCode: string | undefined;
}

/**
 * <p>Contains details required to update a code security integration with a specific
 *          repository provider.</p>
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
   * <p>Details specific to updating an integration with a self-managed GitLab instance.</p>
   * @public
   */
  export interface GitlabSelfManagedMember {
    gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>Details specific to updating an integration with GitHub.</p>
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

  export interface Visitor<T> {
    gitlabSelfManaged: (value: UpdateGitLabSelfManagedIntegrationDetail) => T;
    github: (value: UpdateGitHubIntegrationDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateIntegrationDetails, visitor: Visitor<T>): T => {
    if (value.gitlabSelfManaged !== undefined) return visitor.gitlabSelfManaged(value.gitlabSelfManaged);
    if (value.github !== undefined) return visitor.github(value.github);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration to update.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The updated integration details specific to the repository provider type.</p>
   * @public
   */
  details: UpdateIntegrationDetails | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The current status of the updated code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to update.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The updated configuration settings for the code security scan.</p>
   * @public
   */
  configuration: CodeSecurityScanConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;
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
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or
   *             <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate
   *          deep inspection, instead the delegated administrator for the organization can deactivate a
   *          member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
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
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be
   *          added.</p>
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
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector
   *          organization.</p>
   * @public
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
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

/**
 * @internal
 */
export const GetCodeSecurityIntegrationResponseFilterSensitiveLog = (obj: GetCodeSecurityIntegrationResponse): any => ({
  ...obj,
  ...(obj.authorizationUrl && { authorizationUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGitHubIntegrationDetailFilterSensitiveLog = (obj: UpdateGitHubIntegrationDetail): any => ({
  ...obj,
  ...(obj.code && { code: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGitLabSelfManagedIntegrationDetailFilterSensitiveLog = (
  obj: UpdateGitLabSelfManagedIntegrationDetail
): any => ({
  ...obj,
  ...(obj.authCode && { authCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateIntegrationDetailsFilterSensitiveLog = (obj: UpdateIntegrationDetails): any => {
  if (obj.gitlabSelfManaged !== undefined)
    return { gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetailFilterSensitiveLog(obj.gitlabSelfManaged) };
  if (obj.github !== undefined) return { github: UpdateGitHubIntegrationDetailFilterSensitiveLog(obj.github) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const UpdateCodeSecurityIntegrationRequestFilterSensitiveLog = (
  obj: UpdateCodeSecurityIntegrationRequest
): any => ({
  ...obj,
  ...(obj.details && { details: UpdateIntegrationDetailsFilterSensitiveLog(obj.details) }),
});
