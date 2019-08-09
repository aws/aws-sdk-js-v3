/**
 * <p>Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session, such as to specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session; the server process uses the properties as appropriate. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.</p>
 */
export interface _GameProperty {
  /**
   * <p>Game property identifier.</p>
   */
  Key: string;

  /**
   * <p>Game property value.</p>
   */
  Value: string;
}

export type _UnmarshalledGameProperty = _GameProperty;
