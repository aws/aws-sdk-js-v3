// smithy-typescript generated code
import {
  ActorSessionMfaStatus,
  AdminStatus,
  AssociationType,
  AutomationRulesActionType,
  AutomationRulesActionTypeV2,
  ConfigurationPolicyAssociationStatus,
  DateRangeUnit,
  MapFilterComparison,
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
   * <p>The account ID of the Security Hub administrator account that sent the invitation.</p>
   * @public
   */
  AdministratorId: string | undefined;

  /**
   * <p>The identifier of the invitation sent from the Security Hub administrator account.</p>
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
   * <p>The account ID of the Security Hub administrator account that sent the invitation.</p>
   * @public
   */
  MasterId: string | undefined;

  /**
   * <p>The identifier of the invitation sent from the Security Hub administrator account.</p>
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * <p>The details of an Amazon Web Services account.</p>
 * @public
 */
export interface AccountDetails {
  /**
   * <p>The ID of an Amazon Web Services account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The email of an Amazon Web Services account.</p>
   * @public
   */
  Email?: string | undefined;
}

/**
 * <p>Provided if <code>CallerType</code> is <code>domain</code>. It provides information
 *          about the DNS domain that issued the API call.</p>
 * @public
 */
export interface AwsApiCallActionDomainDetails {
  /**
   * <p>The name of the DNS domain that issued the API call.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  Domain?: string | undefined;
}

/**
 * <p>Information about a city.</p>
 * @public
 */
export interface City {
  /**
   * <p>The name of the city.</p>
   * @public
   */
  CityName?: string | undefined;
}

/**
 * <p>Information about a country.</p>
 * @public
 */
export interface Country {
  /**
   * <p>The 2-letter ISO 3166 country code for the country.</p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The name of the country.</p>
   * @public
   */
  CountryName?: string | undefined;
}

/**
 * <p>Provides the latitude and longitude coordinates of a location.</p>
 * @public
 */
export interface GeoLocation {
  /**
   * <p>The longitude of the location.</p>
   * @public
   */
  Lon?: number | undefined;

  /**
   * <p>The latitude of the location.</p>
   * @public
   */
  Lat?: number | undefined;
}

/**
 * <p>Provides information about an internet provider.</p>
 * @public
 */
export interface IpOrganizationDetails {
  /**
   * <p>The Autonomous System Number (ASN) of the internet provider</p>
   * @public
   */
  Asn?: number | undefined;

  /**
   * <p>The name of the organization that registered the ASN.</p>
   * @public
   */
  AsnOrg?: string | undefined;

  /**
   * <p>The ISP information for the internet provider.</p>
   * @public
   */
  Isp?: string | undefined;

  /**
   * <p>The name of the internet provider.</p>
   * @public
   */
  Org?: string | undefined;
}

/**
 * <p>For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and
 *             <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about
 *          the remote IP address that was involved in the action.</p>
 * @public
 */
export interface ActionRemoteIpDetails {
  /**
   * <p>The IP address.</p>
   * @public
   */
  IpAddressV4?: string | undefined;

  /**
   * <p>The internet service provider (ISP) organization associated with the remote IP
   *          address.</p>
   * @public
   */
  Organization?: IpOrganizationDetails | undefined;

  /**
   * <p>The country where the remote IP address is located.</p>
   * @public
   */
  Country?: Country | undefined;

  /**
   * <p>The city where the remote IP address is located.</p>
   * @public
   */
  City?: City | undefined;

  /**
   * <p>The coordinates of the location of the remote IP address.</p>
   * @public
   */
  GeoLocation?: GeoLocation | undefined;
}

/**
 * <p>Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details
 *          about the API call that was detected.</p>
 * @public
 */
export interface AwsApiCallAction {
  /**
   * <p>The name of the API method that was issued.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  Api?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service that the API method belongs to.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Indicates whether the API call originated from a remote IP address
   *             (<code>remoteip</code>) or from a DNS domain (<code>domain</code>).</p>
   * @public
   */
  CallerType?: string | undefined;

  /**
   * <p>Provided if <code>CallerType</code> is <code>remoteip</code>. Provides information about
   *          the remote IP address that the API call originated from.</p>
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;

  /**
   * <p>Provided if <code>CallerType</code> is <code>domain</code>. Provides information about
   *          the DNS domain that the API call originated from.</p>
   * @public
   */
  DomainDetails?: AwsApiCallActionDomainDetails | undefined;

  /**
   * <p>Identifies the resources that were affected by the API call.</p>
   * @public
   */
  AffectedResources?: Record<string, string> | undefined;

  /**
   * <p>A timestamp that indicates when the API call was first
   *          observed.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  FirstSeen?: string | undefined;

  /**
   * <p>A timestamp that indicates when the API call was most recently
   *          observed.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastSeen?: string | undefined;
}

/**
 * <p>Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details
 *          about the DNS request that was detected.</p>
 * @public
 */
export interface DnsRequestAction {
  /**
   * <p>The DNS domain that is associated with the DNS request.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The protocol that was used for the DNS request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 64.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Indicates whether the DNS request was blocked.</p>
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * <p>For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>,
 *             <code>LocalPortDetails</code> provides information about the local port that was
 *          involved in the action.</p>
 * @public
 */
export interface ActionLocalPortDetails {
  /**
   * <p>The number of the port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port name of the local connection.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  PortName?: string | undefined;
}

/**
 * <p>Provides information about the remote port that was involved in an attempted network
 *          connection.</p>
 * @public
 */
export interface ActionRemotePortDetails {
  /**
   * <p>The number of the port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port name of the remote connection.</p>
   *          <p>Length Constraints: 128.</p>
   * @public
   */
  PortName?: string | undefined;
}

/**
 * <p>Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides
 *          details about the attempted network connection that was detected.</p>
 * @public
 */
export interface NetworkConnectionAction {
  /**
   * <p>The direction of the network connection request (<code>IN</code> or
   *          <code>OUT</code>).</p>
   * @public
   */
  ConnectionDirection?: string | undefined;

  /**
   * <p>Information about the remote IP address that issued the network connection
   *          request.</p>
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;

  /**
   * <p>Information about the port on the remote IP address.</p>
   * @public
   */
  RemotePortDetails?: ActionRemotePortDetails | undefined;

  /**
   * <p>Information about the port on the EC2 instance.</p>
   * @public
   */
  LocalPortDetails?: ActionLocalPortDetails | undefined;

  /**
   * <p>The protocol used to make the network connection request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 64.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Indicates whether the network connection attempt was blocked.</p>
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * <p>Provides information about the IP address where the scanned port is located.</p>
 * @public
 */
export interface ActionLocalIpDetails {
  /**
   * <p>The IP address.</p>
   * @public
   */
  IpAddressV4?: string | undefined;
}

/**
 * <p>A port scan that was part of the port probe. For each scan, PortProbeDetails provides
 *          information about the local IP address and port that were scanned, and the remote IP
 *          address that the scan originated from.</p>
 * @public
 */
export interface PortProbeDetail {
  /**
   * <p>Provides information about the port that was scanned.</p>
   * @public
   */
  LocalPortDetails?: ActionLocalPortDetails | undefined;

  /**
   * <p>Provides information about the IP address where the scanned port is located.</p>
   * @public
   */
  LocalIpDetails?: ActionLocalIpDetails | undefined;

  /**
   * <p>Provides information about the remote IP address that performed the scan.</p>
   * @public
   */
  RemoteIpDetails?: ActionRemoteIpDetails | undefined;
}

/**
 * <p>Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details
 *          about the attempted port probe that was detected.</p>
 * @public
 */
export interface PortProbeAction {
  /**
   * <p>Information about the ports affected by the port probe.</p>
   * @public
   */
  PortProbeDetails?: PortProbeDetail[] | undefined;

  /**
   * <p>Indicates whether the port probe was blocked.</p>
   * @public
   */
  Blocked?: boolean | undefined;
}

/**
 * <p>Provides details about one of the following actions that affects or that was taken on a resource:</p>
 *          <ul>
 *             <li>
 *                <p>A remote IP address issued an Amazon Web Services API call</p>
 *             </li>
 *             <li>
 *                <p>A DNS request was received</p>
 *             </li>
 *             <li>
 *                <p>A remote IP address attempted to connect to an EC2 instance</p>
 *             </li>
 *             <li>
 *                <p>A remote IP address attempted a port probe on an EC2 instance</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Action {
  /**
   * <p>The type of action that was detected. The possible action types are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NETWORK_CONNECTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_API_CALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_REQUEST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PORT_PROBE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ActionType?: string | undefined;

  /**
   * <p>Included if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. Provides details
   *          about the network connection that was detected.</p>
   * @public
   */
  NetworkConnectionAction?: NetworkConnectionAction | undefined;

  /**
   * <p>Included if <code>ActionType</code> is <code>AWS_API_CALL</code>. Provides details about
   *          the API call that was detected. </p>
   * @public
   */
  AwsApiCallAction?: AwsApiCallAction | undefined;

  /**
   * <p>Included if <code>ActionType</code> is <code>DNS_REQUEST</code>. Provides details about
   *          the DNS request that was detected. </p>
   * @public
   */
  DnsRequestAction?: DnsRequestAction | undefined;

  /**
   * <p>Included if <code>ActionType</code> is <code>PORT_PROBE</code>. Provides details about
   *          the port probe that was detected. </p>
   * @public
   */
  PortProbeAction?: PortProbeAction | undefined;
}

/**
 * <p>The updated note.</p>
 * @public
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   * @public
   */
  UpdatedBy: string | undefined;
}

/**
 * <p>Details about a related finding.</p>
 * @public
 */
export interface RelatedFinding {
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   * @public
   */
  ProductArn: string | undefined;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>Updates to the severity information for a finding.</p>
 * @public
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and don't provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Normalized?: number | undefined;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   * @public
   */
  Product?: number | undefined;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Label?: SeverityLabel | undefined;
}

/**
 * <p>Used to update information about the investigation into the finding.</p>
 * @public
 */
export interface WorkflowUpdate {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: WorkflowStatus | undefined;
}

/**
 * <p>
 *          Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
 *       </p>
 * @public
 */
export interface AutomationRulesFindingFieldsUpdate {
  /**
   * <p>The updated note.</p>
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * <p>Updates to the severity information for a finding.</p>
   * @public
   */
  Severity?: SeverityUpdate | undefined;

  /**
   * <p>
   *          The rule action updates the <code>VerificationState</code> field of a finding.
   *       </p>
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * <p>
   *          The rule action updates the <code>Confidence</code> field of a finding.
   *       </p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>
   *          The rule action updates the <code>Criticality</code> field of a finding.
   *       </p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>
   *          The rule action updates the <code>Types</code> field of a finding.
   *       </p>
   * @public
   */
  Types?: string[] | undefined;

  /**
   * <p>
   *          The rule action updates the <code>UserDefinedFields</code> field of a finding.
   *       </p>
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * <p>Used to update information about the investigation into the finding.</p>
   * @public
   */
  Workflow?: WorkflowUpdate | undefined;

  /**
   * <p>
   *             The rule action updates the <code>RelatedFindings</code> field of a finding.
   *         </p>
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;
}

/**
 * <p>
 *          One or more actions that Security Hub takes when a finding matches the defined criteria
 *          of a rule.
 *       </p>
 * @public
 */
export interface AutomationRulesAction {
  /**
   * <p>
   *          Specifies the type of action that Security Hub takes when a finding matches the defined criteria of a rule.
   *       </p>
   * @public
   */
  Type?: AutomationRulesActionType | undefined;

  /**
   * <p>
   *          Specifies that the automation rule action is an update to a finding field.
   *       </p>
   * @public
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate | undefined;
}

/**
 * <p>An <code>ActionTarget</code> object.</p>
 * @public
 */
export interface ActionTarget {
  /**
   * <p>The ARN for the target action.</p>
   * @public
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The name of the action target.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the target action.</p>
   * @public
   */
  Description: string | undefined;
}

/**
 * <p>
 *             Contains information about the authenticated session used by the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.</p>
 * @public
 */
export interface ActorSession {
  /**
   * <p>
   *             Unique identifier of the session.
   *         </p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>
   *             Indicates whether multi-factor authentication (MFA) was used for authentication during the session.</p>
   *          <p>In CloudTrail, you can find this value as <code>userIdentity.sessionContext.attributes.mfaAuthenticated</code>.</p>
   * @public
   */
  MfaStatus?: ActorSessionMfaStatus | undefined;

  /**
   * <p>The timestamp for when the session was created.
   *         </p>
   *          <p>In CloudTrail, you can find this value as <code>userIdentity.sessionContext.attributes.creationDate</code>.</p>
   * @public
   */
  CreatedTime?: number | undefined;

  /**
   * <p>
   *             The issuer of the session.
   *         </p>
   *          <p>In CloudTrail, you can find this value as <code>userIdentity.sessionContext.sessionIssuer.arn</code>.</p>
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * <p>
 *             Provides Amazon Web Services account information of the user involved in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
 *         </p>
 * @public
 */
export interface UserAccount {
  /**
   * <p>
   *             The unique identifier of the user account involved in the attack sequence.
   *         </p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>
   *             The name of the user account involved in the attack sequence.
   *         </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>
 *             Contains information about the credentials used by the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.</p>
 * @public
 */
export interface ActorUser {
  /**
   * <p>
   *             The name of the threat actor.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The unique identifier of the threat actor.
   *         </p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>
   *             The type of user.
   *         </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>
   *             Unique identifier of the threat actor’s user credentials.
   *         </p>
   * @public
   */
  CredentialUid?: string | undefined;

  /**
   * <p>
   *             The account of the threat actor.
   *         </p>
   * @public
   */
  Account?: UserAccount | undefined;
}

/**
 * <p>
 *             Information about the threat actor identified in an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
 *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
 * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.</p>
 * @public
 */
export interface Actor {
  /**
   * <p>
   *             The ID of the threat actor.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             Contains information about the user credentials used by the threat actor.</p>
   * @public
   */
  User?: ActorUser | undefined;

  /**
   * <p>
   *             Contains information about the user session where the activity initiated.</p>
   * @public
   */
  Session?: ActorSession | undefined;
}

/**
 * <p>An adjustment to the CVSS metric.</p>
 * @public
 */
export interface Adjustment {
  /**
   * <p>The metric to adjust.</p>
   * @public
   */
  Metric?: string | undefined;

  /**
   * <p>The reason for the adjustment.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * <p>Represents a Security Hub administrator account designated by an organization management
 *          account.</p>
 * @public
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The current status of the Security Hub administrator account. Indicates whether the account is
   *          currently enabled as a Security Hub administrator.</p>
   * @public
   */
  Status?: AdminStatus | undefined;
}

/**
 * <p>Specifies a cross-Region data aggregation configuration, including the aggregation Region and any linked Regions.</p>
 * @public
 */
export interface AggregatorV2 {
  /**
   * <p>The ARN of the aggregatorV2.</p>
   * @public
   */
  AggregatorV2Arn?: string | undefined;
}

/**
 * <p>
 *          Information about an enabled security standard in which a security control is enabled.
 *       </p>
 * @public
 */
export interface AssociatedStandard {
  /**
   * <p>The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the
   *          Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.
   *       </p>
   * @public
   */
  StandardsId?: string | undefined;
}

/**
 * <p>
 *             Options for filtering the <code>ListConfigurationPolicyAssociations</code> response. You can filter by the Amazon Resource Name (ARN) or
 *             universally unique identifier (UUID) of a configuration policy, <code>AssociationType</code>, or <code>AssociationStatus</code>.
 *         </p>
 * @public
 */
export interface AssociationFilters {
  /**
   * <p>
   *             The ARN or UUID of the configuration policy.
   *         </p>
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * <p>
   *             Indicates whether the association between a target and a configuration was directly applied by the
   *             Security Hub delegated administrator or inherited from a parent.
   *         </p>
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * <p>
   *             The current status of the association between a target and a configuration policy.
   *         </p>
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;
}

/**
 * <p>
 *          Describes the state of an association between a route table and a subnet or gateway.
 *       </p>
 * @public
 */
export interface AssociationStateDetails {
  /**
   * <p>
   *          The state of the association.
   *       </p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>
   *          The status message, if applicable.
   *       </p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>
 *          The associations between a route table and one or more subnets or a gateway.
 *       </p>
 * @public
 */
export interface AssociationSetDetails {
  /**
   * <p>
   *          The state of the association between a route table and a subnet or gateway.
   *       </p>
   * @public
   */
  AssociationState?: AssociationStateDetails | undefined;

  /**
   * <p>
   *          The ID of the internet gateway or virtual private gateway.
   *       </p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>
   *          Indicates whether this is the main route table.
   *       </p>
   * @public
   */
  Main?: boolean | undefined;

  /**
   * <p>
   *          The ID of the association.
   *       </p>
   * @public
   */
  RouteTableAssociationId?: string | undefined;

  /**
   * <p>
   *          The ID of the route table.
   *       </p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>
   *          The ID of the subnet. A subnet ID is not returned for an implicit association.
   *       </p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Defines the settings and parameters required for integrating external security tools and services.</p>
 * @public
 */
export interface ExternalIntegrationConfiguration {
  /**
   * <p>The ARN of the connector that establishes the integration.</p>
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * <p>Allows you to define the structure for modifying specific fields in security findings.</p>
 * @public
 */
export interface AutomationRulesFindingFieldsUpdateV2 {
  /**
   * <p>The severity level to be assigned to findings that match the automation rule criteria.</p>
   * @public
   */
  SeverityId?: number | undefined;

  /**
   * <p>Notes or contextual information for findings that are modified by the automation rule.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The status to be applied to findings that match automation rule criteria.</p>
   * @public
   */
  StatusId?: number | undefined;
}

/**
 * <p>Allows you to configure automated responses.</p>
 * @public
 */
export interface AutomationRulesActionV2 {
  /**
   * <p>The category of action to be executed by the automation rule.</p>
   * @public
   */
  Type: AutomationRulesActionTypeV2 | undefined;

  /**
   * <p>The changes to be applied to fields in a security finding when an automation rule is triggered.</p>
   * @public
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2 | undefined;

  /**
   * <p>The settings for integrating automation rule actions with external systems or service.</p>
   * @public
   */
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration | undefined;
}

/**
 * <p>Allows you to customize security response workflows.</p>
 * @public
 */
export interface AutomationRulesActionTypeObjectV2 {
  /**
   * <p>The category of action to be executed by the automation rule.</p>
   * @public
   */
  Type?: AutomationRulesActionTypeV2 | undefined;
}

/**
 * <p>A string filter for filtering Security Hub findings.</p>
 * @public
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter value, there's no match.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The condition to apply to a string value when filtering Security Hub findings.</p>
   *          <p>To search for values that have the filter value, use one of the following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that include the filter value, use <code>CONTAINS</code>. For example, the
   *                filter <code>Title CONTAINS CloudFront</code> matches findings that have a <code>Title</code> that
   *                includes the string CloudFront.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For example,
   *                the filter <code>AwsAccountId EQUALS 123456789012</code> only matches findings that have an account ID of
   *                <code>123456789012</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use <code>PREFIX</code>. For example, the
   *                filter <code>ResourceRegion PREFIX us</code> matches findings that have a <code>ResourceRegion</code> that starts
   *                with <code>us</code>. A <code>ResourceRegion</code> that starts with a different value, such as <code>af</code>,
   *                <code>ap</code>, or <code>ca</code>, doesn't match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>CONTAINS</code>, <code>EQUALS</code>, and <code>PREFIX</code> filters on the same field are joined by
   *            <code>OR</code>. A finding matches if it matches any one of those filters. For example, the filters <code>Title CONTAINS CloudFront OR
   *                Title CONTAINS CloudWatch</code> match a finding that includes either <code>CloudFront</code>,
   *            <code>CloudWatch</code>, or both strings in the title.</p>
   *          <p>To search for values that don’t have the filter value, use one of the following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exclude the filter value, use <code>NOT_CONTAINS</code>. For example, the
   *                filter <code>Title NOT_CONTAINS CloudFront</code> matches findings that have a <code>Title</code> that
   *                excludes the string CloudFront.</p>
   *             </li>
   *             <li>
   *                <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *                example, the filter <code>AwsAccountId NOT_EQUALS 123456789012</code> only matches findings that have an account
   *                ID other than <code>123456789012</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that don't start with the filter value, use <code>PREFIX_NOT_EQUALS</code>. For
   *                example, the filter <code>ResourceRegion PREFIX_NOT_EQUALS us</code> matches findings with a
   *                <code>ResourceRegion</code> that starts with a value other than <code>us</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_CONTAINS</code>, <code>NOT_EQUALS</code>, and <code>PREFIX_NOT_EQUALS</code> filters on the same field
   *            are joined by <code>AND</code>. A finding matches only if it matches all of those filters. For example, the filters <code>Title NOT_CONTAINS CloudFront AND
   *                Title NOT_CONTAINS CloudWatch</code> match a finding that excludes both <code>CloudFront</code> and
   *            <code>CloudWatch</code> in the title.</p>
   *          <p>You can’t have both a <code>CONTAINS</code> filter and a <code>NOT_CONTAINS</code> filter on the same field. Similarly,
   *             you can't provide both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> or
   *            <code>PREFIX_NOT_EQUALS</code> filter on the same field. Combining filters in this way returns an error. <code>CONTAINS</code> filters
   *            can only be used with other <code>CONTAINS</code> filters. <code>NOT_CONTAINS</code> filters can only be used with
   *            other <code>NOT_CONTAINS</code> filters. </p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filters for the same field.
   *            Security Hub first processes the <code>PREFIX</code> filters, and then the <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p>For example, for the following filters, Security Hub first identifies findings that have resource types
   *            that start with either <code>AwsIam</code> or <code>AwsEc2</code>. It then excludes findings that have a resource
   *            type of <code>AwsIamPolicy</code> and findings that have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsIam</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsEc2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsIamPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>CONTAINS</code> and <code>NOT_CONTAINS</code> operators can be used only with automation rules V1.
   *           <code>CONTAINS_WORD</code> operator is only supported in <code>GetFindingsV2</code>, <code>GetFindingStatisticsV2</code>, <code>GetResourcesV2</code>, and <code>GetResourceStatisticsV2</code> APIs.
   *           For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html">Automation rules</a> in the <i>Security Hub User Guide</i>.</p>
   * @public
   */
  Comparison?: StringFilterComparison | undefined;
}

/**
 * <p>A number filter for querying findings.</p>
 * @public
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   * @public
   */
  Gte?: number | undefined;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   * @public
   */
  Lte?: number | undefined;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   * @public
   */
  Eq?: number | undefined;

  /**
   * <p>
   *             The greater-than condition to be applied to a single field when querying for findings.
   *         </p>
   * @public
   */
  Gt?: number | undefined;

  /**
   * <p>
   *             The less-than condition to be applied to a single field when querying for findings.
   *         </p>
   * @public
   */
  Lt?: number | undefined;
}

/**
 * <p>A date range for the date filter.</p>
 * @public
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>A date range unit for the date filter.</p>
   * @public
   */
  Unit?: DateRangeUnit | undefined;
}

/**
 * <p>A date filter for querying findings.</p>
 * @public
 */
export interface DateFilter {
  /**
   * <p>A timestamp that provides the start date for the date filter.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  Start?: string | undefined;

  /**
   * <p>A timestamp that provides the end date for the date filter.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  End?: string | undefined;

  /**
   * <p>A date range for the date filter.</p>
   * @public
   */
  DateRange?: DateRange | undefined;
}

/**
 * <p>A map filter for filtering Security Hub findings. Each map filter provides the field to check for, the
 *          value to check for, and the comparison operator.</p>
 * @public
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there's no match.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The condition to apply to the key value when filtering Security Hub findings with a map
   *          filter.</p>
   *          <p>To search for values that have the filter value, use one of the following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that include the filter value, use <code>CONTAINS</code>. For example, for the
   *                <code>ResourceTags</code> field, the filter <code>Department CONTAINS Security</code> matches findings that
   *                include the value <code>Security</code> for the <code>Department</code> tag. In the same example, a finding with a value of
   *                <code>Security team</code> for the <code>Department</code> tag is a match.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For example, for
   *                the <code>ResourceTags</code> field, the filter <code>Department EQUALS Security</code> matches findings that
   *                have the value <code>Security</code> for the <code>Department</code> tag.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>CONTAINS</code> and <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A
   *            finding matches if it matches any one of those filters. For example, the filters <code>Department CONTAINS Security OR
   *                Department CONTAINS Finance</code> match a finding that includes either <code>Security</code>,
   *            <code>Finance</code>, or both values.</p>
   *          <p>To search for values that don't have the filter value, use one of the following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exclude the filter value, use <code>NOT_CONTAINS</code>. For example, for
   *                the <code>ResourceTags</code> field, the filter <code>Department NOT_CONTAINS Finance</code> matches findings
   *                that exclude the value <code>Finance</code> for the <code>Department</code> tag.</p>
   *             </li>
   *             <li>
   *                <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For example, for the
   *                <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS Finance</code> matches findings that
   *                don’t have the value <code>Finance</code> for the <code>Department</code> tag.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_CONTAINS</code> and <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>.
   *            A finding matches only if it matches all of those filters. For example, the filters <code>Department NOT_CONTAINS Security AND
   *                Department NOT_CONTAINS Finance</code> match a finding that excludes both the <code>Security</code> and
   *            <code>Finance</code> values.</p>
   *          <p>
   *             <code>CONTAINS</code> filters can only be used with other <code>CONTAINS</code> filters. <code>NOT_CONTAINS</code>
   *            filters can only be used with other <code>NOT_CONTAINS</code> filters.</p>
   *          <p>You can’t have both a <code>CONTAINS</code> filter and a <code>NOT_CONTAINS</code> filter on the same field.
   *            Similarly, you can’t have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter on the same field.
   *             Combining filters in this way returns an error.
   *        </p>
   *          <p>
   *             <code>CONTAINS</code> and <code>NOT_CONTAINS</code> operators can be used only with automation rules. For more information,
   *            see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html">Automation rules</a> in the <i>Security Hub User Guide</i>.</p>
   * @public
   */
  Comparison?: MapFilterComparison | undefined;
}

/**
 * <p>
 *          The criteria that determine which findings a rule applies to.
 *       </p>
 * @public
 */
export interface AutomationRulesFindingFilters {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for a third-party product that generated a finding in
   *          Security Hub.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ProductArn?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Web Services account ID in which a finding was generated.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *    	</p>
   * @public
   */
  AwsAccountId?: StringFilter[] | undefined;

  /**
   * <p>
   *          The product-specific identifier for a finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  Id?: StringFilter[] | undefined;

  /**
   * <p>
   *          The identifier for the solution-specific component that
   *          generated a finding.
   *       </p>
   *          <p>
   *       		Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *       	</p>
   * @public
   */
  GeneratorId?: StringFilter[] | undefined;

  /**
   * <p> One or more finding types in the format of namespace/category/classifier that classify
   *          a finding. For a list of namespaces, classifiers, and categories, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html">Types
   *             taxonomy for ASFF</a> in the <i>Security Hub User Guide</i>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  Type?: StringFilter[] | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the potential security issue captured by a
   *          finding was first observed by the security findings product.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  FirstObservedAt?: DateFilter[] | undefined;

  /**
   * <p>
   *           A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  LastObservedAt?: DateFilter[] | undefined;

  /**
   * <p>
   *          A timestamp that indicates when this finding record was created.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  CreatedAt?: DateFilter[] | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the finding record was most recently updated.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  UpdatedAt?: DateFilter[] | undefined;

  /**
   * <p>The likelihood that a finding accurately identifies the behavior or issue that it was
   *          intended to identify. <code>Confidence</code> is scored on a 0–100 basis using a ratio
   *          scale. A value of <code>0</code> means 0 percent confidence, and a value of
   *             <code>100</code> means 100 percent confidence. For example, a data exfiltration
   *          detection based on a statistical deviation of network traffic has low confidence because an
   *          actual exfiltration hasn't been verified. For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence">Confidence</a> in the <i>Security Hub User Guide</i>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  Confidence?: NumberFilter[] | undefined;

  /**
   * <p>
   *          The level of importance that is assigned to the resources that are associated with a
   *          finding. <code>Criticality</code> is scored on a 0–100 basis, using a ratio scale that supports
   *          only full integers. A score of <code>0</code> means that the underlying resources have no
   *          criticality, and a score of <code>100</code> is reserved for the most critical resources. For
   *       more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality">Criticality</a> in the <i>Security Hub User Guide</i>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  Criticality?: NumberFilter[] | undefined;

  /**
   * <p>
   *          A finding's title.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *    	</p>
   * @public
   */
  Title?: StringFilter[] | undefined;

  /**
   * <p>
   *          A finding's description.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  Description?: StringFilter[] | undefined;

  /**
   * <p>
   *          Provides a URL that links to a page about the current finding in the finding product.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  SourceUrl?: StringFilter[] | undefined;

  /**
   * <p>
   *          Provides the name of the product that generated the finding. For
   *          control-based findings, the product name is Security Hub.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ProductName?: StringFilter[] | undefined;

  /**
   * <p>
   *          The name of the company for the product that generated the finding.
   *          For control-based findings, the company is Amazon Web Services.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  CompanyName?: StringFilter[] | undefined;

  /**
   * <p>
   *          The severity value of the finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  SeverityLabel?: StringFilter[] | undefined;

  /**
   * <p>
   *          The type of resource that the finding pertains to.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ResourceType?: StringFilter[] | undefined;

  /**
   * <p>
   *          The identifier for the given resource type. For Amazon Web Services resources that are identified by
   *          Amazon Resource Names (ARNs), this is the ARN. For Amazon Web Services resources that lack ARNs,
   *          this is the identifier as defined by the Amazon Web Services service that created the resource.
   *          For non-Amazon Web Services resources, this is a unique identifier that is associated with the
   *          resource.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 100 items.
   *    	</p>
   * @public
   */
  ResourceId?: StringFilter[] | undefined;

  /**
   * <p>
   *          The partition in which the resource that the finding pertains to is located.
   *          A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ResourcePartition?: StringFilter[] | undefined;

  /**
   * <p>
   *          The Amazon Web Services Region where the resource that a finding pertains to is located.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ResourceRegion?: StringFilter[] | undefined;

  /**
   * <p>
   *          A list of Amazon Web Services tags associated with a resource at the time the finding was processed.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ResourceTags?: MapFilter[] | undefined;

  /**
   * <p>
   *          Custom fields and values about the resource that a finding pertains to.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ResourceDetailsOther?: MapFilter[] | undefined;

  /**
   * <p>
   *          The result of a security check. This field is only used for findings generated
   *          from controls.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  ComplianceStatus?: StringFilter[] | undefined;

  /**
   * <p> The security control ID for which a finding was generated. Security control IDs are the same across standards.</p>
   *          <p>
   *     		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *     	</p>
   * @public
   */
  ComplianceSecurityControlId?: StringFilter[] | undefined;

  /**
   * <p>The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of
   *             the Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.</p>
   *          <p>
   *     		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *     	</p>
   * @public
   */
  ComplianceAssociatedStandardsId?: StringFilter[] | undefined;

  /**
   * <p>
   *          Provides the veracity of a finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  VerificationState?: StringFilter[] | undefined;

  /**
   * <p>
   *          Provides information about the status of the investigation into a finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  WorkflowStatus?: StringFilter[] | undefined;

  /**
   * <p>
   *          Provides the current state of a finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  RecordState?: StringFilter[] | undefined;

  /**
   * <p>
   *          The ARN for the product that generated a related finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  RelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * <p>
   *          The product-generated identifier for a related finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  RelatedFindingsId?: StringFilter[] | undefined;

  /**
   * <p>
   *          The text of a user-defined note that's added to a finding.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  NoteText?: StringFilter[] | undefined;

  /**
   * <p>
   *          The timestamp of when the note was updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  NoteUpdatedAt?: DateFilter[] | undefined;

  /**
   * <p>
   *          The principal that created a note.
   *       </p>
   *          <p>
   *    		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *    	</p>
   * @public
   */
  NoteUpdatedBy?: StringFilter[] | undefined;

  /**
   * <p>
   *             A list of user-defined name and value string pairs added to a finding.
   *         </p>
   *          <p>
   *     		Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *     	</p>
   * @public
   */
  UserDefinedFields?: MapFilter[] | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the application that is related to a finding.
   *         </p>
   *          <p>
   *             Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *         </p>
   * @public
   */
  ResourceApplicationArn?: StringFilter[] | undefined;

  /**
   * <p>
   *             The name of the application that is related to a finding.
   *         </p>
   *          <p>
   *             Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *         </p>
   * @public
   */
  ResourceApplicationName?: StringFilter[] | undefined;

  /**
   * <p>The name of the Amazon Web Services account in which a finding was generated.
   *         </p>
   *          <p>
   *             Array Members: Minimum number of 1 item. Maximum number of 20 items.
   *         </p>
   * @public
   */
  AwsAccountName?: StringFilter[] | undefined;
}

/**
 * <p>
 *          Defines the configuration of an automation rule.
 *       </p>
 * @public
 */
export interface AutomationRulesConfig {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a rule.
   *       </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created.
   *       </p>
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * <p> An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * <p>
   *          A set of <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services
   *              Security Finding Format</a> finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   * @public
   */
  Criteria?: AutomationRulesFindingFilters | undefined;

  /**
   * <p>
   *          One or more actions to update finding fields if a finding matches the defined criteria
   *          of the rule.
   *       </p>
   * @public
   */
  Actions?: AutomationRulesAction[] | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the rule was created.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the rule was most recently updated.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *          The principal that created a rule.
   *       </p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * <p>
 *          Metadata for automation rules in the calling account. The response includes rules
 *          with a <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.
 *       </p>
 * @public
 */
export interface AutomationRulesMetadata {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for the rule.
   *       </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * <p>An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the rule was created.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *          A timestamp that indicates when the rule was most recently updated.
   *       </p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *          The principal that created a rule.
   *       </p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * <p>Includes essential metadata information about automation rules.</p>
 * @public
 */
export interface AutomationRulesMetadataV2 {
  /**
   * <p>The ARN of the automation rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The ID of the automation rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The value for the rule priority.</p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>The name of the automation rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The status of the automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>An explanation for the purpose and funcitonality of the automation rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of action to be performed when the rule criteria is met.</p>
   * @public
   */
  Actions?: AutomationRulesActionTypeObjectV2[] | undefined;

  /**
   * <p>The timestamp for when the automation rule was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp for the most recent modification to the automation rule.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Information about an Availability Zone.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * <p>The ID of the subnet. You can specify one subnet per Availability Zone.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>
 *             Provides details about broker encryption options.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  /**
   * <p>
   *             The KMS key that’s used to encrypt your data at rest. If not provided, Amazon MQ will use a
   *             default KMS key to encrypt your data.
   *         </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *             Specifies that an KMS key should be used for at-rest encryption. Set to <code>true</code> by default
   *             if no value is provided (for example, for RabbitMQ brokers).
   *         </p>
   * @public
   */
  UseAwsOwnedKey?: boolean | undefined;
}

/**
 * <p>
 *             The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize
 *             connections to the broker. This is an optional failover server.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  /**
   * <p>
   *             Specifies the location of the LDAP server, such as Amazon Web Services Directory Service for Microsoft Active Directory.
   *         </p>
   * @public
   */
  Hosts?: string[] | undefined;

  /**
   * <p>
   *             The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.
   *         </p>
   * @public
   */
  RoleBase?: string | undefined;

  /**
   * <p>
   *             The group name attribute in a role entry whose value is the name of that role.
   *         </p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>
   *             The LDAP search filter used to find roles within the <code>roleBase</code>.
   *         </p>
   * @public
   */
  RoleSearchMatching?: string | undefined;

  /**
   * <p>
   *             The directory search scope for the role. If set to <code>true</code>, the scope is to search the entire subtree.
   *         </p>
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * <p>
   *             A username for the service account, which is an account in your LDAP server that has access to initiate a connection.
   *         </p>
   * @public
   */
  ServiceAccountUsername?: string | undefined;

  /**
   * <p>
   *             Selects a particular subtree of the directory information tree (DIT) to search for user entries.
   *         </p>
   * @public
   */
  UserBase?: string | undefined;

  /**
   * <p>
   *             The name of the LDAP attribute in the user's directory entry for the user's group membership. </p>
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * <p>
   *             The LDAP search filter used to find users within the <code>userBase</code>.
   *         </p>
   * @public
   */
  UserSearchMatching?: string | undefined;

  /**
   * <p>
   *             The directory search scope for the user. If set to true, the scope is to search the entire subtree.
   *         </p>
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * <p>
 *             Provides information about logs to be activated for the specified broker.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerLogsPendingDetails {
  /**
   * <p>
   *             Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply
   *             to RabbitMQ brokers.
   *         </p>
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * <p>
   *             Activates general logging.
   *         </p>
   * @public
   */
  General?: boolean | undefined;
}

/**
 * <p>
 *             Provides information about logs to be activated for the specified broker.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerLogsDetails {
  /**
   * <p>
   *             Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply to RabbitMQ brokers.
   *         </p>
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * <p>
   *             Activates general logging.
   *         </p>
   * @public
   */
  General?: boolean | undefined;

  /**
   * <p>
   *             The location of the CloudWatch Logs log group where audit logs are sent.
   *         </p>
   * @public
   */
  AuditLogGroup?: string | undefined;

  /**
   * <p>
   *             The location of the CloudWatch Logs log group where general logs are sent.
   *         </p>
   * @public
   */
  GeneralLogGroup?: string | undefined;

  /**
   * <p>
   *             The list of information about logs that are to be turned on for the specified broker.
   *         </p>
   * @public
   */
  Pending?: AwsAmazonMqBrokerLogsPendingDetails | undefined;
}

/**
 * <p>
 *             The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  /**
   * <p>
   *             The day of the week on which the maintenance window falls.
   *         </p>
   * @public
   */
  DayOfWeek?: string | undefined;

  /**
   * <p>
   *             The time, in 24-hour format, on which the maintenance window falls.
   *         </p>
   * @public
   */
  TimeOfDay?: string | undefined;

  /**
   * <p>
   *             The time zone in either the Country/City format or the UTC offset format. UTC is the default format.
   *         </p>
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * <p>
 *             Provides details about the broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerUsersDetails {
  /**
   * <p>
   *             The type of change pending for the broker user.
   *         </p>
   * @public
   */
  PendingChange?: string | undefined;

  /**
   * <p>
   *             The username of the broker user.
   *         </p>
   * @public
   */
  Username?: string | undefined;
}

/**
 * <p>
 *             Provides details about an Amazon MQ message broker. A message broker allows software applications and
 *             components to communicate using various programming languages, operating systems, and formal messaging protocols.
 *         </p>
 * @public
 */
export interface AwsAmazonMqBrokerDetails {
  /**
   * <p>
   *             The authentication strategy used to secure the broker. The default is <code>SIMPLE</code>.
   *         </p>
   * @public
   */
  AuthenticationStrategy?: string | undefined;

  /**
   * <p>
   *             Whether automatically upgrade new minor versions for brokers, as new versions are released and supported by Amazon MQ.
   *             Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.
   *         </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the broker.
   *         </p>
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * <p>The broker's name.
   *         </p>
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * <p>
   *             The broker's deployment mode.
   *         </p>
   * @public
   */
  DeploymentMode?: string | undefined;

  /**
   * <p>
   *             Encryption options for the broker. Doesn’t apply to RabbitMQ brokers.
   *         </p>
   * @public
   */
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails | undefined;

  /**
   * <p>
   *             The type of broker engine.
   *         </p>
   * @public
   */
  EngineType?: string | undefined;

  /**
   * <p>
   *             The version of the broker engine.
   *         </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>
   *             The broker's instance type.
   *         </p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>
   *             The unique ID that Amazon MQ generates for the broker.
   *         </p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>
   *             The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.
   *         </p>
   * @public
   */
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails | undefined;

  /**
   * <p>
   *             Turns on Amazon CloudWatch logging for brokers.
   *         </p>
   * @public
   */
  Logs?: AwsAmazonMqBrokerLogsDetails | undefined;

  /**
   * <p>
   *             The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
   *         </p>
   * @public
   */
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails | undefined;

  /**
   * <p>
   *             Permits connections from applications outside of the VPC that hosts the broker's subnets.
   *         </p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>
   *             The list of rules (one minimum, 125 maximum) that authorize connections to brokers.
   *         </p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>
   *             The broker's storage type.
   *         </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>
   *             The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
   *         </p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>
   *             The list of all broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
   *         </p>
   * @public
   */
  Users?: AwsAmazonMqBrokerUsersDetails[] | undefined;
}

/**
 * <p>Contains information about settings for logging access for the stage.</p>
 * @public
 */
export interface AwsApiGatewayAccessLogSettings {
  /**
   * <p>A single-line format of the access logs of data, as specified by selected
   *             <code>$context</code> variables. The format must include at least
   *             <code>$context.requestId</code>.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs log group that receives the access logs.</p>
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * <p>Contains information about settings for canary deployment in the stage.</p>
 * @public
 */
export interface AwsApiGatewayCanarySettings {
  /**
   * <p>The percentage of traffic that is diverted to a canary deployment.</p>
   * @public
   */
  PercentTraffic?: number | undefined;

  /**
   * <p>The deployment identifier for the canary deployment.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>Stage variables that are overridden in the canary release deployment. The variables
   *          include new stage variables that are introduced in the canary.</p>
   *          <p>Each variable is represented as a string-to-string map between the stage variable name
   *          and the variable value.</p>
   * @public
   */
  StageVariableOverrides?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether the canary deployment uses the stage cache.</p>
   * @public
   */
  UseStageCache?: boolean | undefined;
}

/**
 * <p>Contains information about the endpoints for the API.</p>
 * @public
 */
export interface AwsApiGatewayEndpointConfiguration {
  /**
   * <p>A list of endpoint types for the REST API.</p>
   *          <p>For an edge-optimized API, the endpoint type is <code>EDGE</code>. For a Regional API,
   *          the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is
   *             <code>PRIVATE</code>.</p>
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * <p>Defines settings for a method for the stage.</p>
 * @public
 */
export interface AwsApiGatewayMethodSettings {
  /**
   * <p>Indicates whether CloudWatch metrics are enabled for the method. </p>
   * @public
   */
  MetricsEnabled?: boolean | undefined;

  /**
   * <p>The logging level for this method. The logging level affects the log entries that are
   *          pushed to CloudWatch Logs.</p>
   *          <p>If the logging level is <code>ERROR</code>, then the logs only include error-level
   *          entries.</p>
   *          <p>If the logging level is <code>INFO</code>, then the logs include both <code>ERROR</code>
   *          events and extra informational events.</p>
   *          <p>Valid values: <code>OFF</code> | <code>ERROR</code> | <code>INFO</code>
   *          </p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>Indicates whether data trace logging is enabled for the method. Data trace logging
   *          affects the log entries that are pushed to CloudWatch Logs.</p>
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * <p>The throttling burst limit for the method.</p>
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * <p>The throttling rate limit for the method.</p>
   * @public
   */
  ThrottlingRateLimit?: number | undefined;

  /**
   * <p>Indicates whether responses are cached and returned for requests. For responses to be
   *          cached, a cache cluster must be enabled on the stage.</p>
   * @public
   */
  CachingEnabled?: boolean | undefined;

  /**
   * <p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL,
   *          the longer the response is cached.</p>
   * @public
   */
  CacheTtlInSeconds?: number | undefined;

  /**
   * <p>Indicates whether the cached responses are encrypted. </p>
   * @public
   */
  CacheDataEncrypted?: boolean | undefined;

  /**
   * <p>Indicates whether authorization is required for a cache invalidation request.</p>
   * @public
   */
  RequireAuthorizationForCacheControl?: boolean | undefined;

  /**
   * <p>Indicates how to handle unauthorized requests for cache invalidation.</p>
   *          <p>Valid values: <code>FAIL_WITH_403</code> | <code>SUCCEED_WITH_RESPONSE_HEADER</code> |
   *             <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>
   *          </p>
   * @public
   */
  UnauthorizedCacheControlHeaderStrategy?: string | undefined;

  /**
   * <p>The HTTP method. You can use an asterisk (*) as a wildcard to apply method settings to
   *          multiple methods.</p>
   * @public
   */
  HttpMethod?: string | undefined;

  /**
   * <p>The resource path for this method. Forward slashes (/) are encoded as ~1 . The initial
   *          slash must include a forward slash.</p>
   *          <p>For example, the path value <code>/resource/subresource</code> must be encoded as
   *             <code>/~1resource~1subresource</code>.</p>
   *          <p>To specify the root path, use only a slash (/). You can use an asterisk (*) as a
   *          wildcard to apply method settings to multiple methods.</p>
   * @public
   */
  ResourcePath?: string | undefined;
}

/**
 * <p>Contains information about a REST API in version 1 of Amazon API Gateway.</p>
 * @public
 */
export interface AwsApiGatewayRestApiDetails {
  /**
   * <p>The identifier of the REST API.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the REST API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the REST API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates when the API was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The version identifier for the REST API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The list of binary media types supported by the REST API.</p>
   * @public
   */
  BinaryMediaTypes?: string[] | undefined;

  /**
   * <p>The minimum size in bytes of a payload before compression is enabled.</p>
   *          <p>If <code>null</code>, then compression is disabled.</p>
   *          <p>If 0, then all payloads are compressed.</p>
   * @public
   */
  MinimumCompressionSize?: number | undefined;

  /**
   * <p>The source of the API key for metering requests according to a usage plan.</p>
   *          <p>
   *             <code>HEADER</code> indicates whether to read the API key from the X-API-Key header of a
   *          request.</p>
   *          <p>
   *             <code>AUTHORIZER</code> indicates whether to read the API key from the
   *             <code>UsageIdentifierKey</code> from a custom authorizer.</p>
   * @public
   */
  ApiKeySource?: string | undefined;

  /**
   * <p>The endpoint configuration of the REST API.</p>
   * @public
   */
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration | undefined;
}

/**
 * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
 * @public
 */
export interface AwsApiGatewayStageDetails {
  /**
   * <p>The identifier of the deployment that the stage points to.</p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>The identifier of the client certificate for the stage.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName?: string | undefined;

  /**
   * <p>A description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether a cache cluster is enabled for the stage.</p>
   * @public
   */
  CacheClusterEnabled?: boolean | undefined;

  /**
   * <p>If a cache cluster is enabled, the size of the cache cluster.</p>
   * @public
   */
  CacheClusterSize?: string | undefined;

  /**
   * <p>If a cache cluster is enabled, the status of the cache cluster.</p>
   * @public
   */
  CacheClusterStatus?: string | undefined;

  /**
   * <p>Defines the method settings for the stage.</p>
   * @public
   */
  MethodSettings?: AwsApiGatewayMethodSettings[] | undefined;

  /**
   * <p>A map that defines the stage variables for the stage.</p>
   *          <p>Variable names can have alphanumeric and underscore characters.</p>
   *          <p>Variable values can contain the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Uppercase and lowercase letters</p>
   *             </li>
   *             <li>
   *                <p>Numbers</p>
   *             </li>
   *             <li>
   *                <p>Special characters -._~:/?#&=,</p>
   *             </li>
   *          </ul>
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * <p>The version of the API documentation that is associated with the stage.</p>
   * @public
   */
  DocumentationVersion?: string | undefined;

  /**
   * <p>Settings for logging access for the stage.</p>
   * @public
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings | undefined;

  /**
   * <p>Information about settings for canary deployment in the stage.</p>
   * @public
   */
  CanarySettings?: AwsApiGatewayCanarySettings | undefined;

  /**
   * <p>Indicates whether active tracing with X-Ray is enabled for the stage.</p>
   * @public
   */
  TracingEnabled?: boolean | undefined;

  /**
   * <p>Indicates when the stage was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>Indicates when the stage was most recently updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * <p>The ARN of the web ACL associated with the stage.</p>
   * @public
   */
  WebAclArn?: string | undefined;
}

/**
 * <p>Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is
 *          only supported for HTTP APIs.</p>
 * @public
 */
export interface AwsCorsConfiguration {
  /**
   * <p>The allowed origins for CORS requests.</p>
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * <p>Indicates whether the CORS request includes credentials.</p>
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * <p>The exposed headers for CORS requests.</p>
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * <p>The number of seconds for which the browser caches preflight request results.</p>
   * @public
   */
  MaxAge?: number | undefined;

  /**
   * <p>The allowed methods for CORS requests.</p>
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * <p>The allowed headers for CORS requests.</p>
   * @public
   */
  AllowHeaders?: string[] | undefined;
}

/**
 * <p>Contains information about a version 2 API in Amazon API Gateway.</p>
 * @public
 */
export interface AwsApiGatewayV2ApiDetails {
  /**
   * <p>The URI of the API. </p>
   *          <p>Uses the format
   *                <code>
   *                <i><api-id></i>.execute-api.<i><region></i>.amazonaws.com</code>
   *          </p>
   *          <p>The stage name is typically appended to the URI to form a complete path to a deployed
   *          API stage.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>The identifier of the API.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. </p>
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * <p>Indicates when the API was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>A description of the API.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The version identifier for the API.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The name of the API.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The API protocol for the API.</p>
   *          <p>Valid values: <code>WEBSOCKET</code> | <code>HTTP</code>
   *          </p>
   * @public
   */
  ProtocolType?: string | undefined;

  /**
   * <p>The route selection expression for the API.</p>
   *          <p>For HTTP APIs, must be <code>$\{request.method\} $\{request.path\}</code>. This is the
   *          default value for HTTP APIs.</p>
   *          <p>For WebSocket APIs, there is no default value.</p>
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * <p>A cross-origin resource sharing (CORS) configuration. Supported only for HTTP
   *          APIs.</p>
   * @public
   */
  CorsConfiguration?: AwsCorsConfiguration | undefined;
}

/**
 * <p>Contains route settings for a stage.</p>
 * @public
 */
export interface AwsApiGatewayV2RouteSettings {
  /**
   * <p>Indicates whether detailed metrics are enabled.</p>
   * @public
   */
  DetailedMetricsEnabled?: boolean | undefined;

  /**
   * <p>The logging level. The logging level affects the log entries that are pushed to
   *          CloudWatch Logs. Supported only for WebSocket APIs.</p>
   *          <p>If the logging level is <code>ERROR</code>, then the logs only include error-level
   *          entries.</p>
   *          <p>If the logging level is <code>INFO</code>, then the logs include both <code>ERROR</code>
   *          events and extra informational events.</p>
   *          <p>Valid values: <code>OFF</code> | <code>ERROR</code> | <code>INFO</code>
   *          </p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>Indicates whether data trace logging is enabled. Data trace logging affects the log
   *          entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs.</p>
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * <p>The throttling burst limit.</p>
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * <p>The throttling rate limit.</p>
   * @public
   */
  ThrottlingRateLimit?: number | undefined;
}

/**
 * <p>Contains information about a version 2 stage for Amazon API Gateway.</p>
 * @public
 */
export interface AwsApiGatewayV2StageDetails {
  /**
   * <p>The identifier of a client certificate for a stage. Supported only for WebSocket API calls.</p>
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * <p>Indicates when the stage was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Default route settings for the stage.</p>
   * @public
   */
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings | undefined;

  /**
   * <p>The identifier of the deployment that the stage is associated with. </p>
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * <p>Indicates when the stage was most recently updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * <p>The route settings for the stage.</p>
   * @public
   */
  RouteSettings?: AwsApiGatewayV2RouteSettings | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName?: string | undefined;

  /**
   * <p>A map that defines the stage variables for the stage.</p>
   *          <p>Variable names can have alphanumeric and underscore characters.</p>
   *          <p>Variable values can contain the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Uppercase and lowercase letters</p>
   *             </li>
   *             <li>
   *                <p>Numbers</p>
   *             </li>
   *             <li>
   *                <p>Special characters -._~:/?#&=,</p>
   *             </li>
   *          </ul>
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * <p>Information about settings for logging access for the stage.</p>
   * @public
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings | undefined;

  /**
   * <p>Indicates whether updates to an API automatically trigger a new deployment.</p>
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * <p>The status of the last deployment of a stage. Supported only if the stage has automatic
   *          deployment enabled.</p>
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * <p>Indicates whether the stage is managed by API Gateway.</p>
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;
}

/**
 * <p>
 *             Specifies the authorization configuration for using an Lambda function with your AppSync
 *             GraphQL API endpoint.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  /**
   * <p>
   *             The number of seconds a response should be cached for. The default is 5 minutes (300 seconds).
   *         </p>
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a
   *             standard Lambda ARN, a version ARN (.../v3), or an alias ARN.
   *         </p>
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * <p>
   *             A regular expression for validation of tokens before the Lambda function is called.
   *         </p>
   * @public
   */
  IdentityValidationExpression?: string | undefined;
}

/**
 * <p>
 *             Specifies the authorization configuration for using an OpenID Connect compliant service with your AppSync GraphQL
 *             API endpoint.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  /**
   * <p>
   *             The number of milliseconds that a token is valid after being authenticated.
   *         </p>
   * @public
   */
  AuthTtL?: number | undefined;

  /**
   * <p>
   *             The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained
   *             when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that
   *             AppSync can validate against multiple client identifiers at a time.
   *         </p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>
   *             The number of milliseconds that a token is valid after it's issued to a user.
   *         </p>
   * @public
   */
  IatTtL?: number | undefined;

  /**
   * <p>
   *             The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of <code>iss</code>
   *             in the ID token.
   *         </p>
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * <p>
 *             Specifies the authorization configuration for using Amazon Cognito user pools with your AppSync GraphQL API
 *             endpoint.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  /**
   * <p>
   *             A regular expression for validating the incoming Amazon Cognito user pools app client ID. If this value isn't set, no
   *             filtering is applied.
   *         </p>
   * @public
   */
  AppIdClientRegex?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services Region in which the user pool was created.
   *         </p>
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * <p>
   *             The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pools
   *             authentication doesn't match the Amazon Cognito user pools configuration.
   *         </p>
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * <p>
   *             The user pool ID.
   *         </p>
   * @public
   */
  UserPoolId?: string | undefined;
}

/**
 * <p>
 *             A list of additional authentication providers for the GraphqlApi API.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  /**
   * <p>
   *             The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *         </p>
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * <p>
   *             The configuration for Lambda function authorization.
   *         </p>
   * @public
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails | undefined;

  /**
   * <p>
   *             The OpenID Connect configuration.
   *         </p>
   * @public
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails | undefined;

  /**
   * <p>
   *             The Amazon Cognito user pools configuration.
   *         </p>
   * @public
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails | undefined;
}

/**
 * <p>
 *             Specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an
 *             AppSync GraphQL API.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the service role that AppSync assumes to publish to CloudWatch Logs
   *             in your account.
   *         </p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>
   *             Set to <code>TRUE</code> to exclude sections that contain information such as headers, context, and evaluated mapping templates,
   *             regardless of logging level.
   *         </p>
   * @public
   */
  ExcludeVerboseContent?: boolean | undefined;

  /**
   * <p>
   *             The field logging level.
   *         </p>
   * @public
   */
  FieldLogLevel?: string | undefined;
}

/**
 * <p>
 *             Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.
 *         </p>
 * @public
 */
export interface AwsAppSyncGraphQlApiDetails {
  /**
   * <p>
   *             The unique identifier for the API.
   *         </p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>The unique identifier for the API.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   * Specifies the authorization configuration for using an OpenID Connect compliant service with an AppSync GraphQL API endpoint.
   * </p>
   * @public
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails | undefined;

  /**
   * <p>
   * The API name.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * Specifies the configuration for Lambda function authorization.
   * </p>
   * @public
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails | undefined;

  /**
   * <p>
   * Indicates whether to use X-Ray tracing for the GraphQL API.
   * </p>
   * @public
   */
  XrayEnabled?: boolean | undefined;

  /**
   * <p>
   * The Amazon Resource Name (ARN) of the API.
   * </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   * The Amazon Cognito user pools configuration.
   * </p>
   * @public
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails | undefined;

  /**
   * <p>
   * The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   * </p>
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * <p>
   *             The Amazon CloudWatch Logs configuration.
   *         </p>
   * @public
   */
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails | undefined;

  /**
   * <p>
   *             A list of additional authentication providers for the GraphQL API.
   *         </p>
   * @public
   */
  AdditionalAuthenticationProviders?: AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[] | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this
   *             GraphQL API, if one exists.
   *         </p>
   * @public
   */
  WafWebAclArn?: string | undefined;
}

/**
 * <p>
 *             Specifies the method used to encrypt the user’s data stores in the Athena workgroup.
 *         </p>
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
  /**
   * <p>
   *             Indicates whether Amazon Simple Storage Service (Amazon S3) server-side encryption with Amazon S3 managed
   *             keys (SSE_S3), server-side encryption with KMS keys (SSE_KMS), or client-side encryption with
   *             KMS customer managed keys (CSE_KMS) is used.
   *         </p>
   * @public
   */
  EncryptionOption?: string | undefined;

  /**
   * <p>
   *             For <code>SSE_KMS</code> and <code>CSE_KMS</code>, this is the KMS key Amazon Resource Name (ARN) or ID.
   *         </p>
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * <p>
 *             The location in Amazon Simple Storage Service (Amazon S3) where query and calculation results are stored and the encryption option, if any,
 *             used for query and calculation results. These are known as client-side settings. If workgroup settings override
 *             client-side settings, then the query uses the workgroup settings.
 *         </p>
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
  /**
   * <p>
   *             Specifies the method used to encrypt the user’s data stores in the Athena workgroup.
   *         </p>
   * @public
   */
  EncryptionConfiguration?:
    | AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails
    | undefined;
}

/**
 * <p>
 *             The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3) where
 *             query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch
 *             metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is
 *             specified.
 *         </p>
 * @public
 */
export interface AwsAthenaWorkGroupConfigurationDetails {
  /**
   * <p>
   *             The location in Amazon S3 where query and calculation results are stored and the
   *             encryption option, if any, used for query and calculation results. These are known as client-side settings. If
   *             workgroup settings override client-side settings, then the query uses the workgroup settings.</p>
   * @public
   */
  ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails | undefined;
}

/**
 * <p>
 *             Provides information about an Amazon Athena workgroup.
 *         </p>
 * @public
 */
export interface AwsAthenaWorkGroupDetails {
  /**
   * <p>
   *             The workgroup name.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The workgroup description.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             Whether the workgroup is enabled or disabled.
   *         </p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>
   *             The configuration of the workgroup, which includes the location in Amazon Simple Storage Service (Amazon S3)
   *             where query results are stored, the encryption option, if any, used for query results, whether
   *             Amazon CloudWatch metrics are enabled for the workgroup, and the limit for the amount of bytes scanned
   *             (cutoff) per query, if it is specified.
   *         </p>
   * @public
   */
  Configuration?: AwsAthenaWorkGroupConfigurationDetails | undefined;
}

/**
 * <p>An Availability Zone for the automatic scaling group.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Details about the launch template to use.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  /**
   * <p>The identifier of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>Identifies the version of the launch template. You can specify a version identifier, or use the values <code>$Latest</code> or <code>$Default</code>.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Information about the instances distribution.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  /**
   * <p>How to allocate instance types to fulfill On-Demand capacity. The valid value is <code>prioritized</code>.</p>
   * @public
   */
  OnDemandAllocationStrategy?: string | undefined;

  /**
   * <p>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances.</p>
   * @public
   */
  OnDemandBaseCapacity?: number | undefined;

  /**
   * <p>The percentage of On-Demand Instances and Spot Instances for additional capacity beyond <code>OnDemandBaseCapacity</code>.</p>
   * @public
   */
  OnDemandPercentageAboveBaseCapacity?: number | undefined;

  /**
   * <p>How to allocate instances across Spot Instance pools. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lowest-price</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-optimized</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-optimized-prioritized</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SpotAllocationStrategy?: string | undefined;

  /**
   * <p>The number of Spot Instance pools across which to allocate your Spot Instances.</p>
   * @public
   */
  SpotInstancePools?: number | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   * @public
   */
  SpotMaxPrice?: string | undefined;
}

/**
 * <p>Details about the launch template to use for a mixed instances policy.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  /**
   * <p>The identifier of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>Identifies the version of the launch template. You can specify a version identifier, or use the values <code>$Latest</code> or <code>$Default</code>.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Property values to use to override the values in the launch template.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  /**
   * <p>The instance type. For example, <code>m3.xlarge</code>.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of capacity units provided by the specified instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic.</p>
   * @public
   */
  WeightedCapacity?: string | undefined;
}

/**
 * <p>Describes a launch template and overrides for a mixed instances policy.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  /**
   * <p>The launch template to use for a mixed instances policy.</p>
   * @public
   */
  LaunchTemplateSpecification?:
    | AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
    | undefined;

  /**
   * <p>Property values to use to override the values in the launch template.</p>
   * @public
   */
  Overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[] | undefined;
}

/**
 * <p>The mixed instances policy for the automatic scaling group.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  /**
   * <p>The instances distribution. The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p>
   * @public
   */
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails | undefined;

  /**
   * <p>The launch template to use and the instance types (overrides) to use to provision EC2 instances to fulfill On-Demand and Spot capacities.</p>
   * @public
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails | undefined;
}

/**
 * <p>Provides details about an auto scaling group.</p>
 * @public
 */
export interface AwsAutoScalingAutoScalingGroupDetails {
  /**
   * <p>The name of the launch configuration.</p>
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * <p>The list of load balancers associated with the group.</p>
   * @public
   */
  LoadBalancerNames?: string[] | undefined;

  /**
   * <p>The service to use for the health checks. Valid values are <code>EC2</code> or <code>ELB</code>.</p>
   * @public
   */
  HealthCheckType?: string | undefined;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before it checks the
   *          health status of an EC2 instance that has come into service.</p>
   * @public
   */
  HealthCheckGracePeriod?: number | undefined;

  /**
   * <p>Indicates when the auto scaling group was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The mixed instances policy for the automatic scaling group.</p>
   * @public
   */
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails | undefined;

  /**
   * <p>The list of Availability Zones for the automatic scaling group.</p>
   * @public
   */
  AvailabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[] | undefined;

  /**
   * <p>The launch template to use.</p>
   * @public
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification | undefined;

  /**
   * <p>Indicates whether capacity rebalancing is enabled.
   *       </p>
   * @public
   */
  CapacityRebalance?: boolean | undefined;
}

/**
 * <p>Parameters that are used to automatically set up EBS volumes when an instance is launched.</p>
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  /**
   * <p>Whether to delete the volume when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>Whether to encrypt the volume.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of input/output (I/O) operations per second (IOPS) to provision for the volume.</p>
   *          <p>Only supported for <code>gp3</code> or <code>io1</code> volumes. Required for <code>io1</code> volumes. Not used with <code>standard</code>, <code>gp2</code>, <code>st1</code>, or <code>sc1</code> volumes.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The snapshot ID of the volume to use.</p>
   *          <p>You must specify either <code>VolumeSize</code> or <code>SnapshotId</code>.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The volume size, in GiBs. The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>gp2 and gp3: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>io1: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>st1 and sc1: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>standard: 1-1,024</p>
   *             </li>
   *          </ul>
   *          <p>You must specify either <code>SnapshotId</code> or <code>VolumeSize</code>. If you specify both <code>SnapshotId</code> and <code>VolumeSize</code>, the volume size must be equal or greater than the size of the snapshot.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * <p>A block device for the instance.</p>
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  /**
   * <p>The device name that is exposed to the EC2 instance. For example, <code>/dev/sdh</code> or <code>xvdh</code>.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters that are used to automatically set up Amazon EBS volumes when an instance is launched.</p>
   * @public
   */
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails | undefined;

  /**
   * <p>Whether to suppress the device that is included in the block device mapping of the Amazon Machine Image (AMI).</p>
   *          <p>If <code>NoDevice</code> is <code>true</code>, then you cannot specify <code>Ebs</code>.></p>
   * @public
   */
  NoDevice?: boolean | undefined;

  /**
   * <p>The name of the virtual device (for example, <code>ephemeral0</code>).</p>
   *          <p>You can provide either <code>VirtualName</code> or <code>Ebs</code>, but not both.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * <p>Information about the type of monitoring for instances in the group.</p>
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  /**
   * <p>If set to <code>true</code>, then instances in the group launch with detailed
   *          monitoring.</p>
   *          <p>If set to <code>false</code>, then instances in the group launch with basic
   *          monitoring.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>The metadata options for the instances.</p>
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. By default, the metadata endpoint is enabled.</p>
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * <p>The HTTP <code>PUT</code> response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether token usage is <code>required</code> or <code>optional</code> for metadata requests. By default, token usage is <code>optional</code>.</p>
   * @public
   */
  HttpTokens?: string | undefined;
}

/**
 * <p>Details about a launch configuration.</p>
 * @public
 */
export interface AwsAutoScalingLaunchConfigurationDetails {
  /**
   * <p>For Auto Scaling groups that run in a VPC, specifies whether to assign a public IP address to the group's instances.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Specifies the block devices for the instance.</p>
   * @public
   */
  BlockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] | undefined;

  /**
   * <p>The identifier of a ClassicLink-enabled VPC that EC2-Classic instances are linked to.</p>
   * @public
   */
  ClassicLinkVpcId?: string | undefined;

  /**
   * <p>The identifiers of one or more security groups for the VPC that is specified in <code>ClassicLinkVPCId</code>.</p>
   * @public
   */
  ClassicLinkVpcSecurityGroups?: string[] | undefined;

  /**
   * <p>The creation date and time for the launch configuration.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>Whether the launch configuration is optimized for Amazon EBS I/O.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The name or the ARN of the instance profile associated with the IAM role for the
   *          instance. The instance profile contains the IAM role.</p>
   * @public
   */
  IamInstanceProfile?: string | undefined;

  /**
   * <p>The identifier of the Amazon Machine Image (AMI) that is used to launch EC2
   *          instances.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>Indicates the type of monitoring for instances in the group.</p>
   * @public
   */
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails | undefined;

  /**
   * <p>The instance type for the instances.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The identifier of the kernel associated with the AMI.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The name of the launch configuration.</p>
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with <code>dedicated</code> tenancy runs on
   *          isolated, single-tenant hardware and can only be launched into a VPC.</p>
   * @public
   */
  PlacementTenancy?: string | undefined;

  /**
   * <p>The identifier of the RAM disk associated with the AMI.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The security groups to assign to the instances in the Auto Scaling group.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance that is launched to fulfill the
   *          request.</p>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The user data to make available to the launched EC2 instances. Must be base64-encoded
   *          text.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The metadata options for the instances.</p>
   * @public
   */
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions | undefined;
}

/**
 * <p>Provides a list of backup options for each resource type.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for Windows
   * Volume Shadow Copy Service (VSS) backup jobs. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Set to <code>WindowsVSS: enabled</code> to enable the WindowsVSS backup option and create a Windows VSS backup.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>WindowsVSS: disabled</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * <p>The name of a resource type. The only supported resource type is Amazon EC2 instances with Windows VSS.</p>
   *          <p>The only valid value is <code>EC2</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * <p>Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;
}

/**
 * <p>An array of <code>CopyAction</code> objects, each of which contains details of the copy operation.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.
   *       </p>
   * @public
   */
  DestinationBackupVaultArn?: string | undefined;

  /**
   * <p>Defines when a protected resource is transitioned to cold storage and when it expires.
   *             Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. If you don't specify a lifecycle, Backup applies
   *          the lifecycle policy of the source backup to the destination backup.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.</p>
   * @public
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails | undefined;
}

/**
 * <p>Provides details about an array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanRuleDetails {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region  where they are created. They consist of letters, numbers, and hyphens.
   *       </p>
   * @public
   */
  TargetBackupVault?: string | undefined;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully.
   *       </p>
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * <p>A cron expression in UTC specifying when Backup initiates a backup job.
   *       </p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of resources.
   *       </p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>Specifies whether Backup creates continuous backups capable of point-in-time restore (PITR).
   *       </p>
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be completed, or it is canceled by Backup.
   *       </p>
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * <p>An array of <code>CopyAction</code> objects, each of which contains details of the
   *          copy operation. </p>
   * @public
   */
  CopyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[] | undefined;

  /**
   * <p>Defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. If you don't specify a lifecycle, Backup applies the lifecycle policy of the source backup to the destination backup.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.</p>
   * @public
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails | undefined;
}

/**
 * <p>Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanBackupPlanDetails {
  /**
   * <p>The display name of a backup plan.
   *       </p>
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * <p>A list of backup options for each resource type.
   *       </p>
   * @public
   */
  AdvancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[] | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *       </p>
   * @public
   */
  BackupPlanRule?: AwsBackupBackupPlanRuleDetails[] | undefined;
}

