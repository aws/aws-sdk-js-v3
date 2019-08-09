/**
 * <p>The information for public switched telephone network (PSTN) conferencing.</p>
 */
export interface _PSTNDialIn {
  /**
   * <p>The zip code.</p>
   */
  CountryCode: string;

  /**
   * <p>The phone number to call to join the conference.</p>
   */
  PhoneNumber: string;

  /**
   * <p>The delay duration before Alexa enters the conference ID with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickIdDelay: string;

  /**
   * <p>The delay duration before Alexa enters the conference pin with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickPinDelay: string;
}

export type _UnmarshalledPSTNDialIn = _PSTNDialIn;
