import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tags associated with a resource.</p>
 */
export interface _TagDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTagDescription extends _TagDescription {
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
