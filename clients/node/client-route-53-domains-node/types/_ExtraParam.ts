/**
 * <p>ExtraParam includes the following elements.</p>
 */
export interface _ExtraParam {
  /**
   * <p>Name of the additional parameter required by the top-level domain. Here are the top-level domains that require additional parameters and which parameters they require:</p> <ul> <li> <p> <b>.com.au and .net.au:</b> <code>AU_ID_NUMBER</code> and <code>AU_ID_TYPE</code> </p> </li> <li> <p> <b>.ca:</b> <code>BRAND_NUMBER</code>, <code>CA_LEGAL_TYPE</code>, and <code>CA_BUSINESS_ENTITY_TYPE</code> </p> </li> <li> <p> <b>.es:</b> <code>ES_IDENTIFICATION</code>, <code>ES_IDENTIFICATION_TYPE</code>, and <code>ES_LEGAL_FORM</code> </p> </li> <li> <p> <b>.fi:</b> <code>BIRTH_DATE_IN_YYYY_MM_DD</code>, <code>FI_BUSINESS_NUMBER</code>, <code>FI_ID_NUMBER</code>, <code>FI_NATIONALITY</code>, and <code>FI_ORGANIZATION_TYPE</code> </p> </li> <li> <p> <b>.fr:</b> <code>BRAND_NUMBER</code>, <code>BIRTH_DEPARTMENT</code>, <code>BIRTH_DATE_IN_YYYY_MM_DD</code>, <code>BIRTH_COUNTRY</code>, and <code>BIRTH_CITY</code> </p> </li> <li> <p> <b>.it:</b> <code>BIRTH_COUNTRY</code>, <code>IT_PIN</code>, and <code>IT_REGISTRANT_ENTITY_TYPE</code> </p> </li> <li> <p> <b>.ru:</b> <code>BIRTH_DATE_IN_YYYY_MM_DD</code> and <code>RU_PASSPORT_DATA</code> </p> </li> <li> <p> <b>.se:</b> <code>BIRTH_COUNTRY</code> and <code>SE_ID_NUMBER</code> </p> </li> <li> <p> <b>.sg:</b> <code>SG_ID_NUMBER</code> </p> </li> <li> <p> <b>.co.uk, .me.uk, and .org.uk:</b> <code>UK_CONTACT_TYPE</code> and <code>UK_COMPANY_NUMBER</code> </p> </li> </ul> <p>In addition, many TLDs require <code>VAT_NUMBER</code>.</p>
   */
  Name:
    | "DUNS_NUMBER"
    | "BRAND_NUMBER"
    | "BIRTH_DEPARTMENT"
    | "BIRTH_DATE_IN_YYYY_MM_DD"
    | "BIRTH_COUNTRY"
    | "BIRTH_CITY"
    | "DOCUMENT_NUMBER"
    | "AU_ID_NUMBER"
    | "AU_ID_TYPE"
    | "CA_LEGAL_TYPE"
    | "CA_BUSINESS_ENTITY_TYPE"
    | "ES_IDENTIFICATION"
    | "ES_IDENTIFICATION_TYPE"
    | "ES_LEGAL_FORM"
    | "FI_BUSINESS_NUMBER"
    | "FI_ID_NUMBER"
    | "FI_NATIONALITY"
    | "FI_ORGANIZATION_TYPE"
    | "IT_PIN"
    | "IT_REGISTRANT_ENTITY_TYPE"
    | "RU_PASSPORT_DATA"
    | "SE_ID_NUMBER"
    | "SG_ID_NUMBER"
    | "VAT_NUMBER"
    | "UK_CONTACT_TYPE"
    | "UK_COMPANY_NUMBER"
    | string;

  /**
   * <p>Values corresponding to the additional parameter names required by some top-level domains.</p>
   */
  Value: string;
}

export type _UnmarshalledExtraParam = _ExtraParam;
