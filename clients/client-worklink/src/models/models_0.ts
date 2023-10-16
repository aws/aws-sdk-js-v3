// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkLinkServiceException as __BaseException } from "./WorkLinkServiceException";

/**
 * @public
 */
export interface AssociateDomainRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The fully qualified domain name (FQDN).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDomainResponse {}

/**
 * @public
 * <p>The service is temporarily unavailable.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request is not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The requested resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * @public
 * <p>The number of requests exceeds the limit.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You are not authorized to perform this action.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AuthorizationProviderType = {
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type AuthorizationProviderType = (typeof AuthorizationProviderType)[keyof typeof AuthorizationProviderType];

/**
 * @public
 */
export interface AssociateWebsiteAuthorizationProviderRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | undefined;

  /**
   * @public
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;
}

/**
 * @public
 */
export interface AssociateWebsiteAuthorizationProviderResponse {
  /**
   * @public
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

/**
 * @public
 */
export interface AssociateWebsiteCertificateAuthorityRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The root certificate of the CA.</p>
   */
  Certificate: string | undefined;

  /**
   * @public
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface AssociateWebsiteCertificateAuthorityResponse {
  /**
   * @public
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * @public
   * <p>A unique name for the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * @public
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * @public
   * <p> The tags to add to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {}

/**
 * @public
 */
export interface DescribeAuditStreamConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditStreamConfigurationResponse {
  /**
   * @public
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

/**
 * @public
 */
export interface DescribeCompanyNetworkConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCompanyNetworkConfigurationResponse {
  /**
   * @public
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for a registered user's device.</p>
   */
  DeviceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  ACTIVE: "ACTIVE",
  SIGNED_OUT: "SIGNED_OUT",
} as const;

/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * @public
   * <p>The current state of the device.</p>
   */
  Status?: DeviceStatus;

  /**
   * @public
   * <p>The model of the device.</p>
   */
  Model?: string;

  /**
   * @public
   * <p>The manufacturer of the device.</p>
   */
  Manufacturer?: string;

  /**
   * @public
   * <p>The operating system of the device.</p>
   */
  OperatingSystem?: string;

  /**
   * @public
   * <p>The operating system version of the device.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * @public
   * <p>The operating system patch level of the device.</p>
   */
  PatchLevel?: string;

  /**
   * @public
   * <p>The date that the device first signed in to Amazon WorkLink.</p>
   */
  FirstAccessedTime?: Date;

  /**
   * @public
   * <p>The date that the device last accessed Amazon WorkLink.</p>
   */
  LastAccessedTime?: Date;

  /**
   * @public
   * <p>The user name associated with the device.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface DescribeDevicePolicyConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDevicePolicyConfigurationResponse {
  /**
   * @public
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "ACTIVE",
  ASSOCIATING: "ASSOCIATING",
  DISASSOCIATED: "DISASSOCIATED",
  DISASSOCIATING: "DISASSOCIATING",
  FAILED_TO_ASSOCIATE: "FAILED_TO_ASSOCIATE",
  FAILED_TO_DISASSOCIATE: "FAILED_TO_DISASSOCIATE",
  INACTIVE: "INACTIVE",
  PENDING_VALIDATION: "PENDING_VALIDATION",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The time that the domain was added.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The current state for the domain.</p>
   */
  DomainStatus?: DomainStatus;

  /**
   * @public
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn?: string;
}

/**
 * @public
 */
export interface DescribeFleetMetadataRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED_TO_CREATE: "FAILED_TO_CREATE",
  FAILED_TO_DELETE: "FAILED_TO_DELETE",
} as const;

/**
 * @public
 */
export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];

/**
 * @public
 */
export interface DescribeFleetMetadataResponse {
  /**
   * @public
   * <p>The time that the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time that the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * @public
   * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * @public
   * <p>The current state of the fleet.</p>
   */
  FleetStatus?: FleetStatus;

  /**
   * @public
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityProviderType = {
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationResponse {
  /**
   * @public
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType?: IdentityProviderType;

  /**
   * @public
   * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   */
  ServiceProviderSamlMetadata?: string;

