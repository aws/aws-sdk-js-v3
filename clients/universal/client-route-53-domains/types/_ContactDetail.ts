import { _ExtraParam, _UnmarshalledExtraParam } from "./_ExtraParam";

/**
 * <p>ContactDetail includes the following elements.</p>
 */
export interface _ContactDetail {
  /**
   * <p>First name of contact.</p>
   */
  FirstName?: string;

  /**
   * <p>Last name of contact.</p>
   */
  LastName?: string;

  /**
   * <p>Indicates whether the contact is a person, company, association, or public organization. If you choose an option other than <code>PERSON</code>, you must enter an organization name, and you can't enable privacy protection for the contact.</p>
   */
  ContactType?:
    | "PERSON"
    | "COMPANY"
    | "ASSOCIATION"
    | "PUBLIC_BODY"
    | "RESELLER"
    | string;

  /**
   * <p>Name of the organization for contact types other than <code>PERSON</code>.</p>
   */
  OrganizationName?: string;

  /**
   * <p>First line of the contact's address.</p>
   */
  AddressLine1?: string;

  /**
   * <p>Second line of contact's address, if any.</p>
   */
  AddressLine2?: string;

  /**
   * <p>The city of the contact's address.</p>
   */
  City?: string;

  /**
   * <p>The state or province of the contact's city.</p>
   */
  State?: string;

  /**
   * <p>Code for the country of the contact's address.</p>
   */
  CountryCode?:
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AN"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BR"
    | "BS"
    | "BT"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GQ"
    | "GR"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "ST"
    | "SV"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | string;

  /**
   * <p>The zip or postal code of the contact's address.</p>
   */
  ZipCode?: string;

  /**
   * <p>The phone number of the contact.</p> <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code&gt;]". For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>Email address of the contact.</p>
   */
  Email?: string;

  /**
   * <p>Fax number of the contact.</p> <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]". For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  Fax?: string;

  /**
   * <p>A list of name-value pairs for parameters required by certain top-level domains.</p>
   */
  ExtraParams?: Array<_ExtraParam> | Iterable<_ExtraParam>;
}

export interface _UnmarshalledContactDetail extends _ContactDetail {
  /**
   * <p>A list of name-value pairs for parameters required by certain top-level domains.</p>
   */
  ExtraParams?: Array<_UnmarshalledExtraParam>;
}
