// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountFreeTrialInfo,
  AdminAccount,
  Administrator,
  AutoEnableMembers,
  CoverageFilterCriteria,
  CoverageResource,
  CoverageSortCriteria,
  CoverageStatistics,
  CoverageStatisticsType,
  CreateProtectedResource,
  DataSource,
  DataSourceConfigurations,
  DataSourceConfigurationsResult,
  Destination,
  DestinationProperties,
  DetectorFeatureConfiguration,
  DetectorFeatureConfigurationResult,
  DetectorStatus,
  EbsSnapshotPreservation,
  FeatureStatus,
  Feedback,
  FilterAction,
  Finding,
  FindingCriteria,
  FindingFilterSensitiveLog,
  FindingPublishingFrequency,
  FindingStatistics,
  IpSetFormat,
  MalwareProtectionPlanActions,
  OrderBy,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  SortCriteria,
  ThreatEntitySetFormat,
  ThreatIntelSetFormat,
  TrustedEntitySetFormat,
  UnprocessedAccount,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const FindingStatisticType = {
  COUNT_BY_SEVERITY: "COUNT_BY_SEVERITY",
} as const;

/**
 * @public
 */
export type FindingStatisticType = (typeof FindingStatisticType)[keyof typeof FindingStatisticType];

/**
 * @public
 */
export interface GetAdministratorAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Administrator: Administrator | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria used to filter the coverage statistics.</p>
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * <p>Represents the statistics type used to aggregate the coverage details.</p>
   * @public
   */
  StatisticsType: CoverageStatisticsType[] | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsResponse {
  /**
   * <p>Represents the count aggregated by the <code>statusCode</code> and
   *         <code>resourceType</code>.</p>
   * @public
   */
  CoverageStatistics?: CoverageStatistics | undefined;
}

/**
 * @public
 */
export interface GetDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to get.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorResponse {
  /**
   * <p>The timestamp of when the detector was created.</p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The publishing frequency of the finding.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>The GuardDuty service role.</p>
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * <p>The detector status.</p>
   * @public
   */
  Status: DetectorStatus | undefined;

  /**
   * <p>The last-updated timestamp for the detector.</p>
   * @public
   */
  UpdatedAt?: string | undefined;

