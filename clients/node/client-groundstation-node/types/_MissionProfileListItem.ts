/**
 * <p>Item in a list of mission profiles.</p>
 */
export interface _MissionProfileListItem {
  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;
}

export type _UnmarshalledMissionProfileListItem = _MissionProfileListItem;
