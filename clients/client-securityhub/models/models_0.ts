import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  Message?: string;
  Code?: string;
}

export namespace InternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

/**
 * <p>There is an issue with the account used to make the request. Either Security Hub is not enabled
 *          for the account, or the account does not have permission to perform this action.</p>
 */
export interface InvalidAccessException extends __SmithyException, $MetadataBearer {
  name: "InvalidAccessException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidAccessException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAccessException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current AWS
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because we can't find the specified resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an AWS account.</p>
 */
export interface AccountDetails {
  /**
   * <p>The ID of an AWS account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The email of an AWS account.</p>
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
   * <p>The name of the AWS service that the API method belongs to.</p>
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
  AffectedResources?: { [key: string]: string };

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

export namespace PortProbeDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortProbeDetail): any => ({
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
 *                <p>A remote IP address issued an AWS API call</p>
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

export enum AdminStatus {
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>Represents a Security Hub administrator account designated by an organization management
 *          account.</p>
 */
export interface AdminAccount {
  /**
   * <p>The AWS account identifier of the Security Hub administrator account.</p>
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
  StageVariableOverrides?: { [key: string]: string };

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
  Variables?: { [key: string]: string };

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
   * <p>Indicates whether active tracing with AWS X-Ray is enabled for the stage.</p>
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
  StageVariables?: { [key: string]: string };

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
 *                <p>The validation of each domain name in the certificate, as it pertains to AWS
 *                Certificate Manager managed renewal</p>
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
   * <p>The domain name that AWS Certificate Manager uses to send domain validation
   *          emails.</p>
   */
  ValidationDomain?: string;

  /**
   * <p>A list of email addresses that AWS Certificate Manager uses to send domain validation
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
 * <p>Contains information about the AWS Certificate Manager managed renewal for an
 *             <code>AMAZON_ISSUED</code> certificate.</p>
 */
export interface AwsCertificateManagerCertificateRenewalSummary {
  /**
   * <p>Information about the validation of each domain name in the certificate, as it pertains
   *          to AWS Certificate Manager managed renewal. Provided only when the certificate type is
   *             <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];

  /**
   * <p>The status of the AWS Certificate Manager managed renewal of the certificate.</p>
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
 * <p>Provides details about an AWS Certificate Manager certificate.</p>
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
   * <p>The list of ARNs for the AWS resources that use the certificate.</p>
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
   * <p>Information about the status of the AWS Certificate Manager managed renewal for the
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
   * <p>The source of the certificate. For certificates that AWS Certificate Manager provides,
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
 * <p>Provides information about caching for the distribution.</p>
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
 * <p>Contains information about the default cache configuration for the distribution.</p>
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
 * <p>A complex type that controls whether access logs are written for the distribution.</p>
 */
export interface AwsCloudFrontDistributionLogging {
  /**
   * <p>The Amazon S3 bucket to store the access logs in.</p>
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
 * <p>Information about an origin group for the distribution.</p>
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
 * <p>Provides information about origin groups that are associated with the
 *          distribution.</p>
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
 * <p>Information about an origin that is an S3 bucket that is not configured with static
 *          website hosting.</p>
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
 * <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web
 *          server), Amazon Elemental MediaStore, or other server from which CloudFront gets your
 *          files.</p>
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * <p>Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want CloudFront to get objects for this origin.</p>
   */
  DomainName?: string;

  /**
   * <p>A unique identifier for the origin or origin group.</p>
   */
  Id?: string;

  /**
   * <p>An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.</p>
   */
  OriginPath?: string;

  /**
   * <p>An origin that is an S3 bucket that is not configured with static website
   *          hosting.</p>
   */
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
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
 * <p>A complex type that contains information about origins and origin groups for this distribution.</p>
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
 * <p>A distribution configuration.</p>
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
   * <p>Indicates the current status of the distribution.</p>
   */
  Status?: string;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.</p>
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
   * <p>The ARN of the role that the CloudWatch Logs endpoint assumes when it writes to the log
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
   * <p>Whether the trail is created for all accounts in an organization in AWS Organizations,
   *          or only for the current AWS account.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>The AWS KMS key ID to use to encrypt the logs.</p>
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
 * <p>The credentials for access to a private registry.</p>
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  /**
   * <p>The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets
   *          Manager.</p>
   *          <note>
   *             <p>The credential can use the name of the credentials only if they exist in your current
   *             AWS Region. </p>
   *          </note>
   */
  Credential?: string;

  /**
   * <p>The service that created the credentials to access a private Docker registry.</p>
   *          <p>The valid value,<code> SECRETS_MANAGER</code>, is for AWS Secrets Manager.</p>
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
   * <p>The type of credentials AWS CodeBuild uses to pull images in your build.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CODEBUILD</code> specifies that AWS CodeBuild uses its own credentials. This
   *                requires that you modify your ECR repository policy to trust the AWS CodeBuild
   *                service principal.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_ROLE</code> specifies that AWS CodeBuild uses your build project's
   *                service role.</p>
   *             </li>
   *          </ul>
   *          <p>When you use a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When you use an AWS CodeBuild curated image, you
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
   *                   <code>CODECOMMIT</code> - The source code is in an AWS CodeCommit
   *                repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODEPIPELINE</code> - The source code settings are specified in the source
   *                action of a pipeline in AWS CodePipeline.</p>
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
   *                AWS CodePipeline, location should not be specified. If it is specified, AWS
   *                CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a
   *                pipeline's source action instead of this value.</p>
   *             </li>
   *             <li>
   *                <p>For source code in an AWS CodeCommit repository, the HTTPS clone URL to the
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
 * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
 */
export interface AwsCodeBuildProjectVpcConfig {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  Subnets?: string[];

