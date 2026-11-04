// smithy-typescript generated code
import type {
  ActorSessionMfaStatus,
  AdminStatus,
  AssociationType,
  AutomationRulesActionType,
  AutomationRulesActionTypeV2,
  ConfigurationPolicyAssociationStatus,
  DateRangeComparison,
  DateRangeUnit,
  FreeTrialStatusValue,
  FreeTrialType,
  MapFilterComparison,
  ResourceCriticality,
  RuleStatus,
  RuleStatusV2,
  SeverityLabel,
  StringFilterComparison,
  VerificationState,
  WorkflowStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptAdministratorInvitationRequest {
  /**
   * The account ID of the Security Hub CSPM administrator account that sent the invitation.
   *
   * @public
   */
  AdministratorId: string | undefined;

  /**
   * The identifier of the invitation sent from the Security Hub CSPM administrator account.
   *
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAdministratorInvitationResponse {}

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * The account ID of the Security Hub CSPM administrator account that sent the invitation.
   *
   * @public
   */
  MasterId: string | undefined;

  /**
   * The identifier of the invitation sent from the Security Hub CSPM administrator account.
   *
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * The details of an Amazon Web Services account.
 *
 * @public
 */
export interface AccountDetails {
  /**
   * The ID of an Amazon Web Services account.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The email of an Amazon Web Services account.
   *
   * @public
   */
  Email?: string | undefined;
}

/**
 * The free trial period for a Security Hub feature, and whether the trial is currently active.
 *
 * @public
 */
export interface FreeTrialStatus {
  /**
   * The feature that the free trial period applies to. Valid values:
   *
   * - `SECURITY_HUB_V2` specifies Security Hub.
   * - `SECURITY_HUB_V2_MULTI_CLOUD_AZURE` specifies Security Hub coverage for Microsoft Azure resources.
   *
   * @public
   */
  FeatureType: FreeTrialType | undefined;

  /**
   * Specifies whether the free trial period is currently active. Valid values:
   *
   * - `ACTIVE` specifies that the free trial period is ongoing.
   * - `INACTIVE` specifies that the free trial period has ended, or that it never started.
   *
   * To determine whether a trial has expired, compare `ExpiresAt` to the current time.
   *
   * @public
   */
  Status: FreeTrialStatusValue | undefined;

  /**
   * The date and time at which the free trial period began.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The date and time at which the free trial period ends.
   *
   * @public
   */
  ExpiresAt: Date | undefined;
}

/**
 * The free trial status of each Security Hub feature for an account.
 *
 * @public
 */
export interface AccountFreeTrialStatus {
  /**
   * The Amazon Web Services account identifier that the free trial statuses apply to.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The date and time at which Security Hub evaluated the free trial statuses for this account. Every status in `FreeTrialStatuses` reflects this point in time.
   *
   * @public
   */
  EvaluatedAt: Date | undefined;

  /**
   * An array of free trial statuses, one for each feature that has a free trial period for the account. The array is empty if the account has no free trial to report.
   *
   * @public
   */
  FreeTrialStatuses: FreeTrialStatus[] | undefined;
}

/**
 * Provided if `CallerType` is `domain`. It provides information about the DNS domain that issued the API call.
 *
 * @public
 */
export interface AwsApiCallActionDomainDetails {
  /**
   * The name of the DNS domain that issued the API call.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  Domain?: string | undefined;
}

/**
 * Information about a city.
 *
 * @public
 */
export interface City {
  /**
   * The name of the city.
   *
   * @public
   */
  CityName?: string | undefined;
}

/**
 * Information about a country.
 *
 * @public
 */
export interface Country {
  /**
   * The 2-letter ISO 3166 country code for the country.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The name of the country.
   *
   * @public
   */
  CountryName?: string | undefined;
}

/**
 * Provides the latitude and longitude coordinates of a location.
 *
 * @public
 */
export interface GeoLocation {
  /**
   * The longitude of the location.
   *
   * @public
   */
  Lon?: number | undefined;

  /**
   * The latitude of the location.
   *
   * @public
   */
  Lat?: number | undefined;
}

/**
 * Provides information about an internet provider.
 *
 * @public
 */
export interface IpOrganizationDetails {
  /**
   * The Autonomous System Number (ASN) of the internet provider
   *
   * @public
   */
  Asn?: number | undefined;

  /**
   * The name of the organization that registered the ASN.
   *
   * @public
   */
  AsnOrg?: string | undefined;

  /**
   * The ISP information for the internet provider.
   *
   * @public
   */
  Isp?: string | undefined;

  /**
   * The name of the internet provider.
   *
   * @public
   */
  Org?: string | undefined;
}

/**
 * For `AwsApiAction`, `NetworkConnectionAction`, and `PortProbeAction`, `RemoteIpDetails` provides information about the remote IP address that was involved in the action.
 *
 * @public
 */
export interface ActionRemoteIpDetails {
  /**
   * The IP address.
   *
   * @public
   */
  IpAddressV4?: string | undefined;

  /**
   * The internet service provider (ISP) organization associated with the remote IP address.
   *
   * @public
   */
  Organization?: IpOrganizationDetails | undefined;

  /**
   * The country where the remote IP address is located.
   *
   * @public
   */
  Country?: Country | undefined;

  /**
   * The city where the remote IP address is located.
   *
   * @public
   */
  City?: City | undefined;

  /**
   * The coordinates of the location of the remote IP address.
   *
   * @public
   */
  GeoLocation?: GeoLocation | undefined;
}

/**
 * Provided if `ActionType` is `AWS_API_CALL`. It provides details about the API call that was detected.
 *
 * @public
 */
export interface AwsApiCallAction {
  /**
   * The name of the API method that was issued.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  Api?: string | undefined;

  /**
   * The name of the Amazon Web Services service that the API method belongs to.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Indicates whether the API call originated from a remote IP address (`remoteip`) or from a DNS domain (`domain`).
   *
   * @public
   */
  CallerType?: string | undefined;

  /**
   * Provided if `CallerType` is `remoteip`. Provides information about the remote IP address that the API call originated from.
   *
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;

  /**
   * Provided if `CallerType` is `domain`. Provides information about the DNS domain that the API call originated from.
   *
   * @public
   */
  DomainDetails?: AwsApiCallActionDomainDetails | undefined;

  /**
   * Identifies the resources that were affected by the API call.
   *
   * @public
   */
  AffectedResources?: Record<string, string> | undefined;

  /**
   * A timestamp that indicates when the API call was first observed.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  FirstSeen?: string | undefined;

  /**
   * A timestamp that indicates when the API call was most recently observed.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastSeen?: string | undefined;
}

/**
 * Provided if `ActionType` is `DNS_REQUEST`. It provides details about the DNS request that was detected.
 *
 * @public
 */
export interface DnsRequestAction {
  /**
   * The DNS domain that is associated with the DNS request.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The protocol that was used for the DNS request.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 64.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Indicates whether the DNS request was blocked.
   *
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * For `NetworkConnectionAction` and `PortProbeDetails`, `LocalPortDetails` provides information about the local port that was involved in the action.
 *
 * @public
 */
export interface ActionLocalPortDetails {
  /**
   * The number of the port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port name of the local connection.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  PortName?: string | undefined;
}

/**
 * Provides information about the remote port that was involved in an attempted network connection.
 *
 * @public
 */
export interface ActionRemotePortDetails {
  /**
   * The number of the port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port name of the remote connection.
   *
   * Length Constraints: 128.
   *
   * @public
   */
  PortName?: string | undefined;
}

/**
 * Provided if `ActionType` is `NETWORK_CONNECTION`. It provides details about the attempted network connection that was detected.
 *
 * @public
 */
export interface NetworkConnectionAction {
  /**
   * The direction of the network connection request (`IN` or `OUT`).
   *
   * @public
   */
  ConnectionDirection?: string | undefined;

  /**
   * Information about the remote IP address that issued the network connection request.
   *
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;

  /**
   * Information about the port on the remote IP address.
   *
   * @public
   */
  RemotePortDetails?: ActionRemotePortDetails | undefined;

  /**
   * Information about the port on the EC2 instance.
   *
   * @public
   */
  LocalPortDetails?: ActionLocalPortDetails | undefined;

  /**
   * The protocol used to make the network connection request.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 64.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Indicates whether the network connection attempt was blocked.
   *
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * Provides information about the IP address where the scanned port is located.
 *
 * @public
 */
export interface ActionLocalIpDetails {
  /**
   * The IP address.
   *
   * @public
   */
  IpAddressV4?: string | undefined;
}

/**
 * A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
 *
 * @public
 */
export interface PortProbeDetail {
  /**
   * Provides information about the port that was scanned.
   *
   * @public
   */
  LocalPortDetails?: ActionLocalPortDetails | undefined;

  /**
   * Provides information about the IP address where the scanned port is located.
   *
   * @public
   */
  LocalIpDetails?: ActionLocalIpDetails | undefined;

  /**
   * Provides information about the remote IP address that performed the scan.
   *
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;
}

/**
 * Provided if `ActionType` is `PORT_PROBE`. It provides details about the attempted port probe that was detected.
 *
 * @public
 */
export interface PortProbeAction {
  /**
   * Information about the ports affected by the port probe.
   *
   * @public
   */
  PortProbeDetails?: PortProbeDetail[] | undefined;

  /**
   * Indicates whether the port probe was blocked.
   *
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * Provides details about one of the following actions that affects or that was taken on a resource:
 *
 * - A remote IP address issued an Amazon Web Services API call
 * - A DNS request was received
 * - A remote IP address attempted to connect to an EC2 instance
 * - A remote IP address attempted a port probe on an EC2 instance
 *
 * @public
 */
export interface Action {
  /**
   * The type of action that was detected. The possible action types are:
   *
   * - `NETWORK_CONNECTION`
   * - `AWS_API_CALL`
   * - `DNS_REQUEST`
   * - `PORT_PROBE`
   *
   * @public
   */
  ActionType?: string | undefined;

  /**
   * Included if `ActionType` is `NETWORK_CONNECTION`. Provides details about the network connection that was detected.
   *
   * @public
   */
  NetworkConnectionAction?: NetworkConnectionAction | undefined;

  /**
   * Included if `ActionType` is `AWS_API_CALL`. Provides details about the API call that was detected.
   *
   * @public
   */
  AwsApiCallAction?: AwsApiCallAction | undefined;

  /**
   * Included if `ActionType` is `DNS_REQUEST`. Provides details about the DNS request that was detected.
   *
   * @public
   */
  DnsRequestAction?: DnsRequestAction | undefined;

  /**
   * Included if `ActionType` is `PORT_PROBE`. Provides details about the port probe that was detected.
   *
   * @public
   */
  PortProbeAction?: PortProbeAction | undefined;
}

/**
 * The updated note.
 *
 * @public
 */
export interface NoteUpdate {
  /**
   * The updated note text.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The principal that updated the note.
   *
   * @public
   */
  UpdatedBy: string | undefined;
}

/**
 * Details about a related finding.
 *
 * @public
 */
export interface RelatedFinding {
  /**
   * The ARN of the product that generated a related finding.
   *
   * @public
   */
  ProductArn: string | undefined;

  /**
   * The product-generated identifier for a related finding.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Updates to the severity information for a finding.
 *
 * @public
 */
export interface SeverityUpdate {
  /**
   * The normalized severity for the finding. This attribute is to be deprecated in favor of `Label`.
   *
   * If you provide `Normalized` and don't provide `Label`, `Label` is set automatically as follows.
   *
   * - 0 - `INFORMATIONAL`
   * - 1–39 - `LOW`
   * - 40–69 - `MEDIUM`
   * - 70–89 - `HIGH`
   * - 90–100 - `CRITICAL`
   *
   * @public
   */
  Normalized?: number | undefined;

  /**
   * The native severity as defined by the Amazon Web Services service or integrated partner product that generated the finding.
   *
   * @public
   */
  Product?: number | undefined;

  /**
   * The severity value of the finding. The allowed values are the following.
   *
   * - `INFORMATIONAL` - No issue was found.
   * - `LOW` - The issue does not require action on its own.
   * - `MEDIUM` - The issue must be addressed but not urgently.
   * - `HIGH` - The issue must be addressed as a priority.
   * - `CRITICAL` - The issue must be remediated immediately to avoid it escalating.
   *
   * @public
   */
  Label?: SeverityLabel | undefined;
}

/**
 * Used to update information about the investigation into the finding.
 *
 * @public
 */
export interface WorkflowUpdate {
  /**
   * The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to `SUPPRESSED` or `RESOLVED` does not prevent a new finding for the same issue.
   *
   * The allowed values are the following.
   *
   * - `NEW` - The initial state of a finding, before it is reviewed.
   *
   *   Security Hub CSPM also resets `WorkFlowStatus` from `NOTIFIED` or `RESOLVED` to `NEW` in the following cases:
   *
   *   - The record state changes from `ARCHIVED` to `ACTIVE`.
   *   - The compliance status changes from `PASSED` to either `WARNING`, `FAILED`, or `NOT_AVAILABLE`.
   * - `NOTIFIED` - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
   * - `RESOLVED` - The finding was reviewed and remediated and is now considered resolved.
   * - `SUPPRESSED` - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.
   *
   * @public
   */
  Status?: WorkflowStatus | undefined;
}

/**
 * Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
 *
 * @public
 */
export interface AutomationRulesFindingFieldsUpdate {
  /**
   * The updated note.
   *
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * Updates to the severity information for a finding.
   *
   * @public
   */
  Severity?: SeverityUpdate | undefined;

  /**
   * The rule action updates the `VerificationState` field of a finding.
   *
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * The rule action updates the `Confidence` field of a finding.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The rule action updates the `Criticality` field of a finding.
   *
   * @public
   */
  Criticality?: number | undefined;

  /**
   * The rule action updates the `Types` field of a finding.
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * The rule action updates the `UserDefinedFields` field of a finding.
   *
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * Used to update information about the investigation into the finding.
   *
   * @public
   */
  Workflow?: WorkflowUpdate | undefined;

  /**
   * The rule action updates the `RelatedFindings` field of a finding.
   *
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;
}

/**
 * One or more actions that Security Hub CSPM takes when a finding matches the defined criteria of a rule.
 *
 * @public
 */
export interface AutomationRulesAction {
  /**
   * Specifies the type of action that Security Hub CSPM takes when a finding matches the defined criteria of a rule.
   *
   * @public
   */
  Type?: AutomationRulesActionType | undefined;

  /**
   * Specifies that the automation rule action is an update to a finding field.
   *
   * @public
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate | undefined;
}

/**
 * An `ActionTarget` object.
 *
 * @public
 */
export interface ActionTarget {
  /**
   * The ARN for the target action.
   *
   * @public
   */
  ActionTargetArn: string | undefined;

  /**
   * The name of the action target.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the target action.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * Contains information about the authenticated session used by the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface ActorSession {
  /**
   * Unique identifier of the session.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * Indicates whether multi-factor authentication (MFA) was used for authentication during the session.
   *
   * In CloudTrail, you can find this value as `userIdentity.sessionContext.attributes.mfaAuthenticated`.
   *
   * @public
   */
  MfaStatus?: ActorSessionMfaStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * In CloudTrail, you can find this value as `userIdentity.sessionContext.attributes.creationDate`.
   *
   * @public
   */
  CreatedTime?: number | undefined;

  /**
   * The issuer of the session.
   *
   * In CloudTrail, you can find this value as `userIdentity.sessionContext.sessionIssuer.arn`.
   *
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * Provides Amazon Web Services account information of the user involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface UserAccount {
  /**
   * The unique identifier of the user account involved in the attack sequence.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * The name of the user account involved in the attack sequence.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains information about the credentials used by the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface ActorUser {
  /**
   * The name of the threat actor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the threat actor.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * The type of user.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Unique identifier of the threat actor’s user credentials.
   *
   * @public
   */
  CredentialUid?: string | undefined;

  /**
   * The account of the threat actor.
   *
   * @public
   */
  Account?: UserAccount | undefined;
}

/**
 * Information about the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see [GuardDuty Extended Threat Detection](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html) in the *Amazon GuardDuty User Guide*.
 *
 * @public
 */
export interface Actor {
  /**
   * The ID of the threat actor.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Contains information about the user credentials used by the threat actor.
   *
   * @public
   */
  User?: ActorUser | undefined;

  /**
   * Contains information about the user session where the activity initiated.
   *
   * @public
   */
  Session?: ActorSession | undefined;
}

/**
 * An adjustment to the CVSS metric.
 *
 * @public
 */
export interface Adjustment {
  /**
   * The metric to adjust.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The reason for the adjustment.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Represents a Security Hub CSPM administrator account designated by an organization management account.
 *
 * @public
 */
export interface AdminAccount {
  /**
   * The Amazon Web Services account identifier of the Security Hub CSPM administrator account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The current status of the Security Hub CSPM administrator account. Indicates whether the account is currently enabled as a Security Hub CSPM administrator.
   *
   * @public
   */
  Status?: AdminStatus | undefined;
}

/**
 * Specifies a cross-Region data aggregation configuration, including the aggregation Region and any linked Regions.
 *
 * @public
 */
export interface AggregatorV2 {
  /**
   * The ARN of the aggregatorV2.
   *
   * @public
   */
  AggregatorV2Arn?: string | undefined;
}

/**
 * Contains information about self-hosted AI resources and their host resources. The fields that are present depend on the role of the resource.
 *
 * On a self-hosted AI resource (a resource with a `SelfHosted::AI::` resource type, such as `SelfHosted::AI::Model` or `SelfHosted::AI::Agent`), the `HostResourceGuid` and `HostResourceType` fields link the resource to its host. The `CanonicalId` field identifies what the resource is, enabling aggregation of identical resources across multiple hosts.
 *
 * On a host resource (such as an Amazon EC2 instance), the `SelfHostedAI*ResourceCount` fields contain the count for each `ResourceSubCategory` and the total count of self-hosted AI resources detected on the host.
 *
 * @public
 */
export interface AIDetails {
  /**
   * The identifier of the host resource that hosts the self-hosted AI resource. Present only on self-hosted AI resources.
   *
   * @public
   */
  HostResourceGuid?: string | undefined;

  /**
   * The `ResourceType` of the host resource that hosts the self-hosted AI resource, such as `AWS::EC2::Instance`. Present only on self-hosted AI resources.
   *
   * @public
   */
  HostResourceType?: string | undefined;

  /**
   * The canonical identifier for the AI resource, independent of where it is deployed. Multiple occurrences of the same resource on different hosts share the same `CanonicalId`. For model resources, the value follows the format `model/<purl>`, such as `model/pkg:huggingface/meta-llama/llama-3-8b`. Present only on self-hosted AI resources.
   *
   * @public
   */
  CanonicalId?: string | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `Model` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIModelResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `Agent` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIAgentResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `ModelServing` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIModelServingResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `ExternalEndpoint` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIExternalEndpointResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `Development` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIDevelopmentResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `AgentFramework` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIAgentFrameworkResourceCount?: number | undefined;

  /**
   * The number of self-hosted AI resources of `ResourceSubCategory` `AgentToolsAndIdentity` detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedAIAgentToolsAndIdentityResourceCount?: number | undefined;

  /**
   * The total number of all self-hosted AI resources detected on the host resource. Present only on host resources.
   *
   * @public
   */
  SelfHostedTotalAIResourceCount?: number | undefined;
}

/**
 * Information about an enabled security standard in which a security control is enabled.
 *
 * @public
 */
export interface AssociatedStandard {
  /**
   * The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
   *
   * @public
   */
  StandardsId?: string | undefined;
}

/**
 * Options for filtering the `ListConfigurationPolicyAssociations` response. You can filter by the Amazon Resource Name (ARN) or universally unique identifier (UUID) of a configuration policy, `AssociationType`, or `AssociationStatus`.
 *
 * @public
 */
export interface AssociationFilters {
  /**
   * The ARN or UUID of the configuration policy.
   *
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * Indicates whether the association between a target and a configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent.
   *
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * The current status of the association between a target and a configuration policy.
   *
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;
}

/**
 * Describes the state of an association between a route table and a subnet or gateway.
 *
 * @public
 */
export interface AssociationStateDetails {
  /**
   * The state of the association.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The status message, if applicable.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * The associations between a route table and one or more subnets or a gateway.
 *
 * @public
 */
export interface AssociationSetDetails {
  /**
   * The state of the association between a route table and a subnet or gateway.
   *
   * @public
   */
  AssociationState?: AssociationStateDetails | undefined;

  /**
   * The ID of the internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * Indicates whether this is the main route table.
   *
   * @public
   */
  Main?: boolean | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  RouteTableAssociationId?: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The ID of the subnet. A subnet ID is not returned for an implicit association.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Defines the settings and parameters required for integrating external security tools and services.
 *
 * @public
 */
export interface ExternalIntegrationConfiguration {
  /**
   * The ARN of the connector that establishes the integration.
   *
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * Allows you to define the structure for modifying specific fields in security findings.
 *
 * @public
 */
export interface AutomationRulesFindingFieldsUpdateV2 {
  /**
   * The severity level to be assigned to findings that match the automation rule criteria.
   *
   * @public
   */
  SeverityId?: number | undefined;

  /**
   * Notes or contextual information for findings that are modified by the automation rule.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The status to be applied to findings that match automation rule criteria.
   *
   * @public
   */
  StatusId?: number | undefined;
}

/**
 * Allows you to define the structure for modifying specific fields of resources.
 *
 * @public
 */
export interface AutomationRulesResourceFieldsUpdateV2 {
  /**
   * The criticality level to be assigned to resources that match the automation rule criteria.
   *
   * @public
   */
  Criticality: ResourceCriticality | undefined;
}

/**
 * Allows you to configure automated responses.
 *
 * @public
 */
export interface AutomationRulesActionV2 {
  /**
   * The category of action to be executed by the automation rule.
   *
   * @public
   */
  Type: AutomationRulesActionTypeV2 | undefined;

  /**
   * The changes to be applied to fields in a security finding when an automation rule is triggered.
   *
   * @public
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2 | undefined;

  /**
   * The settings for integrating automation rule actions with external systems or service.
   *
   * @public
   */
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration | undefined;

  /**
   * The changes to be applied to resource fields when an automation rule is triggered.
   *
   * @public
   */
  ResourceFieldsUpdate?: AutomationRulesResourceFieldsUpdateV2 | undefined;
}

/**
 * Allows you to customize security response workflows.
 *
 * @public
 */
export interface AutomationRulesActionTypeObjectV2 {
  /**
   * The category of action to be executed by the automation rule.
   *
   * @public
   */
  Type?: AutomationRulesActionTypeV2 | undefined;
}

/**
 * A string filter for filtering Security Hub CSPM findings.
 *
 * @public
 */
export interface StringFilter {
  /**
   * The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is `Security Hub CSPM`. If you provide `security hub` as the filter value, there's no match.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The condition to apply to a string value when filtering Security Hub CSPM findings.
   *
   * To search for values that have the filter value, use one of the following comparison operators:
   *
   * - To search for values that include the filter value, use `CONTAINS`. For example, the filter `Title CONTAINS CloudFront` matches findings that have a `Title` that includes the string `CloudFront`.
   * - To search for values that contain a word matching the filter value, regardless of case, use `CONTAINS_WORD`. For example, the filter `Title CONTAINS_WORD lambda` matches a finding whose `Title` is `GuardDuty Lambda Protection`, because the `Title` contains the word Lambda. Including special characters in the filter value might produce unexpected search results.
   * - To search for values that exactly match the filter value, use `EQUALS`. For example, the filter `AwsAccountId EQUALS 123456789012` only matches findings that have an account ID of `123456789012`.
   * - To search for values that start with the filter value, use `PREFIX`. For example, the filter `ResourceRegion PREFIX us` matches findings that have a `ResourceRegion` that starts with `us`. A `ResourceRegion` that starts with a different value, such as `af`, `ap`, or `ca`, doesn't match.
   *
   * `CONTAINS`, `EQUALS`, and `PREFIX` filters on the same field are joined by `OR`. A finding matches if it matches any one of those filters. For example, the filters `Title CONTAINS CloudFront OR Title CONTAINS CloudWatch` match a finding that includes either `CloudFront`, `CloudWatch`, or both strings in the title.
   *
   * To search for values that don’t have the filter value, use one of the following comparison operators:
   *
   * - To search for values that exclude the filter value, use `NOT_CONTAINS`. For example, the filter `Title NOT_CONTAINS CloudFront` matches findings that have a `Title` that excludes the string CloudFront.
   * - To search for values other than the filter value, use `NOT_EQUALS`. For example, the filter `AwsAccountId NOT_EQUALS 123456789012` only matches findings that have an account ID other than `123456789012`.
   * - To search for values that don't start with the filter value, use `PREFIX_NOT_EQUALS`. For example, the filter `ResourceRegion PREFIX_NOT_EQUALS us` matches findings with a `ResourceRegion` that starts with a value other than `us`.
   *
   * `NOT_CONTAINS`, `NOT_EQUALS`, and `PREFIX_NOT_EQUALS` filters on the same field are joined by `AND`. A finding matches only if it matches all of those filters. For example, the filters `Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch` match a finding that excludes both `CloudFront` and `CloudWatch` in the title.
   *
   * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can't provide both an `EQUALS` filter and a `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filter on the same field. Combining filters in this way returns an error. `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
   *
   * You can combine `PREFIX` filters with `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters for the same field. Security Hub CSPM first processes the `PREFIX` filters, and then the `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters.
   *
   * For example, for the following filters, Security Hub CSPM first identifies findings that have resource types that start with either `AwsIam` or `AwsEc2`. It then excludes findings that have a resource type of `AwsIamPolicy` and findings that have a resource type of `AwsEc2NetworkInterface`.
   *
   * - `ResourceType PREFIX AwsIam`
   * - `ResourceType PREFIX AwsEc2`
   * - `ResourceType NOT_EQUALS AwsIamPolicy`
   * - `ResourceType NOT_EQUALS AwsEc2NetworkInterface`
   *
   * The `CONTAINS` operator works with automation rules V1 and V2. The `NOT_CONTAINS` operator works only with automation rules V1. The `CONTAINS_WORD` operator works only in the `GetFindingsV2`, `GetFindingStatisticsV2`, `GetResourcesV2`, and `GetResourcesStatisticsV2` APIs. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *Security Hub CSPM User Guide*.
   *
   * @public
   */
  Comparison?: StringFilterComparison | undefined;
}

/**
 * A number filter for querying findings.
 *
 * @public
 */
export interface NumberFilter {
  /**
   * The greater-than-equal condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  Gte?: number | undefined;

  /**
   * The less-than-equal condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  Lte?: number | undefined;

  /**
   * The equal-to condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  Eq?: number | undefined;

  /**
   * The greater-than condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  Gt?: number | undefined;

  /**
   * The less-than condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  Lt?: number | undefined;
}

/**
 * A date range for the date filter.
 *
 * @public
 */
export interface DateRange {
  /**
   * A date range value for the date filter.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * A date range unit for the date filter.
   *
   * @public
   */
  Unit?: DateRangeUnit | undefined;

  /**
   * The condition to apply to a date range filter. If you specify `WITHIN`, Security Hub filters for dates within the specified date range. If you specify `OLDER_THAN`, Security Hub filters for dates before the specified date range. If you don't specify a value, the default is `WITHIN`.
   *
   * @public
   */
  Comparison?: DateRangeComparison | undefined;
}

/**
 * A date filter for querying findings.
 *
 * @public
 */
export interface DateFilter {
  /**
   * A timestamp that provides the start date for the date filter.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  Start?: string | undefined;

  /**
   * A timestamp that provides the end date for the date filter.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  End?: string | undefined;

  /**
   * A date range for the date filter.
   *
   * @public
   */
  DateRange?: DateRange | undefined;
}

/**
 * A map filter for filtering Security Hub CSPM findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
 *
 * @public
 */
export interface MapFilter {
  /**
   * The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called `Department` might be `Security`. If you provide `security` as the filter value, then there's no match.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The condition to apply to the key value when filtering Security Hub CSPM findings with a map filter.
   *
   * To search for values that have the filter value, use one of the following comparison operators:
   *
   * - To search for values that include the filter value, use `CONTAINS`. For example, for the `ResourceTags` field, the filter `Department CONTAINS Security` matches findings that include the value `Security` for the `Department` tag. In the same example, a finding with a value of `Security team` for the `Department` tag is a match.
   * - To search for values that exactly match the filter value, use `EQUALS`. For example, for the `ResourceTags` field, the filter `Department EQUALS Security` matches findings that have the value `Security` for the `Department` tag.
   *
   * `CONTAINS` and `EQUALS` filters on the same field are joined by `OR`. A finding matches if it matches any one of those filters. For example, the filters `Department CONTAINS Security OR Department CONTAINS Finance` match a finding that includes either `Security`, `Finance`, or both values.
   *
   * To search for values that don't have the filter value, use one of the following comparison operators:
   *
   * - To search for values that exclude the filter value, use `NOT_CONTAINS`. For example, for the `ResourceTags` field, the filter `Department NOT_CONTAINS Finance` matches findings that exclude the value `Finance` for the `Department` tag.
   * - To search for values other than the filter value, use `NOT_EQUALS`. For example, for the `ResourceTags` field, the filter `Department NOT_EQUALS Finance` matches findings that don’t have the value `Finance` for the `Department` tag.
   *
   * `NOT_CONTAINS` and `NOT_EQUALS` filters on the same field are joined by `AND`. A finding matches only if it matches all of those filters. For example, the filters `Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance` match a finding that excludes both the `Security` and `Finance` values.
   *
   * `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
   *
   * You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can’t have both an `EQUALS` filter and a `NOT_EQUALS` filter on the same field. Combining filters in this way returns an error.
   *
   * `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *Security Hub CSPM User Guide*.
   *
   * @public
   */
  Comparison?: MapFilterComparison | undefined;
}

/**
 * The criteria that determine which findings a rule applies to.
 *
 * @public
 */
export interface AutomationRulesFindingFilters {
  /**
   * The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub CSPM.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ProductArn?: StringFilter[] | undefined;

  /**
   * The Amazon Web Services account ID in which a finding was generated.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *
   * @public
   */
  AwsAccountId?: StringFilter[] | undefined;

  /**
   * The product-specific identifier for a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  Id?: StringFilter[] | undefined;

  /**
   * The identifier for the solution-specific component that generated a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *
   * @public
   */
  GeneratorId?: StringFilter[] | undefined;

  /**
   * One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the *Security Hub CSPM User Guide*.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  Type?: StringFilter[] | undefined;

  /**
   * A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  FirstObservedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  LastObservedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when this finding record was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  CreatedAt?: DateFilter[] | undefined;

  /**
   * A timestamp that indicates when the finding record was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  UpdatedAt?: DateFilter[] | undefined;

  /**
   * The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. `Confidence` is scored on a 0–100 basis using a ratio scale. A value of `0` means 0 percent confidence, and a value of `100` means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see [Confidence](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the *Security Hub CSPM User Guide*.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  Confidence?: NumberFilter[] | undefined;

  /**
   * The level of importance that is assigned to the resources that are associated with a finding. `Criticality` is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of `0` means that the underlying resources have no criticality, and a score of `100` is reserved for the most critical resources. For more information, see [Criticality](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the *Security Hub CSPM User Guide*.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  Criticality?: NumberFilter[] | undefined;

  /**
   * A finding's title.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *
   * @public
   */
  Title?: StringFilter[] | undefined;

  /**
   * A finding's description.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  Description?: StringFilter[] | undefined;

  /**
   * Provides a URL that links to a page about the current finding in the finding product.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  SourceUrl?: StringFilter[] | undefined;

  /**
   * Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub CSPM.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ProductName?: StringFilter[] | undefined;

  /**
   * The name of the company for the product that generated the finding. For control-based findings, the company is Amazon Web Services.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  CompanyName?: StringFilter[] | undefined;

  /**
   * The severity value of the finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  SeverityLabel?: StringFilter[] | undefined;

  /**
   * The type of resource that the finding pertains to.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceType?: StringFilter[] | undefined;

  /**
   * The identifier for the given resource type. For Amazon Web Services resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For Amazon Web Services resources that lack ARNs, this is the identifier as defined by the Amazon Web Services service that created the resource. For non-Amazon Web Services resources, this is a unique identifier that is associated with the resource.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *
   * @public
   */
  ResourceId?: StringFilter[] | undefined;

  /**
   * The partition in which the resource that the finding pertains to is located. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourcePartition?: StringFilter[] | undefined;

  /**
   * The Amazon Web Services Region where the resource that a finding pertains to is located.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceRegion?: StringFilter[] | undefined;

  /**
   * A list of Amazon Web Services tags associated with a resource at the time the finding was processed.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceTags?: MapFilter[] | undefined;

  /**
   * Custom fields and values about the resource that a finding pertains to.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceDetailsOther?: MapFilter[] | undefined;

  /**
   * The result of a security check. This field is only used for findings generated from controls.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ComplianceStatus?: StringFilter[] | undefined;

  /**
   * The security control ID for which a finding was generated. Security control IDs are the same across standards.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ComplianceSecurityControlId?: StringFilter[] | undefined;

  /**
   * The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ComplianceAssociatedStandardsId?: StringFilter[] | undefined;

  /**
   * Provides the veracity of a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  VerificationState?: StringFilter[] | undefined;

  /**
   * Provides information about the status of the investigation into a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  WorkflowStatus?: StringFilter[] | undefined;

  /**
   * Provides the current state of a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  RecordState?: StringFilter[] | undefined;

  /**
   * The ARN for the product that generated a related finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  RelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * The product-generated identifier for a related finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  RelatedFindingsId?: StringFilter[] | undefined;

  /**
   * The text of a user-defined note that's added to a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  NoteText?: StringFilter[] | undefined;

  /**
   * The timestamp of when the note was updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  NoteUpdatedAt?: DateFilter[] | undefined;

  /**
   * The principal that created a note.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  NoteUpdatedBy?: StringFilter[] | undefined;

  /**
   * A list of user-defined name and value string pairs added to a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  UserDefinedFields?: MapFilter[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application that is related to a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceApplicationArn?: StringFilter[] | undefined;

  /**
   * The name of the application that is related to a finding.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  ResourceApplicationName?: StringFilter[] | undefined;

  /**
   * The name of the Amazon Web Services account in which a finding was generated.
   *
   * Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *
   * @public
   */
  AwsAccountName?: StringFilter[] | undefined;

  /**
   * The cloud provider that the resource belongs to. Valid values are `AWS` and `Azure`.
   *
   * @public
   */
  ResourceProvider?: StringFilter[] | undefined;

  /**
   * The unique identifier of the account that owns the resource that the finding applies to, for example, Azure Subscription Id or Amazon Web Services Account Id
   *
   * @public
   */
  ResourceOwnerAccountId?: StringFilter[] | undefined;

  /**
   * The unique identifier of the organization that owns the resource that the finding applies to, for example, Azure Tenant Id
   *
   * @public
   */
  ResourceOwnerOrgId?: StringFilter[] | undefined;
}

/**
 * Defines the configuration of an automation rule.
 *
 * @public
 */
export interface AutomationRulesConfig {
  /**
   * The Amazon Resource Name (ARN) of a rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * Whether the rule is active after it is created. If this parameter is equal to `ENABLED`, Security Hub CSPM starts applying the rule to findings and finding updates after the rule is created.
   *
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub CSPM applies rules with lower values for this parameter first.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub CSPM applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * A set of [Amazon Web Services Security Finding Format](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that Security Hub CSPM uses to filter findings. If a rule is enabled and a finding matches the conditions specified in this parameter, Security Hub CSPM applies the rule action to the finding.
   *
   * @public
   */
  Criteria?: AutomationRulesFindingFilters | undefined;

  /**
   * One or more actions to update finding fields if a finding matches the defined criteria of the rule.
   *
   * @public
   */
  Actions?: AutomationRulesAction[] | undefined;

  /**
   * A timestamp that indicates when the rule was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when the rule was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The principal that created a rule.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * Metadata for automation rules in the calling account. The response includes rules with a `RuleStatus` of `ENABLED` and `DISABLED`.
 *
 * @public
 */
export interface AutomationRulesMetadata {
  /**
   * The Amazon Resource Name (ARN) for the rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * Whether the rule is active after it is created. If this parameter is equal to `ENABLED`, Security Hub CSPM starts applying the rule to findings and finding updates after the rule is created. To change the value of this parameter after creating a rule, use [`BatchUpdateAutomationRules`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html).
   *
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub CSPM applies rules with lower values for this parameter first.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub CSPM applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * A timestamp that indicates when the rule was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when the rule was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The principal that created a rule.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * Includes essential metadata information about automation rules.
 *
 * @public
 */
export interface AutomationRulesMetadataV2 {
  /**
   * The ARN of the automation rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The ID of the automation rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The value for the rule priority.
   *
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * The name of the automation rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The status of the automation rule.
   *
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * An explanation for the purpose and funcitonality of the automation rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of action to be performed when the rule criteria is met.
   *
   * @public
   */
  Actions?: AutomationRulesActionTypeObjectV2[] | undefined;

  /**
   * The timestamp for when the automation rule was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp for the most recent modification to the automation rule.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Information about an Availability Zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * The ID of the subnet. You can specify one subnet per Availability Zone.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Provides details about broker encryption options.
 *
 * @public
 */
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  /**
   * The KMS key that’s used to encrypt your data at rest. If not provided, Amazon MQ will use a default KMS key to encrypt your data.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies that an KMS key should be used for at-rest encryption. Set to `true` by default if no value is provided (for example, for RabbitMQ brokers).
   *
   * @public
   */
  UseAwsOwnedKey?: boolean | undefined;
}

/**
 * The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.
 *
 * @public
 */
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  /**
   * Specifies the location of the LDAP server, such as Amazon Web Services Directory Service for Microsoft Active Directory.
   *
   * @public
   */
  Hosts?: string[] | undefined;

  /**
   * The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.
   *
   * @public
   */
  RoleBase?: string | undefined;

  /**
   * The group name attribute in a role entry whose value is the name of that role.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The LDAP search filter used to find roles within the `roleBase`.
   *
   * @public
   */
  RoleSearchMatching?: string | undefined;

  /**
   * The directory search scope for the role. If set to `true`, the scope is to search the entire subtree.
   *
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * A username for the service account, which is an account in your LDAP server that has access to initiate a connection.
   *
   * @public
   */
  ServiceAccountUsername?: string | undefined;

  /**
   * Selects a particular subtree of the directory information tree (DIT) to search for user entries.
   *
   * @public
   */
  UserBase?: string | undefined;

  /**
   * The name of the LDAP attribute in the user's directory entry for the user's group membership.
   *
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * The LDAP search filter used to find users within the `userBase`.
   *
   * @public
   */
  UserSearchMatching?: string | undefined;

  /**
   * The directory search scope for the user. If set to true, the scope is to search the entire subtree.
   *
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * Provides information about logs to be activated for the specified broker.
 *
 * @public
 */
export interface AwsAmazonMqBrokerLogsPendingDetails {
  /**
   * Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply to RabbitMQ brokers.
   *
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * Activates general logging.
   *
   * @public
   */
  General?: boolean | undefined;
}

/**
 * Provides information about logs to be activated for the specified broker.
 *
 * @public
 */
export interface AwsAmazonMqBrokerLogsDetails {
  /**
   * Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply to RabbitMQ brokers.
   *
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * Activates general logging.
   *
   * @public
   */
  General?: boolean | undefined;

  /**
   * The location of the CloudWatch Logs log group where audit logs are sent.
   *
   * @public
   */
  AuditLogGroup?: string | undefined;

  /**
   * The location of the CloudWatch Logs log group where general logs are sent.
   *
   * @public
   */
  GeneralLogGroup?: string | undefined;

  /**
   * The list of information about logs that are to be turned on for the specified broker.
   *
   * @public
   */
  Pending?: AwsAmazonMqBrokerLogsPendingDetails | undefined;
}

/**
 * The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
 *
 * @public
 */
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  /**
   * The day of the week on which the maintenance window falls.
   *
   * @public
   */
  DayOfWeek?: string | undefined;

  /**
   * The time, in 24-hour format, on which the maintenance window falls.
   *
   * @public
   */
  TimeOfDay?: string | undefined;

  /**
   * The time zone in either the Country/City format or the UTC offset format. UTC is the default format.
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * Provides details about the broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
 *
 * @public
 */
export interface AwsAmazonMqBrokerUsersDetails {
  /**
   * The type of change pending for the broker user.
   *
   * @public
   */
  PendingChange?: string | undefined;

  /**
   * The username of the broker user.
   *
   * @public
   */
  Username?: string | undefined;
}

/**
 * Provides details about an Amazon MQ message broker. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.
 *
 * @public
 */
export interface AwsAmazonMqBrokerDetails {
  /**
   * The authentication strategy used to secure the broker. The default is `SIMPLE`.
   *
   * @public
   */
  AuthenticationStrategy?: string | undefined;

  /**
   * Whether automatically upgrade new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the broker.
   *
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * The broker's name.
   *
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * The broker's deployment mode.
   *
   * @public
   */
  DeploymentMode?: string | undefined;

  /**
   * Encryption options for the broker. Doesn’t apply to RabbitMQ brokers.
   *
   * @public
   */
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails | undefined;

  /**
   * The type of broker engine.
   *
   * @public
   */
  EngineType?: string | undefined;

  /**
   * The version of the broker engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The broker's instance type.
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.
   *
   * @public
   */
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails | undefined;

  /**
   * Turns on Amazon CloudWatch logging for brokers.
   *
   * @public
   */
  Logs?: AwsAmazonMqBrokerLogsDetails | undefined;

  /**
   * The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
   *
   * @public
   */
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails | undefined;

  /**
   * Permits connections from applications outside of the VPC that hosts the broker's subnets.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The list of rules (one minimum, 125 maximum) that authorize connections to brokers.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The broker's storage type.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The list of all broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
   *
   * @public
   */
  Users?: AwsAmazonMqBrokerUsersDetails[] | undefined;
}

/**
 * Contains information about settings for logging access for the stage.
 *
 * @public
 */
export interface AwsApiGatewayAccessLogSettings {
  /**
   * A single-line format of the access logs of data, as specified by selected `$context` variables. The format must include at least `$context.requestId`.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs log group that receives the access logs.
   *
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * Contains information about settings for canary deployment in the stage.
 *
 * @public
 */
export interface AwsApiGatewayCanarySettings {
  /**
   * The percentage of traffic that is diverted to a canary deployment.
   *
   * @public
   */
  PercentTraffic?: number | undefined;

  /**
   * The deployment identifier for the canary deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * Stage variables that are overridden in the canary release deployment. The variables include new stage variables that are introduced in the canary.
   *
   * Each variable is represented as a string-to-string map between the stage variable name and the variable value.
   *
   * @public
   */
  StageVariableOverrides?: Record<string, string> | undefined;

  /**
   * Indicates whether the canary deployment uses the stage cache.
   *
   * @public
   */
  UseStageCache?: boolean | undefined;
}

/**
 * Contains information about the endpoints for the API.
 *
 * @public
 */
export interface AwsApiGatewayEndpointConfiguration {
  /**
   * A list of endpoint types for the REST API.
   *
   * For an edge-optimized API, the endpoint type is `EDGE`. For a Regional API, the endpoint type is `REGIONAL`. For a private API, the endpoint type is `PRIVATE`.
   *
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * Defines settings for a method for the stage.
 *
 * @public
 */
export interface AwsApiGatewayMethodSettings {
  /**
   * Indicates whether CloudWatch metrics are enabled for the method.
   *
   * @public
   */
  MetricsEnabled?: boolean | undefined;

  /**
   * The logging level for this method. The logging level affects the log entries that are pushed to CloudWatch Logs.
   *
   * If the logging level is `ERROR`, then the logs only include error-level entries.
   *
   * If the logging level is `INFO`, then the logs include both `ERROR` events and extra informational events.
   *
   * Valid values: `OFF` | `ERROR` | `INFO`
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * Indicates whether data trace logging is enabled for the method. Data trace logging affects the log entries that are pushed to CloudWatch Logs.
   *
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * The throttling burst limit for the method.
   *
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * The throttling rate limit for the method.
   *
   * @public
   */
  ThrottlingRateLimit?: number | undefined;

  /**
   * Indicates whether responses are cached and returned for requests. For responses to be cached, a cache cluster must be enabled on the stage.
   *
   * @public
   */
  CachingEnabled?: boolean | undefined;

  /**
   * Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response is cached.
   *
   * @public
   */
  CacheTtlInSeconds?: number | undefined;

  /**
   * Indicates whether the cached responses are encrypted.
   *
   * @public
   */
  CacheDataEncrypted?: boolean | undefined;

  /**
   * Indicates whether authorization is required for a cache invalidation request.
   *
   * @public
   */
  RequireAuthorizationForCacheControl?: boolean | undefined;

  /**
   * Indicates how to handle unauthorized requests for cache invalidation.
   *
   * Valid values: `FAIL_WITH_403` | `SUCCEED_WITH_RESPONSE_HEADER` | `SUCCEED_WITHOUT_RESPONSE_HEADER`
   *
   * @public
   */
  UnauthorizedCacheControlHeaderStrategy?: string | undefined;

  /**
   * The HTTP method. You can use an asterisk (*) as a wildcard to apply method settings to multiple methods.
   *
   * @public
   */
  HttpMethod?: string | undefined;

  /**
   * The resource path for this method. Forward slashes (/) are encoded as ~1 . The initial slash must include a forward slash.
   *
   * For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`.
   *
   * To specify the root path, use only a slash (/). You can use an asterisk (*) as a wildcard to apply method settings to multiple methods.
   *
   * @public
   */
  ResourcePath?: string | undefined;
}

/**
 * Contains information about a REST API in version 1 of Amazon API Gateway.
 *
 * @public
 */
export interface AwsApiGatewayRestApiDetails {
  /**
   * The identifier of the REST API.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the REST API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the REST API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates when the API was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The version identifier for the REST API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The list of binary media types supported by the REST API.
   *
   * @public
   */
  BinaryMediaTypes?: string[] | undefined;

  /**
   * The minimum size in bytes of a payload before compression is enabled.
   *
   * If `null`, then compression is disabled.
   *
   * If 0, then all payloads are compressed.
   *
   * @public
   */
  MinimumCompressionSize?: number | undefined;

  /**
   * The source of the API key for metering requests according to a usage plan.
   *
   * `HEADER` indicates whether to read the API key from the X-API-Key header of a request.
   *
   * `AUTHORIZER` indicates whether to read the API key from the `UsageIdentifierKey` from a custom authorizer.
   *
   * @public
   */
  ApiKeySource?: string | undefined;

  /**
   * The endpoint configuration of the REST API.
   *
   * @public
   */
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration | undefined;
}

/**
 * Provides information about a version 1 Amazon API Gateway stage.
 *
 * @public
 */
export interface AwsApiGatewayStageDetails {
  /**
   * The identifier of the deployment that the stage points to.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The identifier of the client certificate for the stage.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName?: string | undefined;

  /**
   * A description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether a cache cluster is enabled for the stage.
   *
   * @public
   */
  CacheClusterEnabled?: boolean | undefined;

  /**
   * If a cache cluster is enabled, the size of the cache cluster.
   *
   * @public
   */
  CacheClusterSize?: string | undefined;

  /**
   * If a cache cluster is enabled, the status of the cache cluster.
   *
   * @public
   */
  CacheClusterStatus?: string | undefined;

  /**
   * Defines the method settings for the stage.
   *
   * @public
   */
  MethodSettings?: AwsApiGatewayMethodSettings[] | undefined;

  /**
   * A map that defines the stage variables for the stage.
   *
   * Variable names can have alphanumeric and underscore characters.
   *
   * Variable values can contain the following characters:
   *
   * - Uppercase and lowercase letters
   * - Numbers
   * - Special characters -._~:/?#&=,
   *
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * The version of the API documentation that is associated with the stage.
   *
   * @public
   */
  DocumentationVersion?: string | undefined;

  /**
   * Settings for logging access for the stage.
   *
   * @public
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings | undefined;

  /**
   * Information about settings for canary deployment in the stage.
   *
   * @public
   */
  CanarySettings?: AwsApiGatewayCanarySettings | undefined;

  /**
   * Indicates whether active tracing with X-Ray is enabled for the stage.
   *
   * @public
   */
  TracingEnabled?: boolean | undefined;

  /**
   * Indicates when the stage was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * Indicates when the stage was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * The ARN of the web ACL associated with the stage.
   *
   * @public
   */
  WebAclArn?: string | undefined;
}

/**
 * Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
 *
 * @public
 */
export interface AwsCorsConfiguration {
  /**
   * The allowed origins for CORS requests.
   *
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * Indicates whether the CORS request includes credentials.
   *
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * The exposed headers for CORS requests.
   *
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * The number of seconds for which the browser caches preflight request results.
   *
   * @public
   */
  MaxAge?: number | undefined;

  /**
   * The allowed methods for CORS requests.
   *
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * The allowed headers for CORS requests.
   *
   * @public
   */
  AllowHeaders?: string[] | undefined;
}

/**
 * Contains information about a version 2 API in Amazon API Gateway.
 *
 * @public
 */
export interface AwsApiGatewayV2ApiDetails {
  /**
   * The URI of the API.
   *
   * Uses the format `<api-id>.execute-api.<region>.amazonaws.com`
   *
   * The stage name is typically appended to the URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * The identifier of the API.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * Indicates when the API was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * A description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol for the API.
   *
   * Valid values: `WEBSOCKET` | `HTTP`
   *
   * @public
   */
  ProtocolType?: string | undefined;

  /**
   * The route selection expression for the API.
   *
   * For HTTP APIs, must be `$\{request.method\} $\{request.path\}`. This is the default value for HTTP APIs.
   *
   * For WebSocket APIs, there is no default value.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A cross-origin resource sharing (CORS) configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: AwsCorsConfiguration | undefined;
}

/**
 * Contains route settings for a stage.
 *
 * @public
 */
export interface AwsApiGatewayV2RouteSettings {
  /**
   * Indicates whether detailed metrics are enabled.
   *
   * @public
   */
  DetailedMetricsEnabled?: boolean | undefined;

  /**
   * The logging level. The logging level affects the log entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * If the logging level is `ERROR`, then the logs only include error-level entries.
   *
   * If the logging level is `INFO`, then the logs include both `ERROR` events and extra informational events.
   *
   * Valid values: `OFF` | `ERROR` | `INFO`
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * Indicates whether data trace logging is enabled. Data trace logging affects the log entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * The throttling burst limit.
   *
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * The throttling rate limit.
   *
   * @public
   */
  ThrottlingRateLimit?: number | undefined;
}

/**
 * Contains information about a version 2 stage for Amazon API Gateway.
 *
 * @public
 */
export interface AwsApiGatewayV2StageDetails {
  /**
   * The identifier of a client certificate for a stage. Supported only for WebSocket API calls.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * Indicates when the stage was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings | undefined;

  /**
   * The identifier of the deployment that the stage is associated with.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * Indicates when the stage was most recently updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * The route settings for the stage.
   *
   * @public
   */
  RouteSettings?: AwsApiGatewayV2RouteSettings | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName?: string | undefined;

  /**
   * A map that defines the stage variables for the stage.
   *
   * Variable names can have alphanumeric and underscore characters.
   *
   * Variable values can contain the following characters:
   *
   * - Uppercase and lowercase letters
   * - Numbers
   * - Special characters -._~:/?#&=,
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * Information about settings for logging access for the stage.
   *
   * @public
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings | undefined;

  /**
   * Indicates whether updates to an API automatically trigger a new deployment.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The status of the last deployment of a stage. Supported only if the stage has automatic deployment enabled.
   *
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * Indicates whether the stage is managed by API Gateway.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;
}

/**
 * Specifies the authorization configuration for using an Lambda function with your AppSync GraphQL API endpoint.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  /**
   * The number of seconds a response should be cached for. The default is 5 minutes (300 seconds).
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a standard Lambda ARN, a version ARN (.../v3), or an alias ARN.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * A regular expression for validation of tokens before the Lambda function is called.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;
}

/**
 * Specifies the authorization configuration for using an OpenID Connect compliant service with your AppSync GraphQL API endpoint.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  /**
   * The number of milliseconds that a token is valid after being authenticated.
   *
   * @public
   */
  AuthTtL?: number | undefined;

  /**
   * The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that AppSync can validate against multiple client identifiers at a time.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The number of milliseconds that a token is valid after it's issued to a user.
   *
   * @public
   */
  IatTtL?: number | undefined;

  /**
   * The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of `iss` in the ID token.
   *
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * Specifies the authorization configuration for using Amazon Cognito user pools with your AppSync GraphQL API endpoint.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  /**
   * A regular expression for validating the incoming Amazon Cognito user pools app client ID. If this value isn't set, no filtering is applied.
   *
   * @public
   */
  AppIdClientRegex?: string | undefined;

  /**
   * The Amazon Web Services Region in which the user pool was created.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pools authentication doesn't match the Amazon Cognito user pools configuration.
   *
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * The user pool ID.
   *
   * @public
   */
  UserPoolId?: string | undefined;
}

/**
 * A list of additional authentication providers for the GraphqlApi API.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  /**
   * The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * The configuration for Lambda function authorization.
   *
   * @public
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails | undefined;

  /**
   * The OpenID Connect configuration.
   *
   * @public
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails | undefined;

  /**
   * The Amazon Cognito user pools configuration.
   *
   * @public
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails | undefined;
}

/**
 * Specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an AppSync GraphQL API.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  /**
   * The Amazon Resource Name (ARN) of the service role that AppSync assumes to publish to CloudWatch Logs in your account.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Set to `TRUE` to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
   *
   * @public
   */
  ExcludeVerboseContent?: boolean | undefined;

  /**
   * The field logging level.
   *
   * @public
   */
  FieldLogLevel?: string | undefined;
}

/**
 * Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.
 *
 * @public
 */
export interface AwsAppSyncGraphQlApiDetails {
  /**
   * The unique identifier for the API.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * The unique identifier for the API.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies the authorization configuration for using an OpenID Connect compliant service with an AppSync GraphQL API endpoint.
   *
   * @public
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails | undefined;

  /**
   * The API name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the configuration for Lambda function authorization.
   *
   * @public
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails | undefined;

  /**
   * Indicates whether to use X-Ray tracing for the GraphQL API.
   *
   * @public
   */
  XrayEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the API.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Cognito user pools configuration.
   *
   * @public
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails | undefined;

  /**
   * The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * The Amazon CloudWatch Logs configuration.
   *
   * @public
   */
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails | undefined;

  /**
   * A list of additional authentication providers for the GraphQL API.
   *
   * @public
   */
  AdditionalAuthenticationProviders?: AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this GraphQL API, if one exists.
   *
   * @public
   */
  WafWebAclArn?: string | undefined;
}

/**
 * Specifies the method used to encrypt the user’s data stores in the Athena workgroup.
 *
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
  /**
   * Indicates whether Amazon Simple Storage Service (Amazon S3) server-side encryption with Amazon S3 managed keys (SSE_S3), server-side encryption with KMS keys (SSE_KMS), or client-side encryption with KMS customer managed keys (CSE_KMS) is used.
   *
   * @public
   */
  EncryptionOption?: string | undefined;

  /**
   * For `SSE_KMS` and `CSE_KMS`, this is the KMS key Amazon Resource Name (ARN) or ID.
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * The location in Amazon Simple Storage Service (Amazon S3) where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as client-side settings. If workgroup settings override client-side settings, then the query uses the workgroup settings.
 *
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
  /**
   * Specifies the method used to encrypt the user’s data stores in the Athena workgroup.
   *
   * @public
   */
  EncryptionConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails | undefined;
}

/**
 * The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3) where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.
 *
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationDetails {
  /**
   * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as client-side settings. If workgroup settings override client-side settings, then the query uses the workgroup settings.
   *
   * @public
   */
  ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails | undefined;
}

/**
 * Provides information about an Amazon Athena workgroup.
 *
 * @public
 */
export interface AwsAthenaWorkGroupDetails {
  /**
   * The workgroup name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The workgroup description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the workgroup is enabled or disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3) where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.
   *
   * @public
   */
  Configuration?: AwsAthenaWorkGroupConfigurationDetails | undefined;
}

/**
 * An Availability Zone for the automatic scaling group.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Details about the launch template to use.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  /**
   * The identifier of the launch template. You must specify either `LaunchTemplateId` or `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template. You must specify either `LaunchTemplateId` or `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * Identifies the version of the launch template. You can specify a version identifier, or use the values `$Latest` or `$Default`.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Information about the instances distribution.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  /**
   * How to allocate instance types to fulfill On-Demand capacity. The valid value is `prioritized`.
   *
   * @public
   */
  OnDemandAllocationStrategy?: string | undefined;

  /**
   * The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances.
   *
   * @public
   */
  OnDemandBaseCapacity?: number | undefined;

  /**
   * The percentage of On-Demand Instances and Spot Instances for additional capacity beyond `OnDemandBaseCapacity`.
   *
   * @public
   */
  OnDemandPercentageAboveBaseCapacity?: number | undefined;

  /**
   * How to allocate instances across Spot Instance pools. Valid values are as follows:
   *
   * - `lowest-price`
   * - `capacity-optimized`
   * - `capacity-optimized-prioritized`
   *
   * @public
   */
  SpotAllocationStrategy?: string | undefined;

  /**
   * The number of Spot Instance pools across which to allocate your Spot Instances.
   *
   * @public
   */
  SpotInstancePools?: number | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance.
   *
   * @public
   */
  SpotMaxPrice?: string | undefined;
}

/**
 * Details about the launch template to use for a mixed instances policy.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  /**
   * The identifier of the launch template. You must specify either `LaunchTemplateId` or `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template. You must specify either `LaunchTemplateId` or `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * Identifies the version of the launch template. You can specify a version identifier, or use the values `$Latest` or `$Default`.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Property values to use to override the values in the launch template.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  /**
   * The instance type. For example, `m3.xlarge`.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of capacity units provided by the specified instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic.
   *
   * @public
   */
  WeightedCapacity?: string | undefined;
}

/**
 * Describes a launch template and overrides for a mixed instances policy.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  /**
   * The launch template to use for a mixed instances policy.
   *
   * @public
   */
  LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;

  /**
   * Property values to use to override the values in the launch template.
   *
   * @public
   */
  Overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[] | undefined;
}

/**
 * The mixed instances policy for the automatic scaling group.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  /**
   * The instances distribution. The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.
   *
   * @public
   */
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails | undefined;

  /**
   * The launch template to use and the instance types (overrides) to use to provision EC2 instances to fulfill On-Demand and Spot capacities.
   *
   * @public
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails | undefined;
}

/**
 * Provides details about an auto scaling group.
 *
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupDetails {
  /**
   * The name of the launch configuration.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The list of load balancers associated with the group.
   *
   * @public
   */
  LoadBalancerNames?: string[] | undefined;

  /**
   * The service to use for the health checks. Valid values are `EC2` or `ELB`.
   *
   * @public
   */
  HealthCheckType?: string | undefined;

  /**
   * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before it checks the health status of an EC2 instance that has come into service.
   *
   * @public
   */
  HealthCheckGracePeriod?: number | undefined;

  /**
   * Indicates when the auto scaling group was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The mixed instances policy for the automatic scaling group.
   *
   * @public
   */
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails | undefined;

  /**
   * The list of Availability Zones for the automatic scaling group.
   *
   * @public
   */
  AvailabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[] | undefined;

  /**
   * The launch template to use.
   *
   * @public
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification | undefined;

  /**
   * Indicates whether capacity rebalancing is enabled.
   *
   * @public
   */
  CapacityRebalance?: boolean | undefined;
}

/**
 * Parameters that are used to automatically set up EBS volumes when an instance is launched.
 *
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  /**
   * Whether to delete the volume when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * Whether to encrypt the volume.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The number of input/output (I/O) operations per second (IOPS) to provision for the volume.
   *
   * Only supported for `gp3` or `io1` volumes. Required for `io1` volumes. Not used with `standard`, `gp2`, `st1`, or `sc1` volumes.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The snapshot ID of the volume to use.
   *
   * You must specify either `VolumeSize` or `SnapshotId`.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The volume size, in GiBs. The following are the supported volumes sizes for each volume type:
   *
   * - gp2 and gp3: 1-16,384
   * - io1: 4-16,384
   * - st1 and sc1: 125-16,384
   * - standard: 1-1,024
   *
   * You must specify either `SnapshotId` or `VolumeSize`. If you specify both `SnapshotId` and `VolumeSize`, the volume size must be equal or greater than the size of the snapshot.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. Valid values are as follows:
   *
   * - `gp2`
   * - `gp3`
   * - `io1`
   * - `sc1`
   * - `st1`
   * - `standard`
   *
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * A block device for the instance.
 *
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  /**
   * The device name that is exposed to the EC2 instance. For example, `/dev/sdh` or `xvdh`.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Parameters that are used to automatically set up Amazon EBS volumes when an instance is launched.
   *
   * @public
   */
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails | undefined;

  /**
   * Whether to suppress the device that is included in the block device mapping of the Amazon Machine Image (AMI).
   *
   * If `NoDevice` is `true`, then you cannot specify `Ebs`.>
   *
   * @public
   */
  NoDevice?: boolean | undefined;

  /**
   * The name of the virtual device (for example, `ephemeral0`).
   *
   * You can provide either `VirtualName` or `Ebs`, but not both.
   *
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * Information about the type of monitoring for instances in the group.
 *
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  /**
   * If set to `true`, then instances in the group launch with detailed monitoring.
   *
   * If set to `false`, then instances in the group launch with basic monitoring.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The metadata options for the instances.
 *
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  /**
   * Enables or disables the HTTP metadata endpoint on your instances. By default, the metadata endpoint is enabled.
   *
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * The HTTP `PUT` response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Indicates whether token usage is `required` or `optional` for metadata requests. By default, token usage is `optional`.
   *
   * @public
   */
  HttpTokens?: string | undefined;
}

/**
 * Details about a launch configuration.
 *
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationDetails {
  /**
   * For Auto Scaling groups that run in a VPC, specifies whether to assign a public IP address to the group's instances.
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Specifies the block devices for the instance.
   *
   * @public
   */
  BlockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] | undefined;

  /**
   * The identifier of a ClassicLink-enabled VPC that EC2-Classic instances are linked to.
   *
   * @public
   */
  ClassicLinkVpcId?: string | undefined;

  /**
   * The identifiers of one or more security groups for the VPC that is specified in `ClassicLinkVPCId`.
   *
   * @public
   */
  ClassicLinkVpcSecurityGroups?: string[] | undefined;

  /**
   * The creation date and time for the launch configuration.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * Whether the launch configuration is optimized for Amazon EBS I/O.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The name or the ARN of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.
   *
   * @public
   */
  IamInstanceProfile?: string | undefined;

  /**
   * The identifier of the Amazon Machine Image (AMI) that is used to launch EC2 instances.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Indicates the type of monitoring for instances in the group.
   *
   * @public
   */
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails | undefined;

  /**
   * The instance type for the instances.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The identifier of the kernel associated with the AMI.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The name of the launch configuration.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The tenancy of the instance. An instance with `dedicated` tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC.
   *
   * @public
   */
  PlacementTenancy?: string | undefined;

  /**
   * The identifier of the RAM disk associated with the AMI.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The security groups to assign to the instances in the Auto Scaling group.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The maximum hourly price to be paid for any Spot Instance that is launched to fulfill the request.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The user data to make available to the launched EC2 instances. Must be base64-encoded text.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The metadata options for the instances.
   *
   * @public
   */
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions | undefined;
}

/**
 * Provides a list of backup options for each resource type.
 *
 * @public
 */
export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
  /**
   * Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs. Valid values are as follows:
   *
   * - Set to `WindowsVSS: enabled` to enable the WindowsVSS backup option and create a Windows VSS backup.
   * - Set to `WindowsVSS: disabled` to create a regular backup. The `WindowsVSS` option is not enabled by default.
   *
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * The name of a resource type. The only supported resource type is Amazon EC2 instances with Windows VSS.
   *
   * The only valid value is `EC2`.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.
 *
 * @public
 */
export interface AwsBackupBackupPlanLifecycleDetails {
  /**
   * Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus `MoveToColdStorageAfterDays`.
   *
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * Specifies the number of days after creation that a recovery point is moved to cold storage.
   *
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;
}

/**
 * An array of `CopyAction` objects, each of which contains details of the copy operation.
 *
 * @public
 */
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.
   *
   * @public
   */
  DestinationBackupVaultArn?: string | undefined;

  /**
   * Defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. If you don't specify a lifecycle, Backup applies the lifecycle policy of the source backup to the destination backup.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.
   *
   * @public
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails | undefined;
}

/**
 * Provides details about an array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
 *
 * @public
 */
export interface AwsBackupBackupPlanRuleDetails {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.
   *
   * @public
   */
  TargetBackupVault?: string | undefined;

  /**
   * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully.
   *
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * A cron expression in UTC specifying when Backup initiates a backup job.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * Uniquely identifies a rule that is used to schedule the backup of a selection of resources.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * Specifies whether Backup creates continuous backups capable of point-in-time restore (PITR).
   *
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * A value in minutes after a backup job is successfully started before it must be completed, or it is canceled by Backup.
   *
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * An array of `CopyAction` objects, each of which contains details of the copy operation.
   *
   * @public
   */
  CopyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[] | undefined;

  /**
   * Defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. If you don't specify a lifecycle, Backup applies the lifecycle policy of the source backup to the destination backup.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.
   *
   * @public
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails | undefined;
}

/**
 * Provides details about an Backup backup plan and an array of `BackupRule` objects, each of which specifies a backup rule.
 *
 * @public
 */
export interface AwsBackupBackupPlanBackupPlanDetails {
  /**
   * The display name of a backup plan.
   *
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * A list of backup options for each resource type.
   *
   * @public
   */
  AdvancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[] | undefined;

  /**
   * An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *
   * @public
   */
  BackupPlanRule?: AwsBackupBackupPlanRuleDetails[] | undefined;
}

/**
 * Provides details about an Backup backup plan and an array of `BackupRule` objects, each of which specifies a backup rule.
 *
 * @public
 */
export interface AwsBackupBackupPlanDetails {
  /**
   * Uniquely identifies the backup plan to be associated with the selection of resources.
   *
   * @public
   */
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the backup plan.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * A unique ID for the backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings. Version IDs cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Provides details about the Amazon SNS event notifications for the specified backup vault.
 *
 * @public
 */
export interface AwsBackupBackupVaultNotificationsDetails {
  /**
   * An array of events that indicate the status of jobs to back up resources to the backup vault. The following events are supported:
   *
   * - `BACKUP_JOB_STARTED | BACKUP_JOB_COMPLETED`
   * - `COPY_JOB_STARTED | COPY_JOB_SUCCESSFUL | COPY_JOB_FAILED`
   * - `RESTORE_JOB_STARTED | RESTORE_JOB_COMPLETED | RECOVERY_POINT_MODIFIED`
   * - `S3_BACKUP_OBJECT_FAILED | S3_RESTORE_OBJECT_FAILED`
   *
   * @public
   */
  BackupVaultEvents?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the Amazon SNS topic for a backup vault's events.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;
}

/**
 * Provides details about an Backup backup vault. In Backup, a backup vault is a container that stores and organizes your backups.
 *
 * @public
 */
export interface AwsBackupBackupVaultDetails {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * The unique ARN associated with the server-side encryption key. You can specify a key to encrypt your backups from services that support full Backup management. If you don't specify a key, Backup creates an KMS key for you by default.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The Amazon SNS event notifications for the specified backup vault.
   *
   * @public
   */
  Notifications?: AwsBackupBackupVaultNotificationsDetails | undefined;

  /**
   * A resource-based policy that is used to manage access permissions on the target backup vault.
   *
   * @public
   */
  AccessPolicy?: string | undefined;
}

/**
 * Specifies how long in days before a recovery point transitions to cold storage or is deleted.
 *
 * @public
 */
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  /**
   * Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus `MoveToColdStorageAfterDays`.
   *
   * @public
   */
  DeleteAt?: string | undefined;

  /**
   * Specifies the number of days after creation that a recovery point is moved to cold storage.
   *
   * @public
   */
  MoveToColdStorageAt?: string | undefined;
}

/**
 * Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
 *
 * @public
 */
export interface AwsBackupRecoveryPointCreatedByDetails {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  BackupPlanVersion?: string | undefined;

  /**
   * Uniquely identifies a rule used to schedule the backup of a selection of resources.
   *
   * @public
   */
  BackupRuleId?: string | undefined;
}

/**
 * Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.
 *
 * @public
 */
export interface AwsBackupRecoveryPointLifecycleDetails {
  /**
   * Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus `MoveToColdStorageAfterDays`.
   *
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * Specifies the number of days after creation that a recovery point is moved to cold storage.
   *
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;
}

/**
 * Contains detailed information about the recovery points stored in an Backup backup vault. A backup, or recovery point, represents the content of a resource at a specified time.
 *
 * @public
 */
export interface AwsBackupRecoveryPointDetails {
  /**
   * The size, in bytes, of a backup.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * A `CalculatedLifecycle` object containing `DeleteAt` and `MoveToColdStorageAt` timestamps.
   *
   * @public
   */
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails | undefined;

  /**
   * The date and time that a job to create a recovery point is completed, in Unix format and UTC. The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * Contains identifying information about the creation of a recovery point, including the `BackupPlanArn`, `BackupPlanId`, `BackupPlanVersion`, and `BackupRuleId` of the backup plan that is used to create it.
   *
   * @public
   */
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails | undefined;

  /**
   * The date and time a recovery point is created, in Unix format and UTC. The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The ARN for the server-side encryption key that is used to protect your backups.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * A Boolean value that is returned as `TRUE` if the specified recovery point is encrypted, or `FALSE` if the recovery point is not encrypted.
   *
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * The date and time that a recovery point was last restored, in Unix format and UTC. The value of `LastRestoreTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastRestoreTime?: string | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define
   *
   * @public
   */
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails | undefined;

  /**
   * An ARN that uniquely identifies a recovery point.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of Amazon Web Services resource saved as a recovery point, such as an Amazon EBS volume or an Amazon RDS database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ARN for the backup vault where the recovery point was originally copied from. If the recovery point is restored to the same account, this value will be null.
   *
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * A status code specifying the state of the recovery point. Valid values are as follows:
   *
   * - `COMPLETED`
   * - `DELETING`
   * - `EXPIRED`
   * - `PARTIAL`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A message explaining the reason of the recovery point deletion failure.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Specifies the storage class of the recovery point. Valid values are as follows:
   *
   * - `COLD`
   * - `DELETED`
   * - `WARM`
   *
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * Provides details about the CNAME record that is added to the DNS database for domain validation.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateResourceRecord {
  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The value of the resource.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains information about one of the following:
 *
 * - The initial validation of each domain name that occurs as a result of the `RequestCertificate` request
 * - The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal
 *
 * @public
 */
export interface AwsCertificateManagerCertificateDomainValidationOption {
  /**
   * A fully qualified domain name (FQDN) in the certificate.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The CNAME record that is added to the DNS database for domain validation.
   *
   * @public
   */
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord | undefined;

  /**
   * The domain name that Certificate Manager uses to send domain validation emails.
   *
   * @public
   */
  ValidationDomain?: string | undefined;

  /**
   * A list of email addresses that Certificate Manager uses to send domain validation emails.
   *
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * The method used to validate the domain name.
   *
   * @public
   */
  ValidationMethod?: string | undefined;

  /**
   * The validation status of the domain name.
   *
   * @public
   */
  ValidationStatus?: string | undefined;
}

/**
 * Contains information about an extended key usage X.509 v3 extension object.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * The name of an extension value. Indicates the purpose for which the certificate public key can be used.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An object identifier (OID) for the extension value.
   *
   * The format is numbers separated by periods.
   *
   * @public
   */
  OId?: string | undefined;
}

/**
 * Contains information about a key usage X.509 v3 extension object.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateKeyUsage {
  /**
   * The key usage extension name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains other options for the certificate.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateOptions {
  /**
   * Whether to add the certificate to a transparency log.
   *
   * Valid values: `DISABLED` | `ENABLED`
   *
   * @public
   */
  CertificateTransparencyLoggingPreference?: string | undefined;
}

/**
 * Contains information about the Certificate Manager managed renewal for an `AMAZON_ISSUED` certificate.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateRenewalSummary {
  /**
   * Information about the validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal. Provided only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[] | undefined;

  /**
   * The status of the Certificate Manager managed renewal of the certificate.
   *
   * Valid values: `PENDING_AUTO_RENEWAL` | `PENDING_VALIDATION` | `SUCCESS` | `FAILED`
   *
   * @public
   */
  RenewalStatus?: string | undefined;

  /**
   * The reason that a renewal request was unsuccessful. This attribute is used only when `RenewalStatus` is `FAILED`.
   *
   * Valid values: `NO_AVAILABLE_CONTACTS` | `ADDITIONAL_VERIFICATION_REQUIRED` | `DOMAIN_NOT_ALLOWED` | `INVALID_PUBLIC_DOMAIN` | `DOMAIN_VALIDATION_DENIED` | `CAA_ERROR` | `PCA_LIMIT_EXCEEDED` | `PCA_INVALID_ARN` | `PCA_INVALID_STATE` | `PCA_REQUEST_FAILED` | `PCA_NAME_CONSTRAINTS_VALIDATION` | `PCA_RESOURCE_NOT_FOUND` | `PCA_INVALID_ARGS` | `PCA_INVALID_DURATION` | `PCA_ACCESS_DENIED` | `SLR_NOT_FOUND` | `OTHER`
   *
   * @public
   */
  RenewalStatusReason?: string | undefined;

  /**
   * Indicates when the renewal summary was last updated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  UpdatedAt?: string | undefined;
}

/**
 * Provides details about an Certificate Manager certificate.
 *
 * @public
 */
export interface AwsCertificateManagerCertificateDetails {
  /**
   * The ARN of the private certificate authority (CA) that will be used to issue the certificate.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * Indicates when the certificate was requested.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The fully qualified domain name (FQDN), such as www.example.com, that is secured by the certificate.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Contains information about the initial validation of each domain name that occurs as a result of the `RequestCertificate` request.
   *
   * Only provided if the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[] | undefined;

  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
   *
   * @public
   */
  ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[] | undefined;

  /**
   * For a failed certificate request, the reason for the failure.
   *
   * Valid values: `NO_AVAILABLE_CONTACTS` | `ADDITIONAL_VERIFICATION_REQUIRED` | `DOMAIN_NOT_ALLOWED` | `INVALID_PUBLIC_DOMAIN` | `DOMAIN_VALIDATION_DENIED` | `CAA_ERROR` | `PCA_LIMIT_EXCEEDED` | `PCA_INVALID_ARN` | `PCA_INVALID_STATE` | `PCA_REQUEST_FAILED` | `PCA_NAME_CONSTRAINTS_VALIDATION` | `PCA_RESOURCE_NOT_FOUND` | `PCA_INVALID_ARGS` | `PCA_INVALID_DURATION` | `PCA_ACCESS_DENIED` | `SLR_NOT_FOUND` | `OTHER`
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Indicates when the certificate was imported. Provided if the certificate type is `IMPORTED`.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ImportedAt?: string | undefined;

  /**
   * The list of ARNs for the Amazon Web Services resources that use the certificate.
   *
   * @public
   */
  InUseBy?: string[] | undefined;

  /**
   * Indicates when the certificate was issued. Provided if the certificate type is `AMAZON_ISSUED`.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  IssuedAt?: string | undefined;

  /**
   * The name of the certificate authority that issued and signed the certificate.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The algorithm that was used to generate the public-private key pair.
   *
   * Valid values: `RSA_2048` | `RSA_1024` |`RSA_4096` | `EC_prime256v1` | `EC_secp384r1` | `EC_secp521r1`
   *
   * @public
   */
  KeyAlgorithm?: string | undefined;

  /**
   * A list of key usage X.509 v3 extension objects.
   *
   * @public
   */
  KeyUsages?: AwsCertificateManagerCertificateKeyUsage[] | undefined;

  /**
   * The time after which the certificate becomes invalid.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  NotAfter?: string | undefined;

  /**
   * The time before which the certificate is not valid.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  NotBefore?: string | undefined;

  /**
   * Provides a value that specifies whether to add the certificate to a transparency log.
   *
   * @public
   */
  Options?: AwsCertificateManagerCertificateOptions | undefined;

  /**
   * Whether the certificate is eligible for renewal.
   *
   * Valid values: `ELIGIBLE` | `INELIGIBLE`
   *
   * @public
   */
  RenewalEligibility?: string | undefined;

  /**
   * Information about the status of the Certificate Manager managed renewal for the certificate. Provided only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  Serial?: string | undefined;

  /**
   * The algorithm that was used to sign the certificate.
   *
   * @public
   */
  SignatureAlgorithm?: string | undefined;

  /**
   * The status of the certificate.
   *
   * Valid values: `PENDING_VALIDATION` | `ISSUED` | `INACTIVE` | `EXPIRED` | `VALIDATION_TIMED_OUT` | `REVOKED` | `FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The name of the entity that is associated with the public key contained in the certificate.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate.
   *
   * The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
   *
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * The source of the certificate. For certificates that Certificate Manager provides, `Type` is `AMAZON_ISSUED`. For certificates that are imported with `ImportCertificate`, `Type` is `IMPORTED`.
   *
   * Valid values: `IMPORTED` | `AMAZON_ISSUED` | `PRIVATE`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides information about the stack's conformity to its expected template configuration.
 *
 * @public
 */
export interface AwsCloudFormationStackDriftInformationDetails {
  /**
   * Status of the stack's actual configuration compared to its expected template configuration.
   *
   * @public
   */
  StackDriftStatus?: string | undefined;
}

/**
 * Provides information about the CloudFormation stack output.
 *
 * @public
 */
export interface AwsCloudFormationStackOutputsDetails {
  /**
   * A user-defined description associated with the output.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key associated with the output.
   *
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * The value associated with the output.
   *
   * @public
   */
  OutputValue?: string | undefined;
}

/**
 * Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for another stack.
 *
 * @public
 */
export interface AwsCloudFormationStackDetails {
  /**
   * The capabilities allowed in the stack.
   *
   * @public
   */
  Capabilities?: string[] | undefined;

  /**
   * The time at which the stack was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * A user-defined description associated with the stack.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Boolean to enable or disable rollback on stack creation failures.
   *
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * Information about whether a stack's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters.
   *
   * @public
   */
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails | undefined;

  /**
   * Whether termination protection is enabled for the stack.
   *
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * The time the nested stack was last updated. This field will only be returned if the stack has been updated at least once.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Amazon SNS topic to which stack-related events are published.
   *
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * A list of output structures.
   *
   * @public
   */
  Outputs?: AwsCloudFormationStackOutputsDetails[] | undefined;

  /**
   * The ARN of an IAM role that's associated with the stack.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * Current status of the stack.
   *
   * @public
   */
  StackStatus?: string | undefined;

  /**
   * Success or failure message associated with the stack status.
   *
   * @public
   */
  StackStatusReason?: string | undefined;

  /**
   * The length of time, in minutes, that CloudFormation waits for the nested stack to reach the `CREATE_COMPLETE` state.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;
}

/**
 * Information about a cache behavior for the distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionCacheBehavior {
  /**
   * The protocol that viewers can use to access the files in an origin. You can specify the following options:
   *
   * - `allow-all` - Viewers can use HTTP or HTTPS.
   * - `redirect-to-https` - CloudFront responds to HTTP requests with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the new URL to resubmit.
   * - `https-only` - CloudFront responds to HTTP request with an HTTP status code of 403 (Forbidden).
   *
   * @public
   */
  ViewerProtocolPolicy?: string | undefined;
}

/**
 * Provides information about caching for the CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionCacheBehaviors {
  /**
   * The cache behaviors for the distribution.
   *
   * @public
   */
  Items?: AwsCloudFrontDistributionCacheBehavior[] | undefined;
}

/**
 * Contains information about the default cache configuration for the CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * The protocol that viewers can use to access the files in an origin. You can specify the following options:
   *
   * - `allow-all` - Viewers can use HTTP or HTTPS.
   * - `redirect-to-https` - CloudFront responds to HTTP requests with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the new URL to resubmit.
   * - `https-only` - CloudFront responds to HTTP request with an HTTP status code of 403 (Forbidden).
   *
   * @public
   */
  ViewerProtocolPolicy?: string | undefined;
}

/**
 * A complex type that controls whether access logs are written for the CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionLogging {
  /**
   * The S3 bucket to store the access logs in.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * With this field, you can enable or disable the selected distribution.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether you want CloudFront to include cookies in access logs.
   *
   * @public
   */
  IncludeCookies?: boolean | undefined;

  /**
   * An optional string that you want CloudFront to use as a prefix to the access log filenames for this distribution.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * The status codes that cause an origin group to fail over.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * The list of status code values that can cause a failover to the next origin.
   *
   * @public
   */
  Items?: number[] | undefined;

  /**
   * The number of status codes that can cause a failover.
   *
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * Provides information about when an origin group fails over.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * Information about the status codes that cause an origin group to fail over.
   *
   * @public
   */
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes | undefined;
}

/**
 * Information about an origin group for the CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroup {
  /**
   * Provides the criteria for an origin group to fail over.
   *
   * @public
   */
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover | undefined;
}

/**
 * Provides information about origin groups that are associated with the CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroups {
  /**
   * The list of origin groups.
   *
   * @public
   */
  Items?: AwsCloudFrontDistributionOriginGroup[] | undefined;
}

/**
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginSslProtocols {
  /**
   * A list that contains allowed SSL/TLS protocols for this distribution.
   *
   * @public
   */
  Items?: string[] | undefined;

  /**
   * The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.
   *
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is [configured with static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) is a custom origin.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  /**
   * The HTTP port that CloudFront uses to connect to the origin.
   *
   * @public
   */
  HttpPort?: number | undefined;

  /**
   * The HTTPS port that CloudFront uses to connect to the origin.
   *
   * @public
   */
  HttpsPort?: number | undefined;

  /**
   * Specifies how long, in seconds, CloudFront persists its connection to the origin.
   *
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;

  /**
   * Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin.
   *
   * @public
   */
  OriginProtocolPolicy?: string | undefined;

  /**
   * Specifies how long, in seconds, CloudFront waits for a response from the origin.
   *
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS.
   *
   * @public
   */
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols | undefined;
}

/**
 * Information about an origin that is an Amazon S3 bucket that is not configured with static website hosting.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * The CloudFront origin access identity to associate with the origin.
   *
   * @public
   */
  OriginAccessIdentity?: string | undefined;
}

/**
 * A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), or other server from which CloudFront gets your files.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * Amazon S3 origins: The DNS name of the S3 bucket from which you want CloudFront to get objects for this origin.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * A unique identifier for the origin or origin group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.
   *
   * @public
   */
  OriginPath?: string | undefined;

  /**
   * An origin that is an S3 bucket that is not configured with static website hosting.
   *
   * @public
   */
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig | undefined;

  /**
   * An origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this attribute. If the Amazon S3 bucket is not configured with static website hosting, use the `S3OriginConfig` type instead.
   *
   * @public
   */
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig | undefined;
}

/**
 * A complex type that contains information about origins and origin groups for this CloudFront distribution.
 *
 * @public
 */
export interface AwsCloudFrontDistributionOrigins {
  /**
   * A complex type that contains origins or origin groups for this distribution.
   *
   * @public
   */
  Items?: AwsCloudFrontDistributionOriginItem[] | undefined;
}

/**
 * Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers.
 *
 * @public
 */
export interface AwsCloudFrontDistributionViewerCertificate {
  /**
   * The ARN of the ACM certificate. Used if the certificate is stored in ACM. If you provide an ACM certificate ARN, you must also provide `MinimumCertificateVersion` and `SslSupportMethod`.
   *
   * @public
   */
  AcmCertificateArn?: string | undefined;

  /**
   * The identifier of the certificate. Note that in CloudFront, this attribute is deprecated.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The source of the certificate identified by `Certificate`. Note that in CloudFront, this attribute is deprecated.
   *
   * @public
   */
  CertificateSource?: string | undefined;

  /**
   * Whether the distribution uses the CloudFront domain name. If set to `false`, then you provide either `AcmCertificateArn` or `IamCertificateId`.
   *
   * @public
   */
  CloudFrontDefaultCertificate?: boolean | undefined;

  /**
   * The identifier of the IAM certificate. Used if the certificate is stored in IAM. If you provide `IamCertificateId`, then you also must provide `MinimumProtocolVersion` and `SslSupportMethod`.
   *
   * @public
   */
  IamCertificateId?: string | undefined;

  /**
   * The security policy that CloudFront uses for HTTPS connections with viewers. If `SslSupportMethod` is `sni-only`, then `MinimumProtocolVersion` must be `TLSv1` or higher.
   *
   * @public
   */
  MinimumProtocolVersion?: string | undefined;

  /**
   * The viewers that the distribution accepts HTTPS connections from.
   *
   * @public
   */
  SslSupportMethod?: string | undefined;
}

/**
 * A CloudFront distribution configuration.
 *
 * @public
 */
export interface AwsCloudFrontDistributionDetails {
  /**
   * Provides information about the cache configuration for the distribution.
   *
   * @public
   */
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors | undefined;

  /**
   * The default cache behavior for the configuration.
   *
   * @public
   */
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior | undefined;

  /**
   * The object that CloudFront sends in response to requests from the origin (for example, index.html) when a viewer requests the root URL for the distribution (http://www.example.com) instead of an object in your distribution (http://www.example.com/product-description.html).
   *
   * @public
   */
  DefaultRootObject?: string | undefined;

  /**
   * The domain name corresponding to the distribution.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The entity tag is a hash of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Indicates when that the distribution was last modified.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastModifiedTime?: string | undefined;

  /**
   * A complex type that controls whether access logs are written for the distribution.
   *
   * @public
   */
  Logging?: AwsCloudFrontDistributionLogging | undefined;

  /**
   * A complex type that contains information about origins for this distribution.
   *
   * @public
   */
  Origins?: AwsCloudFrontDistributionOrigins | undefined;

  /**
   * Provides information about the origin groups in the distribution.
   *
   * @public
   */
  OriginGroups?: AwsCloudFrontDistributionOriginGroups | undefined;

  /**
   * Provides information about the TLS/SSL configuration that the distribution uses to communicate with viewers.
   *
   * @public
   */
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate | undefined;

  /**
   * Indicates the current status of the distribution.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution.
   *
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * Provides details about a CloudTrail trail.
 *
 * @public
 */
export interface AwsCloudTrailTrailDetails {
  /**
   * The ARN of the log group that CloudTrail logs are delivered to.
   *
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * The ARN of the role that the CloudWatch Events endpoint assumes when it writes to the log group.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * Indicates whether the trail has custom event selectors.
   *
   * @public
   */
  HasCustomEventSelectors?: boolean | undefined;

  /**
   * The Region where the trail was created.
   *
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * Indicates whether the trail publishes events from global services such as IAM to the log files.
   *
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * Indicates whether the trail applies only to the current Region or to all Regions.
   *
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * Whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account.
   *
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * The KMS key ID to use to encrypt the logs.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Indicates whether CloudTrail log file validation is enabled.
   *
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * The name of the trail.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the S3 bucket where the log files are published.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The S3 key prefix. The key prefix is added after the name of the S3 bucket where the log files are published.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * The ARN of the SNS topic that is used for notifications of log file delivery.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The name of the SNS topic that is used for notifications of log file delivery.
   *
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * The ARN of the trail.
   *
   * @public
   */
  TrailArn?: string | undefined;
}

/**
 * Details about the dimensions for the metric associated with the alarm.
 *
 * @public
 */
export interface AwsCloudWatchAlarmDimensionsDetails {
  /**
   * The name of a dimension.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of a dimension.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies an alarm and associates it with the specified metric or metric math expression.
 *
 * @public
 */
export interface AwsCloudWatchAlarmDetails {
  /**
   * Indicates whether actions should be executed during any changes to the alarm state.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The list of actions, specified as Amazon Resource Names (ARNs) to execute when this alarm transitions into an `ALARM` state from any other state.
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The ARN of the alarm.
   *
   * @public
   */
  AlarmArn?: string | undefined;

  /**
   * The time stamp of the last update to the alarm configuration.
   *
   * @public
   */
  AlarmConfigurationUpdatedTimestamp?: string | undefined;

  /**
   * The description of the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The name of the alarm. If you don't specify a name, CloudFront generates a unique physical ID and uses that ID for the alarm name.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
   *
   * @public
   */
  ComparisonOperator?: string | undefined;

  /**
   * The number of datapoints that must be breaching to trigger the alarm.
   *
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * The dimensions for the metric associated with the alarm.
   *
   * @public
   */
  Dimensions?: AwsCloudWatchAlarmDimensionsDetails[] | undefined;

  /**
   * Used only for alarms based on percentiles. If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
   *
   * @public
   */
  EvaluateLowSampleCountPercentile?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * The percentile statistic for the metric associated with the alarm.
   *
   * @public
   */
  ExtendedStatistic?: string | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an ARN.
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The actions to execute when this alarm transitions to the `OK` state from any other state. Each action is specified as an ARN.
   *
   * @public
   */
  OkActions?: string[] | undefined;

  /**
   * The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use `ExtendedStatistic`.
   *
   * For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
   *
   * For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.
   *
   * @public
   */
  Statistic?: string | undefined;

  /**
   * The value to compare with the specified statistic.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * n an alarm based on an anomaly detection model, this is the ID of the `ANOMALY_DETECTION_BAND` function used as the threshold for the alarm.
   *
   * @public
   */
  ThresholdMetricId?: string | undefined;

  /**
   * Sets how this alarm is to handle missing data points.
   *
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * The unit of the metric associated with the alarm.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * Information about the build artifacts for the CodeBuild project.
 *
 * @public
 */
export interface AwsCodeBuildProjectArtifactsDetails {
  /**
   * An identifier for the artifact definition.
   *
   * @public
   */
  ArtifactIdentifier?: string | undefined;

  /**
   * Indicates whether to disable encryption on the artifact. Only valid when `Type` is `S3`.
   *
   * @public
   */
  EncryptionDisabled?: boolean | undefined;

  /**
   * Only used when `Type` is `S3`. The name of the S3 bucket where the artifact is located.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Only used when Type is S3. The name of the artifact. Used with `NamepaceType` and `Path` to determine the pattern for storing the artifact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Only used when `Type` is `S3`. The value to use for the namespace. Used with `Name` and `Path` to determine the pattern for storing the artifact.
   *
   * @public
   */
  NamespaceType?: string | undefined;

  /**
   * Whether the name specified in the buildspec file overrides the artifact name.
   *
   * @public
   */
  OverrideArtifactName?: boolean | undefined;

  /**
   * Only used when `Type` is `S3`. The type of output artifact to create.
   *
   * @public
   */
  Packaging?: string | undefined;

  /**
   * Only used when `Type` is `S3`. The path to the artifact. Used with `Name` and `NamespaceType` to determine the pattern for storing the artifact.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The type of build artifact.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about an environment variable that is available to builds for the build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  /**
   * The name of the environment variable.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of environment variable.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The value of the environment variable.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The credentials for access to a private registry.
 *
 * @public
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * The ARN or name of credentials created using Secrets Manager.
   *
   * > **Note:** The credential can use the name of the credentials only if they exist in your current Amazon Web Services Region.
   *
   * @public
   */
  Credential?: string | undefined;

  /**
   * The service that created the credentials to access a private Docker registry.
   *
   * The valid value,`SECRETS_MANAGER`, is for Secrets Manager.
   *
   * @public
   */
  CredentialProvider?: string | undefined;
}

/**
 * Information about the build environment for this build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectEnvironment {
  /**
   * The certificate to use with this build project.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * A set of environment variables to make available to builds for the build project.
   *
   * @public
   */
  EnvironmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[] | undefined;

  /**
   * Whether to allow the Docker daemon to run inside a Docker container. Set to `true` if the build project is used to build Docker images.
   *
   * @public
   */
  PrivilegedMode?: boolean | undefined;

  /**
   * The type of credentials CodeBuild uses to pull images in your build.
   *
   * Valid values:
   *
   * - `CODEBUILD` specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust the CodeBuild service principal.
   * - `SERVICE_ROLE` specifies that CodeBuild uses your build project's service role.
   *
   * When you use a cross-account or private registry image, you must use `SERVICE_ROLE` credentials. When you use an CodeBuild curated image, you must use `CODEBUILD` credentials.
   *
   * @public
   */
  ImagePullCredentialsType?: string | undefined;

  /**
   * The credentials for access to a private registry.
   *
   * @public
   */
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential | undefined;

  /**
   * The type of build environment to use for related builds.
   *
   * The environment type `ARM_CONTAINER` is available only in Regions US East (N. Virginia), US East (Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Sydney), and Europe (Frankfurt).
   *
   * The environment type `LINUX_CONTAINER` with compute type build.general1.2xlarge is available only in Regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia).
   *
   * The environment type `LINUX_GPU_CONTAINER` is available only in Regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia).
   *
   * Valid values: `WINDOWS_CONTAINER` | `LINUX_CONTAINER` | `LINUX_GPU_CONTAINER` | `ARM_CONTAINER`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about CloudWatch Logs for the build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  /**
   * The group name of the logs in CloudWatch Logs.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The current status of the logs in CloudWatch Logs for a build project.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The prefix of the stream name of the CloudWatch Logs.
   *
   * @public
   */
  StreamName?: string | undefined;
}

/**
 * Information about logs built to an S3 bucket for a build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  /**
   * Whether to disable encryption of the S3 build log output.
   *
   * @public
   */
  EncryptionDisabled?: boolean | undefined;

  /**
   * The ARN of the S3 bucket and the path prefix for S3 logs.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current status of the S3 build logs.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Information about logs for the build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigDetails {
  /**
   * Information about CloudWatch Logs for the build project.
   *
   * @public
   */
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails | undefined;

  /**
   * Information about logs built to an S3 bucket for a build project.
   *
   * @public
   */
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails | undefined;
}

/**
 * Information about the build input source code for this build project.
 *
 * @public
 */
export interface AwsCodeBuildProjectSource {
  /**
   * The type of repository that contains the source code to be built. Valid values are:
   *
   * - `BITBUCKET` - The source code is in a Bitbucket repository.
   * - `CODECOMMIT` - The source code is in an CodeCommit repository.
   * - `CODEPIPELINE` - The source code settings are specified in the source action of a pipeline in CodePipeline.
   * - `GITHUB` - The source code is in a GitHub repository.
   * - `GITHUB_ENTERPRISE` - The source code is in a GitHub Enterprise repository.
   * - `NO_SOURCE` - The project does not have input source code.
   * - `S3` - The source code is in an S3 input bucket.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Information about the location of the source code to be built.
   *
   * Valid values include:
   *
   * - For source code settings that are specified in the source action of a pipeline in CodePipeline, location should not be specified. If it is specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source action instead of this value.
   * - For source code in an CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec file (for example, `https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name` ).
   * - For source code in an S3 input bucket, one of the following.
   *
   *   - The path to the ZIP file that contains the source code (for example, `bucket-name/path/to/object-name.zip`).
   *   - The path to the folder that contains the source code (for example, `bucket-name/path/to/source-code/folder/`).
   * - For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the build spec file.
   * - For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the build spec file.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Information about the Git clone depth for the build project.
   *
   * @public
   */
  GitCloneDepth?: number | undefined;

  /**
   * Whether to ignore SSL warnings while connecting to the project source code.
   *
   * @public
   */
  InsecureSsl?: boolean | undefined;
}

/**
 * Information about the VPC configuration that CodeBuild accesses.
 *
 * @public
 */
export interface AwsCodeBuildProjectVpcConfig {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of one or more subnet IDs in your VPC.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * A list of one or more security group IDs in your VPC.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * Information about an CodeBuild project.
 *
 * @public
 */
export interface AwsCodeBuildProjectDetails {
  /**
   * The KMS key used to encrypt the build output artifacts.
   *
   * You can specify either the ARN of the KMS key or, if available, the KMS key alias (using the format alias/alias-name).
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * Information about the build artifacts for the CodeBuild project.
   *
   * @public
   */
  Artifacts?: AwsCodeBuildProjectArtifactsDetails[] | undefined;

  /**
   * Information about the build environment for this build project.
   *
   * @public
   */
  Environment?: AwsCodeBuildProjectEnvironment | undefined;

  /**
   * The name of the build project.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the build input source code for this build project.
   *
   * @public
   */
  Source?: AwsCodeBuildProjectSource | undefined;

  /**
   * The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * Information about logs for the build project.
   *
   * @public
   */
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  VpcConfig?: AwsCodeBuildProjectVpcConfig | undefined;

  /**
   * Information about the secondary artifacts for the CodeBuild project.
   *
   * @public
   */
  SecondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[] | undefined;
}

/**
 * Provides details about an Database Migration Service (DMS) endpoint. An endpoint provides connection, data store type, and location information about your data store.
 *
 * @public
 */
export interface AwsDmsEndpointDetails {
  /**
   * The Amazon Resource Name (ARN) for the SSL certificate that encrypts connections between the DMS endpoint and the replication instance.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The name of the endpoint database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The database endpoint identifier.
   *
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * The type of endpoint. Valid values are source and target.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * The type of engine for the endpoint, depending on the `EndpointType` value.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * A value that can be used for cross-account validation.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * Additional attributes associated with the connection.
   *
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * An DMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the `KmsKeyId` parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The port used to access the endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the server where the endpoint database resides.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The SSL mode used to connect to the endpoint. The default is none.
   *
   * @public
   */
  SslMode?: string | undefined;

  /**
   * The user name to be used to log in to the endpoint database.
   *
   * @public
   */
  Username?: string | undefined;
}

/**
 * Provides details about the replication subnet group.
 *
 * @public
 */
export interface AwsDmsReplicationInstanceReplicationSubnetGroupDetails {
  /**
   * The identifier of the replication subnet group.
   *
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;
}

/**
 * Provides details about the virtual private cloud (VPC) security group that’s associated with the replication instance.
 *
 * @public
 */
export interface AwsDmsReplicationInstanceVpcSecurityGroupsDetails {
  /**
   * The identifier of the VPC security group that’s associated with the replication instance.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;
}

/**
 * Provides details about an Database Migration Service (DMS) replication instance. DMS uses a replication instance to connect to your source data store, read the source data, and format the data for consumption by the target data store.
 *
 * @public
 */
export interface AwsDmsReplicationInstanceDetails {
  /**
   * The amount of storage (in gigabytes) that is allocated for the replication instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The Availability Zone that the replication instance is created in. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, such as `us-east-1d`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the `KmsKeyId` parameter, DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether the replication instance is deployed across multiple Availability Zones (AZs). You can't set the `AvailabilityZone` parameter if the `MultiAZ` parameter is set to `true`.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The maintenance window times for the replication instance. Upgrades to the replication instance are performed during this time.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies the accessibility options for the replication instance. A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The compute and memory capacity of the replication instance as defined for the specified replication instance class.
   *
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * The replication instance identifier.
   *
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * The subnet group for the replication instance.
   *
   * @public
   */
  ReplicationSubnetGroup?: AwsDmsReplicationInstanceReplicationSubnetGroupDetails | undefined;

  /**
   * The virtual private cloud (VPC) security group for the replication instance.
   *
   * @public
   */
  VpcSecurityGroups?: AwsDmsReplicationInstanceVpcSecurityGroupsDetails[] | undefined;
}

/**
 * Provides details about an Database Migration Service (DMS) replication task. A replication task moves a set of data from the source endpoint to the target endpoint.
 *
 * @public
 */
export interface AwsDmsReplicationTaskDetails {
  /**
   * Indicates when you want a change data capture (CDC) operation to start. `CCdcStartPosition` or `CCdcStartTime` specifies when you want a CDC operation to start. Only a value for one of these fields is included.
   *
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * Indicates the start time for a CDC operation. `CdcStartPosition` or `CCdcStartTime` specifies when you want a CDC operation to start. Only a value for one of these fields is included.
   *
   * @public
   */
  CdcStartTime?: string | undefined;

  /**
   * Indicates when you want a CDC operation to stop. The value can be either server time or commit time.
   *
   * @public
   */
  CdcStopPosition?: string | undefined;

  /**
   * The migration type.
   *
   * @public
   */
  MigrationType?: string | undefined;

  /**
   * The identifier of the replication task.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A display name for the resource identifier at the end of the `EndpointArn` response parameter. If you don't specify a `ResourceIdentifier` value, DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a replication instance.
   *
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * The user-defined replication task identifier or name.
   *
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * The settings for the replication task.
   *
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

  /**
   * The ARN of the source endpoint.
   *
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * The table mappings for the replication task, in JSON format.
   *
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * The ARN of the target endpoint.
   *
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *
   * @public
   */
  TaskData?: string | undefined;
}

/**
 * Contains a definition of an attribute for the table.
 *
 * @public
 */
export interface AwsDynamoDbTableAttributeDefinition {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The type of the attribute.
   *
   * @public
   */
  AttributeType?: string | undefined;
}

/**
 * Provides information about the billing for read/write capacity on the table.
 *
 * @public
 */
export interface AwsDynamoDbTableBillingModeSummary {
  /**
   * The method used to charge for read and write throughput and to manage capacity.
   *
   * @public
   */
  BillingMode?: string | undefined;

  /**
   * If the billing mode is `PAY_PER_REQUEST`, indicates when the billing mode was set to that value.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastUpdateToPayPerRequestDateTime?: string | undefined;
}

/**
 * A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
 *
 * @public
 */
export interface AwsDynamoDbTableKeySchema {
  /**
   * The name of the key schema attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The type of key used for the key schema attribute. Valid values are `HASH` or `RANGE`.
   *
   * @public
   */
  KeyType?: string | undefined;
}

/**
 * For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
 *
 * @public
 */
export interface AwsDynamoDbTableProjection {
  /**
   * The nonkey attributes that are projected into the index. For each attribute, provide the attribute name.
   *
   * @public
   */
  NonKeyAttributes?: string[] | undefined;

  /**
   * The types of attributes that are projected into the index. Valid values are as follows:
   *
   * - `ALL`
   * - `INCLUDE`
   * - `KEYS_ONLY`
   *
   * @public
   */
  ProjectionType?: string | undefined;
}

/**
 * Information about the provisioned throughput for the table or for a global secondary index.
 *
 * @public
 */
export interface AwsDynamoDbTableProvisionedThroughput {
  /**
   * Indicates when the provisioned throughput was last decreased.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastDecreaseDateTime?: string | undefined;

  /**
   * Indicates when the provisioned throughput was last increased.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastIncreaseDateTime?: string | undefined;

  /**
   * The number of times during the current UTC calendar day that the provisioned throughput was decreased.
   *
   * @public
   */
  NumberOfDecreasesToday?: number | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * @public
   */
  WriteCapacityUnits?: number | undefined;
}

/**
 * Information abut a global secondary index for the table.
 *
 * @public
 */
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * Whether the index is currently backfilling.
   *
   * @public
   */
  Backfilling?: boolean | undefined;

  /**
   * The ARN of the index.
   *
   * @public
   */
  IndexArn?: string | undefined;

  /**
   * The name of the index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The total size in bytes of the index.
   *
   * @public
   */
  IndexSizeBytes?: number | undefined;

  /**
   * The current status of the index.
   *
   * - `ACTIVE`
   * - `CREATING`
   * - `DELETING`
   * - `UPDATING`
   *
   * @public
   */
  IndexStatus?: string | undefined;

  /**
   * The number of items in the index.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The key schema for the index.
   *
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * Attributes that are copied from the table into an index.
   *
   * @public
   */
  Projection?: AwsDynamoDbTableProjection | undefined;

  /**
   * Information about the provisioned throughput settings for the indexes.
   *
   * @public
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput | undefined;
}

/**
 * Information about a local secondary index for a DynamoDB table.
 *
 * @public
 */
export interface AwsDynamoDbTableLocalSecondaryIndex {
  /**
   * The ARN of the index.
   *
   * @public
   */
  IndexArn?: string | undefined;

  /**
   * The name of the index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The complete key schema for the index.
   *
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * Attributes that are copied from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection?: AwsDynamoDbTableProjection | undefined;
}

/**
 * Replica-specific configuration for the provisioned throughput.
 *
 * @public
 */
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * The read capacity units for the replica.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;
}

/**
 * Information about a global secondary index for a DynamoDB table replica.
 *
 * @public
 */
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * The name of the index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * Replica-specific configuration for the provisioned throughput for the index.
   *
   * @public
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride | undefined;
}

/**
 * Information about a replica of a DynamoDB table.
 *
 * @public
 */
export interface AwsDynamoDbTableReplica {
  /**
   * List of global secondary indexes for the replica.
   *
   * @public
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[] | undefined;

  /**
   * The identifier of the KMS key that will be used for KMS encryption for the replica.
   *
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * Replica-specific configuration for the provisioned throughput.
   *
   * @public
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride | undefined;

  /**
   * The name of the Region where the replica is located.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The current status of the replica. Valid values are as follows:
   *
   * - `ACTIVE`
   * - `CREATING`
   * - `CREATION_FAILED`
   * - `DELETING`
   * - `UPDATING`
   *
   * @public
   */
  ReplicaStatus?: string | undefined;

  /**
   * Detailed information about the replica status.
   *
   * @public
   */
  ReplicaStatusDescription?: string | undefined;
}

/**
 * Information about the restore for the table.
 *
 * @public
 */
export interface AwsDynamoDbTableRestoreSummary {
  /**
   * The ARN of the source backup from which the table was restored.
   *
   * @public
   */
  SourceBackupArn?: string | undefined;

  /**
   * The ARN of the source table for the backup.
   *
   * @public
   */
  SourceTableArn?: string | undefined;

  /**
   * Indicates the point in time that the table was restored to.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  RestoreDateTime?: string | undefined;

  /**
   * Whether a restore is currently in progress.
   *
   * @public
   */
  RestoreInProgress?: boolean | undefined;
}

/**
 * Information about the server-side encryption for the table.
 *
 * @public
 */
export interface AwsDynamoDbTableSseDescription {
  /**
   * If the key is inaccessible, the date and time when DynamoDB detected that the key was inaccessible.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  InaccessibleEncryptionDateTime?: string | undefined;

  /**
   * The status of the server-side encryption.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of server-side encryption.
   *
   * @public
   */
  SseType?: string | undefined;

  /**
   * The ARN of the KMS key that is used for the KMS encryption.
   *
   * @public
   */
  KmsMasterKeyArn?: string | undefined;
}

/**
 * The current DynamoDB Streams configuration for the table.
 *
 * @public
 */
export interface AwsDynamoDbTableStreamSpecification {
  /**
   * Indicates whether DynamoDB Streams is enabled on the table.
   *
   * @public
   */
  StreamEnabled?: boolean | undefined;

  /**
   * Determines the information that is written to the table.
   *
   * @public
   */
  StreamViewType?: string | undefined;
}

/**
 * Provides details about a DynamoDB table.
 *
 * @public
 */
export interface AwsDynamoDbTableDetails {
  /**
   * A list of attribute definitions for the table.
   *
   * @public
   */
  AttributeDefinitions?: AwsDynamoDbTableAttributeDefinition[] | undefined;

  /**
   * Information about the billing for read/write capacity on the table.
   *
   * @public
   */
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary | undefined;

  /**
   * Indicates when the table was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreationDateTime?: string | undefined;

  /**
   * List of global secondary indexes for the table.
   *
   * @public
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[] | undefined;

  /**
   * The version of global tables being used.
   *
   * @public
   */
  GlobalTableVersion?: string | undefined;

  /**
   * The number of items in the table.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The primary key structure for the table.
   *
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * The ARN of the latest stream for the table.
   *
   * @public
   */
  LatestStreamArn?: string | undefined;

  /**
   * The label of the latest stream. The label is not a unique identifier.
   *
   * @public
   */
  LatestStreamLabel?: string | undefined;

  /**
   * The list of local secondary indexes for the table.
   *
   * @public
   */
  LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[] | undefined;

  /**
   * Information about the provisioned throughput for the table.
   *
   * @public
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput | undefined;

  /**
   * The list of replicas of this table.
   *
   * @public
   */
  Replicas?: AwsDynamoDbTableReplica[] | undefined;

  /**
   * Information about the restore for the table.
   *
   * @public
   */
  RestoreSummary?: AwsDynamoDbTableRestoreSummary | undefined;

  /**
   * Information about the server-side encryption for the table.
   *
   * @public
   */
  SseDescription?: AwsDynamoDbTableSseDescription | undefined;

  /**
   * The current DynamoDB Streams configuration for the table.
   *
   * @public
   */
  StreamSpecification?: AwsDynamoDbTableStreamSpecification | undefined;

  /**
   * The identifier of the table.
   *
   * @public
   */
  TableId?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The total size of the table in bytes.
   *
   * @public
   */
  TableSizeBytes?: number | undefined;

  /**
   * The current status of the table. Valid values are as follows:
   *
   * - `ACTIVE`
   * - `ARCHIVED`
   * - `ARCHIVING`
   * - `CREATING`
   * - `DELETING`
   * - `INACCESSIBLE_ENCRYPTION_CREDENTIALS`
   * - `UPDATING`
   *
   * @public
   */
  TableStatus?: string | undefined;

  /**
   * Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * Provides details about an Active Directory that’s used to authenticate an Client VPN endpoint.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails {
  /**
   * The ID of the Active Directory used for authentication.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * Describes the IAM SAML identity providers used for federated authentication.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails {
  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider.
   *
   * @public
   */
  SamlProviderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.
   *
   * @public
   */
  SelfServiceSamlProviderArn?: string | undefined;
}

/**
 * Information about the client certificate used for authentication.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails {
  /**
   * The Amazon Resource Name (ARN) of the client certificate.
   *
   * @public
   */
  ClientRootCertificateChain?: string | undefined;
}

/**
 * Information about the authentication method used by the Client VPN endpoint.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsDetails {
  /**
   * The authentication type used.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Information about the Active Directory, if applicable. With Active Directory authentication, clients are authenticated against existing Active Directory groups.
   *
   * @public
   */
  ActiveDirectory?: AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails | undefined;

  /**
   * Information about the authentication certificates, if applicable.
   *
   * @public
   */
  MutualAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails | undefined;

  /**
   * Information about the IAM SAML identity provider, if applicable.
   *
   * @public
   */
  FederatedAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails | undefined;
}

/**
 * Describes the status of the Client VPN endpoint attribute.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails {
  /**
   * The status code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The status message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The options for managing connection authorization for new client connections.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientConnectOptionsDetails {
  /**
   * Indicates whether client connect options are enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * The status of any updates to the client connect options.
   *
   * @public
   */
  Status?: AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails | undefined;
}

/**
 * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails {
  /**
   * Current state of text banner feature.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Customizable text that will be displayed in a banner on Amazon Web Services provided clients when a VPN session is established.
   *
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * Information about the client connection logging options for the Client VPN endpoint.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointConnectionLogOptionsDetails {
  /**
   * Indicates whether client connection logging is enabled for the Client VPN endpoint.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log group to which connection logging data is published.
   *
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.
   *
   * @public
   */
  CloudwatchLogStream?: string | undefined;
}

/**
 * Describes an Client VPN endpoint. A Client VPN endpoint is the resource that you create and configure to enable and manage client VPN sessions. It's the termination point for all client VPN sessions.
 *
 * @public
 */
export interface AwsEc2ClientVpnEndpointDetails {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * A brief description of the endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.
   *
   * @public
   */
  ClientCidrBlock?: string | undefined;

  /**
   * Information about the DNS servers to be used for DNS resolution.
   *
   * @public
   */
  DnsServer?: string[] | undefined;

  /**
   * Indicates whether split-tunnel is enabled in the Client VPN endpoint.
   *
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * The transport protocol used by the Client VPN endpoint.
   *
   * @public
   */
  TransportProtocol?: string | undefined;

  /**
   * The port number for the Client VPN endpoint.
   *
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the server certificate.
   *
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * Information about the authentication method used by the Client VPN endpoint.
   *
   * @public
   */
  AuthenticationOptions?: AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[] | undefined;

  /**
   * Information about the client connection logging options for the Client VPN endpoint.
   *
   * @public
   */
  ConnectionLogOptions?: AwsEc2ClientVpnEndpointConnectionLogOptionsDetails | undefined;

  /**
   * The IDs of the security groups for the target network.
   *
   * @public
   */
  SecurityGroupIdSet?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The URL of the self-service portal.
   *
   * @public
   */
  SelfServicePortalUrl?: string | undefined;

  /**
   * The options for managing connection authorization for new client connections.
   *
   * @public
   */
  ClientConnectOptions?: AwsEc2ClientVpnEndpointClientConnectOptionsDetails | undefined;

  /**
   * The maximum VPN session duration time in hours.
   *
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
   *
   * @public
   */
  ClientLoginBannerOptions?: AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails | undefined;
}

/**
 * Information about an Elastic IP address.
 *
 * @public
 */
export interface AwsEc2EipDetails {
  /**
   * The identifier of the EC2 instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A public IP address that is associated with the EC2 instance.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The identifier that Amazon Web Services assigns to represent the allocation of the Elastic IP address for use with Amazon VPC.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The identifier that represents the association of the Elastic IP address with an EC2 instance.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The domain in which to allocate the address.
   *
   * If the address is for use with EC2 instances in a VPC, then `Domain` is `vpc`. Otherwise, `Domain` is `standard`.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The identifier of an IP address pool. This parameter allows Amazon EC2 to select an IP address from the address pool.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * The name of the location from which the Elastic IP address is advertised.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The identifier of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the network interface.
   *
   * @public
   */
  NetworkInterfaceOwnerId?: string | undefined;

  /**
   * The private IP address that is associated with the Elastic IP address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Metadata options that allow you to configure and secure the Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2InstanceMetadataOptions {
  /**
   * Enables or disables the HTTP metadata endpoint on the instance.
   *
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service.
   *
   * @public
   */
  HttpProtocolIpv6?: string | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * The state of token usage for your instance metadata requests.
   *
   * @public
   */
  HttpTokens?: string | undefined;

  /**
   * Specifies whether to allow access to instance tags from the instance metadata.
   *
   * @public
   */
  InstanceMetadataTags?: string | undefined;
}

/**
 * The type of monitoring that’s turned on for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2InstanceMonitoringDetails {
  /**
   * Indicates whether detailed monitoring is turned on. Otherwise, basic monitoring is turned on.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * Identifies a network interface for the Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2InstanceNetworkInterfacesDetails {
  /**
   * The identifier of the network interface. The details are in a corresponding `AwsEc2NetworkInterfacesDetails` object.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * The details of an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2InstanceDetails {
  /**
   * The instance type of the instance.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The Amazon Machine Image (AMI) ID of the instance.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The IPv4 addresses associated with the instance.
   *
   * @public
   */
  IpV4Addresses?: string[] | undefined;

  /**
   * The IPv6 addresses associated with the instance.
   *
   * @public
   */
  IpV6Addresses?: string[] | undefined;

  /**
   * The key name associated with the instance.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The IAM profile ARN of the instance.
   *
   * @public
   */
  IamInstanceProfileArn?: string | undefined;

  /**
   * The identifier of the VPC that the instance was launched in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The identifier of the subnet that the instance was launched in.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Indicates when the instance was launched.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * The identifiers of the network interfaces for the EC2 instance. The details for each network interface are in a corresponding `AwsEc2NetworkInterfacesDetails` object.
   *
   * @public
   */
  NetworkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[] | undefined;

  /**
   * The virtualization type of the Amazon Machine Image (AMI) required to launch the instance.
   *
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * Details about the metadata options for the Amazon EC2 instance.
   *
   * @public
   */
  MetadataOptions?: AwsEc2InstanceMetadataOptions | undefined;

  /**
   * Describes the type of monitoring that’s turned on for an instance.
   *
   * @public
   */
  Monitoring?: AwsEc2InstanceMonitoringDetails | undefined;
}

/**
 * Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you're creating a volume from a snapshot, you can't specify an encryption value.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS).
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the symmetric Key Management Service (KMS) customer managed key used for encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID of the EBS snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type.
   *
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  /**
   * The device name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Parameters used to automatically set up Amazon EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails | undefined;

  /**
   * Omits the device from the block device mapping when an empty string is specified.
   *
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type.
   *
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * Information about the target Capacity Reservation or Capacity Reservation group in which to run an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  /**
   * The ID of the Capacity Reservation in which to run the instance.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Capacity Reservation resource group in which to run the instance.
   *
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  /**
   * Indicates the instance's Capacity Reservation preferences. If equal to `open`, the instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). If equal to `none`, the instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   * @public
   */
  CapacityReservationPreference?: string | undefined;

  /**
   * Specifies a target Capacity Reservation.
   *
   * @public
   */
  CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails | undefined;
}

/**
 * Specifies the CPU options for an Amazon EC2 instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  /**
   * The number of CPU cores for the instance.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads per CPU core. A value of `1` disables multithreading for the instance, The default value is `2`.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * Specifies the credit option for CPU usage of a T2, T3, or T3a Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  /**
   * The credit option for CPU usage of a T instance.
   *
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * Provides details about an Elastic Graphics specification for an Amazon EC2 launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  /**
   * The type of Elastic Graphics accelerator.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Provides details for an Amazon Elastic Inference accelerator.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  /**
   * The number of Elastic Inference accelerators to attach to the instance.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The type of Elastic Inference accelerator.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  /**
   * If this parameter is set to `true`, the instance is enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Specifies whether your Amazon EC2 instance is configured for hibernation.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  /**
   * If you set this parameter to `true`, the instance is enabled for hibernation.
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * Provides details for an Identity and Access Management (IAM) instance profile, which is a container for an IAM role for your instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the instance profile.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Provides details about the market (purchasing) options for Spot Instances.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  /**
   * Deprecated.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * @public
   */
  InstanceInterruptionBehavior?: string | undefined;

  /**
   * The maximum hourly price you're willing to pay for the Spot Instances.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The Spot Instance request type.
   *
   * @public
   */
  SpotInstanceType?: string | undefined;

  /**
   * The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ), for persistent requests.
   *
   * @public
   */
  ValidUntil?: string | undefined;
}

/**
 * Provides details about the market (purchasing) option for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  /**
   * The market type.
   *
   * @public
   */
  MarketType?: string | undefined;

  /**
   * The options for Spot Instances.
   *
   * @public
   */
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails | undefined;
}

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  /**
   * The maximum number of accelerators. If this parameter isn't specified, there's no maximum limit. To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum number of accelerators. If this parameter isn't specified, there's no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum amount of memory, in MiB, for the accelerators on an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  /**
   * The maximum amount of memory, in MiB. If this parameter isn't specified, there's no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum amount of memory, in MiB. If `0` is specified, there's no maximum limit.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum baseline bandwidth to Amazon Elastic Block Store (Amazon EBS), in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  /**
   * The maximum baseline bandwidth, in Mbps. If this parameter is omitted, there's no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum baseline bandwidth, in Mbps. If this parameter is omitted, there's no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum amount of memory per vCPU, in GiB.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  /**
   * The maximum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum amount of memory, in MiB, for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  /**
   * The maximum amount of memory, in MiB.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum amount of memory, in MiB.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum number of network interfaces to be attached to an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  /**
   * The maximum number of network interfaces.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum number of network interfaces.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum amount of total local storage, in GB, that an Amazon EC2 instance uses.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  /**
   * The maximum amount of total local storage, in GB.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum amount of total local storage, in GB.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The minimum and maximum number of vCPUs for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  /**
   * The maximum number of vCPUs.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum number of vCPUs.
   *
   * @public
   */
  Min?: number | undefined;
}

/**
 * The attributes for the Amazon EC2 instance types.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
   *
   * @public
   */
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails | undefined;

  /**
   * Indicates whether instance types must have accelerators by specific manufacturers.
   *
   * @public
   */
  AcceleratorManufacturers?: string[] | undefined;

  /**
   * The accelerators that must be on the instance type.
   *
   * @public
   */
  AcceleratorNames?: string[] | undefined;

  /**
   * The minimum and maximum amount of total accelerator memory, in MiB.
   *
   * @public
   */
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails | undefined;

  /**
   * The accelerator types that must be on the instance type.
   *
   * @public
   */
  AcceleratorTypes?: string[] | undefined;

  /**
   * Indicates whether bare metal instance types must be included, excluded, or required.
   *
   * @public
   */
  BareMetal?: string | undefined;

  /**
   * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails | undefined;

  /**
   * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BurstablePerformance?: string | undefined;

  /**
   * The CPU manufacturers to include.
   *
   * @public
   */
  CpuManufacturers?: string[] | undefined;

  /**
   * The instance types to exclude.
   *
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * Indicates whether current or previous generation instance types are included.
   *
   * @public
   */
  InstanceGenerations?: string[] | undefined;

  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  LocalStorage?: string | undefined;

  /**
   * The type of local storage that is required.
   *
   * @public
   */
  LocalStorageTypes?: string[] | undefined;

  /**
   * The minimum and maximum amount of memory per vCPU, in GiB.
   *
   * @public
   */
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails | undefined;

  /**
   * The minimum and maximum amount of memory, in MiB.
   *
   * @public
   */
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails | undefined;

  /**
   * The minimum and maximum number of network interfaces.
   *
   * @public
   */
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails | undefined;

  /**
   * The price protection threshold for On-Demand Instances. This is the maximum you'll pay for an On-Demand Instance, expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance types priced above your threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * A high value, such as `999999`, turns off price protection.
   *
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * Indicates whether instance types must support hibernation for On-Demand Instances.
   *
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * The price protection threshold for Spot Instances. This is the maximum you'll pay for a Spot Instance, expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance types priced above your threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * A high value, such as `999999`, turns off price protection.
   *
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * The minimum and maximum amount of total local storage, in GB.
   *
   * @public
   */
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails | undefined;

  /**
   * The minimum and maximum number of vCPUs.
   *
   * @public
   */
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails | undefined;
}

/**
 * Provides details about the license configuration for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * The maintenance options of an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  /**
   * Disables the automatic recovery behavior of your instance or sets it to default.
   *
   * @public
   */
  AutoRecovery?: string | undefined;
}

/**
 * Specifies the metadata options for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is enabled, and you won't be able to access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service.
   *
   * @public
   */
  HttpProtocolIpv6?: string | undefined;

  /**
   * The state of token usage for your instance metadata requests.
   *
   * @public
   */
  HttpTokens?: string | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * When set to `enabled`, this parameter allows access to instance tags from the instance metadata. When set to `disabled`, it turns off access to instance tags from the instance metadata. For more information, see [Work with instance tags in instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceMetadataTags?: string | undefined;
}

/**
 * The monitoring for an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  /**
   * Enables detailed monitoring when `true` is specified. Otherwise, basic monitoring is enabled. For more information about detailed monitoring, see [Enable or turn off detailed monitoring for your instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Provides details on one or more IPv4 prefixes for a network interface.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  /**
   * The IPv4 prefix. For more information, see [Assigning prefixes to Amazon EC2 network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Specifies an IPv6 address in an Amazon EC2 launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * Provides details on one or more IPv6 prefixes to be assigned to the network interface.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  /**
   * The IPv6 prefix.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * One or more private IPv4 addresses.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify security groups and subnets as part of the network interface.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  /**
   * Indicates whether to associate a Carrier IP address with eth0 for a new network interface. You use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information, see [Carrier IP address](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Wavelength Developer Guide*.
   *
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * Associates a public IPv4 address with eth0 for a new network interface.
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * A description for the network interface.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The device index for the network interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IDs of one or more security groups.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The type of network interface.
   *
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv4Prefixes` option.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv4PrefixCount` option.
   *
   * @public
   */
  Ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[] | undefined;

  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if you use `Ipv6Addresses`.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you use `Ipv6AddressCount`.
   *
   * @public
   */
  Ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[] | undefined;

  /**
   * The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv6Prefix` option.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv6PrefixCount` option.
   *
   * @public
   */
  Ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[] | undefined;

  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index `0`. The default is network card index `0`.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The primary private IPv4 address of the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * One or more private IPv4 addresses.
   *
   * @public
   */
  PrivateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[] | undefined;

  /**
   * The number of secondary private IPv4 addresses to assign to a network interface.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the subnet for the network interface.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Provides details about the placement of an Amazon EC2 instance.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  /**
   * The affinity setting for an instance on an EC2 Dedicated Host.
   *
   * @public
   */
  Affinity?: string | undefined;

  /**
   * The Availability Zone for the instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The name of the placement group for the instance.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the Dedicated Host for the instance.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the host resource group in which to launch the instances.
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * The number of the partition the instance should launch in.
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
   *
   * @public
   */
  Tenancy?: string | undefined;
}

