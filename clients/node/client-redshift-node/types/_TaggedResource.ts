import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A tag and its associated resource.</p>
 */
export interface _TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   */
  Tag?: _Tag;

  /**
   * <p>The Amazon Resource Name (ARN) with which the tag is associated, for example: <code>arn:aws:redshift:us-east-1:123456789:cluster:t1</code>.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which the tag is associated. Valid resource types are: </p> <ul> <li> <p>Cluster</p> </li> <li> <p>CIDR/IP</p> </li> <li> <p>EC2 security group</p> </li> <li> <p>Snapshot</p> </li> <li> <p>Cluster security group</p> </li> <li> <p>Subnet group</p> </li> <li> <p>HSM connection</p> </li> <li> <p>HSM certificate</p> </li> <li> <p>Parameter group</p> </li> </ul> <p>For more information about Amazon Redshift resource types and constructing ARNs, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Constructing an Amazon Redshift Amazon Resource Name (ARN)</a> in the Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;
}

export interface _UnmarshalledTaggedResource extends _TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   */
  Tag?: _UnmarshalledTag;
}