  /**
   * <p>A list of one or more security group IDs in your Amazon VPC.</p>
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
 * <p>Information about an AWS CodeBuild project.</p>
 */
export interface AwsCodeBuildProjectDetails {
  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the
   *          build output artifacts.</p>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the
   *          CMK alias (using the format alias/alias-name). </p>
   */
  EncryptionKey?: string;

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
   * <p>The ARN of the IAM role that enables AWS CodeBuild to interact with dependent AWS
   *          services on behalf of the AWS account.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  VpcConfig?: AwsCodeBuildProjectVpcConfig;
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
   * <p>The identifier of the AWS KMS customer master key (CMK) that will be used for AWS KMS
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
   * <p>The ARN of the AWS KMS customer master key (CMK) that is used for the AWS KMS
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
   * <p>The identifier that AWS assigns to represent the allocation of the Elastic IP address
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
   * <p>The AWS account ID of the owner of the network interface.</p>
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
   * <p>The ICMP code for which to deny or allow access. To deny or allow all codes, use the value -1.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type for which to deny or allow access. To deny or allow all types, use the value -1.</p>
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
   * <p>The protocol that the rule applies to. To deny or allow access to all protocols, use the value -1.</p>
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
 * <p>Contains details about an EC2 network access control list (ACL).</p>
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
   * <p>The identifier of the AWS account that owns the network ACL.</p>
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
   * <p>The AWS account ID of the owner of the instance.</p>
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
   * <p>The ID of an AWS account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *          security group is returned in the response. If the referenced security group is deleted,
   *          this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group in
   *          another AWS. </p>
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
   *          <p>When authorizing security group rules, specifying -1 or a protocol number other than
   *             <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
   *          traffic on all ports, regardless of any port range you specify.</p>
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
   *          <p>A value of -1 indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you
   *          must specify all codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The security group and AWS account ID pairs.</p>
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
   * <p>[VPC only] The prefix list IDs for an AWS service. With outbound rules, this is the AWS
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
 * <p>Details about an EC2 security group.</p>
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
   * <p>The AWS account ID of the owner of the security group.</p>
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
 * <p>Contains information about a subnet in EC2.</p>
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
   * <p>The identifier of the AWS account that owns the subnet.</p>
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
 * <p>An attachment to an AWS EC2 volume.</p>
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
   * <p>Whether the volume is encrypted.</p>
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
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was
   *          used to protect the volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The volume attachments.</p>
   */
  Attachments?: AwsEc2VolumeAttachment[];
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
 * <p>Contains information about a link to another environment that is in the same group.</p>
 */
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * <p>The name of the linked environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the environment link.</p>
   */
  LinkName?: string;
}

export namespace AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentEnvironmentLink): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration option setting for the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * <p>The type of resource that the configuration option is associated with.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The value of the configuration setting.</p>
   */
  Value?: string;
}

export namespace AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentOptionSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the tier of the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentTier {
  /**
   * <p>The name of the environment tier.</p>
   */
  Name?: string;

  /**
   * <p>The type of environment tier.</p>
   */
  Type?: string;

  /**
   * <p>The version of the environment tier.</p>
   */
  Version?: string;
}

export namespace AwsElasticBeanstalkEnvironmentTier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentTier): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an Elastic Beanstalk environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentDetails {
  /**
   * <p>The name of the application that is associated with the environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The URL to the CNAME for this environment.</p>
   */
  Cname?: string;

  /**
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: string;

  /**
   * <p>The date when this environment was last modified.</p>
   */
  DateUpdated?: string;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.</p>
   */
  EndpointUrl?: string;

  /**
   * <p>The ARN of the environment.</p>
   */
  EnvironmentArn?: string;

  /**
   * <p>The identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Links to other environments in the same group.</p>
   */
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];

  /**
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The configuration setting for the environment.</p>
   */
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];

  /**
   * <p>The ARN of the platform version for the environment.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack that is deployed with the environment.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The current operational status of the environment.</p>
   */
  Status?: string;

  /**
   * <p>The tier of the environment.</p>
   */
  Tier?: AwsElasticBeanstalkEnvironmentTier;

  /**
   * <p>The application version of the environment.</p>
   */
  VersionLabel?: string;
}

export namespace AwsElasticBeanstalkEnvironmentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticBeanstalkEnvironmentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
 *          traffic.</p>
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the Elasticsearch
   *          domain.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-0-2019-07</code>, which supports TLSv1.0 and higher</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-2-2019-07</code>, which only supports TLSv1.2</p>
   *             </li>
   *          </ul>
   */
  TLSSecurityPolicy?: string;
}

export namespace AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDomainEndpointOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for encryption at rest.</p>
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID. Takes the form 1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a.</p>
   */
  KmsKeyId?: string;
}

export namespace AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainEncryptionAtRestOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for node-to-node encryption.</p>
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainNodeToNodeEncryptionOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information that Amazon ES derives based on <code>VPCOptions</code> for the
 *          domain.</p>
 */
export interface AwsElasticsearchDomainVPCOptions {
  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>ID for the VPC.</p>
   */
  VPCId?: string;
}

export namespace AwsElasticsearchDomainVPCOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainVPCOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * <p>IAM policy document specifying the access policies for the new Amazon ES domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * <p>Unique identifier for an Amazon ES domain.</p>
   */
  DomainId?: string;

  /**
   * <p>Name of an Amazon ES domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an AWS
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   */
  DomainName?: string;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Amazon ES domain.</p>
   *          <p>The endpoint is a service URL. </p>
   */
  Endpoint?: string;

  /**
   * <p>The key-value pair that exists if the Amazon ES domain uses VPC endpoints.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>Elasticsearch version.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * <p>Information that Amazon ES derives based on <code>VPCOptions</code> for the
   *          domain.</p>
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}

export namespace AwsElasticsearchDomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateAppCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;

  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within the set
   *          of policies for the load balancer.</p>
   */
  PolicyName?: string;
}

export namespace AwsElbAppCookieStickinessPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbAppCookieStickinessPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateLBCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * <p>The amount of time, in seconds, after which the cookie is considered stale. If an
   *          expiration period is not specified, the stickiness session lasts for the duration of the
   *          browser session.</p>
   */
  CookieExpirationPeriod?: number;

  /**
   * <p>The name of the policy. The name must be unique within the set of policies for the load
   *          balancer.</p>
   */
  PolicyName?: string;
}

export namespace AwsElbLbCookieStickinessPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLbCookieStickinessPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the access log configuration for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * <p>The interval in minutes for publishing the access logs.</p>
   *          <p>You can publish access logs either every 5 minutes or every 60 minutes.</p>
   */
  EmitInterval?: number;

  /**
   * <p>Indicates whether access logs are enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The logical hierarchy that was created for the S3 bucket.</p>
   *          <p>If a prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

export namespace AwsElbLoadBalancerAccessLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerAccessLog): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the connection draining configuration for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * <p>Indicates whether connection draining is enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering
   *          the instances.</p>
   */
  Timeout?: number;
}

export namespace AwsElbLoadBalancerConnectionDraining {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerConnectionDraining): any => ({
    ...obj,
  });
}

/**
 * <p>Contains connection settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * <p>The time, in seconds, that the connection can be idle (no data is sent over the
   *          connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout?: number;
}

export namespace AwsElbLoadBalancerConnectionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerConnectionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Contains cross-zone load balancing settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * <p>Indicates whether cross-zone load balancing is enabled for the load balancer.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerCrossZoneLoadBalancing): any => ({
    ...obj,
  });
}

/**
 * <p>Contains attributes for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * <p>Information about the access log configuration for the load balancer.</p>
   *          <p>If the access log is enabled, the load balancer captures detailed information about all
   *          requests. It delivers the information to a specified S3 bucket.</p>
   */
  AccessLog?: AwsElbLoadBalancerAccessLog;

  /**
   * <p>Information about the connection draining configuration for the load balancer.</p>
   *          <p>If connection draining is enabled, the load balancer allows existing requests to
   *          complete before it shifts traffic away from a deregistered or unhealthy instance.</p>
   */
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;

  /**
   * <p>Connection settings for the load balancer.</p>
   *          <p>If an idle timeout is configured, the load balancer allows connections to remain idle
   *          for the specified duration. When a connection is idle, no data is sent over the
   *          connection.</p>
   */
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;

  /**
   * <p>Cross-zone load balancing settings for the load balancer.</p>
   *          <p>If cross-zone load balancing is enabled, the load balancer routes the request traffic
   *          evenly across all instances regardless of the Availability Zones.</p>
   */
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
}

export namespace AwsElbLoadBalancerAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the configuration of an EC2 instance for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The names of the policies that are enabled for the EC2 instance.</p>
   */
  PolicyNames?: string[];
}

export namespace AwsElbLoadBalancerBackendServerDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerBackendServerDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the health checks that are conducted on the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * <p>The number of consecutive health check successes required before the instance is moved
   *          to the Healthy state.</p>
   */
  HealthyThreshold?: number;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual
   *          instance.</p>
   */
  Interval?: number;

  /**
   * <p>The instance that is being checked. The target specifies the protocol and port. The
   *          available protocols are TCP, SSL, HTTP, and HTTPS. The range of valid ports is 1 through
   *          65535.</p>
   *          <p>For the HTTP and HTTPS protocols, the target also specifies the ping path.</p>
   *          <p>For the TCP protocol, the target is specified as <code>TCP:
   *                <i><port></i>
   *             </code>.</p>
   *          <p>For the SSL protocol, the target is specified as
   *                <code>SSL.<i><port></i>
   *             </code>.</p>
   *          <p>For the HTTP and HTTPS protocols, the target is specified as
   *                <code>
   *                <i><protocol></i>:<i><port></i>/<i><path
   *                to ping></i>
   *             </code>.</p>
   */
  Target?: string;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health
   *          check.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of consecutive health check failures that must occur before the instance is
   *          moved to the Unhealthy state.</p>
   */
  UnhealthyThreshold?: number;
}

export namespace AwsElbLoadBalancerHealthCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerHealthCheck): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an EC2 instance for a load balancer.</p>
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * <p>The instance identifier.</p>
   */
  InstanceId?: string;
}

export namespace AwsElbLoadBalancerInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListener {
  /**
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The protocol to use to route traffic to instances.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  InstanceProtocol?: string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   *          <p>On EC2-VPC, you can specify any port from the range 1-65535.</p>
   *          <p>On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587,
   *          1024-65535.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>The load balancer transport protocol to use for routing.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  Protocol?: string;

  /**
   * <p>The ARN of the server certificate.</p>
   */
  SslCertificateId?: string;
}

export namespace AwsElbLoadBalancerListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerListener): any => ({
    ...obj,
  });
}

/**
 * <p>Lists the policies that are enabled for a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * <p>Information about the listener.</p>
   */
  Listener?: AwsElbLoadBalancerListener;

  /**
   * <p>The policies enabled for the listener.</p>
   */
  PolicyNames?: string[];
}

export namespace AwsElbLoadBalancerListenerDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerListenerDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the policies for a load balancer.</p>
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateAppCookieStickinessPolicy</code>.</p>
   */
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  /**
   * <p>The stickiness policies that are created using
   *             <code>CreateLBCookieStickinessPolicy</code>.</p>
   */
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: string[];
}

export namespace AwsElbLoadBalancerPolicies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerPolicies): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the security group for the load balancer.</p>
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The owner of the security group.</p>
   */
  OwnerAlias?: string;
}

