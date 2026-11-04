// smithy-typescript generated code
import type {
  DatasourcePackage,
  DatasourcePackageIngestState,
  EntityType,
  Field,
  IndicatorType,
  InvitationType,
  MemberDisabledReason,
  MemberStatus,
  Reason,
  Severity,
  SortOrder,
  State,
  Status,
} from "./enums";

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * The ARN of the behavior graph that the member account is accepting the invitation for.
   *
   * The member account status in the behavior graph must be `INVITED`.
   *
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * An Amazon Web Services account that is the administrator account of or a member of a behavior graph.
 *
 * @public
 */
export interface Account {
  /**
   * The account identifier of the Amazon Web Services account.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The Amazon Web Services account root user email address for the Amazon Web Services account.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * Information about the Detective administrator account for an organization.
 *
 * @public
 */
export interface Administrator {
  /**
   * The Amazon Web Services account identifier of the Detective administrator account for the organization.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ARN of the organization behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * The date and time when the Detective administrator account was enabled. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  DelegationTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The list of Amazon Web Services accounts to get data source package information on.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * Details on when data collection began for a source package.
 *
 * @public
 */
export interface TimestampForCollection {
  /**
   * The data and time when data collection began for a source package. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Details on data source packages for members of the behavior graph.
 *
 * @public
 */
export interface MembershipDatasources {
  /**
   * The account identifier of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ARN of the organization behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * Details on when a data source package was added to a behavior graph.
   *
   * @public
   */
  DatasourcePackageIngestHistory?: Partial<Record<DatasourcePackage, Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>>> | undefined;
}

/**
 * A member account that was included in a request but for which the request could not be processed.
 *
 * @public
 */
export interface UnprocessedAccount {
  /**
   * The Amazon Web Services account identifier of the member account that was not processed.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The reason that the member account request could not be processed.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesResponse {
  /**
   * Details on the status of data source packages for members of the behavior graph.
   *
   * @public
   */
  MemberDatasources?: MembershipDatasources[] | undefined;

  /**
   * Accounts that data source package information could not be retrieved for.
   *
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArns: string[] | undefined;
}

/**
 * Behavior graphs that could not be processed in the request.
 *
 * @public
 */
export interface UnprocessedGraph {
  /**
   * The ARN of the organization behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * The reason data source package information could not be processed for a behavior graph.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesResponse {
  /**
   * Details on the data source package history for an member of the behavior graph.
   *
   * @public
   */
  MembershipDatasources?: MembershipDatasources[] | undefined;

  /**
   * Graphs that data source package information could not be retrieved for.
   *
   * @public
   */
  UnprocessedGraphs?: UnprocessedGraph[] | undefined;
}

/**
 * @public
 */
export interface CreateGraphRequest {
  /**
   * The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGraphResponse {
  /**
   * The ARN of the new behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * Customized message text to include in the invitation email message to the invited member accounts.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * if set to `true`, then the invited accounts do not receive email notifications. By default, this is set to `false`, and the invited accounts receive email notifications.
   *
   * Organization accounts in the organization behavior graph do not receive email notifications.
   *
   * @public
   */
  DisableEmailNotification?: boolean | undefined;

  /**
   * The list of Amazon Web Services accounts to invite or to enable. You can invite or enable up to 50 accounts at a time. For each invited account, the account list contains the account identifier and the Amazon Web Services account root user email address. For organization accounts in the organization behavior graph, the email address is not required.
   *
   * @public
   */
  Accounts: Account[] | undefined;
}

/**
 * Information on the usage of a data source package in the behavior graph.
 *
 * @public
 */
export interface DatasourcePackageUsageInfo {
  /**
   * Total volume of data in bytes per day ingested for a given data source package.
   *
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * The data and time when the member account data volume was last updated. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  VolumeUsageUpdateTime?: Date | undefined;
}

/**
 * Details about a member account in a behavior graph.
 *
 * @public
 */
export interface MemberDetail {
  /**
   * The Amazon Web Services account identifier for the member account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Web Services account root user email address for the member account.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * The Amazon Web Services account identifier of the administrator account for the behavior graph.
   *
   * @deprecated This property is deprecated. Use AdministratorId instead.
   * @public
   */
  MasterId?: string | undefined;

