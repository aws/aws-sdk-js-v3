/**
 * <p> A complex type that contains <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface _Tag {
  /**
   * <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
   */
  Key: string;

  /**
   * <p> A string that contains an optional <code>Tag</code> value.</p> <p>The string length should be between 0 and 256 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
