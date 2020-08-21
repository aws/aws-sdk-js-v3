import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDomainRequest {
  __type?: "AssociateDomainRequest";
  /**
   * <p>The fully qualified domain name (FQDN).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

export namespace AssociateDomainRequest {
  export const filterSensitiveLog = (obj: AssociateDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateDomainRequest => __isa(o, "AssociateDomainRequest");
}

export interface AssociateDomainResponse {
  __type?: "AssociateDomainResponse";
}

export namespace AssociateDomainResponse {
  export const filterSensitiveLog = (obj: AssociateDomainResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateDomainResponse => __isa(o, "AssociateDomainResponse");
}

export interface AssociateWebsiteAuthorizationProviderRequest {
  __type?: "AssociateWebsiteAuthorizationProviderRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;
}

export namespace AssociateWebsiteAuthorizationProviderRequest {
  export const filterSensitiveLog = (obj: AssociateWebsiteAuthorizationProviderRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateWebsiteAuthorizationProviderRequest =>
    __isa(o, "AssociateWebsiteAuthorizationProviderRequest");
}

export interface AssociateWebsiteAuthorizationProviderResponse {
  __type?: "AssociateWebsiteAuthorizationProviderResponse";
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;
}

export namespace AssociateWebsiteAuthorizationProviderResponse {
  export const filterSensitiveLog = (obj: AssociateWebsiteAuthorizationProviderResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateWebsiteAuthorizationProviderResponse =>
    __isa(o, "AssociateWebsiteAuthorizationProviderResponse");
}

export interface AssociateWebsiteCertificateAuthorityRequest {
  __type?: "AssociateWebsiteCertificateAuthorityRequest";
  /**
   * <p>The root certificate of the CA.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;
}

export namespace AssociateWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: AssociateWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateWebsiteCertificateAuthorityRequest =>
    __isa(o, "AssociateWebsiteCertificateAuthorityRequest");
}

export interface AssociateWebsiteCertificateAuthorityResponse {
  __type?: "AssociateWebsiteCertificateAuthorityResponse";
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;
}

export namespace AssociateWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: AssociateWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateWebsiteCertificateAuthorityResponse =>
    __isa(o, "AssociateWebsiteCertificateAuthorityResponse");
}

export enum AuthorizationProviderType {
  SAML = "SAML",
}

export interface CreateFleetRequest {
  __type?: "CreateFleetRequest";
  /**
   * <p>A unique name for the fleet.</p>
   */
  FleetName: string | undefined;

  /**
   * <p> The tags to add to the resource. A tag is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest
   *             AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;
}

export namespace CreateFleetRequest {
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFleetRequest => __isa(o, "CreateFleetRequest");
}

export interface CreateFleetResponse {
  __type?: "CreateFleetResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

export namespace CreateFleetResponse {
  export const filterSensitiveLog = (obj: CreateFleetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFleetResponse => __isa(o, "CreateFleetResponse");
}

export interface DeleteFleetRequest {
  __type?: "DeleteFleetRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DeleteFleetRequest {
  export const filterSensitiveLog = (obj: DeleteFleetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFleetRequest => __isa(o, "DeleteFleetRequest");
}

export interface DeleteFleetResponse {
  __type?: "DeleteFleetResponse";
}

export namespace DeleteFleetResponse {
  export const filterSensitiveLog = (obj: DeleteFleetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFleetResponse => __isa(o, "DeleteFleetResponse");
}

export interface DescribeAuditStreamConfigurationRequest {
  __type?: "DescribeAuditStreamConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeAuditStreamConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeAuditStreamConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAuditStreamConfigurationRequest =>
    __isa(o, "DescribeAuditStreamConfigurationRequest");
}

export interface DescribeAuditStreamConfigurationResponse {
  __type?: "DescribeAuditStreamConfigurationResponse";
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;
}

export namespace DescribeAuditStreamConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeAuditStreamConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAuditStreamConfigurationResponse =>
    __isa(o, "DescribeAuditStreamConfigurationResponse");
}

export interface DescribeCompanyNetworkConfigurationRequest {
  __type?: "DescribeCompanyNetworkConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeCompanyNetworkConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeCompanyNetworkConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCompanyNetworkConfigurationRequest =>
    __isa(o, "DescribeCompanyNetworkConfigurationRequest");
}

export interface DescribeCompanyNetworkConfigurationResponse {
  __type?: "DescribeCompanyNetworkConfigurationResponse";
  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId?: string;

  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace DescribeCompanyNetworkConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeCompanyNetworkConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCompanyNetworkConfigurationResponse =>
    __isa(o, "DescribeCompanyNetworkConfigurationResponse");
}

export interface DescribeDevicePolicyConfigurationRequest {
  __type?: "DescribeDevicePolicyConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeDevicePolicyConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeDevicePolicyConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDevicePolicyConfigurationRequest =>
    __isa(o, "DescribeDevicePolicyConfigurationRequest");
}

export interface DescribeDevicePolicyConfigurationResponse {
  __type?: "DescribeDevicePolicyConfigurationResponse";
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;
}

export namespace DescribeDevicePolicyConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeDevicePolicyConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDevicePolicyConfigurationResponse =>
    __isa(o, "DescribeDevicePolicyConfigurationResponse");
}

export interface DescribeDeviceRequest {
  __type?: "DescribeDeviceRequest";
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
  export const isa = (o: any): o is DescribeDeviceRequest => __isa(o, "DescribeDeviceRequest");
}

export interface DescribeDeviceResponse {
  __type?: "DescribeDeviceResponse";
  /**
   * <p>The operating system patch level of the device.</p>
   */
  PatchLevel?: string;

  /**
   * <p>The user name associated with the device.</p>
   */
  Username?: string;

  /**
   * <p>The operating system of the device.</p>
   */
  OperatingSystem?: string;

  /**
   * <p>The current state of the device.</p>
   */
  Status?: DeviceStatus | string;

  /**
   * <p>The date that the device first signed in to Amazon WorkLink.</p>
   */
  FirstAccessedTime?: Date;

  /**
   * <p>The date that the device last accessed Amazon WorkLink.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The model of the device.</p>
   */
  Model?: string;

  /**
   * <p>The manufacturer of the device.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The operating system version of the device.</p>
   */
  OperatingSystemVersion?: string;
}

