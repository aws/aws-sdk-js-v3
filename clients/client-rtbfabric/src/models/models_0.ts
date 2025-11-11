// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RTBFabricServiceException as __BaseException } from "./RTBFabricServiceException";

/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingAction = {
  NO_BID: "NO_BID",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type ResponderErrorMaskingAction =
  (typeof ResponderErrorMaskingAction)[keyof typeof ResponderErrorMaskingAction];

/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingLoggingType = {
  METRIC: "METRIC",
  NONE: "NONE",
  RESPONSE: "RESPONSE",
} as const;

/**
 * @public
 */
export type ResponderErrorMaskingLoggingType =
  (typeof ResponderErrorMaskingLoggingType)[keyof typeof ResponderErrorMaskingLoggingType];

/**
 * <p>Describes the masking for HTTP error codes.</p>
 * @public
 */
export interface ResponderErrorMaskingForHttpCode {
  /**
   * <p>The HTTP error code.</p>
   * @public
   */
  httpCode: string | undefined;

  /**
   * <p>The action for the error..</p>
   * @public
   */
  action: ResponderErrorMaskingAction | undefined;

  /**
   * <p>The error log type.</p>
   * @public
   */
  loggingTypes: ResponderErrorMaskingLoggingType[] | undefined;

  /**
   * <p>The percentage of response logging.</p>
   * @public
   */
  responseLoggingPercentage?: number | undefined;
}

/**
 * <p>Describes the attributes of a link.</p>
 * @public
 */
export interface LinkAttributes {
  /**
   * <p>Describes the masking for HTTP error codes.</p>
   * @public
   */
  responderErrorMasking?: ResponderErrorMaskingForHttpCode[] | undefined;

  /**
   * <p>The customer-provided unique identifier of the link.</p>
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * <p>Describes a link application log sample.</p>
 * @public
 */
export interface LinkApplicationLogSampling {
  /**
   * <p>An error log entry.</p>
   * @public
   */
  errorLog: number | undefined;

  /**
   * <p>A filter log entry.</p>
   * @public
   */
  filterLog: number | undefined;
}

/**
 * <p>Describes the configuration of a link application log.</p>
 * @public
 */
export interface LinkApplicationLogConfiguration {
  /**
   * <p>Describes a link application log sample.</p>
   * @public
   */
  sampling: LinkApplicationLogSampling | undefined;
}

/**
 * <p>Describes the settings for a link log.</p>
 * @public
 */
export interface LinkLogSettings {
  /**
   * <p>Describes the configuration of a link application log.</p>
   * @public
   */
  applicationLogs: LinkApplicationLogConfiguration | undefined;
}

/**
 * @public
 */
export interface AcceptLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const LinkDirection = {
  REQUEST: "REQUEST",
  RESPONSE: "RESPONSE",
} as const;

/**
 * @public
 */
export type LinkDirection = (typeof LinkDirection)[keyof typeof LinkDirection];

/**
 * <p>Describes the parameters of a no bid module.</p>
 * @public
 */
export interface NoBidModuleParameters {
  /**
   * <p>The reason description.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The reason code.</p>
   * @public
   */
  reasonCode?: number | undefined;

  /**
   * <p>The pass through percentage.</p>
   * @public
   */
  passThroughPercentage?: number | undefined;
}

/**
 * <p>Describes the header tag for a bid action.</p>
 * @public
 */
export interface HeaderTagAction {
  /**
   * <p>The name of the bid action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the bid action.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Describes a no bid action.</p>
 * @public
 */
export interface NoBidAction {
  /**
   * <p>The reason code for the no bid action.</p>
   * @public
   */
  noBidReasonCode?: number | undefined;
}

/**
 * <p>Describes a bid action.</p>
 * @public
 */
export type Action = Action.HeaderTagMember | Action.NoBidMember | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * <p>Describes a no bid action.</p>
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidAction;
    headerTag?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the header tag for a bid action.</p>
   * @public
   */
  export interface HeaderTagMember {
    noBid?: never;
    headerTag: HeaderTagAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    noBid?: never;
    headerTag?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    noBid: (value: NoBidAction) => T;
    headerTag: (value: HeaderTagAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Action, visitor: Visitor<T>): T => {
    if (value.noBid !== undefined) return visitor.noBid(value.noBid);
    if (value.headerTag !== undefined) return visitor.headerTag(value.headerTag);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes the criteria for a filter.</p>
 * @public
 */
export interface FilterCriterion {
  /**
   * <p>The path to filter.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The value to filter.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Describes the configuration of a filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Describes the criteria for a filter.</p>
   * @public
   */
  criteria: FilterCriterion[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * <p>Describes the parameters of an open RTB attribute module.</p>
 * @public
 */
export interface OpenRtbAttributeModuleParameters {
  /**
   * <p>The filter type.</p>
   * @public
   */
  filterType: FilterType | undefined;

  /**
   * <p>Describes the configuration of a filter.</p>
   * @public
   */
  filterConfiguration: Filter[] | undefined;

  /**
   * <p>Describes a bid action.</p>
   * @public
   */
  action: Action | undefined;

  /**
   * <p>The hold back percentage.</p>
   * @public
   */
  holdbackPercentage: number | undefined;
}

/**
 * <p>Describes the parameters of a rate limit.</p>
 * @public
 */
export interface RateLimiterModuleParameters {
  /**
   * <p>The transactions per second rate limit.</p>
   * @public
   */
  tps?: number | undefined;
}

/**
 * <p>Describes the parameters of a module.</p>
 * @public
 */
export type ModuleParameters =
  | ModuleParameters.NoBidMember
  | ModuleParameters.OpenRtbAttributeMember
  | ModuleParameters.RateLimiterMember
  | ModuleParameters.$UnknownMember;

/**
 * @public
 */
export namespace ModuleParameters {
  /**
   * <p>Describes the parameters of a no bid module.</p>
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidModuleParameters;
    openRtbAttribute?: never;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the parameters of an open RTB attribute module.</p>
   * @public
   */
  export interface OpenRtbAttributeMember {
    noBid?: never;
    openRtbAttribute: OpenRtbAttributeModuleParameters;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the parameters of a rate limit.</p>
   * @public
   */
  export interface RateLimiterMember {
    noBid?: never;
    openRtbAttribute?: never;
    rateLimiter: RateLimiterModuleParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    noBid?: never;
    openRtbAttribute?: never;
    rateLimiter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    noBid: (value: NoBidModuleParameters) => T;
    openRtbAttribute: (value: OpenRtbAttributeModuleParameters) => T;
    rateLimiter: (value: RateLimiterModuleParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModuleParameters, visitor: Visitor<T>): T => {
    if (value.noBid !== undefined) return visitor.noBid(value.noBid);
    if (value.openRtbAttribute !== undefined) return visitor.openRtbAttribute(value.openRtbAttribute);
    if (value.rateLimiter !== undefined) return visitor.rateLimiter(value.rateLimiter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes the configuration of a module.</p>
 * @public
 */
export interface ModuleConfiguration {
  /**
   * <p>The version of the module.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The name of the module.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The dependencies of the module.</p>
   * @public
   */
  dependsOn?: string[] | undefined;

  /**
   * <p>Describes the parameters of a module.</p>
   * @public
   */
  moduleParameters?: ModuleParameters | undefined;
}

/**
 * @public
 * @enum
 */
export const LinkStatus = {
  ACCEPTED: "ACCEPTED",
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  FAILED: "FAILED",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_REQUEST: "PENDING_REQUEST",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
  REJECTED: "REJECTED",
  REQUESTED: "REQUESTED",
} as const;

/**
 * @public
 */
export type LinkStatus = (typeof LinkStatus)[keyof typeof LinkStatus];

/**
 * @public
 */
export interface AcceptLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request could not be completed because of a conflict in the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The request could not be completed because of an internal server error. Try your call again.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request could not be completed because the resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Describes the configuration of an auto scaling group.</p>
 * @public
 */
export interface AutoScalingGroupsConfiguration {
  /**
   * <p>The names of the auto scaling group.</p>
   * @public
   */
  autoScalingGroupNames: string[] | undefined;

  /**
   * <p>The role ARN of the auto scaling group.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * <p>The request could not be completed because you exceeded a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Boolean to specify if an HTTP responder is allowed.</p>
   * @public
   */
  httpResponderAllowed?: boolean | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The customer-provided unique identifier of the link.</p>
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>Describes the attributes of a link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The public endpoint of the link.</p>
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface CreateRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional description for the requester gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const RequesterGatewayStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type RequesterGatewayStatus = (typeof RequesterGatewayStatus)[keyof typeof RequesterGatewayStatus];

/**
 * @public
 */
export interface CreateRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The domain name of the requester gateway.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * <p>Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.</p>
 * @public
 */
export interface EksEndpointsConfiguration {
  /**
   * <p>The name of the endpoint resource.</p>
   * @public
   */
  endpointsResourceName: string | undefined;

  /**
   * <p>The namespace of the endpoint resource.</p>
   * @public
   */
  endpointsResourceNamespace: string | undefined;

  /**
   * <p>The URI of the cluster API server endpoint.</p>
   * @public
   */
  clusterApiServerEndpointUri: string | undefined;

  /**
   * <p>The CA certificate chain of the cluster API server.</p>
   * @public
   */
  clusterApiServerCaCertificateChain: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The role ARN for the cluster.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Describes the configuration of a managed endpoint.</p>
 * @public
 */
export type ManagedEndpointConfiguration =
  | ManagedEndpointConfiguration.AutoScalingGroupsMember
  | ManagedEndpointConfiguration.EksEndpointsMember
  | ManagedEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ManagedEndpointConfiguration {
  /**
   * <p>Describes the configuration of an auto scaling group.</p>
   * @public
   */
  export interface AutoScalingGroupsMember {
    autoScalingGroups: AutoScalingGroupsConfiguration;
    eksEndpoints?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.</p>
   * @public
   */
  export interface EksEndpointsMember {
    autoScalingGroups?: never;
    eksEndpoints: EksEndpointsConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    autoScalingGroups?: never;
    eksEndpoints?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    autoScalingGroups: (value: AutoScalingGroupsConfiguration) => T;
    eksEndpoints: (value: EksEndpointsConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ManagedEndpointConfiguration, visitor: Visitor<T>): T => {
    if (value.autoScalingGroups !== undefined) return visitor.autoScalingGroups(value.autoScalingGroups);
    if (value.eksEndpoints !== undefined) return visitor.eksEndpoints(value.eksEndpoints);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * <p>Describes the configuration of a trust store.</p>
 * @public
 */
export interface TrustStoreConfiguration {
  /**
   * <p>The certificate authority certificate.</p>
   * @public
   */
  certificateAuthorityCertificates: string[] | undefined;
}

/**
 * @public
 */
export interface CreateResponderGatewayRequest {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The domain name for the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port to use.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol to use.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration for the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional description for the responder gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ResponderGatewayStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type ResponderGatewayStatus = (typeof ResponderGatewayStatus)[keyof typeof ResponderGatewayStatus];

/**
 * @public
 */
export interface CreateResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface GetLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;
}

/**
 * @public
 */
export interface ListLinksRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes a link.</p>
 * @public
 */
export interface ListLinksResponseStructure {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>Describes the configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Describes the configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Describes attributes of a link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLinksResponse {
  /**
   * <p>Information about created links.</p>
   * @public
   */
  links?: ListLinksResponseStructure[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The configuration of a module.</p>
   * @public
   */
  modules: ModuleConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The timestamp of when the inbound external link was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the inbound external link was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The public endpoint for the link.</p>
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * <p>The timestamp of when the outbound external link was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the outbound external link was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayResponse {
  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;

  /**
   * <p>The domain name of the requester gateway.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The description of the requester gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the requester gateway was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the requester gateway was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The count of active links for the requester gateway.</p>
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * <p>The total count of links for the requester gateway.</p>
   * @public
   */
  totalLinksCount?: number | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayResponse {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * <p>The description of the responder gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the responder gateway was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the responder gateway was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The domain name of the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration of the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The count of active links for the responder gateway.</p>
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * <p>The total count of links for the responder gateway.</p>
   * @public
   */
  totalLinksCount?: number | undefined;

  /**
   * <p>The count of inbound links for the responder gateway.</p>
   * @public
   */
  inboundLinksCount?: number | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysResponse {
  /**
   * <p>The unique identifier of the gateways.</p>
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysResponse {
  /**
   * <p>The unique identifier of the gateways.</p>
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An optional description for the requester gateway.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayRequest {
  /**
   * <p>The domain name for the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port to use.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol to use.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration for the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An optional description for the responder gateway.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