  /**
   * <p>Describes which data sources are enabled for the detector.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: DataSourceConfigurationsResult | undefined;

  /**
   * <p>The tags of the detector resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the features that have been enabled for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfigurationResult[] | undefined;
}

/**
 * @public
 */
export interface GetFilterRequest {
  /**
   * <p>The unique ID of the detector that is associated with this filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter you want to get.</p>
   * @public
   */
  FilterName: string | undefined;
}

/**
 * @public
 */
export interface GetFilterResponse {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action: FilterAction | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The tags of the filter resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to retrieve.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>A list of findings.</p>
   * @public
   */
  Findings: Finding[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupByType = {
  ACCOUNT: "ACCOUNT",
  DATE: "DATE",
  FINDING_TYPE: "FINDING_TYPE",
  RESOURCE: "RESOURCE",
  SEVERITY: "SEVERITY",
} as const;

/**
 * @public
 */
export type GroupByType = (typeof GroupByType)[keyof typeof GroupByType];

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * <p>The ID of the detector whose findings statistics you
   *       want to retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of finding statistics to retrieve.</p>
   *
   * @deprecated This parameter is deprecated, please use GroupBy instead
   * @public
   */
  FindingStatisticTypes?: FindingStatisticType[] | undefined;

  /**
   * <p>Represents the criteria that is used for querying findings.</p>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;

  /**
   * <p>Displays the findings statistics grouped by one of the listed valid values.</p>
   * @public
   */
  GroupBy?: GroupByType | undefined;

  /**
   * <p>Displays the sorted findings in the requested order. The default
   *       value of <code>orderBy</code> is <code>DESC</code>.</p>
   *          <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  OrderBy?: OrderBy | undefined;

  /**
   * <p>The maximum number of results to be returned in the response. The default value is 25.</p>
   *          <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * <p>The finding statistics object.</p>
   * @public
   */
  FindingStatistics: FindingStatistics | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   *          <p>This parameter is currently not supported.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The number of received invitations.</p>
   * @public
   */
  InvitationsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the IPSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to retrieve.</p>
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type IpSetStatus = (typeof IpSetStatus)[keyof typeof IpSetStatus];

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * <p>The user-friendly name for the IPSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   * @public
   */
  Format: IpSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the IPSet.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The status of IPSet file that was uploaded.</p>
   * @public
   */
  Status: IpSetStatus | undefined;

  /**
   * <p>The tags of the IPSet resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter. This field appears
   *       in the response only if it was provided during IPSet creation or update.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanRequest {
  /**
   * <p>A unique identifier associated with Malware Protection plan resource.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MalwareProtectionPlanStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type MalwareProtectionPlanStatus =
  (typeof MalwareProtectionPlanStatus)[keyof typeof MalwareProtectionPlanStatus];

/**
 * <p>Information about the issue code and message associated to the status of
 *       your Malware Protection plan.</p>
 * @public
 */
export interface MalwareProtectionPlanStatusReason {
  /**
   * <p>Issue code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>Issue message that specifies the reason. For information
   *       about potential troubleshooting steps, see
   *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/troubleshoot-s3-malware-protection-status-errors.html">Troubleshooting Malware Protection for S3 status issues</a> in the
   *       <i>Amazon GuardDuty User Guide</i>.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the protected resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that includes the permissions to scan and
   *       add tags to the associated protected resource.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Information about the protected resource that is associated with the created
   *       Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported
   *       protected resource.</p>
   * @public
   */
  ProtectedResource?: CreateProtectedResource | undefined;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions | undefined;

  /**
   * <p>The timestamp when the Malware Protection plan resource was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Malware Protection plan status.</p>
   * @public
   */
  Status?: MalwareProtectionPlanStatus | undefined;

  /**
   * <p>Information about the issue code and message associated to the status of
   *     your Malware Protection plan.</p>
   * @public
   */
  StatusReasons?: MalwareProtectionPlanStatusReason[] | undefined;

  /**
   * <p>Tags added to the Malware Protection plan resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that is associated with this scan.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanCriterionKey = {
  EC2_INSTANCE_TAG: "EC2_INSTANCE_TAG",
} as const;

/**
 * @public
 */
export type ScanCriterionKey = (typeof ScanCriterionKey)[keyof typeof ScanCriterionKey];

/**
 * <p>Represents the <code>key:value</code> pair to be matched against given resource property.</p>
 * @public
 */
export interface ScanConditionPair {
  /**
   * <p>Represents the <b>key</b> in the map condition.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Represents optional <b>value</b> in the map
   *       condition. If not specified, only the <b>key</b> will be
   *       matched.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains information about the condition.</p>
 * @public
 */
export interface ScanCondition {
  /**
   * <p>Represents an <i>mapEqual</i>
   *             <b></b> condition to be applied
   *       to a single field when triggering for malware scan.</p>
   * @public
   */
  MapEquals: ScanConditionPair[] | undefined;
}

/**
 * <p>Contains information about criteria used to filter resources before triggering malware
 *       scan.</p>
 * @public
 */
export interface ScanResourceCriteria {
  /**
   * <p>Represents condition that when matched will allow a malware scan for a certain
   *       resource.</p>
   * @public
   */
  Include?: Partial<Record<ScanCriterionKey, ScanCondition>> | undefined;

  /**
   * <p>Represents condition that when matched will prevent a malware scan for a certain
   *       resource.</p>
   * @public
   */
  Exclude?: Partial<Record<ScanCriterionKey, ScanCondition>> | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsResponse {
  /**
   * <p>Represents the criteria to be used in the filter for scanning resources.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria | undefined;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | undefined;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 * @public
 */
export interface Master {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The value used to validate the administrator account to the member account.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   * @public
   */
  RelationshipStatus?: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;
}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Master: Master | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsRequest {
  /**
   * <p>The detector ID for the administrator account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Information about the additional configuration for the member account.</p>
 * @public
 */
export interface MemberAdditionalConfigurationResult {
  /**
   * <p>Indicates the name of the additional configuration that is set for the member
   *       account.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Indicates the status of the additional configuration that is set for the member
   *       account.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>The timestamp at which the additional configuration was set for the member account. This
   *       is in UTC format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Contains information about the features for the member account.</p>
 * @public
 */
export interface MemberFeaturesConfigurationResult {
  /**
   * <p>Indicates the name of the feature that is enabled for the detector.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>The timestamp at which the feature object was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Indicates the additional configuration of the feature that is configured for the member
   *       account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfigurationResult[] | undefined;
}

/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 * @public
 */
export interface MemberDataSourceConfiguration {
  /**
   * <p>The account ID for the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>Contains information on the status of data sources for the account.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: DataSourceConfigurationsResult | undefined;

  /**
   * <p>Contains information about the status of the features for the member account.</p>
   * @public
   */
  Features?: MemberFeaturesConfigurationResult[] | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsResponse {
  /**
   * <p>An object that describes which data sources are enabled for a member account.</p>
   * @public
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;

  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Contains information about the member account. </p>
 * @public
 */
export interface Member {
  /**
   * <p>The ID of the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The detector ID of the member account.</p>
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  MasterId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The status of the relationship between the member and the administrator.</p>
   * @public
   */
  RelationshipStatus: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;

  /**
   * <p>The last-updated timestamp of the member.</p>
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  AdministratorId?: string | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>A list of members.</p>
   * @public
   */
  Members: Member[] | undefined;

  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Information about the coverage
 *       statistic for the additional
 *     configuration of the feature.</p>
 * @public
 */
export interface OrganizationFeatureStatisticsAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration within a feature.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Total number of accounts that have enabled the additional
   *       configuration.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;
}

/**
 * <p>Information about the number of accounts
 *       that have enabled a specific feature.</p>
 * @public
 */
export interface OrganizationFeatureStatistics {
  /**
   * <p>Name of the feature.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Total number of accounts that have enabled a specific
   *       feature.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;

  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationFeatureStatisticsAdditionalConfiguration[] | undefined;
}

/**
 * <p>Information about the coverage statistics of the
 *       features for the entire
 *       Amazon Web Services organization.</p>
 *          <p>When you create a new Amazon Web Services organization, it might
 *       take up to 24 hours to
 *       generate the statistics summary for this organization.</p>
 * @public
 */
export interface OrganizationStatistics {
  /**
   * <p>Total number of accounts in your Amazon Web Services organization.</p>
   * @public
   */
  TotalAccountsCount?: number | undefined;

  /**
   * <p>Total number of accounts in your Amazon Web Services organization
   *       that are associated with GuardDuty.</p>
   * @public
   */
  MemberAccountsCount?: number | undefined;

  /**
   * <p>Total number of active accounts in your Amazon Web Services
   *       organization that are associated with GuardDuty.</p>
   * @public
   */
  ActiveAccountsCount?: number | undefined;

  /**
   * <p>Total number of accounts that have enabled GuardDuty.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;

  /**
   * <p>Retrieves the coverage
   *       statistics for each feature.</p>
   * @public
   */
  CountByFeature?: OrganizationFeatureStatistics[] | undefined;
}

/**
 * <p>Information about GuardDuty coverage statistics for members
 *       in your Amazon Web Services organization.</p>
 * @public
 */
export interface OrganizationDetails {
  /**
   * <p>The timestamp at which the organization statistics
   *       was last updated. This is in
   *       UTC format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Information about the GuardDuty coverage statistics
   *       for members in your Amazon Web Services organization.</p>
   * @public
   */
  OrganizationStatistics?: OrganizationStatistics | undefined;
}

/**
 * @public
 */
export interface GetOrganizationStatisticsResponse {
  /**
   * <p>Information about the statistics report for your organization.</p>
   * @public
   */
  OrganizationDetails?: OrganizationDetails | undefined;
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account identifiers of the GuardDuty member account.</p>
   * @public
   */
  AccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysResponse {
  /**
   * <p>The member accounts which were included in a request and were processed
   *       successfully.</p>
   * @public
   */
  Accounts?: AccountFreeTrialInfo[] | undefined;

  /**
   * <p>The member account that was included in a request but for which the request could not be
   *       processed.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetThreatEntitySetRequest {
  /**
   * <p>The unique ID of the detector associated with the threat entity set resource.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that helps GuardDuty identify the threat entity set.</p>
   * @public
   */
  ThreatEntitySetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThreatEntitySetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ThreatEntitySetStatus = (typeof ThreatEntitySetStatus)[keyof typeof ThreatEntitySetStatus];

/**
 * @public
 */
export interface GetThreatEntitySetResponse {
  /**
   * <p>The name of the threat entity set associated with the specified <code>threatEntitySetId</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the threat entity set.</p>
   * @public
   */
  Format: ThreatEntitySetFormat | undefined;

  /**
   * <p>The URI of the file that contains the threat entity set.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b>
   *        parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The status of the associated threat entity set.</p>
   * @public
   */
  Status: ThreatEntitySetStatus | undefined;

  /**
   * <p>The tags associated with the threat entity set resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the associated threat entity set was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the associated threat entity set was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The error details when the status is shown as <code>ERROR</code>.</p>
   * @public
   */
  ErrorDetails?: string | undefined;
}

/**
 * @public
 */
export interface GetThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the threatIntelSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to get.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThreatIntelSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ThreatIntelSetStatus = (typeof ThreatIntelSetStatus)[keyof typeof ThreatIntelSetStatus];

/**
 * @public
 */
export interface GetThreatIntelSetResponse {
  /**
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the threatIntelSet.</p>
   * @public
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The status of threatIntelSet file uploaded.</p>
   * @public
   */
  Status: ThreatIntelSetStatus | undefined;

  /**
   * <p>The tags of the threat list resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.
   *       This field appears in the response only if it was provided during ThreatIntelSet creation or update.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustedEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with this trusted entity set.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that helps GuardDuty identify the trusted entity set.</p>
   * @public
   */
  TrustedEntitySetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrustedEntitySetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TrustedEntitySetStatus = (typeof TrustedEntitySetStatus)[keyof typeof TrustedEntitySetStatus];

/**
 * @public
 */
export interface GetTrustedEntitySetResponse {
  /**
   * <p>The name of the threat entity set associated with the specified <code>trustedEntitySetId</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the trusted entity set.</p>
   * @public
   */
  Format: TrustedEntitySetFormat | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b>
   *        parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The status of the associated trusted entity set.</p>
   * @public
   */
  Status: TrustedEntitySetStatus | undefined;

  /**
   * <p>The tags associated with trusted entity set resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the associated trusted entity set was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the associated trusted entity set was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The error details when the status is shown as <code>ERROR</code>.</p>
   * @public
   */
  ErrorDetails?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UsageFeature = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EC2_RUNTIME_MONITORING: "EC2_RUNTIME_MONITORING",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FARGATE_RUNTIME_MONITORING: "FARGATE_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_DBI_PROTECTION_PROVISIONED: "RDS_DBI_PROTECTION_PROVISIONED",
  RDS_DBI_PROTECTION_SERVERLESS: "RDS_DBI_PROTECTION_SERVERLESS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type UsageFeature = (typeof UsageFeature)[keyof typeof UsageFeature];

/**
 * <p>Contains information about the criteria used to query usage statistics.</p>
 * @public
 */
export interface UsageCriteria {
  /**
   * <p>The account IDs to aggregate usage statistics from.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The data sources to aggregate usage statistics from.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * <p>The resources to aggregate usage statistics from. Only accepts exact resource
   *       names.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The features to aggregate usage statistics from.</p>
   * @public
   */
  Features?: UsageFeature[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UsageStatisticType = {
  SUM_BY_ACCOUNT: "SUM_BY_ACCOUNT",
  SUM_BY_DATA_SOURCE: "SUM_BY_DATA_SOURCE",
  SUM_BY_FEATURES: "SUM_BY_FEATURES",
  SUM_BY_RESOURCE: "SUM_BY_RESOURCE",
  TOP_ACCOUNTS_BY_FEATURE: "TOP_ACCOUNTS_BY_FEATURE",
  TOP_RESOURCES: "TOP_RESOURCES",
} as const;

/**
 * @public
 */
export type UsageStatisticType = (typeof UsageStatisticType)[keyof typeof UsageStatisticType];

/**
 * @public
 */
export interface GetUsageStatisticsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you
   *       want to retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The type of usage statistics to retrieve.</p>
   * @public
   */
  UsageStatisticType: UsageStatisticType | undefined;

  /**
   * <p>Represents the criteria used for querying usage.</p>
   * @public
   */
  UsageCriteria: UsageCriteria | undefined;

  /**
   * <p>The currency unit you would like to view your usage statistics in. Current valid values
   *       are USD.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *       NextToken value returned from the previous request to continue listing results after the first
   *       page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 * @public
 */
export interface Total {
  /**
   * <p>The total usage.</p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p>The currency unit that the amount is given in.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>Contains information on the total of usage based on account IDs.</p>
 * @public
 */
export interface UsageAccountResult {
  /**
   * <p>The Account ID that generated usage.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Represents the total of usage for the Account ID.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the result of usage based on data source type.</p>
 * @public
 */
export interface UsageDataSourceResult {
  /**
   * <p>The data source type that generated usage.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Represents the total of usage for the specified data source.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information about the result of the total usage based on the feature.</p>
 * @public
 */
export interface UsageFeatureResult {
  /**
   * <p>The feature that generated the usage cost.</p>
   * @public
   */
  Feature?: UsageFeature | undefined;

  /**
   * <p>Contains the total usage with the corresponding currency unit for that value.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the sum of usage based on an Amazon Web Services resource.</p>
 * @public
 */
export interface UsageResourceResult {
  /**
   * <p>The Amazon Web Services resource that generated usage.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>Represents the sum total of usage for the specified resource type.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the total of usage based on the topmost 50
 *       account IDs.</p>
 * @public
 */
export interface UsageTopAccountResult {
  /**
   * <p>The unique account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Contains the total usage with the corresponding currency unit for that value.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Information about the usage statistics, calculated
 *       by top accounts by feature.</p>
 * @public
 */
export interface UsageTopAccountsResult {
  /**
   * <p>Features by which you can generate the usage statistics.</p>
   *          <p>
   *             <code>RDS_LOGIN_EVENTS</code> is currently not supported
   *       with <code>topAccountsByFeature</code>.</p>
   * @public
   */
  Feature?: UsageFeature | undefined;

  /**
   * <p>The accounts that contributed to the total usage cost.</p>
   * @public
   */
  Accounts?: UsageTopAccountResult[] | undefined;
}

/**
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for
 *       other types will be null. </p>
 * @public
 */
export interface UsageStatistics {
  /**
   * <p>The usage statistic sum organized by account ID.</p>
   * @public
   */
  SumByAccount?: UsageAccountResult[] | undefined;

  /**
   * <p>Lists the top 50 accounts by feature that have generated the most
   *       GuardDuty usage, in the order from most to least expensive.</p>
   *          <p>Currently, this doesn't support <code>RDS_LOGIN_EVENTS</code>.</p>
   * @public
   */
  TopAccountsByFeature?: UsageTopAccountsResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by on data source.</p>
   * @public
   */
  SumByDataSource?: UsageDataSourceResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by resource.</p>
   * @public
   */
  SumByResource?: UsageResourceResult[] | undefined;

  /**
   * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from
   *       most to least expensive.</p>
   * @public
   */
  TopResources?: UsageResourceResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by feature.</p>
   * @public
   */
  SumByFeature?: UsageFeatureResult[] | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsResponse {
  /**
   * <p>The usage statistics object. If a UsageStatisticType was provided, the objects
   *       representing other types will be null.</p>
   * @public
   */
  UsageStatistics?: UsageStatistics | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account with which you want to invite members.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as
   *       members.</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether you want to disable email notification to the
   *       accounts that you are inviting to GuardDuty as members.</p>
   * @public
   */
  DisableEmailNotification?: boolean | undefined;

  /**
   * <p>The invitation message that you want to send to the accounts that you're inviting to
   *       GuardDuty as members.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * <p>The unique ID of the detector whose coverage details you want to retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *       NextToken value returned from the previous request to continue listing results after the first
   *       page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the criteria used to filter the coverage details.</p>
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * <p>Represents the criteria used to sort the coverage details.</p>
   * @public
   */
  SortCriteria?: CoverageSortCriteria | undefined;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * <p>A list of resources and their attributes providing cluster details.</p>
   * @public
   */
  Resources: CoverageResource[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorsResponse {
  /**
   * <p>A list of detector IDs.</p>
   * @public
   */
  DetectorIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * <p>The unique ID of the detector that is associated with the filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * <p>A list of filter names.</p>
   * @public
   */
  FilterNames: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria used for querying findings. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>JSON field name</p>
   *             </li>
   *             <li>
   *                <p>accountId</p>
   *             </li>
   *             <li>
   *                <p>region</p>
   *             </li>
   *             <li>
   *                <p>confidence</p>
   *             </li>
   *             <li>
   *                <p>id</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.accessKeyId</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.principalId</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.userName</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.userType</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.iamInstanceProfile.id</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.imageId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.instanceId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.publicDnsName</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.publicIp</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.subnetId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.vpcId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.tags.value</p>
   *             </li>
   *             <li>
   *                <p>resource.resourceType</p>
   *             </li>
   *             <li>
   *                <p>service.action.actionType</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.api</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.callerType</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.serviceName</p>
   *             </li>
   *             <li>
   *                <p>service.action.dnsRequestAction.domain</p>
   *             </li>
   *             <li>
   *                <p>service.action.dnsRequestAction.domainWithSuffix</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.blocked</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.connectionDirection</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.localPortDetails.port</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.protocol</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remotePortDetails.port</p>
   *             </li>
   *             <li>
   *                <p>service.additionalInfo.threatListName</p>
   *             </li>
   *             <li>
   *                <p>service.archived</p>
   *                <p>When this attribute is set to 'true', only archived findings are listed. When it's set
   *           to 'false', only unarchived findings are listed. When this attribute is not set, all
   *           existing findings are listed.</p>
   *             </li>
   *             <li>
   *                <p>service.ebsVolumeScanDetails.scanId</p>
   *             </li>
   *             <li>
   *                <p>service.resourceRole</p>
   *             </li>
   *             <li>
   *                <p>severity</p>
   *             </li>
   *             <li>
   *                <p>type</p>
   *             </li>
   *             <li>
   *                <p>updatedAt</p>
   *                <p>Type: Timestamp in Unix Epoch millisecond format: 1486685375000</p>
   *             </li>
   *          </ul>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>The IDs of the findings that you're listing.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about the invitation to become a member account.</p>
 * @public
 */
export interface Invitation {
  /**
   * <p>The ID of the account that the invitation was sent from.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member
   *       account.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   * @public
   */
  RelationshipStatus?: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>A list of invitation descriptions.</p>
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * <p>The unique ID of the detector that is associated with IPSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * <p>The IDs of the IPSet resources.</p>
   * @public
   */
  IpSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMalwareProtectionPlansRequest {
  /**
   * <p>You can use this parameter when paginating results. Set the value
   *       of this parameter to null on your first call to the list action.
   *       For subsequent calls to the action, fill nextToken in the request
   *       with the value of <code>NextToken</code> from the previous response to
   *       continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the Malware Protection plan resource.</p>
 * @public
 */
export interface MalwareProtectionPlanSummary {
  /**
   * <p>A unique identifier associated with Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlanId?: string | undefined;
}

/**
 * @public
 */
export interface ListMalwareProtectionPlansResponse {
  /**
   * <p>A list of unique identifiers associated with each Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlans?: MalwareProtectionPlanSummary[] | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value
   *       of this parameter to null on your first call to the list action.
   *       For subsequent calls to the action, fill nextToken in the request
   *       with the value of <code>NextToken</code> from the previous response to
   *       continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>The unique ID of the detector that is associated with the member.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated). Member accounts must have
   *       been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">
   *                <code>Create
   *           Members</code>
   *             </a>. </p>
   * @public
   */
  OnlyAssociated?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>A list of members.</p>
   *          <note>
   *             <p>The values for <code>email</code> and <code>invitedAt</code> are available
   *     only if the member accounts are added by invitation.</p>
   *          </note>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>A list of accounts configured as GuardDuty delegated administrators.</p>
   * @public
   */
  AdminAccounts?: AdminAccount[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishingDestinationsRequest {
  /**
   * <p>The detector ID for which you want to retrieve the publishing destination.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishingDestinationsResponse {
  /**
   * <p>A <code>Destinations</code> object that includes information about each publishing
   *       destination returned.</p>
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListThreatEntitySetsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector that is associated with this threat entity set.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of
   *        items you want in the response. The default value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value
   *        of this parameter to null on your first call to the list action. For
   *        subsequent calls to the action, fill nextToken in the request
   *        with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatEntitySetsResponse {
  /**
   * <p>The IDs of the threat entity set resources.</p>
   * @public
   */
  ThreatEntitySetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatIntelSetsRequest {
  /**
   * <p>The unique ID of the detector that is associated with the threatIntelSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatIntelSetsResponse {
  /**
   * <p>The IDs of the ThreatIntelSet resources.</p>
   * @public
   */
  ThreatIntelSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustedEntitySetsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector that is associated with this threat entity set.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of
   *        items you want in the response. The default value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value
   *        of this parameter to null on your first call to the list action. For
   *        subsequent calls to the action, fill nextToken in the request
   *        with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustedEntitySetsResponse {
  /**
   * <p>The IDs of the trusted entity set resources.</p>
   * @public
   */
  TrustedEntitySetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource for which you invoked the API.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanResponse {
  /**
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has
   *       a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   * @public
   */
  ScanId?: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty administrator account associated with the
   *       member accounts to monitor.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface StopMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector associated with the GuardDuty administrator account that is
   *       monitoring member accounts.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StopMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain an accountId for each account that could not be processed,
   *       and a result string that indicates why the account was not processed. </p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
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
export interface UnarchiveFindingsRequest {
  /**
   * <p>The ID of the detector associated with the findings to unarchive.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings to unarchive.</p>
   * @public
   */
  FindingIds: string[] | undefined;
}

/**
 * @public
 */
export interface UnarchiveFindingsResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDetectorRequest {
  /**
   * <p>The unique ID of the detector to update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   * @public
   */
  Enable?: boolean | undefined;

  /**
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
   *       Events.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: DataSourceConfigurations | undefined;

  /**
   * <p>Provides the features that will be updated for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorResponse {}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update a filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  FilterName: string | undefined;

  /**
   * <p>The description of the filter. Valid characters include alphanumeric characters, and
   *       special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>,
   *         <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab,
   *       newline, form feed, return, and whitespace.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action?: FilterAction | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackRequest {
  /**
   * <p>The ID of the detector that is associated with the findings for which you want to update
   *       the feedback.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The feedback for the finding.</p>
   * @public
   */
  Feedback: Feedback | undefined;

  /**
   * <p>Additional feedback about the GuardDuty findings.</p>
   * @public
   */
  Comments?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackResponse {}

/**
 * @public
 */
export interface UpdateIPSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   * @public
   */
  IpSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated URI of the file that contains the IPSet. </p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   * @public
   */
  Activate?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {}

/**
 * <p>Information about the protected S3 bucket resource.</p>
 * @public
 */
export interface UpdateS3BucketResource {
  /**
   * <p>Information about the specified object prefixes. The S3 object will be scanned only
   *       if it belongs to any of the specified object prefixes.</p>
   * @public
   */
  ObjectPrefixes?: string[] | undefined;
}

/**
 * <p>Information about the protected resource
 *       that is associated with the created Malware Protection plan.
 *       Presently, <code>S3Bucket</code> is the only supported protected resource.</p>
 * @public
 */
export interface UpdateProtectedResource {
  /**
   * <p>Information about the protected S3 bucket resource.</p>
   * @public
   */
  S3Bucket?: UpdateS3BucketResource | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareProtectionPlanRequest {
  /**
   * <p>A unique identifier associated with the Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role with permissions to scan and add tags to
   *       the associated protected resource.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions | undefined;

  /**
   * <p>Information about the protected resource that is associated
   *       with the created Malware Protection plan. Presently, <code>S3Bucket</code>
   *       is the only supported protected resource.</p>
   * @public
   */
  ProtectedResource?: UpdateProtectedResource | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update scan settings.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria | undefined;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsResponse {}

/**
 * <p>Information about the additional configuration for the member account.</p>
 * @public
 */
export interface MemberAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Status of the additional configuration.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * <p>Contains information about the features for the member account.</p>
 * @public
 */
export interface MemberFeaturesConfiguration {
  /**
   * <p>The name of the feature.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>The status of the feature.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>Additional configuration of the feature for the member account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * <p>The detector ID of the administrator account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs to be updated.</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: DataSourceConfigurations | undefined;

  /**
   * <p>A list of features that will be updated for the specified member accounts.</p>
   * @public
   */
  Features?: MemberFeaturesConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemberDetectorsResponse {
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Organization-wide Kubernetes audit logs configuration.</p>
 * @public
 */
export interface OrganizationKubernetesAuditLogsConfiguration {
  /**
   * <p>A value that contains information on whether Kubernetes audit logs should be enabled
   *       automatically as a data source for the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>Organization-wide Kubernetes data sources configurations.</p>
 * @public
 */
export interface OrganizationKubernetesConfiguration {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining
   *       the organization.</p>
   * @public
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfiguration | undefined;
}

/**
 * <p>Organization-wide EBS volumes scan configuration.</p>
 * @public
 */
export interface OrganizationEbsVolumes {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the
   *       organization.</p>
   * @public
   */
  AutoEnable?: boolean | undefined;
}

/**
 * <p>Organization-wide EC2 instances with findings scan configuration.</p>
 * @public
 */
export interface OrganizationScanEc2InstanceWithFindings {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the
   *       organization.</p>
   * @public
   */
  EbsVolumes?: OrganizationEbsVolumes | undefined;
}

/**
 * <p>Organization-wide Malware Protection configurations.</p>
 * @public
 */
export interface OrganizationMalwareProtectionConfiguration {
  /**
   * <p>Whether Malware Protection for EC2 instances with findings should be auto-enabled for new
   *       members joining the organization.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings | undefined;
}

/**
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the
 *       organization.</p>
 * @public
 */
export interface OrganizationS3LogsConfiguration {
  /**
   * <p>A value that contains information on whether S3 data event logs will be enabled
   *       automatically as a data source for the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>An object that contains information on which data sources will be configured to be
 *       automatically enabled for new members within the organization.</p>
 * @public
 */
export interface OrganizationDataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled for new members of the
   *       organization.</p>
   * @public
   */
  S3Logs?: OrganizationS3LogsConfiguration | undefined;

  /**
   * <p>Describes the configuration of Kubernetes data sources for new members of the
   *       organization.</p>
   * @public
   */
  Kubernetes?: OrganizationKubernetesConfiguration | undefined;

  /**
   * <p>Describes the configuration of Malware Protection for new members of the
   *       organization.</p>
   * @public
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration | undefined;
}

/**
 * <p>A list of additional configurations which will be configured for the organization. </p>
 *          <p>Additional configuration applies to only GuardDuty Runtime Monitoring protection plan.</p>
 * @public
 */
export interface OrganizationAdditionalConfiguration {
  /**
   * <p>The name of the additional configuration that will be configured for the
   *       organization. These values are applicable to only Runtime Monitoring protection plan.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>The status of the additional configuration that will be configured for the
   *       organization. Use one of the following
   *       values to configure the feature status for the entire organization:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have the additional configuration enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have
   *           the additional configuration
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *                <p>It may take up to 24 hours to update the configuration for all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that the additional configuration will not be
   *           automatically enabled for any
   *           account in the organization. The administrator must manage the additional configuration
   *           for each account individually.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;
}

/**
 * <p>A list of features which will be configured for the organization.</p>
 * @public
 */
export interface OrganizationFeatureConfiguration {
  /**
   * <p>The name of the feature that will be configured for the organization.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Describes the status of the feature that is configured for the
   *       member accounts within the organization. One of the following
   *       values is the status for the entire organization:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have the feature enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have the feature
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *                <p>It may take up to 24 hours to update the configuration for all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that the feature will not be
   *           automatically enabled for any
   *           account in the organization. The administrator must manage the feature
   *           for each account individually.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;

  /**
   * <p>The additional information that will be configured for the organization.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector that configures the delegated administrator.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents whether to automatically enable member accounts in the organization. This
   *     applies to only new member accounts, not the existing member accounts. When a new account joins the organization,
   *     the chosen features will be enabled for them by default.</p>
   *          <p>Even though this is still supported, we recommend using
   *    <code>AutoEnableOrganizationMembers</code> to achieve the similar results. You must provide a
   *     value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>.</p>
   *
   * @deprecated This field is deprecated, use AutoEnableOrganizationMembers instead
   * @public
   */
  AutoEnable?: boolean | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead
   * @public
   */
  DataSources?: OrganizationDataSourceConfigurations | undefined;

  /**
   * <p>A list of features that will be configured for the organization.</p>
   * @public
   */
  Features?: OrganizationFeatureConfiguration[] | undefined;

  /**
   * <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the
   *       organization. You must provide a value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>. </p>
   *          <p>Use one of the
   *     following configuration values for <code>autoEnableOrganizationMembers</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have GuardDuty enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have GuardDuty
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *                <p>It may take up to 24 hours to update the configuration for all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any
   *           account in the organization. The administrator must manage GuardDuty for each account in the organization individually.</p>
   *                <p>When you update the auto-enable setting from <code>ALL</code> or <code>NEW</code> to
   *           <code>NONE</code>, this action doesn't disable the corresponding option for your existing accounts. This
   *           configuration will apply to the new accounts that join the organization. After you update the auto-enable settings,
   *           no new account will have the corresponding option as enabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdatePublishingDestinationRequest {
  /**
   * <p>The ID of the detector associated with the publishing destinations to update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to update.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   * @public
   */
  DestinationProperties?: DestinationProperties | undefined;
}

/**
 * @public
 */
export interface UpdatePublishingDestinationResponse {}

/**
 * @public
 */
export interface UpdateThreatEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the threat entity set that you want to
   *       update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID returned by GuardDuty after updating the threat entity set resource.</p>
   * @public
   */
  ThreatEntitySetId: string | undefined;

  /**
   * <p>A user-friendly name to identify the trusted entity set.</p>
   *          <p>The name of your list can include
   *                                 lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b>
   *        parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>A boolean value that indicates whether GuardDuty is to start using this updated threat entity set. After you
   *       update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated
   *       entity set to be effective.</p>
   * @public
   */
  Activate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateThreatEntitySetResponse {}

/**
 * @public
 */
export interface UpdateThreatIntelSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
   *       update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   * @public
   */
  Activate?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateThreatIntelSetResponse {}

/**
 * @public
 */
export interface UpdateTrustedEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the threat entity set that you want to
   *          update.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID returned by GuardDuty after updating the trusted entity set resource.</p>
   * @public
   */
  TrustedEntitySetId: string | undefined;

  /**
   * <p>A user-friendly name to identify the trusted entity set.</p>
   *          <p>The name of your list can include
   *                                 lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b>
   *        parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>A boolean value that indicates whether GuardDuty is to start using this updated trusted entity set. After you
   *        update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated
   *        entity set to be effective.</p>
   * @public
   */
  Activate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTrustedEntitySetResponse {}

/**
 * @internal
 */
export const GetFindingsResponseFilterSensitiveLog = (obj: GetFindingsResponse): any => ({
  ...obj,
  ...(obj.Findings && { Findings: obj.Findings.map((item) => FindingFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
  ...(obj.Email && { Email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMembersResponseFilterSensitiveLog = (obj: GetMembersResponse): any => ({
  ...obj,
  ...(obj.Members && { Members: obj.Members.map((item) => MemberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
  ...(obj.Members && { Members: obj.Members.map((item) => MemberFilterSensitiveLog(item)) }),
});
