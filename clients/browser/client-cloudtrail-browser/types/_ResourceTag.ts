import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A resource tag.</p>
 */
export interface _ResourceTag {
  /**
   * <p>Specifies the ARN of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>A list of tags.</p>
   */
  TagsList?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledResourceTag extends _ResourceTag {
  /**
   * <p>A list of tags.</p>
   */
  TagsList?: Array<_UnmarshalledTag>;
}
