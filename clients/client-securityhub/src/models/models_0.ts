import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

/**
 * <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  Code?: string;
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
 * <p>Details about the launch template to use.</p>
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
   * <p>The launch template to use.</p>
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
 * <p>A complex type that describes the S3 bucket, HTTP server (for example, a web
 *          server), AWS Elemental MediaStore, or other server from which CloudFront gets your
 *          files.</p>
 */
export interface AwsCloudFrontDistributionOriginItem {
  /**
   * <p>Amazon S3 origins: The DNS name of the S3 bucket from which you want CloudFront to get objects for this origin.</p>
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
 * <p>Provides information about the TLS/SSL configuration that the distribution uses to communicate with viewers.</p>
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
 * <p>Identifies a network interface for the EC2 instance.</p>
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
 * <p>The details of an EC2 instance.</p>
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
   * <p>The ARN of the KMS key that was
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
 * <p>provides details about an ECS cluster.</p>
 */
export interface AwsEcsClusterDetails {
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
 * <p>A file that contain environment variables to pass to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * <p>The type of environment file.</p>
   */
  Type?: string;

  /**
   * <p>The ARN of the S3 object that contains the environment variable file.</p>
   */
  Value?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails): any => ({
    ...obj,
  });
}

/**
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
  Options?: { [key: string]: string };

  /**
   * <p>The log router to use. </p>
   */
  Type?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * <p>The Linux capabilities for the container that are added to the default configuration provided by Docker.</p>
   */
  Add?: string[];

  /**
   * <p>The Linux capabilities for the container that are dropped from the default configuration provided by Docker.</p>
   */
  Drop?: string[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The container path, mount options, and size (in MiB) of a tmpfs mount.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   */
  ContainerPath?: string;

  /**
   * <p>The list of tmpfs volume mount options.</p>
   */
  MountOptions?: string[];

  /**
   * <p>The maximum size (in MiB) of the tmpfs volume.</p>
   */
  Size?: number;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The log configuration specification for the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * <p>The log driver to use for the container.</p>
   */
  LogDriver?: string;

  /**
   * <p>The configuration options to send to the log driver. Requires version 1.19 of the Docker Remote API or greater on your container instance.</p>
   */
  Options?: { [key: string]: string };

  /**
   * <p>The secrets to pass to the log configuration.</p>
   */
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The private repository authentication credentials to use.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * <p>The ARN of the secret that contains the private repository credentials.</p>
   */
  CredentialsParameter?: string;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to assign to a container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * <p>The type of resource to assign to a container.</p>
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A ulimit to set in the container.</p>
 */
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * <p>The hard limit for the ulimit type.</p>
   */
  HardLimit?: number;

  /**
   * <p>The type of the ulimit.</p>
   */
  Name?: string;

  /**
   * <p>The soft limit for the ulimit type.</p>
   */
  SoftLimit?: number;
}

export namespace AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails): any => ({
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
  DockerLabels?: { [key: string]: string };

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

export namespace AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionInferenceAcceleratorsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionPlacementConstraintsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionPlacementConstraintsDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionProxyConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionProxyConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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
  DriverOpts?: { [key: string]: string };

  /**
   * <p>Custom metadata to add to the Docker volume.</p>
   */
  Labels?: { [key: string]: string };

  /**
   * <p>The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are provisioned automatically when the task starts and destroyed when the task stops. Docker volumes that are shared persist after the task stops.</p>
   */
  Scope?: string;
}

export namespace AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
  ): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a bind mount host volume.</p>
 */
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * <p>The path on the host container instance that is presented to the container.</p>
   */
  SourcePath?: string;
}

export namespace AwsEcsTaskDefinitionVolumesHostDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesHostDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcsTaskDefinitionVolumesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionVolumesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
 */
export interface AwsEcsTaskDefinitionDetails {
  /**
   * <p>The container definitions that describe the containers that make up the task.</p>
   */
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];

  /**
   * <p>The number of CPU units used by the task.</p>
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
   * <p>The IPC resource namespace to use for the containers in the task.</p>
   */
  IpcMode?: string;

  /**
   * <p>The amount (in MiB) of memory used by the task.</p>
   */
  Memory?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task.</p>
   */
  NetworkMode?: string;

  /**
   * <p>The process namespace to use for the containers in the task.</p>
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

export namespace AwsEcsTaskDefinitionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcsTaskDefinitionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a cluster logging configuration.</p>
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * <p>Whether the logging types that are listed in <code>Types</code> are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of logging types.</p>
   */
  Types?: string[];
}

