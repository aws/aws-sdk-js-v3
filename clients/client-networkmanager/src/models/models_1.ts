// smithy-typescript generated code
import type { Location, Site, VpcAttachment, VpcOptions } from "./models_0";

/**
 * @public
 */
export interface UpdateNetworkResourceMetadataResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The updated resource metadata.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   * @public
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   * @public
   */
  SiteId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *          <p>Constraints: Maximum length of 256 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The site location:</p>
   *          <ul>
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
   * @public
   */
  Location?: Location | undefined;
}

/**
 * @public
 */
export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   * @public
   */
  Site?: Site | undefined;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Adds a subnet ARN to the VPC attachment.</p>
   * @public
   */
  AddSubnetArns?: string[] | undefined;

  /**
   * <p>Removes a subnet ARN from the attachment.</p>
   * @public
   */
  RemoveSubnetArns?: string[] | undefined;

  /**
   * <p>Additional options for updating the VPC attachment. </p>
   * @public
   */
  Options?: VpcOptions | undefined;
}

/**
 * @public
 */
export interface UpdateVpcAttachmentResponse {
  /**
   * <p>Describes the updated VPC attachment.</p>
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}