/**
 * Describes the options for Amazon EC2 instance hostnames.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * The type of hostname for EC2 instances.
   *
   * @public
   */
  HostnameType?: string | undefined;
}

/**
 * The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDataDetails {
  /**
   * Information about a block device mapping for an Amazon EC2 launch template.
   *
   * @public
   */
  BlockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[] | undefined;

  /**
   * Specifies an instance's Capacity Reservation targeting option. You can specify only one option at a time.
   *
   * @public
   */
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails | undefined;

  /**
   * Specifies the CPU options for an instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails | undefined;

  /**
   * Specifies the credit option for CPU usage of a T2, T3, or T3a instance.
   *
   * @public
   */
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails | undefined;

  /**
   * Indicates whether to enable the instance for stop protection. For more information, see [Enable stop protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * If you set this parameter to `true`, you can't terminate the instance using the Amazon EC2 console, CLI, or API. If set to `true`, you can.
   *
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Provides details about Elastic Graphics accelerators to associate with the instance.
   *
   * @public
   */
  ElasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[] | undefined;

  /**
   * The Amazon Elastic Inference accelerator for the instance.
   *
   * @public
   */
  ElasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[] | undefined;

  /**
   * Indicates whether the Amazon EC2 instance is enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails | undefined;

  /**
   * Specifies whether your Amazon EC2 instance is configured for hibernation.
   *
   * @public
   */
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI).
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Provides the options for specifying the instance initiated shutdown behavior.
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: string | undefined;

  /**
   * Specifies the market (purchasing) option for an instance.
   *
   * @public
   */
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes. If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails | undefined;

  /**
   * The instance type. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*. If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair that allows users to connect to the instance.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * Specifies a license configuration for an instance.
   *
   * @public
   */
  LicenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[] | undefined;

  /**
   * The maintenance options of your instance.
   *
   * @public
   */
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails | undefined;

  /**
   * The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails | undefined;

  /**
   * The monitoring for the instance.
   *
   * @public
   */
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails | undefined;

  /**
   * Specifies the parameters for a network interface that is attached to the instance.
   *
   * @public
   */
  NetworkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[] | undefined;

  /**
   * Specifies the placement of an instance.
   *
   * @public
   */
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails | undefined;

  /**
   * The options for the instance hostname.
   *
   * @public
   */
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails | undefined;

  /**
   * The ID of the RAM disk.
   *
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * One or more security group IDs.
   *
   * @public
   */
  SecurityGroupIdSet?: string[] | undefined;

  /**
   * One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.
   *
   * @public
   */
  SecurityGroupSet?: string[] | undefined;

  /**
   * The user data to make available to the instance.
   *
   * @public
   */
  UserData?: string | undefined;
}

