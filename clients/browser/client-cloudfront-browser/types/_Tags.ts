import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface _Tags {
  /**
   * <p> A complex type that contains <code>Tag</code> elements.</p>
   */
  Items?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTags extends _Tags {
  /**
   * <p> A complex type that contains <code>Tag</code> elements.</p>
   */
  Items?: Array<_UnmarshalledTag>;
}
