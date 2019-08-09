/**
 * Placeholder documentation for OutputDestinationSettings
 */
export interface _OutputDestinationSettings {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   */
  StreamName?: string;

  /**
   * A URL specifying a destination
   */
  Url?: string;

  /**
   * username for destination
   */
  Username?: string;
}

export type _UnmarshalledOutputDestinationSettings = _OutputDestinationSettings;
