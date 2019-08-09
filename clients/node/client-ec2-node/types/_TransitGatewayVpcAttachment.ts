import {
  _TransitGatewayVpcAttachmentOptions,
  _UnmarshalledTransitGatewayVpcAttachmentOptions
} from "./_TransitGatewayVpcAttachmentOptions";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface _TransitGatewayVpcAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the VPC.</p>
   */
  VpcOwnerId?: string;

  /**
   * <p>The state of the VPC attachment.</p>
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
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: _TransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTransitGatewayVpcAttachment
  extends _TransitGatewayVpcAttachment {
  /**
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: _UnmarshalledTransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