export namespace AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterLoggingClusterLoggingDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The logging configuration for an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * <p>Cluster logging configurations.</p>
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}

export namespace AwsEksClusterLoggingDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterLoggingDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the VPC configuration used by the cluster control plane.</p>
 */
export interface AwsEksClusterResourcesVpcConfigDetails {
  /**
   * <p>The security groups that are associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Amazon EKS control plane.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnets that are associated with the cluster.</p>
   */
  SubnetIds?: string[];
}

export namespace AwsEksClusterResourcesVpcConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterResourcesVpcConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterDetails {
  /**
   * <p>The ARN of the cluster.</p>
   */
  Arn?: string;

  /**
   * <p>The certificate authority data for the cluster.</p>
   */
  CertificateAuthorityData?: string;

  /**
   * <p>The status of the cluster.</p>
   */
  ClusterStatus?: string;

  /**
   * <p>The endpoint for the Amazon EKS API server.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane.</p>
   */
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;

  /**
   * <p>The ARN of the IAM role that provides permissions for the Amazon EKS control plane to make calls to Amazon Web Services API operations on your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon EKS server version for the cluster.</p>
   */
  Version?: string;

  /**
   * <p>The logging configuration for the cluster.</p>
   */
  Logging?: AwsEksClusterLoggingDetails;
}

export namespace AwsEksClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEksClusterDetails): any => ({
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
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch
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
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>he number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>Whether to use a dedicated master node for the Elasticsearch domain. A dedicated master node performs cluster management tasks, but doesn't hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node. For example, <code>m3.medium.elasticsearch</code>. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterType?: string;

  /**
   * <p>The number of data nodes to use in the Elasticsearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type for your data nodes. For example, <code>m3.medium.elasticsearch</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  /**
   * <p>Whether to enable zone awareness for the Elasticsearch domain. When zone awareness is enabled, OpenSearch allocates the cluster's nodes and replica index shards across Availability Zones in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;
}

export namespace AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainElasticsearchClusterConfigDetails): any => ({
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
 * <p>The log configuration.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainLogPublishingOptionsLogConfig): any => ({
    ...obj,
  });
}

/**
 * <p>configures the CloudWatch Logs to publish for the
 *          Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptions {
  /**
   * <p>Configures the OpenSearch index logs
   *          publishing.</p>
   */
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * <p>Configures the OpenSearch search slow log
   *          publishing.</p>
   */
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * <p>The log configuration.</p>
   */
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}

export namespace AwsElasticsearchDomainLogPublishingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainLogPublishingOptions): any => ({
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
 * <p>Information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time,
   *          Amazon OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of the service software update.</p>
   */
  UpdateStatus?: string;
}

export namespace AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainServiceSoftwareOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
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
   * <p>IAM policy document specifying the access policies for the new Elasticsearch domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * <p>Unique identifier for an Elasticsearch domain.</p>
   */
  DomainId?: string;

  /**
   * <p>Name of an Elasticsearch domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an Amazon Web Services
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   */
  DomainName?: string;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Elasticsearch domain.</p>
   *          <p>The endpoint is a service URL. </p>
   */
  Endpoint?: string;

  /**
   * <p>The key-value pair that exists if the Elasticsearch domain uses VPC endpoints.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>OpenSearch version.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Information about an OpenSearch cluster configuration.</p>
   */
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * <p>Configures the CloudWatch Logs to publish for the Elasticsearch domain.</p>
   */
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;

  /**
   * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
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
 * <p>A load balancer attribute.</p>
 */
export interface AwsElbv2LoadBalancerAttribute {
  /**
   * <p>The name of the load balancer attribute.</p>
   */
  Key?: string;

  /**
   * <p>The value of the load balancer attribute.</p>
   */
  Value?: string;
}

export namespace AwsElbv2LoadBalancerAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsElbv2LoadBalancerAttribute): any => ({
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

  /**
   * <p>Attributes of the load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
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
   * <p>The identifier of the Amazon Web Services account that created the session.</p>
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
   * <p>The Amazon Web Services account ID of the account for the key.</p>
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
 * <p>Contains metadata about an KMS key.</p>
 */
export interface AwsKmsKeyDetails {
  /**
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>Indicates when the KMS key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: number;

  /**
   * <p>The globally unique identifier for the KMS key.</p>
   */
  KeyId?: string;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.</p>
   */
  KeyManager?: string;

  /**
   * <p>The state of the KMS key.</p>
   */
  KeyState?: string;

  /**
   * <p>The source of the KMS key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the KMS key lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * <p>A description of the key.</p>
   */
  Description?: string;

  /**
   * <p>Whether the key has key rotation enabled.</p>
   */
  KeyRotationStatus?: boolean;
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
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
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
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
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
   * <p>The ARN of an SQS queue or SNS topic.</p>
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
 * <p>Error messages for environment variables that could not be applied.</p>
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
 * <p>An Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  /**
   * <p>The ARN of the function layer.</p>
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
 * <p>The function's X-Ray tracing configuration.</p>
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
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
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
   * <p>The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.</p>
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
   * <p>The memory that is allocated to the function.</p>
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
   * <p>The function's X-Ray tracing configuration.</p>
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
 * <p>A public subnet that Network Firewall uses for the firewall.</p>
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * <p>The identifier of the subnet</p>
   */
  SubnetId?: string;
}

export namespace AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallSubnetMappingsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Network Firewall firewall.</p>
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * <p>Whether the firewall is protected from deletion. If set to <code>true</code>, then the firewall cannot be deleted.</p>
   */
  DeleteProtection?: boolean;

  /**
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * <p>The identifier of the firewall.</p>
   */
  FirewallId?: string;

  /**
   * <p>A descriptive name of the firewall.</p>
   */
  FirewallName?: string;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>Whether the firewall is protected from a change to the firewall policy. If set to <code>true</code>, you cannot associate a different policy with the firewall.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * <p>Whether the firewall is protected from a change to the subnet associations. If set to <code>true</code>, you cannot map different subnets to the firewall.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * <p>The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.</p>
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];

  /**
   * <p>The identifier of the VPC where the firewall is used.</p>
   */
  VpcId?: string;
}

export namespace AwsNetworkFirewallFirewallDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A stateful rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * <p>The ARN of the stateful rule group.</p>
   */
  ResourceArn?: string;
}

export namespace FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatefulRuleGroupReferencesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a CloudWatch dimension value to publish.</p>
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * <p>The value to use for the custom metric dimension.</p>
   */
  Value?: string;
}

export namespace StatelessCustomPublishMetricActionDimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomPublishMetricActionDimension): any => ({
    ...obj,
  });
}

/**
 * <p>Information about metrics to publish to CloudWatch.</p>
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * <p>Defines CloudWatch dimension values to publish.</p>
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}

export namespace StatelessCustomPublishMetricAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomPublishMetricAction): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of a custom action that can be used for stateless packet handling.</p>
 */
export interface StatelessCustomActionDefinition {
  /**
   * <p>Information about metrics to publish to CloudWatch.</p>
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}

export namespace StatelessCustomActionDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessCustomActionDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A custom action that can be used for stateless packet handling.</p>
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * <p>The definition of the custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>The name of the custom action.</p>
   */
  ActionName?: string;
}

export namespace FirewallPolicyStatelessCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatelessCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A stateless rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * <p>The order in which to run the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>The ARN of the stateless rule group.</p>
   */
  ResourceArn?: string;
}

export namespace FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyStatelessRuleGroupReferencesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the behavior of the firewall.</p>
 */
export interface FirewallPolicyDetails {
  /**
   * <p>The stateful rule groups that are used in the firewall policy.</p>
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];

  /**
   * <p>The custom action definitions that are available to use in the firewall policy's <code>StatelessDefaultActions</code> setting.</p>
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];

  /**
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * <p>The stateless rule groups that are used in the firewall policy.</p>
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}

export namespace FirewallPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a firewall policy. A firewall policy defines the behavior of a network firewall.</p>
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * <p>The firewall policy configuration.</p>
   */
  FirewallPolicy?: FirewallPolicyDetails;

  /**
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * <p>The identifier of the firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * <p>The name of the firewall policy.</p>
   */
  FirewallPolicyName?: string;

  /**
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;
}

export namespace AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallFirewallPolicyDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Stateful inspection criteria for a domain list rule group.</p>
 */
export interface RuleGroupSourceListDetails {
  /**
   * <p>Indicates whether to allow or deny access to the domains listed in <code>Targets</code>.</p>
   */
  GeneratedRulesType?: string;

