import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p/>
 */
export interface _Tagging {
  /**
   * <p/>
   */
  TagSet: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTagging extends _Tagging {
  /**
   * <p/>
   */
  TagSet: Array<_UnmarshalledTag>;
}
