import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * _TagInfoForResource shape
 */
export interface _TagInfoForResource {
  /**
   * _ResourceArn shape
   */
  ResourceARN?: string;

  /**
   * _TagList shape
   */
  TagList?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTagInfoForResource extends _TagInfoForResource {
  /**
   * _TagList shape
   */
  TagList?: Array<_UnmarshalledTag>;
}
