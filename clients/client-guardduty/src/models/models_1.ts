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
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDetectorsResponse {
  /**
   * @public
   * <p>A list of detector IDs.</p>
   */
  DetectorIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * @public
   * <p>A list of filter names.</p>
   */
  FilterNames: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
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
   */
  FindingCriteria?: FindingCriteria;

  /**
   * @public
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * @public
   * <p>The IDs of the findings that you're listing.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about the invitation to become a member account.</p>
 */
export interface Invitation {
  /**
   * @public
   * <p>The ID of the account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member
   *       account.</p>
   */
  InvitationId?: string;

  /**
   * @public
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * @public
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * @public
   * <p>A list of invitation descriptions.</p>
   */
  Invitations?: Invitation[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * @public
   * <p>The IDs of the IPSet resources.</p>
   */
  IpSetIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector the member is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated). Member accounts must have
   *       been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">
   *                <code>Create
   *           Members</code>
   *             </a>. </p>
   */
  OnlyAssociated?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
   * <p>A list of members.</p>
   *          <note>
   *             <p>The values for <code>email</code> and <code>invitedAt</code> are available
   *     only if the member accounts are added by invitation.</p>
   *          </note>
   */
  Members?: Member[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @public
   * <p>A list of accounts configured as GuardDuty delegated administrators.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishingDestinationsRequest {
  /**
   * @public
   * <p>The ID of the detector to retrieve publishing destinations for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishingDestinationsResponse {
  /**
   * @public
   * <p>A <code>Destinations</code> object that includes information about each publishing
   *       destination returned.</p>
   */
  Destinations: Destination[] | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListThreatIntelSetsRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListThreatIntelSetsResponse {
  /**
   * @public
   * <p>The IDs of the ThreatIntelSet resources.</p>
   */
  ThreatIntelSetIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartMalwareScanRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource for which you invoked the API.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanResponse {
  /**
   * @public
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has
   *       a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   */
  ScanId?: string;
}

/**
 * @public
 */
export interface StartMonitoringMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty administrator account associated with the
   *       member accounts to monitor.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMembersResponse {
  /**
   * @public
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
   * @public
   * <p>The unique ID of the detector associated with the GuardDuty administrator account that is
   *       monitoring member accounts.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StopMonitoringMembersResponse {
  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The ID of the detector associated with the findings to unarchive.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The unique ID of the detector to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   */
  Enable?: boolean;

  /**
   * @public
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
   *       Events.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * @public
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
   * @public
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update a filter.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;

  /**
   * @public
   * <p>The description of the filter. Valid characters include alphanumeric characters, and
   *       special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>,
   *         <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab,
   *       newline, form feed, return, and whitespace.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction;

  /**
   * @public
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * @public
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * @public
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackRequest {
  /**
   * @public
   * <p>The ID of the detector associated with the findings to update feedback for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * @public
   * <p>The feedback for the finding.</p>
   */
  Feedback: Feedback | undefined;

  /**
   * @public
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
   * @public
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  IpSetId: string | undefined;

  /**
   * @public
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated URI of the file that contains the IPSet. </p>
   */
  Location?: string;

  /**
   * @public
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
   * @public
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update scan settings.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * @public
   * <p>An enum value representing possible snapshot preservation settings.</p>
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
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
   * @public
   * <p>Name of the additional configuration.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * @public
   * <p>Status of the additional configuration.</p>
   */
  Status?: FeatureStatus;
}

/**
 * @public
 * <p>Contains information about the features for the member account.</p>
 */
export interface MemberFeaturesConfiguration {
  /**
   * @public
   * <p>The name of the feature.</p>
   */
  Name?: OrgFeature;

  /**
   * @public
   * <p>The status of the feature.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>Additional configuration of the feature for the member account.</p>
   */
  AdditionalConfiguration?: MemberAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * @public
   * <p>The detector ID of the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of member account IDs to be updated.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * @public
   * <p>A list of features that will be updated for the specified member accounts.</p>
   */
  Features?: MemberFeaturesConfiguration[];
}

/**
 * @public
 */
export interface UpdateMemberDetectorsResponse {
  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>Describes whether S3 data event logs are enabled for new members of the
   *       organization.</p>
   */
  S3Logs?: OrganizationS3LogsConfiguration;

  /**
   * @public
   * <p>Describes the configuration of Kubernetes data sources for new members of the
   *       organization.</p>
   */
  Kubernetes?: OrganizationKubernetesConfiguration;

  /**
   * @public
   * <p>Describes the configuration of Malware Protection for new members of the
   *       organization.</p>
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}

/**
 * @public
 * <p>A list of additional configurations which will be configured for the organization. </p>
 */
export interface OrganizationAdditionalConfiguration {
  /**
   * @public
   * <p>The name of the additional configuration that will be configured for the
   *       organization.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * @public
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
   */
  AutoEnable?: OrgFeatureStatus;
}

/**
 * @public
 * <p>A list of features which will be configured for the organization.</p>
 */
export interface OrganizationFeatureConfiguration {
  /**
   * @public
   * <p>The name of the feature that will be configured for the organization.</p>
   */
  Name?: OrgFeature;

  /**
   * @public
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
   */
  AutoEnable?: OrgFeatureStatus;

  /**
   * @public
   * <p>The additional information that will be configured for the organization.</p>
   */
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[];
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the detector that configures the delegated administrator.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Represents whether or not to automatically enable member accounts in the organization.</p>
   *          <p>Even though this is still supported, we recommend using
   *    <code>AutoEnableOrganizationMembers</code> to achieve the similar results. You must provide a
   *     value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>.</p>
   */
  AutoEnable?: boolean;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: OrganizationDataSourceConfigurations;

  /**
   * @public
   * <p>A list of features that will be configured for the organization.</p>
   */
  Features?: OrganizationFeatureConfiguration[];

  /**
   * @public
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
   *             </li>
   *          </ul>
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
   * @public
   * <p>The ID of the detector associated with the publishing destinations to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the publishing destination to update.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
   *       update.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  ThreatIntelSetId: string | undefined;

  /**
   * @public
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   */
  Activate?: boolean;
}

/**
 * @public
 */
export interface UpdateThreatIntelSetResponse {}
