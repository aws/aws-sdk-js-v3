// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * @public
 */
export interface AcceptAdministratorInvitationRequest {
  /**
   * <p>The account ID of the Security Hub administrator account that sent the invitation.</p>
   */
  AdministratorId: string | undefined;

  /**
   * <p>The identifier of the invitation sent from the Security Hub administrator account.</p>
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAdministratorInvitationResponse {}

/**
 * @public
 * <p>Internal server error.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The account doesn't have permission to perform this action.</p>
 */
export class InvalidAccessException extends __BaseException {
  readonly name: "InvalidAccessException" = "InvalidAccessException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAccessException, __BaseException>) {
    super({
      name: "InvalidAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAccessException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The request was rejected because we can't find the specified resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * <p>The account ID of the Security Hub administrator account that sent the invitation.</p>
   */
  MasterId: string | undefined;

  /**
   * <p>The identifier of the invitation sent from the Security Hub administrator account.</p>
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * @public
 * <p>You don't have permission to perform the action specified in the request.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>The details of an Amazon Web Services account.</p>
 */
export interface AccountDetails {
  /**
   * <p>The ID of an Amazon Web Services account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The email of an Amazon Web Services account.</p>
   */
  Email?: string;
}

/**
 * @public
 * <p>Provided if <code>CallerType</code> is <code>domain</code>. It provides information
 *          about the DNS domain that issued the API call.</p>
 */
export interface AwsApiCallActionDomainDetails {
  /**
   * <p>The name of the DNS domain that issued the API call.</p>
   */
  Domain?: string;
}

/**
 * @public
 * <p>Information about a city.</p>
 */
export interface City {
  /**
   * <p>The name of the city.</p>
   */
  CityName?: string;
}

/**
 * @public
 * <p>Information about a country.</p>
 */
export interface Country {
  /**
   * <p>The 2-letter ISO 3166 country code for the country.</p>
   */
  CountryCode?: string;

  /**
   * <p>The name of the country.</p>
   */
  CountryName?: string;
}

/**
 * @public
 * <p>Provides the latitude and longitude coordinates of a location.</p>
 */
export interface GeoLocation {
  /**
   * <p>The longitude of the location.</p>
   */
  Lon?: number;

  /**
   * <p>The latitude of the location.</p>
   */
  Lat?: number;
}

/**
 * @public
 * <p>Provides information about an internet provider.</p>
 */
export interface IpOrganizationDetails {
  /**
   * <p>The Autonomous System Number (ASN) of the internet provider</p>
   */
  Asn?: number;

  /**
   * <p>The name of the organization that registered the ASN.</p>
   */
  AsnOrg?: string;

  /**
   * <p>The ISP information for the internet provider.</p>
   */
  Isp?: string;

  /**
   * <p>The name of the internet provider.</p>
   */
  Org?: string;
}

/**
 * @public
 * <p>For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and
 *             <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about
 *          the remote IP address that was involved in the action.</p>
 */
export interface ActionRemoteIpDetails {
  /**
   * <p>The IP address.</p>
   */
  IpAddressV4?: string;

  /**
   * <p>The internet service provider (ISP) organization associated with the remote IP
   *          address.</p>
   */
  Organization?: IpOrganizationDetails;

  /**
   * <p>The country where the remote IP address is located.</p>
   */
  Country?: Country;

  /**
   * <p>The city where the remote IP address is located.</p>
   */
  City?: City;

  /**
   * <p>The coordinates of the location of the remote IP address.</p>
   */
  GeoLocation?: GeoLocation;
}

/**
 * @public
 * <p>Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details
 *          about the API call that was detected.</p>
 */
export interface AwsApiCallAction {
  /**
   * <p>The name of the API method that was issued.</p>
   */
  Api?: string;

  /**
   * <p>The name of the Amazon Web Services service that the API method belongs to.</p>
   */
  ServiceName?: string;

  /**
   * <p>Indicates whether the API call originated from a remote IP address
   *             (<code>remoteip</code>) or from a DNS domain (<code>domain</code>).</p>
   */
  CallerType?: string;

  /**
   * <p>Provided if <code>CallerType</code> is <code>remoteIp</code>. Provides information about
   *          the remote IP address that the API call originated from.</p>
   */
  RemoteIpDetails?: ActionRemoteIpDetails;

  /**
   * <p>Provided if <code>CallerType</code> is <code>domain</code>. Provides information about
   *          the DNS domain that the API call originated from.</p>
   */
  DomainDetails?: AwsApiCallActionDomainDetails;

  /**
   * <p>Identifies the resources that were affected by the API call.</p>
   */
  AffectedResources?: Record<string, string>;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the API call was first
   *          observed.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  FirstSeen?: string;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the API call was most recently
   *          observed.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  LastSeen?: string;
}

/**
 * @public
 * <p>Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details
 *          about the DNS request that was detected.</p>
 */
export interface DnsRequestAction {
  /**
   * <p>The DNS domain that is associated with the DNS request.</p>
   */
  Domain?: string;

  /**
   * <p>The protocol that was used for the DNS request.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether the DNS request was blocked.</p>
   */
  Blocked?: boolean;
}

/**
 * @public
 * <p>For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>,
 *             <code>LocalPortDetails</code> provides information about the local port that was
 *          involved in the action.</p>
 */
export interface ActionLocalPortDetails {
  /**
   * <p>The number of the port.</p>
   */
  Port?: number;

  /**
   * <p>The port name of the local connection.</p>
   */
  PortName?: string;
}

/**
 * @public
 * <p>Provides information about the remote port that was involved in an attempted network
 *          connection.</p>
 */
export interface ActionRemotePortDetails {
  /**
   * <p>The number of the port.</p>
   */
  Port?: number;

  /**
   * <p>The port name of the remote connection.</p>
   */
  PortName?: string;
}

/**
 * @public
 * <p>Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides
 *          details about the attempted network connection that was detected.</p>
 */
export interface NetworkConnectionAction {
  /**
   * <p>The direction of the network connection request (<code>IN</code> or
   *          <code>OUT</code>).</p>
   */
  ConnectionDirection?: string;

  /**
   * <p>Information about the remote IP address that issued the network connection
   *          request.</p>
   */
  RemoteIpDetails?: ActionRemoteIpDetails;

  /**
   * <p>Information about the port on the remote IP address.</p>
   */
  RemotePortDetails?: ActionRemotePortDetails;

  /**
   * <p>Information about the port on the EC2 instance.</p>
   */
  LocalPortDetails?: ActionLocalPortDetails;

  /**
   * <p>The protocol used to make the network connection request.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether the network connection attempt was blocked.</p>
   */
  Blocked?: boolean;
}

/**
 * @public
 * <p>Provides information about the IP address where the scanned port is located.</p>
 */
export interface ActionLocalIpDetails {
  /**
   * <p>The IP address.</p>
   */
  IpAddressV4?: string;
}

/**
 * @public
 * <p>A port scan that was part of the port probe. For each scan, PortProbeDetails provides
 *          information about the local IP address and port that were scanned, and the remote IP
 *          address that the scan originated from.</p>
 */
export interface PortProbeDetail {
  /**
   * <p>Provides information about the port that was scanned.</p>
   */
  LocalPortDetails?: ActionLocalPortDetails;

  /**
   * <p>Provides information about the IP address where the scanned port is located.</p>
   */
  LocalIpDetails?: ActionLocalIpDetails;

  /**
   * <p>Provides information about the remote IP address that performed the scan.</p>
   */
  RemoteIpDetails?: ActionRemoteIpDetails;
}

/**
 * @public
 * <p>Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details
 *          about the attempted port probe that was detected.</p>
 */
export interface PortProbeAction {
  /**
   * <p>Information about the ports affected by the port probe.</p>
   */
  PortProbeDetails?: PortProbeDetail[];

  /**
   * <p>Indicates whether the port probe was blocked.</p>
   */
  Blocked?: boolean;
}

/**
 * @public
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
   */
  ActionType?: string;

  /**
   * <p>Included if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. Provides details
   *          about the network connection that was detected.</p>
   */
  NetworkConnectionAction?: NetworkConnectionAction;

  /**
   * <p>Included if <code>ActionType</code> is <code>AWS_API_CALL</code>. Provides details about
   *          the API call that was detected. </p>
   */
  AwsApiCallAction?: AwsApiCallAction;

  /**
   * <p>Included if <code>ActionType</code> is <code>DNS_REQUEST</code>. Provides details about
   *          the DNS request that was detected. </p>
   */
  DnsRequestAction?: DnsRequestAction;

  /**
   * <p>Included if <code>ActionType</code> is <code>PORT_PROBE</code>. Provides details about
   *          the port probe that was detected. </p>
   */
  PortProbeAction?: PortProbeAction;
}

/**
 * @public
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

/**
 * @public
 * <p>Details about a related finding.</p>
 */
export interface RelatedFinding {
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SeverityLabel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type SeverityLabel = (typeof SeverityLabel)[keyof typeof SeverityLabel];

/**
 * @public
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
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
   */
  Normalized?: number;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

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
   */
  Label?: SeverityLabel | string;
}

/**
 * @public
 * @enum
 */
export const VerificationState = {
  BENIGN_POSITIVE: "BENIGN_POSITIVE",
  FALSE_POSITIVE: "FALSE_POSITIVE",
  TRUE_POSITIVE: "TRUE_POSITIVE",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type VerificationState = (typeof VerificationState)[keyof typeof VerificationState];

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  NEW: "NEW",
  NOTIFIED: "NOTIFIED",
  RESOLVED: "RESOLVED",
  SUPPRESSED: "SUPPRESSED",
} as const;

/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 * <p>Used to update information about the investigation into the finding.</p>
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
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

/**
 * @public
 * <p>
 *          Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
 *       </p>
 */
export interface AutomationRulesFindingFieldsUpdate {
  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Updates to the severity information for a finding.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * <p>
   *          The rule action updates the <code>VerificationState</code> field of a finding.
   *       </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>
   *          The rule action updates the <code>Confidence</code> field of a finding.
   *       </p>
   */
  Confidence?: number;

  /**
   * <p>
   *          The rule action updates the <code>Criticality</code> field of a finding.
   *       </p>
   */
  Criticality?: number;

  /**
   * <p>
   *          The rule action updates the <code>Types</code> field of a finding.
   *       </p>
   */
  Types?: string[];

  /**
   * <p>
   *          The rule action updates the <code>UserDefinedFields</code> field of a finding.
   *       </p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>Used to update information about the investigation into the finding.</p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>
   *             The rule action updates the <code>RelatedFindings</code> field of a finding.
   *         </p>
   */
  RelatedFindings?: RelatedFinding[];
}

/**
 * @public
 * @enum
 */
export const AutomationRulesActionType = {
  FINDING_FIELDS_UPDATE: "FINDING_FIELDS_UPDATE",
} as const;

/**
 * @public
 */
export type AutomationRulesActionType = (typeof AutomationRulesActionType)[keyof typeof AutomationRulesActionType];

/**
 * @public
 * <p>
 *          One or more actions to update finding fields if a finding matches the defined criteria
 *          of the rule.
 *       </p>
 */
export interface AutomationRulesAction {
  /**
   * <p>
   *          Specifies that the rule action should update the <code>Types</code> finding field. The <code>Types</code>
   *          finding field classifies findings in the format of namespace/category/classifier. For more information, see
   *          <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html">Types taxonomy for ASFF</a> in
   *          the <i>Security Hub User Guide</i>.
   *       </p>
   */
  Type?: AutomationRulesActionType | string;

  /**
   * <p>
   *          Specifies that the automation rule action is an update to a finding field.
   *       </p>
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate;
}

/**
 * @public
 * <p>An <code>ActionTarget</code> object.</p>
 */
export interface ActionTarget {
  /**
   * <p>The ARN for the target action.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The name of the action target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the target action.</p>
   */
  Description: string | undefined;
}

/**
 * @public
 * <p>An adjustment to the CVSS metric.</p>
 */
export interface Adjustment {
  /**
   * <p>The metric to adjust.</p>
   */
  Metric?: string;

  /**
   * <p>The reason for the adjustment.</p>
   */
  Reason?: string;
}

/**
 * @public
 * @enum
 */
export const AdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus];

/**
 * @public
 * <p>Represents a Security Hub administrator account designated by an organization management
 *          account.</p>
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AccountId?: string;

  /**
   * <p>The current status of the Security Hub administrator account. Indicates whether the account is
   *          currently enabled as a Security Hub administrator.</p>
   */
  Status?: AdminStatus | string;
}

/**
 * @public
 * <p>
 *          Information about an enabled security standard in which a security control is enabled.
 *       </p>
 */
export interface AssociatedStandard {
  /**
   * <p>The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the
   *          Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.
   *       </p>
   */
  StandardsId?: string;
}

/**
 * @public
 * <p>
 *          Describes the state of an association between a route table and a subnet or gateway.
 *       </p>
 */
export interface AssociationStateDetails {
  /**
   * <p>
   *          The state of the association.
   *       </p>
   */
  State?: string;

  /**
   * <p>
   *          The status message, if applicable.
   *       </p>
   */
  StatusMessage?: string;
}

/**
 * @public
 * <p>
 *          The associations between a route table and one or more subnets or a gateway.
 *       </p>
 */
export interface AssociationSetDetails {
  /**
   * <p>
   *          The state of the association between a route table and a subnet or gateway.
   *       </p>
   */
  AssociationState?: AssociationStateDetails;

  /**
   * <p>
   *          The ID of the internet gateway or virtual private gateway.
   *       </p>
   */
  GatewayId?: string;

  /**
   * <p>
   *          Indicates whether this is the main route table.
   *       </p>
   */
  Main?: boolean;

  /**
   * <p>
   *          The ID of the association.
   *       </p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>
   *          The ID of the route table.
   *       </p>
   */
  RouteTableId?: string;

  /**
   * <p>
   *          The ID of the subnet. A subnet ID is not returned for an implicit association.
   *       </p>
   */
  SubnetId?: string;
}

/**
 * @public
 * @enum
 */
export const AssociationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * @enum
 */
export const AutoEnableStandards = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AutoEnableStandards = (typeof AutoEnableStandards)[keyof typeof AutoEnableStandards];

/**
 * @public
 * @enum
 */
export const StringFilterComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
  PREFIX_NOT_EQUALS: "PREFIX_NOT_EQUALS",
} as const;

/**
 * @public
 */
export type StringFilterComparison = (typeof StringFilterComparison)[keyof typeof StringFilterComparison];

/**
 * @public
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter text, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a string value when querying for findings. To search for
   *          values that contain the filter criteria value, use one of the following comparison
   *          operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use
   *                <code>EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType EQUALS AwsEc2SecurityGroup</code> only
   *                matches findings that have a resource type of
   *                <code>AwsEc2SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use
   *                <code>PREFIX</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX AwsIam</code> matches findings
   *                that have a resource type that starts with <code>AwsIam</code>. Findings with a
   *                resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>, or
   *                   <code>AwsIamUser</code> would all match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EQUALS</code> and <code>PREFIX</code> filters on the same field are joined by
   *             <code>OR</code>. A finding matches if it matches any one of those filters.</p>
   *          <p>To search for values that do not contain the filter criteria value, use one of the
   *          following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that do not exactly match the filter value, use
   *                   <code>NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType NOT_EQUALS AwsIamPolicy</code> matches
   *                findings that have a resource type other than <code>AwsIamPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that do not start with the filter value, use
   *                   <code>PREFIX_NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX_NOT_EQUALS AwsIam</code> matches
   *                findings that have a resource type that does not start with <code>AwsIam</code>.
   *                Findings with a resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>,
   *                or <code>AwsIamUser</code> would all be excluded from the results.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_EQUALS</code> and <code>PREFIX_NOT_EQUALS</code> filters on the same field are
   *          joined by <code>AND</code>. A finding matches only if it matches all of those
   *          filters.</p>
   *          <p>For filters on the same field, you cannot provide both an <code>EQUALS</code> filter and
   *          a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter. Combining filters in
   *          this way always returns an error, even if the provided filter values would return valid
   *          results.</p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or
   *          <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
   *             <code>PREFIX</code> filters, then the <code>NOT_EQUALS</code> or
   *             <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p> For example, for the following filter, Security Hub first identifies findings that have
   *          resource types that start with either <code>AwsIAM</code> or <code>AwsEc2</code>. It then
   *          excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that
   *          have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
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
   */
  Comparison?: StringFilterComparison | string;
}

/**
 * @public
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;
}

/**
 * @public
 * @enum
 */
export const DateRangeUnit = {
  DAYS: "DAYS",
} as const;

/**
 * @public
 */
export type DateRangeUnit = (typeof DateRangeUnit)[keyof typeof DateRangeUnit];

/**
 * @public
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;
}

/**
 * @public
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A timestamp that provides the start date for the date filter.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>.
   *          For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  Start?: string;

  /**
   * <p>A timestamp that provides the end date for the date filter.</p>
   *          <p>A correctly formatted example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated by <code>T</code>.
   *          For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

/**
 * @public
 * @enum
 */
export const MapFilterComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type MapFilterComparison = (typeof MapFilterComparison)[keyof typeof MapFilterComparison];

/**
 * @public
 * <p>A map filter for querying findings. Each map filter provides the field to check, the
 *          value to look for, and the comparison operator.</p>
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to the key value when querying for findings with a map
   *          filter.</p>
   *          <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS
   *             Security</code> matches findings that have the value <code>Security</code> for the tag
   *             <code>Department</code>.</p>
   *          <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS
   *             Finance</code> matches findings that do not have the value <code>Finance</code> for the
   *          tag <code>Department</code>.</p>
   *          <p>
   *             <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding
   *          matches if it matches any one of those filters.</p>
   *          <p>
   *             <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A
   *          finding matches only if it matches all of those filters.</p>
   *          <p>You cannot have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter
   *          on the same field.</p>
   */
  Comparison?: MapFilterComparison | string;
}

/**
 * @public
 * <p>
 *          The criteria that determine which findings a rule applies to.
 *       </p>
 */
export interface AutomationRulesFindingFilters {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for a third-party product that generated a finding in
   *          Security Hub.
   *       </p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p> The Amazon Web Services account ID in which a finding was generated. </p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>
   *          The product-specific identifier for a finding.
   *       </p>
   */
  Id?: StringFilter[];

  /**
   * <p>
   *          The identifier for the solution-specific component that
   *          generated a finding.
   *       </p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p> One or more finding types in the format of namespace/category/classifier that classify
   *          a finding. For a list of namespaces, classifiers, and categories, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html">Types
   *             taxonomy for ASFF</a> in the <i>Security Hub User Guide</i>. </p>
   */
  Type?: StringFilter[];

  /**
   * <p>
   *          A timestamp that indicates when the potential security issue captured by a
   *          finding was first observed by the security findings product.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>
   *          A timestamp that indicates when the potential security issue captured by a finding
   *          was most recently observed by the security findings product.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>
   *          A timestamp that indicates when this finding record was created.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>
   *          A timestamp that indicates when the finding record was most recently updated.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * <p>The likelihood that a finding accurately identifies the behavior or issue that it was
   *          intended to identify. <code>Confidence</code> is scored on a 0–100 basis using a ratio
   *          scale. A value of <code>0</code> means 0 percent confidence, and a value of
   *             <code>100</code> means 100 percent confidence. For example, a data exfiltration
   *          detection based on a statistical deviation of network traffic has low confidence because an
   *          actual exfiltration hasn't been verified. For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence">Confidence</a> in the <i>Security Hub User Guide</i>. </p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>
   *          The level of importance that is assigned to the resources that are associated with a
   *          finding. <code>Criticality</code> is scored on a 0–100 basis, using a ratio scale that supports
   *          only full integers. A score of <code>0</code> means that the underlying resources have no
   *          criticality, and a score of <code>100</code> is reserved for the most critical resources. For
   *       more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality">Criticality</a> in the <i>Security Hub User Guide</i>.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>
   *          A finding's title.
   *       </p>
   */
  Title?: StringFilter[];

  /**
   * <p>
   *          A finding's description.
   *       </p>
   */
  Description?: StringFilter[];

  /**
   * <p>
   *          Provides a URL that links to a page about the current finding in the finding product.
   *       </p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>
   *          Provides the name of the product that generated the finding. For
   *          control-based findings, the product name is Security Hub.
   *       </p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>
   *          The name of the company for the product that generated the finding.
   *          For control-based findings, the company is Amazon Web Services.
   *       </p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>
   *          The severity value of the finding.
   *       </p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>
   *          The type of resource that the finding pertains to.
   *       </p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>
   *          The identifier for the given resource type. For Amazon Web Services resources that are identified by
   *          Amazon Resource Names (ARNs), this is the ARN. For Amazon Web Services resources that lack ARNs,
   *          this is the identifier as defined by the Amazon Web Service that created the resource.
   *          For non-Amazon Web Services resources, this is a unique identifier that is associated with the
   *          resource.
   *       </p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>
   *          The partition in which the resource that the finding pertains to is located.
   *          A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
   *       </p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>
   *          The Amazon Web Services Region where the resource that a finding pertains to is located.
   *       </p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>
   *          A list of Amazon Web Services tags associated with a resource at the time the finding was processed.
   *       </p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>
   *          Custom fields and values about the resource that a finding pertains to.
   *       </p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>
   *          The result of a security check. This field is only used for findings generated
   *          from controls.
   *       </p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p> The security control ID for which a finding was generated. Security control IDs are the same across standards.</p>
   */
  ComplianceSecurityControlId?: StringFilter[];

