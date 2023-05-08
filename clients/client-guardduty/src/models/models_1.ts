// smithy-typescript generated code
import {
  AutoEnableMembers,
  DataSourceConfigurations,
  DestinationProperties,
  DetectorFeatureConfiguration,
  EbsSnapshotPreservation,
  FeatureStatus,
  Feedback,
  FilterAction,
  FindingCriteria,
  FindingPublishingFrequency,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  ScanResourceCriteria,
  UnprocessedAccount,
} from "./models_0";

/**
 * @public
 */
export interface StartMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
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
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
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
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
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
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings to unarchive.</p>
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
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
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
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   */
  Enable?: boolean;

  /**
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
   *       Events.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>Provides the features that will be updated for the detector.</p>
   */
  Features?: DetectorFeatureConfiguration[];
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
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;

  /**
   * <p>The description of the filter. Valid characters include alphanumeric characters, and
   *       special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>,
   *         <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab,
   *       newline, form feed, return, and whitespace.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction | string;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackRequest {
  /**
   * <p>The ID of the detector associated with the findings to update feedback for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The feedback for the finding.</p>
   */
  Feedback: Feedback | string | undefined;

  /**
   * <p>Additional feedback about the GuardDuty findings.</p>
   */
  Comments?: string;
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
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  IpSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the IPSet. </p>
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   */
  Activate?: boolean;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update scan settings.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | string;
}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsResponse {}

/**
 * @public
 * <p>Information about the additional configuration for the member account.</p>
 */
export interface MemberAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration | string;

  /**
   * <p>Status of the additional configuration.</p>
   */
  Status?: FeatureStatus | string;
}

/**
 * @public
 * <p>Contains information about the features for the member account.</p>
 */
export interface MemberFeaturesConfiguration {
  /**
   * <p>The name of the feature.</p>
   */
  Name?: OrgFeature | string;

  /**
   * <p>The status of the feature.</p>
   */
  Status?: FeatureStatus | string;

  /**
   * <p>Additional configuration of the feature for the member account.</p>
   */
  AdditionalConfiguration?: MemberAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * <p>The detector ID of the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs to be updated.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>A list of features that will be updated for the specified member accounts.</p>
   */
  Features?: MemberFeaturesConfiguration[];
}

/**
 * @public
 */
export interface UpdateMemberDetectorsResponse {
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 * <p>Organization-wide Kubernetes audit logs configuration.</p>
 */
export interface OrganizationKubernetesAuditLogsConfiguration {
  /**
   * <p>A value that contains information on whether Kubernetes audit logs should be enabled
   *       automatically as a data source for the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * @public
 * <p>Organization-wide Kubernetes data sources configurations.</p>
 */
export interface OrganizationKubernetesConfiguration {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining
   *       the organization.</p>
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfiguration | undefined;
}

/**
 * @public
 * <p>Organization-wide EBS volumes scan configuration.</p>
 */
export interface OrganizationEbsVolumes {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the
   *       organization.</p>
   */
  AutoEnable?: boolean;
}

/**
 * @public
 * <p>Organization-wide EC2 instances with findings scan configuration.</p>
 */
export interface OrganizationScanEc2InstanceWithFindings {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the
   *       organization.</p>
   */
  EbsVolumes?: OrganizationEbsVolumes;
}

/**
 * @public
 * <p>Organization-wide Malware Protection configurations.</p>
 */
export interface OrganizationMalwareProtectionConfiguration {
  /**
   * <p>Whether Malware Protection for EC2 instances with findings should be auto-enabled for new
   *       members joining the organization.</p>
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
}

/**
 * @public
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfiguration {
  /**
   * <p>A value that contains information on whether S3 data event logs will be enabled
   *       automatically as a data source for the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * @public
 * <p>An object that contains information on which data sources will be configured to be
 *       automatically enabled for new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled for new members of the
   *       organization.</p>
   */
  S3Logs?: OrganizationS3LogsConfiguration;

  /**
   * <p>Describes the configuration of Kubernetes data sources for new members of the
   *       organization.</p>
   */
  Kubernetes?: OrganizationKubernetesConfiguration;

  /**
   * <p>Describes the configuration of Malware Protection for new members of the
   *       organization.</p>
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}

/**
 * @public
 * <p>A list of additional configurations which will be configured for the organization.</p>
 */
export interface OrganizationAdditionalConfiguration {
  /**
   * <p>The name of the additional configuration that will be configured for the
   *       organization.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration | string;

  /**
   * <p>The status of the additional configuration that will be configured for the
   *       organization.</p>
   */
  AutoEnable?: OrgFeatureStatus | string;
}

/**
 * @public
 * <p>A list of features which will be configured for the organization.</p>
 */
export interface OrganizationFeatureConfiguration {
  /**
   * <p>The name of the feature that will be configured for the organization.</p>
   */
  Name?: OrgFeature | string;

  /**
   * <p>The status of the feature that will be configured for the organization.</p>
   */
  AutoEnable?: OrgFeatureStatus | string;

  /**
   * <p>The additional information that will be configured for the organization.</p>
   */
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector that configures the delegated administrator.</p>
   */
  DetectorId: string | undefined;

  /**
   * @deprecated
   *
   * <p>Indicates whether to automatically enable member accounts in the organization.</p>
   *          <p>Even though this is still supported, we recommend using
   *         <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>
   */
  AutoEnable?: boolean;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: OrganizationDataSourceConfigurations;

  /**
   * <p>A list of features that will be configured for the organization.</p>
   */
  Features?: OrganizationFeatureConfiguration[];

  /**
   * <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the
   *       organization. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have GuardDuty enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any
   *           accounts in the organization. GuardDuty must be managed for each account individually by the
   *           administrator.</p>
   *             </li>
   *          </ul>
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers | string;
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
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to update.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties?: DestinationProperties;
}

/**
 * @public
 */
export interface UpdatePublishingDestinationResponse {}

/**
 * @public
 */
export interface UpdateThreatIntelSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
   *       update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   */
  Activate?: boolean;
}

/**
 * @public
 */
export interface UpdateThreatIntelSetResponse {}
