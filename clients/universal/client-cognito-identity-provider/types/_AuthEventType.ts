import { _EventRiskType, _UnmarshalledEventRiskType } from "./_EventRiskType";
import {
  _ChallengeResponseType,
  _UnmarshalledChallengeResponseType
} from "./_ChallengeResponseType";
import {
  _EventContextDataType,
  _UnmarshalledEventContextDataType
} from "./_EventContextDataType";
import {
  _EventFeedbackType,
  _UnmarshalledEventFeedbackType
} from "./_EventFeedbackType";

/**
 * <p>The authentication event type.</p>
 */
export interface _AuthEventType {
  /**
   * <p>The event ID.</p>
   */
  EventId?: string;

  /**
   * <p>The event type.</p>
   */
  EventType?: "SignIn" | "SignUp" | "ForgotPassword" | string;

  /**
   * <p>The creation date</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The event response.</p>
   */
  EventResponse?: "Success" | "Failure" | string;

  /**
   * <p>The event risk.</p>
   */
  EventRisk?: _EventRiskType;

  /**
   * <p>The challenge responses.</p>
   */
  ChallengeResponses?:
    | Array<_ChallengeResponseType>
    | Iterable<_ChallengeResponseType>;

  /**
   * <p>The user context data captured at the time of an event request. It provides additional information about the client from which event the request is received.</p>
   */
  EventContextData?: _EventContextDataType;

  /**
   * <p>A flag specifying the user feedback captured at the time of an event request is good or bad. </p>
   */
  EventFeedback?: _EventFeedbackType;
}

export interface _UnmarshalledAuthEventType extends _AuthEventType {
  /**
   * <p>The creation date</p>
   */
  CreationDate?: Date;

  /**
   * <p>The event risk.</p>
   */
  EventRisk?: _UnmarshalledEventRiskType;

  /**
   * <p>The challenge responses.</p>
   */
  ChallengeResponses?: Array<_UnmarshalledChallengeResponseType>;

  /**
   * <p>The user context data captured at the time of an event request. It provides additional information about the client from which event the request is received.</p>
   */
  EventContextData?: _UnmarshalledEventContextDataType;

  /**
   * <p>A flag specifying the user feedback captured at the time of an event request is good or bad. </p>
   */
  EventFeedback?: _UnmarshalledEventFeedbackType;
}