  /**
   * The Amazon Web Services account identifier of the administrator account for the behavior graph.
   *
   * @public
   */
  AdministratorId?: string | undefined;

  /**
   * The current membership status of the member account. The status can have one of the following values:
   *
   * - `INVITED` - For invited accounts only. Indicates that the member was sent an invitation but has not yet responded.
   * - `VERIFICATION_IN_PROGRESS` - For invited accounts only, indicates that Detective is verifying that the account identifier and email address provided for the member account match. If they do match, then Detective sends the invitation. If the email address and account identifier don't match, then the member cannot be added to the behavior graph.
   *
   *   For organization accounts in the organization behavior graph, indicates that Detective is verifying that the account belongs to the organization.
   * - `VERIFICATION_FAILED` - For invited accounts only. Indicates that the account and email address provided for the member account do not match, and Detective did not send an invitation to the account.
   * - `ENABLED` - Indicates that the member account currently contributes data to the behavior graph. For invited accounts, the member account accepted the invitation. For organization accounts in the organization behavior graph, the Detective administrator account enabled the organization account as a member account.
   * - `ACCEPTED_BUT_DISABLED` - The account accepted the invitation, or was enabled by the Detective administrator account, but is prevented from contributing data to the behavior graph. `DisabledReason` provides the reason why the member account is not enabled.
   *
   * Invited accounts that declined an invitation or that were removed from the behavior graph are not included. In the organization behavior graph, organization accounts that the Detective administrator account did not enable are not included.
   *
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * For member accounts with a status of `ACCEPTED_BUT_DISABLED`, the reason that the member account is not enabled.
   *
   * The reason can have one of the following values:
   *
   * - `VOLUME_TOO_HIGH` - Indicates that adding the member account would cause the data volume for the behavior graph to be too high.
   * - `VOLUME_UNKNOWN` - Indicates that Detective is unable to verify the data volume for the member account. This is usually because the member account is not enrolled in Amazon GuardDuty.
   *
   * @public
   */
  DisabledReason?: MemberDisabledReason | undefined;

  /**
   * For invited accounts, the date and time that Detective sent the invitation to the account. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  InvitedTime?: Date | undefined;

  /**
   * The date and time that the member account was last updated. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * The data volume in bytes per day for the member account.
   *
   * @deprecated This property is deprecated. Use VolumeUsageByDatasourcePackage instead.
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * The data and time when the member account data volume was last updated. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @deprecated This property is deprecated. Use VolumeUsageByDatasourcePackage instead.
   * @public
   */
  VolumeUsageUpdatedTime?: Date | undefined;

  /**
   * The member account data volume as a percentage of the maximum allowed data volume. 0 indicates 0 percent, and 100 indicates 100 percent.
   *
   * Note that this is not the percentage of the behavior graph data volume.
   *
   * For example, the data volume for the behavior graph is 80 GB per day. The maximum data volume is 160 GB per day. If the data volume for the member account is 40 GB per day, then `PercentOfGraphUtilization` is 25. It represents 25% of the maximum allowed data volume.
   *
   * @deprecated This property is deprecated. Use VolumeUsageByDatasourcePackage instead.
   * @public
   */
  PercentOfGraphUtilization?: number | undefined;

  /**
   * The date and time when the graph utilization percentage was last updated. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @deprecated This property is deprecated. Use VolumeUsageByDatasourcePackage instead.
   * @public
   */
  PercentOfGraphUtilizationUpdatedTime?: Date | undefined;

  /**
   * The type of behavior graph membership.
   *
   * For an organization account in the organization behavior graph, the type is `ORGANIZATION`.
   *
   * For an account that was invited to a behavior graph, the type is `INVITATION`.
   *
   * @public
   */
  InvitationType?: InvitationType | undefined;

