/**
 * <p>The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.</p>
 */
export interface _Address {
  /**
   * <p>The unique ID for an address.</p>
   */
  AddressId?: string;

  /**
   * <p>The name of a person to receive a Snowball at an address.</p>
   */
  Name?: string;

  /**
   * <p>The name of the company to receive a Snowball at an address.</p>
   */
  Company?: string;

  /**
   * <p>The first line in a street address that a Snowball is to be delivered to.</p>
   */
  Street1?: string;

  /**
   * <p>The second line in a street address that a Snowball is to be delivered to.</p>
   */
  Street2?: string;

  /**
   * <p>The third line in a street address that a Snowball is to be delivered to.</p>
   */
  Street3?: string;

  /**
   * <p>The city in an address that a Snowball is to be delivered to.</p>
   */
  City?: string;

  /**
   * <p>The state or province in an address that a Snowball is to be delivered to.</p>
   */
  StateOrProvince?: string;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   */
  PrefectureOrDistrict?: string;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   */
  Landmark?: string;

  /**
   * <p>The country in an address that a Snowball is to be delivered to.</p>
   */
  Country?: string;

  /**
   * <p>The postal code in an address that a Snowball is to be delivered to.</p>
   */
  PostalCode?: string;

  /**
   * <p>The phone number associated with an address that a Snowball is to be delivered to.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>If the address you are creating is a primary address, then set this option to true. This field is not supported in most regions.</p>
   */
  IsRestricted?: boolean;
}

export type _UnmarshalledAddress = _Address;
