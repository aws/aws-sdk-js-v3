import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
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
  export function isa(o: any): o is AssociateCustomerGatewayRequest {
    return _smithy.isa(o, "AssociateCustomerGatewayRequest");
  }
}

export interface AssociateCustomerGatewayResponse extends $MetadataBearer {
  __type?: "AssociateCustomerGatewayResponse";
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace AssociateCustomerGatewayResponse {
  export function isa(o: any): o is AssociateCustomerGatewayResponse {
    return _smithy.isa(o, "AssociateCustomerGatewayResponse");
  }
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
  export function isa(o: any): o is AssociateLinkRequest {
    return _smithy.isa(o, "AssociateLinkRequest");
  }
}

export interface AssociateLinkResponse extends $MetadataBearer {
  __type?: "AssociateLinkResponse";
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace AssociateLinkResponse {
  export function isa(o: any): o is AssociateLinkResponse {
    return _smithy.isa(o, "AssociateLinkResponse");
  }
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
  export function isa(o: any): o is Bandwidth {
    return _smithy.isa(o, "Bandwidth");
  }
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
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
  export function isa(o: any): o is CreateDeviceRequest {
    return _smithy.isa(o, "CreateDeviceRequest");
  }
}

export interface CreateDeviceResponse extends $MetadataBearer {
  __type?: "CreateDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace CreateDeviceResponse {
  export function isa(o: any): o is CreateDeviceResponse {
    return _smithy.isa(o, "CreateDeviceResponse");
  }
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
  export function isa(o: any): o is CreateGlobalNetworkRequest {
    return _smithy.isa(o, "CreateGlobalNetworkRequest");
  }
}

export interface CreateGlobalNetworkResponse extends $MetadataBearer {
  __type?: "CreateGlobalNetworkResponse";
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace CreateGlobalNetworkResponse {
  export function isa(o: any): o is CreateGlobalNetworkResponse {
    return _smithy.isa(o, "CreateGlobalNetworkResponse");
  }
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
  export function isa(o: any): o is CreateLinkRequest {
    return _smithy.isa(o, "CreateLinkRequest");
  }
}

export interface CreateLinkResponse extends $MetadataBearer {
  __type?: "CreateLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace CreateLinkResponse {
  export function isa(o: any): o is CreateLinkResponse {
    return _smithy.isa(o, "CreateLinkResponse");
  }
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
  export function isa(o: any): o is CreateSiteRequest {
    return _smithy.isa(o, "CreateSiteRequest");
  }
}

export interface CreateSiteResponse extends $MetadataBearer {
  __type?: "CreateSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteResponse {
  export function isa(o: any): o is CreateSiteResponse {
    return _smithy.isa(o, "CreateSiteResponse");
  }
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
  export function isa(o: any): o is CustomerGatewayAssociation {
    return _smithy.isa(o, "CustomerGatewayAssociation");
  }
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
  export function isa(o: any): o is DeleteDeviceRequest {
    return _smithy.isa(o, "DeleteDeviceRequest");
  }
}

export interface DeleteDeviceResponse extends $MetadataBearer {
  __type?: "DeleteDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace DeleteDeviceResponse {
  export function isa(o: any): o is DeleteDeviceResponse {
    return _smithy.isa(o, "DeleteDeviceResponse");
  }
}

export interface DeleteGlobalNetworkRequest {
  __type?: "DeleteGlobalNetworkRequest";
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteGlobalNetworkRequest {
  export function isa(o: any): o is DeleteGlobalNetworkRequest {
    return _smithy.isa(o, "DeleteGlobalNetworkRequest");
  }
}

export interface DeleteGlobalNetworkResponse extends $MetadataBearer {
  __type?: "DeleteGlobalNetworkResponse";
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace DeleteGlobalNetworkResponse {
  export function isa(o: any): o is DeleteGlobalNetworkResponse {
    return _smithy.isa(o, "DeleteGlobalNetworkResponse");
  }
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
  export function isa(o: any): o is DeleteLinkRequest {
    return _smithy.isa(o, "DeleteLinkRequest");
  }
}

export interface DeleteLinkResponse extends $MetadataBearer {
  __type?: "DeleteLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace DeleteLinkResponse {
  export function isa(o: any): o is DeleteLinkResponse {
    return _smithy.isa(o, "DeleteLinkResponse");
  }
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
  export function isa(o: any): o is DeleteSiteRequest {
    return _smithy.isa(o, "DeleteSiteRequest");
  }
}

export interface DeleteSiteResponse extends $MetadataBearer {
  __type?: "DeleteSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace DeleteSiteResponse {
  export function isa(o: any): o is DeleteSiteResponse {
    return _smithy.isa(o, "DeleteSiteResponse");
  }
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
  export function isa(o: any): o is DeregisterTransitGatewayRequest {
    return _smithy.isa(o, "DeregisterTransitGatewayRequest");
  }
}

export interface DeregisterTransitGatewayResponse extends $MetadataBearer {
  __type?: "DeregisterTransitGatewayResponse";
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace DeregisterTransitGatewayResponse {
  export function isa(o: any): o is DeregisterTransitGatewayResponse {
    return _smithy.isa(o, "DeregisterTransitGatewayResponse");
  }
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
  export function isa(o: any): o is DescribeGlobalNetworksRequest {
    return _smithy.isa(o, "DescribeGlobalNetworksRequest");
  }
}

export interface DescribeGlobalNetworksResponse extends $MetadataBearer {
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
  export function isa(o: any): o is DescribeGlobalNetworksResponse {
    return _smithy.isa(o, "DescribeGlobalNetworksResponse");
  }
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
  export function isa(o: any): o is Device {
    return _smithy.isa(o, "Device");
  }
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
  export function isa(o: any): o is DisassociateCustomerGatewayRequest {
    return _smithy.isa(o, "DisassociateCustomerGatewayRequest");
  }
}

export interface DisassociateCustomerGatewayResponse extends $MetadataBearer {
  __type?: "DisassociateCustomerGatewayResponse";
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace DisassociateCustomerGatewayResponse {
  export function isa(o: any): o is DisassociateCustomerGatewayResponse {
    return _smithy.isa(o, "DisassociateCustomerGatewayResponse");
  }
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
  export function isa(o: any): o is DisassociateLinkRequest {
    return _smithy.isa(o, "DisassociateLinkRequest");
  }
}

export interface DisassociateLinkResponse extends $MetadataBearer {
  __type?: "DisassociateLinkResponse";
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace DisassociateLinkResponse {
  export function isa(o: any): o is DisassociateLinkResponse {
    return _smithy.isa(o, "DisassociateLinkResponse");
  }
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
  export function isa(o: any): o is GetCustomerGatewayAssociationsRequest {
    return _smithy.isa(o, "GetCustomerGatewayAssociationsRequest");
  }
}

export interface GetCustomerGatewayAssociationsResponse
  extends $MetadataBearer {
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
  export function isa(o: any): o is GetCustomerGatewayAssociationsResponse {
    return _smithy.isa(o, "GetCustomerGatewayAssociationsResponse");
  }
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
  export function isa(o: any): o is GetDevicesRequest {
    return _smithy.isa(o, "GetDevicesRequest");
  }
}

export interface GetDevicesResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetDevicesResponse {
    return _smithy.isa(o, "GetDevicesResponse");
  }
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
  export function isa(o: any): o is GetLinkAssociationsRequest {
    return _smithy.isa(o, "GetLinkAssociationsRequest");
  }
}

export interface GetLinkAssociationsResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetLinkAssociationsResponse {
    return _smithy.isa(o, "GetLinkAssociationsResponse");
  }
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
  export function isa(o: any): o is GetLinksRequest {
    return _smithy.isa(o, "GetLinksRequest");
  }
}

export interface GetLinksResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetLinksResponse {
    return _smithy.isa(o, "GetLinksResponse");
  }
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
  export function isa(o: any): o is GetSitesRequest {
    return _smithy.isa(o, "GetSitesRequest");
  }
}

export interface GetSitesResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetSitesResponse {
    return _smithy.isa(o, "GetSitesResponse");
  }
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
  export function isa(o: any): o is GetTransitGatewayRegistrationsRequest {
    return _smithy.isa(o, "GetTransitGatewayRegistrationsRequest");
  }
}

export interface GetTransitGatewayRegistrationsResponse
  extends $MetadataBearer {
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
  export function isa(o: any): o is GetTransitGatewayRegistrationsResponse {
    return _smithy.isa(o, "GetTransitGatewayRegistrationsResponse");
  }
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
  export function isa(o: any): o is GlobalNetwork {
    return _smithy.isa(o, "GlobalNetwork");
  }
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
  extends _smithy.SmithyException,
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
  export function isa(o: any): o is InternalServerException {
    return _smithy.isa(o, "InternalServerException");
  }
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
  export function isa(o: any): o is Link {
    return _smithy.isa(o, "Link");
  }
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
  export function isa(o: any): o is LinkAssociation {
    return _smithy.isa(o, "LinkAssociation");
  }
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
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tags.</p>
   */
  TagList?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
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
  export function isa(o: any): o is Location {
    return _smithy.isa(o, "Location");
  }
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
  export function isa(o: any): o is RegisterTransitGatewayRequest {
    return _smithy.isa(o, "RegisterTransitGatewayRequest");
  }
}

export interface RegisterTransitGatewayResponse extends $MetadataBearer {
  __type?: "RegisterTransitGatewayResponse";
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace RegisterTransitGatewayResponse {
  export function isa(o: any): o is RegisterTransitGatewayResponse {
    return _smithy.isa(o, "RegisterTransitGatewayResponse");
  }
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
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
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface ServiceQuotaExceededException
  extends _smithy.SmithyException,
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
  export function isa(o: any): o is ServiceQuotaExceededException {
    return _smithy.isa(o, "ServiceQuotaExceededException");
  }
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
  export function isa(o: any): o is Site {
    return _smithy.isa(o, "Site");
  }
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
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
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
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
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
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
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
  export function isa(o: any): o is TransitGatewayRegistration {
    return _smithy.isa(o, "TransitGatewayRegistration");
  }
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
  export function isa(o: any): o is TransitGatewayRegistrationStateReason {
    return _smithy.isa(o, "TransitGatewayRegistrationStateReason");
  }
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
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
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
  export function isa(o: any): o is UpdateDeviceRequest {
    return _smithy.isa(o, "UpdateDeviceRequest");
  }
}

export interface UpdateDeviceResponse extends $MetadataBearer {
  __type?: "UpdateDeviceResponse";
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace UpdateDeviceResponse {
  export function isa(o: any): o is UpdateDeviceResponse {
    return _smithy.isa(o, "UpdateDeviceResponse");
  }
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
  export function isa(o: any): o is UpdateGlobalNetworkRequest {
    return _smithy.isa(o, "UpdateGlobalNetworkRequest");
  }
}

export interface UpdateGlobalNetworkResponse extends $MetadataBearer {
  __type?: "UpdateGlobalNetworkResponse";
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace UpdateGlobalNetworkResponse {
  export function isa(o: any): o is UpdateGlobalNetworkResponse {
    return _smithy.isa(o, "UpdateGlobalNetworkResponse");
  }
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
  export function isa(o: any): o is UpdateLinkRequest {
    return _smithy.isa(o, "UpdateLinkRequest");
  }
}

export interface UpdateLinkResponse extends $MetadataBearer {
  __type?: "UpdateLinkResponse";
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace UpdateLinkResponse {
  export function isa(o: any): o is UpdateLinkResponse {
    return _smithy.isa(o, "UpdateLinkResponse");
  }
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
  export function isa(o: any): o is UpdateSiteRequest {
    return _smithy.isa(o, "UpdateSiteRequest");
  }
}

export interface UpdateSiteResponse extends $MetadataBearer {
  __type?: "UpdateSiteResponse";
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteResponse {
  export function isa(o: any): o is UpdateSiteResponse {
    return _smithy.isa(o, "UpdateSiteResponse");
  }
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export interface ValidationException
  extends _smithy.SmithyException,
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
  export function isa(o: any): o is ValidationException {
    return _smithy.isa(o, "ValidationException");
  }
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
  export function isa(o: any): o is ValidationExceptionField {
    return _smithy.isa(o, "ValidationExceptionField");
  }
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation"
}
