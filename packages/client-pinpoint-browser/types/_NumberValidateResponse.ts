/**
 * Phone Number Validate response.
 */
export interface _NumberValidateResponse {
    /**
     * The carrier or servive provider that the phone number is currently registered with.
     */
    Carrier?: string;

    /**
     * The city where the phone number was originally registered.
     */
    City?: string;

    /**
     * The cleansed phone number, shown in E.164 format.
     */
    CleansedPhoneNumberE164?: string;

    /**
     * The cleansed phone number, shown in the local phone number format.
     */
    CleansedPhoneNumberNational?: string;

    /**
     * The country or region where the phone number was originally registered.
     */
    Country?: string;

    /**
     * The two-character ISO code for the country or region where the phone number was originally registered.
     */
    CountryCodeIso2?: string;

    /**
     * The numeric code for the country or region where the phone number was originally registered.
     */
    CountryCodeNumeric?: string;

    /**
     * The county where the phone number was originally registered.
     */
    County?: string;

    /**
     * The two-character code (in ISO 3166-1 alpha-2 format) for the country or region in the request body.
     */
    OriginalCountryCodeIso2?: string;

    /**
     * The phone number that you included in the request body.
     */
    OriginalPhoneNumber?: string;

    /**
     * A description of the phone type. Possible values are MOBILE, LANDLINE, VOIP, INVALID, PREPAID, and OTHER.
     */
    PhoneType?: string;

    /**
     * The phone type, represented by an integer. Possible values include 0 (MOBILE), 1 (LANDLINE), 2 (VOIP), 3 (INVALID), 4 (OTHER), and 5 (PREPAID).
     */
    PhoneTypeCode?: number;

    /**
     * The time zone for the location where the phone number was originally registered.
     */
    Timezone?: string;

    /**
     * The postal code for the location where the phone number was originally registered.
     */
    ZipCode?: string;
}

export type _UnmarshalledNumberValidateResponse = _NumberValidateResponse;