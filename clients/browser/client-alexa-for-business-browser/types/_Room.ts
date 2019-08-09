/**
 * <p>A room with attributes.</p>
 */
export interface _Room {
  /**
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of a room.</p>
   */
  RoomName?: string;

  /**
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;
}

export type _UnmarshalledRoom = _Room;
