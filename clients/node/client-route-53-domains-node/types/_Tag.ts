/**
 * <p>Each tag includes the following elements.</p>
 */
export interface _Tag {
  /**
   * <p>The key (name) of a tag.</p> <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p> <p>Constraints: Each key can be 1-128 characters long.</p>
   */
  Key?: string;

  /**
   * <p>The value of a tag.</p> <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p> <p>Constraints: Each value can be 0-256 characters long.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
