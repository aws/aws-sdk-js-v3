// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  AdminStatus,
  AutoEnableStandards,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails,
  BooleanFilter,
  Compliance,
  DateFilter,
  FindingProviderFields,
  InsightResultValue,
  IntegrationType,
  IpFilter,
  KeywordFilter,
  Malware,
  MapFilter,
  Network,
  NetworkPathComponent,
  Note,
  NumberFilter,
  PatchSummary,
  PortProbeDetail,
  ProcessDetails,
  Remediation,
  Resource,
  Severity,
  SeverityLabel,
  StandardsStatusReason,
  StringFilter,
  Threat,
  ThreatIntelIndicator,
  Vulnerability,
  Workflow,
} from "./models_1";
import {
  ControlStatus,
  RecordState,
  SeverityRating,
  SortOrder,
  StandardsStatus,
  VerificationState,
  WorkflowState,
  WorkflowStatus,
} from "./models_2";
import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

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

export namespace AcceptAdministratorInvitationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptAdministratorInvitationRequest): any => ({
    ...obj,
  });
}

export interface AcceptAdministratorInvitationResponse {}

export namespace AcceptAdministratorInvitationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptAdministratorInvitationResponse): any => ({
    ...obj,
  });
}

/**
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
 * <p>There is an issue with the account used to make the request. Either Security Hub is not enabled
 *          for the account, or the account does not have permission to perform this action.</p>
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

export namespace AcceptInvitationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
}

export interface AcceptInvitationResponse {}

export namespace AcceptInvitationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace AccountDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provided if <code>CallerType</code> is <code>domain</code>. It provides information
 *          about the DNS domain that issued the API call.</p>
 */
export interface AwsApiCallActionDomainDetails {
  /**
   * <p>The name of the DNS domain that issued the API call.</p>
   */
  Domain?: string;
}

export namespace AwsApiCallActionDomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiCallActionDomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a city.</p>
 */
export interface City {
  /**
   * <p>The name of the city.</p>
   */
  CityName?: string;
}

export namespace City {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: City): any => ({
    ...obj,
  });
}

/**
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

export namespace Country {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Country): any => ({
    ...obj,
  });
}

/**
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

export namespace GeoLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoLocation): any => ({
    ...obj,
  });
}

/**
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

export namespace IpOrganizationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpOrganizationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace ActionRemoteIpDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionRemoteIpDetails): any => ({
    ...obj,
  });
}

/**
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
   */
  FirstSeen?: string;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the API call was most recently
   *          observed.</p>
   */
  LastSeen?: string;
}

export namespace AwsApiCallAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiCallAction): any => ({
    ...obj,
  });
}

/**
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

export namespace DnsRequestAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsRequestAction): any => ({
    ...obj,
  });
}

/**
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

export namespace ActionLocalPortDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionLocalPortDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace ActionRemotePortDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionRemotePortDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace NetworkConnectionAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConnectionAction): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the IP address where the scanned port is located.</p>
 */
export interface ActionLocalIpDetails {
  /**
   * <p>The IP address.</p>
   */
  IpAddressV4?: string;
}

export namespace ActionLocalIpDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionLocalIpDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace PortProbeAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortProbeAction): any => ({
    ...obj,
  });
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

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
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

export namespace ActionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionTarget): any => ({
    ...obj,
  });
}

/**
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

export namespace Adjustment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Adjustment): any => ({
    ...obj,
  });
}

/**
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

export namespace AdminAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdminAccount): any => ({
    ...obj,
  });
}

/**
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

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsApiGatewayAccessLogSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayAccessLogSettings): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsApiGatewayCanarySettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayCanarySettings): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsApiGatewayEndpointConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayEndpointConfiguration): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsApiGatewayMethodSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayMethodSettings): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsApiGatewayRestApiDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayRestApiDetails): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>Indicates when the stage was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastUpdatedDate?: string;

  /**
   * <p>The ARN of the web ACL associated with the stage.</p>
   */
  WebAclArn?: string;
}

export namespace AwsApiGatewayStageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayStageDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCorsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCorsConfiguration): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   *          <p>For HTTP APIs, must be <code>${request.method} ${request.path}</code>. This is the
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