export namespace AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerSourceSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about a Classic Load Balancer.</p>
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * <p>The list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Information about the configuration of the EC2 instances.</p>
   */
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  /**
   * <p>The name of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneNameID?: string;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DnsName?: string;

  /**
   * <p>Information about the health checks that are conducted on the load balancer.</p>
   */
  HealthCheck?: AwsElbLoadBalancerHealthCheck;

  /**
   * <p>List of EC2 instances for the load balancer.</p>
   */
  Instances?: AwsElbLoadBalancerInstance[];

  /**
   * <p>The policies that are enabled for the load balancer listeners.</p>
   */
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  /**
   * <p>The attributes for a load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The policies for a load balancer.</p>
   */
  Policies?: AwsElbLoadBalancerPolicies;

  /**
   * <p>The type of load balancer. Only provided if the load balancer is in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public
   *          DNS name that resolves to a public IP address.</p>
   *          <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name
   *          that resolves to a private IP address.</p>
   */
  Scheme?: string;

  /**
   * <p>The security groups for the load balancer. Only provided if the load balancer is in a
   *          VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Information about the security group for the load balancer. This is the security group
   *          that is used for inbound rules.</p>
   */
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  /**
   * <p>The list of subnet identifiers for the load balancer.</p>
   */
  Subnets?: string[];

  /**
   * <p>The identifier of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace AwsElbLoadBalancerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbLoadBalancerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  /**
   * <p>The state code. The initial state of the load balancer is provisioning.</p>
   *          <p>After the load balancer is fully set up and ready to route traffic, its state is
   *          active.</p>
   *          <p>If the load balancer could not be set up, its state is failed. </p>
   */
  Code?: string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export namespace LoadBalancerState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *          are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *          addresses).</p>
   */
  IpAddressType?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace AwsElbv2LoadBalancerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbv2LoadBalancerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * <p>Indicates whether the session used multi-factor authentication (MFA).</p>
   */
  MfaAuthenticated?: boolean;

  /**
   * <p>Indicates when the session was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: string;
}

export namespace AwsIamAccessKeySessionContextAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContextAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the entity that created the session.</p>
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * <p>The type of principal (user, role, or group) that created the session.</p>
   */
  Type?: string;

  /**
   * <p>The principal ID of the principal (user, role, or group) that created the
   *          session.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The ARN of the session.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the AWS account that created the session.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the principal that created the session.</p>
   */
  UserName?: string;
}

export namespace AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContextSessionIssuer): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * <p>Attributes of the session that the key was used for.</p>
   */
  Attributes?: AwsIamAccessKeySessionContextAttributes;

  /**
   * <p>Information about the entity that created the session.</p>
   */
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

export namespace AwsIamAccessKeySessionContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeySessionContext): any => ({
    ...obj,
  });
}

export enum AwsIamAccessKeyStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

/**
 * <p>IAM access key details related to a finding.</p>
 */
export interface AwsIamAccessKeyDetails {
  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the
   *             <code>PrincipalName</code> parameter because access keys can also be assigned to
   *          principals that are not IAM users.</p>
   */
  UserName?: string;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: AwsIamAccessKeyStatus | string;

  /**
   * <p>Indicates when the IAM access key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The ID of the principal associated with an access key.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The type of principal associated with an access key.</p>
   */
  PrincipalType?: string;

  /**
   * <p>The name of the principal.</p>
   */
  PrincipalName?: string;

  /**
   * <p>The AWS account ID of the account for the key.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of the access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>Information about the session that the key was used for.</p>
   */
  SessionContext?: AwsIamAccessKeySessionContext;
}

export namespace AwsIamAccessKeyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAccessKeyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A managed policy that is attached to an IAM principal.</p>
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The ARN of the policy.</p>
   */
  PolicyArn?: string;
}

export namespace AwsIamAttachedManagedPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamAttachedManagedPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A managed policy that is attached to the IAM group.</p>
 */
export interface AwsIamGroupPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamGroupPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamGroupPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an IAM group.</p>
 */
export interface AwsIamGroupDetails {
  /**
   * <p>A list of the managed policies that are attached to the IAM group.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the IAM group was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the IAM group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the IAM group.</p>
   */
  GroupName?: string;

  /**
   * <p>The list of inline policies that are embedded in the group.</p>
   */
  GroupPolicyList?: AwsIamGroupPolicy[];

  /**
   * <p>The path to the group.</p>
   */
  Path?: string;
}

export namespace AwsIamGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a role associated with an instance profile.</p>
 */
export interface AwsIamInstanceProfileRole {
  /**
   * <p>The ARN of the role.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * <p>The identifier of the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The name of the role.</p>
   */
  RoleName?: string;
}

export namespace AwsIamInstanceProfileRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamInstanceProfileRole): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an instance profile.</p>
 */
export interface AwsIamInstanceProfile {
  /**
   * <p>The ARN of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>Indicates when the instance profile was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the instance profile.</p>
   */
  InstanceProfileId?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * <p>The path to the instance profile.</p>
   */
  Path?: string;

  /**
   * <p>The roles associated with the instance profile.</p>
   */
  Roles?: AwsIamInstanceProfileRole[];
}

export namespace AwsIamInstanceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the policy used to set the permissions boundary for an IAM
 *          principal.</p>
 */
export interface AwsIamPermissionsBoundary {
  /**
   * <p>The ARN of the policy used to set the permissions boundary.</p>
   */
  PermissionsBoundaryArn?: string;

  /**
   * <p>The usage type for the permissions boundary.</p>
   */
  PermissionsBoundaryType?: string;
}

export namespace AwsIamPermissionsBoundary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPermissionsBoundary): any => ({
    ...obj,
  });
}

/**
 * <p>A version of an IAM policy.</p>
 */
export interface AwsIamPolicyVersion {
  /**
   * <p>The identifier of the policy version.</p>
   */
  VersionId?: string;

  /**
   * <p>Whether the version is the default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;
}

export namespace AwsIamPolicyVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an IAM permissions policy.</p>
 */
export interface AwsIamPolicyDetails {
  /**
   * <p>The number of users, groups, and roles that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>When the policy was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The identifier of the default version of the policy.</p>
   */
  DefaultVersionId?: string;

  /**
   * <p>A description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>Whether the policy can be attached to a user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>The path to the policy.</p>
   */
  Path?: string;

  /**
   * <p>The number of users and roles that use the policy to set the permissions
   *          boundary.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>The unique identifier of the policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>List of versions of the policy.</p>
   */
  PolicyVersionList?: AwsIamPolicyVersion[];

  /**
   * <p>When the policy was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdateDate?: string;
}

export namespace AwsIamPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An inline policy that is embedded in the role.</p>
 */
export interface AwsIamRolePolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamRolePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamRolePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 */
export interface AwsIamRoleDetails {
  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>The list of the managed policies that are attached to the role.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>The list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: AwsIamInstanceProfile[];