  /**
   * Details on the volume of usage for each data source package in a behavior graph.
   *
   * @public
   */
  VolumeUsageByDatasourcePackage?: Partial<Record<DatasourcePackage, DatasourcePackageUsageInfo>> | undefined;

  /**
   * The state of a data source package for the behavior graph.
   *
   * @public
   */
  DatasourcePackageIngestStates?: Partial<Record<DatasourcePackage, DatasourcePackageIngestState>> | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * The set of member account invitation or enablement requests that Detective was able to process. This includes accounts that are being verified, that failed verification, and that passed verification and are being sent an invitation or are being enabled.
   *
   * @public
   */
  Members?: MemberDetail[] | undefined;

  /**
   * The list of accounts for which Detective was unable to process the invitation or enablement request. For each account, the list provides the reason why the request could not be processed. The list includes accounts that are already member accounts in the behavior graph.
   *
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteGraphRequest {
  /**
   * The ARN of the behavior graph to disable.
   *
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * The ARN of the behavior graph to remove members from.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The list of Amazon Web Services account identifiers for the member accounts to remove from the behavior graph. You can remove up to 50 member accounts at a time.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * The list of Amazon Web Services account identifiers for the member accounts that Detective successfully removed from the behavior graph.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The list of member accounts that Detective was not able to remove from the behavior graph. For each member account, provides the reason that the deletion could not be processed.
   *
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * The ARN of the organization behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
   *
   * @public
   */
  AutoEnable?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateMembershipRequest {
  /**
   * The ARN of the behavior graph to remove the member account from.
   *
   * The member account's member status in the behavior graph must be `ENABLED`.
   *
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationRequest {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationResponse {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN). Detective supports IAM user ARNs and IAM role ARNs.
   *
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * Type of entity. For example, Amazon Web Services accounts, such as an IAM user and/or IAM role.
   *
   * @public
   */
  EntityType?: EntityType | undefined;

  /**
   * The creation time of the investigation report in UTC time stamp format.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The start date and time used to set the scope time within which you want to generate the investigation report. The value is an UTC ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  ScopeStartTime?: Date | undefined;

  /**
   * The data and time when the investigation began. The value is an UTC ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  ScopeEndTime?: Date | undefined;

  /**
   * The status based on the completion status of the investigation.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The severity assigned is based on the likelihood and impact of the indicators of compromise discovered in the investigation.
   *
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * The current state of the investigation. An archived investigation indicates that you have completed reviewing the investigation.
   *
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * The ARN of the behavior graph for which to request the member details.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The list of Amazon Web Services account identifiers for the member account for which to return member details. You can request details for up to 50 member accounts at a time.
   *
   * You cannot use `GetMembers` to retrieve information about member accounts that were removed from the behavior graph.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * The member account details that Detective is returning in response to the request.
   *
   * @public
   */
  MemberDetails?: MemberDetail[] | undefined;

  /**
   * The requested member accounts for which Detective was unable to return member details.
   *
   * For each account, provides the reason why the request could not be processed.
   *
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface ListDatasourcePackagesRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details about the data source packages ingested by your behavior graph.
 *
 * @public
 */
export interface DatasourcePackageIngestDetail {
  /**
   * Details on which data source packages are ingested for a member account.
   *
   * @public
   */
  DatasourcePackageIngestState?: DatasourcePackageIngestState | undefined;

  /**
   * The date a data source package was enabled for this account
   *
   * @public
   */
  LastIngestStateChange?: Partial<Record<DatasourcePackageIngestState, TimestampForCollection>> | undefined;
}

/**
 * @public
 */
export interface ListDatasourcePackagesResponse {
  /**
   * Details on the data source packages active in the behavior graph.
   *
   * @public
   */
  DatasourcePackages?: Partial<Record<DatasourcePackage, DatasourcePackageIngestDetail>> | undefined;

  /**
   * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphsRequest {
  /**
   * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A behavior graph in Detective.
 *
 * @public
 */
export interface Graph {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time that the behavior graph was created. The value is an ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListGraphsResponse {
  /**
   * A list of behavior graphs that the account is an administrator account for.
   *
   * @public
   */
  GraphList?: Graph[] | undefined;

  /**
   * If there are more behavior graphs remaining in the results, then this is the pagination token to use to request the next page of behavior graphs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndicatorsRequest {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * For the list of indicators of compromise that are generated by Detective investigations, see [Detective investigations](https://docs.aws.amazon.com/detective/latest/userguide/detective-investigation-about.html).
   *
   * @public
   */
  IndicatorType?: IndicatorType | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists the maximum number of indicators in a page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information on suspicious IP addresses identified as indicators of compromise. This indicator is derived from Amazon Web Services threat intelligence.
 *
 * @public
 */
export interface FlaggedIpAddressDetail {
  /**
   * IP address of the suspicious entity.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Details the reason the IP address was flagged as suspicious.
   *
   * @public
   */
  Reason?: Reason | undefined;
}

/**
 * Contains information on unusual and impossible travel in an account.
 *
 * @public
 */
export interface ImpossibleTravelDetail {
  /**
   * IP address where the resource was first used in the impossible travel.
   *
   * @public
   */
  StartingIpAddress?: string | undefined;

  /**
   * IP address where the resource was last used in the impossible travel.
   *
   * @public
   */
  EndingIpAddress?: string | undefined;

  /**
   * Location where the resource was first used in the impossible travel.
   *
   * @public
   */
  StartingLocation?: string | undefined;

  /**
   * Location where the resource was last used in the impossible travel.
   *
   * @public
   */
  EndingLocation?: string | undefined;

  /**
   * Returns the time difference between the first and last timestamp the resource was used.
   *
   * @public
   */
  HourlyTimeDelta?: number | undefined;
}

/**
 * Details new Autonomous System Organizations (ASOs) used either at the resource or account level.
 *
 * @public
 */
export interface NewAsoDetail {
  /**
   * Details about the new Autonomous System Organization (ASO).
   *
   * @public
   */
  Aso?: string | undefined;

  /**
   * Checks if the Autonomous System Organization (ASO) is new for the entire account.
   *
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * Details new geolocations used either at the resource or account level. For example, lists an observed geolocation that is an infrequent or unused location based on previous user activity.
 *
 * @public
 */
export interface NewGeolocationDetail {
  /**
   * Location where the resource was accessed.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * IP address using which the resource was accessed.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Checks if the geolocation is new for the entire account.
   *
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * Details new user agents used either at the resource or account level.
 *
 * @public
 */
export interface NewUserAgentDetail {
  /**
   * New user agent which accessed the resource.
   *
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * Checks if the user agent is new for the entire account.
   *
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * Details related activities associated with a potential security event. Lists all distinct categories of evidence that are connected to the resource or the finding group.
 *
 * @public
 */
export interface RelatedFindingDetail {
  /**
   * The Amazon Resource Name (ARN) of the related finding.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of finding.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The IP address of the finding.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * Details multiple activities as they related to a potential security event. Detective uses graph analysis technique that infers relationships between findings and entities, and groups them together as a finding group.
 *
 * @public
 */
export interface RelatedFindingGroupDetail {
  /**
   * The unique identifier for the finding group.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Details tactics, techniques, and procedures (TTPs) used in a potential security event. Tactics are based on [MITRE ATT&CK Matrix for Enterprise](https://attack.mitre.org/matrices/enterprise/).
 *
 * @public
 */
export interface TTPsObservedDetail {
  /**
   * The tactic used, identified by the investigation.
   *
   * @public
   */
  Tactic?: string | undefined;

  /**
   * The technique used, identified by the investigation.
   *
   * @public
   */
  Technique?: string | undefined;

  /**
   * The procedure used, identified by the investigation.
   *
   * @public
   */
  Procedure?: string | undefined;

  /**
   * The IP address where the tactics, techniques, and procedure (TTP) was observed.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The name of the API where the tactics, techniques, and procedure (TTP) was observed.
   *
   * @public
   */
  APIName?: string | undefined;

  /**
   * The total number of successful API requests.
   *
   * @public
   */
  APISuccessCount?: number | undefined;

  /**
   * The total number of failed API requests.
   *
   * @public
   */
  APIFailureCount?: number | undefined;
}

/**
 * Details about the indicators of compromise which are used to determine if a resource is involved in a security incident. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. For the list of indicators of compromise that are generated by Detective investigations, see [Detective investigations](https://docs.aws.amazon.com/detective/latest/userguide/detective-investigation-about.html).
 *
 * @public
 */
export interface IndicatorDetail {
  /**
   * Details about the indicator of compromise.
   *
   * @public
   */
  TTPsObservedDetail?: TTPsObservedDetail | undefined;

  /**
   * Identifies unusual and impossible user activity for an account.
   *
   * @public
   */
  ImpossibleTravelDetail?: ImpossibleTravelDetail | undefined;

  /**
   * Suspicious IP addresses that are flagged, which indicates critical or severe threats based on threat intelligence by Detective. This indicator is derived from Amazon Web Services threat intelligence.
   *
   * @public
   */
  FlaggedIpAddressDetail?: FlaggedIpAddressDetail | undefined;

  /**
   * Contains details about the new geographic location.
   *
   * @public
   */
  NewGeolocationDetail?: NewGeolocationDetail | undefined;

  /**
   * Contains details about the new Autonomous System Organization (ASO).
   *
   * @public
   */
  NewAsoDetail?: NewAsoDetail | undefined;

  /**
   * Contains details about the new user agent.
   *
   * @public
   */
  NewUserAgentDetail?: NewUserAgentDetail | undefined;

  /**
   * Contains details about related findings.
   *
   * @public
   */
  RelatedFindingDetail?: RelatedFindingDetail | undefined;

  /**
   * Contains details about related finding groups.
   *
   * @public
   */
  RelatedFindingGroupDetail?: RelatedFindingGroupDetail | undefined;
}

/**
 * Detective investigations triages indicators of compromises such as a finding and surfaces only the most critical and suspicious issues, so you can focus on high-level investigations. An `Indicator` lets you determine if an Amazon Web Services resource is involved in unusual activity that could indicate malicious behavior and its impact.
 *
 * @public
 */
export interface Indicator {
  /**
   * The type of indicator.
   *
   * @public
   */
  IndicatorType?: IndicatorType | undefined;

  /**
   * Details about the indicators of compromise that are used to determine if a resource is involved in a security incident. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident.
   *
   * @public
   */
  IndicatorDetail?: IndicatorDetail | undefined;
}

/**
 * @public
 */
export interface ListIndicatorsResponse {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists the indicators of compromise.
   *
   * @public
   */
  Indicators?: Indicator[] | undefined;
}

/**
 * Contains details on the time range used to filter data.
 *
 * @public
 */
export interface DateFilter {
  /**
   * A timestamp representing the start of the time period from when data is filtered, including the start date.
   *
   * @public
   */
  StartInclusive: Date | undefined;

  /**
   * A timestamp representing the end date of the time period until when data is filtered, including the end date.
   *
   * @public
   */
  EndInclusive: Date | undefined;
}

/**
 * A string for filtering Detective investigations.
 *
 * @public
 */
export interface StringFilter {
  /**
   * The string filter value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Details on the criteria used to define the filter for investigation results.
 *
 * @public
 */
export interface FilterCriteria {
  /**
   * Filter the investigation results based on the severity.
   *
   * @public
   */
  Severity?: StringFilter | undefined;

  /**
   * Filter the investigation results based on the status.
   *
   * @public
   */
  Status?: StringFilter | undefined;

  /**
   * Filter the investigation results based on the state.
   *
   * @public
   */
  State?: StringFilter | undefined;

  /**
   * Filter the investigation results based on the Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  EntityArn?: StringFilter | undefined;

  /**
   * Filter the investigation results based on when the investigation was created.
   *
   * @public
   */
  CreatedTime?: DateFilter | undefined;
}

/**
 * Details about the criteria used for sorting investigations.
 *
 * @public
 */
export interface SortCriteria {
  /**
   * Represents the `Field` attribute to sort investigations.
   *
   * @public
   */
  Field?: Field | undefined;

  /**
   * The order by which the sorted findings are displayed.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists the maximum number of investigations in a page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the investigation results based on a criteria.
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * Sorts the investigation results based on a criteria.
   *
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * Details about the investigation related to a potential security event identified by Detective.
 *
 * @public
 */
export interface InvestigationDetail {
  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * Severity based on the likelihood and impact of the indicators of compromise discovered in the investigation.
   *
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * Status based on the completion status of the investigation.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The current state of the investigation. An archived investigation indicates you have completed reviewing the investigation.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * The time stamp of the creation time of the investigation report. The value is an UTC ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the IAM user and IAM role.
   *
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * Type of entity. For example, Amazon Web Services accounts, such as IAM user and role.
   *
   * @public
   */
  EntityType?: EntityType | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsResponse {
  /**
   * Lists the summary of uncommon behavior or malicious activity which indicates a compromise.
   *
   * @public
   */
  InvestigationDetails?: InvestigationDetail[] | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * The list of behavior graphs for which the member account has open or accepted invitations.
   *
   * @public
   */
  Invitations?: MemberDetail[] | undefined;

  /**
   * If there are more behavior graphs remaining in the results, then this is the pagination token to use to request the next page of behavior graphs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * The ARN of the behavior graph for which to retrieve the list of member accounts.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * The list of member accounts in the behavior graph.
   *
   * For invited accounts, the results include member accounts that did not pass verification and member accounts that have not yet accepted the invitation to the behavior graph. The results do not include member accounts that were removed from the behavior graph.
   *
   * For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.
   *
   * @public
   */
  MemberDetails?: MemberDetail[] | undefined;

  /**
   * If there are more member accounts remaining in the results, then use this pagination token to request the next page of member accounts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * The list of Detective administrator accounts.
   *
   * @public
   */
  Administrators?: Administrator[] | undefined;

  /**
   * If there are more accounts remaining in the results, then this is the pagination token to use to request the next page of accounts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the behavior graph for which to retrieve the tag values.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tag values that are assigned to the behavior graph. The request returns up to 50 tag values.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectInvitationRequest {
  /**
   * The ARN of the behavior graph to reject the invitation to.
   *
   * The member account's current member status in the behavior graph must be `INVITED`.
   *
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface StartInvestigationRequest {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the IAM user and IAM role.
   *
   * @public
   */
  EntityArn: string | undefined;

  /**
   * The data and time when the investigation began. The value is an UTC ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  ScopeStartTime: Date | undefined;

  /**
   * The data and time when the investigation ended. The value is an UTC ISO8601 formatted string. For example, `2021-08-18T16:35:56.284Z`.
   *
   * @public
   */
  ScopeEndTime: Date | undefined;
}

/**
 * @public
 */
export interface StartInvestigationResponse {
  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId?: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMemberRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The account ID of the member account to try to enable.
   *
   * The account must be an invited member account with a status of `ACCEPTED_BUT_DISABLED`.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the behavior graph to assign the tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.
   *
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
export interface UntagResourceRequest {
  /**
   * The ARN of the behavior graph to remove the tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags at a time.
   *
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
export interface UpdateDatasourcePackagesRequest {
  /**
   * The ARN of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The data source package to start for the behavior graph.
   *
   * @public
   */
  DatasourcePackages: DatasourcePackage[] | undefined;
}

/**
 * @public
 */
export interface UpdateInvestigationStateRequest {
  /**
   * The Amazon Resource Name (ARN) of the behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * The investigation ID of the investigation report.
   *
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * The current state of the investigation. An archived investigation indicates you have completed reviewing the investigation.
   *
   * @public
   */
  State: State | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * The ARN of the organization behavior graph.
   *
   * @public
   */
  GraphArn: string | undefined;

  /**
   * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
   *
   * @public
   */
  AutoEnable?: boolean | undefined;
}