export namespace AwsApiGatewayV2ApiDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayV2ApiDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsApiGatewayV2RouteSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayV2RouteSettings): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsApiGatewayV2StageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsApiGatewayV2StageDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An Availability Zone for the automatic scaling group.</p>
 */
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Value?: string;
}

export namespace AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification
  ): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the instances distribution.</p>
 */
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  /**
   * <p>How to allocate instance types to fulfill On-Demand capacity.</p>
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
   * <p>How to allocate instances across Spot Instance pools.</p>
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

export namespace AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The service to use for the health checks.</p>
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsAutoScalingAutoScalingGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingAutoScalingGroupDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The volume type.</p>
   */
  VolumeType?: string;
}

export namespace AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsAutoScalingLaunchConfigurationMetadataOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingLaunchConfigurationMetadataOptions): any => ({
    ...obj,
  });
}

/**
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
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsAutoScalingLaunchConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAutoScalingLaunchConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCertificateManagerCertificateResourceRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateResourceRecord): any => ({
    ...obj,
  });
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

export namespace AwsCertificateManagerCertificateDomainValidationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateDomainValidationOption): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCertificateManagerCertificateExtendedKeyUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateExtendedKeyUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a key usage X.509 v3 extension object.</p>
 */
export interface AwsCertificateManagerCertificateKeyUsage {
  /**
   * <p>The key usage extension name.</p>
   */
  Name?: string;
}

export namespace AwsCertificateManagerCertificateKeyUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateKeyUsage): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCertificateManagerCertificateOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateOptions): any => ({
    ...obj,
  });
}

/**
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
   * <p>The reason that a renewal request was unsuccessful.</p>
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt?: string;
}

export namespace AwsCertificateManagerCertificateRenewalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateRenewalSummary): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NotAfter?: string;

  /**
   * <p>The time before which the certificate is not valid.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsCertificateManagerCertificateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCertificateManagerCertificateDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFormationStackDriftInformationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFormationStackDriftInformationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFormationStackOutputsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFormationStackOutputsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFormationStackDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFormationStackDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionCacheBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionCacheBehavior): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about caching for the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionCacheBehaviors {
  /**
   * <p>The cache behaviors for the distribution.</p>
   */
  Items?: AwsCloudFrontDistributionCacheBehavior[];
}

export namespace AwsCloudFrontDistributionCacheBehaviors {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionCacheBehaviors): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionDefaultCacheBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionDefaultCacheBehavior): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionLogging {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionLogging): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about when an origin group fails over.</p>
 */
export interface AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * <p>Information about the status codes that cause an origin group to fail over.</p>
   */
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}

export namespace AwsCloudFrontDistributionOriginGroupFailover {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginGroupFailover): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an origin group for the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOriginGroup {
  /**
   * <p>Provides the criteria for an origin group to fail over.</p>
   */
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}

export namespace AwsCloudFrontDistributionOriginGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about origin groups that are associated with the CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOriginGroups {
  /**
   * <p>The list of origin groups.</p>
   */
  Items?: AwsCloudFrontDistributionOriginGroup[];
}

export namespace AwsCloudFrontDistributionOriginGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginGroups): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionOriginSslProtocols {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginSslProtocols): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionOriginCustomOriginConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginCustomOriginConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an origin that is an Amazon S3 bucket that is not configured with static website
 *          hosting.</p>
 */
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * <p>The CloudFront origin access identity to associate with the origin.</p>
   */
  OriginAccessIdentity?: string;
}

export namespace AwsCloudFrontDistributionOriginS3OriginConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginS3OriginConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionOriginItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginItem): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about origins and origin groups for this CloudFront distribution.</p>
 */
export interface AwsCloudFrontDistributionOrigins {
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items?: AwsCloudFrontDistributionOriginItem[];
}

export namespace AwsCloudFrontDistributionOrigins {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOrigins): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudFrontDistributionViewerCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionViewerCertificate): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsCloudFrontDistributionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudTrailTrailDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudTrailTrailDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudWatchAlarmDimensionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudWatchAlarmDimensionsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCloudWatchAlarmDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCloudWatchAlarmDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectArtifactsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectArtifactsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectEnvironmentRegistryCredential): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectEnvironment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectEnvironment): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectLogsConfigS3LogsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectLogsConfigS3LogsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectLogsConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectLogsConfigDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectSource): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectVpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectVpcConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsCodeBuildProjectDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsDynamoDbTableAttributeDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableAttributeDefinition): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastUpdateToPayPerRequestDateTime?: string;
}

export namespace AwsDynamoDbTableBillingModeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableBillingModeSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A component of the key schema for the DynamoDB table, a global secondary index, or a
 *          local secondary index.</p>
 */
export interface AwsDynamoDbTableKeySchema {
  /**
   * <p>The name of the key schema attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of key used for the key schema attribute.</p>
   */
  KeyType?: string;
}

export namespace AwsDynamoDbTableKeySchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableKeySchema): any => ({
    ...obj,
  });
}

/**
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
   * <p>The types of attributes that are projected into the index.</p>
   */
  ProjectionType?: string;
}

export namespace AwsDynamoDbTableProjection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableProjection): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the provisioned throughput for the table or for a global secondary
 *          index.</p>
 */
export interface AwsDynamoDbTableProvisionedThroughput {
  /**
   * <p>Indicates when the provisioned throughput was last decreased.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastDecreaseDateTime?: string;

  /**
   * <p>Indicates when the provisioned throughput was last increased.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsDynamoDbTableProvisionedThroughput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableProvisionedThroughput): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsDynamoDbTableGlobalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableGlobalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsDynamoDbTableLocalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableLocalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
 * <p>Replica-specific configuration for the provisioned throughput.</p>
 */
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * <p>The read capacity units for the replica.</p>
   */
  ReadCapacityUnits?: number;
}

export namespace AwsDynamoDbTableProvisionedThroughputOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableProvisionedThroughputOverride): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableReplicaGlobalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
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
   * <p>The current status of the replica.</p>
   */
  ReplicaStatus?: string;

  /**
   * <p>Detailed information about the replica status.</p>
   */
  ReplicaStatusDescription?: string;
}

export namespace AwsDynamoDbTableReplica {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableReplica): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  RestoreDateTime?: string;

  /**
   * <p>Whether a restore is currently in progress.</p>
   */
  RestoreInProgress?: boolean;
}

export namespace AwsDynamoDbTableRestoreSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableRestoreSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the server-side encryption for the table.</p>
 */
export interface AwsDynamoDbTableSseDescription {
  /**
   * <p>If the key is inaccessible, the date and time when DynamoDB detected that the key was
   *          inaccessible.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsDynamoDbTableSseDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableSseDescription): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsDynamoDbTableStreamSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableStreamSpecification): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   * <p>The current status of the table.</p>
   */
  TableStatus?: string;
}

export namespace AwsDynamoDbTableDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsDynamoDbTableDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2EipDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2EipDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2InstanceMetadataOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2InstanceMetadataOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a network interface for the Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceNetworkInterfacesDetails {
  /**
   * <p>The identifier of the network interface. The details are in a corresponding <code>AwsEc2NetworkInterfacesDetails</code> object.</p>
   */
  NetworkInterfaceId?: string;
}

export namespace AwsEc2InstanceNetworkInterfacesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2InstanceNetworkInterfacesDetails): any => ({
    ...obj,
  });
}

/**
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
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
}

export namespace AwsEc2InstanceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2InstanceDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkAclAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkAclAssociation): any => ({
    ...obj,
  });
}

/**
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

export namespace IcmpTypeCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IcmpTypeCode): any => ({
    ...obj,
  });
}

/**
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

export namespace PortRangeFromTo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRangeFromTo): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkAclEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkAclEntry): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the network interface attachment.</p>
 */
export interface AwsEc2NetworkInterfaceAttachment {
  /**
   * <p>Indicates when the attachment initiated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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

export namespace AwsEc2NetworkInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an IPV6 address that is associated with the network
 *          interface.</p>
 */
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * <p>The IPV6 address.</p>
   */
  IpV6Address?: string;
}