/**
 * <p>Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 *       </p>
 * @public
 */
export interface AwsBackupBackupPlanDetails {
  /**
   * <p>Uniquely identifies the backup plan to be associated with the selection of resources.
   *       </p>
   * @public
   */
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the backup plan.
   *       </p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>A unique ID for the backup plan.
   *       </p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings. Version IDs cannot be edited.
   *       </p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * <p>Provides details about the Amazon SNS event notifications for the specified backup vault.
 *       </p>
 * @public
 */
export interface AwsBackupBackupVaultNotificationsDetails {
  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup vault.
   * The following events are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BACKUP_JOB_STARTED | BACKUP_JOB_COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPY_JOB_STARTED | COPY_JOB_SUCCESSFUL | COPY_JOB_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTORE_JOB_STARTED | RESTORE_JOB_COMPLETED | RECOVERY_POINT_MODIFIED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3_BACKUP_OBJECT_FAILED | S3_RESTORE_OBJECT_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupVaultEvents?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the Amazon SNS topic for
   *          a backup vault's events. </p>
   * @public
   */
  SnsTopicArn?: string | undefined;
}

/**
 * <p>Provides details about an Backup backup vault. In Backup, a backup vault is
 * a container that stores and organizes your backups.
 *       </p>
 * @public
 */
export interface AwsBackupBackupVaultDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *       </p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the
   * Amazon Web Services account used to create them and the Amazon Web Services Region where they are created.
   * They consist of lowercase letters, numbers, and hyphens.
   *       </p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>The unique ARN associated with the server-side encryption key. You can specify a key to encrypt your backups from services that support
   * full Backup management. If you don't specify a key, Backup creates an KMS key for you by default.
   *       </p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The Amazon SNS event notifications for the specified backup vault.
   *       </p>
   * @public
   */
  Notifications?: AwsBackupBackupVaultNotificationsDetails | undefined;

