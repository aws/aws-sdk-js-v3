import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AssociateDomainRequest {
  export const filterSensitiveLog = (obj: AssociateDomainRequest): any => ({
    ...obj,
  });
}

export interface AssociateDomainResponse {}

export namespace AssociateDomainResponse {
  export const filterSensitiveLog = (obj: AssociateDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of requests exceeds the limit.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized to perform this action.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
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

export namespace AssociateWebsiteAuthorizationProviderRequest {
  export const filterSensitiveLog = (obj: AssociateWebsiteAuthorizationProviderRequest): any => ({
    ...obj,
  });
}

export interface AssociateWebsiteAuthorizationProviderResponse {
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

export namespace AssociateWebsiteAuthorizationProviderResponse {
  export const filterSensitiveLog = (obj: AssociateWebsiteAuthorizationProviderResponse): any => ({
    ...obj,
  });
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

export namespace AssociateWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: AssociateWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface AssociateWebsiteCertificateAuthorityResponse {
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

export namespace AssociateWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: AssociateWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateFleetRequest {
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
}

export interface CreateFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

export namespace CreateFleetResponse {
  export const filterSensitiveLog = (obj: CreateFleetResponse): any => ({
    ...obj,
  });
}

export interface DeleteFleetRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DeleteFleetRequest {
  export const filterSensitiveLog = (obj: DeleteFleetRequest): any => ({
    ...obj,
  });
}

export interface DeleteFleetResponse {}

export namespace DeleteFleetResponse {
  export const filterSensitiveLog = (obj: DeleteFleetResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuditStreamConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeAuditStreamConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeAuditStreamConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuditStreamConfigurationResponse {
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

export namespace DescribeAuditStreamConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeAuditStreamConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeCompanyNetworkConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeCompanyNetworkConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeCompanyNetworkConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeCompanyNetworkConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeCompanyNetworkConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeDeviceRequest {
  export const filterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
    ...obj,
  });
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

export namespace DescribeDeviceResponse {
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
}

export interface DescribeDevicePolicyConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeDevicePolicyConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeDevicePolicyConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeDevicePolicyConfigurationResponse {
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

export namespace DescribeDevicePolicyConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeDevicePolicyConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeDomainRequest {
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj,
  });
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

export namespace DescribeDomainResponse {
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj,
  });
}

export interface DescribeFleetMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeFleetMetadataRequest {
  export const filterSensitiveLog = (obj: DescribeFleetMetadataRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace DescribeFleetMetadataResponse {
  export const filterSensitiveLog = (obj: DescribeFleetMetadataResponse): any => ({
    ...obj,
  });
}

export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeIdentityProviderConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeIdentityProviderConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DescribeWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
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

export namespace DescribeWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: DescribeWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
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

export namespace DeviceSummary {
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
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

export namespace DisassociateDomainRequest {
  export const filterSensitiveLog = (obj: DisassociateDomainRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDomainResponse {}

export namespace DisassociateDomainResponse {
  export const filterSensitiveLog = (obj: DisassociateDomainResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateWebsiteAuthorizationProviderRequest {
  export const filterSensitiveLog = (obj: DisassociateWebsiteAuthorizationProviderRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWebsiteAuthorizationProviderResponse {}

export namespace DisassociateWebsiteAuthorizationProviderResponse {
  export const filterSensitiveLog = (obj: DisassociateWebsiteAuthorizationProviderResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DisassociateWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWebsiteCertificateAuthorityResponse {}

export namespace DisassociateWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: DisassociateWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
}

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

export namespace DomainSummary {
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace FleetSummary {
  export const filterSensitiveLog = (obj: FleetSummary): any => ({
    ...obj,
  });
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

export namespace ListDevicesRequest {
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
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

export namespace ListDevicesResponse {
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
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

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
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

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
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

export namespace ListFleetsRequest {
  export const filterSensitiveLog = (obj: ListFleetsRequest): any => ({
    ...obj,
  });
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

export namespace ListFleetsResponse {
  export const filterSensitiveLog = (obj: ListFleetsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ListWebsiteAuthorizationProvidersRequest {
  export const filterSensitiveLog = (obj: ListWebsiteAuthorizationProvidersRequest): any => ({
    ...obj,
  });
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

export namespace WebsiteAuthorizationProviderSummary {
  export const filterSensitiveLog = (obj: WebsiteAuthorizationProviderSummary): any => ({
    ...obj,
  });
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

export namespace ListWebsiteAuthorizationProvidersResponse {
  export const filterSensitiveLog = (obj: ListWebsiteAuthorizationProvidersResponse): any => ({
    ...obj,
  });
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

export namespace ListWebsiteCertificateAuthoritiesRequest {
  export const filterSensitiveLog = (obj: ListWebsiteCertificateAuthoritiesRequest): any => ({
    ...obj,
  });
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

export namespace WebsiteCaSummary {
  export const filterSensitiveLog = (obj: WebsiteCaSummary): any => ({
    ...obj,
  });
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

export namespace ListWebsiteCertificateAuthoritiesResponse {
  export const filterSensitiveLog = (obj: ListWebsiteCertificateAuthoritiesResponse): any => ({
    ...obj,
  });
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

export namespace RestoreDomainAccessRequest {
  export const filterSensitiveLog = (obj: RestoreDomainAccessRequest): any => ({
    ...obj,
  });
}

export interface RestoreDomainAccessResponse {}

export namespace RestoreDomainAccessResponse {
  export const filterSensitiveLog = (obj: RestoreDomainAccessResponse): any => ({
    ...obj,
  });
}

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

export namespace RevokeDomainAccessRequest {
  export const filterSensitiveLog = (obj: RevokeDomainAccessRequest): any => ({
    ...obj,
  });
}

export interface RevokeDomainAccessResponse {}

export namespace RevokeDomainAccessResponse {
  export const filterSensitiveLog = (obj: RevokeDomainAccessResponse): any => ({
    ...obj,
  });
}

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

export namespace SignOutUserRequest {
  export const filterSensitiveLog = (obj: SignOutUserRequest): any => ({
    ...obj,
  });
}

export interface SignOutUserResponse {}

export namespace SignOutUserResponse {
  export const filterSensitiveLog = (obj: SignOutUserResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is a key-value pair.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateAuditStreamConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateAuditStreamConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuditStreamConfigurationResponse {}

export namespace UpdateAuditStreamConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateAuditStreamConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateCompanyNetworkConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateCompanyNetworkConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateCompanyNetworkConfigurationResponse {}

export namespace UpdateCompanyNetworkConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateCompanyNetworkConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateDevicePolicyConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateDevicePolicyConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevicePolicyConfigurationResponse {}

export namespace UpdateDevicePolicyConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateDevicePolicyConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateDomainMetadataRequest {
  export const filterSensitiveLog = (obj: UpdateDomainMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainMetadataResponse {}

export namespace UpdateDomainMetadataResponse {
  export const filterSensitiveLog = (obj: UpdateDomainMetadataResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateFleetMetadataRequest {
  export const filterSensitiveLog = (obj: UpdateFleetMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateFleetMetadataResponse {}

export namespace UpdateFleetMetadataResponse {
  export const filterSensitiveLog = (obj: UpdateFleetMetadataResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateIdentityProviderConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateIdentityProviderConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateIdentityProviderConfigurationResponse {}

export namespace UpdateIdentityProviderConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateIdentityProviderConfigurationResponse): any => ({
    ...obj,
  });
}