/**
 * Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *
 * @public
 */
export interface AwsEc2LaunchTemplateDetails {
  /**
   * A name for the launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * An ID for the launch template.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The information to include in the launch template.
   *
   * @public
   */
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails | undefined;

  /**
   * The default version of the launch template.
   *
   * @public
   */
  DefaultVersionNumber?: number | undefined;

  /**
   * The latest version of the launch template.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;
}

/**
 * An association between the network ACL and a subnet.
 *
 * @public
 */
export interface AwsEc2NetworkAclAssociation {
  /**
   * The identifier of the association between the network ACL and the subnet.
   *
   * @public
   */
  NetworkAclAssociationId?: string | undefined;

  /**
   * The identifier of the network ACL.
   *
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * The identifier of the subnet that is associated with the network ACL.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * An Internet Control Message Protocol (ICMP) type and code.
 *
 * @public
 */
export interface IcmpTypeCode {
  /**
   * The ICMP code for which to deny or allow access. To deny or allow all codes, use the value `-1`.
   *
   * @public
   */
  Code?: number | undefined;

  /**
   * The ICMP type for which to deny or allow access. To deny or allow all types, use the value `-1`.
   *
   * @public
   */
  Type?: number | undefined;
}

/**
 * A range of ports.
 *
 * @public
 */
export interface PortRangeFromTo {
  /**
   * The first port in the port range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The last port in the port range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
 *
 * @public
 */
export interface AwsEc2NetworkAclEntry {
  /**
   * The IPV4 network range for which to deny or allow access.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Whether the rule is an egress rule. An egress rule is a rule that applies to traffic that leaves the subnet.
   *
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * The Internet Control Message Protocol (ICMP) type and code for which to deny or allow access.
   *
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * The IPV6 network range for which to deny or allow access.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * For TCP or UDP protocols, the range of ports that the rule applies to.
   *
   * @public
   */
  PortRange?: PortRangeFromTo | undefined;