  /**
   * <p>The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of
   *             the Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.</p>
   */
  ComplianceAssociatedStandardsId?: StringFilter[];

  /**
   * <p>
   *          Provides the veracity of a finding.
   *       </p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>
   *          Provides information about the status of the investigation into a finding.
   *       </p>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * <p>
   *          Provides the current state of a finding.
   *       </p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>
   *          The ARN for the product that generated a related finding.
   *       </p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>
   *          The product-generated identifier for a related finding.
   *       </p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>
   *          The text of a user-defined note that's added to a finding.
   *       </p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>
   *          The timestamp of when the note was updated. Uses the date-time format specified in
   *          <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6, Internet Date/Time Format</a>. The value cannot contain spaces.
   *          For example, <code>2020-03-22T13:22:13.933Z</code>.
   *       </p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>
   *          The principal that created a note.
   *       </p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * <p>
   *             A list of user-defined name and value string pairs added to a finding.
   *         </p>
   */
  UserDefinedFields?: MapFilter[];
}

/**
 * @public
 * @enum
 */
export const RuleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

/**
 * @public
 * <p>
 *          Defines the configuration of an automation rule.
 *       </p>
 */
export interface AutomationRulesConfig {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a rule.
   *       </p>
   */
  RuleArn?: string;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created.
   *       </p>
   */
  RuleStatus?: RuleStatus | string;

  /**
   * <p> An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   */
  RuleOrder?: number;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   */
  RuleName?: string;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   */
  Description?: string;

  /**
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful
   *             when a finding matches the criteria for multiple rules, and each rule has different actions. If the value of this
   *             field is set to <code>true</code> for a rule, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding.  The default value of this field is <code>false</code>.
   *         </p>
   */
  IsTerminal?: boolean;

  /**
   * <p>
   *          A set of <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services
   *              Security Finding Format</a> finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   */
  Criteria?: AutomationRulesFindingFilters;

  /**
   * <p>
   *          One or more actions to update finding fields if a finding matches the defined criteria
   *          of the rule.
   *       </p>
   */
  Actions?: AutomationRulesAction[];

  /**
   * <p>
   *          A timestamp that indicates when the rule was created.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>
   *          A timestamp that indicates when the rule was most recently updated.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>
   *          The principal that created a rule.
   *       </p>
   */
  CreatedBy?: string;
}

/**
 * @public
 * <p>
 *          Metadata for automation rules in the calling account. The response includes rules
 *          with a <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.
 *       </p>
 */
export interface AutomationRulesMetadata {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for the rule.
   *       </p>
   */
  RuleArn?: string;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   */
  RuleStatus?: RuleStatus | string;

  /**
   * <p>An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   */
  RuleOrder?: number;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   */
  RuleName?: string;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *             Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful
   *             when a finding matches the criteria for multiple rules, and each rule has different actions. If the value of this
   *             field is set to <code>true</code> for a rule, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding.  The default value of this field is <code>false</code>.
   *         </p>
   */
  IsTerminal?: boolean;

  /**
   * <p>
   *          A timestamp that indicates when the rule was created.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>
   *          A timestamp that indicates when the rule was most recently updated.
   *       </p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>
   *          The principal that created a rule.
   *       </p>
   */
  CreatedBy?: string;
}

/**
 * @public
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the subnet. You can specify one subnet per Availability Zone.</p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>
 *             Provides details about broker encryption options.
 *         </p>
 */
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  /**
   * <p>
   *             The KMS key that’s used to encrypt your data at rest. If not provided, Amazon MQ will use a
   *             default KMS key to encrypt your data.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *             Specifies that an KMS key should be used for at-rest encryption. Set to <code>true</code> by default
   *             if no value is provided (for example, for RabbitMQ brokers).
   *         </p>
   */
  UseAwsOwnedKey?: boolean;
}

/**
 * @public
 * <p>
 *             The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize
 *             connections to the broker. This is an optional failover server.
 *         </p>
 */
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  /**
   * <p>
   *             Specifies the location of the LDAP server, such as Amazon Web Services Directory Service for Microsoft Active Directory.
   *         </p>
   */
  Hosts?: string[];

  /**
   * <p>
   *             The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.
   *         </p>
   */
  RoleBase?: string;

  /**
   * <p>
   *             The group name attribute in a role entry whose value is the name of that role.
   *         </p>
   */
  RoleName?: string;

  /**
   * <p>
   *             The LDAP search filter used to find roles within the <code>roleBase</code>.
   *         </p>
   */
  RoleSearchMatching?: string;

  /**
   * <p>
   *             The directory search scope for the role. If set to <code>true</code>, the scope is to search the entire subtree.
   *         </p>
   */
  RoleSearchSubtree?: boolean;

  /**
   * <p>
   *             A username for the service account, which is an account in your LDAP server that has access to initiate a connection.
   *         </p>
   */
  ServiceAccountUsername?: string;

  /**
   * <p>
   *             Selects a particular subtree of the directory information tree (DIT) to search for user entries.
   *         </p>
   */
  UserBase?: string;

  /**
   * <p>
   *             The name of the LDAP attribute in the user's directory entry for the user's group membership. </p>
   */
  UserRoleName?: string;

  /**
   * <p>
   *             The LDAP search filter used to find users within the <code>userBase</code>.
   *         </p>
   */
  UserSearchMatching?: string;

  /**
   * <p>
   *             The directory search scope for the user. If set to true, the scope is to search the entire subtree.
   *         </p>
   */
  UserSearchSubtree?: boolean;
}

/**
 * @public
 * <p>
 *             Provides information about logs to be activated for the specified broker.
 *         </p>
 */
export interface AwsAmazonMqBrokerLogsPendingDetails {
  /**
   * <p>
   *             Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply
   *             to RabbitMQ brokers.
   *         </p>
   */
  Audit?: boolean;

  /**
   * <p>
   *             Activates general logging.
   *         </p>
   */
  General?: boolean;
}

/**
 * @public
 * <p>
 *             Provides information about logs to be activated for the specified broker.
 *         </p>
 */
export interface AwsAmazonMqBrokerLogsDetails {
  /**
   * <p>
   *             Activates audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Doesn't apply to RabbitMQ brokers.
   *         </p>
   */
  Audit?: boolean;

  /**
   * <p>
   *             Activates general logging.
   *         </p>
   */
  General?: boolean;

  /**
   * <p>
   *             The location of the CloudWatch Logs log group where audit logs are sent.
   *         </p>
   */
  AuditLogGroup?: string;

  /**
   * <p>
   *             The location of the CloudWatch Logs log group where general logs are sent.
   *         </p>
   */
  GeneralLogGroup?: string;

  /**
   * <p>
   *             The list of information about logs that are to be turned on for the specified broker.
   *         </p>
   */
  Pending?: AwsAmazonMqBrokerLogsPendingDetails;
}

/**
 * @public
 * <p>
 *             The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
 *         </p>
 */
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  /**
   * <p>
   *             The day of the week on which the maintenance window falls.
   *         </p>
   */
  DayOfWeek?: string;

  /**
   * <p>
   *             The time, in 24-hour format, on which the maintenance window falls.
   *         </p>
   */
  TimeOfDay?: string;

  /**
   * <p>
   *             The time zone in either the Country/City format or the UTC offset format. UTC is the default format.
   *         </p>
   */
  TimeZone?: string;
}

/**
 * @public
 * <p>
 *             Provides details about the broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
 *         </p>
 */
export interface AwsAmazonMqBrokerUsersDetails {
  /**
   * <p>
   *             The type of change pending for the broker user.
   *         </p>
   */
  PendingChange?: string;

  /**
   * <p>
   *             The username of the broker user.
   *         </p>
   */
  Username?: string;
}

/**
 * @public
 * <p>
 *             Provides details about an Amazon MQ message broker. A message broker allows software applications and
 *             components to communicate using various programming languages, operating systems, and formal messaging protocols.
 *         </p>
 */
export interface AwsAmazonMqBrokerDetails {
  /**
   * <p>
   *             The authentication strategy used to secure the broker. The default is <code>SIMPLE</code>.
   *         </p>
   */
  AuthenticationStrategy?: string;

  /**
   * <p>
   *             Whether automatically upgrade new minor versions for brokers, as new versions are released and supported by Amazon MQ.
   *             Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the broker.
   *         </p>
   */
  BrokerArn?: string;

  /**
   * <p>The broker's name.
   *         </p>
   */
  BrokerName?: string;

  /**
   * <p>
   *             The broker's deployment mode.
   *         </p>
   */
  DeploymentMode?: string;

  /**
   * <p>
   *             Encryption options for the broker. Doesn’t apply to RabbitMQ brokers.
   *         </p>
   */
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails;

  /**
   * <p>
   *             The type of broker engine.
   *         </p>
   */
  EngineType?: string;

  /**
   * <p>
   *             The version of the broker engine.
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>
   *             The broker's instance type.
   *         </p>
   */
  HostInstanceType?: string;

  /**
   * <p>
   *             The unique ID that Amazon MQ generates for the broker.
   *         </p>
   */
  BrokerId?: string;

  /**
   * <p>
   *             The metadata of the Lightweight Directory Access Protocol (LDAP) server used to authenticate and authorize connections to the broker. This is an optional failover server.
   *         </p>
   */
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails;

  /**
   * <p>
   *             Turns on Amazon CloudWatch logging for brokers.
   *         </p>
   */
  Logs?: AwsAmazonMqBrokerLogsDetails;

  /**
   * <p>
   *             The scheduled time period (UTC) during which Amazon MQ begins to apply pending updates or patches to the broker.
   *         </p>
   */
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails;

  /**
   * <p>
   *             Permits connections from applications outside of the VPC that hosts the broker's subnets.
   *         </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>
   *             The list of rules (one minimum, 125 maximum) that authorize connections to brokers.
   *         </p>
   */
  SecurityGroups?: string[];

  /**
   * <p>
   *             The broker's storage type.
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>
   *             The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
   *         </p>
   */
  SubnetIds?: string[];

  /**
   * <p>
   *             The list of all broker usernames for the specified broker. Doesn't apply to RabbitMQ brokers.
   *         </p>
   */
  Users?: AwsAmazonMqBrokerUsersDetails[];
}

/**
 * @public
 * <p>Contains information about settings for logging access for the stage.</p>
 */
export interface AwsApiGatewayAccessLogSettings {
  /**
   * <p>A single-line format of the access logs of data, as specified by selected
   *             <code>$context</code> variables. The format must include at least
   *             <code>$context.requestId</code>.</p>
   */
  Format?: string;

  /**
   * <p>The ARN of the CloudWatch Logs log group that receives the access logs.</p>
   */
  DestinationArn?: string;
}

/**
 * @public
 * <p>Contains information about settings for canary deployment in the stage.</p>
 */
export interface AwsApiGatewayCanarySettings {
  /**
   * <p>The percentage of traffic that is diverted to a canary deployment.</p>
   */
  PercentTraffic?: number;

  /**
   * <p>The deployment identifier for the canary deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>Stage variables that are overridden in the canary release deployment. The variables
   *          include new stage variables that are introduced in the canary.</p>
   *          <p>Each variable is represented as a string-to-string map between the stage variable name
   *          and the variable value.</p>
   */
  StageVariableOverrides?: Record<string, string>;

  /**
   * <p>Indicates whether the canary deployment uses the stage cache.</p>
   */
  UseStageCache?: boolean;
}

/**
 * @public
 * <p>Contains information about the endpoints for the API.</p>
 */
export interface AwsApiGatewayEndpointConfiguration {
  /**
   * <p>A list of endpoint types for the REST API.</p>
   *          <p>For an edge-optimized API, the endpoint type is <code>EDGE</code>. For a Regional API,
   *          the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is
   *             <code>PRIVATE</code>.</p>
   */
  Types?: string[];
}

/**
 * @public
 * <p>Defines settings for a method for the stage.</p>
 */
export interface AwsApiGatewayMethodSettings {
  /**
   * <p>Indicates whether CloudWatch metrics are enabled for the method. </p>
   */
  MetricsEnabled?: boolean;

  /**
   * <p>The logging level for this method. The logging level affects the log entries that are
   *          pushed to CloudWatch Logs.</p>
   *          <p>If the logging level is <code>ERROR</code>, then the logs only include error-level
   *          entries.</p>
   *          <p>If the logging level is <code>INFO</code>, then the logs include both <code>ERROR</code>
   *          events and extra informational events.</p>
   *          <p>Valid values: <code>OFF</code> | <code>ERROR</code> | <code>INFO</code>
   *          </p>
   */
  LoggingLevel?: string;

  /**
   * <p>Indicates whether data trace logging is enabled for the method. Data trace logging
   *          affects the log entries that are pushed to CloudWatch Logs.</p>
   */
  DataTraceEnabled?: boolean;

  /**
   * <p>The throttling burst limit for the method.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>The throttling rate limit for the method.</p>
   */
  ThrottlingRateLimit?: number;

  /**
   * <p>Indicates whether responses are cached and returned for requests. For responses to be
   *          cached, a cache cluster must be enabled on the stage.</p>
   */
  CachingEnabled?: boolean;

  /**
   * <p>Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL,
   *          the longer the response is cached.</p>
   */
  CacheTtlInSeconds?: number;

  /**
   * <p>Indicates whether the cached responses are encrypted. </p>
   */
  CacheDataEncrypted?: boolean;

  /**
   * <p>Indicates whether authorization is required for a cache invalidation request.</p>
   */
  RequireAuthorizationForCacheControl?: boolean;

  /**
   * <p>Indicates how to handle unauthorized requests for cache invalidation.</p>
   *          <p>Valid values: <code>FAIL_WITH_403</code> | <code>SUCCEED_WITH_RESPONSE_HEADER</code> |
   *             <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>
   *          </p>
   */
  UnauthorizedCacheControlHeaderStrategy?: string;

  /**
   * <p>The HTTP method. You can use an asterisk (*) as a wildcard to apply method settings to
   *          multiple methods.</p>
   */
  HttpMethod?: string;

  /**
   * <p>The resource path for this method. Forward slashes (/) are encoded as ~1 . The initial
   *          slash must include a forward slash.</p>
   *          <p>For example, the path value <code>/resource/subresource</code> must be encoded as
   *             <code>/~1resource~1subresource</code>.</p>
   *          <p>To specify the root path, use only a slash (/). You can use an asterisk (*) as a
   *          wildcard to apply method settings to multiple methods.</p>
   */
  ResourcePath?: string;
}

/**
 * @public
 * <p>Contains information about a REST API in version 1 of Amazon API Gateway.</p>
 */
export interface AwsApiGatewayRestApiDetails {
  /**
   * <p>The identifier of the REST API.</p>
   */
  Id?: string;

  /**
   * <p>The name of the REST API.</p>
   */
  Name?: string;

  /**
   * <p>A description of the REST API.</p>
   */
  Description?: string;

  /**
   * <p>Indicates when the API was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>The version identifier for the REST API.</p>
   */
  Version?: string;

  /**
   * <p>The list of binary media types supported by the REST API.</p>
   */
  BinaryMediaTypes?: string[];

  /**
   * <p>The minimum size in bytes of a payload before compression is enabled.</p>
   *          <p>If <code>null</code>, then compression is disabled.</p>
   *          <p>If 0, then all payloads are compressed.</p>
   */
  MinimumCompressionSize?: number;

  /**
   * <p>The source of the API key for metering requests according to a usage plan.</p>
   *          <p>
   *             <code>HEADER</code> indicates whether to read the API key from the X-API-Key header of a
   *          request.</p>
   *          <p>
   *             <code>AUTHORIZER</code> indicates whether to read the API key from the
   *             <code>UsageIdentifierKey</code> from a custom authorizer.</p>
   */
  ApiKeySource?: string;

  /**
   * <p>The endpoint configuration of the REST API.</p>
   */
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
}

/**
 * @public
 * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
 */
export interface AwsApiGatewayStageDetails {
  /**
   * <p>The identifier of the deployment that the stage points to.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The identifier of the client certificate for the stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether a cache cluster is enabled for the stage.</p>
   */
  CacheClusterEnabled?: boolean;

  /**
   * <p>If a cache cluster is enabled, the size of the cache cluster.</p>
   */
  CacheClusterSize?: string;

  /**
   * <p>If a cache cluster is enabled, the status of the cache cluster.</p>
   */
  CacheClusterStatus?: string;

  /**
   * <p>Defines the method settings for the stage.</p>
   */
  MethodSettings?: AwsApiGatewayMethodSettings[];

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
   */
  Variables?: Record<string, string>;

  /**
   * <p>The version of the API documentation that is associated with the stage.</p>
   */
  DocumentationVersion?: string;

  /**
   * <p>Settings for logging access for the stage.</p>
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;

  /**
   * <p>Information about settings for canary deployment in the stage.</p>
   */
  CanarySettings?: AwsApiGatewayCanarySettings;

  /**
   * <p>Indicates whether active tracing with X-Ray is enabled for the stage.</p>
   */
  TracingEnabled?: boolean;

  /**
   * <p>Indicates when the stage was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>Indicates when the stage was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastUpdatedDate?: string;

  /**
   * <p>The ARN of the web ACL associated with the stage.</p>
   */
  WebAclArn?: string;
}

/**
 * @public
 * <p>Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is
 *          only supported for HTTP APIs.</p>
 */
export interface AwsCorsConfiguration {
  /**
   * <p>The allowed origins for CORS requests.</p>
   */
  AllowOrigins?: string[];

  /**
   * <p>Indicates whether the CORS request includes credentials.</p>
   */
  AllowCredentials?: boolean;

  /**
   * <p>The exposed headers for CORS requests.</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The number of seconds for which the browser caches preflight request results.</p>
   */
  MaxAge?: number;

  /**
   * <p>The allowed methods for CORS requests.</p>
   */
  AllowMethods?: string[];

  /**
   * <p>The allowed headers for CORS requests.</p>
   */
  AllowHeaders?: string[];
}

/**
 * @public
 * <p>Contains information about a version 2 API in Amazon API Gateway.</p>
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
   */
  ApiEndpoint?: string;

  /**
   * <p>The identifier of the API.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. Supported only for WebSocket APIs. </p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>Indicates when the API was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>A description of the API.</p>
   */
  Description?: string;

  /**
   * <p>The version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol for the API.</p>
   *          <p>Valid values: <code>WEBSOCKET</code> | <code>HTTP</code>
   *          </p>
   */
  ProtocolType?: string;

  /**
   * <p>The route selection expression for the API.</p>
   *          <p>For HTTP APIs, must be <code>$\{request.method\} $\{request.path\}</code>. This is the
   *          default value for HTTP APIs.</p>
   *          <p>For WebSocket APIs, there is no default value.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A cross-origin resource sharing (CORS) configuration. Supported only for HTTP
   *          APIs.</p>
   */
  CorsConfiguration?: AwsCorsConfiguration;
}

/**
 * @public
 * <p>Contains route settings for a stage.</p>
 */
export interface AwsApiGatewayV2RouteSettings {
  /**
   * <p>Indicates whether detailed metrics are enabled.</p>
   */
  DetailedMetricsEnabled?: boolean;

  /**
   * <p>The logging level. The logging level affects the log entries that are pushed to
   *          CloudWatch Logs. Supported only for WebSocket APIs.</p>
   *          <p>If the logging level is <code>ERROR</code>, then the logs only include error-level
   *          entries.</p>
   *          <p>If the logging level is <code>INFO</code>, then the logs include both <code>ERROR</code>
   *          events and extra informational events.</p>
   *          <p>Valid values: <code>OFF</code> | <code>ERROR</code> | <code>INFO</code>
   *          </p>
   */
  LoggingLevel?: string;

  /**
   * <p>Indicates whether data trace logging is enabled. Data trace logging affects the log
   *          entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs.</p>
   */
  DataTraceEnabled?: boolean;

  /**
   * <p>The throttling burst limit.</p>
   */
  ThrottlingBurstLimit?: number;

  /**
   * <p>The throttling rate limit.</p>
   */
  ThrottlingRateLimit?: number;
}

/**
 * @public
 * <p>Contains information about a version 2 stage for Amazon API Gateway.</p>
 */
export interface AwsApiGatewayV2StageDetails {
  /**
   * <p>The identifier of a client certificate for a stage. Supported only for WebSocket API calls.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>Indicates when the stage was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;

  /**
   * <p>The identifier of the deployment that the stage is associated with. </p>
   */
  DeploymentId?: string;

  /**
   * <p>Indicates when the stage was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastUpdatedDate?: string;

  /**
   * <p>The route settings for the stage.</p>
   */
  RouteSettings?: AwsApiGatewayV2RouteSettings;

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

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
   */
  StageVariables?: Record<string, string>;

  /**
   * <p>Information about settings for logging access for the stage.</p>
   */
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;

  /**
   * <p>Indicates whether updates to an API automatically trigger a new deployment.</p>
   */
  AutoDeploy?: boolean;

  /**
   * <p>The status of the last deployment of a stage. Supported only if the stage has automatic
   *          deployment enabled.</p>
   */
  LastDeploymentStatusMessage?: string;

  /**
   * <p>Indicates whether the stage is managed by API Gateway.</p>
   */
  ApiGatewayManaged?: boolean;
}

/**
 * @public
 * <p>
 *             Specifies the authorization configuration for using an Lambda function with your AppSync
 *             GraphQL API endpoint.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  /**
   * <p>
   *             The number of seconds a response should be cached for. The default is 5 minutes (300 seconds).
   *         </p>
   */
  AuthorizerResultTtlInSeconds?: number;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a
   *             standard Lambda ARN, a version ARN (.../v3), or an alias ARN.
   *         </p>
   */
  AuthorizerUri?: string;

  /**
   * <p>
   *             A regular expression for validation of tokens before the Lambda function is called.
   *         </p>
   */
  IdentityValidationExpression?: string;
}