  /**
   * <p>A resource-based policy that is used to manage access permissions on the target backup vault.
   *       </p>
   * @public
   */
  AccessPolicy?: string | undefined;
}

/**
 * <p>Specifies how long in days before a recovery point transitions to cold storage or is deleted.
 *       </p>
 * @public
 */
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater
   * than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   * @public
   */
  DeleteAt?: string | undefined;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   * @public
   */
  MoveToColdStorageAt?: string | undefined;
}

/**
 * <p>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
 *       </p>
 * @public
 */
export interface AwsBackupRecoveryPointCreatedByDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan.
   *       </p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>Uniquely identifies a backup plan.
   *       </p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most
   * 1,024 bytes long. Version IDs cannot be edited.
   *       </p>
   * @public
   */
  BackupPlanVersion?: string | undefined;

  /**
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of resources.
   *       </p>
   * @public
   */
  BackupRuleId?: string | undefined;
}

/**
 * <p>Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.
 *       </p>
 * @public
 */
export interface AwsBackupRecoveryPointLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater
   * than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;
}

/**
 * <p>Contains detailed information about the recovery points stored in an Backup backup vault.
 * A backup, or recovery point, represents the content of a resource at a specified time.
 *       </p>
 * @public
 */
export interface AwsBackupRecoveryPointDetails {
  /**
   * <p>The size, in bytes, of a backup.
   *       </p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *       </p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names
   * that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region
   * where they are created. They consist of lowercase letters, numbers, and hyphens.
   *       </p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.
   *       </p>
   * @public
   */
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails | undefined;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and UTC.
   * The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087
   * represents Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   * <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code>
   * of the backup plan that is used to create it.
   *       </p>
   * @public
   */
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails | undefined;

  /**
   * <p>The date and time a recovery point is created, in Unix format and UTC. The value of <code>CreationDate</code>
   * is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The ARN for the server-side encryption key that is used to protect your backups.
   *       </p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point
   *       </p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   * encrypted, or <code>FALSE</code> if the recovery point is not encrypted.
   *       </p>
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and UTC. The value of
   * <code>LastRestoreTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents
   * Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   * @public
   */
  LastRestoreTime?: string | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it
   * expires. Backup transitions and expires backups automatically according to the lifecycle that
   * you define
   *       </p>
   * @public
   */
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point.
   *       </p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *       </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point, such as an Amazon EBS volume or an Amazon RDS database.
   *       </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ARN for the backup vault where the recovery point was originally copied from. If the recovery
   * point is restored to the same account, this value will be null.
   *       </p>
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * <p>A status code specifying the state of the recovery point. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A message explaining the reason of the recovery point deletion failure.
   *       </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Specifies the storage class of the recovery point. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COLD</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARM</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageClass?: string | undefined;
}

/**
 * <p>Provides details about the CNAME record that is added to the DNS database for domain
 *          validation.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateResourceRecord {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value of the resource.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains information about one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The initial validation of each domain name that occurs as a result of the
 *                   <code>RequestCertificate</code> request</p>
 *             </li>
 *             <li>
 *                <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AwsCertificateManagerCertificateDomainValidationOption {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The CNAME record that is added to the DNS database for domain validation.</p>
   * @public
   */
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord | undefined;

  /**
   * <p>The domain name that Certificate Manager uses to send domain validation
   *          emails.</p>
   * @public
   */
  ValidationDomain?: string | undefined;

  /**
   * <p>A list of email addresses that Certificate Manager uses to send domain validation
   *          emails.</p>
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * <p>The method used to validate the domain name.</p>
   * @public
   */
  ValidationMethod?: string | undefined;

  /**
   * <p>The validation status of the domain name.</p>
   * @public
   */
  ValidationStatus?: string | undefined;
}

/**
 * <p>Contains information about an extended key usage X.509 v3 extension object.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * <p>The name of an extension value. Indicates the purpose for which the certificate public
   *          key can be used.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An object identifier (OID) for the extension value.</p>
   *          <p>The format is numbers separated by periods.</p>
   * @public
   */
  OId?: string | undefined;
}

/**
 * <p>Contains information about a key usage X.509 v3 extension object.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateKeyUsage {
  /**
   * <p>The key usage extension name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Contains other options for the certificate.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateOptions {
  /**
   * <p>Whether to add the certificate to a transparency log.</p>
   *          <p>Valid values: <code>DISABLED</code> | <code>ENABLED</code>
   *          </p>
   * @public
   */
  CertificateTransparencyLoggingPreference?: string | undefined;
}

