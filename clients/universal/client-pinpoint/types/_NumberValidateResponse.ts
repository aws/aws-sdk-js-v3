/**
 * <p>Provides information about a phone number.</p>
 */
export interface _NumberValidateResponse {
  /**
   * <p>The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.</p>
   */
  Carrier?: string;

  /**
   * <p>The name of the city where the phone number was originally registered.</p>
   */
  City?: string;

  /**
   * <p>The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberE164?: string;

  /**
   * <p>The cleansed phone number, in the format for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberNational?: string;

  /**
   * <p>The name of the country or region where the phone number was originally registered.</p>
   */
  Country?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeIso2?: string;

  /**
   * <p>The numeric code for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeNumeric?: string;

  /**
   * <p>The name of the county where the phone number was originally registered.</p>
   */
  County?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.</p>
   */
  OriginalCountryCodeIso2?: string;

  /**
   * <p>The phone number that was sent in the request body.</p>
   */
  OriginalPhoneNumber?: string;

  /**
   * <p>The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,
   *                   INVALID, PREPAID, and OTHER.</p>
   */
  PhoneType?: string;

  /**
   * <p>The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).</p>
   */
  PhoneTypeCode?: number;

  /**
   * <p>The time zone for the location where the phone number was originally registered.</p>
   */
  Timezone?: string;

  /**
   * <p>The postal or ZIP code for the location where the phone number was originally registered.</p>
   */
  ZipCode?: string;
}

export type _UnmarshalledNumberValidateResponse = _NumberValidateResponse;
