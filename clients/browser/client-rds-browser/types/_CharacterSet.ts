/**
 * <p> This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. </p>
 */
export interface _CharacterSet {
  /**
   * <p>The name of the character set.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The description of the character set.</p>
   */
  CharacterSetDescription?: string;
}

export type _UnmarshalledCharacterSet = _CharacterSet;