/**
 * <p>Contains information about the Certificate Manager managed renewal for an
 *             <code>AMAZON_ISSUED</code> certificate.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateRenewalSummary {
  /**
   * <p>Information about the validation of each domain name in the certificate, as it pertains
   *          to Certificate Manager managed renewal. Provided only when the certificate type is
   *             <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[] | undefined;

  /**
   * <p>The status of the Certificate Manager managed renewal of the certificate.</p>
   *          <p>Valid values: <code>PENDING_AUTO_RENEWAL</code> | <code>PENDING_VALIDATION</code> |
   *             <code>SUCCESS</code> | <code>FAILED</code>
   *          </p>
   * @public
   */
  RenewalStatus?: string | undefined;

  /**
   * <p>The reason that a renewal request was unsuccessful. This attribute is used only when <code>RenewalStatus</code> is <code>FAILED</code>.</p>
   *          <p>Valid values: <code>NO_AVAILABLE_CONTACTS</code> |
   *             <code>ADDITIONAL_VERIFICATION_REQUIRED</code> | <code>DOMAIN_NOT_ALLOWED</code> |
   *             <code>INVALID_PUBLIC_DOMAIN</code> | <code>DOMAIN_VALIDATION_DENIED</code> |
   *             <code>CAA_ERROR</code> | <code>PCA_LIMIT_EXCEEDED</code> | <code>PCA_INVALID_ARN</code>
   *          | <code>PCA_INVALID_STATE</code> | <code>PCA_REQUEST_FAILED</code> |
   *             <code>PCA_NAME_CONSTRAINTS_VALIDATION</code> | <code>PCA_RESOURCE_NOT_FOUND</code> |
   *             <code>PCA_INVALID_ARGS</code> | <code>PCA_INVALID_DURATION</code> |
   *             <code>PCA_ACCESS_DENIED</code> | <code>SLR_NOT_FOUND</code> | <code>OTHER</code>
   *          </p>
   * @public
   */
  RenewalStatusReason?: string | undefined;

  /**
   * <p>Indicates when the renewal summary was last updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt?: string | undefined;
}

/**
 * <p>Provides details about an Certificate Manager certificate.</p>
 * @public
 */
export interface AwsCertificateManagerCertificateDetails {
  /**
   * <p>The ARN of the private certificate authority (CA) that will be used to issue the
   *          certificate.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>Indicates when the certificate was requested.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN), such as www.example.com, that is secured by the
   *          certificate.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a
   *          result of the <code>RequestCertificate</code> request.</p>
   *          <p>Only provided if the certificate type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies
   *          a purpose for which the certificate public key can be used and consists of a name and an
   *          object identifier (OID).</p>
   * @public
   */
  ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[] | undefined;

  /**
   * <p>For a failed certificate request, the reason for the failure.</p>
   *          <p>Valid values: <code>NO_AVAILABLE_CONTACTS</code> |
   *             <code>ADDITIONAL_VERIFICATION_REQUIRED</code> | <code>DOMAIN_NOT_ALLOWED</code> |
   *             <code>INVALID_PUBLIC_DOMAIN</code> | <code>DOMAIN_VALIDATION_DENIED</code> |
   *             <code>CAA_ERROR</code> | <code>PCA_LIMIT_EXCEEDED</code> | <code>PCA_INVALID_ARN</code>
   *          | <code>PCA_INVALID_STATE</code> | <code>PCA_REQUEST_FAILED</code> |
   *             <code>PCA_NAME_CONSTRAINTS_VALIDATION</code> | <code>PCA_RESOURCE_NOT_FOUND</code> |
   *             <code>PCA_INVALID_ARGS</code> | <code>PCA_INVALID_DURATION</code> |
   *             <code>PCA_ACCESS_DENIED</code> | <code>SLR_NOT_FOUND</code> | <code>OTHER</code>
   *          </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Indicates when the certificate was imported. Provided if the certificate type is
   *             <code>IMPORTED</code>.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ImportedAt?: string | undefined;

  /**
   * <p>The list of ARNs for the Amazon Web Services resources that use the certificate.</p>
   * @public
   */
  InUseBy?: string[] | undefined;

  /**
   * <p>Indicates when the certificate was issued. Provided if the certificate type is
   *             <code>AMAZON_ISSUED</code>.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  IssuedAt?: string | undefined;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   *          <p>Valid values: <code>RSA_2048</code> | <code>RSA_1024</code> |<code> RSA_4096</code> |
   *             <code>EC_prime256v1</code> | <code>EC_secp384r1</code> |
   *          <code>EC_secp521r1</code>
   *          </p>
   * @public
   */
  KeyAlgorithm?: string | undefined;

  /**
   * <p>A list of key usage X.509 v3 extension objects.</p>
   * @public
   */
  KeyUsages?: AwsCertificateManagerCertificateKeyUsage[] | undefined;

  /**
   * <p>The time after which the certificate becomes invalid.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  NotAfter?: string | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  NotBefore?: string | undefined;

  /**
   * <p>Provides a value that specifies whether to add the certificate to a transparency
   *          log.</p>
   * @public
   */
  Options?: AwsCertificateManagerCertificateOptions | undefined;

  /**
   * <p>Whether the certificate is eligible for renewal.</p>
   *          <p>Valid values: <code>ELIGIBLE</code> | <code>INELIGIBLE</code>
   *          </p>
   * @public
   */
  RenewalEligibility?: string | undefined;

  /**
   * <p>Information about the status of the Certificate Manager managed renewal for the
   *          certificate. Provided only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  Serial?: string | undefined;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   * @public
   */
  SignatureAlgorithm?: string | undefined;

  /**
   * <p>The status of the certificate.</p>
   *          <p>Valid values: <code>PENDING_VALIDATION</code> | <code>ISSUED</code> |
   *             <code>INACTIVE</code> | <code>EXPIRED</code> | <code>VALIDATION_TIMED_OUT</code> |
   *             <code>REVOKED</code> | <code>FAILED</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *          certificate.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This
   *          list contains the domain names that are bound to the public key that is contained in the
   *          certificate.</p>
   *          <p>The subject alternative names include the canonical domain name (CN) of the certificate
   *          and additional domain names that can be used to connect to the website.</p>
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * <p>The source of the certificate. For certificates that Certificate Manager provides,
   *             <code>Type</code> is <code>AMAZON_ISSUED</code>. For certificates that are imported with
   *             <code>ImportCertificate</code>, <code>Type</code> is <code>IMPORTED</code>.</p>
   *          <p>Valid values: <code>IMPORTED</code> | <code>AMAZON_ISSUED</code> |
   *          <code>PRIVATE</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about the stack's conformity to its expected template configuration.
 *       </p>
 * @public
 */
export interface AwsCloudFormationStackDriftInformationDetails {
  /**
   * <p>Status of the stack's actual configuration compared to its expected template configuration.
   *       </p>
   * @public
   */
  StackDriftStatus?: string | undefined;
}

/**
 * <p>Provides information about the CloudFormation stack output.
 *       </p>
 * @public
 */
export interface AwsCloudFormationStackOutputsDetails {
  /**
   * <p>A user-defined description associated with the output.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key associated with the output.
   *       </p>
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * <p>The value associated with the output.
   *       </p>
   * @public
   */
  OutputValue?: string | undefined;
}

/**
 * <p>Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for
 * another stack.</p>
 * @public
 */
export interface AwsCloudFormationStackDetails {
  /**
   * <p>The capabilities allowed in the stack.
   *       </p>
   * @public
   */
  Capabilities?: string[] | undefined;

  /**
   * <p>The time at which the stack was created. </p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>A user-defined description associated with the stack.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Boolean to enable or disable rollback on stack creation failures.
   *       </p>
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * <p>Information about whether a stack's actual configuration differs, or has drifted, from its expected
   * configuration, as defined in the stack template and any values specified as template parameters.
   *       </p>
   * @public
   */
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails | undefined;

  /**
   * <p>Whether termination protection is enabled for the stack.
   *       </p>
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * <p>The time the nested stack was last updated. This field will only be returned if the stack has been
   * updated at least once.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Amazon SNS topic to which stack-related events are published.
   *       </p>
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * <p>A list of output structures.
   *       </p>
   * @public
   */
  Outputs?: AwsCloudFormationStackOutputsDetails[] | undefined;

  /**
   * <p>The ARN of an IAM role that's associated with the stack.
   *       </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Unique identifier of the stack.
   *       </p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The name associated with the stack.
   *       </p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>Current status of the stack.
   *       </p>
   * @public
   */
  StackStatus?: string | undefined;

  /**
   * <p>Success or failure message associated with the stack status.
   *       </p>
   * @public
   */
  StackStatusReason?: string | undefined;

  /**
   * <p>The length of time, in minutes, that CloudFormation waits for the nested stack to reach
   * the <code>CREATE_COMPLETE</code> state.
   *       </p>
   * @public
   */
  TimeoutInMinutes?: number | undefined;
}

/**
 * <p>Information about a cache behavior for the distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionCacheBehavior {
  /**
   * <p>The protocol that viewers can use to access the files in an origin. You can specify the
   *          following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-all</code> - Viewers can use HTTP or HTTPS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>redirect-to-https</code> - CloudFront responds to HTTP requests with an HTTP
   *                status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the
   *                new URL to resubmit.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https-only</code> - CloudFront responds to HTTP request with an HTTP status
   *                code of 403 (Forbidden).</p>
   *             </li>
   *          </ul>
   * @public
   */
  ViewerProtocolPolicy?: string | undefined;
}

/**
 * <p>Provides information about caching for the CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionCacheBehaviors {
  /**
   * <p>The cache behaviors for the distribution.</p>
   * @public
   */
  Items?: AwsCloudFrontDistributionCacheBehavior[] | undefined;
}

/**
 * <p>Contains information about the default cache configuration for the CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * <p>The protocol that viewers can use to access the files in an origin. You can specify the
   *          following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-all</code> - Viewers can use HTTP or HTTPS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>redirect-to-https</code> - CloudFront responds to HTTP requests with an HTTP
   *                status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the
   *                new URL to resubmit.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https-only</code> - CloudFront responds to HTTP request with an HTTP status
   *                code of 403 (Forbidden).</p>
   *             </li>
   *          </ul>
   * @public
   */
  ViewerProtocolPolicy?: string | undefined;
}

/**
 * <p>A complex type that controls whether access logs are written for the CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionLogging {
  /**
   * <p>The S3 bucket to store the access logs in.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>With this field, you can enable or disable the selected distribution.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs.</p>
   * @public
   */
  IncludeCookies?: boolean | undefined;

  /**
   * <p>An optional string that you want CloudFront to use as a prefix to the access log
   *          filenames for this distribution.</p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>The status codes that cause an origin group to fail over.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * <p>The list of status code values that can cause a failover to the next origin.</p>
   * @public
   */
  Items?: number[] | undefined;

  /**
   * <p>The number of status codes that can cause a failover.</p>
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * <p>Provides information about when an origin group fails over.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * <p>Information about the status codes that cause an origin group to fail over.</p>
   * @public
   */
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes | undefined;
}

/**
 * <p>Information about an origin group for the CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroup {
  /**
   * <p>Provides the criteria for an origin group to fail over.</p>
   * @public
   */
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover | undefined;
}

/**
 * <p>Provides information about origin groups that are associated with the CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginGroups {
  /**
   * <p>The list of origin groups.</p>
   * @public
   */
  Items?: AwsCloudFrontDistributionOriginGroup[] | undefined;
}

/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use
 * when establishing an HTTPS connection with your origin.
 *       </p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginSslProtocols {
  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.
   *       </p>
   * @public
   */
  Items?: string[] | undefined;

  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing
   * an HTTPS connection with this origin.
   *       </p>
   * @public
   */
  Quantity?: number | undefined;
}

/**
 * <p>A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with
 *             static website hosting</a> is a custom origin. </p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  /**
   * <p>The HTTP port that CloudFront uses to connect to the origin.
   *       </p>
   * @public
   */
  HttpPort?: number | undefined;

  /**
   * <p>The HTTPS port that CloudFront uses to connect to the origin.
   *       </p>
   * @public
   */
  HttpsPort?: number | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin.
   *       </p>
   * @public
   */
  OriginKeepaliveTimeout?: number | undefined;

  /**
   * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin.
   *       </p>
   * @public
   */
  OriginProtocolPolicy?: string | undefined;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin.
   *       </p>
   * @public
   */
  OriginReadTimeout?: number | undefined;

  /**
   * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS.
   *       </p>
   * @public
   */
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols | undefined;
}

/**
 * <p>Information about an origin that is an Amazon S3 bucket that is not configured with static website
 *          hosting.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * <p>The CloudFront origin access identity to associate with the origin.</p>
   * @public
   */
  OriginAccessIdentity?: string | undefined;
}

/**
 * <p>A complex type that describes the
 *             Amazon S3 bucket, HTTP server (for example, a web server), Elemental MediaStore, or other server from which CloudFront gets your files.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * <p>Amazon S3 origins: The DNS name of the S3 bucket from which you want
   *             CloudFront to get objects for this origin.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>A unique identifier for the origin or origin group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>An optional element that causes CloudFront to request your content from a
   *          directory in your Amazon S3 bucket or your custom origin.</p>
   * @public
   */
  OriginPath?: string | undefined;

  /**
   * <p>An origin that is an S3 bucket that is not configured with static website
   *          hosting.</p>
   * @public
   */
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig | undefined;

  /**
   * <p>An origin that is not an Amazon S3 bucket, with one exception.
   * If the Amazon S3 bucket is configured with static website hosting, use this attribute.
   * If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.
   *       </p>
   * @public
   */
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig | undefined;
}

/**
 * <p>A complex type that contains information about origins and origin groups for this CloudFront distribution.</p>
 * @public
 */
export interface AwsCloudFrontDistributionOrigins {
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   * @public
   */
  Items?: AwsCloudFrontDistributionOriginItem[] | undefined;
}

/**
 * <p>Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers.</p>
 * @public
 */
export interface AwsCloudFrontDistributionViewerCertificate {
  /**
   * <p>The ARN of the ACM certificate. Used if the certificate is stored in ACM. If you provide an ACM certificate ARN, you must also provide <code>MinimumCertificateVersion</code> and <code>SslSupportMethod</code>.</p>
   * @public
   */
  AcmCertificateArn?: string | undefined;

  /**
   * <p>The identifier of the certificate. Note that in CloudFront, this attribute is deprecated.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The source of the certificate identified by <code>Certificate</code>. Note that in CloudFront, this attribute is deprecated.</p>
   * @public
   */
  CertificateSource?: string | undefined;

  /**
   * <p>Whether the distribution uses the CloudFront domain name. If set to <code>false</code>, then you provide either <code>AcmCertificateArn</code> or <code>IamCertificateId</code>.</p>
   * @public
   */
  CloudFrontDefaultCertificate?: boolean | undefined;

  /**
   * <p>The identifier of the IAM certificate. Used if the certificate is stored in IAM. If you provide <code>IamCertificateId</code>, then you also must provide <code>MinimumProtocolVersion</code> and <code>SslSupportMethod</code>.</p>
   * @public
   */
  IamCertificateId?: string | undefined;

  /**
   * <p>The security policy that CloudFront uses for HTTPS connections with viewers. If <code>SslSupportMethod</code> is <code>sni-only</code>, then <code>MinimumProtocolVersion</code> must be <code>TLSv1</code> or higher.</p>
   * @public
   */
  MinimumProtocolVersion?: string | undefined;

  /**
   * <p>The viewers that the distribution accepts HTTPS connections from.</p>
   * @public
   */
  SslSupportMethod?: string | undefined;
}

/**
 * <p>A CloudFront distribution configuration.</p>
 * @public
 */
export interface AwsCloudFrontDistributionDetails {
  /**
   * <p>Provides information about the cache configuration for the distribution.</p>
   * @public
   */
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors | undefined;

  /**
   * <p>The default cache behavior for the configuration.</p>
   * @public
   */
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior | undefined;

  /**
   * <p>The object that CloudFront sends in response to requests from the origin (for example,
   *          index.html) when a viewer requests the root URL for the distribution
   *          (http://www.example.com) instead of an object in your distribution
   *          (http://www.example.com/product-description.html). </p>
   * @public
   */
  DefaultRootObject?: string | undefined;

  /**
   * <p>The domain name corresponding to the distribution.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The entity tag is a hash of the object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Indicates when that the distribution was last modified.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastModifiedTime?: string | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p>
   * @public
   */
  Logging?: AwsCloudFrontDistributionLogging | undefined;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   * @public
   */
  Origins?: AwsCloudFrontDistributionOrigins | undefined;

  /**
   * <p>Provides information about the origin groups in the distribution.</p>
   * @public
   */
  OriginGroups?: AwsCloudFrontDistributionOriginGroups | undefined;

  /**
   * <p>Provides information about the TLS/SSL configuration that the distribution uses to communicate with viewers.</p>
   * @public
   */
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate | undefined;

  /**
   * <p>Indicates the current status of the distribution.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution.</p>
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * <p>Provides details about a CloudTrail trail.</p>
 * @public
 */
export interface AwsCloudTrailTrailDetails {
  /**
   * <p>The ARN of the log group that CloudTrail logs are delivered to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>The ARN of the role that the CloudWatch Events endpoint assumes when it writes to the log
   *          group.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>Indicates whether the trail has custom event selectors.</p>
   * @public
   */
  HasCustomEventSelectors?: boolean | undefined;

  /**
   * <p>The Region where the trail was created.</p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p>Indicates whether the trail publishes events from global services such as IAM to the log
   *          files.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Indicates whether the trail applies only to the current Region or to all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * <p>Whether the trail is created for all accounts in an organization in Organizations,
   *          or only for the current Amazon Web Services account.</p>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * <p>The KMS key ID to use to encrypt the logs.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Indicates whether CloudTrail log file validation is enabled.</p>
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * <p>The name of the trail.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the S3 bucket where the log files are published.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The S3 key prefix. The key prefix is added after the name of the S3 bucket where the log
   *          files are published.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The ARN of the SNS topic that is used for notifications of log file delivery.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The name of the SNS topic that is used for notifications of log file delivery.</p>
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>The ARN of the trail.</p>
   * @public
   */
  TrailArn?: string | undefined;
}

/**
 * <p>Details about the dimensions for the metric associated with the alarm.
 *       </p>
 * @public
 */
export interface AwsCloudWatchAlarmDimensionsDetails {
  /**
   * <p>The name of a dimension.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of a dimension.
   *       </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies an alarm and associates it with the specified metric or metric math expression.
 *       </p>
 * @public
 */
export interface AwsCloudWatchAlarmDetails {
  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state.
   *       </p>
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * <p>The list of actions, specified as Amazon Resource Names (ARNs) to execute when this alarm transitions into an <code>ALARM</code> state from any other
   *          state. </p>
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * <p>The ARN of the alarm.
   *       </p>
   * @public
   */
  AlarmArn?: string | undefined;

  /**
   * <p>The time stamp of the last update to the alarm configuration.
   *       </p>
   * @public
   */
  AlarmConfigurationUpdatedTimestamp?: string | undefined;

  /**
   * <p>The description of the alarm.
   *       </p>
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * <p>The name of the alarm. If you don't specify a name, CloudFront generates a unique physical ID
   * and uses that ID for the alarm name.
   *       </p>
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic and threshold. The specified
   * statistic value is used as the first operand.
   *       </p>
   * @public
   */
  ComparisonOperator?: string | undefined;

  /**
   * <p>The number of datapoints that must be breaching to trigger the alarm.
   *       </p>
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * <p>The dimensions for the metric associated with the alarm.
   *       </p>
   * @public
   */
  Dimensions?: AwsCloudWatchAlarmDimensionsDetails[] | undefined;

  /**
   * <p>Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change during
   * periods with too few data points to be statistically significant. If <code>evaluate</code> or this parameter is not used,
   * the alarm is always evaluated and possibly changes state no matter how many data points are available.
   *       </p>
   * @public
   */
  EvaluateLowSampleCountPercentile?: string | undefined;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.
   *       </p>
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * <p>The percentile statistic for the metric associated with the alarm.
   *       </p>
   * @public
   */
  ExtendedStatistic?: string | undefined;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from
   * any other state. Each action is specified as an ARN.
   *       </p>
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * <p>The name of the metric associated with the alarm. This is required for an alarm based on a metric.
   * For an alarm based on a math expression, you use <code>Metrics</code> instead and you can't specify <code>MetricName</code>.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The namespace of the metric associated with the alarm. This is required for an alarm based on a
   * metric. For an alarm based on a math expression, you can't specify <code>Namespace</code> and you use
   * <code>Metrics</code> instead.
   *       </p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state from any other state.
   * Each action is specified as an ARN.
   *       </p>
   * @public
   */
  OkActions?: string[] | undefined;

  /**
   * <p>The period, in seconds, over which the statistic is applied. This is required for an alarm based on a
   * metric.
   *       </p>
   * @public
   */
  Period?: number | undefined;

  /**
   * <p>The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>.</p>
   *          <p>For an alarm based on a metric, you must specify either <code>Statistic</code> or <code>ExtendedStatistic</code> but not both.</p>
   *          <p>For an alarm based on a math expression, you can't specify <code>Statistic</code>. Instead, you use <code>Metrics</code>.</p>
   * @public
   */
  Statistic?: string | undefined;

  /**
   * <p>The value to compare with the specified statistic.
   *       </p>
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>n an alarm based on an anomaly detection model, this is the ID of the <code>ANOMALY_DETECTION_BAND</code> function used as the threshold for the alarm.
   *       </p>
   * @public
   */
  ThresholdMetricId?: string | undefined;

  /**
   * <p>Sets how this alarm is to handle missing data points.
   *       </p>
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * <p>The unit of the metric associated with the alarm.
   *       </p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>Information about the build artifacts for the CodeBuild project.</p>
 * @public
 */
export interface AwsCodeBuildProjectArtifactsDetails {
  /**
   * <p>An identifier for the artifact definition.</p>
   * @public
   */
  ArtifactIdentifier?: string | undefined;

  /**
   * <p>Indicates whether to disable encryption on the artifact. Only valid when <code>Type</code> is <code>S3</code>.</p>
   * @public
   */
  EncryptionDisabled?: boolean | undefined;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The name of the S3 bucket where the artifact is located.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>Only used when Type is S3. The name of the artifact. Used with <code>NamepaceType</code> and <code>Path</code> to determine the pattern for storing the artifact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The value to use for the namespace. Used with <code>Name</code> and <code>Path</code> to determine the pattern for storing the artifact.</p>
   * @public
   */
  NamespaceType?: string | undefined;

  /**
   * <p>Whether the name specified in the buildspec file overrides the artifact name.</p>
   * @public
   */
  OverrideArtifactName?: boolean | undefined;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The type of output artifact to create.</p>
   * @public
   */
  Packaging?: string | undefined;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The path to the artifact. Used with <code>Name</code> and <code>NamespaceType</code> to determine the pattern for storing the artifact.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The type of build artifact.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about an environment variable that is available to builds for the build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  /**
   * <p>The name of the environment variable.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of environment variable.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The credentials for access to a private registry.</p>
 * @public
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * <p>The ARN or name of credentials created using Secrets Manager.</p>
   *          <note>
   *             <p>The credential can use the name of the credentials only if they exist in your current
   *             Amazon Web Services Region. </p>
   *          </note>
   * @public
   */
  Credential?: string | undefined;

  /**
   * <p>The service that created the credentials to access a private Docker registry.</p>
   *          <p>The valid value,<code> SECRETS_MANAGER</code>, is for Secrets Manager.</p>
   * @public
   */
  CredentialProvider?: string | undefined;
}

/**
 * <p>Information about the build environment for this build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectEnvironment {
  /**
   * <p>The certificate to use with this build project.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>A set of environment variables to make available to builds for the build project.</p>
   * @public
   */
  EnvironmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[] | undefined;

  /**
   * <p>Whether to allow the Docker daemon to run inside a Docker container. Set to <code>true</code> if the build project is used to build Docker images.</p>
   * @public
   */
  PrivilegedMode?: boolean | undefined;

  /**
   * <p>The type of credentials CodeBuild uses to pull images in your build.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CODEBUILD</code> specifies that CodeBuild uses its own credentials. This
   *                requires that you modify your ECR repository policy to trust the CodeBuild
   *                service principal.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_ROLE</code> specifies that CodeBuild uses your build project's
   *                service role.</p>
   *             </li>
   *          </ul>
   *          <p>When you use a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When you use an CodeBuild curated image, you
   *          must use <code>CODEBUILD</code> credentials.</p>
   * @public
   */
  ImagePullCredentialsType?: string | undefined;

  /**
   * <p>The credentials for access to a private registry.</p>
   * @public
   */
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential | undefined;

  /**
   * <p>The type of build environment to use for related builds.</p>
   *          <p>The environment type <code>ARM_CONTAINER</code> is available only in Regions US East (N.
   *          Virginia), US East (Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Mumbai), Asia
   *          Pacific (Tokyo), Asia Pacific (Sydney), and Europe (Frankfurt).</p>
   *          <p>The environment type <code>LINUX_CONTAINER</code> with compute type
   *          build.general1.2xlarge is available only in Regions US East (N. Virginia), US East (N.
   *          Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe
   *          (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia
   *          Pacific (Sydney), China (Beijing), and China (Ningxia).</p>
   *          <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in Regions US
   *          East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe
   *          (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul),
   *          Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China
   *          (Ningxia).</p>
   *          <p>Valid values: <code>WINDOWS_CONTAINER</code> | <code>LINUX_CONTAINER</code> |
   *             <code>LINUX_GPU_CONTAINER</code> | <code>ARM_CONTAINER</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about CloudWatch Logs for the build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  /**
   * <p>The group name of the logs in CloudWatch Logs.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The current status of the logs in CloudWatch Logs for a build project.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The prefix of the stream name of the CloudWatch Logs.</p>
   * @public
   */
  StreamName?: string | undefined;
}

/**
 * <p>Information about logs built to an S3 bucket for a build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  /**
   * <p>Whether to disable encryption of the S3 build log output.</p>
   * @public
   */
  EncryptionDisabled?: boolean | undefined;

  /**
   * <p>The ARN of the S3 bucket and the path prefix for S3 logs.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The current status of the S3 build logs.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Information about logs for the build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectLogsConfigDetails {
  /**
   * <p>Information about CloudWatch Logs for the build project.</p>
   * @public
   */
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails | undefined;