  /**
   * <p>Information about the policy used to set the permissions boundary for an IAM
   *          principal.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The stable and unique string identifying the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The list of inline policies that are embedded in the role.</p>
   */
  RolePolicyList?: AwsIamRolePolicy[];

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;
}

export namespace AwsIamRoleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamRoleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an inline policy that is embedded in the user.</p>
 */
export interface AwsIamUserPolicy {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace AwsIamUserPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamUserPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an IAM user.</p>
 */
export interface AwsIamUserDetails {
  /**
   * <p>A list of the managed policies that are attached to the user.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * <p>Indicates when the user was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * <p>A list of IAM groups that the user belongs to.</p>
   */
  GroupList?: string[];

  /**
   * <p>The path to the user.</p>
   */
  Path?: string;

  /**
   * <p>The permissions boundary for the user.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The list of inline policies that are embedded in the user.</p>
   */
  UserPolicyList?: AwsIamUserPolicy[];
}

export namespace AwsIamUserDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsIamUserDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains metadata about a customer master key (CMK).</p>
 */
export interface AwsKmsKeyDetails {
  /**
   * <p>The twelve-digit account ID of the AWS account that owns the CMK.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>Indicates when the CMK was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: number;

  /**
   * <p>The globally unique identifier for the CMK.</p>
   */
  KeyId?: string;

  /**
   * <p>The manager of the CMK. CMKs in your AWS account are either customer managed or AWS managed.</p>
   */
  KeyManager?: string;

  /**
   * <p>The state of the CMK.</p>
   */
  KeyState?: string;

  /**
   * <p>The source of the CMK's key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, AWS KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the CMK lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the AWS
   *          CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * <p>A description of the key.</p>
   */
  Description?: string;
}

export namespace AwsKmsKeyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsKmsKeyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface AwsLambdaFunctionCode {
  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;
}

export namespace AwsLambdaFunctionCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionCode): any => ({
    ...obj,
  });
}

/**
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
   */
  TargetArn?: string;
}

export namespace AwsLambdaFunctionDeadLetterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDeadLetterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace AwsLambdaFunctionEnvironmentError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironmentError): any => ({
    ...obj,
  });
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };

  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;
}

export namespace AwsLambdaFunctionEnvironment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironment): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export namespace AwsLambdaFunctionLayer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionLayer): any => ({
    ...obj,
  });
}

/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: string;
}

export namespace AwsLambdaFunctionTracingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionTracingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings.</p>
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace AwsLambdaFunctionVpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionVpcConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed CMK.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>Indicates when the function was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The memory that's allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;
}

export namespace AwsLambdaFunctionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a Lambda layer version.</p>
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes. Maximum number of five items.</p>
   *          <p>Valid values: <code>nodejs10.x</code> | <code>nodejs12.x</code> | <code>java8</code> |
   *             <code>java11</code> | <code>python2.7</code> | <code>python3.6</code> |
   *             <code>python3.7</code> | <code>python3.8</code> | <code>dotnetcore1.0</code> |
   *             <code>dotnetcore2.1</code> | <code>go1.x</code> | <code>ruby2.5</code> |
   *             <code>provided</code>
   *          </p>
   */
  CompatibleRuntimes?: string[];

  /**
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;
}

export namespace AwsLambdaLayerVersionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsLambdaLayerVersionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role that is associated with the Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * <p>The ARN of the IAM role.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the association between the IAM role and the DB cluster.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbClusterAssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterAssociatedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an instance in the DB cluster.</p>
 */
export interface AwsRdsDbClusterMember {
  /**
   * <p>Whether the cluster member is the primary instance for the DB cluster.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the order in which an Aurora replica is promoted to the primary instance when
   *          the existing primary instance fails.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The instance identifier for this member of the DB cluster.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DbClusterParameterGroupStatus?: string;
}

export namespace AwsRdsDbClusterMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterMember): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an option group membership for a DB cluster.</p>
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * <p>The name of the DB cluster option group.</p>
   */
  DbClusterOptionGroupName?: string;

  /**
   * <p>The status of the DB cluster option group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbClusterOptionGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterOptionGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Active Directory domain membership record associated with the DB
 *          instance.</p>
 */
export interface AwsRdsDbDomainMembership {
  /**
   * <p>The identifier of the Active Directory domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance.</p>
   */
  Status?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory domain.</p>
   */
  Fqdn?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  IamRoleName?: string;
}

export namespace AwsRdsDbDomainMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbDomainMembership): any => ({
    ...obj,
  });
}

/**
 * <p>A VPC security groups that the DB instance belongs to.</p>
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceVpcSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterDetails {
  /**
   * <p>For all database engines except Aurora, specifies the allocated storage size in
   *          gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be
   *          created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The current status of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the DB cluster.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>A list of custom endpoints for the DB cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * <p>Whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The name of the database engine to use for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The identifiers of the read replicas that are associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * <p>A list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Specifies the identifier that Amazon Route 53 assigns when you create a hosted
   *          zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the AWS KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The identifier of the DB cluster. The identifier must be unique within each AWS Region
   *          and is immutable.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>A list of the IAM roles that are associated with the DB cluster.</p>
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch
   *          Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The database engine mode of the DB cluster.</p>
   */
  EngineMode?: string;

  /**
   * <p>Whether the DB cluster has deletion protection enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: string;

  /**
   * <p>Whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different AWS
   *          account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>The Active Directory domain membership records that are associated with the DB
   *          cluster.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   */
  DbClusterParameterGroup?: string;

  /**
   * <p>The subnet group that is associated with the DB cluster, including the name,
   *          description, and subnets in the subnet group.</p>
   */
  DbSubnetGroup?: string;

  /**
   * <p>The list of option group memberships for this DB cluster.</p>
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  /**
   * <p>The DB cluster identifier that the user assigned to the cluster. This identifier is the
   *          unique key that identifies a DB cluster.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The list of instances that make up the DB cluster.</p>
   */
  DbClusterMembers?: AwsRdsDbClusterMember[];

  /**
   * <p>Whether the mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

export namespace AwsRdsDbClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * <p>A list of Availability Zones where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates when the snapshot was taken.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine that you want to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The VPC ID that is associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN of the AWS KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The DB cluster identifier.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The identifier of the DB cluster snapshot.</p>
   */
  DbClusterSnapshotIdentifier?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;
}

