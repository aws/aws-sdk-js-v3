import {
  _TransitGatewayOptions,
  _UnmarshalledTransitGatewayOptions
} from "./_TransitGatewayOptions";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a transit gateway.</p>
 */
export interface _TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway.</p>
   */
  State?:
    | "pending"
    | "available"
    | "modifying"
    | "deleting"
    | "deleted"
    | string;

  /**
   * <p>The ID of the AWS account ID that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: _TransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTransitGateway extends _TransitGateway {
  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: _UnmarshalledTransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
