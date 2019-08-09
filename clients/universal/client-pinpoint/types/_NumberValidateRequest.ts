/**
 * <p>Specifies a phone number to validate and retrieve information about.</p>
 */
export interface _NumberValidateRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.</p>
   */
  PhoneNumber?: string;
}

export type _UnmarshalledNumberValidateRequest = _NumberValidateRequest;
