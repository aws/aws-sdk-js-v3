import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A list of resource ARNs and the tags (keys and values) that are associated with each.</p>
 */
export interface _ResourceTagMapping {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags that have been applied to one or more AWS resources.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledResourceTagMapping extends _ResourceTagMapping {
  /**
   * <p>The tags that have been applied to one or more AWS resources.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
