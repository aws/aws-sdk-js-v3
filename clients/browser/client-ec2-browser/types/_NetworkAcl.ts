import {
  _NetworkAclAssociation,
  _UnmarshalledNetworkAclAssociation
} from "./_NetworkAclAssociation";
import {
  _NetworkAclEntry,
  _UnmarshalledNetworkAclEntry
} from "./_NetworkAclEntry";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a network ACL.</p>
 */
export interface _NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?:
    | Array<_NetworkAclAssociation>
    | Iterable<_NetworkAclAssociation>;

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: Array<_NetworkAclEntry> | Iterable<_NetworkAclEntry>;

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

export interface _UnmarshalledNetworkAcl extends _NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: Array<_UnmarshalledNetworkAclAssociation>;

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: Array<_UnmarshalledNetworkAclEntry>;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