  /**
   * <p>The protocols that you want to inspect. Specify <code>LS_SNI</code> for HTTPS. Specify <code>HTTP_HOST</code> for HTTP. You can specify either or both.</p>
   */
  TargetTypes?: string[];

  /**
   * <p>The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, <code>.example.com</code> matches all domains that end with <code>example.com</code>.</p>
   */
  Targets?: string[];
}

export namespace RuleGroupSourceListDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceListDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The inspection criteria for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * <p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The destination port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  DestinationPort?: string;

  /**
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination.</p>
   */
  Direction?: string;

  /**
   * <p>The protocol to inspect for. To inspector for all protocols, use <code>IP</code>.</p>
   */
  Protocol?: string;

  /**
   * <p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Source?: string;

  /**
   * <p>The source port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  SourcePort?: string;
}

export namespace RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesHeaderDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A rule option for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * <p>A keyword to look for.</p>
   */
  Keyword?: string;

  /**
   * <p>A list of settings.</p>
   */
  Settings?: string[];
}

export namespace RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A Suricata rule specification.</p>
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.</p>
   */
  Action?: string;

  /**
   * <p>The stateful inspection criteria for the rule.</p>
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;

  /**
   * <p>Additional options for the rule.</p>
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}

export namespace RuleGroupSourceStatefulRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatefulRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.</p>
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * <p>The definition of a custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * <p>A descriptive name of the custom action.</p>
   */
  ActionName?: string;
}

export namespace RuleGroupSourceCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A port range to specify the destination ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts): any => ({
    ...obj,
  });
}

/**
 * <p>A destination IP address or range.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesDestinations): any => ({
    ...obj,
  });
}

/**
 * <p>A port range to specify the source ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts): any => ({
    ...obj,
  });
}

/**
 * <p>A source IP addresses and address range to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesSources): any => ({
    ...obj,
  });
}

/**
 * <p>A set of TCP flags and masks to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * <p>Defines the flags from the <code>Masks</code> setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.</p>
   */
  Flags?: string[];

  /**
   * <p>The set of flags to consider in the inspection. If not specified, then all flags are inspected.</p>
   */
  Masks?: string[];
}

export namespace RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags): any => ({
    ...obj,
  });
}

/**
 * <p>Criteria for the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * <p>A list of port ranges to specify the destination ports to inspect for.</p>
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];

  /**
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];

  /**
   * <p>The protocols to inspect for.</p>
   */
  Protocols?: number[];

  /**
   * <p>A list of port ranges to specify the source ports to inspect for.</p>
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];

  /**
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];

  /**
   * <p>The TCP flags and masks to inspect for.</p>
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}

export namespace RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleMatchAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * <p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>). You can then add custom actions.</p>
   */
  Actions?: string[];

  /**
   * <p>The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.</p>
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}

export namespace RuleGroupSourceStatelessRuleDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRuleDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>A stateless rule in the rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * <p>Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * <p>Provides the definition of the stateless rule.</p>
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}

export namespace RuleGroupSourceStatelessRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Stateless rules and custom actions for a stateless rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * <p>Custom actions for the rule group.</p>
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[];

  /**
   * <p>Stateless rules for the rule group.</p>
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}

export namespace RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSourceStatelessRulesAndCustomActionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The rules and actions for the rule group.</p>
 */
export interface RuleGroupSource {
  /**
   * <p>Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.</p>
   */
  RulesSourceList?: RuleGroupSourceListDetails;

  /**
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.</p>
   */
  RulesString?: string;

  /**
   * <p>Suricata rule specifications.</p>
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];

  /**
   * <p>The stateless rules and custom actions used by a stateless rule group.</p>
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}

export namespace RuleGroupSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupSource): any => ({
    ...obj,
  });
}

/**
 * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * <p>The list of IP addresses and ranges.</p>
   */
  Definition?: string[];
}

export namespace RuleGroupVariablesIpSetsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariablesIpSetsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A list of port ranges.</p>
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * <p>The list of port ranges.</p>
   */
  Definition?: string[];
}

export namespace RuleGroupVariablesPortSetsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariablesPortSetsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional settings to use in the specified rules.</p>
 */
export interface RuleGroupVariables {
  /**
   * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
   */
  IpSets?: RuleGroupVariablesIpSetsDetails;

  /**
   * <p>A list of port ranges.</p>
   */
  PortSets?: RuleGroupVariablesPortSetsDetails;
}

