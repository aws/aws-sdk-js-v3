import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a tag associated with an AWS Direct Connect resource.</p>
 */
export interface _ResourceTag {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tags.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledResourceTag extends _ResourceTag {
  /**
   * <p>The tags.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