export namespace DescribeDeviceResponse {
  export const filterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDeviceResponse => __isa(o, "DescribeDeviceResponse");
}

export interface DescribeDomainRequest {
  __type?: "DescribeDomainRequest";
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
  export const isa = (o: any): o is DescribeDomainRequest => __isa(o, "DescribeDomainRequest");
}

export interface DescribeDomainResponse {
  __type?: "DescribeDomainResponse";
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

  /**
   * <p>The time that the domain was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn?: string;
}

export namespace DescribeDomainResponse {
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDomainResponse => __isa(o, "DescribeDomainResponse");
}

export interface DescribeFleetMetadataRequest {
  __type?: "DescribeFleetMetadataRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeFleetMetadataRequest {
  export const filterSensitiveLog = (obj: DescribeFleetMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFleetMetadataRequest => __isa(o, "DescribeFleetMetadataRequest");
}

export interface DescribeFleetMetadataResponse {
  __type?: "DescribeFleetMetadataResponse";
  /**
   * <p>The time that the fleet was created.</p>
   */
  CreatedTime?: Date;

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

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;
}

export namespace DescribeFleetMetadataResponse {
  export const filterSensitiveLog = (obj: DescribeFleetMetadataResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFleetMetadataResponse => __isa(o, "DescribeFleetMetadataResponse");
}

export interface DescribeIdentityProviderConfigurationRequest {
  __type?: "DescribeIdentityProviderConfigurationRequest";
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeIdentityProviderConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeIdentityProviderConfigurationRequest =>
    __isa(o, "DescribeIdentityProviderConfigurationRequest");
}

export interface DescribeIdentityProviderConfigurationResponse {
  __type?: "DescribeIdentityProviderConfigurationResponse";
  /**
   * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   */
  ServiceProviderSamlMetadata?: string;