/**
 * @public
 * <p>
 *             Specifies the authorization configuration for using an OpenID Connect compliant service with your AppSync GraphQL
 *             API endpoint.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  /**
   * <p>
   *             The number of milliseconds that a token is valid after being authenticated.
   *         </p>
   */
  AuthTtL?: number;

  /**
   * <p>
   *             The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained
   *             when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that
   *             AppSync can validate against multiple client identifiers at a time.
   *         </p>
   */
  ClientId?: string;

  /**
   * <p>
   *             The number of milliseconds that a token is valid after it's issued to a user.
   *         </p>
   */
  IatTtL?: number;

  /**
   * <p>
   *             The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of <code>iss</code>
   *             in the ID token.
   *         </p>
   */
  Issuer?: string;
}

/**
 * @public
 * <p>
 *             Specifies the authorization configuration for using Amazon Cognito user pools with your AppSync GraphQL API
 *             endpoint.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  /**
   * <p>
   *             A regular expression for validating the incoming Amazon Cognito user pools app client ID. If this value isn't set, no
   *             filtering is applied.
   *         </p>
   */
  AppIdClientRegex?: string;

  /**
   * <p>
   *             The Amazon Web Services Region in which the user pool was created.
   *         </p>
   */
  AwsRegion?: string;

  /**
   * <p>
   *             The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pools
   *             authentication doesn't match the Amazon Cognito user pools configuration.
   *         </p>
   */
  DefaultAction?: string;

  /**
   * <p>
   *             The user pool ID.
   *         </p>
   */
  UserPoolId?: string;
}

/**
 * @public
 * <p>
 *             A list of additional authentication providers for the GraphqlApi API.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  /**
   * <p>
   *             The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   *         </p>
   */
  AuthenticationType?: string;

  /**
   * <p>
   *             The configuration for Lambda function authorization.
   *         </p>
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;

  /**
   * <p>
   *             The OpenID Connect configuration.
   *         </p>
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;

  /**
   * <p>
   *             The Amazon Cognito user pools configuration.
   *         </p>
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
}

/**
 * @public
 * <p>
 *             Specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an
 *             AppSync GraphQL API.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the service role that AppSync assumes to publish to CloudWatch Logs
   *             in your account.
   *         </p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>
   *             Set to <code>TRUE</code> to exclude sections that contain information such as headers, context, and evaluated mapping templates,
   *             regardless of logging level.
   *         </p>
   */
  ExcludeVerboseContent?: boolean;

  /**
   * <p>
   *             The field logging level.
   *         </p>
   */
  FieldLogLevel?: string;
}

/**
 * @public
 * <p>
 *             Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices, and APIs from a single GraphQL endpoint.
 *         </p>
 */
export interface AwsAppSyncGraphQlApiDetails {
  /**
   * <p>
   *             The unique identifier for the API.
   *         </p>
   */
  ApiId?: string;

  /**
   * <p>The unique identifier for the API.</p>
   */
  Id?: string;

  /**
   * <p>
   * Specifies the authorization configuration for using an OpenID Connect compliant service with an AppSync GraphQL API endpoint.
   * </p>
   */
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;

  /**
   * <p>
   * The API name.
   * </p>
   */
  Name?: string;

  /**
   * <p>
   * Specifies the configuration for Lambda function authorization.
   * </p>
   */
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;

  /**
   * <p>
   * Indicates whether to use X-Ray tracing for the GraphQL API.
   * </p>
   */
  XrayEnabled?: boolean;

  /**
   * <p>
   * The Amazon Resource Name (ARN) of the API.
   * </p>
   */
  Arn?: string;

  /**
   * <p>
   * The Amazon Cognito user pools configuration.
   * </p>
   */
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;

  /**
   * <p>
   * The type of security configuration for your GraphQL API: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
   * </p>
   */
  AuthenticationType?: string;

  /**
   * <p>
   *             The Amazon CloudWatch Logs configuration.
   *         </p>
   */
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails;

  /**
   * <p>
   *             A list of additional authentication providers for the GraphQL API.
   *         </p>
   */
  AdditionalAuthenticationProviders?: AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[];

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this
   *             GraphQL API, if one exists.
   *         </p>
   */
  WafWebAclArn?: string;
}

/**
 * @public
 * <p>An Availability Zone for the automatic scaling group.</p>
 */
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Details about the launch template to use.</p>
 */
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  /**
   * <p>The identifier of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>Identifies the version of the launch template. You can specify a version identifier, or use the values <code>$Latest</code> or <code>$Default</code>.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Information about the instances distribution.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  /**
   * <p>How to allocate instance types to fulfill On-Demand capacity. The valid value is <code>prioritized</code>.</p>
   */
  OnDemandAllocationStrategy?: string;

  /**
   * <p>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances.</p>
   */
  OnDemandBaseCapacity?: number;

  /**
   * <p>The percentage of On-Demand Instances and Spot Instances for additional capacity beyond <code>OnDemandBaseCapacity</code>.</p>
   */
  OnDemandPercentageAboveBaseCapacity?: number;

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
   */
  SpotAllocationStrategy?: string;

  /**
   * <p>The number of Spot Instance pools across which to allocate your Spot Instances.</p>
   */
  SpotInstancePools?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotMaxPrice?: string;
}

/**
 * @public
 * <p>Details about the launch template to use for a mixed instances policy.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  /**
   * <p>The identifier of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either <code>LaunchTemplateId</code> or <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>Identifies the version of the launch template. You can specify a version identifier, or use the values <code>$Latest</code> or <code>$Default</code>.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Property values to use to override the values in the launch template.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  /**
   * <p>The instance type. For example, <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of capacity units provided by the specified instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic.</p>
   */
  WeightedCapacity?: string;
}

/**
 * @public
 * <p>Describes a launch template and overrides for a mixed instances policy.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  /**
   * <p>The launch template to use for a mixed instances policy.</p>
   */
  LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;

  /**
   * <p>Property values to use to override the values in the launch template.</p>
   */
  Overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
}

/**
 * @public
 * <p>The mixed instances policy for the automatic scaling group.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  /**
   * <p>The instances distribution. The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p>
   */
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;

  /**
   * <p>The launch template to use and the instance types (overrides) to use to provision EC2 instances to fulfill On-Demand and Spot capacities.</p>
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
}

/**
 * @public
 * <p>Provides details about an auto scaling group.</p>
 */
export interface AwsAutoScalingAutoScalingGroupDetails {
  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The list of load balancers associated with the group.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The service to use for the health checks. Valid values are <code>EC2</code> or <code>ELB</code>.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before it checks the
   *          health status of an EC2 instance that has come into service.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>Indicates when the auto scaling group was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The mixed instances policy for the automatic scaling group.</p>
   */
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;

  /**
   * <p>The list of Availability Zones for the automatic scaling group.</p>
   */
  AvailabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];

  /**
   * <p>The launch template to use.</p>
   */
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;

  /**
   * <p>Indicates whether capacity rebalancing is enabled.
   *       </p>
   */
  CapacityRebalance?: boolean;
}

/**
 * @public
 * <p>Parameters that are used to automatically set up EBS volumes when an instance is launched.</p>
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  /**
   * <p>Whether to delete the volume when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Whether to encrypt the volume.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of input/output (I/O) operations per second (IOPS) to provision for the volume.</p>
   *          <p>Only supported for <code>gp3</code> or <code>io1</code> volumes. Required for <code>io1</code> volumes. Not used with <code>standard</code>, <code>gp2</code>, <code>st1</code>, or <code>sc1</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The snapshot ID of the volume to use.</p>
   *          <p>You must specify either <code>VolumeSize</code> or <code>SnapshotId</code>.</p>
   */
  SnapshotId?: string;

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
   */
  VolumeSize?: number;

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
   */
  VolumeType?: string;
}

/**
 * @public
 * <p>A block device for the instance.</p>
 */
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  /**
   * <p>The device name that is exposed to the EC2 instance. For example, <code>/dev/sdh</code> or <code>xvdh</code>.</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters that are used to automatically set up Amazon EBS volumes when an instance is launched.</p>
   */
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;

  /**
   * <p>Whether to suppress the device that is included in the block device mapping of the Amazon Machine Image (AMI).</p>
   *          <p>If <code>NoDevice</code> is <code>true</code>, then you cannot specify <code>Ebs</code>.></p>
   */
  NoDevice?: boolean;

  /**
   * <p>The name of the virtual device (for example, <code>ephemeral0</code>).</p>
   *          <p>You can provide either <code>VirtualName</code> or <code>Ebs</code>, but not both.</p>
   */
  VirtualName?: string;
}

/**
 * @public
 * <p>Information about the type of monitoring for instances in the group.</p>
 */
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  /**
   * <p>If set to <code>true</code>, then instances in the group launch with detailed
   *          monitoring.</p>
   *          <p>If set to <code>false</code>, then instances in the group launch with basic
   *          monitoring.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>The metadata options for the instances.</p>
 */
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. By default, the metadata endpoint is enabled.</p>
   */
  HttpEndpoint?: string;

  /**
   * <p>The HTTP <code>PUT</code> response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Indicates whether token usage is <code>required</code> or <code>optional</code> for metadata requests. By default, token usage is <code>optional</code>.</p>
   */
  HttpTokens?: string;
}

/**
 * @public
 * <p>Details about a launch configuration.</p>
 */
export interface AwsAutoScalingLaunchConfigurationDetails {
  /**
   * <p>For Auto Scaling groups that run in a VPC, specifies whether to assign a public IP address to the group's instances.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Specifies the block devices for the instance.</p>
   */
  BlockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];

  /**
   * <p>The identifier of a ClassicLink-enabled VPC that EC2-Classic instances are linked to.</p>
   */
  ClassicLinkVpcId?: string;

  /**
   * <p>The identifiers of one or more security groups for the VPC that is specified in <code>ClassicLinkVPCId</code>.</p>
   */
  ClassicLinkVpcSecurityGroups?: string[];

  /**
   * <p>The creation date and time for the launch configuration.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>Whether the launch configuration is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or the ARN of the instance profile associated with the IAM role for the
   *          instance. The instance profile contains the IAM role.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The identifier of the Amazon Machine Image (AMI) that is used to launch EC2
   *          instances.</p>
   */
  ImageId?: string;

  /**
   * <p>Indicates the type of monitoring for instances in the group.</p>
   */
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;

  /**
   * <p>The instance type for the instances.</p>
   */
  InstanceType?: string;

  /**
   * <p>The identifier of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The tenancy of the instance. An instance with <code>dedicated</code> tenancy runs on
   *          isolated, single-tenant hardware and can only be launched into a VPC.</p>
   */
  PlacementTenancy?: string;

  /**
   * <p>The identifier of the RAM disk associated with the AMI.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The security groups to assign to the instances in the Auto Scaling group.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance that is launched to fulfill the
   *          request.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The user data to make available to the launched EC2 instances. Must be base64-encoded
   *          text.</p>
   */
  UserData?: string;

  /**
   * <p>The metadata options for the instances.</p>
   */
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
}

/**
 * @public
 * <p>Provides a list of backup options for each resource type.
 *       </p>
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
   */
  BackupOptions?: Record<string, string>;

  /**
   * <p>The name of a resource type. The only supported resource type is Amazon EC2 instances with Windows VSS.</p>
   *          <p>The only valid value is <code>EC2</code>.</p>
   */
  ResourceType?: string;
}

/**
 * @public
 * <p>Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.
 *       </p>
 */
export interface AwsBackupBackupPlanLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   */
  DeleteAfterDays?: number;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   */
  MoveToColdStorageAfterDays?: number;
}

/**
 * @public
 * <p>An array of <code>CopyAction</code> objects, each of which contains details of the copy operation.
 *       </p>
 */
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup.
   *       </p>
   */
  DestinationBackupVaultArn?: string;

  /**
   * <p>Defines when a protected resource is transitioned to cold storage and when it expires.
   *             Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. If you do not specify a lifecycle, Backup applies
   *          the lifecycle policy of the source backup to the destination backup.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.</p>
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}

/**
 * @public
 * <p>Provides details about an array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.
 *       </p>
 */
export interface AwsBackupBackupPlanRuleDetails {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region  where they are created. They consist of letters, numbers, and hyphens.
   *       </p>
   */
  TargetBackupVault?: string;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully.
   *       </p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A cron expression in UTC specifying when Backup initiates a backup job.
   *       </p>
   */
  ScheduleExpression?: string;

  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters. </p>
   */
  RuleName?: string;

  /**
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of resources.
   *       </p>
   */
  RuleId?: string;

  /**
   * <p>Specifies whether Backup creates continuous backups capable of point-in-time restore (PITR).
   *       </p>
   */
  EnableContinuousBackup?: boolean;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be completed, or it is canceled by Backup.
   *       </p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>An array of <code>CopyAction</code> objects, each of which contains details of the
   *          copy operation. </p>
   */
  CopyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[];

  /**
   * <p>Defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. If you do not specify a lifecycle, Backup applies the lifecycle policy of the source backup to the destination backup.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.</p>
   */
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}

/**
 * @public
 * <p>Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 *       </p>
 */
export interface AwsBackupBackupPlanBackupPlanDetails {
  /**
   * <p>The display name of a backup plan.
   *       </p>
   */
  BackupPlanName?: string;

  /**
   * <p>A list of backup options for each resource type.
   *       </p>
   */
  AdvancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[];

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *       </p>
   */
  BackupPlanRule?: AwsBackupBackupPlanRuleDetails[];
}

/**
 * @public
 * <p>Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 *       </p>
 */
export interface AwsBackupBackupPlanDetails {
  /**
   * <p>Uniquely identifies the backup plan to be associated with the selection of resources.
   *       </p>
   */
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the backup plan.
   *       </p>
   */
  BackupPlanArn?: string;

  /**
   * <p>A unique ID for the backup plan.
   *       </p>
   */
  BackupPlanId?: string;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings. Version IDs cannot be edited.
   *       </p>
   */
  VersionId?: string;
}

/**
 * @public
 * <p>Provides details about the Amazon SNS event notifications for the specified backup vault.
 *       </p>
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
   */
  BackupVaultEvents?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the Amazon SNS topic for
   *          a backup vault's events. </p>
   */
  SnsTopicArn?: string;
}

/**
 * @public
 * <p>Provides details about an Backup backup vault. In Backup, a backup vault is
 * a container that stores and organizes your backups.
 *       </p>
 */
export interface AwsBackupBackupVaultDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *       </p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the
   * Amazon Web Services account used to create them and the Amazon Web Services Region where they are created.
   * They consist of lowercase letters, numbers, and hyphens.
   *       </p>
   */
  BackupVaultName?: string;

  /**
   * <p>The unique ARN associated with the server-side encryption key. You can specify a key to encrypt your backups from services that support
   * full Backup management. If you do not specify a key, Backup creates an KMS key for you by default.
   *       </p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The Amazon SNS event notifications for the specified backup vault.
   *       </p>
   */
  Notifications?: AwsBackupBackupVaultNotificationsDetails;

  /**
   * <p>A resource-based policy that is used to manage access permissions on the target backup vault.
   *       </p>
   */
  AccessPolicy?: string;
}

/**
 * @public
 * <p>Specifies how long in days before a recovery point transitions to cold storage or is deleted.
 *       </p>
 */
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater
   * than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   */
  DeleteAt?: string;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   */
  MoveToColdStorageAt?: string;
}

/**
 * @public
 * <p>Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
 *       </p>
 */
export interface AwsBackupRecoveryPointCreatedByDetails {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan.
   *       </p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Uniquely identifies a backup plan.
   *       </p>
   */
  BackupPlanId?: string;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most
   * 1,024 bytes long. Version IDs cannot be edited.
   *       </p>
   */
  BackupPlanVersion?: string;

  /**
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of resources.
   *       </p>
   */
  BackupRuleId?: string;
}

/**
 * @public
 * <p>Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.
 *       </p>
 */
export interface AwsBackupRecoveryPointLifecycleDetails {
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater
   * than 90 days plus <code>MoveToColdStorageAfterDays</code>.
   *       </p>
   */
  DeleteAfterDays?: number;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.
   *       </p>
   */
  MoveToColdStorageAfterDays?: number;
}

/**
 * @public
 * <p>Contains detailed information about the recovery points stored in an Backup backup vault.
 * A backup, or recovery point, represents the content of a resource at a specified time.
 *       </p>
 */
export interface AwsBackupRecoveryPointDetails {
  /**
   * <p>The size, in bytes, of a backup.
   *       </p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault.
   *       </p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names
   * that are unique to the Amazon Web Services account used to create them and the Amazon Web Services Region
   * where they are created. They consist of lowercase letters, numbers, and hyphens.
   *       </p>
   */
  BackupVaultName?: string;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.
   *       </p>
   */
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and UTC.
   * The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087
   * represents Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   */
  CompletionDate?: string;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   * <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code>
   * of the backup plan that is used to create it.
   *       </p>
   */
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails;

  /**
   * <p>The date and time a recovery point is created, in Unix format and UTC. The value of <code>CreationDate</code>
   * is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   */
  CreationDate?: string;

  /**
   * <p>The ARN for the server-side encryption key that is used to protect your backups.
   *       </p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point
   *       </p>
   */
  IamRoleArn?: string;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   * encrypted, or <code>FALSE</code> if the recovery point is not encrypted.
   *       </p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and UTC. The value of
   * <code>LastRestoreTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents
   * Friday, January 26, 2018 12:11:30.087 AM.
   *       </p>
   */
  LastRestoreTime?: string;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it
   * expires. Backup transitions and expires backups automatically according to the lifecycle that
   * you define
   *       </p>
   */
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails;

  /**
   * <p>An ARN that uniquely identifies a recovery point.
   *       </p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *       </p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point, such as an Amazon EBS volume or an Amazon RDS database.
   *       </p>
   */
  ResourceType?: string;

  /**
   * <p>The ARN for the backup vault where the recovery point was originally copied from. If the recovery
   * point is restored to the same account, this value will be null.
   *       </p>
   */
  SourceBackupVaultArn?: string;

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
   */
  Status?: string;

  /**
   * <p>A message explaining the reason of the recovery point deletion failure.
   *       </p>
   */
  StatusMessage?: string;

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
   */
  StorageClass?: string;
}

/**
 * @public
 * <p>Provides details about the CNAME record that is added to the DNS database for domain
 *          validation.</p>
 */
export interface AwsCertificateManagerCertificateResourceRecord {
  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of resource.</p>
   */
  Type?: string;

  /**
   * <p>The value of the resource.</p>
   */
  Value?: string;
}

/**
 * @public
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
 */
export interface AwsCertificateManagerCertificateDomainValidationOption {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate.</p>
   */
  DomainName?: string;

  /**
   * <p>The CNAME record that is added to the DNS database for domain validation.</p>
   */
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;

  /**
   * <p>The domain name that Certificate Manager uses to send domain validation
   *          emails.</p>
   */
  ValidationDomain?: string;

  /**
   * <p>A list of email addresses that Certificate Manager uses to send domain validation
   *          emails.</p>
   */
  ValidationEmails?: string[];

  /**
   * <p>The method used to validate the domain name.</p>
   */
  ValidationMethod?: string;

  /**
   * <p>The validation status of the domain name.</p>
   */
  ValidationStatus?: string;
}

/**
 * @public
 * <p>Contains information about an extended key usage X.509 v3 extension object.</p>
 */
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * <p>The name of an extension value. Indicates the purpose for which the certificate public
   *          key can be used.</p>
   */
  Name?: string;

  /**
   * <p>An object identifier (OID) for the extension value.</p>
   *          <p>The format is numbers separated by periods.</p>
   */
  OId?: string;
}

/**
 * @public
 * <p>Contains information about a key usage X.509 v3 extension object.</p>
 */
export interface AwsCertificateManagerCertificateKeyUsage {
  /**
   * <p>The key usage extension name.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains other options for the certificate.</p>
 */
export interface AwsCertificateManagerCertificateOptions {
  /**
   * <p>Whether to add the certificate to a transparency log.</p>
   *          <p>Valid values: <code>DISABLED</code> | <code>ENABLED</code>
   *          </p>
   */
  CertificateTransparencyLoggingPreference?: string;
}

/**
 * @public
 * <p>Contains information about the Certificate Manager managed renewal for an
 *             <code>AMAZON_ISSUED</code> certificate.</p>
 */
export interface AwsCertificateManagerCertificateRenewalSummary {
  /**
   * <p>Information about the validation of each domain name in the certificate, as it pertains
   *          to Certificate Manager managed renewal. Provided only when the certificate type is
   *             <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * <p>The status of the Certificate Manager managed renewal of the certificate.</p>
   *          <p>Valid values: <code>PENDING_AUTO_RENEWAL</code> | <code>PENDING_VALIDATION</code> |
   *             <code>SUCCESS</code> | <code>FAILED</code>
   *          </p>
   */
  RenewalStatus?: string;

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
   */
  RenewalStatusReason?: string;

  /**
   * <p>Indicates when the renewal summary was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt?: string;
}

/**
 * @public
 * <p>Provides details about an Certificate Manager certificate.</p>
 */
export interface AwsCertificateManagerCertificateDetails {
  /**
   * <p>The ARN of the private certificate authority (CA) that will be used to issue the
   *          certificate.</p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>Indicates when the certificate was requested.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The fully qualified domain name (FQDN), such as www.example.com, that is secured by the
   *          certificate.</p>
   */
  DomainName?: string;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a
   *          result of the <code>RequestCertificate</code> request.</p>
   *          <p>Only provided if the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies
   *          a purpose for which the certificate public key can be used and consists of a name and an
   *          object identifier (OID).</p>
   */
  ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];

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
   */
  FailureReason?: string;