  /**
   * <p>Information about logs built to an S3 bucket for a build project.</p>
   * @public
   */
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails | undefined;
}

/**
 * <p>Information about the build input source code for this build project.</p>
 * @public
 */
export interface AwsCodeBuildProjectSource {
  /**
   * <p>The type of repository that contains the source code to be built. Valid values
   *          are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BITBUCKET</code> - The source code is in a Bitbucket repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODECOMMIT</code> - The source code is in an CodeCommit
   *                repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODEPIPELINE</code> - The source code settings are specified in the source
   *                action of a pipeline in CodePipeline.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB</code> - The source code is in a GitHub repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB_ENTERPRISE</code> - The source code is in a GitHub Enterprise
   *                repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_SOURCE</code> - The project does not have input source code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> - The source code is in an S3 input bucket. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Information about the location of the source code to be built.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>For source code settings that are specified in the source action of a pipeline in
   *                CodePipeline, location should not be specified. If it is specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a
   *                pipeline's source action instead of this value.</p>
   *             </li>
   *             <li>
   *                <p>For source code in an CodeCommit repository, the HTTPS clone URL to the
   *                repository that contains the source code and the build spec file (for example,
   *                   <code>https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name</code>
   *                ).</p>
   *             </li>
   *             <li>
   *                <p>For source code in an S3 input bucket, one of the following.</p>
   *                <ul>
   *                   <li>
   *                      <p>The path to the ZIP file that contains the source code (for example,
   *                         <code>bucket-name/path/to/object-name.zip</code>).</p>
   *                   </li>
   *                   <li>
   *                      <p> The path to the folder that contains the source code (for example,
   *                         <code>bucket-name/path/to/source-code/folder/</code>).</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For source code in a GitHub repository, the HTTPS clone URL to the repository that
   *                contains the source and the build spec file.</p>
   *             </li>
   *             <li>
   *                <p>For source code in a Bitbucket repository, the HTTPS clone URL to the repository
   *                that contains the source and the build spec file. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   * @public
   */
  GitCloneDepth?: number | undefined;

  /**
   * <p>Whether to ignore SSL warnings while connecting to the project source code.</p>
   * @public
   */
  InsecureSsl?: boolean | undefined;
}

/**
 * <p>Information about the VPC configuration that CodeBuild accesses.</p>
 * @public
 */
export interface AwsCodeBuildProjectVpcConfig {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * <p>A list of one or more security group IDs in your VPC.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>Information about an CodeBuild project.</p>
 * @public
 */
export interface AwsCodeBuildProjectDetails {
  /**
   * <p>The KMS key used to encrypt the
   *          build output artifacts.</p>
   *          <p>You can specify either the ARN of the KMS key or, if available, the
   *          KMS key alias (using the format alias/alias-name). </p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>Information about the build artifacts for the CodeBuild project.</p>
   * @public
   */
  Artifacts?: AwsCodeBuildProjectArtifactsDetails[] | undefined;

  /**
   * <p>Information about the build environment for this build project.</p>
   * @public
   */
  Environment?: AwsCodeBuildProjectEnvironment | undefined;

  /**
   * <p>The name of the build project.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Information about the build input source code for this build project.</p>
   * @public
   */
  Source?: AwsCodeBuildProjectSource | undefined;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services
   *          services on behalf of the Amazon Web Services account.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>Information about logs for the build project.</p>
   * @public
   */
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  VpcConfig?: AwsCodeBuildProjectVpcConfig | undefined;

  /**
   * <p>Information about the secondary artifacts for the CodeBuild project.</p>
   * @public
   */
  SecondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[] | undefined;
}

/**
 * <p>
 *             Provides details about an Database Migration Service (DMS) endpoint. An endpoint provides connection, data
 *             store type, and location information about your data store.
 *         </p>
 * @public
 */
export interface AwsDmsEndpointDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) for the SSL certificate that encrypts connections between the DMS endpoint and the
   *             replication instance.
   *         </p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>
   *             The name of the endpoint database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the endpoint.
   *         </p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>
   *             The database endpoint identifier.
   *         </p>
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * <p>
   *             The type of endpoint. Valid values are source and target.
   *         </p>
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * <p>
   *             The type of engine for the endpoint, depending on the <code>EndpointType</code> value.
   *         </p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>
   *             A value that can be used for cross-account validation.
   *         </p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>
   *             Additional attributes associated with the connection.
   *         </p>
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * <p>
   *             An DMS key identifier that is used to encrypt the connection parameters for the endpoint.
   *             If you don't specify a value for the <code>KmsKeyId</code> parameter, then DMS uses your default
   *             encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your
   *             Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *             The port used to access the endpoint.
   *         </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>
   *             The name of the server where the endpoint database resides.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>
   *             The SSL mode used to connect to the endpoint. The default is none.</p>
   * @public
   */
  SslMode?: string | undefined;

  /**
   * <p>
   *             The user name to be used to log in to the endpoint database.
   *         </p>
   * @public
   */
  Username?: string | undefined;
}

/**
 * <p>
 *             Provides details about the replication subnet group.</p>
 * @public
 */
export interface AwsDmsReplicationInstanceReplicationSubnetGroupDetails {
  /**
   * <p>
   *             The identifier of the replication subnet group.
   *         </p>
   * @public
   */
  ReplicationSubnetGroupIdentifier?: string | undefined;
}

/**
 * <p>
 *             Provides details about the virtual private cloud (VPC) security group that’s associated with the replication instance.</p>
 * @public
 */
export interface AwsDmsReplicationInstanceVpcSecurityGroupsDetails {
  /**
   * <p>
   *             The identifier of the VPC security group that’s associated with the replication instance.
   *         </p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;
}

/**
 * <p>
 *             Provides details about an Database Migration Service (DMS) replication instance. DMS uses a replication instance to connect to
 *             your source data store, read the source data, and format the data for consumption by the target data store.
 *         </p>
 * @public
 */
export interface AwsDmsReplicationInstanceDetails {
  /**
   * <p>
   *             The amount of storage (in gigabytes) that is allocated for the replication instance.
   *         </p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>
   *         Indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance
   *         window.
   *         </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>
   *             The Availability Zone that the replication instance is created in. The default value is a random, system-chosen
   *             Availability Zone in the endpoint's Amazon Web Services Region, such as <code>us-east-1d</code>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>
   *             The engine version number of the replication instance. If an engine version number is not specified when a
   *             replication instance is created, the default is the latest engine version available.
   *         </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>
   *             An KMS key identifier that is used to encrypt the data on the replication instance. If you don't
   *             specify a value for the <code>KmsKeyId</code> parameter, DMS uses your default encryption key.
   *             KMS creates the default encryption key for your Amazon Web Services account. Your
   *             Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *             Specifies whether the replication instance is deployed across multiple Availability Zones (AZs). You can't set the
   *             <code>AvailabilityZone</code> parameter if the <code>MultiAZ</code> parameter is set to <code>true</code>.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>
   *             The maintenance window times for the replication instance. Upgrades to the replication instance are performed during
   *             this time.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>
   *             Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance
   *             with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default
   *             value is <code>true</code>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>
   *             The compute and memory capacity of the replication instance as defined for the specified replication instance class. </p>
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * <p>
   *             The replication instance identifier.</p>
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * <p>
   *             The subnet group for the replication instance.</p>
   * @public
   */
  ReplicationSubnetGroup?: AwsDmsReplicationInstanceReplicationSubnetGroupDetails | undefined;

  /**
   * <p>
   *             The virtual private cloud (VPC) security group for the replication instance.</p>
   * @public
   */
  VpcSecurityGroups?: AwsDmsReplicationInstanceVpcSecurityGroupsDetails[] | undefined;
}

/**
 * <p>
 *             Provides details about an Database Migration Service (DMS) replication task. A replication task moves a set of data from the
 *             source endpoint to the target endpoint.</p>
 * @public
 */
export interface AwsDmsReplicationTaskDetails {
  /**
   * <p>
   *             Indicates when you want a change data capture (CDC) operation to start. <code>CCdcStartPosition</code> or
   *             <code>CCdcStartTime</code> specifies when you want a CDC operation to start. Only a value for one of these fields
   *             is included.</p>
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>
   *             Indicates the start time for a CDC operation. <code>CdcStartPosition</code> or <code>CCdcStartTime</code> specifies
   *             when you want a CDC operation to start. Only a value for one of these fields is included.</p>
   * @public
   */
  CdcStartTime?: string | undefined;

  /**
   * <p>
   *             Indicates when you want a CDC operation to stop. The value can be either server time or commit time.</p>
   * @public
   */
  CdcStopPosition?: string | undefined;

  /**
   * <p>
   *             The migration type.
   *         </p>
   * @public
   */
  MigrationType?: string | undefined;

  /**
   * <p>
   *             The identifier of the replication task.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             A display name for the resource identifier at the end of the <code>EndpointArn</code> response parameter.
   *             If you don't specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier value for
   *             the end of <code>EndpointArn</code>.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of a replication instance.
   *         </p>
   * @public
   */
  ReplicationInstanceArn?: string | undefined;

  /**
   * <p>
   *             The user-defined replication task identifier or name.</p>
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * <p>
   *             The settings for the replication task.</p>
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

  /**
   * <p>
   *             The ARN of the source endpoint.</p>
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * <p>
   *             The table mappings for the replication task, in JSON format.</p>
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * <p>
   *             The ARN of the target endpoint.</p>
   * @public
   */
  TargetEndpointArn?: string | undefined;

  /**
   * <p>
   *             Supplemental information that the task requires to migrate the data for certain source and target endpoints.</p>
   * @public
   */
  TaskData?: string | undefined;
}

/**
 * <p>Contains a definition of an attribute for the table.</p>
 * @public
 */
export interface AwsDynamoDbTableAttributeDefinition {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The type of the attribute.</p>
   * @public
   */
  AttributeType?: string | undefined;
}

/**
 * <p>Provides information about the billing for read/write capacity on the table.</p>
 * @public
 */
export interface AwsDynamoDbTableBillingModeSummary {
  /**
   * <p>The method used to charge for read and write throughput and to manage capacity.</p>
   * @public
   */
  BillingMode?: string | undefined;

  /**
   * <p>If the billing mode is <code>PAY_PER_REQUEST</code>, indicates when the billing mode was
   *          set to that value.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastUpdateToPayPerRequestDateTime?: string | undefined;
}

/**
 * <p>A component of the key schema for the DynamoDB table, a global secondary index, or a
 *          local secondary index.</p>
 * @public
 */
export interface AwsDynamoDbTableKeySchema {
  /**
   * <p>The name of the key schema attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The type of key used for the key schema attribute. Valid values are <code>HASH</code> or <code>RANGE</code>.</p>
   * @public
   */
  KeyType?: string | undefined;
}

/**
 * <p>For global and local secondary indexes, identifies the attributes that are copied from
 *          the table into the index.</p>
 * @public
 */
export interface AwsDynamoDbTableProjection {
  /**
   * <p>The nonkey attributes that are projected into the index. For each attribute, provide the
   *          attribute name.</p>
   * @public
   */
  NonKeyAttributes?: string[] | undefined;

  /**
   * <p>The types of attributes that are projected into the index. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCLUDE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ProjectionType?: string | undefined;
}

/**
 * <p>Information about the provisioned throughput for the table or for a global secondary
 *          index.</p>
 * @public
 */
export interface AwsDynamoDbTableProvisionedThroughput {
  /**
   * <p>Indicates when the provisioned throughput was last decreased.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastDecreaseDateTime?: string | undefined;

  /**
   * <p>Indicates when the provisioned throughput was last increased.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastIncreaseDateTime?: string | undefined;

  /**
   * <p>The number of times during the current UTC calendar day that the provisioned throughput
   *          was decreased.</p>
   * @public
   */
  NumberOfDecreasesToday?: number | undefined;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
   *          returns a <code>ThrottlingException</code>.</p>
   * @public
   */
  ReadCapacityUnits?: number | undefined;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a
   *             <code>ThrottlingException</code>.</p>
   * @public
   */
  WriteCapacityUnits?: number | undefined;
}

/**
 * <p>Information abut a global secondary index for the table.</p>
 * @public
 */
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * <p>Whether the index is currently backfilling.</p>
   * @public
   */
  Backfilling?: boolean | undefined;

  /**
   * <p>The ARN of the index.</p>
   * @public
   */
  IndexArn?: string | undefined;

  /**
   * <p>The name of the index.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The total size in bytes of the index.</p>
   * @public
   */
  IndexSizeBytes?: number | undefined;

  /**
   * <p>The current status of the index.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndexStatus?: string | undefined;

  /**
   * <p>The number of items in the index.</p>
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * <p>The key schema for the index.</p>
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * <p>Attributes that are copied from the table into an index.</p>
   * @public
   */
  Projection?: AwsDynamoDbTableProjection | undefined;

  /**
   * <p>Information about the provisioned throughput settings for the indexes.</p>
   * @public
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput | undefined;
}

/**
 * <p>Information about a local secondary index for a DynamoDB table.</p>
 * @public
 */
export interface AwsDynamoDbTableLocalSecondaryIndex {
  /**
   * <p>The ARN of the index.</p>
   * @public
   */
  IndexArn?: string | undefined;

  /**
   * <p>The name of the index.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The complete key schema for the index.</p>
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * <p>Attributes that are copied from the table into the index. These are in addition to the
   *          primary key attributes and index key attributes, which are automatically projected.</p>
   * @public
   */
  Projection?: AwsDynamoDbTableProjection | undefined;
}

/**
 * <p>Replica-specific configuration for the provisioned throughput.</p>
 * @public
 */
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * <p>The read capacity units for the replica.</p>
   * @public
   */
  ReadCapacityUnits?: number | undefined;
}

/**
 * <p>Information about a global secondary index for a DynamoDB table replica.</p>
 * @public
 */
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * <p>The name of the index.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>Replica-specific configuration for the provisioned throughput for the index.</p>
   * @public
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride | undefined;
}

/**
 * <p>Information about a replica of a DynamoDB table.</p>
 * @public
 */
export interface AwsDynamoDbTableReplica {
  /**
   * <p>List of global secondary indexes for the replica.</p>
   * @public
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[] | undefined;

  /**
   * <p>The identifier of the KMS key that will be used for KMS
   *          encryption for the replica.</p>
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * <p>Replica-specific configuration for the provisioned throughput.</p>
   * @public
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride | undefined;

  /**
   * <p>The name of the Region where the replica is located.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The current status of the replica. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ReplicaStatus?: string | undefined;

  /**
   * <p>Detailed information about the replica status.</p>
   * @public
   */
  ReplicaStatusDescription?: string | undefined;
}

/**
 * <p>Information about the restore for the table.</p>
 * @public
 */
export interface AwsDynamoDbTableRestoreSummary {
  /**
   * <p>The ARN of the source backup from which the table was restored.</p>
   * @public
   */
  SourceBackupArn?: string | undefined;

  /**
   * <p>The ARN of the source table for the backup.</p>
   * @public
   */
  SourceTableArn?: string | undefined;

  /**
   * <p>Indicates the point in time that the table was restored to.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  RestoreDateTime?: string | undefined;

  /**
   * <p>Whether a restore is currently in progress.</p>
   * @public
   */
  RestoreInProgress?: boolean | undefined;
}

/**
 * <p>Information about the server-side encryption for the table.</p>
 * @public
 */
export interface AwsDynamoDbTableSseDescription {
  /**
   * <p>If the key is inaccessible, the date and time when DynamoDB detected that the key was
   *          inaccessible.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  InaccessibleEncryptionDateTime?: string | undefined;

  /**
   * <p>The status of the server-side encryption.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The type of server-side encryption.</p>
   * @public
   */
  SseType?: string | undefined;

  /**
   * <p>The ARN of the KMS key that is used for the KMS
   *          encryption.</p>
   * @public
   */
  KmsMasterKeyArn?: string | undefined;
}

/**
 * <p>The current DynamoDB Streams configuration for the table.</p>
 * @public
 */
export interface AwsDynamoDbTableStreamSpecification {
  /**
   * <p>Indicates whether DynamoDB Streams is enabled on the table.</p>
   * @public
   */
  StreamEnabled?: boolean | undefined;

  /**
   * <p>Determines the information that is written to the table.</p>
   * @public
   */
  StreamViewType?: string | undefined;
}

/**
 * <p>Provides details about a DynamoDB table.</p>
 * @public
 */
export interface AwsDynamoDbTableDetails {
  /**
   * <p>A list of attribute definitions for the table.</p>
   * @public
   */
  AttributeDefinitions?: AwsDynamoDbTableAttributeDefinition[] | undefined;

  /**
   * <p>Information about the billing for read/write capacity on the table.</p>
   * @public
   */
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary | undefined;

  /**
   * <p>Indicates when the table was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreationDateTime?: string | undefined;

  /**
   * <p>List of global secondary indexes for the table.</p>
   * @public
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[] | undefined;

  /**
   * <p>The version of global tables being used.</p>
   * @public
   */
  GlobalTableVersion?: string | undefined;

  /**
   * <p>The number of items in the table.</p>
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * <p>The primary key structure for the table.</p>
   * @public
   */
  KeySchema?: AwsDynamoDbTableKeySchema[] | undefined;

  /**
   * <p>The ARN of the latest stream for the table.</p>
   * @public
   */
  LatestStreamArn?: string | undefined;

  /**
   * <p>The label of the latest stream. The label is not a unique identifier.</p>
   * @public
   */
  LatestStreamLabel?: string | undefined;

  /**
   * <p>The list of local secondary indexes for the table.</p>
   * @public
   */
  LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[] | undefined;

  /**
   * <p>Information about the provisioned throughput for the table.</p>
   * @public
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput | undefined;

  /**
   * <p>The list of replicas of this table.</p>
   * @public
   */
  Replicas?: AwsDynamoDbTableReplica[] | undefined;

  /**
   * <p>Information about the restore for the table.</p>
   * @public
   */
  RestoreSummary?: AwsDynamoDbTableRestoreSummary | undefined;

  /**
   * <p>Information about the server-side encryption for the table.</p>
   * @public
   */
  SseDescription?: AwsDynamoDbTableSseDescription | undefined;

  /**
   * <p>The current DynamoDB Streams configuration for the table.</p>
   * @public
   */
  StreamSpecification?: AwsDynamoDbTableStreamSpecification | undefined;

  /**
   * <p>The identifier of the table.</p>
   * @public
   */
  TableId?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The total size of the table in bytes.</p>
   * @public
   */
  TableSizeBytes?: number | undefined;

  /**
   * <p>The current status of the table. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TableStatus?: string | undefined;

  /**
   * <p>
   *             Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
   *         </p>
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;
}

/**
 * <p>
 *             Provides details about an Active Directory that’s used to authenticate an Client VPN endpoint.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails {
  /**
   * <p>
   *             The ID of the Active Directory used for authentication.
   *         </p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * <p>
 *             Describes the IAM SAML identity providers used for federated authentication.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the IAM SAML identity provider.
   *         </p>
   * @public
   */
  SamlProviderArn?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.
   *         </p>
   * @public
   */
  SelfServiceSamlProviderArn?: string | undefined;
}

/**
 * <p>
 *             Information about the client certificate used for authentication.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the client certificate.
   *         </p>
   * @public
   */
  ClientRootCertificateChain?: string | undefined;
}

/**
 * <p>
 *             Information about the authentication method used by the Client VPN endpoint.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsDetails {
  /**
   * <p>
   *             The authentication type used.
   *         </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>
   *             Information about the Active Directory, if applicable. With Active Directory authentication, clients are authenticated
   *             against existing Active Directory groups.
   *         </p>
   * @public
   */
  ActiveDirectory?: AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails | undefined;

  /**
   * <p>
   *             Information about the authentication certificates, if applicable.</p>
   * @public
   */
  MutualAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails | undefined;

  /**
   * <p>
   *             Information about the IAM SAML identity provider, if applicable.</p>
   * @public
   */
  FederatedAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails | undefined;
}

/**
 * <p>
 *             Describes the status of the Client VPN endpoint attribute.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails {
  /**
   * <p>
   *             The status code.
   *         </p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>
   *             The status message.
   *         </p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>
 *             The options for managing connection authorization for new client connections.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientConnectOptionsDetails {
  /**
   * <p>
   *             Indicates whether client connect options are enabled.
   *         </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.
   *         </p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * <p>
   *             The status of any updates to the client connect options.
   *         </p>
   * @public
   */
  Status?: AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails | undefined;
}

/**
 * <p>
 *             Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a
 *             VPN session is established.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails {
  /**
   * <p>
   *             Current state of text banner feature.
   *         </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>
   *             Customizable text that will be displayed in a banner on Amazon Web Services provided clients when a VPN session is
   *             established.
   *         </p>
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * <p>
 *             Information about the client connection logging options for the Client VPN endpoint.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointConnectionLogOptionsDetails {
  /**
   * <p>
   *             Indicates whether client connection logging is enabled for the Client VPN endpoint.
   *         </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>
   *             The name of the Amazon CloudWatch Logs log group to which connection logging data is published.
   *         </p>
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * <p>
   *             The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.
   *         </p>
   * @public
   */
  CloudwatchLogStream?: string | undefined;
}

/**
 * <p>
 *             Describes an Client VPN endpoint. A Client VPN endpoint is the resource that you create and
 *             configure to enable and manage client VPN sessions. It's the termination point for all client VPN sessions.
 *         </p>
 * @public
 */
export interface AwsEc2ClientVpnEndpointDetails {
  /**
   * <p>
   *             The ID of the Client VPN endpoint.
   *         </p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>
   *             A brief description of the endpoint.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.
   *         </p>
   * @public
   */
  ClientCidrBlock?: string | undefined;

  /**
   * <p>
   *             Information about the DNS servers to be used for DNS resolution.
   *         </p>
   * @public
   */
  DnsServer?: string[] | undefined;

  /**
   * <p>
   *             Indicates whether split-tunnel is enabled in the Client VPN endpoint.
   *         </p>
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * <p>
   *             The transport protocol used by the Client VPN endpoint.
   *         </p>
   * @public
   */
  TransportProtocol?: string | undefined;

  /**
   * <p>
   *             The port number for the Client VPN endpoint.
   *         </p>
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the server certificate.
   *         </p>
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * <p>
   *             Information about the authentication method used by the Client VPN endpoint.
   *         </p>
   * @public
   */
  AuthenticationOptions?: AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[] | undefined;

  /**
   * <p>
   *             Information about the client connection logging options for the Client VPN endpoint.
   *         </p>
   * @public
   */
  ConnectionLogOptions?: AwsEc2ClientVpnEndpointConnectionLogOptionsDetails | undefined;

  /**
   * <p>
   *             The IDs of the security groups for the target network.
   *         </p>
   * @public
   */
  SecurityGroupIdSet?: string[] | undefined;

  /**
   * <p>
   *             The ID of the VPC.
   *         </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>
   *             The URL of the self-service portal.
   *         </p>
   * @public
   */
  SelfServicePortalUrl?: string | undefined;

  /**
   * <p>
   *             The options for managing connection authorization for new client connections.
   *         </p>
   * @public
   */
  ClientConnectOptions?: AwsEc2ClientVpnEndpointClientConnectOptionsDetails | undefined;

  /**
   * <p>
   *             The maximum VPN session duration time in hours.
   *         </p>
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * <p>
   *             Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a
   *             VPN session is established.
   *         </p>
   * @public
   */
  ClientLoginBannerOptions?: AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails | undefined;
}

/**
 * <p>Information about an Elastic IP address.</p>
 * @public
 */
export interface AwsEc2EipDetails {
  /**
   * <p>The identifier of the EC2 instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>A public IP address that is associated with the EC2 instance.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The identifier that Amazon Web Services assigns to represent the allocation of the Elastic IP address
   *          for use with Amazon VPC.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The identifier that represents the association of the Elastic IP address with an EC2
   *          instance.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The domain in which to allocate the address.</p>
   *          <p>If the address is for use with EC2 instances in a VPC, then <code>Domain</code> is
   *             <code>vpc</code>. Otherwise, <code>Domain</code> is <code>standard</code>. </p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The identifier of an IP address pool. This parameter allows Amazon EC2 to select an IP
   *          address from the address pool.</p>
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * <p>The name of the location from which the Elastic IP address is advertised.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The identifier of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   * @public
   */
  NetworkInterfaceOwnerId?: string | undefined;

  /**
   * <p>The private IP address that is associated with the Elastic IP address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Metadata options that allow you to configure and secure the Amazon EC2 instance.</p>
 * @public
 */
export interface AwsEc2InstanceMetadataOptions {
  /**
   * <p>Enables or disables the HTTP metadata endpoint on the instance.
   *       </p>
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.
   *       </p>
   * @public
   */
  HttpProtocolIpv6?: string | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests.
   *          The larger the number, the further instance metadata requests can travel.
   *       </p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>The state of token usage for your instance metadata requests.
   *       </p>
   * @public
   */
  HttpTokens?: string | undefined;

  /**
   * <p>Specifies whether to allow access to instance tags from the instance metadata.
   *       </p>
   * @public
   */
  InstanceMetadataTags?: string | undefined;
}

/**
 * <p>
 *          The type of monitoring that’s turned on for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2InstanceMonitoringDetails {
  /**
   * <p>
   *          Indicates whether detailed monitoring is turned on. Otherwise, basic monitoring is turned on.
   *       </p>
   * @public
   */
  State?: string | undefined;
}