  /**
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType?: IdentityProviderType | string;

  /**
   * <p>The SAML metadata document provided by the user’s identity provider.</p>
   */
  IdentityProviderSamlMetadata?: string;
}

export namespace DescribeIdentityProviderConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeIdentityProviderConfigurationResponse =>
    __isa(o, "DescribeIdentityProviderConfigurationResponse");
}

export interface DescribeWebsiteCertificateAuthorityRequest {
  __type?: "DescribeWebsiteCertificateAuthorityRequest";
  /**
   * <p>A unique identifier for the certificate authority.</p>
   */
  WebsiteCaId: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DescribeWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DescribeWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeWebsiteCertificateAuthorityRequest =>
    __isa(o, "DescribeWebsiteCertificateAuthorityRequest");
}

export interface DescribeWebsiteCertificateAuthorityResponse {
  __type?: "DescribeWebsiteCertificateAuthorityResponse";
  /**
   * <p>The time that the certificate authority was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The root certificate of the certificate authority.</p>
   */
  Certificate?: string;

  /**
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;
}

export namespace DescribeWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: DescribeWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeWebsiteCertificateAuthorityResponse =>
    __isa(o, "DescribeWebsiteCertificateAuthorityResponse");
}

export enum DeviceStatus {
  ACTIVE = "ACTIVE",
  SIGNED_OUT = "SIGNED_OUT",
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
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceSummary => __isa(o, "DeviceSummary");
}

export interface DisassociateDomainRequest {
  __type?: "DisassociateDomainRequest";
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
  export const isa = (o: any): o is DisassociateDomainRequest => __isa(o, "DisassociateDomainRequest");
}

export interface DisassociateDomainResponse {
  __type?: "DisassociateDomainResponse";
}

export namespace DisassociateDomainResponse {
  export const filterSensitiveLog = (obj: DisassociateDomainResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateDomainResponse => __isa(o, "DisassociateDomainResponse");
}

export interface DisassociateWebsiteAuthorizationProviderRequest {
  __type?: "DisassociateWebsiteAuthorizationProviderRequest";
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
  export const isa = (o: any): o is DisassociateWebsiteAuthorizationProviderRequest =>
    __isa(o, "DisassociateWebsiteAuthorizationProviderRequest");
}

export interface DisassociateWebsiteAuthorizationProviderResponse {
  __type?: "DisassociateWebsiteAuthorizationProviderResponse";
}

export namespace DisassociateWebsiteAuthorizationProviderResponse {
  export const filterSensitiveLog = (obj: DisassociateWebsiteAuthorizationProviderResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateWebsiteAuthorizationProviderResponse =>
    __isa(o, "DisassociateWebsiteAuthorizationProviderResponse");
}

export interface DisassociateWebsiteCertificateAuthorityRequest {
  __type?: "DisassociateWebsiteCertificateAuthorityRequest";
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace DisassociateWebsiteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DisassociateWebsiteCertificateAuthorityRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateWebsiteCertificateAuthorityRequest =>
    __isa(o, "DisassociateWebsiteCertificateAuthorityRequest");
}

export interface DisassociateWebsiteCertificateAuthorityResponse {
  __type?: "DisassociateWebsiteCertificateAuthorityResponse";
}

export namespace DisassociateWebsiteCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: DisassociateWebsiteCertificateAuthorityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateWebsiteCertificateAuthorityResponse =>
    __isa(o, "DisassociateWebsiteCertificateAuthorityResponse");
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
 * <p>The summary of the domain.</p>
 */
export interface DomainSummary {
  __type?: "DomainSummary";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The status of the domain.</p>
   */
  DomainStatus: DomainStatus | string | undefined;

