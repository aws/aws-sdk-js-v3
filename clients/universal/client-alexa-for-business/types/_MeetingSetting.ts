/**
 * <p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul>
 */
export interface _MeetingSetting {
  /**
   * <p>The values that indicate whether the pin is always required.</p>
   */
  RequirePin: "YES" | "NO" | "OPTIONAL" | string;
}

export type _UnmarshalledMeetingSetting = _MeetingSetting;
