import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

export interface AssociateCustomerGatewayRequest {
  __type?: "AssociateCustomerGatewayRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateCustomerGatewayRequest {
  export const isa = (o: any): o is AssociateCustomerGatewayRequest =>
    __isa(o, "AssociateCustomerGatewayRequest");
}

export interface AssociateCustomerGatewayResponse {
  __type?: "AssociateCustomerGatewayResponse";
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace AssociateCustomerGatewayResponse {
  export const isa = (o: any): o is AssociateCustomerGatewayResponse =>
    __isa(o, "AssociateCustomerGatewayResponse");
}

export interface AssociateLinkRequest {
  __type?: "AssociateLinkRequest";
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace AssociateLinkRequest {
  export const isa = (o: any): o is AssociateLinkRequest =>
    __isa(o, "AssociateLinkRequest");
}

export interface AssociateLinkResponse {
  __type?: "AssociateLinkResponse";
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace AssociateLinkResponse {
  export const isa = (o: any): o is AssociateLinkResponse =>
    __isa(o, "AssociateLinkResponse");
}

/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  __type?: "Bandwidth";
  /**
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;

  /**
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;
}

export namespace Bandwidth {
  export const isa = (o: any): o is Bandwidth => __isa(o, "Bandwidth");
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

export interface CreateDeviceRequest {
  __type?: "CreateDeviceRequest";
  /**
   * <p>A description of the device.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * <p>The model of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;
}

export namespace CreateDeviceRequest {
  export const isa = (o: any): o is CreateDeviceRequest =>
    __isa(o, "CreateDeviceRequest");
}

export interface CreateDeviceResponse {
  __type?: "CreateDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace CreateDeviceResponse {
  export const isa = (o: any): o is CreateDeviceResponse =>
    __isa(o, "CreateDeviceResponse");
}

export interface CreateGlobalNetworkRequest {
  __type?: "CreateGlobalNetworkRequest";
  /**
   * <p>A description of the global network.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateGlobalNetworkRequest {
  export const isa = (o: any): o is CreateGlobalNetworkRequest =>
    __isa(o, "CreateGlobalNetworkRequest");
}

export interface CreateGlobalNetworkResponse {
  __type?: "CreateGlobalNetworkResponse";
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace CreateGlobalNetworkResponse {
  export const isa = (o: any): o is CreateGlobalNetworkResponse =>
    __isa(o, "CreateGlobalNetworkResponse");
}

export interface CreateLinkRequest {
  __type?: "CreateLinkRequest";
  /**
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Cannot include the following characters: | \ ^</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Cannot include the following characters: | \ ^</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;
}

export namespace CreateLinkRequest {
  export const isa = (o: any): o is CreateLinkRequest =>
    __isa(o, "CreateLinkRequest");
}

export interface CreateLinkResponse {
  __type?: "CreateLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace CreateLinkResponse {
  export const isa = (o: any): o is CreateLinkResponse =>
    __isa(o, "CreateLinkResponse");
}

export interface CreateSiteRequest {
  __type?: "CreateSiteRequest";
  /**
   * <p>A description of your site.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateSiteRequest {
  export const isa = (o: any): o is CreateSiteRequest =>
    __isa(o, "CreateSiteRequest");
}

export interface CreateSiteResponse {
  __type?: "CreateSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteResponse {
  export const isa = (o: any): o is CreateSiteResponse =>
    __isa(o, "CreateSiteResponse");
}

/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  __type?: "CustomerGatewayAssociation";
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState | string;
}

export namespace CustomerGatewayAssociation {
  export const isa = (o: any): o is CustomerGatewayAssociation =>
    __isa(o, "CustomerGatewayAssociation");
}

export enum CustomerGatewayAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING"
}

export interface DeleteDeviceRequest {
  __type?: "DeleteDeviceRequest";
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteDeviceRequest {
  export const isa = (o: any): o is DeleteDeviceRequest =>
    __isa(o, "DeleteDeviceRequest");
}

export interface DeleteDeviceResponse {
  __type?: "DeleteDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace DeleteDeviceResponse {
  export const isa = (o: any): o is DeleteDeviceResponse =>
    __isa(o, "DeleteDeviceResponse");
}

export interface DeleteGlobalNetworkRequest {
  __type?: "DeleteGlobalNetworkRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteGlobalNetworkRequest {
  export const isa = (o: any): o is DeleteGlobalNetworkRequest =>
    __isa(o, "DeleteGlobalNetworkRequest");
}

export interface DeleteGlobalNetworkResponse {
  __type?: "DeleteGlobalNetworkResponse";
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace DeleteGlobalNetworkResponse {
  export const isa = (o: any): o is DeleteGlobalNetworkResponse =>
    __isa(o, "DeleteGlobalNetworkResponse");
}

export interface DeleteLinkRequest {
  __type?: "DeleteLinkRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DeleteLinkRequest {
  export const isa = (o: any): o is DeleteLinkRequest =>
    __isa(o, "DeleteLinkRequest");
}

export interface DeleteLinkResponse {
  __type?: "DeleteLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace DeleteLinkResponse {
  export const isa = (o: any): o is DeleteLinkResponse =>
    __isa(o, "DeleteLinkResponse");
}

export interface DeleteSiteRequest {
  __type?: "DeleteSiteRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteRequest {
  export const isa = (o: any): o is DeleteSiteRequest =>
    __isa(o, "DeleteSiteRequest");
}

export interface DeleteSiteResponse {
  __type?: "DeleteSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace DeleteSiteResponse {
  export const isa = (o: any): o is DeleteSiteResponse =>
    __isa(o, "DeleteSiteResponse");
}

export interface DeregisterTransitGatewayRequest {
  __type?: "DeregisterTransitGatewayRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace DeregisterTransitGatewayRequest {
  export const isa = (o: any): o is DeregisterTransitGatewayRequest =>
    __isa(o, "DeregisterTransitGatewayRequest");
}

export interface DeregisterTransitGatewayResponse {
  __type?: "DeregisterTransitGatewayResponse";
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace DeregisterTransitGatewayResponse {
  export const isa = (o: any): o is DeregisterTransitGatewayResponse =>
    __isa(o, "DeregisterTransitGatewayResponse");
}

export interface DescribeGlobalNetworksRequest {
  __type?: "DescribeGlobalNetworksRequest";
  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: Array<string>;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksRequest {
  export const isa = (o: any): o is DescribeGlobalNetworksRequest =>
    __isa(o, "DescribeGlobalNetworksRequest");
}

export interface DescribeGlobalNetworksResponse {
  __type?: "DescribeGlobalNetworksResponse";
  /**
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: Array<GlobalNetwork>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksResponse {
  export const isa = (o: any): o is DescribeGlobalNetworksResponse =>
    __isa(o, "DescribeGlobalNetworksResponse");
}

/**
 * <p>Describes a device.</p>
 */
export interface Device {
  __type?: "Device";
  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * <p>The device state.</p>
   */
  State?: DeviceState | string;

