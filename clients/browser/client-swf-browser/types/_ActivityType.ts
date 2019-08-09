/**
 * <p>Represents an activity type.</p>
 */
export interface _ActivityType {
  /**
   * <p>The name of this activity.</p> <note> <p>The combination of activity type name and version must be unique within a domain.</p> </note>
   */
  name: string;

  /**
   * <p>The version of this activity.</p> <note> <p>The combination of activity type name and version must be unique with in a domain.</p> </note>
   */
  version: string;
}

export type _UnmarshalledActivityType = _ActivityType;