  /**
   * <p>Indicates when the certificate was imported. Provided if the certificate type is
   *             <code>IMPORTED</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ImportedAt?: string;

  /**
   * <p>The list of ARNs for the Amazon Web Services resources that use the certificate.</p>
   */
  InUseBy?: string[];

  /**
   * <p>Indicates when the certificate was issued. Provided if the certificate type is
   *             <code>AMAZON_ISSUED</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  IssuedAt?: string;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   */
  Issuer?: string;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   *          <p>Valid values: <code>RSA_2048</code> | <code>RSA_1024</code> |<code> RSA_4096</code> |
   *             <code>EC_prime256v1</code> | <code>EC_secp384r1</code> |
   *          <code>EC_secp521r1</code>
   *          </p>
   */
  KeyAlgorithm?: string;

  /**
   * <p>A list of key usage X.509 v3 extension objects.</p>
   */
  KeyUsages?: AwsCertificateManagerCertificateKeyUsage[];

  /**
   * <p>The time after which the certificate becomes invalid.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NotAfter?: string;

  /**
   * <p>The time before which the certificate is not valid.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NotBefore?: string;

  /**
   * <p>Provides a value that specifies whether to add the certificate to a transparency
   *          log.</p>
   */
  Options?: AwsCertificateManagerCertificateOptions;

  /**
   * <p>Whether the certificate is eligible for renewal.</p>
   *          <p>Valid values: <code>ELIGIBLE</code> | <code>INELIGIBLE</code>
   *          </p>
   */
  RenewalEligibility?: string;

  /**
   * <p>Information about the status of the Certificate Manager managed renewal for the
   *          certificate. Provided only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;

  /**
   * <p>The serial number of the certificate.</p>
   */
  Serial?: string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  SignatureAlgorithm?: string;

  /**
   * <p>The status of the certificate.</p>
   *          <p>Valid values: <code>PENDING_VALIDATION</code> | <code>ISSUED</code> |
   *             <code>INACTIVE</code> | <code>EXPIRED</code> | <code>VALIDATION_TIMED_OUT</code> |
   *             <code>REVOKED</code> | <code>FAILED</code>
   *          </p>
   */
  Status?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *          certificate.</p>
   */
  Subject?: string;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This
   *          list contains the domain names that are bound to the public key that is contained in the
   *          certificate.</p>
   *          <p>The subject alternative names include the canonical domain name (CN) of the certificate
   *          and additional domain names that can be used to connect to the website.</p>
   */
  SubjectAlternativeNames?: string[];

  /**
   * <p>The source of the certificate. For certificates that Certificate Manager provides,
   *             <code>Type</code> is <code>AMAZON_ISSUED</code>. For certificates that are imported with
   *             <code>ImportCertificate</code>, <code>Type</code> is <code>IMPORTED</code>.</p>
   *          <p>Valid values: <code>IMPORTED</code> | <code>AMAZON_ISSUED</code> |
   *          <code>PRIVATE</code>
   *          </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about the stack's conformity to its expected template configuration.
 *       </p>
 */
export interface AwsCloudFormationStackDriftInformationDetails {
  /**
   * <p>Status of the stack's actual configuration compared to its expected template configuration.
   *       </p>
   */
  StackDriftStatus?: string;
}

/**
 * @public
 * <p>Provides information about the CloudFormation stack output.
 *       </p>
 */
export interface AwsCloudFormationStackOutputsDetails {
  /**
   * <p>A user-defined description associated with the output.
   *       </p>
   */
  Description?: string;

  /**
   * <p>The key associated with the output.
   *       </p>
   */
  OutputKey?: string;

  /**
   * <p>The value associated with the output.
   *       </p>
   */
  OutputValue?: string;
}

/**
 * @public
 * <p>Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for
 * another stack.</p>
 */
export interface AwsCloudFormationStackDetails {
  /**
   * <p>The capabilities allowed in the stack.
   *       </p>
   */
  Capabilities?: string[];

  /**
   * <p>The time at which the stack was created. </p>
   */
  CreationTime?: string;

  /**
   * <p>A user-defined description associated with the stack.
   *       </p>
   */
  Description?: string;

  /**
   * <p>Boolean to enable or disable rollback on stack creation failures.
   *       </p>
   */
  DisableRollback?: boolean;

  /**
   * <p>Information about whether a stack's actual configuration differs, or has drifted, from its expected
   * configuration, as defined in the stack template and any values specified as template parameters.
   *       </p>
   */
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails;

  /**
   * <p>Whether termination protection is enabled for the stack.
   *       </p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>The time the nested stack was last updated. This field will only be returned if the stack has been
   * updated at least once.</p>
   */
  LastUpdatedTime?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Amazon SNS topic to which stack-related events are published.
   *       </p>
   */
  NotificationArns?: string[];

  /**
   * <p>A list of output structures.
   *       </p>
   */
  Outputs?: AwsCloudFormationStackOutputsDetails[];

  /**
   * <p>The ARN of an IAM role that's associated with the stack.
   *       </p>
   */
  RoleArn?: string;

  /**
   * <p>Unique identifier of the stack.
   *       </p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.
   *       </p>
   */
  StackName?: string;

  /**
   * <p>Current status of the stack.
   *       </p>
   */
  StackStatus?: string;

  /**
   * <p>Success or failure message associated with the stack status.
   *       </p>
   */
  StackStatusReason?: string;

  /**
   * <p>The length of time, in minutes, that CloudFormation waits for the nested stack to reach
   * the <code>CREATE_COMPLETE</code> state.
   *       </p>
   */
  TimeoutInMinutes?: number;
}

/**
 * @public
 * <p>Information about a cache behavior for the distribution.</p>
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
   */
  ViewerProtocolPolicy?: string;
}

/**
 * @public
 * <p>Provides information about caching for the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionCacheBehaviors {
  /**
   * <p>The cache behaviors for the distribution.</p>
   */
  Items?: AwsCloudFrontDistributionCacheBehavior[];
}

/**
 * @public
 * <p>Contains information about the default cache configuration for the CloudFront distribution.</p>
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
   */
  ViewerProtocolPolicy?: string;
}

/**
 * @public
 * <p>A complex type that controls whether access logs are written for the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionLogging {
  /**
   * <p>The S3 bucket to store the access logs in.</p>
   */
  Bucket?: string;

  /**
   * <p>With this field, you can enable or disable the selected distribution.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs.</p>
   */
  IncludeCookies?: boolean;

  /**
   * <p>An optional string that you want CloudFront to use as a prefix to the access log
   *          filenames for this distribution.</p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>The status codes that cause an origin group to fail over.</p>
 */
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * <p>The list of status code values that can cause a failover to the next origin.</p>
   */
  Items?: number[];

  /**
   * <p>The number of status codes that can cause a failover.</p>
   */
  Quantity?: number;
}

/**
 * @public
 * <p>Provides information about when an origin group fails over.</p>
 */
export interface AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * <p>Information about the status codes that cause an origin group to fail over.</p>
   */
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}

/**
 * @public
 * <p>Information about an origin group for the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOriginGroup {
  /**
   * <p>Provides the criteria for an origin group to fail over.</p>
   */
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}

/**
 * @public
 * <p>Provides information about origin groups that are associated with the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOriginGroups {
  /**
   * <p>The list of origin groups.</p>
   */
  Items?: AwsCloudFrontDistributionOriginGroup[];
}

/**
 * @public
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use
 * when establishing an HTTPS connection with your origin.
 *       </p>
 */
export interface AwsCloudFrontDistributionOriginSslProtocols {
  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.
   *       </p>
   */
  Items?: string[];

  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing
   * an HTTPS connection with this origin.
   *       </p>
   */
  Quantity?: number;
}

/**
 * @public
 * <p>A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with
 *             static website hosting</a> is a custom origin. </p>
 */
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  /**
   * <p>The HTTP port that CloudFront uses to connect to the origin.
   *       </p>
   */
  HttpPort?: number;

  /**
   * <p>The HTTPS port that CloudFront uses to connect to the origin.
   *       </p>
   */
  HttpsPort?: number;

  /**
   * <p>Specifies how long, in seconds, CloudFront persists its connection to the origin.
   *       </p>
   */
  OriginKeepaliveTimeout?: number;

  /**
   * <p>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin.
   *       </p>
   */
  OriginProtocolPolicy?: string;

  /**
   * <p>Specifies how long, in seconds, CloudFront waits for a response from the origin.
   *       </p>
   */
  OriginReadTimeout?: number;

  /**
   * <p>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS.
   *       </p>
   */
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
}

/**
 * @public
 * <p>Information about an origin that is an Amazon S3 bucket that is not configured with static website
 *          hosting.</p>
 */
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * <p>The CloudFront origin access identity to associate with the origin.</p>
   */
  OriginAccessIdentity?: string;
}

/**
 * @public
 * <p>A complex type that describes the
 *             Amazon S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.</p>
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * <p>Amazon S3 origins: The DNS name of the S3 bucket from which you want
   *             CloudFront to get objects for this origin.</p>
   */
  DomainName?: string;

  /**
   * <p>A unique identifier for the origin or origin group.</p>
   */
  Id?: string;

  /**
   * <p>An optional element that causes CloudFront to request your content from a
   *          directory in your Amazon S3 bucket or your custom origin.</p>
   */
  OriginPath?: string;

  /**
   * <p>An origin that is an S3 bucket that is not configured with static website
   *          hosting.</p>
   */
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;

  /**
   * <p>An origin that is not an Amazon S3 bucket, with one exception.
   * If the Amazon S3 bucket is configured with static website hosting, use this attribute.
   * If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.
   *       </p>
   */
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
}

/**
 * @public
 * <p>A complex type that contains information about origins and origin groups for this CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOrigins {
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items?: AwsCloudFrontDistributionOriginItem[];
}

/**
 * @public
 * <p>Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers.</p>
 */
export interface AwsCloudFrontDistributionViewerCertificate {
  /**
   * <p>The ARN of the ACM certificate. Used if the certificate is stored in ACM. If you provide an ACM certificate ARN, you must also provide <code>MinimumCertificateVersion</code> and <code>SslSupportMethod</code>.</p>
   */
  AcmCertificateArn?: string;

  /**
   * <p>The identifier of the certificate. Note that in CloudFront, this attribute is deprecated.</p>
   */
  Certificate?: string;

  /**
   * <p>The source of the certificate identified by <code>Certificate</code>. Note that in CloudFront, this attribute is deprecated.</p>
   */
  CertificateSource?: string;

  /**
   * <p>Whether the distribution uses the CloudFront domain name. If set to <code>false</code>, then you provide either <code>AcmCertificateArn</code> or <code>IamCertificateId</code>.</p>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>The identifier of the IAM certificate. Used if the certificate is stored in IAM. If you provide <code>IamCertificateId</code>, then you also must provide <code>MinimumProtocolVersion</code> and <code>SslSupportMethod</code>.</p>
   */
  IamCertificateId?: string;

  /**
   * <p>The security policy that CloudFront uses for HTTPS connections with viewers. If <code>SslSupportMethod</code> is <code>sni-only</code>, then <code>MinimumProtocolVersion</code> must be <code>TLSv1</code> or higher.</p>
   */
  MinimumProtocolVersion?: string;

  /**
   * <p>The viewers that the distribution accepts HTTPS connections from.</p>
   */
  SslSupportMethod?: string;
}

/**
 * @public
 * <p>A CloudFront distribution configuration.</p>
 */
export interface AwsCloudFrontDistributionDetails {
  /**
   * <p>Provides information about the cache configuration for the distribution.</p>
   */
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;

  /**
   * <p>The default cache behavior for the configuration.</p>
   */
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;

  /**
   * <p>The object that CloudFront sends in response to requests from the origin (for example,
   *          index.html) when a viewer requests the root URL for the distribution
   *          (http://www.example.com) instead of an object in your distribution
   *          (http://www.example.com/product-description.html). </p>
   */
  DefaultRootObject?: string;

  /**
   * <p>The domain name corresponding to the distribution.</p>
   */
  DomainName?: string;

  /**
   * <p>The entity tag is a hash of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Indicates when that the distribution was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModifiedTime?: string;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p>
   */
  Logging?: AwsCloudFrontDistributionLogging;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins?: AwsCloudFrontDistributionOrigins;

  /**
   * <p>Provides information about the origin groups in the distribution.</p>
   */
  OriginGroups?: AwsCloudFrontDistributionOriginGroups;

  /**
   * <p>Provides information about the TLS/SSL configuration that the distribution uses to communicate with viewers.</p>
   */
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate;

  /**
   * <p>Indicates the current status of the distribution.</p>
   */
  Status?: string;

  /**
   * <p>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution.</p>
   */
  WebAclId?: string;
}

/**
 * @public
 * <p>Provides details about a CloudTrail trail.</p>
 */
export interface AwsCloudTrailTrailDetails {
  /**
   * <p>The ARN of the log group that CloudTrail logs are delivered to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>The ARN of the role that the CloudWatch Events endpoint assumes when it writes to the log
   *          group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Indicates whether the trail has custom event selectors.</p>
   */
  HasCustomEventSelectors?: boolean;

  /**
   * <p>The Region where the trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * <p>Indicates whether the trail publishes events from global services such as IAM to the log
   *          files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Indicates whether the trail applies only to the current Region or to all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Whether the trail is created for all accounts in an organization in Organizations,
   *          or only for the current Amazon Web Services account.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>The KMS key ID to use to encrypt the logs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Indicates whether CloudTrail log file validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>The name of the trail.</p>
   */
  Name?: string;

  /**
   * <p>The name of the S3 bucket where the log files are published.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key prefix. The key prefix is added after the name of the S3 bucket where the log
   *          files are published.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The ARN of the SNS topic that is used for notifications of log file delivery.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The name of the SNS topic that is used for notifications of log file delivery.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>The ARN of the trail.</p>
   */
  TrailArn?: string;
}

/**
 * @public
 * <p>Details about the dimensions for the metric associated with the alarm.
 *       </p>
 */
export interface AwsCloudWatchAlarmDimensionsDetails {
  /**
   * <p>The name of a dimension.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The value of a dimension.
   *       </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies an alarm and associates it with the specified metric or metric math expression.
 *       </p>
 */
export interface AwsCloudWatchAlarmDetails {
  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state.
   *       </p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The list of actions, specified as Amazon Resource Names (ARNs) to execute when this alarm transitions into an <code>ALARM</code> state from any other
   *          state. </p>
   */
  AlarmActions?: string[];

  /**
   * <p>The ARN of the alarm.
   *       </p>
   */
  AlarmArn?: string;

  /**
   * <p>The time stamp of the last update to the alarm configuration.
   *       </p>
   */
  AlarmConfigurationUpdatedTimestamp?: string;

  /**
   * <p>The description of the alarm.
   *       </p>
   */
  AlarmDescription?: string;

  /**
   * <p>The name of the alarm. If you don't specify a name, CloudFront generates a unique physical ID
   * and uses that ID for the alarm name.
   *       </p>
   */
  AlarmName?: string;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic and threshold. The specified
   * statistic value is used as the first operand.
   *       </p>
   */
  ComparisonOperator?: string;

  /**
   * <p>The number of datapoints that must be breaching to trigger the alarm.
   *       </p>
   */
  DatapointsToAlarm?: number;

  /**
   * <p>The dimensions for the metric associated with the alarm.
   *       </p>
   */
  Dimensions?: AwsCloudWatchAlarmDimensionsDetails[];

  /**
   * <p>Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change during
   * periods with too few data points to be statistically significant. If <code>evaluate</code> or this parameter is not used,
   * the alarm is always evaluated and possibly changes state no matter how many data points are available.
   *       </p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.
   *       </p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The percentile statistic for the metric associated with the alarm.
   *       </p>
   */
  ExtendedStatistic?: string;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from
   * any other state. Each action is specified as an ARN.
   *       </p>
   */
  InsufficientDataActions?: string[];

  /**
   * <p>The name of the metric associated with the alarm. This is required for an alarm based on a metric.
   * For an alarm based on a math expression, you use <code>Metrics</code> instead and you can't specify <code>MetricName</code>.
   *       </p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the metric associated with the alarm. This is required for an alarm based on a
   * metric. For an alarm based on a math expression, you can't specify <code>Namespace</code> and you use
   * <code>Metrics</code> instead.
   *       </p>
   */
  Namespace?: string;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state from any other state.
   * Each action is specified as an ARN.
   *       </p>
   */
  OkActions?: string[];

  /**
   * <p>The period, in seconds, over which the statistic is applied. This is required for an alarm based on a
   * metric.
   *       </p>
   */
  Period?: number;

  /**
   * <p>The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>.</p>
   *          <p>For an alarm based on a metric, you must specify either <code>Statistic</code> or <code>ExtendedStatistic</code> but not both.</p>
   *          <p>For an alarm based on a math expression, you can't specify <code>Statistic</code>. Instead, you use <code>Metrics</code>.</p>
   */
  Statistic?: string;

  /**
   * <p>The value to compare with the specified statistic.
   *       </p>
   */
  Threshold?: number;

  /**
   * <p>n an alarm based on an anomaly detection model, this is the ID of the <code>ANOMALY_DETECTION_BAND</code> function used as the threshold for the alarm.
   *       </p>
   */
  ThresholdMetricId?: string;

  /**
   * <p>Sets how this alarm is to handle missing data points.
   *       </p>
   */
  TreatMissingData?: string;

  /**
   * <p>The unit of the metric associated with the alarm.
   *       </p>
   */
  Unit?: string;
}

/**
 * @public
 * <p>Information about the build artifacts for the CodeBuild project.</p>
 */
export interface AwsCodeBuildProjectArtifactsDetails {
  /**
   * <p>An identifier for the artifact definition.</p>
   */
  ArtifactIdentifier?: string;

  /**
   * <p>Indicates whether to disable encryption on the artifact. Only valid when <code>Type</code> is <code>S3</code>.</p>
   */
  EncryptionDisabled?: boolean;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The name of the S3 bucket where the artifact is located.</p>
   */
  Location?: string;

  /**
   * <p>Only used when Type is S3. The name of the artifact. Used with <code>NamepaceType</code> and <code>Path</code> to determine the pattern for storing the artifact.</p>
   */
  Name?: string;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The value to use for the namespace. Used with <code>Name</code> and <code>Path</code> to determine the pattern for storing the artifact.</p>
   */
  NamespaceType?: string;

  /**
   * <p>Whether the name specified in the buildspec file overrides the artifact name.</p>
   */
  OverrideArtifactName?: boolean;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The type of output artifact to create.</p>
   */
  Packaging?: string;

  /**
   * <p>Only used when <code>Type</code> is <code>S3</code>. The path to the artifact. Used with <code>Name</code> and <code>NamespaceType</code> to determine the pattern for storing the artifact.</p>
   */
  Path?: string;

  /**
   * <p>The type of build artifact.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about an environment variable that is available to builds for the build project.</p>
 */
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  /**
   * <p>The name of the environment variable.</p>
   */
  Name?: string;

  /**
   * <p>The type of environment variable.</p>
   */
  Type?: string;

  /**
   * <p>The value of the environment variable.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The credentials for access to a private registry.</p>
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * <p>The ARN or name of credentials created using Secrets Manager.</p>
   *          <note>
   *             <p>The credential can use the name of the credentials only if they exist in your current
   *             Amazon Web Services Region. </p>
   *          </note>
   */
  Credential?: string;

  /**
   * <p>The service that created the credentials to access a private Docker registry.</p>
   *          <p>The valid value,<code> SECRETS_MANAGER</code>, is for Secrets Manager.</p>
   */
  CredentialProvider?: string;
}

/**
 * @public
 * <p>Information about the build environment for this build project.</p>
 */
export interface AwsCodeBuildProjectEnvironment {
  /**
   * <p>The certificate to use with this build project.</p>
   */
  Certificate?: string;

  /**
   * <p>A set of environment variables to make available to builds for the build project.</p>
   */
  EnvironmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];

  /**
   * <p>Whether to allow the Docker daemon to run inside a Docker container. Set to <code>true</code> if the build project is used to build Docker images.</p>
   */
  PrivilegedMode?: boolean;

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
   */
  ImagePullCredentialsType?: string;

  /**
   * <p>The credentials for access to a private registry.</p>
   */
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;

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
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about CloudWatch Logs for the build project.</p>
 */
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  /**
   * <p>The group name of the logs in CloudWatch Logs.</p>
   */
  GroupName?: string;

  /**
   * <p>The current status of the logs in CloudWatch Logs for a build project.</p>
   */
  Status?: string;

  /**
   * <p>The prefix of the stream name of the CloudWatch Logs.</p>
   */
  StreamName?: string;
}

/**
 * @public
 * <p>Information about logs built to an S3 bucket for a build project.</p>
 */
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  /**
   * <p>Whether to disable encryption of the S3 build log output.</p>
   */
  EncryptionDisabled?: boolean;

  /**
   * <p>The ARN of the S3 bucket and the path prefix for S3 logs.</p>
   */
  Location?: string;

  /**
   * <p>The current status of the S3 build logs.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Information about logs for the build project.</p>
 */
export interface AwsCodeBuildProjectLogsConfigDetails {
  /**
   * <p>Information about CloudWatch Logs for the build project.</p>
   */
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;