  /**
   * <p>The tags for the device.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * <p>The device vendor.</p>
   */
  Vendor?: string;
}

export namespace Device {
  export const isa = (o: any): o is Device => __isa(o, "Device");
}

export enum DeviceState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING"
}

export interface DisassociateCustomerGatewayRequest {
  __type?: "DisassociateCustomerGatewayRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DisassociateCustomerGatewayRequest {
  export const isa = (o: any): o is DisassociateCustomerGatewayRequest =>
    __isa(o, "DisassociateCustomerGatewayRequest");
}

export interface DisassociateCustomerGatewayResponse {
  __type?: "DisassociateCustomerGatewayResponse";
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace DisassociateCustomerGatewayResponse {
  export const isa = (o: any): o is DisassociateCustomerGatewayResponse =>
    __isa(o, "DisassociateCustomerGatewayResponse");
}

export interface DisassociateLinkRequest {
  __type?: "DisassociateLinkRequest";
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DisassociateLinkRequest {
  export const isa = (o: any): o is DisassociateLinkRequest =>
    __isa(o, "DisassociateLinkRequest");
}

export interface DisassociateLinkResponse {
  __type?: "DisassociateLinkResponse";
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace DisassociateLinkResponse {
  export const isa = (o: any): o is DisassociateLinkResponse =>
    __isa(o, "DisassociateLinkResponse");
}

export interface GetCustomerGatewayAssociationsRequest {
  __type?: "GetCustomerGatewayAssociationsRequest";
  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.</p>
   */
  CustomerGatewayArns?: Array<string>;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsRequest {
  export const isa = (o: any): o is GetCustomerGatewayAssociationsRequest =>
    __isa(o, "GetCustomerGatewayAssociationsRequest");
}

export interface GetCustomerGatewayAssociationsResponse {
  __type?: "GetCustomerGatewayAssociationsResponse";
  /**
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsResponse {
  export const isa = (o: any): o is GetCustomerGatewayAssociationsResponse =>
    __isa(o, "GetCustomerGatewayAssociationsResponse");
}

export interface GetDevicesRequest {
  __type?: "GetDevicesRequest";
  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: Array<string>;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace GetDevicesRequest {
  export const isa = (o: any): o is GetDevicesRequest =>
    __isa(o, "GetDevicesRequest");
}

export interface GetDevicesResponse {
  __type?: "GetDevicesResponse";
  /**
   * <p>The devices.</p>
   */
  Devices?: Array<Device>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesResponse {
  export const isa = (o: any): o is GetDevicesResponse =>
    __isa(o, "GetDevicesResponse");
}

export interface GetLinkAssociationsRequest {
  __type?: "GetLinkAssociationsRequest";
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsRequest {
  export const isa = (o: any): o is GetLinkAssociationsRequest =>
    __isa(o, "GetLinkAssociationsRequest");
}

export interface GetLinkAssociationsResponse {
  __type?: "GetLinkAssociationsResponse";
  /**
   * <p>The link associations.</p>
   */
  LinkAssociations?: Array<LinkAssociation>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsResponse {
  export const isa = (o: any): o is GetLinkAssociationsResponse =>
    __isa(o, "GetLinkAssociationsResponse");
}

export interface GetLinksRequest {
  __type?: "GetLinksRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: Array<string>;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   */
  Type?: string;
}

export namespace GetLinksRequest {
  export const isa = (o: any): o is GetLinksRequest =>
    __isa(o, "GetLinksRequest");
}

export interface GetLinksResponse {
  __type?: "GetLinksResponse";
  /**
   * <p>The links.</p>
   */
  Links?: Array<Link>;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinksResponse {
  export const isa = (o: any): o is GetLinksResponse =>
    __isa(o, "GetLinksResponse");
}

export interface GetSitesRequest {
  __type?: "GetSitesRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: Array<string>;
}

export namespace GetSitesRequest {
  export const isa = (o: any): o is GetSitesRequest =>
    __isa(o, "GetSitesRequest");
}

export interface GetSitesResponse {
  __type?: "GetSitesResponse";
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The sites.</p>
   */
  Sites?: Array<Site>;
}

export namespace GetSitesResponse {
  export const isa = (o: any): o is GetSitesResponse =>
    __isa(o, "GetSitesResponse");
}

export interface GetTransitGatewayRegistrationsRequest {
  __type?: "GetTransitGatewayRegistrationsRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: Array<string>;
}

export namespace GetTransitGatewayRegistrationsRequest {
  export const isa = (o: any): o is GetTransitGatewayRegistrationsRequest =>
    __isa(o, "GetTransitGatewayRegistrationsRequest");
}

export interface GetTransitGatewayRegistrationsResponse {
  __type?: "GetTransitGatewayRegistrationsResponse";
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
}

export namespace GetTransitGatewayRegistrationsResponse {
  export const isa = (o: any): o is GetTransitGatewayRegistrationsResponse =>
    __isa(o, "GetTransitGatewayRegistrationsResponse");
}

/**
 * <p>Describes a global network.</p>
 */
export interface GlobalNetwork {
  __type?: "GlobalNetwork";
  /**
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState | string;

  /**
   * <p>The tags for the global network.</p>
   */
  Tags?: Array<Tag>;
}

export namespace GlobalNetwork {
  export const isa = (o: any): o is GlobalNetwork => __isa(o, "GlobalNetwork");
}

export enum GlobalNetworkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING"
}

/**
 * <p>The request has failed due to an internal error.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
}

export namespace InternalServerException {
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

/**
 * <p>Describes a link.</p>
 */
export interface Link {
  __type?: "Link";
  /**
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The state of the link.</p>
   */
  State?: LinkState | string;