export namespace AwsRdsDbClusterSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbClusterSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Identity and Access Management (IAM) role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the IAM)role.</p>
   */
  FeatureName?: string;

  /**
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other AWS
   *                services on your behalf. </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceAssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceAssociatedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a parameter group for a DB instance.</p>
 */
export interface AwsRdsDbParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   */
  DbParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace AwsRdsDbParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>An Availability Zone for a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * <p>The name of the Availability Zone for a subnet in the subnet group.</p>
   */
  Name?: string;
}

export namespace AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroupSubnetAvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * <p>The identifier of a subnet in the subnet group.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Information about the Availability Zone for a subnet in the subnet group.</p>
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * <p>The status of a subnet in the subnet group.</p>
   */
  SubnetStatus?: string;
}

export namespace AwsRdsDbSubnetGroupSubnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroupSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the subnet group for the database instance.</p>
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>The description of the subnet group.</p>
   */
  DbSubnetGroupDescription?: string;

  /**
   * <p>The VPC ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of subnets in the subnet group.</p>
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[];

  /**
   * <p>The ARN of the subnet group.</p>
   */
  DbSubnetGroupArn?: string;
}

export namespace AwsRdsDbSubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the connection endpoint.</p>
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace AwsRdsDbInstanceEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>An option group membership.</p>
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * <p>The name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the option group membership.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbOptionGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbOptionGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the log types to enable and disable.</p>
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * <p>A list of log types that are being enabled.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>A list of log types that are being disabled.</p>
   */
  LogTypesToDisable?: string[];
}

export namespace AwsRdsPendingCloudWatchLogsExports {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsPendingCloudWatchLogsExports): any => ({
    ...obj,
  });
}

/**
 * <p>A processor feature.</p>
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * <p>The name of the processor feature.</p>
   */
  Name?: string;

  /**
   * <p>The value of the processor feature.</p>
   */
  Value?: string;
}

export namespace AwsRdsDbProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to a DB instance that are currently pending.</p>
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * <p>The new DB instance class for the DB instance.</p>
   */
  DbInstanceClass?: string;

  /**
   * <p>The new value of the allocated storage for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new master user password for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The new backup retention period for the DB instance.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The new engine version for the DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new license model value for the DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The new provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The new DB instance identifier for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The new storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The new CA certificate identifier for the DB instance.</p>
   */
  CaCertificateIdentifier?: string;

  /**
   * <p>The name of the new subnet group for the DB instance.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>A list of log types that are being enabled or disabled.</p>
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * <p>Processor features that are being updated.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}

export namespace AwsRdsDbPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a read replica.</p>
 */
export interface AwsRdsDbStatusInfo {
  /**
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   */
  StatusType?: string;

  /**
   * <p>Whether the read replica instance is operating normally.</p>
   */
  Normal?: boolean;

  /**
   * <p>The status of the read replica instance.</p>
   */
  Status?: string;

  /**
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   */
  Message?: string;
}

export namespace AwsRdsDbStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * <p>The AWS Identity and Access Management (IAM) roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Indicates when the DB instance was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The current status of the DB instance.</p>
   */
  DbInstanceStatus?: string;

  /**
   * <p>The master user name of the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The number of days for which to retain automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   */
  DbSecurityGroups?: string[];

  /**
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * <p>The Availability Zone where the DB instance will be created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Changes to the DB instance that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LatestRestorableTime?: string;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * <p>The name of the character set that this DB instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   */
  StatusInfos?: AwsRdsDbStatusInfo[];

  /**
   * <p>The storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The identifier of the AWS KMS key used to encrypt the Performance Insights data.</p>
   */
  PerformanceInsightsKmsKeyId?: string;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch
   *          Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;
}

export namespace AwsRdsDbInstanceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   */
  DbSnapshotIdentifier?: string;

  /**
   * <p>A name for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>The master user name for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>The option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The AWS Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   */
  SourceDbSnapshotIdentifier?: string;

  /**
   * <p>The storage type associated with the DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>If <code>Encrypted</code> is <code>true</code>, the AWS KMS key identifier for the encrypted DB snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the DB snapshot.</p>
   */
  Timezone?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>The identifier for the source DB instance.</p>
   */
  DbiResourceId?: string;
}

export namespace AwsRdsDbSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A node in an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of the node.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The public IP address of the node.</p>
   */
  PublicIpAddress?: string;
}

export namespace AwsRedshiftClusterClusterNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterNode): any => ({
    ...obj,
  });
}

/**
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

export namespace AwsRedshiftClusterClusterParameterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * <p>The list of parameter statuses.</p>
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * <p>The status of updates to the parameters.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;
}

export namespace AwsRedshiftClusterClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A security group that is associated with the cluster.</p>
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterClusterSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a cross-Region snapshot copy.</p>
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that manual snapshots are retained in the destination region after
   *          they are copied from a source region.</p>
   *          <p>If the value is -1, then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either -1 or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSnapshotCopyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceEndTime?: string;

  /**
   * <p>The identifier of the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceStartTime?: string;
}

export namespace AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDeferredMaintenanceWindow): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * <p>The elastic IP address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP address.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterElasticIpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterElasticIpStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * <p>The DNS address of the cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine listens on.</p>
   */
  Port?: number;
}

export namespace AwsRedshiftClusterEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterHsmStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterHsmStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role that the cluster can use to access other AWS services.</p>
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   */
  ApplyStatus?: string;

  /**
   * <p>The ARN of the IAM role.</p>
   */
  IamRoleArn?: string;
}

export namespace AwsRedshiftClusterIamRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterIamRole): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change to the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change to the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The encryption type for a cluster.</p>
   */
  EncryptionType?: string;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change to the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   */
  PubliclyAccessible?: boolean;
}

export namespace AwsRedshiftClusterPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the resize operation for the cluster.</p>
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * <p>Indicates whether the resize operation can be canceled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   */
  ResizeType?: string;
}

export namespace AwsRedshiftClusterResizeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterResizeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterRestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterRestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace AwsRedshiftClusterVpcSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterVpcSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterDetails {
  /**
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code> - The cluster is available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code> - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maintenance</code> - The cluster is intermittently available for queries due
   *                to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modifying</code> -The cluster is intermittently available for queries due to
   *                changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>Indicates when the cluster was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * <p>The current status of the cluster.</p>
   *          <p>Valid values: <code>available</code> | <code>available, prep-for-resize</code> |
   *             <code>available, resize-cleanup</code> |<code> cancelling-resize</code> |
   *             <code>creating</code> | <code>deleting</code> | <code>final-snapshot</code> |
   *             <code>hardware-failure</code> | <code>incompatible-hsm</code> |<code>
   *             incompatible-network</code> | <code>incompatible-parameters</code> |
   *             <code>incompatible-restore</code> | <code>modifying</code> | <code>paused</code> |
   *             <code>rebooting</code> | <code>renaming</code> | <code>resizing</code> |
   *             <code>rotating-keys</code> | <code>storage-full</code> |
   *          <code>updating-hsm</code>
   *          </p>
   */
  ClusterStatus?: string;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   */
  DBName?: string;

  /**
   * <p>List of time windows during which maintenance was deferred.</p>
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpectedNextSnapshotScheduleTime?: string;

  /**
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * <p>A list of IAM roles that the cluster can use to access other AWS services.</p>
   */
  IamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * <p>The identifier of the AWS KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is -1, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either -1 or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NextMaintenanceWindowStartTime?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster operations that are waiting to start.</p>
   */
  PendingActions?: string[];

  /**
   * <p>A list of changes to the cluster that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *          maintenance can occur.</p>
   *          <p>Format:
   *             <code>
   *                <i><day></i>:HH:MM-<i><day></i>:HH:MM</code>
   *          </p>
   *          <p>For the day values, use <code>mon</code> | <code>tue</code> | <code>wed</code> |
   *             <code>thu</code> | <code>fri</code> | <code>sat</code> | <code>sun</code>
   *          </p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>
   *          </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Whether the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Information about the resize operation for the cluster.</p>
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   */
  SnapshotScheduleState?: string;

  /**
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
}

export namespace AwsRedshiftClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only AWS service principals and authorized users within the S3 bucket owner's account.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace AwsS3AccountPublicAccessBlockDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3AccountPublicAccessBlockDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm?: string;

  /**
   * <p>AWS KMS customer master key (CMK) ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

export namespace AwsS3BucketServerSideEncryptionByDefault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionByDefault): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

export namespace AwsS3BucketServerSideEncryptionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionRule): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

export namespace AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
}

export namespace AwsS3BucketDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  /**
   * <p>Indicates when the object was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) symmetric customer managed
   *          customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;
}

export namespace AwsS3ObjectDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3ObjectDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the rotation schedule for the secret.</p>
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   */
  AutomaticallyAfterDays?: number;
}

export namespace AwsSecretsManagerSecretRotationRules {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretRotationRules): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an AWS Secrets Manager secret.</p>
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * <p>Defines the rotation schedule for the secret.</p>
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   */
  RotationOccurredWithinFrequency?: boolean;

  /**
   * <p>The ARN, Key ID, or alias of the AWS KMS customer master key (CMK) used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Whether rotation is enabled.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   */
  RotationLambdaArn?: string;

  /**
   * <p>Whether the secret is deleted.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;
}

export namespace AwsSecretsManagerSecretDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretDetails): any => ({
    ...obj,
  });
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING",
}

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>AWS Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

export namespace StatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
}

/**
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  /**
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the AWS Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the AWS Config evaluation result was
   *                         <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>AWS Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];
}

export namespace Compliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Compliance): any => ({
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

export enum SeverityLabel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>The severity assigned to the finding by the finding provider.</p>
 */
export interface FindingProviderSeverity {
  /**
   * <p>The severity label assigned to the finding by the finding provider.</p>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  Original?: string;
}

export namespace FindingProviderSeverity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderSeverity): any => ({
    ...obj,
  });
}

/**
 * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.</p>
 */
export interface FindingProviderFields {
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
   * <p>A list of findings that are related to the current finding.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>The severity of a finding.</p>
   */
  Severity?: FindingProviderSeverity;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];
}

export namespace FindingProviderFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderFields): any => ({
    ...obj,
  });
}

export enum MalwareState {
  OBSERVED = "OBSERVED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVED = "REMOVED",
}

export enum MalwareType {
  ADWARE = "ADWARE",
  BLENDED_THREAT = "BLENDED_THREAT",
  BOTNET_AGENT = "BOTNET_AGENT",
  COIN_MINER = "COIN_MINER",
  EXPLOIT_KIT = "EXPLOIT_KIT",
  KEYLOGGER = "KEYLOGGER",
  MACRO = "MACRO",
  POTENTIALLY_UNWANTED = "POTENTIALLY_UNWANTED",
  RANSOMWARE = "RANSOMWARE",
  REMOTE_ACCESS = "REMOTE_ACCESS",
  ROOTKIT = "ROOTKIT",
  SPYWARE = "SPYWARE",
  TROJAN = "TROJAN",
  VIRUS = "VIRUS",
  WORM = "WORM",
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;

  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;
}

export namespace Malware {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Malware): any => ({
    ...obj,
  });
}

export enum NetworkDirection {
  IN = "IN",
  OUT = "OUT",
}

/**
 * <p>A range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the port range.</p>
   */
  Begin?: number;

  /**
   * <p>The last port in the port range.</p>
   */
  End?: number;
}

export namespace PortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

export namespace Network {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

export namespace NetworkPathComponentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

export namespace NetworkHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

export namespace NetworkPathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

export namespace Note {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Note): any => ({
    ...obj,
  });
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

export namespace PatchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

export namespace ProcessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj,
  });
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

export namespace Remediation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

export namespace Cell {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

export namespace Occurrences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace CustomDataIdentifiersDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace CustomDataIdentifiersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersResult): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace SensitiveDataDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace SensitiveDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

export namespace ClassificationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

export namespace ClassificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

export namespace DataClassificationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataClassificationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