  /**
   * The protocol that the rule applies to. To deny or allow access to all protocols, use the value `-1`.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Whether the rule is used to allow access or deny access.
   *
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * The rule number. The rules are processed in order by their number.
   *
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * Contains details about an Amazon EC2 network access control list (ACL).
 *
 * @public
 */
export interface AwsEc2NetworkAclDetails {
  /**
   * Whether this is the default network ACL for the VPC.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The identifier of the network ACL.
   *
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the network ACL.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The identifier of the VPC for the network ACL.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Associations between the network ACL and subnets.
   *
   * @public
   */
  Associations?: AwsEc2NetworkAclAssociation[] | undefined;

  /**
   * The set of rules in the network ACL.
   *
   * @public
   */
  Entries?: AwsEc2NetworkAclEntry[] | undefined;
}

/**
 * Information about the network interface attachment.
 *
 * @public
 */
export interface AwsEc2NetworkInterfaceAttachment {
  /**
   * Indicates when the attachment initiated.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  AttachTime?: string | undefined;

  /**
   * The identifier of the network interface attachment
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index of the network interface attachment on the instance.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the instance.
   *
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * The attachment state.
   *
   * Valid values: `attaching` | `attached` | `detaching` | `detached`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides information about an IPV6 address that is associated with the network interface.
 *
 * @public
 */
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * The IPV6 address.
   *
   * @public
   */
  IpV6Address?: string | undefined;
}

/**
 * Provides information about a private IPv4 address that is with the network interface.
 *
 * @public
 */
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  /**
   * The IP address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The private DNS name for the IP address.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;
}

/**
 * A security group associated with the network interface.
 *
 * @public
 */
export interface AwsEc2NetworkInterfaceSecurityGroup {
  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * Details about the network interface
 *
 * @public
 */
export interface AwsEc2NetworkInterfaceDetails {
  /**
   * The network interface attachment.
   *
   * @public
   */
  Attachment?: AwsEc2NetworkInterfaceAttachment | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Security groups for the network interface.
   *
   * @public
   */
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[] | undefined;

