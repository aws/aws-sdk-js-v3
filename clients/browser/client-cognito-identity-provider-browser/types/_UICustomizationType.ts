/**
 * <p>A container for the UI customization information for a user pool's built-in app UI.</p>
 */
export interface _UICustomizationType {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client ID for the client app.</p>
   */
  ClientId?: string;

  /**
   * <p>The logo image for the UI customization.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The CSS values in the UI customization.</p>
   */
  CSS?: string;

  /**
   * <p>The CSS version number.</p>
   */
  CSSVersion?: string;

  /**
   * <p>The last-modified date for the UI customization.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The creation date for the UI customization.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledUICustomizationType extends _UICustomizationType {
  /**
   * <p>The last-modified date for the UI customization.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The creation date for the UI customization.</p>
   */
  CreationDate?: Date;
}