  /**
   * <p>Information about logs built to an S3 bucket for a build project.</p>
   */
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
}

/**
 * @public
 * <p>Information about the build input source code for this build project.</p>
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
   */
  Type?: string;

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
   */
  Location?: string;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   */
  GitCloneDepth?: number;

  /**
   * <p>Whether to ignore SSL warnings while connecting to the project source code.</p>
   */
  InsecureSsl?: boolean;
}

/**
 * @public
 * <p>Information about the VPC configuration that CodeBuild accesses.</p>
 */
export interface AwsCodeBuildProjectVpcConfig {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  Subnets?: string[];

  /**
   * <p>A list of one or more security group IDs in your VPC.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>Information about an CodeBuild project.</p>
 */
export interface AwsCodeBuildProjectDetails {
  /**
   * <p>The KMS key used to encrypt the
   *          build output artifacts.</p>
   *          <p>You can specify either the ARN of the KMS key or, if available, the
   *          KMS key alias (using the format alias/alias-name). </p>
   */
  EncryptionKey?: string;

  /**
   * <p>Information about the build artifacts for the CodeBuild project.</p>
   */
  Artifacts?: AwsCodeBuildProjectArtifactsDetails[];

  /**
   * <p>Information about the build environment for this build project.</p>
   */
  Environment?: AwsCodeBuildProjectEnvironment;

  /**
   * <p>The name of the build project.</p>
   */
  Name?: string;

  /**
   * <p>Information about the build input source code for this build project.</p>
   */
  Source?: AwsCodeBuildProjectSource;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services
   *          services on behalf of the Amazon Web Services account.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Information about logs for the build project.</p>
   */
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   */
  VpcConfig?: AwsCodeBuildProjectVpcConfig;

  /**
   * <p>Information about the secondary artifacts for the CodeBuild project.</p>
   */
  SecondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[];
}

/**
 * @public
 * <p>Contains a definition of an attribute for the table.</p>
 */
export interface AwsDynamoDbTableAttributeDefinition {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of the attribute.</p>
   */
  AttributeType?: string;
}

/**
 * @public
 * <p>Provides information about the billing for read/write capacity on the table.</p>
 */
export interface AwsDynamoDbTableBillingModeSummary {
  /**
   * <p>The method used to charge for read and write throughput and to manage capacity.</p>
   */
  BillingMode?: string;

  /**
   * <p>If the billing mode is <code>PAY_PER_REQUEST</code>, indicates when the billing mode was
   *          set to that value.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastUpdateToPayPerRequestDateTime?: string;
}

/**
 * @public
 * <p>A component of the key schema for the DynamoDB table, a global secondary index, or a
 *          local secondary index.</p>
 */
export interface AwsDynamoDbTableKeySchema {
  /**
   * <p>The name of the key schema attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of key used for the key schema attribute. Valid values are <code>HASH</code> or <code>RANGE</code>.</p>
   */
  KeyType?: string;
}

/**
 * @public
 * <p>For global and local secondary indexes, identifies the attributes that are copied from
 *          the table into the index.</p>
 */
export interface AwsDynamoDbTableProjection {
  /**
   * <p>The nonkey attributes that are projected into the index. For each attribute, provide the
   *          attribute name.</p>
   */
  NonKeyAttributes?: string[];

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
   */
  ProjectionType?: string;
}

/**
 * @public
 * <p>Information about the provisioned throughput for the table or for a global secondary
 *          index.</p>
 */
export interface AwsDynamoDbTableProvisionedThroughput {
  /**
   * <p>Indicates when the provisioned throughput was last decreased.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastDecreaseDateTime?: string;

  /**
   * <p>Indicates when the provisioned throughput was last increased.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastIncreaseDateTime?: string;

  /**
   * <p>The number of times during the current UTC calendar day that the provisioned throughput
   *          was decreased.</p>
   */
  NumberOfDecreasesToday?: number;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB
   *          returns a <code>ThrottlingException</code>.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a
   *             <code>ThrottlingException</code>.</p>
   */
  WriteCapacityUnits?: number;
}

/**
 * @public
 * <p>Information abut a global secondary index for the table.</p>
 */
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * <p>Whether the index is currently backfilling.</p>
   */
  Backfilling?: boolean;

  /**
   * <p>The ARN of the index.</p>
   */
  IndexArn?: string;

  /**
   * <p>The name of the index.</p>
   */
  IndexName?: string;

  /**
   * <p>The total size in bytes of the index.</p>
   */
  IndexSizeBytes?: number;

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
   */
  IndexStatus?: string;

  /**
   * <p>The number of items in the index.</p>
   */
  ItemCount?: number;

  /**
   * <p>The key schema for the index.</p>
   */
  KeySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * <p>Attributes that are copied from the table into an index.</p>
   */
  Projection?: AwsDynamoDbTableProjection;

  /**
   * <p>Information about the provisioned throughput settings for the indexes.</p>
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}

/**
 * @public
 * <p>Information about a local secondary index for a DynamoDB table.</p>
 */
export interface AwsDynamoDbTableLocalSecondaryIndex {
  /**
   * <p>The ARN of the index.</p>
   */
  IndexArn?: string;

  /**
   * <p>The name of the index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for the index.</p>
   */
  KeySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * <p>Attributes that are copied from the table into the index. These are in addition to the
   *          primary key attributes and index key attributes, which are automatically projected.</p>
   */
  Projection?: AwsDynamoDbTableProjection;
}

/**
 * @public
 * <p>Replica-specific configuration for the provisioned throughput.</p>
 */
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * <p>The read capacity units for the replica.</p>
   */
  ReadCapacityUnits?: number;
}

/**
 * @public
 * <p>Information about a global secondary index for a DynamoDB table replica.</p>
 */
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * <p>The name of the index.</p>
   */
  IndexName?: string;

  /**
   * <p>Replica-specific configuration for the provisioned throughput for the index.</p>
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}

/**
 * @public
 * <p>Information about a replica of a DynamoDB table.</p>
 */
export interface AwsDynamoDbTableReplica {
  /**
   * <p>List of global secondary indexes for the replica.</p>
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  /**
   * <p>The identifier of the KMS key that will be used for KMS
   *          encryption for the replica.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Replica-specific configuration for the provisioned throughput.</p>
   */
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;

  /**
   * <p>The name of the Region where the replica is located.</p>
   */
  RegionName?: string;

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
   */
  ReplicaStatus?: string;

  /**
   * <p>Detailed information about the replica status.</p>
   */
  ReplicaStatusDescription?: string;
}

/**
 * @public
 * <p>Information about the restore for the table.</p>
 */
export interface AwsDynamoDbTableRestoreSummary {
  /**
   * <p>The ARN of the source backup from which the table was restored.</p>
   */
  SourceBackupArn?: string;

  /**
   * <p>The ARN of the source table for the backup.</p>
   */
  SourceTableArn?: string;

  /**
   * <p>Indicates the point in time that the table was restored to.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  RestoreDateTime?: string;

  /**
   * <p>Whether a restore is currently in progress.</p>
   */
  RestoreInProgress?: boolean;
}

/**
 * @public
 * <p>Information about the server-side encryption for the table.</p>
 */
export interface AwsDynamoDbTableSseDescription {
  /**
   * <p>If the key is inaccessible, the date and time when DynamoDB detected that the key was
   *          inaccessible.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InaccessibleEncryptionDateTime?: string;

  /**
   * <p>The status of the server-side encryption.</p>
   */
  Status?: string;

  /**
   * <p>The type of server-side encryption.</p>
   */
  SseType?: string;

  /**
   * <p>The ARN of the KMS key that is used for the KMS
   *          encryption.</p>
   */
  KmsMasterKeyArn?: string;
}

/**
 * @public
 * <p>The current DynamoDB Streams configuration for the table.</p>
 */
export interface AwsDynamoDbTableStreamSpecification {
  /**
   * <p>Indicates whether DynamoDB Streams is enabled on the table.</p>
   */
  StreamEnabled?: boolean;

  /**
   * <p>Determines the information that is written to the table.</p>
   */
  StreamViewType?: string;
}

/**
 * @public
 * <p>Provides details about a DynamoDB table.</p>
 */
export interface AwsDynamoDbTableDetails {
  /**
   * <p>A list of attribute definitions for the table.</p>
   */
  AttributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];

  /**
   * <p>Information about the billing for read/write capacity on the table.</p>
   */
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;

  /**
   * <p>Indicates when the table was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDateTime?: string;

  /**
   * <p>List of global secondary indexes for the table.</p>
   */
  GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];

  /**
   * <p>The version of global tables being used.</p>
   */
  GlobalTableVersion?: string;

  /**
   * <p>The number of items in the table.</p>
   */
  ItemCount?: number;

  /**
   * <p>The primary key structure for the table.</p>
   */
  KeySchema?: AwsDynamoDbTableKeySchema[];

  /**
   * <p>The ARN of the latest stream for the table.</p>
   */
  LatestStreamArn?: string;

  /**
   * <p>The label of the latest stream. The label is not a unique identifier.</p>
   */
  LatestStreamLabel?: string;

  /**
   * <p>The list of local secondary indexes for the table.</p>
   */
  LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];

  /**
   * <p>Information about the provisioned throughput for the table.</p>
   */
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;

  /**
   * <p>The list of replicas of this table.</p>
   */
  Replicas?: AwsDynamoDbTableReplica[];

  /**
   * <p>Information about the restore for the table.</p>
   */
  RestoreSummary?: AwsDynamoDbTableRestoreSummary;

  /**
   * <p>Information about the server-side encryption for the table.</p>
   */
  SseDescription?: AwsDynamoDbTableSseDescription;

  /**
   * <p>The current DynamoDB Streams configuration for the table.</p>
   */
  StreamSpecification?: AwsDynamoDbTableStreamSpecification;

  /**
   * <p>The identifier of the table.</p>
   */
  TableId?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The total size of the table in bytes.</p>
   */
  TableSizeBytes?: number;

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
   */
  TableStatus?: string;
}

/**
 * @public
 * <p>Information about an Elastic IP address.</p>
 */
export interface AwsEc2EipDetails {
  /**
   * <p>The identifier of the EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A public IP address that is associated with the EC2 instance.</p>
   */
  PublicIp?: string;

  /**
   * <p>The identifier that Amazon Web Services assigns to represent the allocation of the Elastic IP address
   *          for use with Amazon VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The identifier that represents the association of the Elastic IP address with an EC2
   *          instance.</p>
   */
  AssociationId?: string;

  /**
   * <p>The domain in which to allocate the address.</p>
   *          <p>If the address is for use with EC2 instances in a VPC, then <code>Domain</code> is
   *             <code>vpc</code>. Otherwise, <code>Domain</code> is <code>standard</code>. </p>
   */
  Domain?: string;

  /**
   * <p>The identifier of an IP address pool. This parameter allows Amazon EC2 to select an IP
   *          address from the address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The name of the location from which the Elastic IP address is advertised.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The identifier of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   */
  NetworkInterfaceOwnerId?: string;

  /**
   * <p>The private IP address that is associated with the Elastic IP address.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>Metadata options that allow you to configure and secure the Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceMetadataOptions {
  /**
   * <p>Enables or disables the HTTP metadata endpoint on the instance.
   *       </p>
   */
  HttpEndpoint?: string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.
   *       </p>
   */
  HttpProtocolIpv6?: string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests.
   *          The larger the number, the further instance metadata requests can travel.
   *       </p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>The state of token usage for your instance metadata requests.
   *       </p>
   */
  HttpTokens?: string;

  /**
   * <p>Specifies whether to allow access to instance tags from the instance metadata.
   *       </p>
   */
  InstanceMetadataTags?: string;
}

/**
 * @public
 * <p>
 *          The type of monitoring that’s turned on for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2InstanceMonitoringDetails {
  /**
   * <p>
   *          Indicates whether detailed monitoring is turned on. Otherwise, basic monitoring is turned on.
   *       </p>
   */
  State?: string;
}

/**
 * @public
 * <p>Identifies a network interface for the Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceNetworkInterfacesDetails {
  /**
   * <p>The identifier of the network interface. The details are in a corresponding <code>AwsEc2NetworkInterfacesDetails</code> object.</p>
   */
  NetworkInterfaceId?: string;
}

/**
 * @public
 * <p>The details of an Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceDetails {
  /**
   * <p>The instance type of the instance. </p>
   */
  Type?: string;

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  IpV4Addresses?: string[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  IpV6Addresses?: string[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  KeyName?: string;

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  IamInstanceProfileArn?: string;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  VpcId?: string;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  SubnetId?: string;

  /**
   * <p>Indicates when the instance was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The identifiers of the network interfaces for the EC2 instance. The details for each network interface are in a corresponding <code>AwsEc2NetworkInterfacesDetails</code> object.</p>
   */
  NetworkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];

  /**
   * <p>The virtualization type of the Amazon Machine Image (AMI) required to launch the instance.
   *       </p>
   */
  VirtualizationType?: string;

  /**
   * <p>Details about the metadata options for the Amazon EC2 instance.
   *       </p>
   */
  MetadataOptions?: AwsEc2InstanceMetadataOptions;

  /**
   * <p>
   *          Describes the type of monitoring that’s turned on for an instance.
   *       </p>
   */
  Monitoring?: AwsEc2InstanceMonitoringDetails;
}

/**
 * @public
 * <p>
 *          Parameters for a block device for an Amazon Elastic Block Store (Amazon EBS) volume in an Amazon EC2 launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  /**
   * <p>
   *          Indicates whether the EBS volume is deleted on instance termination.
   *       </p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>
   *          Indicates whether the EBS volume is encrypted. Encrypted volumes can only be
   *          attached to instances that support Amazon EBS encryption. If you're creating a
   *          volume from a snapshot, you can't specify an encryption value.
   *       </p>
   */
  Encrypted?: boolean;

  /**
   * <p>
   *          The number of I/O operations per second (IOPS).
   *       </p>
   */
  Iops?: number;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the symmetric Key Management Service (KMS) customer managed key
   *          used for encryption.
   *       </p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *          The ID of the EBS snapshot.
   *       </p>
   */
  SnapshotId?: string;

  /**
   * <p>
   *          The throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
   *       </p>
   */
  Throughput?: number;

  /**
   * <p>
   *          The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       </p>
   */
  VolumeSize?: number;

  /**
   * <p>
   *          The volume type.
   *       </p>
   */
  VolumeType?: string;
}

/**
 * @public
 * <p>
 *          Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  /**
   * <p>
   *          The device name.
   *       </p>
   */
  DeviceName?: string;

  /**
   * <p>
   *          Parameters used to automatically set up Amazon EBS volumes when the instance is
   *          launched.
   *       </p>
   */
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;

  /**
   * <p>
   *          Omits the device from the block device mapping when an empty string is specified.
   *       </p>
   */
  NoDevice?: string;

  /**
   * <p>
   *          The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *          from 0. An instance type with 2 available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store volumes depends
   *          on the instance type.
   *       </p>
   */
  VirtualName?: string;
}

/**
 * @public
 * <p>
 *          Information about the target Capacity Reservation or Capacity Reservation group in which to run an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  /**
   * <p>
   *          The ID of the Capacity Reservation in which to run the instance.
   *       </p>
   */
  CapacityReservationId?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the Capacity Reservation resource group in which to run the instance.
   *       </p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * @public
 * <p>
 *          Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  /**
   * <p>
   *          Indicates the instance's Capacity Reservation preferences. If equal to <code>open</code>, the instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). If equal to <code>none</code>, the instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   *       </p>
   */
  CapacityReservationPreference?: string;

  /**
   * <p>
   *          Specifies a target Capacity Reservation.
   *       </p>
   */
  CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
}

/**
 * @public
 * <p>
 *          Specifies the CPU options for an Amazon EC2 instance. For more information, see
 *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  /**
   * <p>
   *          The number of CPU cores for the instance.
   *       </p>
   */
  CoreCount?: number;

  /**
   * <p>
   *          The number of threads per CPU core. A value of <code>1</code> disables multithreading for the instance,
   *          The default value is <code>2</code>.
   *       </p>
   */
  ThreadsPerCore?: number;
}

/**
 * @public
 * <p>
 *          Specifies the credit option for CPU usage of a T2, T3, or T3a Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  /**
   * <p>
   *          The credit option for CPU usage of a T instance.
   *       </p>
   */
  CpuCredits?: string;
}

/**
 * @public
 * <p>
 *          Provides details about an Elastic Graphics specification for an Amazon EC2 launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  /**
   * <p>
   *          The type of Elastic Graphics accelerator.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>
 *          Provides details for an Amazon Elastic Inference accelerator.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  /**
   * <p>
   *          The number of Elastic Inference accelerators to attach to the instance.
   *       </p>
   */
  Count?: number;

  /**
   * <p>
   *          The type of Elastic Inference accelerator.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>
 *          Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  /**
   * <p>
   *          If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves.
   *       </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *          Specifies whether your Amazon EC2 instance is configured for hibernation.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  /**
   * <p>
   *          If you set this parameter to <code>true</code>, the instance is enabled for hibernation.
   *       </p>
   */
  Configured?: boolean;
}

/**
 * @public
 * <p>
 *          Provides details for an Identity and Access Management (IAM) instance profile, which is a container for an IAM role for your instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the instance profile.
   *       </p>
   */
  Arn?: string;

  /**
   * <p>
   *          The name of the instance profile.
   *       </p>
   */
  Name?: string;
}

/**
 * @public
 * <p>
 *          Provides details about the market (purchasing) options for Spot Instances.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  /**
   * <p>
   *          Deprecated.
   *       </p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>
   *          The behavior when a Spot Instance is interrupted.
   *       </p>
   */
  InstanceInterruptionBehavior?: string;

  /**
   * <p>
   *          The maximum hourly price you're willing to pay for the Spot Instances.
   *       </p>
   */
  MaxPrice?: string;

  /**
   * <p>
   *          The Spot Instance request type.
   *       </p>
   */
  SpotInstanceType?: string;

  /**
   * <p>
   *          The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ), for persistent requests.
   *       </p>
   */
  ValidUntil?: string;
}

/**
 * @public
 * <p>
 *          Provides details about the market (purchasing) option for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  /**
   * <p>
   *          The market type.
   *       </p>
   */
  MarketType?: string;

  /**
   * <p>
   *          The options for Spot Instances.
   *       </p>
   */
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
}

/**
 * @public
 * <p>
 *          The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  /**
   * <p>
   *          The maximum number of accelerators. If this parameter isn't specified, there's no maximum limit. To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum number of accelerators. If this parameter isn't specified, there's no minimum limit.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum amount of memory, in MiB, for the accelerators on an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  /**
   * <p>
   *          The maximum amount of memory, in MiB. If this parameter isn't specified, there's no maximum limit.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum amount of memory, in MiB. If <code>0</code> is specified, there's no maximum limit.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum baseline bandwidth to Amazon Elastic Block Store (Amazon EBS), in Mbps. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances </a> in the <i>Amazon EC2 User Guide</i>.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  /**
   * <p>
   *          The maximum baseline bandwidth, in Mbps. If this parameter is omitted, there's no maximum limit.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum baseline bandwidth, in Mbps. If this parameter is omitted, there's no minimum limit.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum amount of memory per vCPU, in GiB.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  /**
   * <p>
   *          The maximum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum amount of memory per vCPU, in GiB. If this parameter is omitted, there's no maximum limit.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum amount of memory, in MiB, for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  /**
   * <p>
   *          The maximum amount of memory, in MiB.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum amount of memory, in MiB.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum number of network interfaces to be attached to an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  /**
   * <p>
   *          The maximum number of network interfaces.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum number of network interfaces.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum amount of total local storage, in GB, that an Amazon EC2 instance uses.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  /**
   * <p>
   *          The maximum amount of total local storage, in GB.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum amount of total local storage, in GB.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The minimum and maximum number of vCPUs for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  /**
   * <p>
   *          The maximum number of vCPUs.
   *       </p>
   */
  Max?: number;

  /**
   * <p>
   *          The minimum number of vCPUs.
   *       </p>
   */
  Min?: number;
}

/**
 * @public
 * <p>
 *          The attributes for the Amazon EC2 instance types.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  /**
   * <p>
   *          The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
   *       </p>
   */
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.
   *       </p>
   */
  AcceleratorManufacturers?: string[];

  /**
   * <p>
   *          The accelerators that must be on the instance type.
   *       </p>
   */
  AcceleratorNames?: string[];

  /**
   * <p>
   *          The minimum and maximum amount of total accelerator memory, in MiB.
   *       </p>
   */
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;

  /**
   * <p>The accelerator types that must be on the instance type.
   *       </p>
   */
  AcceleratorTypes?: string[];

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.
   *       </p>
   */
  BareMetal?: string;

  /**
   * <p>
   *          The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS optimized instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;

  /**
   * <p>
   *          Indicates whether burstable performance T instance types are included, excluded, or required. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  BurstablePerformance?: string;

  /**
   * <p>
   *          The CPU manufacturers to include.
   *       </p>
   */
  CpuManufacturers?: string[];

  /**
   * <p>
   *          The instance types to exclude.
   *       </p>
   */
  ExcludedInstanceTypes?: string[];

  /**
   * <p>
   *          Indicates whether current or previous generation instance types are included.
   *       </p>
   */
  InstanceGenerations?: string[];

  /**
   * <p>
   *          Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  LocalStorage?: string;

  /**
   * <p>
   *          The type of local storage that is required.
   *       </p>
   */
  LocalStorageTypes?: string[];

  /**
   * <p>
   *          The minimum and maximum amount of memory per vCPU, in GiB.
   *       </p>
   */
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;

  /**
   * <p>
   *          The minimum and maximum amount of memory, in MiB.
   *       </p>
   */
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;

  /**
   * <p>
   *          The minimum and maximum number of network interfaces.
   *       </p>
   */
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;

  /**
   * <p> The price protection threshold for On-Demand Instances. This is the maximum you'll pay
   *          for an On-Demand Instance, expressed as a percentage above the least expensive current
   *          generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects
   *          instance types with your attributes, it excludes instance types priced above your
   *          threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>A high value, such as <code>999999</code>, turns off price protection.</p>
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>
   *          Indicates whether instance types must support hibernation for On-Demand Instances.
   *       </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * <p> The price protection threshold for Spot Instances. This is the maximum you'll pay for a
   *          Spot Instance, expressed as a percentage above the least expensive current generation M, C,
   *          or R instance type with your specified attributes. When Amazon EC2 selects instance
   *          types with your attributes, it excludes instance types priced above your threshold. </p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>A high value, such as <code>999999</code>, turns off price protection.</p>
   */
  SpotMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>
   *          The minimum and maximum amount of total local storage, in GB.
   *       </p>
   */
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;

  /**
   * <p>
   *          The minimum and maximum number of vCPUs.
   *       </p>
   */
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
}