export namespace RuleGroupVariables {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupVariables): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the rule group.</p>
 */
export interface RuleGroupDetails {
  /**
   * <p>Additional settings to use in the specified rules.</p>
   */
  RuleVariables?: RuleGroupVariables;

  /**
   * <p>The rules and actions for the rule group.</p>
   *          <p>For stateful rule groups, can contain <code>RulesString</code>, <code>RulesSourceList</code>, or <code>StatefulRules</code>.</p>
   *          <p>For stateless rule groups, contains <code>StatelessRulesAndCustomActions</code>.</p>
   */
  RulesSource?: RuleGroupSource;
}

export namespace RuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p>
 *          <p>Rule groups are referenced in firewall policies.
 *       </p>
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * <p>The maximum number of operating resources that this rule group can use.</p>
   */
  Capacity?: number;

  /**
   * <p>A description of the rule group.</p>
   */
  Description?: string;

  /**
   * <p>Details about the rule group.</p>
   */
  RuleGroup?: RuleGroupDetails;

  /**
   * <p>The ARN of the rule group.</p>
   */
  RuleGroupArn?: string;

  /**
   * <p>The identifier of the rule group.</p>
   */
  RuleGroupId?: string;

  /**
   * <p>The descriptive name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * <p>The type of rule group. A rule group can be stateful or stateless.</p>
   */
  Type?: string;
}

export namespace AwsNetworkFirewallRuleGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsNetworkFirewallRuleGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * <p>The number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * <p>The number of data nodes to use in the OpenSearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Whether UltraWarm is enabled.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The number of UltraWarm instances.</p>
   */
  WarmCount?: number;

  /**
   * <p>Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;

  /**
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>The instance type for your data nodes. </p>
   */
  InstanceType?: string;

  /**
   * <p>The type of UltraWarm instance.</p>
   */
  WarmType?: string;

  /**
   * <p>Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>The hardware configuration of the computer that hosts the dedicated master node.</p>
   *          <p>If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.
   *       </p>
   */
  DedicatedMasterType?: string;
}

export namespace AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainClusterConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about additional options for the domain endpoint.</p>
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * <p>The ARN for the security certificate. The certificate is managed in ACM.</p>
   */
  CustomEndpointCertificateArn?: string;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.</p>
   */
  TLSSecurityPolicy?: string;
}

export namespace AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the configuration for encryption at rest for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID.</p>
   */
  KmsKeyId?: string;
}

export namespace AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration details for a log publishing option.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainLogPublishingOption): any => ({
    ...obj,
  });
}

/**
 * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * <p>Configures the OpenSearch index logs publishing.</p>
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch search slow log publishing.</p>
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * <p>Configures the OpenSearch audit logs publishing.</p>
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}

export namespace AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainLogPublishingOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the configuration for node-to-node encryption.</p>
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * <p>The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>The status of the service software update.</p>
   */
  UpdateStatus?: string;

  /**
   * <p>Whether the service software update is optional.</p>
   */
  OptionalDeployment?: boolean;
}

export namespace AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain.</p>
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * <p>The list of security group IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of subnet IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];
}

export namespace AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainVpcOptionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * <p>The ARN of the OpenSearch Service domain.</p>
   */
  Arn?: string;

  /**
   * <p>IAM policy document that specifies the access policies for the OpenSearch Service domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  DomainName?: string;

  /**
   * <p>The identifier of the domain.</p>
   */
  Id?: string;

  /**
   * <p>The domain endpoint.</p>
   */
  DomainEndpoint?: string;

  /**
   * <p>The version of the domain engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;

  /**
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;

  /**
   * <p>Details about the configuration of an OpenSearch cluster.</p>
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;

  /**
   * <p>Information that OpenSearch Service derives based on <code>VPCOptions</code> for the domain.</p>
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;

  /**
   * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;

  /**
   * <p>The domain endpoints. Used if the OpenSearch domain resides in a VPC.</p>
   *          <p>This is a map of key-value pairs. The key is always <code>vpc</code>. The value is the endpoint.</p>
   */
  DomainEndpoints?: { [key: string]: string };
}

export namespace AwsOpenSearchServiceDomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsOpenSearchServiceDomainDetails): any => ({
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
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region
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
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services
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
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
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
 * <p>An IAM role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * <p>The ARN of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the IAM role.</p>
   */
  FeatureName?: string;

  /**
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other Amazon Web Services
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
