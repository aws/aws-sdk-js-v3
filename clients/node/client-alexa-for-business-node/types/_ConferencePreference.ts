/**
 * <p>The default conference provider that is used if no other scheduled meetings are detected.</p>
 */
export interface _ConferencePreference {
  /**
   * <p>The ARN of the default conference provider.</p>
   */
  DefaultConferenceProviderArn?: string;
}

export type _UnmarshalledConferencePreference = _ConferencePreference;
