/**
 * <p>A skill parameter associated with a room.</p>
 */
export interface _RoomSkillParameter {
  /**
   * <p>The parameter key of a room skill parameter. ParameterKey is an enumerated type that only takes “DEFAULT” or “SCOPE” as valid values.</p>
   */
  ParameterKey: string;

  /**
   * <p>The parameter value of a room skill parameter.</p>
   */
  ParameterValue: string;
}

export type _UnmarshalledRoomSkillParameter = _RoomSkillParameter;