export namespace AwsEc2NetworkInterfaceIpV6AddressDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceIpV6AddressDetail): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkInterfacePrivateIpAddressDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfacePrivateIpAddressDetail): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkInterfaceSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceSecurityGroup): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2NetworkInterfaceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A range of IPv4 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpRange {
  /**
   * <p>The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;
}

export namespace AwsEc2SecurityGroupIpRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpRange): any => ({
    ...obj,
  });
}

/**
 * <p>A range of IPv6 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpv6Range {
  /**
   * <p>The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;
}

export namespace AwsEc2SecurityGroupIpv6Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpv6Range): any => ({
    ...obj,
  });
}

/**
 * <p>A prefix list ID.</p>
 */
export interface AwsEc2SecurityGroupPrefixListId {
  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

export namespace AwsEc2SecurityGroupPrefixListId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupPrefixListId): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2SecurityGroupUserIdGroupPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupUserIdGroupPair): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2SecurityGroupIpPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpPermission): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2SecurityGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: string;
}

export namespace Ipv6CidrBlockAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6CidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
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
   * <p>The current state of the subnet.</p>
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

export namespace AwsEc2SubnetDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2SubnetDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2TransitGatewayDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2TransitGatewayDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The attachment state of the volume.</p>
   */
  Status?: string;
}

export namespace AwsEc2VolumeAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VolumeAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an EC2 volume.</p>
 */
export interface AwsEc2VolumeDetails {
  /**
   * <p>Indicates when the volume was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
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
   * <p>The volume state.</p>
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

export namespace AwsEc2VolumeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VolumeDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace CidrBlockAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
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
   * <p>The current state of the VPC.</p>
   */
  State?: string;
}

export namespace AwsEc2VpcDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The service type information for a VPC endpoint service.</p>
 */
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: string;
}

export namespace AwsEc2VpcEndpointServiceServiceTypeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcEndpointServiceServiceTypeDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The current state of the service.</p>
   */
  ServiceState?: string;

  /**
   * <p>The types for the service.</p>
   */
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[];
}

export namespace AwsEc2VpcEndpointServiceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcEndpointServiceDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace VpcInfoCidrBlockSetDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInfoCidrBlockSetDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace VpcInfoIpv6CidrBlockSetDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInfoIpv6CidrBlockSetDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace VpcInfoPeeringOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInfoPeeringOptionsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpcPeeringConnectionVpcInfoDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcPeeringConnectionVpcInfoDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpcPeeringConnectionStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcPeeringConnectionStatusDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpcPeeringConnectionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpcPeeringConnectionDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpnConnectionOptionsTunnelOptionsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpnConnectionOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpnConnectionOptionsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2VpnConnectionRoutesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpnConnectionRoutesDetails): any => ({
    ...obj,
  });
}

/**
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
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastStatusChange?: string;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *          interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;
}

export namespace AwsEc2VpnConnectionVgwTelemetryDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpnConnectionVgwTelemetryDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon EC2 VPN
 *          connection.</p>
 */
export interface AwsEc2VpnConnectionDetails {
  /**
   * <p>The identifier of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The current state of the VPN connection.</p>
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

export namespace AwsEc2VpnConnectionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2VpnConnectionDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The architecture of the image.</p>
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
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ImagePublishedAt?: string;
}

export namespace AwsEcrContainerImageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrContainerImageDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The image scanning configuration for a repository.</p>
 */
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  /**
   * <p>Whether to scan images after they are pushed to a repository.</p>
   */
  ScanOnPush?: boolean;
}

export namespace AwsEcrRepositoryImageScanningConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrRepositoryImageScanningConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcrRepositoryLifecyclePolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrRepositoryLifecyclePolicyDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The tag mutability setting for the repository.</p>
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

export namespace AwsEcrRepositoryDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrRepositoryDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether to enable CloudWatch Container Insights for the ECS cluster.</p>
 */
export interface AwsEcsClusterClusterSettingsDetails {
  /**
   * <p>The name of the setting.</p>
   */
  Name?: string;

  /**
   * <p>The value of the setting.</p>
   */
  Value?: string;
}

export namespace AwsEcsClusterClusterSettingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsClusterClusterSettingsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The run command configuration for the cluster.</p>
 */
export interface AwsEcsClusterConfigurationDetails {
  /**
   * <p>Contains the run command configuration for the cluster.</p>
   */
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}

export namespace AwsEcsClusterConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsClusterConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsClusterDefaultCapacityProviderStrategyDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsClusterDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsMountPoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsMountPoint): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsContainerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsContainerDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceCapacityProviderStrategyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceCapacityProviderStrategyDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceDeploymentConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceDeploymentConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceDeploymentControllerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceDeploymentControllerDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceLoadBalancersDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceLoadBalancersDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.</p>
 */