  /**
   * <p>The tags for the link.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The type of the link.</p>
   */
  Type?: string;
}

export namespace Link {
  export const isa = (o: any): o is Link => __isa(o, "Link");
}

/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  __type?: "LinkAssociation";
  /**
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState | string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace LinkAssociation {
  export const isa = (o: any): o is LinkAssociation =>
    __isa(o, "LinkAssociation");
}

export enum LinkAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING"
}

export enum LinkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING"
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tags.</p>
   */
  TagList?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Describes a location.</p>
 */
export interface Location {
  __type?: "Location";
  /**
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * <p>The latitude.</p>
   */
  Latitude?: string;

  /**
   * <p>The longitude.</p>
   */
  Longitude?: string;
}

export namespace Location {
  export const isa = (o: any): o is Location => __isa(o, "Location");
}

export interface RegisterTransitGatewayRequest {
  __type?: "RegisterTransitGatewayRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace RegisterTransitGatewayRequest {
  export const isa = (o: any): o is RegisterTransitGatewayRequest =>
    __isa(o, "RegisterTransitGatewayRequest");
}

export interface RegisterTransitGatewayResponse {
  __type?: "RegisterTransitGatewayResponse";
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace RegisterTransitGatewayResponse {
  export const isa = (o: any): o is RegisterTransitGatewayResponse =>
    __isa(o, "RegisterTransitGatewayResponse");
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The service code.</p>
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const isa = (o: any): o is ServiceQuotaExceededException =>
    __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>Describes a site.</p>
 */
export interface Site {
  __type?: "Site";
  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The state of the site.</p>
   */
  State?: SiteState | string;

  /**
   * <p>The tags for the site.</p>
   */
  Tags?: Array<Tag>;
}

export namespace Site {
  export const isa = (o: any): o is Site => __isa(o, "Site");
}

export enum SiteState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING"
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag key.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  __type?: "TransitGatewayRegistration";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;
}

export namespace TransitGatewayRegistration {
  export const isa = (o: any): o is TransitGatewayRegistration =>
    __isa(o, "TransitGatewayRegistration");
}

export enum TransitGatewayRegistrationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  failed = "FAILED",
  pending = "PENDING"
}

/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  __type?: "TransitGatewayRegistrationStateReason";
  /**
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState | string;

  /**
   * <p>The message for the state reason.</p>
   */
  Message?: string;
}

export namespace TransitGatewayRegistrationStateReason {
  export const isa = (o: any): o is TransitGatewayRegistrationStateReason =>
    __isa(o, "TransitGatewayRegistrationStateReason");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateDeviceRequest {
  __type?: "UpdateDeviceRequest";
  /**
   * <p>A description of the device.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * <p>The model of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;
}

export namespace UpdateDeviceRequest {
  export const isa = (o: any): o is UpdateDeviceRequest =>
    __isa(o, "UpdateDeviceRequest");
}

export interface UpdateDeviceResponse {
  __type?: "UpdateDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace UpdateDeviceResponse {
  export const isa = (o: any): o is UpdateDeviceResponse =>
    __isa(o, "UpdateDeviceResponse");
}

export interface UpdateGlobalNetworkRequest {
  __type?: "UpdateGlobalNetworkRequest";
  /**
   * <p>A description of the global network.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace UpdateGlobalNetworkRequest {
  export const isa = (o: any): o is UpdateGlobalNetworkRequest =>
    __isa(o, "UpdateGlobalNetworkRequest");
}

export interface UpdateGlobalNetworkResponse {
  __type?: "UpdateGlobalNetworkResponse";
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace UpdateGlobalNetworkResponse {
  export const isa = (o: any): o is UpdateGlobalNetworkResponse =>
    __isa(o, "UpdateGlobalNetworkResponse");
}

export interface UpdateLinkRequest {
  __type?: "UpdateLinkRequest";
  /**
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>A description of the link.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;
}

export namespace UpdateLinkRequest {
  export const isa = (o: any): o is UpdateLinkRequest =>
    __isa(o, "UpdateLinkRequest");
}

export interface UpdateLinkResponse {
  __type?: "UpdateLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace UpdateLinkResponse {
  export const isa = (o: any): o is UpdateLinkResponse =>
    __isa(o, "UpdateLinkResponse");
}

export interface UpdateSiteRequest {
  __type?: "UpdateSiteRequest";
  /**
   * <p>A description of your site.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The site location:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;
}

export namespace UpdateSiteRequest {
  export const isa = (o: any): o is UpdateSiteRequest =>
    __isa(o, "UpdateSiteRequest");
}

export interface UpdateSiteResponse {
  __type?: "UpdateSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteResponse {
  export const isa = (o: any): o is UpdateSiteResponse =>
    __isa(o, "UpdateSiteResponse");
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: Array<ValidationExceptionField>;

  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason | string;
}

export namespace ValidationException {
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  __type?: "ValidationExceptionField";
  /**
   * <p>The message for the field.</p>
   */
  Message: string | undefined;

  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;
}

export namespace ValidationExceptionField {
  export const isa = (o: any): o is ValidationExceptionField =>
    __isa(o, "ValidationExceptionField");
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation"
}