/**
 * @public
 * <p>
 *          Provides details about the license configuration for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the license configuration.
   *       </p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * <p>
 *          The maintenance options of an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  /**
   * <p>
   *          Disables the automatic recovery behavior of your instance or sets it to default.
   *       </p>
   */
  AutoRecovery?: string;
}

/**
 * @public
 * <p>
 *          Specifies the metadata options for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  /**
   * <p> Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *          not specified, the default state is enabled, and you won't be able to access your instance
   *          metadata. </p>
   */
  HttpEndpoint?: string;

  /**
   * <p>
   *          Enables or disables the IPv6 endpoint for the instance metadata service.
   *       </p>
   */
  HttpProtocolIpv6?: string;

  /**
   * <p>
   *          The state of token usage for your instance metadata requests.
   *       </p>
   */
  HttpTokens?: string;

  /**
   * <p>
   *          The desired HTTP PUT response hop limit for instance metadata requests. The larger
   *          the number, the further instance metadata requests can travel.
   *       </p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>
   *          When set to <code>enabled</code>, this parameter allows access to instance tags from the instance metadata. When set to <code>disabled</code>, it turns off access to instance tags from the instance metadata. For more information, see
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags in instance metadata</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  InstanceMetadataTags?: string;
}

/**
 * @public
 * <p>
 *          The monitoring for an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  /**
   * <p>
   *          Enables detailed monitoring when <code>true</code> is specified. Otherwise, basic monitoring is enabled.
   *          For more information about detailed monitoring, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html">Enable or turn off detailed monitoring for your instances</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *          Provides details on one or more IPv4 prefixes for a network interface.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  /**
   * <p>
   *          The IPv4 prefix. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
   *       </p>
   */
  Ipv4Prefix?: string;
}

/**
 * @public
 * <p>
 *          Specifies an IPv6 address in an Amazon EC2 launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  /**
   * <p>
   *          One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *       </p>
   */
  Ipv6Address?: string;
}

/**
 * @public
 * <p>
 *          Provides details on one or more IPv6 prefixes to be assigned to the network interface.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  /**
   * <p>
   *          The IPv6 prefix.
   *       </p>
   */
  Ipv6Prefix?: string;
}

/**
 * @public
 * <p>
 *          One or more private IPv4 addresses.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  /**
   * <p>
   *          Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *       </p>
   */
  Primary?: boolean;

  /**
   * <p>
   *          The private IPv4 address.
   *       </p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>
 *          One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify
 *          security groups and subnets as part of the network interface.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  /**
   * <p>
   *          Indicates whether to associate a Carrier IP address with eth0 for a new network interface.
   *          You use this option when you launch an instance in a Wavelength Zone and want to
   *          associate a Carrier IP address with the network interface. For more information, see
   *          <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Wavelength Developer Guide</i>.
   *       </p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>
   *          Associates a public IPv4 address with eth0 for a new network interface.
   *       </p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>
   *          Indicates whether the network interface is deleted when the instance is terminated.
   *       </p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>
   *          A description for the network interface.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          The device index for the network interface attachment.
   *       </p>
   */
  DeviceIndex?: number;

  /**
   * <p>
   *          The IDs of one or more security groups.
   *       </p>
   */
  Groups?: string[];

  /**
   * <p>
   *          The type of network interface.
   *       </p>
   */
  InterfaceType?: string;

  /**
   * <p>
   *          The number of IPv4 prefixes to be automatically assigned to the network interface.
   *          You cannot use this option if you use the <code>Ipv4Prefixes</code> option.
   *       </p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>
   *          One or more IPv4 prefixes to be assigned to the network interface. You cannot use
   *          this option if you use the <code>Ipv4PrefixCount</code> option.
   *       </p>
   */
  Ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];

  /**
   * <p>
   *          The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *          automatically selects the IPv6 addresses from the subnet range. You can't use this
   *          option if you use <code>Ipv6Addresses</code>.
   *       </p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>
   *          One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *          You can't use this option if you use <code>Ipv6AddressCount</code>.
   *       </p>
   */
  Ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];

  /**
   * <p>
   *          The number of IPv6 prefixes to be automatically assigned to the network interface.
   *          You cannot use this option if you use the <code>Ipv6Prefix</code> option.
   *       </p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>
   *          One or more IPv6 prefixes to be assigned to the network interface. You cannot use
   *          this option if you use the <code>Ipv6PrefixCount</code> option.
   *       </p>
   */
  Ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];

  /**
   * <p>
   *          The index of the network card. Some instance types support multiple network cards.
   *          The primary network interface must be assigned to network card index <code>0</code>. The default
   *          is network card index <code>0</code>.
   *       </p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>
   *          The ID of the network interface.
   *       </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>
   *          The primary private IPv4 address of the network interface.
   *       </p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>
   *          One or more private IPv4 addresses.
   *       </p>
   */
  PrivateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];

  /**
   * <p>
   *          The number of secondary private IPv4 addresses to assign to a network interface.
   *       </p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>
   *          The ID of the subnet for the network interface.
   *       </p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>
 *          Provides details about the placement of an Amazon EC2 instance.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  /**
   * <p>
   *          The affinity setting for an instance on an EC2 Dedicated Host.
   *       </p>
   */
  Affinity?: string;

  /**
   * <p>
   *          The Availability Zone for the instance.
   *       </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>
   *          The name of the placement group for the instance.
   *       </p>
   */
  GroupName?: string;

  /**
   * <p>
   *          The ID of the Dedicated Host for the instance.
   *       </p>
   */
  HostId?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the host resource group in which to launch the instances.
   *       </p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>
   *          The number of the partition the instance should launch in.
   *       </p>
   */
  PartitionNumber?: number;

  /**
   * <p>
   *          Reserved for future use.
   *       </p>
   */
  SpreadDomain?: string;

  /**
   * <p>
   *          The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
   *       </p>
   */
  Tenancy?: string;
}

/**
 * @public
 * <p>
 *          Describes the options for Amazon EC2 instance hostnames.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  /**
   * <p>
   *          Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *       </p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;

  /**
   * <p>
   *          Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *       </p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>
   *          The type of hostname for EC2 instances.
   *       </p>
   */
  HostnameType?: string;
}

/**
 * @public
 * <p>
 *          The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDataDetails {
  /**
   * <p>
   *          Information about a block device mapping for an Amazon EC2 launch template.
   *       </p>
   */
  BlockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];

  /**
   * <p>
   *          Specifies an instance's Capacity Reservation targeting option. You can specify only
   *          one option at a time.
   *       </p>
   */
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;

  /**
   * <p>
   *          Specifies the CPU options for an instance. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
   *       </p>
   */
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;

  /**
   * <p>
   *          Specifies the credit option for CPU usage of a T2, T3, or T3a instance.
   *       </p>
   */
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;

  /**
   * <p>
   *          Indicates whether to enable the instance for stop protection. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Enable stop protection</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  DisableApiStop?: boolean;

  /**
   * <p>
   *          If you set this parameter to <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API. If set to <code>true</code>, you can.
   *       </p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>
   *          Indicates whether the instance is optimized for Amazon EBS I/O.
   *       </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>
   *          Provides details about Elastic Graphics accelerators to associate with the instance.
   *       </p>
   */
  ElasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];

  /**
   * <p>
   *          The Amazon Elastic Inference accelerator for the instance.
   *       </p>
   */
  ElasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];

  /**
   * <p>
   *          Indicates whether the Amazon EC2 instance is enabled for Amazon Web Services Nitro Enclaves.
   *       </p>
   */
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;

  /**
   * <p>
   *          Specifies whether your Amazon EC2 instance is configured for hibernation.
   *       </p>
   */
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;

  /**
   * <p>
   *          The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *       </p>
   */
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;

  /**
   * <p>
   *          The ID of the Amazon Machine Image (AMI).
   *       </p>
   */
  ImageId?: string;

  /**
   * <p>
   *          Provides the options for specifying the instance initiated shutdown behavior.
   *       </p>
   */
  InstanceInitiatedShutdownBehavior?: string;

  /**
   * <p>
   *          Specifies the market (purchasing) option for an instance.
   *       </p>
   */
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;

  /**
   * <p>
   *          The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance
   *          types with these attributes. If you specify <code>InstanceRequirements</code>, you can't specify <code>InstanceType</code>.
   *       </p>
   */
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;

  /**
   * <p>
   *          The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>. If you specify <code>InstanceType</code>, you can't
   *          specify <code>InstanceRequirements</code>.
   *       </p>
   */
  InstanceType?: string;

  /**
   * <p>
   *          The ID of the kernel.
   *       </p>
   */
  KernelId?: string;

  /**
   * <p>
   *          The name of the key pair that allows users to connect to the instance.
   *       </p>
   */
  KeyName?: string;

  /**
   * <p>
   *          Specifies a license configuration for an instance.
   *       </p>
   */
  LicenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[];

  /**
   * <p>
   *          The maintenance options of your instance.
   *       </p>
   */
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;

  /**
   * <p>
   *          The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon EC2 User Guide</i>.
   *       </p>
   */
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;

  /**
   * <p>
   *          The monitoring for the instance.
   *       </p>
   */
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;

  /**
   * <p>
   *          Specifies the parameters for a network interface that is attached to the instance.
   *       </p>
   */
  NetworkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];

  /**
   * <p>
   *          Specifies the placement of an instance.
   *       </p>
   */
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails;

  /**
   * <p>
   *          The options for the instance hostname.
   *       </p>
   */
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;

  /**
   * <p>
   *          The ID of the RAM disk.
   *       </p>
   */
  RamDiskId?: string;

  /**
   * <p>
   *          One or more security group IDs.
   *       </p>
   */
  SecurityGroupIdSet?: string[];

  /**
   * <p>
   *          One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.
   *       </p>
   */
  SecurityGroupSet?: string[];

  /**
   * <p>
   *          The user data to make available to the instance.
   *       </p>
   */
  UserData?: string;
}

/**
 * @public
 * <p>
 *          Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 *       </p>
 */
export interface AwsEc2LaunchTemplateDetails {
  /**
   * <p>
   *          A name for the launch template.
   *       </p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>
   *          An ID for the launch template.
   *       </p>
   */
  Id?: string;

  /**
   * <p>
   *          The information to include in the launch template.
   *       </p>
   */
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails;

  /**
   * <p>
   *          The default version of the launch template.
   *       </p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>
   *          The latest version of the launch template.
   *       </p>
   */
  LatestVersionNumber?: number;
}

/**
 * @public
 * <p>An association between the network ACL and a subnet.</p>
 */
export interface AwsEc2NetworkAclAssociation {
  /**
   * <p>The identifier of the association between the network ACL and the subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The identifier of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The identifier of the subnet that is associated with the network ACL.</p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>An Internet Control Message Protocol (ICMP) type and code.</p>
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code for which to deny or allow access. To deny or allow all codes, use the
   *          value <code>-1</code>.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type for which to deny or allow access. To deny or allow all types, use the
   *          value <code>-1</code>.</p>
   */
  Type?: number;
}

/**
 * @public
 * <p>A range of ports.</p>
 */
export interface PortRangeFromTo {
  /**
   * <p>The first port in the port range.</p>
   */
  From?: number;

  /**
   * <p>The last port in the port range.</p>
   */
  To?: number;
}

/**
 * @public
 * <p>A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.</p>
 */
export interface AwsEc2NetworkAclEntry {
  /**
   * <p>The IPV4 network range for which to deny or allow access.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Whether the rule is an egress rule. An egress rule is a rule that applies to traffic that leaves the subnet.</p>
   */
  Egress?: boolean;

  /**
   * <p>The Internet Control Message Protocol (ICMP) type and code for which to deny or allow access.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPV6 network range for which to deny or allow access.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>For TCP or UDP protocols, the range of ports that the rule applies to.</p>
   */
  PortRange?: PortRangeFromTo;

  /**
   * <p>The protocol that the rule applies to. To deny or allow access to all protocols, use the
   *          value <code>-1</code>.</p>
   */
  Protocol?: string;

  /**
   * <p>Whether the rule is used to allow access or deny access.</p>
   */
  RuleAction?: string;

  /**
   * <p>The rule number. The rules are processed in order by their number.</p>
   */
  RuleNumber?: number;
}

/**
 * @public
 * <p>Contains details about an Amazon EC2 network access control list (ACL).</p>
 */
export interface AwsEc2NetworkAclDetails {
  /**
   * <p>Whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The identifier of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the network ACL.</p>
   */
  OwnerId?: string;

  /**
   * <p>The identifier of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>Associations between the network ACL and subnets.</p>
   */
  Associations?: AwsEc2NetworkAclAssociation[];

  /**
   * <p>The set of rules in the network ACL.</p>
   */
  Entries?: AwsEc2NetworkAclEntry[];
}

/**
 * @public
 * <p>Information about the network interface attachment.</p>
 */
export interface AwsEc2NetworkInterfaceAttachment {
  /**
   * <p>Indicates when the attachment initiated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  AttachTime?: string;

  /**
   * <p>The identifier of the network interface attachment</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *          terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   *          <p>Valid values: <code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *             <code>detached</code>
   *          </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Provides information about an IPV6 address that is associated with the network
 *          interface.</p>
 */
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * <p>The IPV6 address.</p>
   */
  IpV6Address?: string;
}

/**
 * @public
 * <p>Provides information about a private IPv4 address that is with the network
 *          interface.</p>
 */
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  /**
   * <p>The IP address.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private DNS name for the IP address.</p>
   */
  PrivateDnsName?: string;
}

/**
 * @public
 * <p>A security group associated with the network interface.</p>
 */
export interface AwsEc2NetworkInterfaceSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * <p>Details about the network interface</p>
 */
export interface AwsEc2NetworkInterfaceDetails {
  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: AwsEc2NetworkInterfaceAttachment;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Security groups for the network interface.</p>
   */
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];

  /**
   * <p>Indicates whether traffic to or from the instance is validated.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  IpV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];

  /**
   * <p>The public DNS name of the network interface.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

/**
 * @public
 * <p>
 *          Describes a virtual private gateway propagating route.
 *       </p>
 */
export interface PropagatingVgwSetDetails {
  /**
   * <p>
   *          The ID of the virtual private gateway.
   *       </p>
   */
  GatewayId?: string;
}

/**
 * @public
 * <p>
 *          Provides details about the routes in the route table.
 *       </p>
 */
export interface RouteSetDetails {
  /**
   * <p>
   *          The ID of the carrier gateway.
   *       </p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the core network.
   *       </p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>
   *          The IPv4 CIDR block used for the destination match.
   *       </p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>
   *          The IPv6 CIDR block used for the destination match.
   *       </p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>
   *          The prefix of the destination Amazon Web Service.
   *       </p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>
   *          The ID of the egress-only internet gateway.
   *       </p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>
   *          The ID of a gateway attached to your VPC.
   *       </p>
   */
  GatewayId?: string;

  /**
   * <p>
   *          The ID of a NAT instance in your VPC.
   *       </p>
   */
  InstanceId?: string;

  /**
   * <p>
   *          The ID of the Amazon Web Services account that owns the instance.
   *       </p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>
   *          The ID of the local gateway.
   *       </p>
   */
  LocalGatewayId?: string;

  /**
   * <p>
   *          The ID of a NAT gateway.
   *       </p>
   */
  NatGatewayId?: string;

  /**
   * <p>
   *          The ID of the network interface.
   *       </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>
   *          Describes how the route was created.
   *       </p>
   */
  Origin?: string;

  /**
   * <p>
   *          The state of the route.
   *       </p>
   */
  State?: string;

  /**
   * <p>
   *          The ID of a transit gateway.
   *       </p>
   */
  TransitGatewayId?: string;

  /**
   * <p>
   *          The ID of a VPC peering connection.
   *       </p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * @public
 * <p>
 *          Provides details about a route table for the specified VPC.
 *       </p>
 */
export interface AwsEc2RouteTableDetails {
  /**
   * <p>
   *          The associations between a route table and one or more subnets or a gateway.
   *       </p>
   */
  AssociationSet?: AssociationSetDetails[];

  /**
   * <p>
   *          The ID of the Amazon Web Services account that owns the route table.
   *       </p>
   */
  OwnerId?: string;

  /**
   * <p>
   *          Describes a virtual private gateway propagating route.
   *       </p>
   */
  PropagatingVgwSet?: PropagatingVgwSetDetails[];

  /**
   * <p>
   *          The ID of the route table.
   *       </p>
   */
  RouteTableId?: string;

  /**
   * <p>
   *          The routes in the route table.
   *       </p>
   */
  RouteSet?: RouteSetDetails[];

  /**
   * <p>
   *          The ID of the virtual private cloud (VPC).
   *       </p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>A range of IPv4 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpRange {
  /**
   * <p>The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;
}

/**
 * @public
 * <p>A range of IPv6 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpv6Range {
  /**
   * <p>The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;
}

/**
 * @public
 * <p>A prefix list ID.</p>
 */
export interface AwsEc2SecurityGroupPrefixListId {
  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

/**
 * @public
 * <p>A relationship between a security group and a user.</p>
 */
export interface AwsEc2SecurityGroupUserIdGroupPair {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of an Amazon Web Services account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *          security group is returned in the response. If the referenced security group is deleted,
   *          this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group in
   *          another VPC. </p>
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * @public
 * <p>An IP permission for an EC2 security group.</p>
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
   */
  IpProtocol?: string;

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type
   *          number.</p>
   *          <p>A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you
   *          must specify all codes. </p>
   */
  FromPort?: number;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.</p>
   *          <p>A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all
   *          codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The security group and Amazon Web Services account ID pairs.</p>
   */
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];

  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: AwsEc2SecurityGroupIpRange[];

  /**
   * <p>The IPv6 ranges.</p>
   */
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];

  /**
   * <p>[VPC only] The prefix list IDs for an Amazon Web Services service. With outbound rules, this is the Amazon Web Services
   *          service to access through a VPC endpoint from instances associated with the security
   *          group.</p>
   */
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[];
}

/**
 * @public
 * <p>Details about an Amazon EC2 security group.</p>
 */
export interface AwsEc2SecurityGroupDetails {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: AwsEc2SecurityGroupIpPermission[];

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];
}

/**
 * @public
 * <p>An IPV6 CIDR block association.</p>
 */
export interface Ipv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

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
   */
  CidrBlockState?: string;
}

/**
 * @public
 * <p>Contains information about a subnet in Amazon EC2.</p>
 */
export interface AwsEc2SubnetDetails {
  /**
   * <p>Whether to assign an IPV6 address to a network interface that is created in this subnet.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * <p>The Availability Zone for the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier of the Availability Zone for the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The number of available IPV4 addresses in the subnet. Does not include addresses for stopped instances.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * <p>The IPV4 CIDR block that is assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Whether this subnet is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * <p>Whether instances in this subnet receive a public IP address.</p>
   */
  MapPublicIpOnLaunch?: boolean;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of the subnet. Valid values are <code>available</code> or <code>pending</code>.</p>
   */
  State?: string;

  /**
   * <p>The ARN of the subnet.</p>
   */
  SubnetArn?: string;

  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The identifier of the VPC that contains the subnet.</p>
   */
  VpcId?: string;

  /**
   * <p>The IPV6 CIDR blocks that are associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
}

/**
 * @public
 * <p>Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects
 * virtual private clouds (VPCs) and on-premises networks.
 *       </p>
 */
export interface AwsEc2TransitGatewayDetails {
  /**
   * <p>The ID of the transit gateway.
   *       </p>
   */
  Id?: string;

  /**
   * <p>The description of the transit gateway.
   *       </p>
   */
  Description?: string;

  /**
   * <p>Turn on or turn off automatic propagation of routes to the default propagation route table.
   *       </p>
   */
  DefaultRouteTablePropagation?: string;

  /**
   * <p>Turn on or turn off automatic acceptance of attachment requests.
   *       </p>
   */
  AutoAcceptSharedAttachments?: string;

  /**
   * <p>Turn on or turn off automatic association with the default association route table.
   *       </p>
   */
  DefaultRouteTableAssociation?: string;

  /**
   * <p>The transit gateway Classless Inter-Domain Routing (CIDR) blocks.
   *       </p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * <p>The ID of the default association route table.
   *       </p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>The ID of the default propagation route table.
   *       </p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>Turn on or turn off Equal Cost Multipath Protocol (ECMP) support.
   *       </p>
   */
  VpnEcmpSupport?: string;