export interface AwsEcsServiceNetworkConfigurationDetails {
  /**
   * <p>The VPC subnet and security group configuration.</p>
   */
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}

export namespace AwsEcsServiceNetworkConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceNetworkConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServicePlacementConstraintsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServicePlacementConstraintsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServicePlacementStrategiesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServicePlacementStrategiesDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceServiceRegistriesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceServiceRegistriesDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsServiceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsServiceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A dependency that is defined for container startup and shutdown.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  /**
   * <p>The dependency condition of the dependent container. Indicates the required status of the dependent container before the current container can start.</p>
   */
  Condition?: string;

  /**
   * <p>The name of the dependent container.</p>
   */
  ContainerName?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace RelatedFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedFinding): any => ({
    ...obj,
  });
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *          <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services
 *          security services and third-party solutions, and security standards checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  /**
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by product name, you use this attribute.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by company name, you use this attribute.</p>
   */
  CompanyName?: string;

  /**
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   */
  Region?: string;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];

  /**
   * <p>Indicates when the security-findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider most recently observed the potential
   *          security issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>Indicates when the security-findings provider last updated the finding record.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A finding's severity.</p>
   */
  Severity?: Severity;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   */
  ProductFields?: Record<string, string>;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>Details about the threat detected in a security finding and the file paths that were affected by the threat.
   *       </p>
   */
  Threats?: Threat[];

  /**
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * @deprecated
   *
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   */
  PatchSummary?: PatchSummary;

  /**
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   */
  Action?: Action;

  /**
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   */
  FindingProviderFields?: FindingProviderFields;

  /**
   * <p>Indicates whether the finding is a sample finding.</p>
   */
  Sample?: boolean;
}

export namespace AwsSecurityFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 */
export interface AwsSecurityFindingFilters {
  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The Region from which the finding was generated.</p>
   */
  Region?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * @deprecated
   *
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * @deprecated
   *
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The name of the principal that is associated with an IAM access key.</p>
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The name of an IAM user.</p>
   */
  ResourceAwsIamUserUserName?: StringFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *                <p>If one of the following occurs, the workflow status is changed automatically from
   *                <code>NOTIFIED</code> to <code>NEW</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is
   *                needed.</p>
   *                <p>The workflow status of a <code>SUPPRESSED</code> finding does not change if
   *                <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                <code>ACTIVE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *                <p>The finding remains <code>RESOLVED</code> unless one of the following occurs:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>In those cases, the workflow status is automatically reset to <code>NEW</code>.</p>
   *                <p>For findings from controls, if <code>Compliance.Status</code> is <code>PASSED</code>,
   *                then Security Hub automatically sets the workflow status to <code>RESOLVED</code>.</p>
   *             </li>
   *          </ul>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  FindingProviderFieldsConfidence?: NumberFilter[];

  /**
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  FindingProviderFieldsCriticality?: NumberFilter[];

  /**
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The finding provider value for the severity label.</p>
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];

  /**
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  FindingProviderFieldsTypes?: StringFilter[];

  /**
   * <p>Indicates whether or not sample findings are included in the filter results.</p>
   */
  Sample?: BooleanFilter[];
}

export namespace AwsSecurityFindingFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a finding to update using <code>BatchUpdateFindings</code>.</p>
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

export namespace AwsSecurityFindingIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingIdentifier): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsRequest {
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export namespace BatchDisableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: Record<string, string> | undefined;

  /**
   * <p>The status of the standard subscription.</p>
   *          <p>The status values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Standard is in the process of being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - Standard is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE</code> - Standard could not be enabled completely. Some controls may not be available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Standard is in the process of being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Standard could not be disabled.</p>
   *             </li>
   *          </ul>
   */
  StandardsStatus: StandardsStatus | string | undefined;

  /**
   * <p>The reason for the current status.</p>
   */
  StandardsStatusReason?: StandardsStatusReason;
}

export namespace StandardsSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscription): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchDisableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: Record<string, string>;
}

