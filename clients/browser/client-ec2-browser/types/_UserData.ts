/**
 * <p>Describes the user data for an instance.</p>
 */
export interface _UserData {
  /**
   * <p>The user data. If you are using an AWS SDK or command line tool, Base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

export type _UnmarshalledUserData = _UserData;