/**
 * <p>Identifies a network interface for the Amazon EC2 instance.</p>
 * @public
 */
export interface AwsEc2InstanceNetworkInterfacesDetails {
  /**
   * <p>The identifier of the network interface. The details are in a corresponding <code>AwsEc2NetworkInterfacesDetails</code> object.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * <p>The details of an Amazon EC2 instance.</p>
 * @public
 */
export interface AwsEc2InstanceDetails {
  /**
   * <p>The instance type of the instance. </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   * @public
   */
  IpV4Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   * @public
   */
  IpV6Addresses?: string[] | undefined;

  /**
   * <p>The key name associated with the instance.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The IAM profile ARN of the instance.</p>
   * @public
   */
  IamInstanceProfileArn?: string | undefined;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates when the instance was launched.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * <p>The identifiers of the network interfaces for the EC2 instance. The details for each network interface are in a corresponding <code>AwsEc2NetworkInterfacesDetails</code> object.</p>
   * @public
   */
  NetworkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[] | undefined;

  /**
   * <p>The virtualization type of the Amazon Machine Image (AMI) required to launch the instance.
   *       </p>
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * <p>Details about the metadata options for the Amazon EC2 instance.
   *       </p>
   * @public
   */
  MetadataOptions?: AwsEc2InstanceMetadataOptions | undefined;

  /**
   * <p>
   *          Describes the type of monitoring that’s turned on for an instance.
   *       </p>
   * @public
   */
  Monitoring?: AwsEc2InstanceMonitoringDetails | undefined;
}

/**
 * <p>
 *          Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  /**
   * <p>
   *          Indicates whether the EBS volume is deleted on instance termination.
   *       </p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>
   *          Indicates whether the EBS volume is encrypted. Encrypted volumes can only be
   *          attached to instances that support Amazon EBS encryption. If you're creating a
   *          volume from a snapshot, you can't specify an encryption value.
   *       </p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>
   *          The number of I/O operations per second (IOPS).
   *       </p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the symmetric Key Management Service (KMS) customer managed key
   *          used for encryption.
   *       </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>
   *          The ID of the EBS snapshot.
   *       </p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>
   *          The throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
   *       </p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>
   *          The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       </p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>
   *          The volume type.
   *       </p>
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * <p>
 *          Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  /**
   * <p>
   *          The device name.
   *       </p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>
   *          Parameters used to automatically set up Amazon EBS volumes when the instance is
   *          launched.
   *       </p>
   * @public
   */
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails | undefined;

  /**
   * <p>
   *          Omits the device from the block device mapping when an empty string is specified.
   *       </p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>
   *          The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *          from 0. An instance type with 2 available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store volumes depends
   *          on the instance type.
   *       </p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * <p>
 *          Information about the target Capacity Reservation or Capacity Reservation group in which to run an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  /**
   * <p>
   *          The ID of the Capacity Reservation in which to run the instance.
   *       </p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the Capacity Reservation resource group in which to run the instance.
   *       </p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>
 *          Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  /**
   * <p>
   *          Indicates the instance's Capacity Reservation preferences. If equal to <code>open</code>, the instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). If equal to <code>none</code>, the instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   *       </p>
   * @public
   */
  CapacityReservationPreference?: string | undefined;

  /**
   * <p>
   *          Specifies a target Capacity Reservation.
   *       </p>
   * @public
   */
  CapacityReservationTarget?:
    | AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails
    | undefined;
}

/**
 * <p>
 *          Specifies the CPU options for an Amazon EC2 instance. For more information, see
 *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  /**
   * <p>
   *          The number of CPU cores for the instance.
   *       </p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>
   *          The number of threads per CPU core. A value of <code>1</code> disables multithreading for the instance,
   *          The default value is <code>2</code>.
   *       </p>
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * <p>
 *          Specifies the credit option for CPU usage of a T2, T3, or T3a Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  /**
   * <p>
   *          The credit option for CPU usage of a T instance.
   *       </p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * <p>
 *          Provides details about an Elastic Graphics specification for an Amazon EC2 launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  /**
   * <p>
   *          The type of Elastic Graphics accelerator.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>
 *          Provides details for an Amazon Elastic Inference accelerator.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  /**
   * <p>
   *          The number of Elastic Inference accelerators to attach to the instance.
   *       </p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>
   *          The type of Elastic Inference accelerator.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>
 *          Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  /**
   * <p>
   *          If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves.
   *       </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *          Specifies whether your Amazon EC2 instance is configured for hibernation.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  /**
   * <p>
   *          If you set this parameter to <code>true</code>, the instance is enabled for hibernation.
   *       </p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>
 *          Provides details for an Identity and Access Management (IAM) instance profile, which is a container for an IAM role for your instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the instance profile.
   *       </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *          The name of the instance profile.
   *       </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>
 *          Provides details about the market (purchasing) options for Spot Instances.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  /**
   * <p>
   *          Deprecated.
   *       </p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>
   *          The behavior when a Spot Instance is interrupted.
   *       </p>
   * @public
   */
  InstanceInterruptionBehavior?: string | undefined;

  /**
   * <p>
   *          The maximum hourly price you're willing to pay for the Spot Instances.
   *       </p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>
   *          The Spot Instance request type.
   *       </p>
   * @public
   */
  SpotInstanceType?: string | undefined;

  /**
   * <p>
   *          The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ), for persistent requests.
   *       </p>
   * @public
   */
  ValidUntil?: string | undefined;
}

/**
 * <p>
 *          Provides details about the market (purchasing) option for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  /**
   * <p>
   *          The market type.
   *       </p>
   * @public
   */
  MarketType?: string | undefined;

  /**
   * <p>
   *          The options for Spot Instances.
   *       </p>
   * @public
   */
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails | undefined;
}

/**
 * <p>
 *          The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  /**
   * <p>
   *          The maximum number of accelerators. If this parameter isn't specified, there's no maximum limit. To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum number of accelerators. If this parameter isn't specified, there's no minimum limit.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum amount of memory, in MiB, for the accelerators on an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  /**
   * <p>
   *          The maximum amount of memory, in MiB. If this parameter isn't specified, there's no maximum limit.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum amount of memory, in MiB. If <code>0</code> is specified, there's no maximum limit.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum baseline bandwidth to Amazon Elastic Block Store (Amazon EBS), in Mbps. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances </a> in the <i>Amazon EC2 User Guide</i>.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  /**
   * <p>
   *          The maximum baseline bandwidth, in Mbps. If this parameter is omitted, there's no maximum limit.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum baseline bandwidth, in Mbps. If this parameter is omitted, there's no minimum limit.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum amount of memory per vCPU, in GiB.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  /**
   * <p>
   *          The maximum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum amount of memory, in MiB, for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  /**
   * <p>
   *          The maximum amount of memory, in MiB.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum amount of memory, in MiB.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum number of network interfaces to be attached to an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  /**
   * <p>
   *          The maximum number of network interfaces.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum number of network interfaces.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum amount of total local storage, in GB, that an Amazon EC2 instance uses.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  /**
   * <p>
   *          The maximum amount of total local storage, in GB.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum amount of total local storage, in GB.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The minimum and maximum number of vCPUs for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  /**
   * <p>
   *          The maximum number of vCPUs.
   *       </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *          The minimum number of vCPUs.
   *       </p>
   * @public
   */
  Min?: number | undefined;
}

/**
 * <p>
 *          The attributes for the Amazon EC2 instance types.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  /**
   * <p>
   *          The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
   *       </p>
   * @public
   */
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails | undefined;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.
   *       </p>
   * @public
   */
  AcceleratorManufacturers?: string[] | undefined;

  /**
   * <p>
   *          The accelerators that must be on the instance type.
   *       </p>
   * @public
   */
  AcceleratorNames?: string[] | undefined;

  /**
   * <p>
   *          The minimum and maximum amount of total accelerator memory, in MiB.
   *       </p>
   * @public
   */
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails | undefined;

  /**
   * <p>The accelerator types that must be on the instance type.
   *       </p>
   * @public
   */
  AcceleratorTypes?: string[] | undefined;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.
   *       </p>
   * @public
   */
  BareMetal?: string | undefined;

  /**
   * <p>
   *          The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS optimized instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails | undefined;

  /**
   * <p>
   *          Indicates whether burstable performance T instance types are included, excluded, or required. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  BurstablePerformance?: string | undefined;

  /**
   * <p>
   *          The CPU manufacturers to include.
   *       </p>
   * @public
   */
  CpuManufacturers?: string[] | undefined;

  /**
   * <p>
   *          The instance types to exclude.
   *       </p>
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * <p>
   *          Indicates whether current or previous generation instance types are included.
   *       </p>
   * @public
   */
  InstanceGenerations?: string[] | undefined;

  /**
   * <p>
   *          Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  LocalStorage?: string | undefined;

  /**
   * <p>
   *          The type of local storage that is required.
   *       </p>
   * @public
   */
  LocalStorageTypes?: string[] | undefined;

  /**
   * <p>
   *          The minimum and maximum amount of memory per vCPU, in GiB.
   *       </p>
   * @public
   */
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails | undefined;

  /**
   * <p>
   *          The minimum and maximum amount of memory, in MiB.
   *       </p>
   * @public
   */
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails | undefined;

  /**
   * <p>
   *          The minimum and maximum number of network interfaces.
   *       </p>
   * @public
   */
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails | undefined;

  /**
   * <p> The price protection threshold for On-Demand Instances. This is the maximum you'll pay
   *          for an On-Demand Instance, expressed as a percentage above the least expensive current
   *          generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects
   *          instance types with your attributes, it excludes instance types priced above your
   *          threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>A high value, such as <code>999999</code>, turns off price protection.</p>
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>
   *          Indicates whether instance types must support hibernation for On-Demand Instances.
   *       </p>
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * <p> The price protection threshold for Spot Instances. This is the maximum you'll pay for a
   *          Spot Instance, expressed as a percentage above the least expensive current generation M, C,
   *          or R instance type with your specified attributes. When Amazon EC2 selects instance
   *          types with your attributes, it excludes instance types priced above your threshold. </p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>A high value, such as <code>999999</code>, turns off price protection.</p>
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>
   *          The minimum and maximum amount of total local storage, in GB.
   *       </p>
   * @public
   */
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails | undefined;

  /**
   * <p>
   *          The minimum and maximum number of vCPUs.
   *       </p>
   * @public
   */
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails | undefined;
}

/**
 * <p>
 *          Provides details about the license configuration for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the license configuration.
   *       </p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>
 *          The maintenance options of an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  /**
   * <p>
   *          Disables the automatic recovery behavior of your instance or sets it to default.
   *       </p>
   * @public
   */
  AutoRecovery?: string | undefined;
}

/**
 * <p>
 *          Specifies the metadata options for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  /**
   * <p> Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *          not specified, the default state is enabled, and you won't be able to access your instance
   *          metadata. </p>
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * <p>
   *          Enables or disables the IPv6 endpoint for the instance metadata service.
   *       </p>
   * @public
   */
  HttpProtocolIpv6?: string | undefined;

  /**
   * <p>
   *          The state of token usage for your instance metadata requests.
   *       </p>
   * @public
   */
  HttpTokens?: string | undefined;

  /**
   * <p>
   *          The desired HTTP PUT response hop limit for instance metadata requests. The larger
   *          the number, the further instance metadata requests can travel.
   *       </p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>
   *          When set to <code>enabled</code>, this parameter allows access to instance tags from the instance metadata. When set to <code>disabled</code>, it turns off access to instance tags from the instance metadata. For more information, see
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags in instance metadata</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  InstanceMetadataTags?: string | undefined;
}

/**
 * <p>
 *          The monitoring for an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  /**
   * <p>
   *          Enables detailed monitoring when <code>true</code> is specified. Otherwise, basic monitoring is enabled.
   *          For more information about detailed monitoring, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html">Enable or turn off detailed monitoring for your instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *          Provides details on one or more IPv4 prefixes for a network interface.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  /**
   * <p>
   *          The IPv4 prefix. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
   *       </p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>
 *          Specifies an IPv6 address in an Amazon EC2 launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  /**
   * <p>
   *          One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *       </p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>
 *          Provides details on one or more IPv6 prefixes to be assigned to the network interface.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  /**
   * <p>
   *          The IPv6 prefix.
   *       </p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>
 *          One or more private IPv4 addresses.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  /**
   * <p>
   *          Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *       </p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>
   *          The private IPv4 address.
   *       </p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>
 *          One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify
 *          security groups and subnets as part of the network interface.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  /**
   * <p>
   *          Indicates whether to associate a Carrier IP address with eth0 for a new network interface.
   *          You use this option when you launch an instance in a Wavelength Zone and want to
   *          associate a Carrier IP address with the network interface. For more information, see
   *          <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Wavelength Developer Guide</i>.
   *       </p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>
   *          Associates a public IPv4 address with eth0 for a new network interface.
   *       </p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>
   *          Indicates whether the network interface is deleted when the instance is terminated.
   *       </p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>
   *          A description for the network interface.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          The device index for the network interface attachment.
   *       </p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>
   *          The IDs of one or more security groups.
   *       </p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>
   *          The type of network interface.
   *       </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>
   *          The number of IPv4 prefixes to be automatically assigned to the network interface.
   *          You cannot use this option if you use the <code>Ipv4Prefixes</code> option.
   *       </p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>
   *          One or more IPv4 prefixes to be assigned to the network interface. You cannot use
   *          this option if you use the <code>Ipv4PrefixCount</code> option.
   *       </p>
   * @public
   */
  Ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[] | undefined;

  /**
   * <p>
   *          The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *          automatically selects the IPv6 addresses from the subnet range. You can't use this
   *          option if you use <code>Ipv6Addresses</code>.
   *       </p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>
   *          One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *          You can't use this option if you use <code>Ipv6AddressCount</code>.
   *       </p>
   * @public
   */
  Ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[] | undefined;

  /**
   * <p>
   *          The number of IPv6 prefixes to be automatically assigned to the network interface.
   *          You cannot use this option if you use the <code>Ipv6Prefix</code> option.
   *       </p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>
   *          One or more IPv6 prefixes to be assigned to the network interface. You cannot use
   *          this option if you use the <code>Ipv6PrefixCount</code> option.
   *       </p>
   * @public
   */
  Ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[] | undefined;

  /**
   * <p>
   *          The index of the network card. Some instance types support multiple network cards.
   *          The primary network interface must be assigned to network card index <code>0</code>. The default
   *          is network card index <code>0</code>.
   *       </p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>
   *          The ID of the network interface.
   *       </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The primary private IPv4 address of the network interface.
   *       </p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>
   *          One or more private IPv4 addresses.
   *       </p>
   * @public
   */
  PrivateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[] | undefined;

  /**
   * <p>
   *          The number of secondary private IPv4 addresses to assign to a network interface.
   *       </p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>
   *          The ID of the subnet for the network interface.
   *       </p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>
 *          Provides details about the placement of an Amazon EC2 instance.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  /**
   * <p>
   *          The affinity setting for an instance on an EC2 Dedicated Host.
   *       </p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>
   *          The Availability Zone for the instance.
   *       </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>
   *          The name of the placement group for the instance.
   *       </p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>
   *          The ID of the Dedicated Host for the instance.
   *       </p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the host resource group in which to launch the instances.
   *       </p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>
   *          The number of the partition the instance should launch in.
   *       </p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>
   *          Reserved for future use.
   *       </p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>
   *          The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
   *       </p>
   * @public
   */
  Tenancy?: string | undefined;
}

/**
 * <p>
 *          Describes the options for Amazon EC2 instance hostnames.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  /**
   * <p>
   *          Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *       </p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;

  /**
   * <p>
   *          Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *       </p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>
   *          The type of hostname for EC2 instances.
   *       </p>
   * @public
   */
  HostnameType?: string | undefined;
}

/**
 * <p>
 *          The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDataDetails {
  /**
   * <p>
   *          Information about a block device mapping for an Amazon EC2 launch template.
   *       </p>
   * @public
   */
  BlockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[] | undefined;

  /**
   * <p>
   *          Specifies an instance's Capacity Reservation targeting option. You can specify only
   *          one option at a time.
   *       </p>
   * @public
   */
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails | undefined;

  /**
   * <p>
   *          Specifies the CPU options for an instance. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
   *       </p>
   * @public
   */
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails | undefined;

  /**
   * <p>
   *          Specifies the credit option for CPU usage of a T2, T3, or T3a instance.
   *       </p>
   * @public
   */
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails | undefined;

  /**
   * <p>
   *          Indicates whether to enable the instance for stop protection. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Enable stop protection</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>
   *          If you set this parameter to <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API. If set to <code>true</code>, you can.
   *       </p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>
   *          Indicates whether the instance is optimized for Amazon EBS I/O.
   *       </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>
   *          Provides details about Elastic Graphics accelerators to associate with the instance.
   *       </p>
   * @public
   */
  ElasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[] | undefined;

  /**
   * <p>
   *          The Amazon Elastic Inference accelerator for the instance.
   *       </p>
   * @public
   */
  ElasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[] | undefined;

  /**
   * <p>
   *          Indicates whether the Amazon EC2 instance is enabled for Amazon Web Services Nitro Enclaves.
   *       </p>
   * @public
   */
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails | undefined;

  /**
   * <p>
   *          Specifies whether your Amazon EC2 instance is configured for hibernation.
   *       </p>
   * @public
   */
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails | undefined;

  /**
   * <p>
   *          The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *       </p>
   * @public
   */
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails | undefined;

  /**
   * <p>
   *          The ID of the Amazon Machine Image (AMI).
   *       </p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>
   *          Provides the options for specifying the instance initiated shutdown behavior.
   *       </p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: string | undefined;

  /**
   * <p>
   *          Specifies the market (purchasing) option for an instance.
   *       </p>
   * @public
   */
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails | undefined;

  /**
   * <p>
   *          The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance
   *          types with these attributes. If you specify <code>InstanceRequirements</code>, you can't specify <code>InstanceType</code>.
   *       </p>
   * @public
   */
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails | undefined;

  /**
   * <p>
   *          The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>. If you specify <code>InstanceType</code>, you can't
   *          specify <code>InstanceRequirements</code>.
   *       </p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>
   *          The ID of the kernel.
   *       </p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>
   *          The name of the key pair that allows users to connect to the instance.
   *       </p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>
   *          Specifies a license configuration for an instance.
   *       </p>
   * @public
   */
  LicenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[] | undefined;

  /**
   * <p>
   *          The maintenance options of your instance.
   *       </p>
   * @public
   */
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails | undefined;

  /**
   * <p>
   *          The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   * @public
   */
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails | undefined;

  /**
   * <p>
   *          The monitoring for the instance.
   *       </p>
   * @public
   */
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails | undefined;

  /**
   * <p>
   *          Specifies the parameters for a network interface that is attached to the instance.
   *       </p>
   * @public
   */
  NetworkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[] | undefined;

  /**
   * <p>
   *          Specifies the placement of an instance.
   *       </p>
   * @public
   */
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails | undefined;

  /**
   * <p>
   *          The options for the instance hostname.
   *       </p>
   * @public
   */
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails | undefined;

  /**
   * <p>
   *          The ID of the RAM disk.
   *       </p>
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * <p>
   *          One or more security group IDs.
   *       </p>
   * @public
   */
  SecurityGroupIdSet?: string[] | undefined;

  /**
   * <p>
   *          One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.
   *       </p>
   * @public
   */
  SecurityGroupSet?: string[] | undefined;

  /**
   * <p>
   *          The user data to make available to the instance.
   *       </p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>
 *          Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 * @public
 */
export interface AwsEc2LaunchTemplateDetails {
  /**
   * <p>
   *          A name for the launch template.
   *       </p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>
   *          An ID for the launch template.
   *       </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *          The information to include in the launch template.
   *       </p>
   * @public
   */
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails | undefined;

  /**
   * <p>
   *          The default version of the launch template.
   *       </p>
   * @public
   */
  DefaultVersionNumber?: number | undefined;

  /**
   * <p>
   *          The latest version of the launch template.
   *       </p>
   * @public
   */
  LatestVersionNumber?: number | undefined;
}

/**
 * <p>An association between the network ACL and a subnet.</p>
 * @public
 */
export interface AwsEc2NetworkAclAssociation {
  /**
   * <p>The identifier of the association between the network ACL and the subnet.</p>
   * @public
   */
  NetworkAclAssociationId?: string | undefined;

  /**
   * <p>The identifier of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>The identifier of the subnet that is associated with the network ACL.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>An Internet Control Message Protocol (ICMP) type and code.</p>
 * @public
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code for which to deny or allow access. To deny or allow all codes, use the
   *          value <code>-1</code>.</p>
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>The ICMP type for which to deny or allow access. To deny or allow all types, use the
   *          value <code>-1</code>.</p>
   * @public
   */
  Type?: number | undefined;
}

/**
 * <p>A range of ports.</p>
 * @public
 */
export interface PortRangeFromTo {
  /**
   * <p>The first port in the port range.</p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The last port in the port range.</p>
   * @public
   */
  To?: number | undefined;
}

/**
 * <p>A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.</p>
 * @public
 */
export interface AwsEc2NetworkAclEntry {
  /**
   * <p>The IPV4 network range for which to deny or allow access.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Whether the rule is an egress rule. An egress rule is a rule that applies to traffic that leaves the subnet.</p>
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * <p>The Internet Control Message Protocol (ICMP) type and code for which to deny or allow access.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>The IPV6 network range for which to deny or allow access.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>For TCP or UDP protocols, the range of ports that the rule applies to.</p>
   * @public
   */
  PortRange?: PortRangeFromTo | undefined;

  /**
   * <p>The protocol that the rule applies to. To deny or allow access to all protocols, use the
   *          value <code>-1</code>.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Whether the rule is used to allow access or deny access.</p>
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * <p>The rule number. The rules are processed in order by their number.</p>
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * <p>Contains details about an Amazon EC2 network access control list (ACL).</p>
 * @public
 */
export interface AwsEc2NetworkAclDetails {
  /**
   * <p>Whether this is the default network ACL for the VPC.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The identifier of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the network ACL.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The identifier of the VPC for the network ACL.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Associations between the network ACL and subnets.</p>
   * @public
   */
  Associations?: AwsEc2NetworkAclAssociation[] | undefined;

  /**
   * <p>The set of rules in the network ACL.</p>
   * @public
   */
  Entries?: AwsEc2NetworkAclEntry[] | undefined;
}

/**
 * <p>Information about the network interface attachment.</p>
 * @public
 */
export interface AwsEc2NetworkInterfaceAttachment {
  /**
   * <p>Indicates when the attachment initiated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  AttachTime?: string | undefined;

  /**
   * <p>The identifier of the network interface attachment</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *          terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * <p>The attachment state.</p>
   *          <p>Valid values: <code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *             <code>detached</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides information about an IPV6 address that is associated with the network
 *          interface.</p>
 * @public
 */
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * <p>The IPV6 address.</p>
   * @public
   */
  IpV6Address?: string | undefined;
}

/**
 * <p>Provides information about a private IPv4 address that is with the network
 *          interface.</p>
 * @public
 */
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  /**
   * <p>The IP address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private DNS name for the IP address.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;
}

/**
 * <p>A security group associated with the network interface.</p>
 * @public
 */
export interface AwsEc2NetworkInterfaceSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Details about the network interface</p>
 * @public
 */
export interface AwsEc2NetworkInterfaceDetails {
  /**
   * <p>The network interface attachment.</p>
   * @public
   */
  Attachment?: AwsEc2NetworkInterfaceAttachment | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Security groups for the network interface.</p>
   * @public
   */
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[] | undefined;

  /**
   * <p>Indicates whether traffic to or from the instance is validated.</p>
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   * @public
   */
  IpV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[] | undefined;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   * @public
   */
  PrivateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[] | undefined;

  /**
   * <p>The public DNS name of the network interface.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The address of the Elastic IP address bound to the network interface.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * <p>
 *          Describes a virtual private gateway propagating route.
 *       </p>
 * @public
 */
export interface PropagatingVgwSetDetails {
  /**
   * <p>
   *          The ID of the virtual private gateway.
   *       </p>
   * @public
   */
  GatewayId?: string | undefined;
}

/**
 * <p>
 *          Provides details about the routes in the route table.
 *       </p>
 * @public
 */
export interface RouteSetDetails {
  /**
   * <p>
   *          The ID of the carrier gateway.
   *       </p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the core network.
   *       </p>
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * <p>
   *          The IPv4 CIDR block used for the destination match.
   *       </p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>
   *          The IPv6 CIDR block used for the destination match.
   *       </p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>
   *          The prefix of the destination Amazon Web Services service.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>
   *          The ID of the egress-only internet gateway.
   *       </p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>
   *          The ID of a gateway attached to your VPC.
   *       </p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>
   *          The ID of a NAT instance in your VPC.
   *       </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>
   *          The ID of the Amazon Web Services account that owns the instance.
   *       </p>
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * <p>
   *          The ID of the local gateway.
   *       </p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>
   *          The ID of a NAT gateway.
   *       </p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>
   *          The ID of the network interface.
   *       </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          Describes how the route was created.
   *       </p>
   * @public
   */
  Origin?: string | undefined;