export namespace StandardsSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsRequest {
  /**
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export namespace BatchEnableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchEnableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsResponse): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

export namespace BatchImportFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace ImportFindingsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportFindingsError): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

export namespace BatchImportFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace NoteUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoteUpdate): any => ({
    ...obj,
  });
}

/**
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

export namespace SeverityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SeverityUpdate): any => ({
    ...obj,
  });
}

/**
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

export namespace WorkflowUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowUpdate): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

export namespace BatchUpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The code associated with the error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace BatchUpdateFindingsUnprocessedFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsUnprocessedFinding): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

export namespace BatchUpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsResponse): any => ({
    ...obj,
  });
}

export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

export namespace CreateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface CreateActionTargetResponse {
  /**
   * <p>The ARN for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace CreateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

export interface CreateFindingAggregatorRequest {
  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a comma-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a comma-separated list of Regions that do aggregate findings to the aggregation Region.
   *       </p>
   */
  Regions?: string[];
}

export namespace CreateFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface CreateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop finding aggregation.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace CreateFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace CreateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightRequest): any => ({
    ...obj,
  });
}

export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

export namespace CreateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightResponse): any => ({
    ...obj,
  });
}

export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

export namespace CreateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

export namespace Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj,
  });
}

export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace CreateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsRequest {
  /**
   * <p>The list of account IDs for the accounts from which to decline the invitations to
   *          Security Hub.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeclineInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetResponse): any => ({
    ...obj,
  });
}

export interface DeleteFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export namespace DeleteFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface DeleteFindingAggregatorResponse {}

export namespace DeleteFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightRequest): any => ({
    ...obj,
  });
}

export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightResponse): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsRequest {
  /**
   * <p>The list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
}

export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeActionTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeActionTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsResponse): any => ({
    ...obj,
  });
}

export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

export namespace DescribeHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubRequest): any => ({
    ...obj,
  });
}

export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;
}

export namespace DescribeHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *          accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *          accounts.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

export namespace DescribeOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

export namespace DescribeProductsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export namespace Product {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj,
  });
}

export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a specific standard.</p>
 */
export interface Standard {
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;
}

export namespace Standard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Standard): any => ({
    ...obj,
  });
}

export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsControlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

export namespace StandardsControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductResponse {}

export namespace DisableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubRequest {}

export namespace DisableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubResponse {}

export namespace DisableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountRequest {}

export namespace DisassociateFromAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountResponse {}

export namespace DisassociateFromAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DisassociateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMembersResponse {}

export namespace DisassociateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export namespace EnableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export namespace EnableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubResponse {}

export namespace EnableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A finding aggregator. A finding aggregator contains the configuration for finding aggregation.</p>
 */
export interface FindingAggregator {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;
}

export namespace FindingAggregator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingAggregator): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountRequest {}

export namespace GetAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

export namespace Invitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

export namespace GetAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetEnabledStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetEnabledStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
    ...obj,
  });
}

export interface GetFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export namespace GetFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface GetFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace GetFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingAggregatorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SortCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
}

export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

export namespace GetFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

export namespace InsightResults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj,
  });
}

export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export namespace GetInsightResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace Insight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
}

export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export namespace GetMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVED</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_SUSPENDED</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
}

export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace InviteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
}

export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListEnabledProductsForImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportRequest): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEnabledProductsForImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportResponse): any => ({
    ...obj,
  });
}

export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   */
  MaxResults?: number;
}

export namespace ListFindingAggregatorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregatorsRequest): any => ({
    ...obj,
  });
}

export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   */
  FindingAggregators?: FindingAggregator[];

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListFindingAggregatorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregatorsResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
}

export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

export namespace UpdateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetResponse {}

export namespace UpdateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a comma-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a comma-separated list of Regions that do aggregate findings to the aggregation Region.</p>
   */
  Regions?: string[];
}

export namespace UpdateFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace UpdateFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

export namespace UpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsResponse {}

export namespace UpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

export namespace UpdateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj,
  });
}

export interface UpdateInsightResponse {}

export namespace UpdateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p>
   *          <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

export namespace UpdateOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;
}

export namespace UpdateSecurityHubConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationResponse {}

export namespace UpdateSecurityHubConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

export namespace UpdateStandardsControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlResponse {}

export namespace UpdateStandardsControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
    ...obj,
  });
}
