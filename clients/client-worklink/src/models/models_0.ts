// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { WorkLinkServiceException as __BaseException } from "./WorkLinkServiceException";

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

export interface AssociateDomainResponse {}

/**
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

export enum AuthorizationProviderType {
  SAML = "SAML",
}

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

export interface AssociateWebsiteAuthorizationProviderResponse {
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

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

export interface AssociateWebsiteCertificateAuthorityResponse {
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

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

export interface CreateFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

export interface DeleteFleetRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export interface DeleteFleetResponse {}

export interface DescribeAuditStreamConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export interface DescribeAuditStreamConfigurationResponse {
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

export interface DescribeCompanyNetworkConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

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

export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  SIGNED_OUT = "SIGNED_OUT",
}

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

export interface DescribeDevicePolicyConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export interface DescribeDevicePolicyConfigurationResponse {
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

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

export enum DomainStatus {
  ACTIVE = "ACTIVE",
  ASSOCIATING = "ASSOCIATING",
  DISASSOCIATED = "DISASSOCIATED",
  DISASSOCIATING = "DISASSOCIATING",
  FAILED_TO_ASSOCIATE = "FAILED_TO_ASSOCIATE",
  FAILED_TO_DISASSOCIATE = "FAILED_TO_DISASSOCIATE",
  INACTIVE = "INACTIVE",
  PENDING_VALIDATION = "PENDING_VALIDATION",
}

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

export interface DescribeFleetMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export enum FleetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED_TO_CREATE = "FAILED_TO_CREATE",
  FAILED_TO_DELETE = "FAILED_TO_DELETE",
}

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

export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export enum IdentityProviderType {
  SAML = "SAML",
}

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

export interface DisassociateDomainResponse {}

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

export interface DisassociateWebsiteAuthorizationProviderResponse {}

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

export interface DisassociateWebsiteCertificateAuthorityResponse {}

/**
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

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

export interface RestoreDomainAccessResponse {}

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

export interface RevokeDomainAccessResponse {}

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

export interface SignOutUserResponse {}

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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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

export interface UpdateAuditStreamConfigurationResponse {}

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

export interface UpdateCompanyNetworkConfigurationResponse {}

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

export interface UpdateDevicePolicyConfigurationResponse {}

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

export interface UpdateDomainMetadataResponse {}

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

export interface UpdateFleetMetadataResponse {}

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

export interface UpdateIdentityProviderConfigurationResponse {}

/**
 * @internal
 */
