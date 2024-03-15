// smithy-typescript generated code
import {
  AdminAccount,
  AutoEnableMembers,
  DataSourceConfigurations,
  Destination,
  DestinationProperties,
  DetectorFeatureConfiguration,
  EbsSnapshotPreservation,
  FeatureStatus,
  Feedback,
  FilterAction,
  FindingCriteria,
  FindingPublishingFrequency,
  Member,
  MemberFilterSensitiveLog,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  ScanResourceCriteria,
  SortCriteria,
  UnprocessedAccount,
} from "./models_0";

/**
 * @public
 */
export interface ListDetectorsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
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
  FindingCriteria?: FindingCriteria;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
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
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;
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
  AccountId?: string;

  /**
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member
   *       account.</p>
   * @public
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   * @public
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>A list of invitation descriptions.</p>
   * @public
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>The unique ID of the detector the member is associated with.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated). Member accounts must have
   *       been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">
   *                <code>Create
   *           Members</code>
   *             </a>. </p>
   * @public
   */
  OnlyAssociated?: string;
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
  Members?: Member[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>A list of accounts configured as GuardDuty delegated administrators.</p>
   * @public
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishingDestinationsRequest {
  /**
   * <p>The ID of the detector to retrieve publishing destinations for.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
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
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListThreatIntelSetsRequest {
  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;
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
  ScanId?: string;
}

/**
 * @public
 */
export interface StartMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty administrator account associated with the
   *       member accounts to monitor.</p>
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
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   * @public
   */
  Enable?: boolean;

  /**
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
   *       Events.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   * @public
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>Provides the features that will be updated for the detector.</p>
   * @public
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
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action?: FilterAction;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  FindingCriteria?: FindingCriteria;
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
   * <p>The ID of the detector associated with the findings to update feedback for.</p>
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
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the IPSet. </p>
   * @public
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   * @public
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
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
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
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * <p>Status of the additional configuration.</p>
   * @public
   */
  Status?: FeatureStatus;
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
  Name?: OrgFeature;

  /**
   * <p>The status of the feature.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>Additional configuration of the feature for the member account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * <p>The detector ID of the administrator account.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs to be updated.</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   * @public
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>A list of features that will be updated for the specified member accounts.</p>
   * @public
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
  AutoEnable?: boolean;
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
  EbsVolumes?: OrganizationEbsVolumes;
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
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
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
  S3Logs?: OrganizationS3LogsConfiguration;

  /**
   * <p>Describes the configuration of Kubernetes data sources for new members of the
   *       organization.</p>
   * @public
   */
  Kubernetes?: OrganizationKubernetesConfiguration;

  /**
   * <p>Describes the configuration of Malware Protection for new members of the
   *       organization.</p>
   * @public
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}

/**
 * <p>A list of additional configurations which will be configured for the organization. </p>
 * @public
 */
export interface OrganizationAdditionalConfiguration {
  /**
   * <p>The name of the additional configuration that will be configured for the
   *       organization.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration;

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
  AutoEnable?: OrgFeatureStatus;
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
  Name?: OrgFeature;

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
  AutoEnable?: OrgFeatureStatus;

  /**
   * <p>The additional information that will be configured for the organization.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector that configures the delegated administrator.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * @deprecated
   *
   * <p>Represents whether or not to automatically enable member accounts in the organization.</p>
   *          <p>Even though this is still supported, we recommend using
   *    <code>AutoEnableOrganizationMembers</code> to achieve the similar results. You must provide a
   *     value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>.</p>
   * @public
   */
  AutoEnable?: boolean;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   * @public
   */
  DataSources?: OrganizationDataSourceConfigurations;

  /**
   * <p>A list of features that will be configured for the organization.</p>
   * @public
   */
  Features?: OrganizationFeatureConfiguration[];

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
  AutoEnableOrganizationMembers?: AutoEnableMembers;
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
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   * @public
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   * @public
   */
  Activate?: boolean;
}

/**
 * @public
 */
export interface UpdateThreatIntelSetResponse {}

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
  ...(obj.Members && { Members: obj.Members.map((item) => MemberFilterSensitiveLog(item)) }),
});
