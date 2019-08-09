/**
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface _ClientProperties {
  /**
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client. When enabled, users can choose to reconnect to their WorkSpaces without re-entering their credentials. </p>
   */
  ReconnectEnabled?: "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledClientProperties = _ClientProperties;
