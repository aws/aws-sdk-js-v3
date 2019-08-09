/**
 * <p>Describes a prefix list ID.</p>
 */
export interface _PrefixListId {
  /**
   * <p>A description for the security group rule that references this prefix list ID.</p> <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

export type _UnmarshalledPrefixListId = _PrefixListId;
