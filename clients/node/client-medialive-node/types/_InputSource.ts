/**
 * The settings for a PULL type input.
 */
export interface _InputSource {
  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   *
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;
}

export type _UnmarshalledInputSource = _InputSource;