  /**
   * <p>
   *          The state of the route.
   *       </p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>
   *          The ID of a transit gateway.
   *       </p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>
   *          The ID of a VPC peering connection.
   *       </p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * <p>
 *          Provides details about a route table for the specified VPC.
 *       </p>
 * @public
 */
export interface AwsEc2RouteTableDetails {
  /**
   * <p>
   *          The associations between a route table and one or more subnets or a gateway.
   *       </p>
   * @public
   */
  AssociationSet?: AssociationSetDetails[] | undefined;

  /**
   * <p>
   *          The ID of the Amazon Web Services account that owns the route table.
   *       </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>
   *          Describes a virtual private gateway propagating route.
   *       </p>
   * @public
   */
  PropagatingVgwSet?: PropagatingVgwSetDetails[] | undefined;

  /**
   * <p>
   *          The ID of the route table.
   *       </p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>
   *          The routes in the route table.
   *       </p>
   * @public
   */
  RouteSet?: RouteSetDetails[] | undefined;

  /**
   * <p>
   *          The ID of the virtual private cloud (VPC).
   *       </p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>A range of IPv4 addresses.</p>
 * @public
 */
export interface AwsEc2SecurityGroupIpRange {
  /**
   * <p>The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   * @public
   */
  CidrIp?: string | undefined;
}

/**
 * <p>A range of IPv6 addresses.</p>
 * @public
 */
export interface AwsEc2SecurityGroupIpv6Range {
  /**
   * <p>The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   * @public
   */
  CidrIpv6?: string | undefined;
}

/**
 * <p>A prefix list ID.</p>
 * @public
 */
export interface AwsEc2SecurityGroupPrefixListId {
  /**
   * <p>The ID of the prefix.</p>
   * @public
   */
  PrefixListId?: string | undefined;
}

/**
 * <p>A relationship between a security group and a user.</p>
 * @public
 */
export interface AwsEc2SecurityGroupUserIdGroupPair {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   * @public
   */
  PeeringStatus?: string | undefined;

  /**
   * <p>The ID of an Amazon Web Services account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *          security group is returned in the response. If the referenced security group is deleted,
   *          this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group in
   *          another VPC. </p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * <p>An IP permission for an EC2 security group.</p>
 * @public
 */
export interface AwsEc2SecurityGroupIpPermission {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *             <code>icmpv6</code>) or number.</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols.</p>
   *          <p>When authorizing security group rules, specifying <code>-1</code>
   *          or a protocol number other than <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or
   *             <code>icmpv6</code> allows traffic on all ports, regardless of any port range you
   *          specify.</p>
   *          <p>For <code>tcp</code>, <code>udp</code>, and <code>icmp</code>, you must specify a port
   *          range.</p>
   *          <p>For <code>icmpv6</code>, the port range is optional. If you omit the port range, traffic
   *          for all types and codes is allowed. </p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type
   *          number.</p>
   *          <p>A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you
   *          must specify all codes. </p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.</p>
   *          <p>A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all
   *          codes.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The security group and Amazon Web Services account ID pairs.</p>
   * @public
   */
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[] | undefined;

  /**
   * <p>The IPv4 ranges.</p>
   * @public
   */
  IpRanges?: AwsEc2SecurityGroupIpRange[] | undefined;

  /**
   * <p>The IPv6 ranges.</p>
   * @public
   */
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[] | undefined;

  /**
   * <p>[VPC only] The prefix list IDs for an Amazon Web Services service. With outbound rules, this is the Amazon Web Services
   *          service to access through a VPC endpoint from instances associated with the security
   *          group.</p>
   * @public
   */
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[] | undefined;
}

/**
 * <p>Details about an Amazon EC2 security group.</p>
 * @public
 */
export interface AwsEc2SecurityGroupDetails {
  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The inbound rules associated with the security group.</p>
   * @public
   */
  IpPermissions?: AwsEc2SecurityGroupIpPermission[] | undefined;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   * @public
   */
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[] | undefined;
}

/**
 * <p>An IPV6 CIDR block association.</p>
 * @public
 */
export interface Ipv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>Information about the state of the CIDR block. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  CidrBlockState?: string | undefined;
}

/**
 * <p>Contains information about a subnet in Amazon EC2.</p>
 * @public
 */
export interface AwsEc2SubnetDetails {
  /**
   * <p>Whether to assign an IPV6 address to a network interface that is created in this subnet.</p>
   * @public
   */
  AssignIpv6AddressOnCreation?: boolean | undefined;

  /**
   * <p>The Availability Zone for the subnet.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The identifier of the Availability Zone for the subnet.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The number of available IPV4 addresses in the subnet. Does not include addresses for stopped instances.</p>
   * @public
   */
  AvailableIpAddressCount?: number | undefined;

  /**
   * <p>The IPV4 CIDR block that is assigned to the subnet.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Whether this subnet is the default subnet for the Availability Zone.</p>
   * @public
   */
  DefaultForAz?: boolean | undefined;

  /**
   * <p>Whether instances in this subnet receive a public IP address.</p>
   * @public
   */
  MapPublicIpOnLaunch?: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the subnet.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of the subnet. Valid values are <code>available</code> or <code>pending</code>.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ARN of the subnet.</p>
   * @public
   */
  SubnetArn?: string | undefined;

  /**
   * <p>The identifier of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The identifier of the VPC that contains the subnet.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The IPV6 CIDR blocks that are associated with the subnet.</p>
   * @public
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[] | undefined;
}

/**
 * <p>Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects
 * virtual private clouds (VPCs) and on-premises networks.
 *       </p>
 * @public
 */
export interface AwsEc2TransitGatewayDetails {
  /**
   * <p>The ID of the transit gateway.
   *       </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The description of the transit gateway.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Turn on or turn off automatic propagation of routes to the default propagation route table.
   *       </p>
   * @public
   */
  DefaultRouteTablePropagation?: string | undefined;

  /**
   * <p>Turn on or turn off automatic acceptance of attachment requests.
   *       </p>
   * @public
   */
  AutoAcceptSharedAttachments?: string | undefined;

  /**
   * <p>Turn on or turn off automatic association with the default association route table.
   *       </p>
   * @public
   */
  DefaultRouteTableAssociation?: string | undefined;

  /**
   * <p>The transit gateway Classless Inter-Domain Routing (CIDR) blocks.
   *       </p>
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>The ID of the default association route table.
   *       </p>
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * <p>The ID of the default propagation route table.
   *       </p>
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Turn on or turn off Equal Cost Multipath Protocol (ECMP) support.
   *       </p>
   * @public
   */
  VpnEcmpSupport?: string | undefined;

  /**
   * <p>Turn on or turn off DNS support.
   *       </p>
   * @public
   */
  DnsSupport?: string | undefined;

  /**
   * <p>Indicates whether multicast is supported on the transit gateway.
   *       </p>
   * @public
   */
  MulticastSupport?: string | undefined;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *       </p>
   * @public
   */
  AmazonSideAsn?: number | undefined;
}

/**
 * <p>An attachment to an Amazon EC2 volume.</p>
 * @public
 */
export interface AwsEc2VolumeAttachment {
  /**
   * <p>The datetime when the attachment initiated.</p>
   * @public
   */
  AttachTime?: string | undefined;

  /**
   * <p>Whether the EBS volume is deleted when the EC2 instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The identifier of the EC2 instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The attachment state of the volume. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attaching</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attached</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>busy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detaching</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detached</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Details about an EC2 volume.</p>
 * @public
 */
export interface AwsEc2VolumeDetails {
  /**
   * <p>Indicates when the volume was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * <p>The device name for the volume that is attached to the instance.
   *       </p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Specifies whether the volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The size of the volume, in GiBs.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The snapshot from which the volume was created.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The volume state. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>available</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-use</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The ARN of the KMS key that was
   *          used to protect the volume encryption key for the volume.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The volume attachments.</p>
   * @public
   */
  Attachments?: AwsEc2VolumeAttachment[] | undefined;

  /**
   * <p>The ID of the volume.
   *       </p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The volume type.
   *       </p>
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * <p>Indicates whether the volume was scanned or skipped.
   *       </p>
   * @public
   */
  VolumeScanStatus?: string | undefined;
}

/**
 * <p>An IPv4 CIDR block association.</p>
 * @public
 */
export interface CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The IPv4 CIDR block.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Information about the state of the IPv4 CIDR block.</p>
   * @public
   */
  CidrBlockState?: string | undefined;
}

/**
 * <p>Details about an EC2 VPC.</p>
 * @public
 */
export interface AwsEc2VpcDetails {
  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   * @public
   */
  CidrBlockAssociationSet?: CidrBlockAssociation[] | undefined;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   * @public
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[] | undefined;

  /**
   * <p>The identifier of the set of Dynamic Host Configuration Protocol (DHCP) options that are
   *          associated with the VPC. If the default options are associated with the VPC, then this is
   *          default.</p>
   * @public
   */
  DhcpOptionsId?: string | undefined;

  /**
   * <p>The current state of the VPC. Valid values are <code>available</code> or <code>pending</code>.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * <p>The service type information for a VPC endpoint service.</p>
 * @public
 */
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  /**
   * <p>The type of service.</p>
   * @public
   */
  ServiceType?: string | undefined;
}

/**
 * <p>Contains details about the service configuration for a VPC endpoint service.</p>
 * @public
 */
export interface AwsEc2VpcEndpointServiceDetails {
  /**
   * <p>Whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>The Availability Zones where the service is available.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The DNS names for the service.</p>
   * @public
   */
  BaseEndpointDnsNames?: string[] | undefined;

  /**
   * <p>Whether the service manages its VPC endpoints.</p>
   * @public
   */
  ManagesVpcEndpoints?: boolean | undefined;

  /**
   * <p>The ARNs of the Gateway Load Balancers for the service.</p>
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The ARNs of the Network Load Balancers for the service.</p>
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The private DNS name for the service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The identifier of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The current state of the service. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ServiceState?: string | undefined;

  /**
   * <p>The types for the service.</p>
   * @public
   */
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[] | undefined;
}

/**
 * <p>Provides details about the IPv4 CIDR blocks for the VPC.
 *       </p>
 * @public
 */
export interface VpcInfoCidrBlockSetDetails {
  /**
   * <p>The IPv4 CIDR block for the VPC.
   *       </p>
   * @public
   */
  CidrBlock?: string | undefined;
}

/**
 * <p>Provides details about the IPv6 CIDR blocks for the VPC.
 *       </p>
 * @public
 */
export interface VpcInfoIpv6CidrBlockSetDetails {
  /**
   * <p>The IPv6 CIDR block for the VPC.
   *       </p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * <p>Provides information about the VPC peering connection options for the accepter or requester VPC.
 *       </p>
 * @public
 */
export interface VpcInfoPeeringOptionsDetails {
  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.
   *       </p>
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.
   *       </p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.
   *       </p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * <p>Describes a VPC in a VPC peering connection.
 *       </p>
 * @public
 */
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  /**
   * <p>The IPv4 CIDR block for the VPC.
   *       </p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.
   *       </p>
   * @public
   */
  CidrBlockSet?: VpcInfoCidrBlockSetDetails[] | undefined;

  /**
   * <p>The IPv6 CIDR block for the VPC.
   *       </p>
   * @public
   */
  Ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.
   *       </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.
   *       </p>
   * @public
   */
  PeeringOptions?: VpcInfoPeeringOptionsDetails | undefined;

  /**
   * <p>The Amazon Web Services Region in which the VPC is located.
   *       </p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The ID of the VPC.
   *       </p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Details about the status of the VPC peering connection.
 *       </p>
 * @public
 */
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  /**
   * <p>The status of the VPC peering connection.
   *       </p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A message that provides more information about the status, if applicable.
   *       </p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an
 * accepter VPC with which to create the connection.
 *       </p>
 * @public
 */
export interface AwsEc2VpcPeeringConnectionDetails {
  /**
   * <p>Information about the accepter VPC.
   *       </p>
   * @public
   */
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails | undefined;

  /**
   * <p>The time at which an unaccepted VPC peering connection will expire.
   *       </p>
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * <p>Information about the requester VPC.
   *       </p>
   * @public
   */
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails | undefined;

  /**
   * <p>The status of the VPC peering connection.
   *       </p>
   * @public
   */
  Status?: AwsEc2VpcPeeringConnectionStatusDetails | undefined;

  /**
   * <p>The ID of the VPC peering connection.
   *       </p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * <p>The VPN tunnel options.</p>
 * @public
 */
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  /**
   * <p>The number of seconds after which a Dead Peer Detection (DPD) timeout occurs.</p>
   * @public
   */
  DpdTimeoutSeconds?: number | undefined;

  /**
   * <p>The Internet Key Exchange (IKE) versions that are permitted for the VPN tunnel.</p>
   * @public
   */
  IkeVersions?: string[] | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   * @public
   */
  Phase1DhGroupNumbers?: number[] | undefined;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   * @public
   */
  Phase1EncryptionAlgorithms?: string[] | undefined;

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   * @public
   */
  Phase1IntegrityAlgorithms?: string[] | undefined;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   * @public
   */
  Phase2DhGroupNumbers?: number[] | undefined;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   * @public
   */
  Phase2EncryptionAlgorithms?: string[] | undefined;

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   * @public
   */
  Phase2IntegrityAlgorithms?: string[] | undefined;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * <p>The preshared key to establish initial authentication between the virtual private gateway
   *          and the customer gateway.</p>
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * <p>The percentage of the rekey window, which is determined by
   *          <code>RekeyMarginTimeSeconds</code> during which the rekey time is randomly selected.</p>
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services
   *          side of the VPN connection performs an IKE rekey.</p>
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   * @public
   */
  TunnelInsideCidr?: string | undefined;
}

/**
 * <p>VPN connection options.</p>
 * @public
 */
export interface AwsEc2VpnConnectionOptionsDetails {
  /**
   * <p>Whether the VPN connection uses static routes only.</p>
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;

  /**
   * <p>The VPN tunnel options.</p>
   * @public
   */
  TunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] | undefined;
}

/**
 * <p>A static routes associated with
 *          the VPN connection.</p>
 * @public
 */
export interface AwsEc2VpnConnectionRoutesDetails {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The current state of the static route.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * <p>Information about the VPN tunnel.</p>
 * @public
 */
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  /**
   * <p>The number of accepted routes.</p>
   * @public
   */
  AcceptedRouteCount?: number | undefined;

  /**
   * <p>The ARN of the VPN tunnel endpoint certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The date and time of the last change in status.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastStatusChange?: string | undefined;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *          interface.</p>
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * <p>The status of the VPN tunnel. Valid values are <code>DOWN</code> or <code>UP</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurs, a description of the error.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Details about an Amazon EC2 VPN
 *          connection.</p>
 * @public
 */
export interface AwsEc2VpnConnectionDetails {
  /**
   * <p>The identifier of the VPN connection.</p>
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * <p>The current state of the VPN connection. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>available</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The identifier of the customer gateway that is at your end of the VPN connection.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The configuration information for the VPN connection's customer gateway, in the native XML
   *          format.</p>
   * @public
   */
  CustomerGatewayConfiguration?: string | undefined;

  /**
   * <p>The type of VPN connection.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The identifier of the virtual private gateway that is at the Amazon Web Services side of the VPN
   *          connection.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * <p>The category of the VPN connection. <code>VPN</code> indicates an Amazon Web Services VPN connection. <code>VPN-Classic</code>
   *          indicates an Amazon Web Services Classic VPN connection.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>Information about the VPN tunnel.</p>
   * @public
   */
  VgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[] | undefined;

  /**
   * <p>The VPN connection options.</p>
   * @public
   */
  Options?: AwsEc2VpnConnectionOptionsDetails | undefined;

  /**
   * <p>The static routes that are associated with the VPN connection.</p>
   * @public
   */
  Routes?: AwsEc2VpnConnectionRoutesDetails[] | undefined;

  /**
   * <p>The identifier of the transit gateway that is associated with the VPN connection.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;
}

/**
 * <p>Information about an Amazon ECR image.</p>
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * <p>The Amazon Web Services account identifier that is associated with the registry that the image belongs
   *          to.</p>
   * @public
   */
  RegistryId?: string | undefined;

  /**
   * <p>The name of the repository that the image belongs to.</p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The architecture of the image. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arm64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>i386</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x86_64</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>The sha256 digest of the image manifest.</p>
   * @public
   */
  ImageDigest?: string | undefined;

  /**
   * <p>The list of tags that are associated with the image.</p>
   * @public
   */
  ImageTags?: string[] | undefined;

  /**
   * <p>The date and time when the image was pushed to the repository.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ImagePublishedAt?: string | undefined;
}

/**
 * <p>The image scanning configuration for a repository.</p>
 * @public
 */
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  /**
   * <p>Whether to scan images after they are pushed to a repository.</p>
   * @public
   */
  ScanOnPush?: boolean | undefined;
}

/**
 * <p>Information about the lifecycle policy for the repository.</p>
 * @public
 */
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  /**
   * <p>The text of the lifecycle policy.</p>
   * @public
   */
  LifecyclePolicyText?: string | undefined;

  /**
   * <p>The Amazon Web Services account identifier that is associated with the registry that contains the repository.</p>
   * @public
   */
  RegistryId?: string | undefined;
}

/**
 * <p>Provides information about an Amazon Elastic Container Registry repository.</p>
 * @public
 */
export interface AwsEcrRepositoryDetails {
  /**
   * <p>The ARN of the repository.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The image scanning configuration for a repository.</p>
   * @public
   */
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails | undefined;

  /**
   * <p>The tag mutability setting for the repository. Valid values are <code>IMMUTABLE</code> or <code>MUTABLE</code>.</p>
   * @public
   */
  ImageTagMutability?: string | undefined;

  /**
   * <p>Information about the lifecycle policy for the repository.</p>
   * @public
   */
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The text of the repository policy.</p>
   * @public
   */
  RepositoryPolicyText?: string | undefined;
}

/**
 * <p>Indicates whether to enable CloudWatch Container Insights for the ECS cluster.</p>
 * @public
 */
export interface AwsEcsClusterClusterSettingsDetails {
  /**
   * <p>The name of the setting. The valid value is <code>containerInsights</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the setting. Valid values are <code>disabled</code> or <code>enabled</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The log configuration for the results of the run command actions.</p>
 * @public
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  /**
   * <p>Whether to enable encryption on the CloudWatch logs.</p>
   * @public
   */
  CloudWatchEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The name of the CloudWatch log group to send the logs to.</p>
   * @public
   */
  CloudWatchLogGroupName?: string | undefined;

  /**
   * <p>The name of the S3 bucket to send logs to.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Whether to encrypt the logs that are sent to the S3 bucket.</p>
   * @public
   */
  S3EncryptionEnabled?: boolean | undefined;

  /**
   * <p>Identifies the folder in the S3 bucket to send the logs to.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * <p>Contains the run command configuration for the cluster.</p>
 * @public
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  /**
   * <p>The identifier of the KMS key that is used to encrypt the data between the local client and the container.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The log configuration for the results of the run command actions. Required if <code>Logging</code> is <code>NONE</code>.</p>
   * @public
   */
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails | undefined;

  /**
   * <p>The log setting to use for redirecting logs for run command results.</p>
   * @public
   */
  Logging?: string | undefined;
}

/**
 * <p>The run command configuration for the cluster.</p>
 * @public
 */
export interface AwsEcsClusterConfigurationDetails {
  /**
   * <p>Contains the run command configuration for the cluster.</p>
   * @public
   */
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails | undefined;
}

/**
 * <p>The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.</p>
 * @public
 */
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  /**
   * <p>The minimum number of tasks to run on the specified capacity provider.</p>
   * @public
   */
  Base?: number | undefined;

  /**
   * <p>The name of the capacity provider.</p>
   * @public
   */
  CapacityProvider?: string | undefined;

  /**
   * <p>The relative percentage of the total number of tasks launched that should use the capacity provider.</p>
   * @public
   */
  Weight?: number | undefined;
}

/**
 * <p>Provides details about an Amazon ECS cluster.</p>
 * @public
 */
export interface AwsEcsClusterDetails {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster.
   *       </p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The number of services that are running on the cluster in an <code>ACTIVE</code> state. You can view these services with the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">
   *                <code>ListServices</code>
   *             </a> API operation.
   *       </p>
   * @public
   */
  ActiveServicesCount?: number | undefined;

  /**
   * <p>The short name of one or more capacity providers to associate with the cluster.</p>
   * @public
   */
  CapacityProviders?: string[] | undefined;

  /**
   * <p>The setting to use to create the cluster. Specifically used to configure whether to enable CloudWatch Container Insights for the cluster.</p>
   * @public
   */
  ClusterSettings?: AwsEcsClusterClusterSettingsDetails[] | undefined;

  /**
   * <p>The run command configuration for the cluster.</p>
   * @public
   */
  Configuration?: AwsEcsClusterConfigurationDetails | undefined;

  /**
   * <p>The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.</p>
   * @public
   */
  DefaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[] | undefined;

  /**
   * <p>A name that you use to identify your cluster.
   *       </p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The number of container instances registered into the cluster. This includes container instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.
   *       </p>
   * @public
   */
  RegisteredContainerInstancesCount?: number | undefined;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.
   *       </p>
   * @public
   */
  RunningTasksCount?: number | undefined;

  /**
   * <p>The status of the cluster.
   *       </p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Details for a volume mount point that's used in a container definition.
 *       </p>
 * @public
 */
export interface AwsMountPoint {
  /**
   * <p>The name of the volume to mount. Must be a volume name referenced in the <code>name</code> parameter
   * of task definition <code>volume</code>.
   *       </p>
   * @public
   */
  SourceVolume?: string | undefined;

  /**
   * <p>The path on the container to mount the host volume at.
   *       </p>
   * @public
   */
  ContainerPath?: string | undefined;
}

/**
 * <p>Provides information about an Amazon ECS container.
 *       </p>
 * @public
 */
export interface AwsEcsContainerDetails {
  /**
   * <p>The name of the container.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The image used for the container.
   *       </p>
   * @public
   */
  Image?: string | undefined;

  /**
   * <p>The mount points for data volumes in your container.
   *       </p>
   * @public
   */
  MountPoints?: AwsMountPoint[] | undefined;

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host container instance
   * (similar to the root user).
   *       </p>
   * @public
   */
  Privileged?: boolean | undefined;
}

/**
 * <p>Strategy item for the capacity provider strategy that the service uses.</p>
 * @public
 */
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  /**
   * <p>The minimum number of tasks to run on the capacity provider. Only one strategy item can specify a value for <code>Base</code>.</p>
   *          <p>The value must be between 0 and 100000.</p>
   * @public
   */
  Base?: number | undefined;

  /**
   * <p>The short name of the capacity provider.</p>
   * @public
   */
  CapacityProvider?: string | undefined;

  /**
   * <p>The relative percentage of the total number of tasks that should use the capacity provider.</p>
   *          <p>If no weight is specified, the default value is 0. At least one capacity provider must have a weight greater than 0.</p>
   *          <p>The value can be between 0 and 1000.</p>
   * @public
   */
  Weight?: number | undefined;
}

/**
 * <p>Determines whether a service deployment fails if a service cannot reach a steady state.</p>
 * @public
 */
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  /**
   * <p>Whether to enable the deployment circuit breaker logic for the service.</p>
   * @public
   */
  Enable?: boolean | undefined;

  /**
   * <p>Whether to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.</p>
   * @public
   */
  Rollback?: boolean | undefined;
}

/**
 * <p>Optional deployment parameters for the service.</p>
 * @public
 */
export interface AwsEcsServiceDeploymentConfigurationDetails {
  /**
   * <p>Determines whether a service deployment fails if a service cannot reach a steady state.</p>
   * @public
   */
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails | undefined;

  /**
   * <p>For a service that uses the rolling update (<code>ECS</code>) deployment type, the maximum number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, and for tasks that use the EC2 launch type, when any container instances are in the <code>DRAINING</code> state. Provided as a percentage of the desired number of tasks. The default value is 200%.</p>
   *          <p>For a service that uses the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types, and tasks that use the EC2 launch type, the maximum number of tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.</p>
   *          <p>For the Fargate launch type, the maximum percent value is not used.</p>
   * @public
   */
  MaximumPercent?: number | undefined;

  /**
   * <p>For a service that uses the rolling update (<code>ECS</code>) deployment type, the minimum number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment, and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Expressed as a percentage of the desired number of tasks. The default value is 100%.</p>
   *          <p>For a service that uses the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and tasks that use the EC2 launch type, the minimum number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.</p>
   *          <p>For the Fargate launch type, the minimum healthy percent value is not used.</p>
   * @public
   */
  MinimumHealthyPercent?: number | undefined;
}

/**
 * <p>Information about the deployment controller type that the service uses.</p>
 * @public
 */
export interface AwsEcsServiceDeploymentControllerDetails {
  /**
   * <p>The rolling update (<code>ECS</code>) deployment type replaces the current running version of the container with the latest version.</p>
   *          <p>The blue/green (<code>CODE_DEPLOY</code>) deployment type uses the blue/green deployment model that is powered by CodeDeploy. This deployment model a new deployment of a service can be verified before production traffic is sent to it.</p>
   *          <p>The external (<code>EXTERNAL</code>) deployment type allows the use of any third-party deployment controller for full control over the deployment process for an Amazon ECS service.</p>
   *          <p>Valid values: <code>ECS</code> | <code>CODE_DEPLOY</code> | <code>EXTERNAL</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about a load balancer that the service uses.</p>
 * @public
 */
export interface AwsEcsServiceLoadBalancersDetails {
  /**
   * <p>The name of the container to associate with the load balancer.</p>
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * <p>The port on the container to associate with the load balancer. This port must correspond to a <code>containerPort</code> in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the <code>hostPort</code> of the port mapping.</p>
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * <p>The name of the load balancer to associate with the Amazon ECS service or task set.</p>
   *          <p>Only specified when using a Classic Load Balancer. For an Application Load Balancer or a Network Load Balancer, the load balancer name is omitted.</p>
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * <p>The ARN of the Elastic Load Balancing target group or groups associated with a service or task set.</p>
   *          <p>Only specified when using an Application Load Balancer or a Network Load Balancer. For a Classic Load Balancer, the target group ARN is omitted.</p>
   * @public
   */
  TargetGroupArn?: string | undefined;
}

/**
 * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
 * @public
 */
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  /**
   * <p>Whether the task's elastic network interface receives a public IP address. The default value is <code>DISABLED</code>.</p>
   *          <p>Valid values: <code>ENABLED</code> | <code>DISABLED</code>
   *          </p>
   * @public
   */
  AssignPublicIp?: string | undefined;