  /**
   * Indicates whether traffic to or from the instance is validated.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * The IPv6 addresses associated with the network interface.
   *
   * @public
   */
  IpV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[] | undefined;

  /**
   * The private IPv4 addresses associated with the network interface.
   *
   * @public
   */
  PrivateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[] | undefined;

  /**
   * The public DNS name of the network interface.
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * The address of the Elastic IP address bound to the network interface.
   *
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * Describes a virtual private gateway propagating route.
 *
 * @public
 */
export interface PropagatingVgwSetDetails {
  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;
}

/**
 * Provides details about the routes in the route table.
 *
 * @public
 */
export interface RouteSetDetails {
  /**
   * The ID of the carrier gateway.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The IPv4 CIDR block used for the destination match.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The IPv6 CIDR block used for the destination match.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * The prefix of the destination Amazon Web Services service.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * The ID of the egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The ID of a gateway attached to your VPC.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The ID of a NAT instance in your VPC.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the instance.
   *
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of a NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Describes how the route was created.
   *
   * @public
   */
  Origin?: string | undefined;

  /**
   * The state of the route.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The ID of a transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * Provides details about a route table for the specified VPC.
 *
 * @public
 */
export interface AwsEc2RouteTableDetails {
  /**
   * The associations between a route table and one or more subnets or a gateway.
   *
   * @public
   */
  AssociationSet?: AssociationSetDetails[] | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the route table.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Describes a virtual private gateway propagating route.
   *
   * @public
   */
  PropagatingVgwSet?: PropagatingVgwSetDetails[] | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The routes in the route table.
   *
   * @public
   */
  RouteSet?: RouteSetDetails[] | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * A range of IPv4 addresses.
 *
 * @public
 */
export interface AwsEc2SecurityGroupIpRange {
  /**
   * The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but not both. To specify a single IPv4 address, use the /32 prefix length.
   *
   * @public
   */
  CidrIp?: string | undefined;
}

/**
 * A range of IPv6 addresses.
 *
 * @public
 */
export interface AwsEc2SecurityGroupIpv6Range {
  /**
   * The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but not both. To specify a single IPv6 address, use the /128 prefix length.
   *
   * @public
   */
  CidrIpv6?: string | undefined;
}

/**
 * A prefix list ID.
 *
 * @public
 */
export interface AwsEc2SecurityGroupPrefixListId {
  /**
   * The ID of the prefix.
   *
   * @public
   */
  PrefixListId?: string | undefined;
}

/**
 * A relationship between a security group and a user.
 *
 * @public
 */
export interface AwsEc2SecurityGroupUserIdGroupPair {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The status of a VPC peering connection, if applicable.
   *
   * @public
   */
  PeeringStatus?: string | undefined;