  /**
   * @public
   * <p>The SAML metadata document provided by the user’s identity provider.</p>
   */
  IdentityProviderSamlMetadata?: string;
}

/**
 * @public
 */
export interface DescribeWebsiteCertificateAuthorityRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the certificate authority.</p>
   */
  WebsiteCaId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebsiteCertificateAuthorityResponse {
  /**
   * @public
   * <p>The root certificate of the certificate authority.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The time that the certificate authority was added.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 * <p>The summary of devices.</p>
 */
export interface DeviceSummary {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * @public
   * <p>The status of the device.</p>
   */
  DeviceStatus?: DeviceStatus;
}

/**
 * @public
 */
export interface DisassociateDomainRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDomainResponse {}

/**
 * @public
 */
export interface DisassociateWebsiteAuthorizationProviderRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWebsiteAuthorizationProviderResponse {}

/**
 * @public
 */
export interface DisassociateWebsiteCertificateAuthorityRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWebsiteCertificateAuthorityResponse {}

/**
 * @public
 * <p>The summary of the domain.</p>
 */
export interface DomainSummary {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the domain.</p>
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * @public
 * <p>The summary of the fleet.</p>
 */
export interface FleetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;

  /**
   * @public
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * @public
   * <p>The name of the fleet to display.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * @public
   * <p>The status of the fleet.</p>
   */
  FleetStatus?: FleetStatus;

  /**
   * @public
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * @public
   * <p>Information about the devices.</p>
   */
  Devices?: DeviceSummary[];

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * @public
   * <p>Information about the domains.</p>
   */
  Domains?: DomainSummary[];

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * @public
   * <p>The summary list of the fleets.</p>
   */
  FleetSummaryList?: FleetSummary[];

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWebsiteAuthorizationProvidersRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the website authorization provider.</p>
 */
export interface WebsiteAuthorizationProviderSummary {
  /**
   * @public
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;

  /**
   * @public
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | undefined;

  /**
   * @public
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListWebsiteAuthorizationProvidersResponse {
  /**
   * @public
   * <p>The website authorization providers.</p>
   */
  WebsiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];

  /**
   * @public
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWebsiteCertificateAuthoritiesRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The summary of the certificate authority (CA).</p>
 */
export interface WebsiteCaSummary {
  /**
   * @public
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;

  /**
   * @public
   * <p>The time when the CA was added.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface ListWebsiteCertificateAuthoritiesResponse {
  /**
   * @public
   * <p>Information about the certificates.</p>
   */
  WebsiteCertificateAuthorities?: WebsiteCaSummary[];

  /**
   * @public
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RestoreDomainAccessRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface RestoreDomainAccessResponse {}

/**
 * @public
 */
export interface RevokeDomainAccessRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface RevokeDomainAccessResponse {}

/**
 * @public
 */
export interface SignOutUserRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  Username: string | undefined;
}

/**
 * @public
 */
export interface SignOutUserResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource. A tag is a key-value pair.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
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
export interface UpdateAuditStreamConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon Kinesis data stream that receives the audit events.</p>
   */
  AuditStreamArn?: string;
}

/**
 * @public
 */
export interface UpdateAuditStreamConfigurationResponse {}

/**
 * @public
 */
export interface UpdateCompanyNetworkConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCompanyNetworkConfigurationResponse {}

/**
 * @public
 */
export interface UpdateDevicePolicyConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

/**
 * @public
 */
export interface UpdateDevicePolicyConfigurationResponse {}

/**
 * @public
 */
export interface UpdateDomainMetadataRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface UpdateDomainMetadataResponse {}

/**
 * @public
 */
export interface UpdateFleetMetadataRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;
}

/**
 * @public
 */
export interface UpdateFleetMetadataResponse {}

/**
 * @public
 */
export interface UpdateIdentityProviderConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * @public
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType: IdentityProviderType | undefined;

  /**
   * @public
   * <p>The SAML metadata document provided by the customer’s identity provider. The existing
   *             IdentityProviderSamlMetadata is unset if null is passed.</p>
   */
  IdentityProviderSamlMetadata?: string;
}

/**
 * @public
 */
export interface UpdateIdentityProviderConfigurationResponse {}