  /**
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date | undefined;
}

export namespace DomainSummary {
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainSummary => __isa(o, "DomainSummary");
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
 * <p>The summary of the fleet.</p>
 */
export interface FleetSummary {
  __type?: "FleetSummary";
  /**
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The name of the fleet to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the fleet.</p>
   */
  FleetStatus?: FleetStatus | string;

  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  FleetArn?: string;
}

export namespace FleetSummary {
  export const filterSensitiveLog = (obj: FleetSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FleetSummary => __isa(o, "FleetSummary");
}

export enum IdentityProviderType {
  SAML = "SAML",
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
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
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
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

export interface ListDevicesRequest {
  __type?: "ListDevicesRequest";
  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace ListDevicesRequest {
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDevicesRequest => __isa(o, "ListDevicesRequest");
}

export interface ListDevicesResponse {
  __type?: "ListDevicesResponse";
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the devices.</p>
   */
  Devices?: DeviceSummary[];
}

export namespace ListDevicesResponse {
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDevicesResponse => __isa(o, "ListDevicesResponse");
}

export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;
}

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainsRequest => __isa(o, "ListDomainsRequest");
}

export interface ListDomainsResponse {
  __type?: "ListDomainsResponse";
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. If
   *             there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the domains.</p>
   */
  Domains?: DomainSummary[];
}

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainsResponse => __isa(o, "ListDomainsResponse");
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
  export const filterSensitiveLog = (obj: ListFleetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFleetsRequest => __isa(o, "ListFleetsRequest");
}

export interface ListFleetsResponse {
  __type?: "ListFleetsResponse";
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
  export const isa = (o: any): o is ListFleetsResponse => __isa(o, "ListFleetsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags attached to the resource. A tag is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
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
  export const filterSensitiveLog = (obj: ListWebsiteAuthorizationProvidersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWebsiteAuthorizationProvidersRequest =>
    __isa(o, "ListWebsiteAuthorizationProvidersRequest");
}

export interface ListWebsiteAuthorizationProvidersResponse {
  __type?: "ListWebsiteAuthorizationProvidersResponse";
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
  export const isa = (o: any): o is ListWebsiteAuthorizationProvidersResponse =>
    __isa(o, "ListWebsiteAuthorizationProvidersResponse");
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
  export const filterSensitiveLog = (obj: ListWebsiteCertificateAuthoritiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWebsiteCertificateAuthoritiesRequest =>
    __isa(o, "ListWebsiteCertificateAuthoritiesRequest");
}

export interface ListWebsiteCertificateAuthoritiesResponse {
  __type?: "ListWebsiteCertificateAuthoritiesResponse";
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
  export const isa = (o: any): o is ListWebsiteCertificateAuthoritiesResponse =>
    __isa(o, "ListWebsiteCertificateAuthoritiesResponse");
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
  export const isa = (o: any): o is ResourceAlreadyExistsException => __isa(o, "ResourceAlreadyExistsException");
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
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
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
  export const filterSensitiveLog = (obj: RestoreDomainAccessRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RestoreDomainAccessRequest => __isa(o, "RestoreDomainAccessRequest");
}

export interface RestoreDomainAccessResponse {
  __type?: "RestoreDomainAccessResponse";
}

export namespace RestoreDomainAccessResponse {
  export const filterSensitiveLog = (obj: RestoreDomainAccessResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RestoreDomainAccessResponse => __isa(o, "RestoreDomainAccessResponse");
}

export interface RevokeDomainAccessRequest {
  __type?: "RevokeDomainAccessRequest";
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
  export const isa = (o: any): o is RevokeDomainAccessRequest => __isa(o, "RevokeDomainAccessRequest");
}

export interface RevokeDomainAccessResponse {
  __type?: "RevokeDomainAccessResponse";
}

export namespace RevokeDomainAccessResponse {
  export const filterSensitiveLog = (obj: RevokeDomainAccessResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RevokeDomainAccessResponse => __isa(o, "RevokeDomainAccessResponse");
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
  export const filterSensitiveLog = (obj: SignOutUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SignOutUserRequest => __isa(o, "SignOutUserRequest");
}

export interface SignOutUserResponse {
  __type?: "SignOutUserResponse";
}

export namespace SignOutUserResponse {
  export const filterSensitiveLog = (obj: SignOutUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SignOutUserResponse => __isa(o, "SignOutUserResponse");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
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
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
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
  export const isa = (o: any): o is UnauthorizedException => __isa(o, "UnauthorizedException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateAuditStreamConfigurationRequest {
  __type?: "UpdateAuditStreamConfigurationRequest";
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
  export const isa = (o: any): o is UpdateAuditStreamConfigurationRequest =>
    __isa(o, "UpdateAuditStreamConfigurationRequest");
}

export interface UpdateAuditStreamConfigurationResponse {
  __type?: "UpdateAuditStreamConfigurationResponse";
}

export namespace UpdateAuditStreamConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateAuditStreamConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAuditStreamConfigurationResponse =>
    __isa(o, "UpdateAuditStreamConfigurationResponse");
}

export interface UpdateCompanyNetworkConfigurationRequest {
  __type?: "UpdateCompanyNetworkConfigurationRequest";
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
  export const isa = (o: any): o is UpdateCompanyNetworkConfigurationRequest =>
    __isa(o, "UpdateCompanyNetworkConfigurationRequest");
}

export interface UpdateCompanyNetworkConfigurationResponse {
  __type?: "UpdateCompanyNetworkConfigurationResponse";
}

export namespace UpdateCompanyNetworkConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateCompanyNetworkConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCompanyNetworkConfigurationResponse =>
    __isa(o, "UpdateCompanyNetworkConfigurationResponse");
}

export interface UpdateDevicePolicyConfigurationRequest {
  __type?: "UpdateDevicePolicyConfigurationRequest";
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
  export const isa = (o: any): o is UpdateDevicePolicyConfigurationRequest =>
    __isa(o, "UpdateDevicePolicyConfigurationRequest");
}

export interface UpdateDevicePolicyConfigurationResponse {
  __type?: "UpdateDevicePolicyConfigurationResponse";
}

export namespace UpdateDevicePolicyConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateDevicePolicyConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDevicePolicyConfigurationResponse =>
    __isa(o, "UpdateDevicePolicyConfigurationResponse");
}

export interface UpdateDomainMetadataRequest {
  __type?: "UpdateDomainMetadataRequest";
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string | undefined;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

export namespace UpdateDomainMetadataRequest {
  export const filterSensitiveLog = (obj: UpdateDomainMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainMetadataRequest => __isa(o, "UpdateDomainMetadataRequest");
}

export interface UpdateDomainMetadataResponse {
  __type?: "UpdateDomainMetadataResponse";
}

export namespace UpdateDomainMetadataResponse {
  export const filterSensitiveLog = (obj: UpdateDomainMetadataResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainMetadataResponse => __isa(o, "UpdateDomainMetadataResponse");
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
  export const filterSensitiveLog = (obj: UpdateFleetMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFleetMetadataRequest => __isa(o, "UpdateFleetMetadataRequest");
}

export interface UpdateFleetMetadataResponse {
  __type?: "UpdateFleetMetadataResponse";
}

export namespace UpdateFleetMetadataResponse {
  export const filterSensitiveLog = (obj: UpdateFleetMetadataResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFleetMetadataResponse => __isa(o, "UpdateFleetMetadataResponse");
}

export interface UpdateIdentityProviderConfigurationRequest {
  __type?: "UpdateIdentityProviderConfigurationRequest";
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
  export const isa = (o: any): o is UpdateIdentityProviderConfigurationRequest =>
    __isa(o, "UpdateIdentityProviderConfigurationRequest");
}

export interface UpdateIdentityProviderConfigurationResponse {
  __type?: "UpdateIdentityProviderConfigurationResponse";
}

export namespace UpdateIdentityProviderConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateIdentityProviderConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIdentityProviderConfigurationResponse =>
    __isa(o, "UpdateIdentityProviderConfigurationResponse");
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
   * <p>The domain name of the authorization provider. This applies only to SAML-based
   *             authorization providers.</p>
   */
  DomainName?: string;

  /**
   * <p>The time of creation.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The authorization provider type.</p>
   */
  AuthorizationProviderType: AuthorizationProviderType | string | undefined;
}

export namespace WebsiteAuthorizationProviderSummary {
  export const filterSensitiveLog = (obj: WebsiteAuthorizationProviderSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WebsiteAuthorizationProviderSummary =>
    __isa(o, "WebsiteAuthorizationProviderSummary");
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
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

export namespace WebsiteCaSummary {
  export const filterSensitiveLog = (obj: WebsiteCaSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WebsiteCaSummary => __isa(o, "WebsiteCaSummary");
}
