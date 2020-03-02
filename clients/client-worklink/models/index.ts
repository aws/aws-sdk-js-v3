import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDomainRequest {
  __type?: "AssociateDomainRequest";
  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The fully qualified domain name (FQDN).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace AssociateDomainRequest {
  export function isa(o: any): o is AssociateDomainRequest {
    return __isa(o, "AssociateDomainRequest");
  }
}

export interface AssociateDomainResponse {
  __type?: "AssociateDomainResponse";
}

export namespace AssociateDomainResponse {
  export function isa(o: any): o is AssociateDomainResponse {
    return __isa(o, "AssociateDomainResponse");
  }
}

export interface AssociateWebsiteAuthorizationProviderRequest {
  __type?: "AssociateWebsiteAuthorizationProviderRequest";
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
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace AssociateWebsiteAuthorizationProviderRequest {
  export function isa(
    o: any
  ): o is AssociateWebsiteAuthorizationProviderRequest {
    return __isa(o, "AssociateWebsiteAuthorizationProviderRequest");
  }
}

export interface AssociateWebsiteAuthorizationProviderResponse {
  __type?: "AssociateWebsiteAuthorizationProviderResponse";
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

export namespace AssociateWebsiteAuthorizationProviderResponse {
  export function isa(
    o: any
  ): o is AssociateWebsiteAuthorizationProviderResponse {
    return __isa(o, "AssociateWebsiteAuthorizationProviderResponse");
  }
}

export interface AssociateWebsiteCertificateAuthorityRequest {
  __type?: "AssociateWebsiteCertificateAuthorityRequest";
  /**
   * <p>The root certificate of the CA.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace AssociateWebsiteCertificateAuthorityRequest {
  export function isa(
    o: any
  ): o is AssociateWebsiteCertificateAuthorityRequest {
    return __isa(o, "AssociateWebsiteCertificateAuthorityRequest");
  }
}

export interface AssociateWebsiteCertificateAuthorityResponse {
  __type?: "AssociateWebsiteCertificateAuthorityResponse";
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

export namespace AssociateWebsiteCertificateAuthorityResponse {
  export function isa(
    o: any
  ): o is AssociateWebsiteCertificateAuthorityResponse {
    return __isa(o, "AssociateWebsiteCertificateAuthorityResponse");
  }
}

export enum AuthorizationProviderType {
  SAML = "SAML"
}

export interface CreateFleetRequest {
  __type?: "CreateFleetRequest";
  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>A unique name for the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace CreateFleetRequest {
  export function isa(o: any): o is CreateFleetRequest {
    return __isa(o, "CreateFleetRequest");
  }
}

export interface CreateFleetResponse {
  __type?: "CreateFleetResponse";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn?: string;
}

export namespace CreateFleetResponse {
  export function isa(o: any): o is CreateFleetResponse {
    return __isa(o, "CreateFleetResponse");
  }
}

export interface DeleteFleetRequest {
  __type?: "DeleteFleetRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DeleteFleetRequest {
  export function isa(o: any): o is DeleteFleetRequest {
    return __isa(o, "DeleteFleetRequest");
  }
}

export interface DeleteFleetResponse {
  __type?: "DeleteFleetResponse";
}

export namespace DeleteFleetResponse {
  export function isa(o: any): o is DeleteFleetResponse {
    return __isa(o, "DeleteFleetResponse");
  }
}

export interface DescribeAuditStreamConfigurationRequest {
  __type?: "DescribeAuditStreamConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeAuditStreamConfigurationRequest {
  export function isa(o: any): o is DescribeAuditStreamConfigurationRequest {
    return __isa(o, "DescribeAuditStreamConfigurationRequest");
  }
}

export interface DescribeAuditStreamConfigurationResponse {
  __type?: "DescribeAuditStreamConfigurationResponse";
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

export namespace DescribeAuditStreamConfigurationResponse {
  export function isa(o: any): o is DescribeAuditStreamConfigurationResponse {
    return __isa(o, "DescribeAuditStreamConfigurationResponse");
  }
}

export interface DescribeCompanyNetworkConfigurationRequest {
  __type?: "DescribeCompanyNetworkConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeCompanyNetworkConfigurationRequest {
  export function isa(o: any): o is DescribeCompanyNetworkConfigurationRequest {
    return __isa(o, "DescribeCompanyNetworkConfigurationRequest");
  }
}

export interface DescribeCompanyNetworkConfigurationResponse {
  __type?: "DescribeCompanyNetworkConfigurationResponse";
  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink
   *             rendering
   *             containers.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId?: string;
}

export namespace DescribeCompanyNetworkConfigurationResponse {
  export function isa(
    o: any
  ): o is DescribeCompanyNetworkConfigurationResponse {
    return __isa(o, "DescribeCompanyNetworkConfigurationResponse");
  }
}

export interface DescribeDevicePolicyConfigurationRequest {
  __type?: "DescribeDevicePolicyConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeDevicePolicyConfigurationRequest {
  export function isa(o: any): o is DescribeDevicePolicyConfigurationRequest {
    return __isa(o, "DescribeDevicePolicyConfigurationRequest");
  }
}

export interface DescribeDevicePolicyConfigurationResponse {
  __type?: "DescribeDevicePolicyConfigurationResponse";
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

export namespace DescribeDevicePolicyConfigurationResponse {
  export function isa(o: any): o is DescribeDevicePolicyConfigurationResponse {
    return __isa(o, "DescribeDevicePolicyConfigurationResponse");
  }
}

export interface DescribeDeviceRequest {
  __type?: "DescribeDeviceRequest";
  /**
   * <p>A unique identifier for a registered user's device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeDeviceRequest {
  export function isa(o: any): o is DescribeDeviceRequest {
    return __isa(o, "DescribeDeviceRequest");
  }
}

export interface DescribeDeviceResponse {
  __type?: "DescribeDeviceResponse";
  /**
   * <p>The date that the device first signed in to Amazon WorkLink.</p>
   */
  FirstAccessedTime?: Date;

  /**
   * <p>The date that the device last accessed Amazon WorkLink.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The manufacturer of the device.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The model of the device.</p>
   */
  Model?: string;

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
   * <p>The current state of the device.</p>
   */
  Status?: DeviceStatus | string;

  /**
   * <p>The user name associated with the device.</p>
   */
  Username?: string;
}

export namespace DescribeDeviceResponse {
  export function isa(o: any): o is DescribeDeviceResponse {
    return __isa(o, "DescribeDeviceResponse");
  }
}

export interface DescribeDomainRequest {
  __type?: "DescribeDomainRequest";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeDomainRequest {
  export function isa(o: any): o is DescribeDomainRequest {
    return __isa(o, "DescribeDomainRequest");
  }
}

export interface DescribeDomainResponse {
  __type?: "DescribeDomainResponse";
  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn?: string;

  /**
   * <p>The time that the domain was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The current state for the domain.</p>
   */
  DomainStatus?: DomainStatus | string;
}

export namespace DescribeDomainResponse {
  export function isa(o: any): o is DescribeDomainResponse {
    return __isa(o, "DescribeDomainResponse");
  }
}

export interface DescribeFleetMetadataRequest {
  __type?: "DescribeFleetMetadataRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeFleetMetadataRequest {
  export function isa(o: any): o is DescribeFleetMetadataRequest {
    return __isa(o, "DescribeFleetMetadataRequest");
  }
}

export interface DescribeFleetMetadataResponse {
  __type?: "DescribeFleetMetadataResponse";
  /**
   * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The time that the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The current state of the fleet.</p>
   */
  FleetStatus?: FleetStatus | string;

  /**
   * <p>The time that the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace DescribeFleetMetadataResponse {
  export function isa(o: any): o is DescribeFleetMetadataResponse {
    return __isa(o, "DescribeFleetMetadataResponse");
  }
}

export interface DescribeIdentityProviderConfigurationRequest {
  __type?: "DescribeIdentityProviderConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeIdentityProviderConfigurationRequest {
  export function isa(
    o: any
  ): o is DescribeIdentityProviderConfigurationRequest {
    return __isa(o, "DescribeIdentityProviderConfigurationRequest");
  }
}

export interface DescribeIdentityProviderConfigurationResponse {
  __type?: "DescribeIdentityProviderConfigurationResponse";
  /**
   * <p>The SAML metadata document provided by the user’s identity provider.</p>
   */
  IdentityProviderSamlMetadata?: string;

  /**
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   */
  ServiceProviderSamlMetadata?: string;
}

export namespace DescribeIdentityProviderConfigurationResponse {
  export function isa(
    o: any
  ): o is DescribeIdentityProviderConfigurationResponse {
    return __isa(o, "DescribeIdentityProviderConfigurationResponse");
  }
}

export interface DescribeWebsiteCertificateAuthorityRequest {
  __type?: "DescribeWebsiteCertificateAuthorityRequest";
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
  export function isa(o: any): o is DescribeWebsiteCertificateAuthorityRequest {
    return __isa(o, "DescribeWebsiteCertificateAuthorityRequest");
  }
}

export interface DescribeWebsiteCertificateAuthorityResponse {
  __type?: "DescribeWebsiteCertificateAuthorityResponse";
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
  export function isa(
    o: any
  ): o is DescribeWebsiteCertificateAuthorityResponse {
    return __isa(o, "DescribeWebsiteCertificateAuthorityResponse");
  }
}

export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  SIGNED_OUT = "SIGNED_OUT"
}

/**
 * <p>The summary of devices.</p>
 */
export interface DeviceSummary {
  __type?: "DeviceSummary";
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
  export function isa(o: any): o is DeviceSummary {
    return __isa(o, "DeviceSummary");
  }
}

export interface DisassociateDomainRequest {
  __type?: "DisassociateDomainRequest";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DisassociateDomainRequest {
  export function isa(o: any): o is DisassociateDomainRequest {
    return __isa(o, "DisassociateDomainRequest");
  }
}

export interface DisassociateDomainResponse {
  __type?: "DisassociateDomainResponse";
}

export namespace DisassociateDomainResponse {
  export function isa(o: any): o is DisassociateDomainResponse {
    return __isa(o, "DisassociateDomainResponse");
  }
}

export interface DisassociateWebsiteAuthorizationProviderRequest {
  __type?: "DisassociateWebsiteAuthorizationProviderRequest";
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DisassociateWebsiteAuthorizationProviderRequest {
  export function isa(
    o: any
  ): o is DisassociateWebsiteAuthorizationProviderRequest {
    return __isa(o, "DisassociateWebsiteAuthorizationProviderRequest");
  }
}

export interface DisassociateWebsiteAuthorizationProviderResponse {
  __type?: "DisassociateWebsiteAuthorizationProviderResponse";
}

export namespace DisassociateWebsiteAuthorizationProviderResponse {
  export function isa(
    o: any
  ): o is DisassociateWebsiteAuthorizationProviderResponse {
    return __isa(o, "DisassociateWebsiteAuthorizationProviderResponse");
  }
}

export interface DisassociateWebsiteCertificateAuthorityRequest {
  __type?: "DisassociateWebsiteCertificateAuthorityRequest";
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
  export function isa(
    o: any
  ): o is DisassociateWebsiteCertificateAuthorityRequest {
    return __isa(o, "DisassociateWebsiteCertificateAuthorityRequest");
  }
}

export interface DisassociateWebsiteCertificateAuthorityResponse {
  __type?: "DisassociateWebsiteCertificateAuthorityResponse";
}

export namespace DisassociateWebsiteCertificateAuthorityResponse {
  export function isa(
    o: any
  ): o is DisassociateWebsiteCertificateAuthorityResponse {
    return __isa(o, "DisassociateWebsiteCertificateAuthorityResponse");
  }
}

export enum DomainStatus {
  ACTIVE = "ACTIVE",
  ASSOCIATING = "ASSOCIATING",
  DISASSOCIATED = "DISASSOCIATED",
  DISASSOCIATING = "DISASSOCIATING",
  FAILED_TO_ASSOCIATE = "FAILED_TO_ASSOCIATE",
  FAILED_TO_DISASSOCIATE = "FAILED_TO_DISASSOCIATE",
  INACTIVE = "INACTIVE",
  PENDING_VALIDATION = "PENDING_VALIDATION"
}

/**
 * <p>The summary of the domain.</p>
 */
export interface DomainSummary {
  __type?: "DomainSummary";
  /**
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The status of the domain.</p>
   */
  DomainStatus: DomainStatus | string | undefined;
}

export namespace DomainSummary {
  export function isa(o: any): o is DomainSummary {
    return __isa(o, "DomainSummary");
  }
}

export enum FleetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED_TO_CREATE = "FAILED_TO_CREATE",
  FAILED_TO_DELETE = "FAILED_TO_DELETE"
}

/**
 * <p>The summary of the fleet.</p>
 */
export interface FleetSummary {
  __type?: "FleetSummary";
  /**
   * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  FleetStatus?: FleetStatus | string;

  /**
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace FleetSummary {
  export function isa(o: any): o is FleetSummary {
    return __isa(o, "FleetSummary");
  }
}

export enum IdentityProviderType {
  SAML = "SAML"
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

export interface ListDevicesRequest {
  __type?: "ListDevicesRequest";
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

export namespace ListDevicesRequest {
  export function isa(o: any): o is ListDevicesRequest {
    return __isa(o, "ListDevicesRequest");
  }
}

export interface ListDevicesResponse {
  __type?: "ListDevicesResponse";
  /**
   * <p>Information about the devices.</p>
   */
  Devices?: Array<DeviceSummary>;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListDevicesResponse {
  export function isa(o: any): o is ListDevicesResponse {
    return __isa(o, "ListDevicesResponse");
  }
}

export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
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

export namespace ListDomainsRequest {
  export function isa(o: any): o is ListDomainsRequest {
    return __isa(o, "ListDomainsRequest");
  }
}

export interface ListDomainsResponse {
  __type?: "ListDomainsResponse";
  /**
   * <p>Information about the domains.</p>
   */
  Domains?: Array<DomainSummary>;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  export function isa(o: any): o is ListDomainsResponse {
    return __isa(o, "ListDomainsResponse");
  }
}

export interface ListFleetsRequest {
  __type?: "ListFleetsRequest";
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

export namespace ListFleetsRequest {
  export function isa(o: any): o is ListFleetsRequest {
    return __isa(o, "ListFleetsRequest");
  }
}

export interface ListFleetsResponse {
  __type?: "ListFleetsResponse";
  /**
   * <p>The summary list of the fleets.</p>
   */
  FleetSummaryList?: Array<FleetSummary>;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListFleetsResponse {
  export function isa(o: any): o is ListFleetsResponse {
    return __isa(o, "ListFleetsResponse");
  }
}

export interface ListWebsiteAuthorizationProvidersRequest {
  __type?: "ListWebsiteAuthorizationProvidersRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListWebsiteAuthorizationProvidersRequest {
  export function isa(o: any): o is ListWebsiteAuthorizationProvidersRequest {
    return __isa(o, "ListWebsiteAuthorizationProvidersRequest");
  }
}

export interface ListWebsiteAuthorizationProvidersResponse {
  __type?: "ListWebsiteAuthorizationProvidersResponse";
  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The website authorization providers.</p>
   */
  WebsiteAuthorizationProviders?: Array<WebsiteAuthorizationProviderSummary>;
}

export namespace ListWebsiteAuthorizationProvidersResponse {
  export function isa(o: any): o is ListWebsiteAuthorizationProvidersResponse {
    return __isa(o, "ListWebsiteAuthorizationProvidersResponse");
  }
}

export interface ListWebsiteCertificateAuthoritiesRequest {
  __type?: "ListWebsiteCertificateAuthoritiesRequest";
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
  export function isa(o: any): o is ListWebsiteCertificateAuthoritiesRequest {
    return __isa(o, "ListWebsiteCertificateAuthoritiesRequest");
  }
}

export interface ListWebsiteCertificateAuthoritiesResponse {
  __type?: "ListWebsiteCertificateAuthoritiesResponse";
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the
   *             certificates.</p>
   */
  WebsiteCertificateAuthorities?: Array<WebsiteCaSummary>;
}

export namespace ListWebsiteCertificateAuthoritiesResponse {
  export function isa(o: any): o is ListWebsiteCertificateAuthoritiesResponse {
    return __isa(o, "ListWebsiteCertificateAuthoritiesResponse");
  }
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export interface RestoreDomainAccessRequest {
  __type?: "RestoreDomainAccessRequest";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace RestoreDomainAccessRequest {
  export function isa(o: any): o is RestoreDomainAccessRequest {
    return __isa(o, "RestoreDomainAccessRequest");
  }
}

export interface RestoreDomainAccessResponse {
  __type?: "RestoreDomainAccessResponse";
}

export namespace RestoreDomainAccessResponse {
  export function isa(o: any): o is RestoreDomainAccessResponse {
    return __isa(o, "RestoreDomainAccessResponse");
  }
}

export interface RevokeDomainAccessRequest {
  __type?: "RevokeDomainAccessRequest";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace RevokeDomainAccessRequest {
  export function isa(o: any): o is RevokeDomainAccessRequest {
    return __isa(o, "RevokeDomainAccessRequest");
  }
}

export interface RevokeDomainAccessResponse {
  __type?: "RevokeDomainAccessResponse";
}

export namespace RevokeDomainAccessResponse {
  export function isa(o: any): o is RevokeDomainAccessResponse {
    return __isa(o, "RevokeDomainAccessResponse");
  }
}

export interface SignOutUserRequest {
  __type?: "SignOutUserRequest";
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
  export function isa(o: any): o is SignOutUserRequest {
    return __isa(o, "SignOutUserRequest");
  }
}

export interface SignOutUserResponse {
  __type?: "SignOutUserResponse";
}

export namespace SignOutUserResponse {
  export function isa(o: any): o is SignOutUserResponse {
    return __isa(o, "SignOutUserResponse");
  }
}

/**
 * <p>The number of requests exceeds the limit.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * <p>You are not authorized to perform this action.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

export interface UpdateAuditStreamConfigurationRequest {
  __type?: "UpdateAuditStreamConfigurationRequest";
  /**
   * <p>The ARN of the Amazon Kinesis data stream that receives the audit events.</p>
   */
  AuditStreamArn?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace UpdateAuditStreamConfigurationRequest {
  export function isa(o: any): o is UpdateAuditStreamConfigurationRequest {
    return __isa(o, "UpdateAuditStreamConfigurationRequest");
  }
}

export interface UpdateAuditStreamConfigurationResponse {
  __type?: "UpdateAuditStreamConfigurationResponse";
}

export namespace UpdateAuditStreamConfigurationResponse {
  export function isa(o: any): o is UpdateAuditStreamConfigurationResponse {
    return __isa(o, "UpdateAuditStreamConfigurationResponse");
  }
}

export interface UpdateCompanyNetworkConfigurationRequest {
  __type?: "UpdateCompanyNetworkConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink
   *             rendering
   *             containers.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId: string | undefined;
}

export namespace UpdateCompanyNetworkConfigurationRequest {
  export function isa(o: any): o is UpdateCompanyNetworkConfigurationRequest {
    return __isa(o, "UpdateCompanyNetworkConfigurationRequest");
  }
}

export interface UpdateCompanyNetworkConfigurationResponse {
  __type?: "UpdateCompanyNetworkConfigurationResponse";
}

export namespace UpdateCompanyNetworkConfigurationResponse {
  export function isa(o: any): o is UpdateCompanyNetworkConfigurationResponse {
    return __isa(o, "UpdateCompanyNetworkConfigurationResponse");
  }
}

export interface UpdateDevicePolicyConfigurationRequest {
  __type?: "UpdateDevicePolicyConfigurationRequest";
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace UpdateDevicePolicyConfigurationRequest {
  export function isa(o: any): o is UpdateDevicePolicyConfigurationRequest {
    return __isa(o, "UpdateDevicePolicyConfigurationRequest");
  }
}

export interface UpdateDevicePolicyConfigurationResponse {
  __type?: "UpdateDevicePolicyConfigurationResponse";
}

export namespace UpdateDevicePolicyConfigurationResponse {
  export function isa(o: any): o is UpdateDevicePolicyConfigurationResponse {
    return __isa(o, "UpdateDevicePolicyConfigurationResponse");
  }
}

export interface UpdateDomainMetadataRequest {
  __type?: "UpdateDomainMetadataRequest";
  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace UpdateDomainMetadataRequest {
  export function isa(o: any): o is UpdateDomainMetadataRequest {
    return __isa(o, "UpdateDomainMetadataRequest");
  }
}

export interface UpdateDomainMetadataResponse {
  __type?: "UpdateDomainMetadataResponse";
}

export namespace UpdateDomainMetadataResponse {
  export function isa(o: any): o is UpdateDomainMetadataResponse {
    return __isa(o, "UpdateDomainMetadataResponse");
  }
}

export interface UpdateFleetMetadataRequest {
  __type?: "UpdateFleetMetadataRequest";
  /**
   * <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace UpdateFleetMetadataRequest {
  export function isa(o: any): o is UpdateFleetMetadataRequest {
    return __isa(o, "UpdateFleetMetadataRequest");
  }
}

export interface UpdateFleetMetadataResponse {
  __type?: "UpdateFleetMetadataResponse";
}

export namespace UpdateFleetMetadataResponse {
  export function isa(o: any): o is UpdateFleetMetadataResponse {
    return __isa(o, "UpdateFleetMetadataResponse");
  }
}

export interface UpdateIdentityProviderConfigurationRequest {
  __type?: "UpdateIdentityProviderConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The SAML metadata document provided by the customer’s identity provider. The existing
   *             IdentityProviderSamlMetadata is unset if null is passed.</p>
   */
  IdentityProviderSamlMetadata?: string;

  /**
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType: IdentityProviderType | string | undefined;
}

export namespace UpdateIdentityProviderConfigurationRequest {
  export function isa(o: any): o is UpdateIdentityProviderConfigurationRequest {
    return __isa(o, "UpdateIdentityProviderConfigurationRequest");
  }
}

export interface UpdateIdentityProviderConfigurationResponse {
  __type?: "UpdateIdentityProviderConfigurationResponse";
}

export namespace UpdateIdentityProviderConfigurationResponse {
  export function isa(
    o: any
  ): o is UpdateIdentityProviderConfigurationResponse {
    return __isa(o, "UpdateIdentityProviderConfigurationResponse");
  }
}

/**
 * <p>The summary of the website authorization provider.</p>
 */
export interface WebsiteAuthorizationProviderSummary {
  __type?: "WebsiteAuthorizationProviderSummary";
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;

  /**
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;
}

export namespace WebsiteAuthorizationProviderSummary {
  export function isa(o: any): o is WebsiteAuthorizationProviderSummary {
    return __isa(o, "WebsiteAuthorizationProviderSummary");
  }
}

/**
 * <p>The summary of the certificate authority (CA).</p>
 */
export interface WebsiteCaSummary {
  __type?: "WebsiteCaSummary";
  /**
   * <p>The time when the CA was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

export namespace WebsiteCaSummary {
  export function isa(o: any): o is WebsiteCaSummary {
    return __isa(o, "WebsiteCaSummary");
  }
}