  /**
   * <p>The IDs of the security groups associated with the task or service.</p>
   *          <p>You can provide up to five security groups.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The IDs of the subnets associated with the task or service.</p>
   *          <p>You can provide up to 16 subnets.</p>
   * @public
   */
  Subnets?: string[] | undefined;
}

/**
 * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
 * @public
 */
export interface AwsEcsServiceNetworkConfigurationDetails {
  /**
   * <p>The VPC subnet and security group configuration.</p>
   * @public
   */
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails | undefined;
}

/**
 * <p>A placement constraint for the tasks in the service.</p>
 * @public
 */
export interface AwsEcsServicePlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to run each task in a particular group on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates.</p>
   *          <p>Valid values: <code>distinctInstance</code> | <code>memberOf</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A placement strategy that determines how to place the tasks for the service.</p>
 * @public
 */
export interface AwsEcsServicePlacementStrategiesDetails {
  /**
   * <p>The field to apply the placement strategy against.</p>
   *          <p>For the <code>spread</code> placement strategy, valid values are <code>instanceId</code> (or <code>host</code>, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>.</p>
   *          <p>For the <code>binpack</code> placement strategy, valid values are <code>cpu</code> and <code>memory</code>.</p>
   *          <p>For the <code>random</code> placement strategy, this attribute is not used.</p>
   * @public
   */
  Field?: string | undefined;

  /**
   * <p>The type of placement strategy.</p>
   *          <p>The <code>random</code> placement strategy randomly places tasks on available candidates.</p>
   *          <p>The <code>spread</code> placement strategy spreads placement across available candidates evenly based on the value of <code>Field</code>.</p>
   *          <p>The <code>binpack</code> strategy places tasks on available candidates that have the least available amount of the resource that is specified in <code>Field</code>.</p>
   *          <p>Valid values: <code>random</code> | <code>spread</code> | <code>binpack</code>
   *          </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about a service discovery registry to assign to the service.</p>
 * @public
 */
export interface AwsEcsServiceServiceRegistriesDetails {
  /**
   * <p>The container name value to use for the service discovery service.</p>
   *          <p>If the task definition uses the <code>bridge</code> or <code>host</code> network mode, you must specify <code>ContainerName</code> and <code>ContainerPort</code>.</p>
   *          <p>If the task definition uses the <code>awsvpc</code> network mode and a type SRV DNS record, you must specify either <code>ContainerName</code> and <code>ContainerPort</code>, or <code>Port</code> , but not both.</p>
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * <p>The port value to use for the service discovery service.</p>
   *          <p>If the task definition uses the <code>bridge</code> or <code>host</code> network mode, you must specify <code>ContainerName</code> and <code>ContainerPort</code>.</p>
   *          <p>If the task definition uses the <code>awsvpc</code> network mode and a type SRV DNS record, you must specify either <code>ContainerName</code> and <code>ContainerPort</code>, or <code>Port</code> , but not both.</p>
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * <p>The port value to use for a service discovery service that specifies an SRV record. This field can be used if both the <code>awsvpc</code>awsvpc network mode and SRV records are used.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the service registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;
}

/**
 * <p>Provides details about a service within an ECS cluster.</p>
 * @public
 */
export interface AwsEcsServiceDetails {
  /**
   * <p>The capacity provider strategy that the service uses.</p>
   * @public
   */
  CapacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[] | undefined;

  /**
   * <p>The ARN of the cluster that hosts the service.</p>
   * @public
   */
  Cluster?: string | undefined;

  /**
   * <p>Deployment parameters for the service. Includes the number of tasks that run and the order in which to start and stop tasks.</p>
   * @public
   */
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails | undefined;

  /**
   * <p>Contains the deployment controller type that the service uses.</p>
   * @public
   */
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails | undefined;

  /**
   * <p>The number of instantiations of the task definition to run on the service.</p>
   * @public
   */
  DesiredCount?: number | undefined;

  /**
   * <p>Whether to enable Amazon ECS managed tags for the tasks in the service.</p>
   * @public
   */
  EnableEcsManagedTags?: boolean | undefined;

  /**
   * <p>Whether the execute command functionality is enabled for the service.</p>
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * <p>After a task starts, the amount of time in seconds that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks.</p>
   * @public
   */
  HealthCheckGracePeriodSeconds?: number | undefined;

  /**
   * <p>The launch type that the service uses.</p>
   *          <p>Valid values: <code>EC2</code> | <code>FARGATE</code> | <code>EXTERNAL</code>
   *          </p>
   * @public
   */
  LaunchType?: string | undefined;

  /**
   * <p>Information about the load balancers that the service uses.</p>
   * @public
   */
  LoadBalancers?: AwsEcsServiceLoadBalancersDetails[] | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
   * @public
   */
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails | undefined;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   * @public
   */
  PlacementConstraints?: AwsEcsServicePlacementConstraintsDetails[] | undefined;

  /**
   * <p>Information about how tasks for the service are placed.</p>
   * @public
   */
  PlacementStrategies?: AwsEcsServicePlacementStrategiesDetails[] | undefined;

  /**
   * <p>The platform version on which to run the service. Only specified for tasks that are hosted on Fargate. If a platform version is not specified, the <code>LATEST</code> platform version is used by default.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Indicates whether to propagate the tags from the task definition to the task or from the service to the task. If no value is provided, then tags are not propagated.</p>
   *          <p>Valid values: <code>TASK_DEFINITION</code> | <code>SERVICE</code>
   *          </p>
   * @public
   */
  PropagateTags?: string | undefined;

  /**
   * <p>The ARN of the IAM role that is associated with the service. The role allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The scheduling strategy to use for the service.</p>
   *          <p>The <code>REPLICA</code> scheduling strategy places and maintains the desired number of tasks across the cluster. By default, the service scheduler spreads tasks across Availability Zones. Task placement strategies and constraints are used to customize task placement decisions.</p>
   *          <p>The <code>DAEMON</code> scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that are specified in the cluster. The service scheduler also evaluates the task placement constraints for running tasks and stops tasks that don't meet the placement constraints.</p>
   *          <p>Valid values: <code>REPLICA</code> | <code>DAEMON</code>
   *          </p>
   * @public
   */
  SchedulingStrategy?: string | undefined;

  /**
   * <p>The ARN of the service.</p>
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * <p>The name of the service.</p>
   *          <p>The name can contain up to 255 characters. It can use letters, numbers, underscores, and hyphens.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Information about the service discovery registries to assign to the service.</p>
   * @public
   */
  ServiceRegistries?: AwsEcsServiceServiceRegistriesDetails[] | undefined;

  /**
   * <p>The task definition to use for tasks in the service.</p>
   * @public
   */
  TaskDefinition?: string | undefined;
}

/**
 * <p>A dependency that is defined for container startup and shutdown.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  /**
   * <p>The dependency condition of the dependent container. Indicates the required status of the dependent container before the current container can start. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>START</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Condition?: string | undefined;

  /**
   * <p>The name of the dependent container.</p>
   * @public
   */
  ContainerName?: string | undefined;
}

/**
 * <p>An environment variable to pass to the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  /**
   * <p>The name of the environment variable.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A file that contain environment variables to pass to a container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * <p>The type of environment file. The valid value is <code>s3</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The ARN of the S3 object that contains the environment variable file.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * <p>The hostname to use in the <b>/etc/hosts</b> entry.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The IP address to use in the <b>/etc/hosts</b> entry.</p>
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * <p>The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * <p>The options to use to configure the log router.</p>
   *          <p>The valid option keys are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>enable-ecs-log-metadata</code>. The value can be <code>true</code> or
   *                <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>config-file-type</code>. The value can be <code>s3</code> or
   *                <code>file</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>config-file-value</code>. The value is either an S3 ARN or a file path.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Options?: Record<string, string> | undefined;

  /**
   * <p>The log router to use. Valid values are <code>fluentbit</code> or <code>fluentd</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>The container health check command and associated configuration parameters for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * <p>The command that the container runs to determine whether it is healthy.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The time period in seconds between each health check execution. The default value is 30 seconds.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The number of times to retry a failed health check before the container is considered unhealthy. The default value is 3.</p>
   * @public
   */
  Retries?: number | undefined;

  /**
   * <p>The optional grace period in seconds that allows containers time to bootstrap before failed health checks count towards the maximum number of retries.</p>
   * @public
   */
  StartPeriod?: number | undefined;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is considered a failure. The default value is 5.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * <p>The Linux capabilities for the container that are added to the default configuration provided by Docker. Valid values are as follows:</p>
   *          <p>Valid values: <code>"ALL"</code> | <code>"AUDIT_CONTROL"</code> |<code> "AUDIT_WRITE"</code> |
   *    		<code>"BLOCK_SUSPEND"</code> | <code>"CHOWN"</code> | <code>"DAC_OVERRIDE"</code> |
   *    		<code>"DAC_READ_SEARCH"</code> | <code>"FOWNER"</code> | <code>"FSETID"</code> |
   *    		<code>"IPC_LOCK"</code> | <code>"IPC_OWNER"</code> | <code>"KILL"</code> |
   *    		<code>"LEASE"</code> | <code>"LINUX_IMMUTABLE"</code> | <code>"MAC_ADMIN"</code> |<code>
   *    			"MAC_OVERRIDE"</code> | <code>"MKNOD"</code> | <code>"NET_ADMIN"</code> |
   *    		<code>"NET_BIND_SERVICE"</code> | <code>"NET_BROADCAST"</code> | <code>"NET_RAW"</code> |
   *    		<code>"SETFCAP"</code> | <code>"SETGID"</code> | <code>"SETPCAP"</code> |
   *    		<code>"SETUID"</code> | <code>"SYS_ADMIN"</code> | <code>"SYS_BOOT"</code> |
   *    		<code>"SYS_CHROOT"</code> | <code>"SYS_MODULE"</code> | <code>"SYS_NICE"</code> |
   *    		<code>"SYS_PACCT"</code> | <code>"SYS_PTRACE"</code> | <code>"SYS_RAWIO"</code> |
   *    		<code>"SYS_RESOURCE"</code> | <code>"SYS_TIME"</code> | <code>"SYS_TTY_CONFIG"</code> |
   *    		<code>"SYSLOG"</code> | <code>"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  Add?: string[] | undefined;

  /**
   * <p>The Linux capabilities for the container that are dropped from the default configuration provided by Docker.</p>
   *          <p>Valid values: <code>"ALL"</code> | <code>"AUDIT_CONTROL"</code> |<code> "AUDIT_WRITE"</code> |
   *    		<code>"BLOCK_SUSPEND"</code> | <code>"CHOWN"</code> | <code>"DAC_OVERRIDE"</code> |
   *    		<code>"DAC_READ_SEARCH"</code> | <code>"FOWNER"</code> | <code>"FSETID"</code> |
   *    		<code>"IPC_LOCK"</code> | <code>"IPC_OWNER"</code> | <code>"KILL"</code> |
   *    		<code>"LEASE"</code> | <code>"LINUX_IMMUTABLE"</code> | <code>"MAC_ADMIN"</code> |<code>
   *    			"MAC_OVERRIDE"</code> | <code>"MKNOD"</code> | <code>"NET_ADMIN"</code> |
   *    		<code>"NET_BIND_SERVICE"</code> | <code>"NET_BROADCAST"</code> | <code>"NET_RAW"</code> |
   *    		<code>"SETFCAP"</code> | <code>"SETGID"</code> | <code>"SETPCAP"</code> |
   *    		<code>"SETUID"</code> | <code>"SYS_ADMIN"</code> | <code>"SYS_BOOT"</code> |
   *    		<code>"SYS_CHROOT"</code> | <code>"SYS_MODULE"</code> | <code>"SYS_NICE"</code> |
   *    		<code>"SYS_PACCT"</code> | <code>"SYS_PTRACE"</code> | <code>"SYS_RAWIO"</code> |
   *    		<code>"SYS_RESOURCE"</code> | <code>"SYS_TIME"</code> | <code>"SYS_TTY_CONFIG"</code> |
   *    		<code>"SYSLOG"</code> | <code>"WAKE_ALARM"</code>
   *          </p>
   * @public
   */
  Drop?: string[] | undefined;
}

/**
 * <p>A host device to expose to the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * <p>The path inside the container at which to expose the host device.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>The path for the device on the host container instance.</p>
   * @public
   */
  HostPath?: string | undefined;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and <code>mknod</code> for the device.</p>
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * <p>The container path, mount options, and size (in MiB) of a tmpfs mount.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   *          <p>Valid values: <code>"defaults"</code> | <code>"ro"</code> | <code>"rw"</code> | <code>"suid"</code> |
   *    		<code>"nosuid"</code> | <code>"dev"</code> | <code>"nodev"</code> |<code> "exec"</code> |
   *    		<code>"noexec"</code> | <code>"sync"</code> | <code>"async"</code> | <code>"dirsync"</code>
   *    		| <code>"remount"</code> | <code>"mand"</code> | <code>"nomand"</code> | <code>"atime"</code>
   *    		| <code>"noatime"</code> | <code>"diratime"</code> | <code>"nodiratime"</code> |
   *    		<code>"bind"</code> | <code>"rbind"</code> | <code>"unbindable"</code> |
   *    		<code>"runbindable"</code> | <code>"private"</code> | <code>"rprivate"</code> |
   *    		<code>"shared"</code> | <code>"rshared"</code> | <code>"slave"</code> |
   *    		<code>"rslave"</code> | <code>"relatime"</code> | <code>"norelatime"</code> |
   *    		<code>"strictatime"</code> | <code>"nostrictatime"</code> |<code> "mode"</code> |
   *    		<code>"uid"</code> | <code>"gid"</code> | <code>"nr_inodes"</code> |<code>
   *    			"nr_blocks"</code> | <code>"mpol"</code>
   *          </p>
   * @public
   */
  MountOptions?: string[] | undefined;

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
   * @public
   */
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails | undefined;

  /**
   * <p>The host devices to expose to the container.</p>
   * @public
   */
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[] | undefined;

  /**
   * <p>Whether to run an <code>init</code> process inside the container that forwards signals and reaps processes. </p>
   * @public
   */
  InitProcessEnabled?: boolean | undefined;

  /**
   * <p>The total amount of swap memory (in MiB) that a container can use.</p>
   * @public
   */
  MaxSwap?: number | undefined;

  /**
   * <p>The value for the size (in MiB) of the <b>/dev/shm</b> volume.</p>
   * @public
   */
  SharedMemorySize?: number | undefined;

  /**
   * <p>Configures the container's memory swappiness behavior. Determines how aggressively pages are swapped. The higher the value, the more aggressive the swappiness. The default is 60.</p>
   * @public
   */
  Swappiness?: number | undefined;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount.</p>
   * @public
   */
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[] | undefined;
}

/**
 * <p>A secret to pass to the log configuration.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The secret to expose to the container.</p>
   *          <p>The value is either the full ARN of the Secrets Manager secret or the full ARN of the
   *          parameter in the Systems Manager Parameter Store.</p>
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * <p>The log configuration specification for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * <p>The log driver to use for the container.</p>
   *          <p>Valid values on Fargate are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsfirelens</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awslogs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>splunk</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid values on Amazon EC2 are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsfirelens</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awslogs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fluentd</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gelf</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>journald</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>json-file</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>logentries</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>splunk</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>syslog</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDriver?: string | undefined;

  /**
   * <p>The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.</p>
   * @public
   */
  Options?: Record<string, string> | undefined;

  /**
   * <p>The secrets to pass to the log configuration.</p>
   * @public
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] | undefined;
}

/**
 * <p>A mount point for the data volumes in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * <p>The path on the container to mount the host volume at.</p>
   * @public
   */
  ContainerPath?: string | undefined;

  /**
   * <p>Whether the container has read-only access to the volume.</p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>The name of the volume to mount. Must match the name of a volume listed in <code>VolumeDetails</code> for the task definition.</p>
   * @public
   */
  SourceVolume?: string | undefined;
}

/**
 * <p>A port mapping for the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * <p>The port number on the container that is bound to the user-specified or automatically assigned host port.</p>
   * @public
   */
  ContainerPort?: number | undefined;

  /**
   * <p>The port number on the container instance to reserve for the container.</p>
   * @public
   */
  HostPort?: number | undefined;

  /**
   * <p>The protocol used for the port mapping. The default is <code>tcp</code>.</p>
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * <p>The private repository authentication credentials to use.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * <p>The ARN of the secret that contains the private repository credentials.</p>
   * @public
   */
  CredentialsParameter?: string | undefined;
}

/**
 * <p>A resource to assign to a container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * <p>The type of resource to assign to a container. Valid values are <code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>For <code>GPU</code>, the value is the number of physical GPUs the Amazon ECS container agent
   *          reserves for the container.</p>
   *          <p>For <code>InferenceAccelerator</code>, the value should match the <code>DeviceName</code>
   *          attribute of an entry in <code>InferenceAccelerators</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A secret to pass to the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * <p>The name of the secret.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The secret to expose to the container. The value is either the full ARN of the Secrets Manager
   *          secret or the full ARN of the parameter in the Systems Manager Parameter Store.</p>
   * @public
   */
  ValueFrom?: string | undefined;
}

/**
 * <p>A namespaced kernel parameter to set in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * <p>The namespaced kernel parameter for which to set a value.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A ulimit to set in the container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * <p>The hard limit for the ulimit type.</p>
   * @public
   */
  HardLimit?: number | undefined;

  /**
   * <p>The type of the ulimit. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>core</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cpu</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>data</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fsize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>locks</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>memlock</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>msgqueue</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nice</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nofile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nproc</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rss</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rtprio</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rttime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sigpending</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stack</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The soft limit for the ulimit type.</p>
   * @public
   */
  SoftLimit?: number | undefined;
}

/**
 * <p>A data volume to mount from another container.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * <p>Whether the container has read-only access to the volume.</p>
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * <p>The name of another container within the same task definition from which to mount volumes.</p>
   * @public
   */
  SourceContainer?: string | undefined;
}

/**
 * <p>A container definition that describes a container in the task.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * <p>The command that is passed to the container.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The number of CPU units reserved for the container.</p>
   * @public
   */
  Cpu?: number | undefined;

  /**
   * <p>The dependencies that are defined for container startup and shutdown.</p>
   * @public
   */
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[] | undefined;

  /**
   * <p>Whether to disable networking within the container.</p>
   * @public
   */
  DisableNetworking?: boolean | undefined;

  /**
   * <p>A list of DNS search domains that are presented to the container.</p>
   * @public
   */
  DnsSearchDomains?: string[] | undefined;

  /**
   * <p>A list of DNS servers that are presented to the container.</p>
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * <p>A key-value map of labels to add to the container.</p>
   * @public
   */
  DockerLabels?: Record<string, string> | undefined;

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems.</p>
   * @public
   */
  DockerSecurityOptions?: string[] | undefined;

  /**
   * <p>The entry point that is passed to the container.</p>
   * @public
   */
  EntryPoint?: string[] | undefined;

  /**
   * <p>The environment variables to pass to a container.</p>
   * @public
   */
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container.</p>
   * @public
   */
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[] | undefined;

  /**
   * <p>Whether the container is essential. All tasks must have at least one essential container.</p>
   * @public
   */
  Essential?: boolean | undefined;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <b>/etc/hosts</b> file on the container.</p>
   * @public
   */
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[] | undefined;

  /**
   * <p>The FireLens configuration for the container. Specifies and configures a log router for container logs.</p>
   * @public
   */
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails | undefined;

  /**
   * <p>The container health check command and associated configuration parameters for the container.</p>
   * @public
   */
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails | undefined;

  /**
   * <p>The hostname to use for the container.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The image used to start the container.</p>
   * @public
   */
  Image?: string | undefined;

  /**
   * <p>If set to true, then containerized applications can be deployed that require <code>stdin</code> or a <code>tty</code> to be allocated.</p>
   * @public
   */
  Interactive?: boolean | undefined;

  /**
   * <p>A list of links for the container in the form <code>
   *                <i>container_name</i>:<i>alias</i>
   *             </code>. Allows containers to communicate with each other without the need for port mappings.</p>
   * @public
   */
  Links?: string[] | undefined;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
   * @public
   */
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails | undefined;

  /**
   * <p>The log configuration specification for the container.</p>
   * @public
   */
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails | undefined;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is shut down. The total amount of memory reserved for all containers within a task must be lower than the task memory value, if one is specified.</p>
   * @public
   */
  Memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container.</p>
   * @public
   */
  MemoryReservation?: number | undefined;

  /**
   * <p>The mount points for the data volumes in the container.</p>
   * @public
   */
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[] | undefined;

  /**
   * <p>The name of the container.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of port mappings for the container.</p>
   * @public
   */
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[] | undefined;

  /**
   * <p>Whether the container is given elevated privileges on the host container instance. The elevated privileges are similar to the root user.</p>
   * @public
   */
  Privileged?: boolean | undefined;

  /**
   * <p>Whether to allocate a TTY to the container.</p>
   * @public
   */
  PseudoTerminal?: boolean | undefined;

  /**
   * <p>Whether the container is given read-only access to its root file system.</p>
   * @public
   */
  ReadonlyRootFilesystem?: boolean | undefined;

  /**
   * <p>The private repository authentication credentials to use.</p>
   * @public
   */
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU.</p>
   * @public
   */
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[] | undefined;

  /**
   * <p>The secrets to pass to the container.</p>
   * @public
   */
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[] | undefined;

  /**
   * <p>The number of seconds to wait before giving up on resolving dependencies for a container. </p>
   * @public
   */
  StartTimeout?: number | undefined;

  /**
   * <p>The number of seconds to wait before the container is stopped if it doesn't shut down normally on its own.</p>
   * @public
   */
  StopTimeout?: number | undefined;

  /**
   * <p>A list of namespaced kernel parameters to set in the container.</p>
   * @public
   */
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[] | undefined;

  /**
   * <p>A list of ulimits to set in the container. </p>
   * @public
   */
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[] | undefined;

  /**
   * <p>The user to use inside the container.</p>
   *          <p>The value can use one of the following formats.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>:<code>
   *                      <i>group</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>:<code>
   *                      <i>gid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>user</i>
   *                   </code>:<code>
   *                      <i>gid</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <i>uid</i>
   *                   </code>:<code>
   *                      <i>group</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>Data volumes to mount from another container.</p>
   * @public
   */
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[] | undefined;

  /**
   * <p>The working directory in which to run commands inside the container.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;
}

/**
 * <p>An Elastic Inference accelerator to use
 *          for the containers in the task.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * <p>The Elastic Inference accelerator device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   * @public
   */
  DeviceType?: string | undefined;
}

/**
 * <p>A placement constraint object to use for tasks.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>The type of constraint.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A network configuration parameter to provide to the Container Network Interface (CNI) plugin.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * <p>The name of the property.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The configuration details for the App Mesh
 *          proxy.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   * @public
   */
  ContainerName?: string | undefined;

  /**
   * <p>The set of network configuration parameters to provide to the Container Network Interface (CNI) plugin, specified as key-value pairs.</p>
   * @public
   */
  ProxyConfigurationProperties?:
    | AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[]
    | undefined;

  /**
   * <p>The proxy type.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about a Docker volume.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * <p>Whether to create the Docker volume automatically if it does not already exist.</p>
   * @public
   */
  Autoprovision?: boolean | undefined;

  /**
   * <p>The Docker volume driver to use.</p>
   * @public
   */
  Driver?: string | undefined;

  /**
   * <p>A map of Docker driver-specific options that are passed through.</p>
   * @public
   */
  DriverOpts?: Record<string, string> | undefined;

  /**
   * <p>Custom metadata to add to the Docker volume.</p>
   * @public
   */
  Labels?: Record<string, string> | undefined;

  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned
   * automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops. Valid values are <code>shared</code> or <code>task</code>.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * <p>The Amazon EFS access point identifier to use.</p>
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * <p>Whether to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system.</p>
   * @public
   */
  Iam?: string | undefined;
}

/**
 * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
 * @public
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   * @public
   */
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails | undefined;

  /**
   * <p>The Amazon EFS file system identifier to use.</p>
   * @public
   */
  FilesystemId?: string | undefined;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host.</p>
   * @public
   */
  RootDirectory?: string | undefined;

  /**
   * <p>Whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. </p>
   * @public
   */
  TransitEncryption?: string | undefined;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.</p>
   * @public
   */
  TransitEncryptionPort?: number | undefined;
}
