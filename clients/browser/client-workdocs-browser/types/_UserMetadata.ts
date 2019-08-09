/**
 * <p>Describes the metadata of the user.</p>
 */
export interface _UserMetadata {
  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The given name of the user before a rename operation.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;
}

export type _UnmarshalledUserMetadata = _UserMetadata;
