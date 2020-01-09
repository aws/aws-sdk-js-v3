import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDomainRequest {
  __type?: "AssociateDomainRequest";
  /**
   *
   *         <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   *
   */
  AcmCertificateArn: string | undefined;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The fully qualified domain name (FQDN).</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace AssociateDomainRequest {
  export function isa(o: any): o is AssociateDomainRequest {
    return _smithy.isa(o, "AssociateDomainRequest");
  }
}

export interface AssociateDomainResponse extends $MetadataBearer {
  __type?: "AssociateDomainResponse";
}

export namespace AssociateDomainResponse {
  export function isa(o: any): o is AssociateDomainResponse {
    return _smithy.isa(o, "AssociateDomainResponse");
  }
}

export interface AssociateWebsiteAuthorizationProviderRequest {
  __type?: "AssociateWebsiteAuthorizationProviderRequest";
  /**
   *
   *         <p>The authorization provider type.</p>
   *
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;

  /**
   *
   *         <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   *
   */
  DomainName?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace AssociateWebsiteAuthorizationProviderRequest {
  export function isa(o: any): o is AssociateWebsiteAuthorizationProviderRequest {
    return _smithy.isa(o, "AssociateWebsiteAuthorizationProviderRequest");
  }
}

export interface AssociateWebsiteAuthorizationProviderResponse extends $MetadataBearer {
  __type?: "AssociateWebsiteAuthorizationProviderResponse";
  /**
   *
   *         <p>A unique identifier for the authorization provider.</p>
   *
   */
  AuthorizationProviderId?: string;
}

export namespace AssociateWebsiteAuthorizationProviderResponse {
  export function isa(o: any): o is AssociateWebsiteAuthorizationProviderResponse {
    return _smithy.isa(o, "AssociateWebsiteAuthorizationProviderResponse");
  }
}

export interface AssociateWebsiteCertificateAuthorityRequest {
  __type?: "AssociateWebsiteCertificateAuthorityRequest";
  /**
   *
   *         <p>The root certificate of the CA.</p>
   *
   */
  Certificate: string | undefined;

  /**
   *
   *         <p>The certificate name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace AssociateWebsiteCertificateAuthorityRequest {
  export function isa(o: any): o is AssociateWebsiteCertificateAuthorityRequest {
    return _smithy.isa(o, "AssociateWebsiteCertificateAuthorityRequest");
  }
}

export interface AssociateWebsiteCertificateAuthorityResponse extends $MetadataBearer {
  __type?: "AssociateWebsiteCertificateAuthorityResponse";
  /**
   *
   *         <p>A unique identifier for the CA.</p>
   *
   */
  WebsiteCaId?: string;
}

export namespace AssociateWebsiteCertificateAuthorityResponse {
  export function isa(o: any): o is AssociateWebsiteCertificateAuthorityResponse {
    return _smithy.isa(o, "AssociateWebsiteCertificateAuthorityResponse");
  }
}

export enum AuthorizationProviderType {
  SAML = "SAML",
}

export interface CreateFleetRequest {
  __type?: "CreateFleetRequest";
  /**
   *
   *         <p>The fleet name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>A unique name for the fleet.</p>
   *
   */
  FleetName: string | undefined;

  /**
   *
   *         <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   *
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace CreateFleetRequest {
  export function isa(o: any): o is CreateFleetRequest {
    return _smithy.isa(o, "CreateFleetRequest");
  }
}

export interface CreateFleetResponse extends $MetadataBearer {
  __type?: "CreateFleetResponse";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn?: string;
}

export namespace CreateFleetResponse {
  export function isa(o: any): o is CreateFleetResponse {
    return _smithy.isa(o, "CreateFleetResponse");
  }
}

export interface DeleteFleetRequest {
  __type?: "DeleteFleetRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DeleteFleetRequest {
  export function isa(o: any): o is DeleteFleetRequest {
    return _smithy.isa(o, "DeleteFleetRequest");
  }
}

export interface DeleteFleetResponse extends $MetadataBearer {
  __type?: "DeleteFleetResponse";
}

export namespace DeleteFleetResponse {
  export function isa(o: any): o is DeleteFleetResponse {
    return _smithy.isa(o, "DeleteFleetResponse");
  }
}

export interface DescribeAuditStreamConfigurationRequest {
  __type?: "DescribeAuditStreamConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeAuditStreamConfigurationRequest {
  export function isa(o: any): o is DescribeAuditStreamConfigurationRequest {
    return _smithy.isa(o, "DescribeAuditStreamConfigurationRequest");
  }
}

export interface DescribeAuditStreamConfigurationResponse extends $MetadataBearer {
  __type?: "DescribeAuditStreamConfigurationResponse";
  /**
   *
   *         <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   *
   */
  AuditStreamArn?: string;
}

export namespace DescribeAuditStreamConfigurationResponse {
  export function isa(o: any): o is DescribeAuditStreamConfigurationResponse {
    return _smithy.isa(o, "DescribeAuditStreamConfigurationResponse");
  }
}

export interface DescribeCompanyNetworkConfigurationRequest {
  __type?: "DescribeCompanyNetworkConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeCompanyNetworkConfigurationRequest {
  export function isa(o: any): o is DescribeCompanyNetworkConfigurationRequest {
    return _smithy.isa(o, "DescribeCompanyNetworkConfigurationRequest");
  }
}

export interface DescribeCompanyNetworkConfigurationResponse extends $MetadataBearer {
  __type?: "DescribeCompanyNetworkConfigurationResponse";
  /**
   *
   *         <p>The security groups associated with access to the provided subnets.</p>
   *
   */
  SecurityGroupIds?: Array<string>;

  /**
   *
   *         <p>The subnets used for X-ENI connections from Amazon WorkLink
   *             rendering
   *             containers.</p>
   *
   */
  SubnetIds?: Array<string>;

  /**
   *
   *         <p>The VPC with connectivity to associated websites.</p>
   *
   */
  VpcId?: string;
}

export namespace DescribeCompanyNetworkConfigurationResponse {
  export function isa(o: any): o is DescribeCompanyNetworkConfigurationResponse {
    return _smithy.isa(o, "DescribeCompanyNetworkConfigurationResponse");
  }
}

export interface DescribeDevicePolicyConfigurationRequest {
  __type?: "DescribeDevicePolicyConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeDevicePolicyConfigurationRequest {
  export function isa(o: any): o is DescribeDevicePolicyConfigurationRequest {
    return _smithy.isa(o, "DescribeDevicePolicyConfigurationRequest");
  }
}

export interface DescribeDevicePolicyConfigurationResponse extends $MetadataBearer {
  __type?: "DescribeDevicePolicyConfigurationResponse";
  /**
   *
   *         <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   *
   */
  DeviceCaCertificate?: string;
}

export namespace DescribeDevicePolicyConfigurationResponse {
  export function isa(o: any): o is DescribeDevicePolicyConfigurationResponse {
    return _smithy.isa(o, "DescribeDevicePolicyConfigurationResponse");
  }
}

export interface DescribeDeviceRequest {
  __type?: "DescribeDeviceRequest";
  /**
   *
   *         <p>A unique identifier for a registered user's device.</p>
   *
   */
  DeviceId: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeDeviceRequest {
  export function isa(o: any): o is DescribeDeviceRequest {
    return _smithy.isa(o, "DescribeDeviceRequest");
  }
}

export interface DescribeDeviceResponse extends $MetadataBearer {
  __type?: "DescribeDeviceResponse";
  /**
   *
   *         <p>The date that the device first signed in to Amazon WorkLink.</p>
   *
   */
  FirstAccessedTime?: Date;

  /**
   *
   *         <p>The date that the device last accessed Amazon WorkLink.</p>
   *
   */
  LastAccessedTime?: Date;

  /**
   *
   *         <p>The manufacturer of the device.</p>
   *
   */
  Manufacturer?: string;

  /**
   *
   *         <p>The model of the device.</p>
   *
   */
  Model?: string;

  /**
   *
   *         <p>The operating system of the device.</p>
   *
   */
  OperatingSystem?: string;

  /**
   *
   *         <p>The operating system version of the device.</p>
   *
   */
  OperatingSystemVersion?: string;

  /**
   *
   *         <p>The operating system patch level of the device.</p>
   *
   */
  PatchLevel?: string;

  /**
   *
   *         <p>The current state of the device.</p>
   *
   */
  Status?: DeviceStatus | string;

  /**
   *
   *         <p>The user name associated with the device.</p>
   *
   */
  Username?: string;
}

export namespace DescribeDeviceResponse {
  export function isa(o: any): o is DescribeDeviceResponse {
    return _smithy.isa(o, "DescribeDeviceResponse");
  }
}

export interface DescribeDomainRequest {
  __type?: "DescribeDomainRequest";
  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeDomainRequest {
  export function isa(o: any): o is DescribeDomainRequest {
    return _smithy.isa(o, "DescribeDomainRequest");
  }
}

export interface DescribeDomainResponse extends $MetadataBearer {
  __type?: "DescribeDomainResponse";
  /**
   *
   *         <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   *
   */
  AcmCertificateArn?: string;

  /**
   *
   *         <p>The time that the domain was added.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName?: string;

  /**
   *
   *         <p>The current state for the domain.</p>
   *
   */
  DomainStatus?: DomainStatus | string;
}

export namespace DescribeDomainResponse {
  export function isa(o: any): o is DescribeDomainResponse {
    return _smithy.isa(o, "DescribeDomainResponse");
  }
}

export interface DescribeFleetMetadataRequest {
  __type?: "DescribeFleetMetadataRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeFleetMetadataRequest {
  export function isa(o: any): o is DescribeFleetMetadataRequest {
    return _smithy.isa(o, "DescribeFleetMetadataRequest");
  }
}

export interface DescribeFleetMetadataResponse extends $MetadataBearer {
  __type?: "DescribeFleetMetadataResponse";
  /**
   *
   *         <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   *
   */
  CompanyCode?: string;

  /**
   *
   *         <p>The time that the fleet was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The name of the fleet.</p>
   *
   */
  FleetName?: string;

  /**
   *
   *         <p>The current state of the fleet.</p>
   *
   */
  FleetStatus?: FleetStatus | string;

  /**
   *
   *         <p>The time that the fleet was last updated.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   *         <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   *
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace DescribeFleetMetadataResponse {
  export function isa(o: any): o is DescribeFleetMetadataResponse {
    return _smithy.isa(o, "DescribeFleetMetadataResponse");
  }
}

export interface DescribeIdentityProviderConfigurationRequest {
  __type?: "DescribeIdentityProviderConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DescribeIdentityProviderConfigurationRequest {
  export function isa(o: any): o is DescribeIdentityProviderConfigurationRequest {
    return _smithy.isa(o, "DescribeIdentityProviderConfigurationRequest");
  }
}

export interface DescribeIdentityProviderConfigurationResponse extends $MetadataBearer {
  __type?: "DescribeIdentityProviderConfigurationResponse";
  /**
   *
   *         <p>The SAML metadata document provided by the user’s identity provider.</p>
   *
   */
  IdentityProviderSamlMetadata?: string;

  /**
   *
   *         <p>The type of identity provider.</p>
   *
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   *
   *         <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   *
   */
  ServiceProviderSamlMetadata?: string;
}

export namespace DescribeIdentityProviderConfigurationResponse {
  export function isa(o: any): o is DescribeIdentityProviderConfigurationResponse {
    return _smithy.isa(o, "DescribeIdentityProviderConfigurationResponse");
  }
}

export interface DescribeWebsiteCertificateAuthorityRequest {
  __type?: "DescribeWebsiteCertificateAuthorityRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>A unique identifier for the certificate authority.</p>
   *
   */
  WebsiteCaId: string | undefined;
}

export namespace DescribeWebsiteCertificateAuthorityRequest {
  export function isa(o: any): o is DescribeWebsiteCertificateAuthorityRequest {
    return _smithy.isa(o, "DescribeWebsiteCertificateAuthorityRequest");
  }
}

export interface DescribeWebsiteCertificateAuthorityResponse extends $MetadataBearer {
  __type?: "DescribeWebsiteCertificateAuthorityResponse";
  /**
   *
   *         <p>The root certificate of the certificate authority.</p>
   *
   */
  Certificate?: string;

  /**
   *
   *         <p>The time that the certificate authority was added.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The certificate name to display.</p>
   *
   */
  DisplayName?: string;
}

export namespace DescribeWebsiteCertificateAuthorityResponse {
  export function isa(o: any): o is DescribeWebsiteCertificateAuthorityResponse {
    return _smithy.isa(o, "DescribeWebsiteCertificateAuthorityResponse");
  }
}

export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  SIGNED_OUT = "SIGNED_OUT",
}

/**
 *
 *         <p>The summary of devices.</p>
 *
 */
export interface DeviceSummary {
  __type?: "DeviceSummary";
  /**
   *
   *         <p>The ID of the device.</p>
   *
   */
  DeviceId?: string;

  /**
   *
   *         <p>The status of the device.</p>
   *
   */
  DeviceStatus?: DeviceStatus | string;
}

export namespace DeviceSummary {
  export function isa(o: any): o is DeviceSummary {
    return _smithy.isa(o, "DeviceSummary");
  }
}

export interface DisassociateDomainRequest {
  __type?: "DisassociateDomainRequest";
  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DisassociateDomainRequest {
  export function isa(o: any): o is DisassociateDomainRequest {
    return _smithy.isa(o, "DisassociateDomainRequest");
  }
}

export interface DisassociateDomainResponse extends $MetadataBearer {
  __type?: "DisassociateDomainResponse";
}

export namespace DisassociateDomainResponse {
  export function isa(o: any): o is DisassociateDomainResponse {
    return _smithy.isa(o, "DisassociateDomainResponse");
  }
}

export interface DisassociateWebsiteAuthorizationProviderRequest {
  __type?: "DisassociateWebsiteAuthorizationProviderRequest";
  /**
   *
   *         <p>A unique identifier for the authorization provider.</p>
   *
   */
  AuthorizationProviderId: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace DisassociateWebsiteAuthorizationProviderRequest {
  export function isa(o: any): o is DisassociateWebsiteAuthorizationProviderRequest {
    return _smithy.isa(o, "DisassociateWebsiteAuthorizationProviderRequest");
  }
}

export interface DisassociateWebsiteAuthorizationProviderResponse extends $MetadataBearer {
  __type?: "DisassociateWebsiteAuthorizationProviderResponse";
}

export namespace DisassociateWebsiteAuthorizationProviderResponse {
  export function isa(o: any): o is DisassociateWebsiteAuthorizationProviderResponse {
    return _smithy.isa(o, "DisassociateWebsiteAuthorizationProviderResponse");
  }
}

export interface DisassociateWebsiteCertificateAuthorityRequest {
  __type?: "DisassociateWebsiteCertificateAuthorityRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>A unique identifier for the CA.</p>
   *
   */
  WebsiteCaId: string | undefined;
}

export namespace DisassociateWebsiteCertificateAuthorityRequest {
  export function isa(o: any): o is DisassociateWebsiteCertificateAuthorityRequest {
    return _smithy.isa(o, "DisassociateWebsiteCertificateAuthorityRequest");
  }
}

export interface DisassociateWebsiteCertificateAuthorityResponse extends $MetadataBearer {
  __type?: "DisassociateWebsiteCertificateAuthorityResponse";
}

export namespace DisassociateWebsiteCertificateAuthorityResponse {
  export function isa(o: any): o is DisassociateWebsiteCertificateAuthorityResponse {
    return _smithy.isa(o, "DisassociateWebsiteCertificateAuthorityResponse");
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
  PENDING_VALIDATION = "PENDING_VALIDATION",
}

/**
 *
 *         <p>The summary of the domain.</p>
 *
 */
export interface DomainSummary {
  __type?: "DomainSummary";
  /**
   *
   *         <p>The time that the domain was created.</p>
   *
   */
  CreatedTime: Date | undefined;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The status of the domain.</p>
   *
   */
  DomainStatus: DomainStatus | string | undefined;
}

export namespace DomainSummary {
  export function isa(o: any): o is DomainSummary {
    return _smithy.isa(o, "DomainSummary");
  }
}

export enum FleetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED_TO_CREATE = "FAILED_TO_CREATE",
  FAILED_TO_DELETE = "FAILED_TO_DELETE",
}

/**
 *
 *         <p>The summary of the fleet.</p>
 *
 */
export interface FleetSummary {
  __type?: "FleetSummary";
  /**
   *
   *         <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   *
   */
  CompanyCode?: string;

  /**
   *
   *         <p>The time when the fleet was created.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn?: string;

  /**
   *
   *         <p>The name of the fleet.</p>
   *
   */
  FleetName?: string;

  /**
   *
   *         <p>The status of the fleet.</p>
   *
   */
  FleetStatus?: FleetStatus | string;

  /**
   *
   *         <p>The time when the fleet was last updated.</p>
   *
   */
  LastUpdatedTime?: Date;
}

export namespace FleetSummary {
  export function isa(o: any): o is FleetSummary {
    return _smithy.isa(o, "FleetSummary");
  }
}

export enum IdentityProviderType {
  SAML = "SAML",
}

/**
 *
 *         <p>The service is temporarily unavailable.</p>
 *
 */
export interface InternalServerErrorException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return _smithy.isa(o, "InternalServerErrorException");
  }
}

/**
 *
 *         <p>The request is not valid.</p>
 *
 */
export interface InvalidRequestException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

export interface ListDevicesRequest {
  __type?: "ListDevicesRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The maximum number of results to be included in the next page.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDevicesRequest {
  export function isa(o: any): o is ListDevicesRequest {
    return _smithy.isa(o, "ListDevicesRequest");
  }
}

export interface ListDevicesResponse extends $MetadataBearer {
  __type?: "ListDevicesResponse";
  /**
   *
   *         <p>Information about the devices.</p>
   *
   */
  Devices?: Array<DeviceSummary>;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDevicesResponse {
  export function isa(o: any): o is ListDevicesResponse {
    return _smithy.isa(o, "ListDevicesResponse");
  }
}

export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The maximum number of results to be included in the next page.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDomainsRequest {
  export function isa(o: any): o is ListDomainsRequest {
    return _smithy.isa(o, "ListDomainsRequest");
  }
}

export interface ListDomainsResponse extends $MetadataBearer {
  __type?: "ListDomainsResponse";
  /**
   *
   *         <p>Information about the domains.</p>
   *
   */
  Domains?: Array<DomainSummary>;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   *
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  export function isa(o: any): o is ListDomainsResponse {
    return _smithy.isa(o, "ListDomainsResponse");
  }
}

export interface ListFleetsRequest {
  __type?: "ListFleetsRequest";
  /**
   *
   *         <p>The maximum number of results to be included in the next page.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;
}

export namespace ListFleetsRequest {
  export function isa(o: any): o is ListFleetsRequest {
    return _smithy.isa(o, "ListFleetsRequest");
  }
}

export interface ListFleetsResponse extends $MetadataBearer {
  __type?: "ListFleetsResponse";
  /**
   *
   *         <p>The summary list of the fleets.</p>
   *
   */
  FleetSummaryList?: Array<FleetSummary>;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   *
   */
  NextToken?: string;
}

export namespace ListFleetsResponse {
  export function isa(o: any): o is ListFleetsResponse {
    return _smithy.isa(o, "ListFleetsResponse");
  }
}

export interface ListWebsiteAuthorizationProvidersRequest {
  __type?: "ListWebsiteAuthorizationProvidersRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The maximum number of results to be included in the next page.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *         <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;
}

export namespace ListWebsiteAuthorizationProvidersRequest {
  export function isa(o: any): o is ListWebsiteAuthorizationProvidersRequest {
    return _smithy.isa(o, "ListWebsiteAuthorizationProvidersRequest");
  }
}

export interface ListWebsiteAuthorizationProvidersResponse extends $MetadataBearer {
  __type?: "ListWebsiteAuthorizationProvidersResponse";
  /**
   *
   *         <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>The website authorization providers.</p>
   *
   */
  WebsiteAuthorizationProviders?: Array<WebsiteAuthorizationProviderSummary>;
}

export namespace ListWebsiteAuthorizationProvidersResponse {
  export function isa(o: any): o is ListWebsiteAuthorizationProvidersResponse {
    return _smithy.isa(o, "ListWebsiteAuthorizationProvidersResponse");
  }
}

export interface ListWebsiteCertificateAuthoritiesRequest {
  __type?: "ListWebsiteCertificateAuthoritiesRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The maximum number of results to be included in the next page.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   *
   */
  NextToken?: string;
}

export namespace ListWebsiteCertificateAuthoritiesRequest {
  export function isa(o: any): o is ListWebsiteCertificateAuthoritiesRequest {
    return _smithy.isa(o, "ListWebsiteCertificateAuthoritiesRequest");
  }
}

export interface ListWebsiteCertificateAuthoritiesResponse extends $MetadataBearer {
  __type?: "ListWebsiteCertificateAuthoritiesResponse";
  /**
   *
   *         <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Information about the
   *             certificates.</p>
   *
   */
  WebsiteCertificateAuthorities?: Array<WebsiteCaSummary>;
}

export namespace ListWebsiteCertificateAuthoritiesResponse {
  export function isa(o: any): o is ListWebsiteCertificateAuthoritiesResponse {
    return _smithy.isa(o, "ListWebsiteCertificateAuthoritiesResponse");
  }
}

/**
 *
 *         <p>The resource already exists.</p>
 *
 */
export interface ResourceAlreadyExistsException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return _smithy.isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 *
 *         <p>The requested resource was not found.</p>
 *
 */
export interface ResourceNotFoundException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

export interface RestoreDomainAccessRequest {
  __type?: "RestoreDomainAccessRequest";
  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace RestoreDomainAccessRequest {
  export function isa(o: any): o is RestoreDomainAccessRequest {
    return _smithy.isa(o, "RestoreDomainAccessRequest");
  }
}

export interface RestoreDomainAccessResponse extends $MetadataBearer {
  __type?: "RestoreDomainAccessResponse";
}

export namespace RestoreDomainAccessResponse {
  export function isa(o: any): o is RestoreDomainAccessResponse {
    return _smithy.isa(o, "RestoreDomainAccessResponse");
  }
}

export interface RevokeDomainAccessRequest {
  __type?: "RevokeDomainAccessRequest";
  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace RevokeDomainAccessRequest {
  export function isa(o: any): o is RevokeDomainAccessRequest {
    return _smithy.isa(o, "RevokeDomainAccessRequest");
  }
}

export interface RevokeDomainAccessResponse extends $MetadataBearer {
  __type?: "RevokeDomainAccessResponse";
}

export namespace RevokeDomainAccessResponse {
  export function isa(o: any): o is RevokeDomainAccessResponse {
    return _smithy.isa(o, "RevokeDomainAccessResponse");
  }
}

export interface SignOutUserRequest {
  __type?: "SignOutUserRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The name of the user.</p>
   *
   */
  Username: string | undefined;
}

export namespace SignOutUserRequest {
  export function isa(o: any): o is SignOutUserRequest {
    return _smithy.isa(o, "SignOutUserRequest");
  }
}

export interface SignOutUserResponse extends $MetadataBearer {
  __type?: "SignOutUserResponse";
}

export namespace SignOutUserResponse {
  export function isa(o: any): o is SignOutUserResponse {
    return _smithy.isa(o, "SignOutUserResponse");
  }
}

/**
 *
 *         <p>The number of requests exceeds the limit.</p>
 *
 */
export interface TooManyRequestsException extends _smithy.SmithyException, $MetadataBearer {
  __type: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

/**
 *
 *         <p>You are not authorized to perform this action.</p>
 *
 */
export interface UnauthorizedException extends _smithy.SmithyException, $MetadataBearer {
  __type: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return _smithy.isa(o, "UnauthorizedException");
  }
}

export interface UpdateAuditStreamConfigurationRequest {
  __type?: "UpdateAuditStreamConfigurationRequest";
  /**
   *
   *         <p>The ARN of the Amazon Kinesis data stream that receives the audit events.</p>
   *
   */
  AuditStreamArn?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace UpdateAuditStreamConfigurationRequest {
  export function isa(o: any): o is UpdateAuditStreamConfigurationRequest {
    return _smithy.isa(o, "UpdateAuditStreamConfigurationRequest");
  }
}

export interface UpdateAuditStreamConfigurationResponse extends $MetadataBearer {
  __type?: "UpdateAuditStreamConfigurationResponse";
}

export namespace UpdateAuditStreamConfigurationResponse {
  export function isa(o: any): o is UpdateAuditStreamConfigurationResponse {
    return _smithy.isa(o, "UpdateAuditStreamConfigurationResponse");
  }
}

export interface UpdateCompanyNetworkConfigurationRequest {
  __type?: "UpdateCompanyNetworkConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The security groups associated with access to the provided subnets.</p>
   *
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   *
   *         <p>The subnets used for X-ENI connections from Amazon WorkLink
   *             rendering
   *             containers.</p>
   *
   */
  SubnetIds: Array<string> | undefined;

  /**
   *
   *         <p>The VPC with connectivity to associated websites.</p>
   *
   */
  VpcId: string | undefined;
}

export namespace UpdateCompanyNetworkConfigurationRequest {
  export function isa(o: any): o is UpdateCompanyNetworkConfigurationRequest {
    return _smithy.isa(o, "UpdateCompanyNetworkConfigurationRequest");
  }
}

export interface UpdateCompanyNetworkConfigurationResponse extends $MetadataBearer {
  __type?: "UpdateCompanyNetworkConfigurationResponse";
}

export namespace UpdateCompanyNetworkConfigurationResponse {
  export function isa(o: any): o is UpdateCompanyNetworkConfigurationResponse {
    return _smithy.isa(o, "UpdateCompanyNetworkConfigurationResponse");
  }
}

export interface UpdateDevicePolicyConfigurationRequest {
  __type?: "UpdateDevicePolicyConfigurationRequest";
  /**
   *
   *         <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   *
   */
  DeviceCaCertificate?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace UpdateDevicePolicyConfigurationRequest {
  export function isa(o: any): o is UpdateDevicePolicyConfigurationRequest {
    return _smithy.isa(o, "UpdateDevicePolicyConfigurationRequest");
  }
}

export interface UpdateDevicePolicyConfigurationResponse extends $MetadataBearer {
  __type?: "UpdateDevicePolicyConfigurationResponse";
}

export namespace UpdateDevicePolicyConfigurationResponse {
  export function isa(o: any): o is UpdateDevicePolicyConfigurationResponse {
    return _smithy.isa(o, "UpdateDevicePolicyConfigurationResponse");
  }
}

export interface UpdateDomainMetadataRequest {
  __type?: "UpdateDomainMetadataRequest";
  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The name of the domain.</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;
}

export namespace UpdateDomainMetadataRequest {
  export function isa(o: any): o is UpdateDomainMetadataRequest {
    return _smithy.isa(o, "UpdateDomainMetadataRequest");
  }
}

export interface UpdateDomainMetadataResponse extends $MetadataBearer {
  __type?: "UpdateDomainMetadataResponse";
}

export namespace UpdateDomainMetadataResponse {
  export function isa(o: any): o is UpdateDomainMetadataResponse {
    return _smithy.isa(o, "UpdateDomainMetadataResponse");
  }
}

export interface UpdateFleetMetadataRequest {
  __type?: "UpdateFleetMetadataRequest";
  /**
   *
   *         <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   *
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace UpdateFleetMetadataRequest {
  export function isa(o: any): o is UpdateFleetMetadataRequest {
    return _smithy.isa(o, "UpdateFleetMetadataRequest");
  }
}

export interface UpdateFleetMetadataResponse extends $MetadataBearer {
  __type?: "UpdateFleetMetadataResponse";
}

export namespace UpdateFleetMetadataResponse {
  export function isa(o: any): o is UpdateFleetMetadataResponse {
    return _smithy.isa(o, "UpdateFleetMetadataResponse");
  }
}

export interface UpdateIdentityProviderConfigurationRequest {
  __type?: "UpdateIdentityProviderConfigurationRequest";
  /**
   *
   *         <p>The ARN of the fleet.</p>
   *
   */
  FleetArn: string | undefined;

  /**
   *
   *         <p>The SAML metadata document provided by the customer’s identity provider. The existing
   *             IdentityProviderSamlMetadata is unset if null is passed.</p>
   *
   */
  IdentityProviderSamlMetadata?: string;

  /**
   *
   *         <p>The type of identity provider.</p>
   *
   */
  IdentityProviderType: IdentityProviderType | string | undefined;
}

export namespace UpdateIdentityProviderConfigurationRequest {
  export function isa(o: any): o is UpdateIdentityProviderConfigurationRequest {
    return _smithy.isa(o, "UpdateIdentityProviderConfigurationRequest");
  }
}

export interface UpdateIdentityProviderConfigurationResponse extends $MetadataBearer {
  __type?: "UpdateIdentityProviderConfigurationResponse";
}

export namespace UpdateIdentityProviderConfigurationResponse {
  export function isa(o: any): o is UpdateIdentityProviderConfigurationResponse {
    return _smithy.isa(o, "UpdateIdentityProviderConfigurationResponse");
  }
}

/**
 *
 *         <p>The summary of the website authorization provider.</p>
 *
 */
export interface WebsiteAuthorizationProviderSummary {
  __type?: "WebsiteAuthorizationProviderSummary";
  /**
   *
   *         <p>A unique identifier for the authorization provider.</p>
   *
   */
  AuthorizationProviderId?: string;

  /**
   *
   *         <p>The authorization provider type.</p>
   *
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;

  /**
   *
   *         <p>The time of creation.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   *
   */
  DomainName?: string;
}

export namespace WebsiteAuthorizationProviderSummary {
  export function isa(o: any): o is WebsiteAuthorizationProviderSummary {
    return _smithy.isa(o, "WebsiteAuthorizationProviderSummary");
  }
}

/**
 *
 *         <p>The summary of the certificate authority (CA).</p>
 *
 */
export interface WebsiteCaSummary {
  __type?: "WebsiteCaSummary";
  /**
   *
   *         <p>The time when the CA was added.</p>
   *
   */
  CreatedTime?: Date;

  /**
   *
   *         <p>The name to display.</p>
   *
   */
  DisplayName?: string;

  /**
   *
   *         <p>A unique identifier for the CA.</p>
   *
   */
  WebsiteCaId?: string;
}

export namespace WebsiteCaSummary {
  export function isa(o: any): o is WebsiteCaSummary {
    return _smithy.isa(o, "WebsiteCaSummary");
  }
}
