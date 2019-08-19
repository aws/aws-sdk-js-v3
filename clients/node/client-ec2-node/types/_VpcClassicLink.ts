import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface _VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledVpcClassicLink extends _VpcClassicLink {
  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