  /**
   * The ID of an Amazon Web Services account.
   *
   * For a referenced security group in another VPC, the account ID of the referenced security group is returned in the response. If the referenced security group is deleted, this value is not returned.
   *
   * [EC2-Classic] Required when adding or removing rules that reference a security group in another VPC.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The ID of the VPC for the referenced security group, if applicable.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the VPC peering connection, if applicable.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * An IP permission for an EC2 security group.
 *
 * @public
 */
export interface AwsEc2SecurityGroupIpPermission {
  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number.
   *
   * [VPC only] Use `-1` to specify all protocols.
   *
   * When authorizing security group rules, specifying `-1` or a protocol number other than `tcp`, `udp`, `icmp`, or `icmpv6` allows traffic on all ports, regardless of any port range you specify.
   *
   * For `tcp`, `udp`, and `icmp`, you must specify a port range.
   *
   * For `icmpv6`, the port range is optional. If you omit the port range, traffic for all types and codes is allowed.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.
   *
   * A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.
   *
   * A value of `-1` indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The security group and Amazon Web Services account ID pairs.
   *
   * @public
   */
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[] | undefined;

  /**
   * The IPv4 ranges.
   *
   * @public
   */
  IpRanges?: AwsEc2SecurityGroupIpRange[] | undefined;

