/**
 * _Organization shape
 */
export interface _Organization {
  /**
   * <p>Autonomous system number of the internet provider of the remote IP address.</p>
   */
  Asn?: string;

  /**
   * <p>Organization that registered this ASN.</p>
   */
  AsnOrg?: string;

  /**
   * <p>ISP information for the internet provider.</p>
   */
  Isp?: string;

  /**
   * <p>Name of the internet provider.</p>
   */
  Org?: string;
}

export type _UnmarshalledOrganization = _Organization;
