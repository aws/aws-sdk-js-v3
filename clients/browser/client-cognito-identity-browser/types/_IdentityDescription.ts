/**
 * <p>A description of the identity.</p>
 */
export interface _IdentityDescription {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>The provider names.</p>
   */
  Logins?: Array<string> | Iterable<string>;

  /**
   * <p>Date on which the identity was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledIdentityDescription extends _IdentityDescription {
  /**
   * <p>The provider names.</p>
   */
  Logins?: Array<string>;

  /**
   * <p>Date on which the identity was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date;
}
