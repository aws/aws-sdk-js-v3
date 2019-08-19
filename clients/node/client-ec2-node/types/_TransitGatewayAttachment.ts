import {
  _TransitGatewayAttachmentAssociation,
  _UnmarshalledTransitGatewayAttachmentAssociation
} from "./_TransitGatewayAttachmentAssociation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface _TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the AWS account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: "vpc" | "vpn" | "direct-connect-gateway" | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The attachment state.</p>
   */
  State?:
    | "pendingAcceptance"
    | "rollingBack"
    | "pending"
    | "available"
    | "modifying"
    | "deleting"
    | "deleted"
    | "failed"
    | "rejected"
    | "rejecting"
    | "failing"
    | string;

  /**
   * <p>The association.</p>
   */
  Association?: _TransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTransitGatewayAttachment
  extends _TransitGatewayAttachment {
  /**
   * <p>The association.</p>
   */
  Association?: _UnmarshalledTransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
