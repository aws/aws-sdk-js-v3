import { _IPDialIn, _UnmarshalledIPDialIn } from "./_IPDialIn";
import { _PSTNDialIn, _UnmarshalledPSTNDialIn } from "./_PSTNDialIn";
import {
  _MeetingSetting,
  _UnmarshalledMeetingSetting
} from "./_MeetingSetting";

/**
 * <p>An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. </p>
 */
export interface _ConferenceProvider {
  /**
   * <p>The ARN of the newly created conference provider.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the conference provider.</p>
   */
  Name?: string;

  /**
   * <p>The type of conference providers.</p>
   */
  Type?:
    | "CHIME"
    | "BLUEJEANS"
    | "FUZE"
    | "GOOGLE_HANGOUTS"
    | "POLYCOM"
    | "RINGCENTRAL"
    | "SKYPE_FOR_BUSINESS"
    | "WEBEX"
    | "ZOOM"
    | "CUSTOM"
    | string;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: _IPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: _PSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting?: _MeetingSetting;
}

export interface _UnmarshalledConferenceProvider extends _ConferenceProvider {
  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: _UnmarshalledIPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: _UnmarshalledPSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting?: _UnmarshalledMeetingSetting;
}
