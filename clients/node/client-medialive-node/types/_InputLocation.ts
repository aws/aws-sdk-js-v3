/**
 * Input Location
 */
export interface _InputLocation {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   */
  Uri: string;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export type _UnmarshalledInputLocation = _InputLocation;
