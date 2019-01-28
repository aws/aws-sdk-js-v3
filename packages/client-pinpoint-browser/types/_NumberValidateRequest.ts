/**
 * Phone Number Validate request.
 */
export interface _NumberValidateRequest {
    /**
     * (Optional) The two-character ISO country code for the country or region where the phone number was originally registered.
     */
    IsoCountryCode?: string;

    /**
     * The phone number to get information about. The phone number that you provide should include a country code. If the number doesn't include a valid country code, the operation might result in an error.
     */
    PhoneNumber?: string;
}

export type _UnmarshalledNumberValidateRequest = _NumberValidateRequest;