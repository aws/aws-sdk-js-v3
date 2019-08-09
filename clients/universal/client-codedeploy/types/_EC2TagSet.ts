import { _EC2TagFilter, _UnmarshalledEC2TagFilter } from "./_EC2TagFilter";

/**
 * <p>Information about groups of EC2 instance tags.</p>
 */
export interface _EC2TagSet {
  /**
   * <p>A list that contains other lists of EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.</p>
   */
  ec2TagSetList?:
    | Array<Array<_EC2TagFilter> | Iterable<_EC2TagFilter>>
    | Iterable<Array<_EC2TagFilter> | Iterable<_EC2TagFilter>>;
}

export interface _UnmarshalledEC2TagSet extends _EC2TagSet {
  /**
   * <p>A list that contains other lists of EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.</p>
   */
  ec2TagSetList?: Array<Array<_UnmarshalledEC2TagFilter>>;
}