export const AssociateDomainRequestFilterSensitiveLog = (obj: AssociateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDomainResponseFilterSensitiveLog = (obj: AssociateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWebsiteAuthorizationProviderRequestFilterSensitiveLog = (
  obj: AssociateWebsiteAuthorizationProviderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWebsiteAuthorizationProviderResponseFilterSensitiveLog = (
  obj: AssociateWebsiteAuthorizationProviderResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWebsiteCertificateAuthorityRequestFilterSensitiveLog = (
  obj: AssociateWebsiteCertificateAuthorityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateWebsiteCertificateAuthorityResponseFilterSensitiveLog = (
  obj: AssociateWebsiteCertificateAuthorityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetRequestFilterSensitiveLog = (obj: CreateFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetResponseFilterSensitiveLog = (obj: CreateFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetRequestFilterSensitiveLog = (obj: DeleteFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetResponseFilterSensitiveLog = (obj: DeleteFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAuditStreamConfigurationRequestFilterSensitiveLog = (
  obj: DescribeAuditStreamConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAuditStreamConfigurationResponseFilterSensitiveLog = (
  obj: DescribeAuditStreamConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompanyNetworkConfigurationRequestFilterSensitiveLog = (
  obj: DescribeCompanyNetworkConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompanyNetworkConfigurationResponseFilterSensitiveLog = (
  obj: DescribeCompanyNetworkConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceRequestFilterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceResponseFilterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDevicePolicyConfigurationRequestFilterSensitiveLog = (
  obj: DescribeDevicePolicyConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDevicePolicyConfigurationResponseFilterSensitiveLog = (
  obj: DescribeDevicePolicyConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResponseFilterSensitiveLog = (obj: DescribeDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetMetadataRequestFilterSensitiveLog = (obj: DescribeFleetMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetMetadataResponseFilterSensitiveLog = (obj: DescribeFleetMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderConfigurationRequestFilterSensitiveLog = (
  obj: DescribeIdentityProviderConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderConfigurationResponseFilterSensitiveLog = (
  obj: DescribeIdentityProviderConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWebsiteCertificateAuthorityRequestFilterSensitiveLog = (
  obj: DescribeWebsiteCertificateAuthorityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWebsiteCertificateAuthorityResponseFilterSensitiveLog = (
  obj: DescribeWebsiteCertificateAuthorityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSummaryFilterSensitiveLog = (obj: DeviceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDomainRequestFilterSensitiveLog = (obj: DisassociateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDomainResponseFilterSensitiveLog = (obj: DisassociateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWebsiteAuthorizationProviderRequestFilterSensitiveLog = (
  obj: DisassociateWebsiteAuthorizationProviderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWebsiteAuthorizationProviderResponseFilterSensitiveLog = (
  obj: DisassociateWebsiteAuthorizationProviderResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWebsiteCertificateAuthorityRequestFilterSensitiveLog = (
  obj: DisassociateWebsiteCertificateAuthorityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateWebsiteCertificateAuthorityResponseFilterSensitiveLog = (
  obj: DisassociateWebsiteCertificateAuthorityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSummaryFilterSensitiveLog = (obj: FleetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsRequestFilterSensitiveLog = (obj: ListDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsResponseFilterSensitiveLog = (obj: ListDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsRequestFilterSensitiveLog = (obj: ListFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsResponseFilterSensitiveLog = (obj: ListFleetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebsiteAuthorizationProvidersRequestFilterSensitiveLog = (
  obj: ListWebsiteAuthorizationProvidersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebsiteAuthorizationProviderSummaryFilterSensitiveLog = (
  obj: WebsiteAuthorizationProviderSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebsiteAuthorizationProvidersResponseFilterSensitiveLog = (
  obj: ListWebsiteAuthorizationProvidersResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebsiteCertificateAuthoritiesRequestFilterSensitiveLog = (
  obj: ListWebsiteCertificateAuthoritiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebsiteCaSummaryFilterSensitiveLog = (obj: WebsiteCaSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWebsiteCertificateAuthoritiesResponseFilterSensitiveLog = (
  obj: ListWebsiteCertificateAuthoritiesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreDomainAccessRequestFilterSensitiveLog = (obj: RestoreDomainAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreDomainAccessResponseFilterSensitiveLog = (obj: RestoreDomainAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeDomainAccessRequestFilterSensitiveLog = (obj: RevokeDomainAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeDomainAccessResponseFilterSensitiveLog = (obj: RevokeDomainAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignOutUserRequestFilterSensitiveLog = (obj: SignOutUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignOutUserResponseFilterSensitiveLog = (obj: SignOutUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuditStreamConfigurationRequestFilterSensitiveLog = (
  obj: UpdateAuditStreamConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuditStreamConfigurationResponseFilterSensitiveLog = (
  obj: UpdateAuditStreamConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCompanyNetworkConfigurationRequestFilterSensitiveLog = (
  obj: UpdateCompanyNetworkConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCompanyNetworkConfigurationResponseFilterSensitiveLog = (
  obj: UpdateCompanyNetworkConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDevicePolicyConfigurationRequestFilterSensitiveLog = (
  obj: UpdateDevicePolicyConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDevicePolicyConfigurationResponseFilterSensitiveLog = (
  obj: UpdateDevicePolicyConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainMetadataRequestFilterSensitiveLog = (obj: UpdateDomainMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainMetadataResponseFilterSensitiveLog = (obj: UpdateDomainMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetMetadataRequestFilterSensitiveLog = (obj: UpdateFleetMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetMetadataResponseFilterSensitiveLog = (obj: UpdateFleetMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIdentityProviderConfigurationRequestFilterSensitiveLog = (
  obj: UpdateIdentityProviderConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIdentityProviderConfigurationResponseFilterSensitiveLog = (
  obj: UpdateIdentityProviderConfigurationResponse
): any => ({
  ...obj,
});
