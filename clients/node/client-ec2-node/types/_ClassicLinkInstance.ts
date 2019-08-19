import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a linked EC2-Classic instance.</p>
 */
export interface _ClassicLinkInstance {
  /**
   * <p>A list of security groups.</p>
   */
  Groups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledClassicLinkInstance extends _ClassicLinkInstance {
  /**
   * <p>A list of security groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