  /**
   * The IPv6 ranges.
   *
   * @public
   */
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[] | undefined;

  /**
   * [VPC only] The prefix list IDs for an Amazon Web Services service. With outbound rules, this is the Amazon Web Services service to access through a VPC endpoint from instances associated with the security group.
   *
   * @public
   */
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[] | undefined;
}

/**
 * Details about an Amazon EC2 security group.
 *
 * @public
 */
export interface AwsEc2SecurityGroupDetails {
  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the security group.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * [VPC only] The ID of the VPC for the security group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The inbound rules associated with the security group.
   *
   * @public
   */
  IpPermissions?: AwsEc2SecurityGroupIpPermission[] | undefined;

  /**
   * [VPC only] The outbound rules associated with the security group.
   *
   * @public
   */
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[] | undefined;
}

/**
 * An IPV6 CIDR block association.
 *
 * @public
 */
export interface Ipv6CidrBlockAssociation {
  /**
   * The association ID for the IPv6 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv6 CIDR block.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * Information about the state of the CIDR block. Valid values are as follows:
   *
   * - `associating`
   * - `associated`
   * - `disassociating`
   * - `disassociated`
   * - `failed`
   * - `failing`
   *
   * @public
   */
  CidrBlockState?: string | undefined;
}

/**
 * Contains information about a subnet in Amazon EC2.
 *
 * @public
 */
export interface AwsEc2SubnetDetails {
  /**
   * Whether to assign an IPV6 address to a network interface that is created in this subnet.
   *
   * @public
   */
  AssignIpv6AddressOnCreation?: boolean | undefined;

  /**
   * The Availability Zone for the subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The identifier of the Availability Zone for the subnet.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The number of available IPV4 addresses in the subnet. Does not include addresses for stopped instances.
   *
   * @public
   */
  AvailableIpAddressCount?: number | undefined;

  /**
   * The IPV4 CIDR block that is assigned to the subnet.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Whether this subnet is the default subnet for the Availability Zone.
   *
   * @public
   */
  DefaultForAz?: boolean | undefined;

  /**
   * Whether instances in this subnet receive a public IP address.
   *
   * @public
   */
  MapPublicIpOnLaunch?: boolean | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the subnet.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of the subnet. Valid values are `available` or `pending`.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The ARN of the subnet.
   *
   * @public
   */
  SubnetArn?: string | undefined;

  /**
   * The identifier of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The identifier of the VPC that contains the subnet.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The IPV6 CIDR blocks that are associated with the subnet.
   *
   * @public
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[] | undefined;
}

/**
 * Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects virtual private clouds (VPCs) and on-premises networks.
 *
 * @public
 */
export interface AwsEc2TransitGatewayDetails {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The description of the transit gateway.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Turn on or turn off automatic propagation of routes to the default propagation route table.
   *
   * @public
   */
  DefaultRouteTablePropagation?: string | undefined;

  /**
   * Turn on or turn off automatic acceptance of attachment requests.
   *
   * @public
   */
  AutoAcceptSharedAttachments?: string | undefined;

  /**
   * Turn on or turn off automatic association with the default association route table.
   *
   * @public
   */
  DefaultRouteTableAssociation?: string | undefined;

  /**
   * The transit gateway Classless Inter-Domain Routing (CIDR) blocks.
   *
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * The ID of the default association route table.
   *
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * The ID of the default propagation route table.
   *
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * Turn on or turn off Equal Cost Multipath Protocol (ECMP) support.
   *
   * @public
   */
  VpnEcmpSupport?: string | undefined;

  /**
   * Turn on or turn off DNS support.
   *
   * @public
   */
  DnsSupport?: string | undefined;

  /**
   * Indicates whether multicast is supported on the transit gateway.
   *
   * @public
   */
  MulticastSupport?: string | undefined;

  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;
}

/**
 * An attachment to an Amazon EC2 volume.
 *
 * @public
 */
export interface AwsEc2VolumeAttachment {
  /**
   * The datetime when the attachment initiated.
   *
   * @public
   */
  AttachTime?: string | undefined;

  /**
   * Whether the EBS volume is deleted when the EC2 instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The identifier of the EC2 instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The attachment state of the volume. Valid values are as follows:
   *
   * - `attaching`
   * - `attached`
   * - `busy`
   * - `detaching`
   * - `detached`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Details about an EC2 volume.
 *
 * @public
 */
export interface AwsEc2VolumeDetails {
  /**
   * Indicates when the volume was created.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * The device name for the volume that is attached to the instance.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Specifies whether the volume is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The size of the volume, in GiBs.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The snapshot from which the volume was created.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The volume state. Valid values are as follows:
   *
   * - `available`
   * - `creating`
   * - `deleted`
   * - `deleting`
   * - `error`
   * - `in-use`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The ARN of the KMS key that was used to protect the volume encryption key for the volume.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The volume attachments.
   *
   * @public
   */
  Attachments?: AwsEc2VolumeAttachment[] | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The volume type.
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * Indicates whether the volume was scanned or skipped.
   *
   * @public
   */
  VolumeScanStatus?: string | undefined;
}

/**
 * An IPv4 CIDR block association.
 *
 * @public
 */
export interface CidrBlockAssociation {
  /**
   * The association ID for the IPv4 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv4 CIDR block.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Information about the state of the IPv4 CIDR block.
   *
   * @public
   */
  CidrBlockState?: string | undefined;
}

/**
 * Details about an EC2 VPC.
 *
 * @public
 */
export interface AwsEc2VpcDetails {
  /**
   * Information about the IPv4 CIDR blocks associated with the VPC.
   *
   * @public
   */
  CidrBlockAssociationSet?: CidrBlockAssociation[] | undefined;

  /**
   * Information about the IPv6 CIDR blocks associated with the VPC.
   *
   * @public
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[] | undefined;

  /**
   * The identifier of the set of Dynamic Host Configuration Protocol (DHCP) options that are associated with the VPC. If the default options are associated with the VPC, then this is default.
   *
   * @public
   */
  DhcpOptionsId?: string | undefined;

  /**
   * The current state of the VPC. Valid values are `available` or `pending`.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * The service type information for a VPC endpoint service.
 *
 * @public
 */
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  /**
   * The type of service.
   *
   * @public
   */
  ServiceType?: string | undefined;
}

/**
 * Contains details about the service configuration for a VPC endpoint service.
 *
 * @public
 */
export interface AwsEc2VpcEndpointServiceDetails {
  /**
   * Whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * The Availability Zones where the service is available.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The DNS names for the service.
   *
   * @public
   */
  BaseEndpointDnsNames?: string[] | undefined;

  /**
   * Whether the service manages its VPC endpoints.
   *
   * @public
   */
  ManagesVpcEndpoints?: boolean | undefined;

  /**
   * The ARNs of the Gateway Load Balancers for the service.
   *
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The ARNs of the Network Load Balancers for the service.
   *
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The private DNS name for the service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The current state of the service. Valid values are as follows:
   *
   * - `Available`
   * - `Deleted`
   * - `Deleting`
   * - `Failed`
   * - `Pending`
   *
   * @public
   */
  ServiceState?: string | undefined;

  /**
   * The types for the service.
   *
   * @public
   */
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[] | undefined;
}

/**
 * Provides details about the IPv4 CIDR blocks for the VPC.
 *
 * @public
 */
export interface VpcInfoCidrBlockSetDetails {
  /**
   * The IPv4 CIDR block for the VPC.
   *
   * @public
   */
  CidrBlock?: string | undefined;
}

/**
 * Provides details about the IPv6 CIDR blocks for the VPC.
 *
 * @public
 */
export interface VpcInfoIpv6CidrBlockSetDetails {
  /**
   * The IPv6 CIDR block for the VPC.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * Provides information about the VPC peering connection options for the accepter or requester VPC.
 *
 * @public
 */
export interface VpcInfoPeeringOptionsDetails {
  /**
   * Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.
   *
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.
   *
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.
   *
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * Describes a VPC in a VPC peering connection.
 *
 * @public
 */
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  /**
   * The IPv4 CIDR block for the VPC.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Information about the IPv4 CIDR blocks for the VPC.
   *
   * @public
   */
  CidrBlockSet?: VpcInfoCidrBlockSetDetails[] | undefined;

  /**
   * The IPv6 CIDR block for the VPC.
   *
   * @public
   */
  Ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[] | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the VPC.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Information about the VPC peering connection options for the accepter or requester VPC.
   *
   * @public
   */
  PeeringOptions?: VpcInfoPeeringOptionsDetails | undefined;

  /**
   * The Amazon Web Services Region in which the VPC is located.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Details about the status of the VPC peering connection.
 *
 * @public
 */
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  /**
   * The status of the VPC peering connection.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message that provides more information about the status, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection.
 *
 * @public
 */
export interface AwsEc2VpcPeeringConnectionDetails {
  /**
   * Information about the accepter VPC.
   *
   * @public
   */
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails | undefined;

  /**
   * The time at which an unaccepted VPC peering connection will expire.
   *
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * Information about the requester VPC.
   *
   * @public
   */
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails | undefined;

  /**
   * The status of the VPC peering connection.
   *
   * @public
   */
  Status?: AwsEc2VpcPeeringConnectionStatusDetails | undefined;

  /**
   * The ID of the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * The VPN tunnel options.
 *
 * @public
 */
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  /**
   * The number of seconds after which a Dead Peer Detection (DPD) timeout occurs.
   *
   * @public
   */
  DpdTimeoutSeconds?: number | undefined;

  /**
   * The Internet Key Exchange (IKE) versions that are permitted for the VPN tunnel.
   *
   * @public
   */
  IkeVersions?: string[] | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1DhGroupNumbers?: number[] | undefined;

  /**
   * The permitted encryption algorithms for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1EncryptionAlgorithms?: string[] | undefined;

  /**
   * The permitted integrity algorithms for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1IntegrityAlgorithms?: string[] | undefined;

  /**
   * The lifetime for phase 1 of the IKE negotiation, in seconds.
   *
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2DhGroupNumbers?: number[] | undefined;

  /**
   * The permitted encryption algorithms for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2EncryptionAlgorithms?: string[] | undefined;

  /**
   * The permitted integrity algorithms for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2IntegrityAlgorithms?: string[] | undefined;

  /**
   * The lifetime for phase 2 of the IKE negotiation, in seconds.
   *
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * The preshared key to establish initial authentication between the virtual private gateway and the customer gateway.
   *
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * The percentage of the rekey window, which is determined by `RekeyMarginTimeSeconds` during which the rekey time is randomly selected.
   *
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services side of the VPN connection performs an IKE rekey.
   *
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * The number of packets in an IKE replay window.
   *
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * The range of inside IPv4 addresses for the tunnel.
   *
   * @public
   */
  TunnelInsideCidr?: string | undefined;
}

/**
 * VPN connection options.
 *
 * @public
 */
export interface AwsEc2VpnConnectionOptionsDetails {
  /**
   * Whether the VPN connection uses static routes only.
   *
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;

  /**
   * The VPN tunnel options.
   *
   * @public
   */
  TunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] | undefined;
}

/**
 * A static routes associated with the VPN connection.
 *
 * @public
 */
export interface AwsEc2VpnConnectionRoutesDetails {
  /**
   * The CIDR block associated with the local subnet of the customer data center.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The current state of the static route.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * Information about the VPN tunnel.
 *
 * @public
 */
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  /**
   * The number of accepted routes.
   *
   * @public
   */
  AcceptedRouteCount?: number | undefined;

  /**
   * The ARN of the VPN tunnel endpoint certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The date and time of the last change in status.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  LastStatusChange?: string | undefined;

  /**
   * The Internet-routable IP address of the virtual private gateway's outside interface.
   *
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * The status of the VPN tunnel. Valid values are `DOWN` or `UP`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurs, a description of the error.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Details about an Amazon EC2 VPN connection.
 *
 * @public
 */
export interface AwsEc2VpnConnectionDetails {
  /**
   * The identifier of the VPN connection.
   *
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * The current state of the VPN connection. Valid values are as follows:
   *
   * - `available`
   * - `deleted`
   * - `deleting`
   * - `pending`
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The identifier of the customer gateway that is at your end of the VPN connection.
   *
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * The configuration information for the VPN connection's customer gateway, in the native XML format.
   *
   * @public
   */
  CustomerGatewayConfiguration?: string | undefined;

  /**
   * The type of VPN connection.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The identifier of the virtual private gateway that is at the Amazon Web Services side of the VPN connection.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * The category of the VPN connection. `VPN` indicates an Amazon Web Services VPN connection. `VPN-Classic` indicates an Amazon Web Services Classic VPN connection.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * Information about the VPN tunnel.
   *
   * @public
   */
  VgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[] | undefined;

  /**
   * The VPN connection options.
   *
   * @public
   */
  Options?: AwsEc2VpnConnectionOptionsDetails | undefined;

  /**
   * The static routes that are associated with the VPN connection.
   *
   * @public
   */
  Routes?: AwsEc2VpnConnectionRoutesDetails[] | undefined;

  /**
   * The identifier of the transit gateway that is associated with the VPN connection.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;
}

/**
 * Information about an Amazon ECR image.
 *
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * The Amazon Web Services account identifier that is associated with the registry that the image belongs to.
   *
   * @public
   */
  RegistryId?: string | undefined;

  /**
   * The name of the repository that the image belongs to.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The architecture of the image. Valid values are as follows:
   *
   * - `arm64`
   * - `i386`
   * - `x86_64`
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * The sha256 digest of the image manifest.
   *
   * @public
   */
  ImageDigest?: string | undefined;

  /**
   * The list of tags that are associated with the image.
   *
   * @public
   */
  ImageTags?: string[] | undefined;

  /**
   * The date and time when the image was pushed to the repository.
   *
   * For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
   *
   * @public
   */
  ImagePublishedAt?: string | undefined;
}

/**
 * The image scanning configuration for a repository.
 *
 * @public
 */
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  /**
   * Whether to scan images after they are pushed to a repository.
   *
   * @public
   */
  ScanOnPush?: boolean | undefined;
}

/**
 * Information about the lifecycle policy for the repository.
 *
 * @public
 */
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  /**
   * The text of the lifecycle policy.
   *
   * @public
   */
  LifecyclePolicyText?: string | undefined;

  /**
   * The Amazon Web Services account identifier that is associated with the registry that contains the repository.
   *
   * @public
   */
  RegistryId?: string | undefined;
}

/**
 * Provides information about an Amazon Elastic Container Registry repository.
 *
 * @public
 */
export interface AwsEcrRepositoryDetails {
  /**
   * The ARN of the repository.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The image scanning configuration for a repository.
   *
   * @public
   */
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails | undefined;

  /**
   * The tag mutability setting for the repository. Valid values are `IMMUTABLE` or `MUTABLE`.
   *
   * @public
   */
  ImageTagMutability?: string | undefined;

  /**
   * Information about the lifecycle policy for the repository.
   *
   * @public
   */
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The text of the repository policy.
   *
   * @public
   */
  RepositoryPolicyText?: string | undefined;
}

/**
 * Indicates whether to enable CloudWatch Container Insights for the ECS cluster.
 *
 * @public
 */
export interface AwsEcsClusterClusterSettingsDetails {
  /**
   * The name of the setting. The valid value is `containerInsights`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the setting. Valid values are `disabled` or `enabled`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The log configuration for the results of the run command actions.
 *
 * @public
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  /**
   * Whether to enable encryption on the CloudWatch logs.
   *
   * @public
   */
  CloudWatchEncryptionEnabled?: boolean | undefined;

  /**
   * The name of the CloudWatch log group to send the logs to.
   *
   * @public
   */
  CloudWatchLogGroupName?: string | undefined;

  /**
   * The name of the S3 bucket to send logs to.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Whether to encrypt the logs that are sent to the S3 bucket.
   *
   * @public
   */
  S3EncryptionEnabled?: boolean | undefined;

  /**
   * Identifies the folder in the S3 bucket to send the logs to.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * Contains the run command configuration for the cluster.
 *
 * @public
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  /**
   * The identifier of the KMS key that is used to encrypt the data between the local client and the container.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The log configuration for the results of the run command actions. Required if `Logging` is `NONE`.
   *
   * @public
   */
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails | undefined;

  /**
   * The log setting to use for redirecting logs for run command results.
   *
   * @public
   */
  Logging?: string | undefined;
}

/**
 * The run command configuration for the cluster.
 *
 * @public
 */
export interface AwsEcsClusterConfigurationDetails {
  /**
   * Contains the run command configuration for the cluster.
   *
   * @public
   */
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails | undefined;
}

/**
 * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
 *
 * @public
 */
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  /**
   * The minimum number of tasks to run on the specified capacity provider.
   *
   * @public
   */
  Base?: number | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  CapacityProvider?: string | undefined;

  /**
   * The relative percentage of the total number of tasks launched that should use the capacity provider.
   *
   * @public
   */
  Weight?: number | undefined;
}

/**
 * Provides details about an Amazon ECS cluster.
 *
 * @public
 */
export interface AwsEcsClusterDetails {
  /**
   * The Amazon Resource Name (ARN) that identifies the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The number of services that are running on the cluster in an `ACTIVE` state. You can view these services with the Amazon ECS [`ListServices`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html) API operation.
   *
   * @public
   */
  ActiveServicesCount?: number | undefined;

  /**
   * The short name of one or more capacity providers to associate with the cluster.
   *
   * @public
   */
  CapacityProviders?: string[] | undefined;

  /**
   * The setting to use to create the cluster. Specifically used to configure whether to enable CloudWatch Container Insights for the cluster.
   *
   * @public
   */
  ClusterSettings?: AwsEcsClusterClusterSettingsDetails[] | undefined;

  /**
   * The run command configuration for the cluster.
   *
   * @public
   */
  Configuration?: AwsEcsClusterConfigurationDetails | undefined;

  /**
   * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
   *
   * @public
   */
  DefaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[] | undefined;

  /**
   * A name that you use to identify your cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The number of container instances registered into the cluster. This includes container instances in both `ACTIVE` and `DRAINING` status.
   *
   * @public
   */
  RegisteredContainerInstancesCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the `RUNNING` state.
   *
   * @public
   */
  RunningTasksCount?: number | undefined;

  /**
   * The status of the cluster.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Details for a volume mount point that's used in a container definition.
 *
 * @public
 */
export interface AwsMountPoint {
  /**
   * The name of the volume to mount. Must be a volume name referenced in the `name` parameter of task definition `volume`.
   *
   * @public
   */
  SourceVolume?: string | undefined;

  /**
   * The path on the container to mount the host volume at.
   *
   * @public
   */
  ContainerPath?: string | undefined;
}

/**
 * Provides information about an Amazon ECS container.
 *
 * @public
 */
export interface AwsEcsContainerDetails {
  /**
   * The name of the container.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The image used for the container.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * @public
   */
  MountPoints?: AwsMountPoint[] | undefined;

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user).
   *
   * @public
   */
  Privileged?: boolean | undefined;
}

/**
 * Strategy item for the capacity provider strategy that the service uses.
 *
 * @public
 */
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  /**
   * The minimum number of tasks to run on the capacity provider. Only one strategy item can specify a value for `Base`.
   *
   * The value must be between 0 and 100000.
   *
   * @public
   */
  Base?: number | undefined;

  /**
   * The short name of the capacity provider.
   *
   * @public
   */
  CapacityProvider?: string | undefined;

  /**
   * The relative percentage of the total number of tasks that should use the capacity provider.
   *
   * If no weight is specified, the default value is 0. At least one capacity provider must have a weight greater than 0.
   *
   * The value can be between 0 and 1000.
   *
   * @public
   */
  Weight?: number | undefined;
}

/**
 * Determines whether a service deployment fails if a service cannot reach a steady state.
 *
 * @public
 */
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  /**
   * Whether to enable the deployment circuit breaker logic for the service.
   *
   * @public
   */
  Enable?: boolean | undefined;

  /**
   * Whether to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
   *
   * @public
   */
  Rollback?: boolean | undefined;
}

/**
 * Optional deployment parameters for the service.
 *
 * @public
 */
export interface AwsEcsServiceDeploymentConfigurationDetails {
  /**
   * Determines whether a service deployment fails if a service cannot reach a steady state.
   *
   * @public
   */
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails | undefined;

  /**
   * For a service that uses the rolling update (`ECS`) deployment type, the maximum number of tasks in a service that are allowed in the `RUNNING` or `PENDING` state during a deployment, and for tasks that use the EC2 launch type, when any container instances are in the `DRAINING` state. Provided as a percentage of the desired number of tasks. The default value is 200%.
   *
   * For a service that uses the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types, and tasks that use the EC2 launch type, the maximum number of tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
   *
   * For the Fargate launch type, the maximum percent value is not used.
   *
   * @public
   */
  MaximumPercent?: number | undefined;