  /**
   * <p>Turn on or turn off DNS support.
   *       </p>
   */
  DnsSupport?: string;

  /**
   * <p>Indicates whether multicast is supported on the transit gateway.
   *       </p>
   */
  MulticastSupport?: string;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *       </p>
   */
  AmazonSideAsn?: number;
}

/**
 * @public
 * <p>An attachment to an Amazon EC2 volume.</p>
 */
export interface AwsEc2VolumeAttachment {
  /**
   * <p>The datetime when the attachment initiated.</p>
   */
  AttachTime?: string;

  /**
   * <p>Whether the EBS volume is deleted when the EC2 instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The identifier of the EC2 instance.</p>
   */
  InstanceId?: string;

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
   */
  Status?: string;
}

/**
 * @public
 * <p>Details about an EC2 volume.</p>
 */
export interface AwsEc2VolumeDetails {
  /**
   * <p>Indicates when the volume was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateTime?: string;

  /**
   * <p>The device name for the volume that is attached to the instance.
   *       </p>
   */
  DeviceName?: string;

  /**
   * <p>Specifies whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created.</p>
   */
  SnapshotId?: string;

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
   */
  Status?: string;

  /**
   * <p>The ARN of the KMS key that was
   *          used to protect the volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The volume attachments.</p>
   */
  Attachments?: AwsEc2VolumeAttachment[];

  /**
   * <p>The ID of the volume.
   *       </p>
   */
  VolumeId?: string;

  /**
   * <p>The volume type.
   *       </p>
   */
  VolumeType?: string;

  /**
   * <p>Indicates whether the volume was scanned or skipped.
   *       </p>
   */
  VolumeScanStatus?: string;
}

/**
 * @public
 * <p>An IPv4 CIDR block association.</p>
 */
export interface CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the IPv4 CIDR block.</p>
   */
  CidrBlockState?: string;
}

/**
 * @public
 * <p>Details about an EC2 VPC.</p>
 */
export interface AwsEc2VpcDetails {
  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: CidrBlockAssociation[];

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  /**
   * <p>The identifier of the set of Dynamic Host Configuration Protocol (DHCP) options that are
   *          associated with the VPC. If the default options are associated with the VPC, then this is
   *          default.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The current state of the VPC. Valid values are <code>available</code> or <code>pending</code>.</p>
   */
  State?: string;
}

/**
 * @public
 * <p>The service type information for a VPC endpoint service.</p>
 */
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: string;
}

/**
 * @public
 * <p>Contains details about the service configuration for a VPC endpoint service.</p>
 */
export interface AwsEc2VpcEndpointServiceDetails {
  /**
   * <p>Whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>The Availability Zones where the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>Whether the service manages its VPC endpoints.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The ARNs of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The ARNs of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The identifier of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

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
   */
  ServiceState?: string;

  /**
   * <p>The types for the service.</p>
   */
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[];
}

/**
 * @public
 * <p>Provides details about the IPv4 CIDR blocks for the VPC.
 *       </p>
 */
export interface VpcInfoCidrBlockSetDetails {
  /**
   * <p>The IPv4 CIDR block for the VPC.
   *       </p>
   */
  CidrBlock?: string;
}

/**
 * @public
 * <p>Provides details about the IPv6 CIDR blocks for the VPC.
 *       </p>
 */
export interface VpcInfoIpv6CidrBlockSetDetails {
  /**
   * <p>The IPv6 CIDR block for the VPC.
   *       </p>
   */
  Ipv6CidrBlock?: string;
}

/**
 * @public
 * <p>Provides information about the VPC peering connection options for the accepter or requester VPC.
 *       </p>
 */
export interface VpcInfoPeeringOptionsDetails {
  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.
   *       </p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.
   *       </p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.
   *       </p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

/**
 * @public
 * <p>Describes a VPC in a VPC peering connection.
 *       </p>
 */
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  /**
   * <p>The IPv4 CIDR block for the VPC.
   *       </p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.
   *       </p>
   */
  CidrBlockSet?: VpcInfoCidrBlockSetDetails[];

  /**
   * <p>The IPv6 CIDR block for the VPC.
   *       </p>
   */
  Ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.
   *       </p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.
   *       </p>
   */
  PeeringOptions?: VpcInfoPeeringOptionsDetails;

  /**
   * <p>The Amazon Web Services Region in which the VPC is located.
   *       </p>
   */
  Region?: string;

  /**
   * <p>The ID of the VPC.
   *       </p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Details about the status of the VPC peering connection.
 *       </p>
 */
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  /**
   * <p>The status of the VPC peering connection.
   *       </p>
   */
  Code?: string;

  /**
   * <p>A message that provides more information about the status, if applicable.
   *       </p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an
 * accepter VPC with which to create the connection.
 *       </p>
 */
export interface AwsEc2VpcPeeringConnectionDetails {
  /**
   * <p>Information about the accepter VPC.
   *       </p>
   */
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;

  /**
   * <p>The time at which an unaccepted VPC peering connection will expire.
   *       </p>
   */
  ExpirationTime?: string;

  /**
   * <p>Information about the requester VPC.
   *       </p>
   */
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;

  /**
   * <p>The status of the VPC peering connection.
   *       </p>
   */
  Status?: AwsEc2VpcPeeringConnectionStatusDetails;

  /**
   * <p>The ID of the VPC peering connection.
   *       </p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * @public
 * <p>The VPN tunnel options.</p>
 */
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  /**
   * <p>The number of seconds after which a Dead Peer Detection (DPD) timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * <p>The Internet Key Exchange (IKE) versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: string[];

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   */
  Phase1DhGroupNumbers?: number[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: string[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *          negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: string[];

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   */
  Phase2DhGroupNumbers?: number[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: string[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *          negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: string[];

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The preshared key to establish initial authentication between the virtual private gateway
   *          and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The percentage of the rekey window, which is determined by
   *          <code>RekeyMarginTimeSeconds</code> during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services
   *          side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;
}

/**
 * @public
 * <p>VPN connection options.</p>
 */
export interface AwsEc2VpnConnectionOptionsDetails {
  /**
   * <p>Whether the VPN connection uses static routes only.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The VPN tunnel options.</p>
   */
  TunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}

/**
 * @public
 * <p>A static routes associated with
 *          the VPN connection.</p>
 */
export interface AwsEc2VpnConnectionRoutesDetails {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: string;
}

/**
 * @public
 * <p>Information about the VPN tunnel.</p>
 */
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The ARN of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The date and time of the last change in status.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastStatusChange?: string;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *          interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel. Valid values are <code>DOWN</code> or <code>UP</code>.</p>
   */
  Status?: string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 * <p>Details about an Amazon EC2 VPN
 *          connection.</p>
 */
export interface AwsEc2VpnConnectionDetails {
  /**
   * <p>The identifier of the VPN connection.</p>
   */
  VpnConnectionId?: string;

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
   */
  State?: string;

  /**
   * <p>The identifier of the customer gateway that is at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The configuration information for the VPN connection's customer gateway, in the native XML
   *          format.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: string;

  /**
   * <p>The identifier of the virtual private gateway that is at the Amazon Web Services side of the VPN
   *          connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The category of the VPN connection. <code>VPN</code> indicates an Amazon Web Services VPN connection. <code>VPN-Classic</code>
   *          indicates an Amazon Web Services Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: AwsEc2VpnConnectionOptionsDetails;

  /**
   * <p>The static routes that are associated with the VPN connection.</p>
   */
  Routes?: AwsEc2VpnConnectionRoutesDetails[];

  /**
   * <p>The identifier of the transit gateway that is associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;
}

/**
 * @public
 * <p>Information about an Amazon ECR image.</p>
 */
export interface AwsEcrContainerImageDetails {
  /**
   * <p>The Amazon Web Services account identifier that is associated with the registry that the image belongs
   *          to.</p>
   */
  RegistryId?: string;

  /**
   * <p>The name of the repository that the image belongs to.</p>
   */
  RepositoryName?: string;

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
   */
  Architecture?: string;

  /**
   * <p>The sha256 digest of the image manifest.</p>
   */
  ImageDigest?: string;

  /**
   * <p>The list of tags that are associated with the image.</p>
   */
  ImageTags?: string[];

  /**
   * <p>The date and time when the image was pushed to the repository.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ImagePublishedAt?: string;
}

/**
 * @public
 * <p>The image scanning configuration for a repository.</p>
 */
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  /**
   * <p>Whether to scan images after they are pushed to a repository.</p>
   */
  ScanOnPush?: boolean;
}

/**
 * @public
 * <p>Information about the lifecycle policy for the repository.</p>
 */
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  /**
   * <p>The text of the lifecycle policy.</p>
   */
  LifecyclePolicyText?: string;

  /**
   * <p>The Amazon Web Services account identifier that is associated with the registry that contains the repository.</p>
   */
  RegistryId?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon Elastic Container Registry repository.</p>
 */
export interface AwsEcrRepositoryDetails {
  /**
   * <p>The ARN of the repository.</p>
   */
  Arn?: string;

  /**
   * <p>The image scanning configuration for a repository.</p>
   */
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;

  /**
   * <p>The tag mutability setting for the repository. Valid values are <code>IMMUTABLE</code> or <code>MUTABLE</code>.</p>
   */
  ImageTagMutability?: string;

  /**
   * <p>Information about the lifecycle policy for the repository.</p>
   */
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;

  /**
   * <p>The name of the repository.</p>
   */
  RepositoryName?: string;

  /**
   * <p>The text of the repository policy.</p>
   */
  RepositoryPolicyText?: string;
}

/**
 * @public
 * <p>Indicates whether to enable CloudWatch Container Insights for the ECS cluster.</p>
 */
export interface AwsEcsClusterClusterSettingsDetails {
  /**
   * <p>The name of the setting. The valid value is <code>containerInsights</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of the setting. Valid values are <code>disabled</code> or <code>enabled</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The log configuration for the results of the run command actions.</p>
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  /**
   * <p>Whether to enable encryption on the CloudWatch logs.</p>
   */
  CloudWatchEncryptionEnabled?: boolean;

  /**
   * <p>The name of the CloudWatch log group to send the logs to.</p>
   */
  CloudWatchLogGroupName?: string;

  /**
   * <p>The name of the S3 bucket to send logs to.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Whether to encrypt the logs that are sent to the S3 bucket.</p>
   */
  S3EncryptionEnabled?: boolean;

  /**
   * <p>Identifies the folder in the S3 bucket to send the logs to.</p>
   */
  S3KeyPrefix?: string;
}

/**
 * @public
 * <p>Contains the run command configuration for the cluster.</p>
 */
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  /**
   * <p>The identifier of the KMS key that is used to encrypt the data between the local client and the container.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The log configuration for the results of the run command actions. Required if <code>Logging</code> is <code>NONE</code>.</p>
   */
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;

  /**
   * <p>The log setting to use for redirecting logs for run command results.</p>
   */
  Logging?: string;
}

/**
 * @public
 * <p>The run command configuration for the cluster.</p>
 */
export interface AwsEcsClusterConfigurationDetails {
  /**
   * <p>Contains the run command configuration for the cluster.</p>
   */
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}

/**
 * @public
 * <p>The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.</p>
 */
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  /**
   * <p>The minimum number of tasks to run on the specified capacity provider.</p>
   */
  Base?: number;

  /**
   * <p>The name of the capacity provider.</p>
   */
  CapacityProvider?: string;

  /**
   * <p>The relative percentage of the total number of tasks launched that should use the capacity provider.</p>
   */
  Weight?: number;
}

/**
 * @public
 * <p>Provides details about an Amazon ECS cluster.</p>
 */
export interface AwsEcsClusterDetails {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster.
   *       </p>
   */
  ClusterArn?: string;

  /**
   * <p>The number of services that are running on the cluster in an <code>ACTIVE</code> state. You can view these services with the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">
   *                <code>ListServices</code>
   *             </a> API operation.
   *       </p>
   */
  ActiveServicesCount?: number;

  /**
   * <p>The short name of one or more capacity providers to associate with the cluster.</p>
   */
  CapacityProviders?: string[];

  /**
   * <p>The setting to use to create the cluster. Specifically used to configure whether to enable CloudWatch Container Insights for the cluster.</p>
   */
  ClusterSettings?: AwsEcsClusterClusterSettingsDetails[];

  /**
   * <p>The run command configuration for the cluster.</p>
   */
  Configuration?: AwsEcsClusterConfigurationDetails;

  /**
   * <p>The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.</p>
   */
  DefaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];

  /**
   * <p>A name that you use to identify your cluster.
   *       </p>
   */
  ClusterName?: string;

  /**
   * <p>The number of container instances registered into the cluster. This includes container instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.
   *       </p>
   */
  RegisteredContainerInstancesCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.
   *       </p>
   */
  RunningTasksCount?: number;

  /**
   * <p>The status of the cluster.
   *       </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Details for a volume mount point that's used in a container definition.
 *       </p>
 */
export interface AwsMountPoint {
  /**
   * <p>The name of the volume to mount. Must be a volume name referenced in the <code>name</code> parameter
   * of task definition <code>volume</code>.
   *       </p>
   */
  SourceVolume?: string;

  /**
   * <p>The path on the container to mount the host volume at.
   *       </p>
   */
  ContainerPath?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon ECS container.
 *       </p>
 */
export interface AwsEcsContainerDetails {
  /**
   * <p>The name of the container.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The image used for the container.
   *       </p>
   */
  Image?: string;

  /**
   * <p>The mount points for data volumes in your container.
   *       </p>
   */
  MountPoints?: AwsMountPoint[];

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host container instance
   * (similar to the root user).
   *       </p>
   */
  Privileged?: boolean;
}

/**
 * @public
 * <p>Strategy item for the capacity provider strategy that the service uses.</p>
 */
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  /**
   * <p>The minimum number of tasks to run on the capacity provider. Only one strategy item can specify a value for <code>Base</code>.</p>
   *          <p>The value must be between 0 and 100000.</p>
   */
  Base?: number;

  /**
   * <p>The short name of the capacity provider.</p>
   */
  CapacityProvider?: string;

  /**
   * <p>The relative percentage of the total number of tasks that should use the capacity provider.</p>
   *          <p>If no weight is specified, the default value is 0. At least one capacity provider must have a weight greater than 0.</p>
   *          <p>The value can be between 0 and 1000.</p>
   */
  Weight?: number;
}

/**
 * @public
 * <p>Determines whether a service deployment fails if a service cannot reach a steady state.</p>
 */
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  /**
   * <p>Whether to enable the deployment circuit breaker logic for the service.</p>
   */
  Enable?: boolean;

  /**
   * <p>Whether to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.</p>
   */
  Rollback?: boolean;
}

/**
 * @public
 * <p>Optional deployment parameters for the service.</p>
 */
export interface AwsEcsServiceDeploymentConfigurationDetails {
  /**
   * <p>Determines whether a service deployment fails if a service cannot reach a steady state.</p>
   */
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;

  /**
   * <p>For a service that uses the rolling update (<code>ECS</code>) deployment type, the maximum number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, and for tasks that use the EC2 launch type, when any container instances are in the <code>DRAINING</code> state. Provided as a percentage of the desired number of tasks. The default value is 200%.</p>
   *          <p>For a service that uses the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types, and tasks that use the EC2 launch type, the maximum number of tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.</p>
   *          <p>For the Fargate launch type, the maximum percent value is not used.</p>
   */
  MaximumPercent?: number;

  /**
   * <p>For a service that uses the rolling update (<code>ECS</code>) deployment type, the minimum number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment, and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Expressed as a percentage of the desired number of tasks. The default value is 100%.</p>
   *          <p>For a service that uses the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and tasks that use the EC2 launch type, the minimum number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.</p>
   *          <p>For the Fargate launch type, the minimum healthy percent value is not used.</p>
   */
  MinimumHealthyPercent?: number;
}

/**
 * @public
 * <p>Information about the deployment controller type that the service uses.</p>
 */
export interface AwsEcsServiceDeploymentControllerDetails {
  /**
   * <p>The rolling update (<code>ECS</code>) deployment type replaces the current running version of the container with the latest version.</p>
   *          <p>The blue/green (<code>CODE_DEPLOY</code>) deployment type uses the blue/green deployment model that is powered by CodeDeploy. This deployment model a new deployment of a service can be verified before production traffic is sent to it.</p>
   *          <p>The external (<code>EXTERNAL</code>) deployment type allows the use of any third-party deployment controller for full control over the deployment process for an Amazon ECS service.</p>
   *          <p>Valid values: <code>ECS</code> | <code>CODE_DEPLOY</code> | <code>EXTERNAL</code>
   *          </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about a load balancer that the service uses.</p>
 */
export interface AwsEcsServiceLoadBalancersDetails {
  /**
   * <p>The name of the container to associate with the load balancer.</p>
   */
  ContainerName?: string;

  /**
   * <p>The port on the container to associate with the load balancer. This port must correspond to a <code>containerPort</code> in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the <code>hostPort</code> of the port mapping.</p>
   */
  ContainerPort?: number;

  /**
   * <p>The name of the load balancer to associate with the Amazon ECS service or task set.</p>
   *          <p>Only specified when using a Classic Load Balancer. For an Application Load Balancer or a Network Load Balancer, the load balancer name is omitted.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The ARN of the Elastic Load Balancing target group or groups associated with a service or task set.</p>
   *          <p>Only specified when using an Application Load Balancer or a Network Load Balancer. For a Classic Load Balancer, the target group ARN is omitted.</p>
   */
  TargetGroupArn?: string;
}

/**
 * @public
 * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
 */
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  /**
   * <p>Whether the task's elastic network interface receives a public IP address. The default value is <code>DISABLED</code>.</p>
   *          <p>Valid values: <code>ENABLED</code> | <code>DISABLED</code>
   *          </p>
   */
  AssignPublicIp?: string;

  /**
   * <p>The IDs of the security groups associated with the task or service.</p>
   *          <p>You can provide up to five security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The IDs of the subnets associated with the task or service.</p>
   *          <p>You can provide up to 16 subnets.</p>
   */
  Subnets?: string[];
}

/**
 * @public
 * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
 */
export interface AwsEcsServiceNetworkConfigurationDetails {
  /**
   * <p>The VPC subnet and security group configuration.</p>
   */
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}

/**
 * @public
 * <p>A placement constraint for the tasks in the service.</p>
 */
export interface AwsEcsServicePlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>.</p>
   */
  Expression?: string;

  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to run each task in a particular group on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates.</p>
   *          <p>Valid values: <code>distinctInstance</code> | <code>memberOf</code>
   *          </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>A placement strategy that determines how to place the tasks for the service.</p>
 */
export interface AwsEcsServicePlacementStrategiesDetails {
  /**
   * <p>The field to apply the placement strategy against.</p>
   *          <p>For the <code>spread</code> placement strategy, valid values are <code>instanceId</code> (or <code>host</code>, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>.</p>
   *          <p>For the <code>binpack</code> placement strategy, valid values are <code>cpu</code> and <code>memory</code>.</p>
   *          <p>For the <code>random</code> placement strategy, this attribute is not used.</p>
   */
  Field?: string;

  /**
   * <p>The type of placement strategy.</p>
   *          <p>The <code>random</code> placement strategy randomly places tasks on available candidates.</p>
   *          <p>The <code>spread</code> placement strategy spreads placement across available candidates evenly based on the value of <code>Field</code>.</p>
   *          <p>The <code>binpack</code> strategy places tasks on available candidates that have the least available amount of the resource that is specified in <code>Field</code>.</p>
   *          <p>Valid values: <code>random</code> | <code>spread</code> | <code>binpack</code>
   *          </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about a service discovery registry to assign to the service.</p>
 */
export interface AwsEcsServiceServiceRegistriesDetails {
  /**
   * <p>The container name value to use for the service discovery service.</p>
   *          <p>If the task definition uses the <code>bridge</code> or <code>host</code> network mode, you must specify <code>ContainerName</code> and <code>ContainerPort</code>.</p>
   *          <p>If the task definition uses the <code>awsvpc</code> network mode and a type SRV DNS record, you must specify either <code>ContainerName</code> and <code>ContainerPort</code>, or <code>Port</code> , but not both.</p>
   */
  ContainerName?: string;

  /**
   * <p>The port value to use for the service discovery service.</p>
   *          <p>If the task definition uses the <code>bridge</code> or <code>host</code> network mode, you must specify <code>ContainerName</code> and <code>ContainerPort</code>.</p>
   *          <p>If the task definition uses the <code>awsvpc</code> network mode and a type SRV DNS record, you must specify either <code>ContainerName</code> and <code>ContainerPort</code>, or <code>Port</code> , but not both.</p>
   */
  ContainerPort?: number;

  /**
   * <p>The port value to use for a service discovery service that specifies an SRV record. This field can be used if both the <code>awsvpc</code>awsvpc network mode and SRV records are used.</p>
   */
  Port?: number;

  /**
   * <p>The ARN of the service registry.</p>
   */
  RegistryArn?: string;
}

/**
 * @public
 * <p>Provides details about a service within an ECS cluster.</p>
 */
export interface AwsEcsServiceDetails {
  /**
   * <p>The capacity provider strategy that the service uses.</p>
   */
  CapacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];

  /**
   * <p>The ARN of the cluster that hosts the service.</p>
   */
  Cluster?: string;

  /**
   * <p>Deployment parameters for the service. Includes the number of tasks that run and the order in which to start and stop tasks.</p>
   */
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;

  /**
   * <p>Contains the deployment controller type that the service uses.</p>
   */
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails;

  /**
   * <p>The number of instantiations of the task definition to run on the service.</p>
   */
  DesiredCount?: number;

  /**
   * <p>Whether to enable Amazon ECS managed tags for the tasks in the service.</p>
   */
  EnableEcsManagedTags?: boolean;

  /**
   * <p>Whether the execute command functionality is enabled for the service.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * <p>After a task starts, the amount of time in seconds that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks.</p>
   */
  HealthCheckGracePeriodSeconds?: number;

  /**
   * <p>The launch type that the service uses.</p>
   *          <p>Valid values: <code>EC2</code> | <code>FARGATE</code> | <code>EXTERNAL</code>
   *          </p>
   */
  LaunchType?: string;

  /**
   * <p>Information about the load balancers that the service uses.</p>
   */
  LoadBalancers?: AwsEcsServiceLoadBalancersDetails[];

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
   */
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   */
  PlacementConstraints?: AwsEcsServicePlacementConstraintsDetails[];

  /**
   * <p>Information about how tasks for the service are placed.</p>
   */
  PlacementStrategies?: AwsEcsServicePlacementStrategiesDetails[];

  /**
   * <p>The platform version on which to run the service. Only specified for tasks that are hosted on Fargate. If a platform version is not specified, the <code>LATEST</code> platform version is used by default.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Indicates whether to propagate the tags from the task definition to the task or from the service to the task. If no value is provided, then tags are not propagated.</p>
   *          <p>Valid values: <code>TASK_DEFINITION</code> | <code>SERVICE</code>
   *          </p>
   */
  PropagateTags?: string;

  /**
   * <p>The ARN of the IAM role that is associated with the service. The role allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.</p>
   */
  Role?: string;

  /**
   * <p>The scheduling strategy to use for the service.</p>
   *          <p>The <code>REPLICA</code> scheduling strategy places and maintains the desired number of tasks across the cluster. By default, the service scheduler spreads tasks across Availability Zones. Task placement strategies and constraints are used to customize task placement decisions.</p>
   *          <p>The <code>DAEMON</code> scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that are specified in the cluster. The service scheduler also evaluates the task placement constraints for running tasks and stops tasks that do not meet the placement constraints.</p>
   *          <p>Valid values: <code>REPLICA</code> | <code>DAEMON</code>
   *          </p>
   */
  SchedulingStrategy?: string;

  /**
   * <p>The ARN of the service.</p>
   */
  ServiceArn?: string;

  /**
   * <p>The name of the service.</p>
   *          <p>The name can contain up to 255 characters. It can use letters, numbers, underscores, and hyphens.</p>
   */
  ServiceName?: string;

  /**
   * <p>Information about the service discovery registries to assign to the service.</p>
   */
  ServiceRegistries?: AwsEcsServiceServiceRegistriesDetails[];

  /**
   * <p>The task definition to use for tasks in the service.</p>
   */
  TaskDefinition?: string;
}

/**
 * @public
 * <p>A dependency that is defined for container startup and shutdown.</p>
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
   */
  Condition?: string;

  /**
   * <p>The name of the dependent container.</p>
   */
  ContainerName?: string;
}

/**
 * @public
 * <p>An environment variable to pass to the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  /**
   * <p>The name of the environment variable.</p>
   */
  Name?: string;

