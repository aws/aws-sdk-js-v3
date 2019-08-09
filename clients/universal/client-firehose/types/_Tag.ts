/**
 * <p>Metadata that you can assign to a delivery stream, consisting of a key-value pair.</p>
 */
export interface _Tag {
  /**
   * <p>A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @</p>
   */
  Key: string;

  /**
   * <p>An optional string, which you can use to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