  /**
   * For a service that uses the rolling update (`ECS`) deployment type, the minimum number of tasks in a service that must remain in the `RUNNING` state during a deployment, and while any container instances are in the `DRAINING` state if the service contains tasks using the EC2 launch type. Expressed as a percentage of the desired number of tasks. The default value is 100%.
   *
   * For a service that uses the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types and tasks that use the EC2 launch type, the minimum number of the tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
   *
   * For the Fargate launch type, the minimum healthy percent value is not used.
   *
   * @public
   */
  MinimumHealthyPercent?: number | undefined;
}

/**
 * Information about the deployment controller type that the service uses.
 *
 * @public
 */
export interface AwsEcsServiceDeploymentControllerDetails {
  /**
   * The rolling update (`ECS`) deployment type replaces the current running version of the container with the latest version.
   *
   * The blue/green (`CODE_DEPLOY`) deployment type uses the blue/green deployment model that is powered by CodeDeploy. This deployment model a new deployment of a service can be verified before production traffic is sent to it.
   *
   * The external (`EXTERNAL`) deployment type allows the use of any third-party deployment controller for full control over the deployment process for an Amazon ECS service.
   *
   * Valid values: `ECS` | `CODE_DEPLOY` | `EXTERNAL`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about a load balancer that the service uses.
 *
 * @public
 */
export interface AwsEcsServiceLoadBalancersDetails {
  /**
   * The name of the container to associate with the load balancer.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The port on the container to associate with the load balancer. This port must correspond to a `containerPort` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the `hostPort` of the port mapping.
   *
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * The name of the load balancer to associate with the Amazon ECS service or task set.
   *
   * Only specified when using a Classic Load Balancer. For an Application Load Balancer or a Network Load Balancer, the load balancer name is omitted.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The ARN of the Elastic Load Balancing target group or groups associated with a service or task set.
   *
   * Only specified when using an Application Load Balancer or a Network Load Balancer. For a Classic Load Balancer, the target group ARN is omitted.
   *
   * @public
   */
  TargetGroupArn?: string | undefined;
}

/**
 * For tasks that use the `awsvpc` networking mode, the VPC subnet and security group configuration.
 *
 * @public
 */
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  /**
   * Whether the task's elastic network interface receives a public IP address. The default value is `DISABLED`.
   *
   * Valid values: `ENABLED` | `DISABLED`
   *
   * @public
   */
  AssignPublicIp?: string | undefined;

  /**
   * The IDs of the security groups associated with the task or service.
   *
   * You can provide up to five security groups.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The IDs of the subnets associated with the task or service.
   *
   * You can provide up to 16 subnets.
   *
   * @public
   */
  Subnets?: string[] | undefined;
}

/**
 * For tasks that use the `awsvpc` networking mode, the VPC subnet and security group configuration.
 *
 * @public
 */
export interface AwsEcsServiceNetworkConfigurationDetails {
  /**
   * The VPC subnet and security group configuration.
   *
   * @public
   */
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails | undefined;
}

/**
 * A placement constraint for the tasks in the service.
 *
 * @public
 */
export interface AwsEcsServicePlacementConstraintsDetails {
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * The type of constraint. Use `distinctInstance` to run each task in a particular group on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
   *
   * Valid values: `distinctInstance` | `memberOf`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A placement strategy that determines how to place the tasks for the service.
 *
 * @public
 */
export interface AwsEcsServicePlacementStrategiesDetails {
  /**
   * The field to apply the placement strategy against.
   *
   * For the `spread` placement strategy, valid values are `instanceId` (or `host`, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as `attribute:ecs.availability-zone`.
   *
   * For the `binpack` placement strategy, valid values are `cpu` and `memory`.
   *
   * For the `random` placement strategy, this attribute is not used.
   *
   * @public
   */
  Field?: string | undefined;

  /**
   * The type of placement strategy.
   *
   * The `random` placement strategy randomly places tasks on available candidates.
   *
   * The `spread` placement strategy spreads placement across available candidates evenly based on the value of `Field`.
   *
   * The `binpack` strategy places tasks on available candidates that have the least available amount of the resource that is specified in `Field`.
   *
   * Valid values: `random` | `spread` | `binpack`
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about a service discovery registry to assign to the service.
 *
 * @public
 */
export interface AwsEcsServiceServiceRegistriesDetails {
  /**
   * The container name value to use for the service discovery service.
   *
   * If the task definition uses the `bridge` or `host` network mode, you must specify `ContainerName` and `ContainerPort`.
   *
   * If the task definition uses the `awsvpc` network mode and a type SRV DNS record, you must specify either `ContainerName` and `ContainerPort`, or `Port` , but not both.
   *
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * The port value to use for the service discovery service.
   *
   * If the task definition uses the `bridge` or `host` network mode, you must specify `ContainerName` and `ContainerPort`.
   *
   * If the task definition uses the `awsvpc` network mode and a type SRV DNS record, you must specify either `ContainerName` and `ContainerPort`, or `Port` , but not both.
   *
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * The port value to use for a service discovery service that specifies an SRV record. This field can be used if both the `awsvpc`awsvpc network mode and SRV records are used.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ARN of the service registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * Provides details about a service within an ECS cluster.
 *
 * @public
 */
export interface AwsEcsServiceDetails {
  /**
   * The capacity provider strategy that the service uses.
   *
   * @public
   */
  CapacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[] | undefined;

  /**
   * The ARN of the cluster that hosts the service.
   *
   * @public
   */
  Cluster?: string | undefined;

  /**
   * Deployment parameters for the service. Includes the number of tasks that run and the order in which to start and stop tasks.
   *
   * @public
   */
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails | undefined;

  /**
   * Contains the deployment controller type that the service uses.
   *
   * @public
   */
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails | undefined;

  /**
   * The number of instantiations of the task definition to run on the service.
   *
   * @public
   */
  DesiredCount?: number | undefined;

  /**
   * Whether to enable Amazon ECS managed tags for the tasks in the service.
   *
   * @public
   */
  EnableEcsManagedTags?: boolean | undefined;

  /**
   * Whether the execute command functionality is enabled for the service.
   *
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * After a task starts, the amount of time in seconds that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks.
   *
   * @public
   */
  HealthCheckGracePeriodSeconds?: number | undefined;

  /**
   * The launch type that the service uses.
   *
   * Valid values: `EC2` | `FARGATE` | `EXTERNAL`
   *
   * @public
   */
  LaunchType?: string | undefined;

  /**
   * Information about the load balancers that the service uses.
   *
   * @public
   */
  LoadBalancers?: AwsEcsServiceLoadBalancersDetails[] | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * For tasks that use the `awsvpc` networking mode, the VPC subnet and security group configuration.
   *
   * @public
   */
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails | undefined;

  /**
   * The placement constraints for the tasks in the service.
   *
   * @public
   */
  PlacementConstraints?: AwsEcsServicePlacementConstraintsDetails[] | undefined;

  /**
   * Information about how tasks for the service are placed.
   *
   * @public
   */
  PlacementStrategies?: AwsEcsServicePlacementStrategiesDetails[] | undefined;

  /**
   * The platform version on which to run the service. Only specified for tasks that are hosted on Fargate. If a platform version is not specified, the `LATEST` platform version is used by default.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * Indicates whether to propagate the tags from the task definition to the task or from the service to the task. If no value is provided, then tags are not propagated.
   *
   * Valid values: `TASK_DEFINITION` | `SERVICE`
   *
   * @public
   */
  PropagateTags?: string | undefined;

  /**
   * The ARN of the IAM role that is associated with the service. The role allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The scheduling strategy to use for the service.
   *
   * The `REPLICA` scheduling strategy places and maintains the desired number of tasks across the cluster. By default, the service scheduler spreads tasks across Availability Zones. Task placement strategies and constraints are used to customize task placement decisions.
   *
   * The `DAEMON` scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that are specified in the cluster. The service scheduler also evaluates the task placement constraints for running tasks and stops tasks that don't meet the placement constraints.
   *
   * Valid values: `REPLICA` | `DAEMON`
   *
   * @public
   */
  SchedulingStrategy?: string | undefined;

  /**
   * The ARN of the service.
   *
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * The name of the service.
   *
   * The name can contain up to 255 characters. It can use letters, numbers, underscores, and hyphens.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Information about the service discovery registries to assign to the service.
   *
   * @public
   */
  ServiceRegistries?: AwsEcsServiceServiceRegistriesDetails[] | undefined;

  /**
   * The task definition to use for tasks in the service.
   *
   * @public
   */
  TaskDefinition?: string | undefined;
}

/**
 * A dependency that is defined for container startup and shutdown.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  /**
   * The dependency condition of the dependent container. Indicates the required status of the dependent container before the current container can start. Valid values are as follows:
   *
   * - `COMPLETE`
   * - `HEALTHY`
   * - `SUCCESS`
   * - `START`
   *
   * @public
   */
  Condition?: string | undefined;

  /**
   * The name of the dependent container.
   *
   * @public
   */
  ContainerName?: string | undefined;
}

/**
 * An environment variable to pass to the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  /**
   * The name of the environment variable.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the environment variable.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A file that contain environment variables to pass to a container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * The type of environment file. The valid value is `s3`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The ARN of the S3 object that contains the environment variable file.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A hostname and IP address mapping to append to the **\/etc/hosts** file on the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * The hostname to use in the **\/etc/hosts** entry.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The IP address to use in the **\/etc/hosts** entry.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * The options to use to configure the log router.
   *
   * The valid option keys are as follows:
   *
   * - `enable-ecs-log-metadata`. The value can be `true` or `false`.
   * - `config-file-type`. The value can be `s3` or `file`.
   * - `config-file-value`. The value is either an S3 ARN or a file path.
   *
   * @public
   */
  Options?: Record<string, string> | undefined;

  /**
   * The log router to use. Valid values are `fluentbit` or `fluentd`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * The container health check command and associated configuration parameters for the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * The command that the container runs to determine whether it is healthy.
   *
   * @public
   */
  Command?: string[] | undefined;

  /**
   * The time period in seconds between each health check execution. The default value is 30 seconds.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The number of times to retry a failed health check before the container is considered unhealthy. The default value is 3.
   *
   * @public
   */
  Retries?: number | undefined;

  /**
   * The optional grace period in seconds that allows containers time to bootstrap before failed health checks count towards the maximum number of retries.
   *
   * @public
   */
  StartPeriod?: number | undefined;

  /**
   * The time period in seconds to wait for a health check to succeed before it is considered a failure. The default value is 5.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * The Linux capabilities for the container that are added to the default configuration provided by Docker. Valid values are as follows:
   *
   * Valid values: `"ALL"` | `"AUDIT_CONTROL"` |`"AUDIT_WRITE"` | `"BLOCK_SUSPEND"` | `"CHOWN"` | `"DAC_OVERRIDE"` | `"DAC_READ_SEARCH"` | `"FOWNER"` | `"FSETID"` | `"IPC_LOCK"` | `"IPC_OWNER"` | `"KILL"` | `"LEASE"` | `"LINUX_IMMUTABLE"` | `"MAC_ADMIN"` |`"MAC_OVERRIDE"` | `"MKNOD"` | `"NET_ADMIN"` | `"NET_BIND_SERVICE"` | `"NET_BROADCAST"` | `"NET_RAW"` | `"SETFCAP"` | `"SETGID"` | `"SETPCAP"` | `"SETUID"` | `"SYS_ADMIN"` | `"SYS_BOOT"` | `"SYS_CHROOT"` | `"SYS_MODULE"` | `"SYS_NICE"` | `"SYS_PACCT"` | `"SYS_PTRACE"` | `"SYS_RAWIO"` | `"SYS_RESOURCE"` | `"SYS_TIME"` | `"SYS_TTY_CONFIG"` | `"SYSLOG"` | `"WAKE_ALARM"`
   *
   * @public
   */
  Add?: string[] | undefined;

  /**
   * The Linux capabilities for the container that are dropped from the default configuration provided by Docker.
   *
   * Valid values: `"ALL"` | `"AUDIT_CONTROL"` |`"AUDIT_WRITE"` | `"BLOCK_SUSPEND"` | `"CHOWN"` | `"DAC_OVERRIDE"` | `"DAC_READ_SEARCH"` | `"FOWNER"` | `"FSETID"` | `"IPC_LOCK"` | `"IPC_OWNER"` | `"KILL"` | `"LEASE"` | `"LINUX_IMMUTABLE"` | `"MAC_ADMIN"` |`"MAC_OVERRIDE"` | `"MKNOD"` | `"NET_ADMIN"` | `"NET_BIND_SERVICE"` | `"NET_BROADCAST"` | `"NET_RAW"` | `"SETFCAP"` | `"SETGID"` | `"SETPCAP"` | `"SETUID"` | `"SYS_ADMIN"` | `"SYS_BOOT"` | `"SYS_CHROOT"` | `"SYS_MODULE"` | `"SYS_NICE"` | `"SYS_PACCT"` | `"SYS_PTRACE"` | `"SYS_RAWIO"` | `"SYS_RESOURCE"` | `"SYS_TIME"` | `"SYS_TTY_CONFIG"` | `"SYSLOG"` | `"WAKE_ALARM"`
   *
   * @public
   */
  Drop?: string[] | undefined;
}

/**
 * A host device to expose to the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * The path inside the container at which to expose the host device.
   *
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * The path for the device on the host container instance.
   *
   * @public
   */
  HostPath?: string | undefined;

  /**
   * The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and `mknod` for the device.
   *
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * The container path, mount options, and size (in MiB) of a tmpfs mount.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * The absolute file path where the tmpfs volume is to be mounted.
   *
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * The list of tmpfs volume mount options.
   *
   * Valid values: `"defaults"` | `"ro"` | `"rw"` | `"suid"` | `"nosuid"` | `"dev"` | `"nodev"` |`"exec"` | `"noexec"` | `"sync"` | `"async"` | `"dirsync"` | `"remount"` | `"mand"` | `"nomand"` | `"atime"` | `"noatime"` | `"diratime"` | `"nodiratime"` | `"bind"` | `"rbind"` | `"unbindable"` | `"runbindable"` | `"private"` | `"rprivate"` | `"shared"` | `"rshared"` | `"slave"` | `"rslave"` | `"relatime"` | `"norelatime"` | `"strictatime"` | `"nostrictatime"` |`"mode"` | `"uid"` | `"gid"` | `"nr_inodes"` |`"nr_blocks"` | `"mpol"`
   *
   * @public
   */
  MountOptions?: string[] | undefined;

  /**
   * The maximum size (in MiB) of the tmpfs volume.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * >Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
   *
   * @public
   */
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails | undefined;

  /**
   * The host devices to expose to the container.
   *
   * @public
   */
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[] | undefined;

  /**
   * Whether to run an `init` process inside the container that forwards signals and reaps processes.
   *
   * @public
   */
  InitProcessEnabled?: boolean | undefined;

  /**
   * The total amount of swap memory (in MiB) that a container can use.
   *
   * @public
   */
  MaxSwap?: number | undefined;

  /**
   * The value for the size (in MiB) of the **\/dev/shm** volume.
   *
   * @public
   */
  SharedMemorySize?: number | undefined;

  /**
   * Configures the container's memory swappiness behavior. Determines how aggressively pages are swapped. The higher the value, the more aggressive the swappiness. The default is 60.
   *
   * @public
   */
  Swappiness?: number | undefined;

  /**
   * The container path, mount options, and size (in MiB) of the tmpfs mount.
   *
   * @public
   */
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[] | undefined;
}

/**
 * A secret to pass to the log configuration.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The secret to expose to the container.
   *
   * The value is either the full ARN of the Secrets Manager secret or the full ARN of the parameter in the Systems Manager Parameter Store.
   *
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * The log configuration specification for the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * The log driver to use for the container.
   *
   * Valid values on Fargate are as follows:
   *
   * - `awsfirelens`
   * - `awslogs`
   * - `splunk`
   *
   * Valid values on Amazon EC2 are as follows:
   *
   * - `awsfirelens`
   * - `awslogs`
   * - `fluentd`
   * - `gelf`
   * - `journald`
   * - `json-file`
   * - `logentries`
   * - `splunk`
   * - `syslog`
   *
   * @public
   */
  LogDriver?: string | undefined;

  /**
   * The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.
   *
   * @public
   */
  Options?: Record<string, string> | undefined;

  /**
   * The secrets to pass to the log configuration.
   *
   * @public
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] | undefined;
}

/**
 * A mount point for the data volumes in the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * The path on the container to mount the host volume at.
   *
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * Whether the container has read-only access to the volume.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * The name of the volume to mount. Must match the name of a volume listed in `VolumeDetails` for the task definition.
   *
   * @public
   */
  SourceVolume?: string | undefined;
}

/**
 * A port mapping for the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * The port number on the container that is bound to the user-specified or automatically assigned host port.
   *
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * The port number on the container instance to reserve for the container.
   *
   * @public
   */
  HostPort?: number | undefined;

  /**
   * The protocol used for the port mapping. The default is `tcp`.
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * The private repository authentication credentials to use.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * The ARN of the secret that contains the private repository credentials.
   *
   * @public
   */
  CredentialsParameter?: string | undefined;
}

/**
 * A resource to assign to a container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * The type of resource to assign to a container. Valid values are `GPU` or `InferenceAccelerator`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The value for the specified resource type.
   *
   * For `GPU`, the value is the number of physical GPUs the Amazon ECS container agent reserves for the container.
   *
   * For `InferenceAccelerator`, the value should match the `DeviceName` attribute of an entry in `InferenceAccelerators`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A secret to pass to the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * The name of the secret.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The secret to expose to the container. The value is either the full ARN of the Secrets Manager secret or the full ARN of the parameter in the Systems Manager Parameter Store.
   *
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * A namespaced kernel parameter to set in the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * The namespaced kernel parameter for which to set a value.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A ulimit to set in the container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * The hard limit for the ulimit type.
   *
   * @public
   */
  HardLimit?: number | undefined;

  /**
   * The type of the ulimit. Valid values are as follows:
   *
   * - `core`
   * - `cpu`
   * - `data`
   * - `fsize`
   * - `locks`
   * - `memlock`
   * - `msgqueue`
   * - `nice`
   * - `nofile`
   * - `nproc`
   * - `rss`
   * - `rtprio`
   * - `rttime`
   * - `sigpending`
   * - `stack`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The soft limit for the ulimit type.
   *
   * @public
   */
  SoftLimit?: number | undefined;
}

/**
 * A data volume to mount from another container.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * Whether the container has read-only access to the volume.
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * The name of another container within the same task definition from which to mount volumes.
   *
   * @public
   */
  SourceContainer?: string | undefined;
}

/**
 * A container definition that describes a container in the task.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * The command that is passed to the container.
   *
   * @public
   */
  Command?: string[] | undefined;

  /**
   * The number of CPU units reserved for the container.
   *
   * @public
   */
  Cpu?: number | undefined;

  /**
   * The dependencies that are defined for container startup and shutdown.
   *
   * @public
   */
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[] | undefined;

  /**
   * Whether to disable networking within the container.
   *
   * @public
   */
  DisableNetworking?: boolean | undefined;

  /**
   * A list of DNS search domains that are presented to the container.
   *
   * @public
   */
  DnsSearchDomains?: string[] | undefined;

  /**
   * A list of DNS servers that are presented to the container.
   *
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * A key-value map of labels to add to the container.
   *
   * @public
   */
  DockerLabels?: Record<string, string> | undefined;

  /**
   * A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems.
   *
   * @public
   */
  DockerSecurityOptions?: string[] | undefined;

  /**
   * The entry point that is passed to the container.
   *
   * @public
   */
  EntryPoint?: string[] | undefined;

  /**
   * The environment variables to pass to a container.
   *
   * @public
   */
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[] | undefined;

  /**
   * A list of files containing the environment variables to pass to a container.
   *
   * @public
   */
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[] | undefined;

  /**
   * Whether the container is essential. All tasks must have at least one essential container.
   *
   * @public
   */
  Essential?: boolean | undefined;

  /**
   * A list of hostnames and IP address mappings to append to the **\/etc/hosts** file on the container.
   *
   * @public
   */
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[] | undefined;

  /**
   * The FireLens configuration for the container. Specifies and configures a log router for container logs.
   *
   * @public
   */
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails | undefined;

  /**
   * The container health check command and associated configuration parameters for the container.
   *
   * @public
   */
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails | undefined;

  /**
   * The hostname to use for the container.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The image used to start the container.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * If set to true, then containerized applications can be deployed that require `stdin` or a `tty` to be allocated.
   *
   * @public
   */
  Interactive?: boolean | undefined;

  /**
   * A list of links for the container in the form `container_name:alias`. Allows containers to communicate with each other without the need for port mappings.
   *
   * @public
   */
  Links?: string[] | undefined;

  /**
   * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
   *
   * @public
   */
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails | undefined;

  /**
   * The log configuration specification for the container.
   *
   * @public
   */
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails | undefined;

  /**
   * The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is shut down. The total amount of memory reserved for all containers within a task must be lower than the task memory value, if one is specified.
   *
   * @public
   */
  Memory?: number | undefined;

  /**
   * The soft limit (in MiB) of memory to reserve for the container.
   *
   * @public
   */
  MemoryReservation?: number | undefined;

  /**
   * The mount points for the data volumes in the container.
   *
   * @public
   */
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[] | undefined;

  /**
   * The name of the container.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of port mappings for the container.
   *
   * @public
   */
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[] | undefined;

  /**
   * Whether the container is given elevated privileges on the host container instance. The elevated privileges are similar to the root user.
   *
   * @public
   */
  Privileged?: boolean | undefined;

  /**
   * Whether to allocate a TTY to the container.
   *
   * @public
   */
  PseudoTerminal?: boolean | undefined;

  /**
   * Whether the container is given read-only access to its root file system.
   *
   * @public
   */
  ReadonlyRootFilesystem?: boolean | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails | undefined;

  /**
   * The type and amount of a resource to assign to a container. The only supported resource is a GPU.
   *
   * @public
   */
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[] | undefined;

  /**
   * The secrets to pass to the container.
   *
   * @public
   */
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[] | undefined;

  /**
   * The number of seconds to wait before giving up on resolving dependencies for a container.
   *
   * @public
   */
  StartTimeout?: number | undefined;

  /**
   * The number of seconds to wait before the container is stopped if it doesn't shut down normally on its own.
   *
   * @public
   */
  StopTimeout?: number | undefined;

  /**
   * A list of namespaced kernel parameters to set in the container.
   *
   * @public
   */
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[] | undefined;

  /**
   * A list of ulimits to set in the container.
   *
   * @public
   */
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[] | undefined;

  /**
   * The user to use inside the container.
   *
   * The value can use one of the following formats.
   *
   * - `user`
   * - `user`:`group`
   * - `uid`
   * - `uid`:`gid`
   * - `user`:`gid`
   * - `uid`:`group`
   *
   * @public
   */
  User?: string | undefined;

  /**
   * Data volumes to mount from another container.
   *
   * @public
   */
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[] | undefined;

  /**
   * The working directory in which to run commands inside the container.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;
}

/**
 * An Elastic Inference accelerator to use for the containers in the task.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * The Elastic Inference accelerator device name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The Elastic Inference accelerator type to use.
   *
   * @public
   */
  DeviceType?: string | undefined;
}

/**
 * A placement constraint object to use for tasks.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * A cluster query language expression to apply to the constraint.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * The type of constraint.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * A network configuration parameter to provide to the Container Network Interface (CNI) plugin.
 *
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * The name of the property.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the property.
   *
   * @public
   */
  Value?: string | undefined;
}