  /**
   * <p>The value of the environment variable.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A file that contain environment variables to pass to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * <p>The type of environment file. The valid value is <code>s3</code>.</p>
   */
  Type?: string;

  /**
   * <p>The ARN of the S3 object that contains the environment variable file.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * <p>The hostname to use in the <b>/etc/hosts</b> entry.</p>
   */
  Hostname?: string;

  /**
   * <p>The IP address to use in the <b>/etc/hosts</b> entry.</p>
   */
  IpAddress?: string;
}

/**
 * @public
 * <p>The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.</p>
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
   */
  Options?: Record<string, string>;

  /**
   * <p>The log router to use. Valid values are <code>fluentbit</code> or <code>fluentd</code>.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>The container health check command and associated configuration parameters for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * <p>The command that the container runs to determine whether it is healthy.</p>
   */
  Command?: string[];

  /**
   * <p>The time period in seconds between each health check execution. The default value is 30 seconds.</p>
   */
  Interval?: number;

  /**
   * <p>The number of times to retry a failed health check before the container is considered unhealthy. The default value is 3.</p>
   */
  Retries?: number;

  /**
   * <p>The optional grace period in seconds that allows containers time to bootstrap before failed health checks count towards the maximum number of retries.</p>
   */
  StartPeriod?: number;

  /**
   * <p>The time period in seconds to wait for a health check to succeed before it is considered a failure. The default value is 5.</p>
   */
  Timeout?: number;
}

/**
 * @public
 * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
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
   */
  Add?: string[];

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
   */
  Drop?: string[];
}

/**
 * @public
 * <p>A host device to expose to the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * <p>The path inside the container at which to expose the host device.</p>
   */
  ContainerPath?: string;

  /**
   * <p>The path for the device on the host container instance.</p>
   */
  HostPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and <code>mknod</code> for the device.</p>
   */
  Permissions?: string[];
}

/**
 * @public
 * <p>The container path, mount options, and size (in MiB) of a tmpfs mount.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   */
  ContainerPath?: string;

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
   */
  MountOptions?: string[];

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
   */
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;

  /**
   * <p>The host devices to expose to the container.</p>
   */
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];

  /**
   * <p>Whether to run an <code>init</code> process inside the container that forwards signals and reaps processes. </p>
   */
  InitProcessEnabled?: boolean;

  /**
   * <p>The total amount of swap memory (in MiB) that a container can use.</p>
   */
  MaxSwap?: number;

  /**
   * <p>The value for the size (in MiB) of the <b>/dev/shm</b> volume.</p>
   */
  SharedMemorySize?: number;

  /**
   * <p>Configures the container's memory swappiness behavior. Determines how aggressively pages are swapped. The higher the value, the more aggressive the swappiness. The default is 60.</p>
   */
  Swappiness?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount.</p>
   */
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}

/**
 * @public
 * <p>A secret to pass to the log configuration.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The secret to expose to the container.</p>
   *          <p>The value is either the full ARN of the Secrets Manager secret or the full ARN of the
   *          parameter in the Systems Manager Parameter Store.</p>
   */
  ValueFrom?: string;
}

/**
 * @public
 * <p>The log configuration specification for the container.</p>
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
   */
  LogDriver?: string;

  /**
   * <p>The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.</p>
   */
  Options?: Record<string, string>;

  /**
   * <p>The secrets to pass to the log configuration.</p>
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}

/**
 * @public
 * <p>A mount point for the data volumes in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * <p>The path on the container to mount the host volume at.</p>
   */
  ContainerPath?: string;

  /**
   * <p>Whether the container has read-only access to the volume.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The name of the volume to mount. Must match the name of a volume listed in <code>VolumeDetails</code> for the task definition.</p>
   */
  SourceVolume?: string;
}

/**
 * @public
 * <p>A port mapping for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * <p>The port number on the container that is bound to the user-specified or automatically assigned host port.</p>
   */
  ContainerPort?: number;

  /**
   * <p>The port number on the container instance to reserve for the container.</p>
   */
  HostPort?: number;

  /**
   * <p>The protocol used for the port mapping. The default is <code>tcp</code>.</p>
   */
  Protocol?: string;
}

/**
 * @public
 * <p>The private repository authentication credentials to use.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * <p>The ARN of the secret that contains the private repository credentials.</p>
   */
  CredentialsParameter?: string;
}

/**
 * @public
 * <p>A resource to assign to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * <p>The type of resource to assign to a container. Valid values are <code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   */
  Type?: string;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>For <code>GPU</code>, the value is the number of physical GPUs the Amazon ECS container agent
   *          reserves for the container.</p>
   *          <p>For <code>InferenceAccelerator</code>, the value should match the <code>DeviceName</code>
   *          attribute of an entry in <code>InferenceAccelerators</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A secret to pass to the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The secret to expose to the container. The value is either the full ARN of the Secrets Manager
   *          secret or the full ARN of the parameter in the Systems Manager Parameter Store.</p>
   */
  ValueFrom?: string;
}

/**
 * @public
 * <p>A namespaced kernel parameter to set in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * <p>The namespaced kernel parameter for which to set a value.</p>
   */
  Namespace?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A ulimit to set in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * <p>The hard limit for the ulimit type.</p>
   */
  HardLimit?: number;

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
   */
  Name?: string;

  /**
   * <p>The soft limit for the ulimit type.</p>
   */
  SoftLimit?: number;
}

/**
 * @public
 * <p>A data volume to mount from another container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * <p>Whether the container has read-only access to the volume.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The name of another container within the same task definition from which to mount volumes.</p>
   */
  SourceContainer?: string;
}

/**
 * @public
 * <p>A container definition that describes a container in the task.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * <p>The command that is passed to the container.</p>
   */
  Command?: string[];

  /**
   * <p>The number of CPU units reserved for the container.</p>
   */
  Cpu?: number;

  /**
   * <p>The dependencies that are defined for container startup and shutdown.</p>
   */
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];

  /**
   * <p>Whether to disable networking within the container.</p>
   */
  DisableNetworking?: boolean;

  /**
   * <p>A list of DNS search domains that are presented to the container.</p>
   */
  DnsSearchDomains?: string[];

  /**
   * <p>A list of DNS servers that are presented to the container.</p>
   */
  DnsServers?: string[];

  /**
   * <p>A key-value map of labels to add to the container.</p>
   */
  DockerLabels?: Record<string, string>;

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems.</p>
   */
  DockerSecurityOptions?: string[];

  /**
   * <p>The entry point that is passed to the container.</p>
   */
  EntryPoint?: string[];

  /**
   * <p>The environment variables to pass to a container.</p>
   */
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];

  /**
   * <p>A list of files containing the environment variables to pass to a container.</p>
   */
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];

  /**
   * <p>Whether the container is essential. All tasks must have at least one essential container.</p>
   */
  Essential?: boolean;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <b>/etc/hosts</b> file on the container.</p>
   */
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];

  /**
   * <p>The FireLens configuration for the container. Specifies and configures a log router for container logs.</p>
   */
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;

  /**
   * <p>The container health check command and associated configuration parameters for the container.</p>
   */
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;

  /**
   * <p>The hostname to use for the container.</p>
   */
  Hostname?: string;

  /**
   * <p>The image used to start the container.</p>
   */
  Image?: string;

  /**
   * <p>If set to true, then containerized applications can be deployed that require <code>stdin</code> or a <code>tty</code> to be allocated.</p>
   */
  Interactive?: boolean;

  /**
   * <p>A list of links for the container in the form <code>
   *                <i>container_name</i>:<i>alias</i>
   *             </code>. Allows containers to communicate with each other without the need for port mappings.</p>
   */
  Links?: string[];

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.</p>
   */
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;

  /**
   * <p>The log configuration specification for the container.</p>
   */
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is shut down. The total amount of memory reserved for all containers within a task must be lower than the task memory value, if one is specified.</p>
   */
  Memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container.</p>
   */
  MemoryReservation?: number;

  /**
   * <p>The mount points for the data volumes in the container.</p>
   */
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];

  /**
   * <p>The name of the container.</p>
   */
  Name?: string;

  /**
   * <p>The list of port mappings for the container.</p>
   */
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];

  /**
   * <p>Whether the container is given elevated privileges on the host container instance. The elevated privileges are similar to the root user.</p>
   */
  Privileged?: boolean;

  /**
   * <p>Whether to allocate a TTY to the container.</p>
   */
  PseudoTerminal?: boolean;

  /**
   * <p>Whether the container is given read-only access to its root file system.</p>
   */
  ReadonlyRootFilesystem?: boolean;

  /**
   * <p>The private repository authentication credentials to use.</p>
   */
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU.</p>
   */
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];

  /**
   * <p>The secrets to pass to the container.</p>
   */
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];

  /**
   * <p>The number of seconds to wait before giving up on resolving dependencies for a container. </p>
   */
  StartTimeout?: number;

  /**
   * <p>The number of seconds to wait before the container is stopped if it doesn't shut down normally on its own.</p>
   */
  StopTimeout?: number;

  /**
   * <p>A list of namespaced kernel parameters to set in the container.</p>
   */
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];

  /**
   * <p>A list of ulimits to set in the container. </p>
   */
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];

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
   */
  User?: string;

  /**
   * <p>Data volumes to mount from another container.</p>
   */
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];

  /**
   * <p>The working directory in which to run commands inside the container.</p>
   */
  WorkingDirectory?: string;
}

/**
 * @public
 * <p>An Elastic Inference accelerator to use
 *          for the containers in the task.</p>
 */
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * <p>The Elastic Inference accelerator device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  DeviceType?: string;
}

/**
 * @public
 * <p>A placement constraint object to use for tasks.</p>
 */
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * <p>A cluster query language expression to apply to the constraint.</p>
   */
  Expression?: string;

  /**
   * <p>The type of constraint.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>A network configuration parameter to provide to the Container Network Interface (CNI) plugin.</p>
 */
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * <p>The name of the property.</p>
   */
  Name?: string;

  /**
   * <p>The value of the property.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The configuration details for the App Mesh
 *          proxy.</p>
 */
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   */
  ContainerName?: string;

  /**
   * <p>The set of network configuration parameters to provide to the Container Network Interface (CNI) plugin, specified as key-value pairs.</p>
   */
  ProxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];

  /**
   * <p>The proxy type.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about a Docker volume.</p>
 */
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * <p>Whether to create the Docker volume automatically if it does not already exist.</p>
   */
  Autoprovision?: boolean;

  /**
   * <p>The Docker volume driver to use.</p>
   */
  Driver?: string;

  /**
   * <p>A map of Docker driver-specific options that are passed through.</p>
   */
  DriverOpts?: Record<string, string>;

  /**
   * <p>Custom metadata to add to the Docker volume.</p>
   */
  Labels?: Record<string, string>;

  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned
   * automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops. Valid values are <code>shared</code> or <code>task</code>.</p>
   */
  Scope?: string;
}

/**
 * @public
 * <p></p>
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * <p>The Amazon EFS access point identifier to use.</p>
   */
  AccessPointId?: string;

  /**
   * <p>Whether to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system.</p>
   */
  Iam?: string;
}

/**
 * @public
 * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
 */
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * <p>The authorization configuration details for the Amazon EFS file system.</p>
   */
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;

  /**
   * <p>The Amazon EFS file system identifier to use.</p>
   */
  FilesystemId?: string;

  /**
   * <p>The directory within the Amazon EFS file system to mount as the root directory inside the host.</p>
   */
  RootDirectory?: string;

  /**
   * <p>Whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. </p>
   */
  TransitEncryption?: string;

  /**
   * <p>The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.</p>
   */
  TransitEncryptionPort?: number;
}

/**
 * @public
 * <p>Information about a bind mount host volume.</p>
 */
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * <p>The path on the host container instance that is presented to the container.</p>
   */
  SourcePath?: string;
}

/**
 * @public
 * <p>A data volume to mount from another container.</p>
 */
export interface AwsEcsTaskDefinitionVolumesDetails {
  /**
   * <p>Information about a Docker volume.</p>
   */
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;

  /**
   * <p>Information about the Amazon Elastic File System file system that is used for task storage.</p>
   */
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;

  /**
   * <p>Information about a bind mount host volume.</p>
   */
  Host?: AwsEcsTaskDefinitionVolumesHostDetails;

  /**
   * <p>The name of the data volume.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Details about a task definition. A task definition describes the container and volume definitions
 *          of an Amazon Elastic Container Service task.</p>
 */
export interface AwsEcsTaskDefinitionDetails {
  /**
   * <p>The container definitions that describe the containers that make up the task.</p>
   */
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];

  /**
   * <p>The number of CPU units used by the task.Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>256 (.25 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>512 (.5 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1024 (1 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2048 (2 vCPU)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4096 (4 vCPU)</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Cpu?: string;

  /**
   * <p>The ARN of the task execution role that grants the container agent permission to make API calls on behalf of the container user.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The name of a family that this task definition is registered to.</p>
   */
  Family?: string;

  /**
   * <p>The Elastic Inference accelerators to use for the containers in the task.</p>
   */
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];

  /**
   * <p>The inter-process communication (IPC) resource namespace to use for the containers in the task. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>host</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IpcMode?: string;

  /**
   * <p>The amount (in MiB) of memory used by the task. </p>
   *          <p>For tasks that are hosted on Amazon EC2, you can provide a task-level memory value or a container-level memory value.
   *       For tasks that are hosted on Fargate, you must use one of the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size">specified values</a> in the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>, which determines your range of supported values for the <code>Cpu</code> and <code>Memory</code> parameters.</p>
   */
  Memory?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>awsvpc</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bridge</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  NetworkMode?: string;

  /**
   * <p>The process namespace to use for the containers in the task. Valid values are <code>host</code> or <code>task</code>.</p>
   */
  PidMode?: string;

  /**
   * <p>The placement constraint objects to use for tasks.</p>
   */
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];

  /**
   * <p>The configuration details for the App Mesh proxy.</p>
   */
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;

  /**
   * <p>The task launch types that the task definition was validated against.</p>
   */
  RequiresCompatibilities?: string[];

  /**
   * <p>The short name or ARN of the IAM role that grants containers in the task permission to call Amazon Web Services API operations on your behalf.</p>
   */
  TaskRoleArn?: string;

  /**
   * <p>The data volume definitions for the task.</p>
   */
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[];
}

/**
 * @public
 * <p>Provides details on a container instance bind mount host volume.
 *       </p>
 */
export interface AwsEcsTaskVolumeHostDetails {
  /**
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path
   * on the host container instance that's presented to the container.
   *       </p>
   */
  SourcePath?: string;
}

/**
 * @public
 * <p>Provides information about a data volume that's used in a task definition.
 *       </p>
 */
export interface AwsEcsTaskVolumeDetails {
  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and
   * hyphens are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.
   *       </p>
   */
  Name?: string;

  /**
   * <p>This parameter is specified when you use bind mount host volumes. The contents of the <code>host</code> parameter
   * determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *       </p>
   */
  Host?: AwsEcsTaskVolumeHostDetails;
}

/**
 * @public
 * <p>Provides details about a task in a cluster.
 *       </p>
 */
export interface AwsEcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the task.
   *       </p>
   */
  ClusterArn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.
   *       </p>
   */
  TaskDefinitionArn?: string;

  /**
   * <p>The version counter for the task.
   *       </p>
   */
  Version?: string;

  /**
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for the time when
   * the task entered the <code>PENDING</code> state.
   *       </p>
   */
  CreatedAt?: string;

  /**
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the time when the
   *          task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state.
   *    </p>
   */
  StartedAt?: string;

  /**
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the
   *          <code>startedBy</code> parameter contains the deployment ID of that service.
   *       </p>
   */
  StartedBy?: string;

  /**
   * <p>The name of the task group that's associated with the task.
   *       </p>
   */
  Group?: string;

  /**
   * <p>Details about the data volume that is used in a task definition.
   *       </p>
   */
  Volumes?: AwsEcsTaskVolumeDetails[];

  /**
   * <p>The containers that are associated with the task.
   *       </p>
   */
  Containers?: AwsEcsContainerDetails[];
}

/**
 * @public
 * <p>Provides details for all file system operations using this Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointPosixUserDetails {
  /**
   * <p>The POSIX group ID used for all file system operations using this access point.
   *       </p>
   */
  Gid?: string;

  /**
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.
   *       </p>
   */
  SecondaryGids?: string[];

  /**
   * <p>The POSIX user ID used for all file system operations using this access point.
   *       </p>
   */
  Uid?: string;
}

/**
 * @public
 * <p>Provides information about the settings that Amazon EFS uses to create the root directory
 * when a client connects to an access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * <p>Specifies the POSIX group ID to apply to the root directory.
   *       </p>
   */
  OwnerGid?: string;

  /**
   * <p>Specifies the POSIX user ID to apply to the root directory.
   *       </p>
   */
  OwnerUid?: string;

  /**
   * <p>Specifies the POSIX permissions to apply to the root directory, in the format of an octal number
   * representing the file's mode bits.
   *       </p>
   */
  Permissions?: string;
}

/**
 * @public
 * <p>Provides information about the directory on the Amazon EFS file system that the access point exposes
 * as the root directory to NFS clients using the access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryDetails {
  /**
   * <p>Specifies the POSIX IDs and permissions to apply to the access point's root directory.
   *       </p>
   */
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;

  /**
   * <p>Specifies the path on the Amazon EFS file system to expose as the root directory to NFS clients
   * using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified
   * path does not exist, you are required to provide <code>CreationInfo</code>.
   *       </p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointDetails {
  /**
   * <p>The ID of the Amazon EFS access point.
   *       </p>
   */
  AccessPointId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point. </p>
   */
  Arn?: string;

  /**
   * <p>The opaque string specified in the request to ensure idempotent creation.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Amazon EFS file system that the access point applies to.
   *       </p>
   */
  FileSystemId?: string;

  /**
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point,
   * that is used for all file operations by NFS clients using the access point.
   *       </p>
   */
  PosixUser?: AwsEfsAccessPointPosixUserDetails;

  /**
   * <p>The directory on the Amazon EFS file system that the access point exposes as the root
   * directory to NFS clients using the access point.
   *       </p>
   */
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}

/**
 * @public
 * <p>Details for a cluster logging configuration.</p>
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * <p>Whether the logging types that are listed in <code>Types</code> are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of logging types. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>api</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audit</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>authenticator</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>controllerManager</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduler</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];
}

/**
 * @public
 * <p>The logging configuration for an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * <p>Cluster logging configurations.</p>
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}