export namespace AwsSnsTopicSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the topic's Amazon Resource Name (ARN).</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom
   *          CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;
}

export namespace AwsSnsTopicDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom
   *          CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

export namespace AwsSqsQueueDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status.</p>
   *          <p>The possible status values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * <p>The highest severity for the patches.</p>
   */
  OverallSeverity?: string;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

export namespace AwsSsmComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmComplianceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

export namespace AwsSsmPatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatch): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

export namespace AwsSsmPatchComplianceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatchComplianceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the action that CloudFront or AWS WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
   * <p>Specifies how you want AWS WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - AWS WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - AWS WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - AWS WAF increments a counter of the requests that match all
   *                of the conditions in the rule. AWS WAF then continues to inspect the web request
   *                based on the remaining rules in the web ACL. You can't specify <code>COUNT</code> for
   *                the default action for a WebACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

export namespace WafAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

export namespace WafExcludedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafExcludedRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

export namespace WafOverrideAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a rule in a WAF WebACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or AWS WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
   * <p>Use the <code>OverrideAction</code> to test your RuleGroup.</p>
   *          <p>Any rule in a RuleGroup can potentially block a request. If you set the
   *             <code>OverrideAction</code> to <code>None</code>, the RuleGroup blocks a request if any
   *          individual rule in the RuleGroup matches the request and is configured to block that
   *          request.</p>
   *          <p>However, if you first want to test the RuleGroup, set the <code>OverrideAction</code> to
   *             <code>Count</code>. The RuleGroup then overrides any block action specified by
   *          individual rules contained within the group. Instead of blocking matching requests, those
   *          requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a RuleGroup to a WebACL. In this case you do not use
   *             <code>ActivatedRule</code>|<code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>|<code>Action</code> is used instead of
   *             <code>ActivatedRule</code>|<code>OverrideAction</code>. </p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the order in which the rules in a WebACL are evaluated. Rules with a lower
   *          value for <code>Priority</code> are evaluated before rules with a higher value. The value
   *          must be a unique integer. If you add multiple rules to a WebACL, the values do not need to
   *          be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

export namespace AwsWafWebAclRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a WAF WebACL.</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the WebACL. You can't change the name of a WebACL
   *          after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The action to perform if none of the rules contained in the WebACL match.</p>
   */
  DefaultAction?: string;

  /**
   * <p>An array that contains the action for each rule in a WebACL, the priority of the rule,
   *          and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>A unique identifier for a WebACL.</p>
   */
  WebAclId?: string;
}

export namespace AwsWafWebAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;
}

export namespace ContainerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  /**
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details for an AWS CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an Amazon EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an Amazon EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details for an EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details for an EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * <p>Details about a subnet in EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details about an Amazon S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>Details about an Amazon S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * <p>Provides details about an AWS Certificate Manager (ACM) certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * <p>contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about a KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for a WAF WebACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: { [key: string]: string };
}

export namespace ResourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov",
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it has not been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the AWS service or integrated partner product that
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
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
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
  Label?: SeverityLabel | string;

  /**
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

export namespace Severity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER",
}

export enum ThreatIntelIndicatorType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  HASH_MD5 = "HASH_MD5",
  HASH_SHA1 = "HASH_SHA1",
  HASH_SHA256 = "HASH_SHA256",
  HASH_SHA512 = "HASH_SHA512",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MUTEX = "MUTEX",
  PROCESS = "PROCESS",
  URL = "URL",
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

export namespace ThreatIntelIndicator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj,
  });
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;
}

export namespace Cvss {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cvss): any => ({
    ...obj,
  });
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

export namespace VulnerabilityVendor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VulnerabilityVendor): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;
}

export namespace SoftwarePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SoftwarePackage): any => ({
    ...obj,
  });
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];
}

export namespace Vulnerability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vulnerability): any => ({
    ...obj,
  });
}

export enum WorkflowStatus {
  NEW = "NEW",
  NOTIFIED = "NOTIFIED",
  RESOLVED = "RESOLVED",
  SUPPRESSED = "SUPPRESSED",
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
   * <p>The status of the investigation into the finding. The allowed values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
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
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace Workflow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED",
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *             <code>AwsSecurityFinding</code> format enables you to share findings between AWS
 *          security services and third-party solutions, and security standards checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by AWS services (Amazon
 *             GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party
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
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The AWS account ID that a finding is generated in.</p>
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
   */
  ProductFields?: { [key: string]: string };

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: { [key: string]: string };

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
   *          against a specific rule in a supported security standard, such as CIS AWS Foundations.
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
}

export namespace AwsSecurityFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj,
  });
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  PREFIX = "PREFIX",
  PREFIX_NOT_EQUALS = "PREFIX_NOT_EQUALS",
}

/**
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
   *             <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
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

export namespace StringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj,
  });
}

/**
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

export namespace NumberFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
}

export enum DateRangeUnit {
  DAYS = "DAYS",
}

/**
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

export namespace DateRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateRange): any => ({
    ...obj,
  });
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

export namespace DateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

export namespace KeywordFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeywordFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export namespace IpFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpFilter): any => ({
    ...obj,
  });
}

export enum MapFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
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

export namespace MapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapFilter): any => ({
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
   * <p>The AWS account ID that a finding is generated in.</p>
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
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
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
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

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
   *          rule in a supported standard, such as CIS AWS Foundations. Contains security
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
   *                      <p>The record state changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
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

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY",
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
  StandardsInput: { [key: string]: string } | undefined;

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
   *          and their ARNs, use the <code>
   *                <a>DescribeStandards</a>
   *             </code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };
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
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">AWS Security Finding Format</a>. Maximum of 100 findings per request.</p>
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
   * <p>The native severity as defined by the AWS service or integrated partner product that
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
   * <p>The status of the investigation into the finding. The allowed values are the
   *          following.</p>
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
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
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
  UserDefinedFields?: { [key: string]: string };

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

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target.</p>
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
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace ResourceConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
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
   * <p>An AWS account ID of the account that was not processed.</p>
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
   * <p>The list of AWS accounts that were not processed. For each account, the list includes
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
