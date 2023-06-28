// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkLinkServiceException as __BaseException } from "./WorkLinkServiceException";

/**
 * @public
 */
export interface AssociateDomainRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;

  /**
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
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

/**
 * @public
 */
export interface AssociateWebsiteCertificateAuthorityRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The root certificate of the CA.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface AssociateWebsiteCertificateAuthorityResponse {
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p>A unique name for the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * <p> The tags to add to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditStreamConfigurationResponse {
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

/**
 * @public
 */
export interface DescribeCompanyNetworkConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCompanyNetworkConfigurationResponse {
  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId?: string;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The current state of the device.</p>
   */
  Status?: DeviceStatus | string;

  /**
   * <p>The model of the device.</p>
   */
  Model?: string;

  /**
   * <p>The manufacturer of the device.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The operating system of the device.</p>
   */
  OperatingSystem?: string;

  /**
   * <p>The operating system version of the device.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The operating system patch level of the device.</p>
   */
  PatchLevel?: string;

  /**
   * <p>The date that the device first signed in to Amazon WorkLink.</p>
   */
  FirstAccessedTime?: Date;

  /**
   * <p>The date that the device last accessed Amazon WorkLink.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The user name associated with the device.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface DescribeDevicePolicyConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDevicePolicyConfigurationResponse {
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The name of the domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time that the domain was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The current state for the domain.</p>
   */
  DomainStatus?: DomainStatus | string;

  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn?: string;
}

/**
 * @public
 */
export interface DescribeFleetMetadataRequest {
  /**
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
   * <p>The time that the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The current state of the fleet.</p>
   */
  FleetStatus?: FleetStatus | string;

  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationRequest {
  /**
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
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   */
  ServiceProviderSamlMetadata?: string;

  /**
   * <p>The SAML metadata document provided by the user’s identity provider.</p>
   */
  IdentityProviderSamlMetadata?: string;
}

/**
 * @public
 */
export interface DescribeWebsiteCertificateAuthorityRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>A unique identifier for the certificate authority.</p>
   */
  WebsiteCaId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebsiteCertificateAuthorityResponse {
  /**
   * <p>The root certificate of the certificate authority.</p>
   */
  Certificate?: string;

  /**
   * <p>The time that the certificate authority was added.</p>
   */
  CreatedTime?: Date;

  /**
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
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The status of the device.</p>
   */
  DeviceStatus?: DeviceStatus | string;
}

/**
 * @public
 */
export interface DisassociateDomainRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The status of the domain.</p>
   */
  DomainStatus: DomainStatus | string | undefined;
}

/**
 * @public
 * <p>The summary of the fleet.</p>
 */
export interface FleetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;

  /**
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The name of the fleet to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  FleetStatus?: FleetStatus | string;

  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>Information about the devices.</p>
   */
  Devices?: DeviceSummary[];

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>Information about the domains.</p>
   */
  Domains?: DomainSummary[];

  /**
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
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * <p>The summary list of the fleets.</p>
   */
  FleetSummaryList?: FleetSummary[];

  /**
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
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWebsiteAuthorizationProvidersRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
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
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;

  /**
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;

  /**
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListWebsiteAuthorizationProvidersResponse {
  /**
   * <p>The website authorization providers.</p>
   */
  WebsiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWebsiteCertificateAuthoritiesRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;

  /**
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
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;

  /**
   * <p>The time when the CA was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface ListWebsiteCertificateAuthoritiesResponse {
  /**
   * <p>Information about the certificates.</p>
   */
  WebsiteCertificateAuthorities?: WebsiteCaSummary[];

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds: string[] | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
   */
  DisplayName?: string;

  /**
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType: IdentityProviderType | string | undefined;

  /**
   * <p>The SAML metadata document provided by the customer’s identity provider. The existing
   *             IdentityProviderSamlMetadata is unset if null is passed.</p>
   */
  IdentityProviderSamlMetadata?: string;
}

/**
 * @public
 */
export interface UpdateIdentityProviderConfigurationResponse {}
