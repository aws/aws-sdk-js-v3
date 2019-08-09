/**
 * <p>A cost allocation Tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. A tag with a null Value is permitted.</p>
 */
export interface _Tag {
  /**
   * <p>The key for the tag. May not be null.</p>
   */
  Key?: string;

  /**
   * <p>The tag's value. May be null.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
