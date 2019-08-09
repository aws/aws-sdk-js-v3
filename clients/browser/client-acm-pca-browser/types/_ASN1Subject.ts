/**
 * <p>Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity. </p>
 */
export interface _ASN1Subject {
  /**
   * <p>Two-digit code that specifies the country in which the certificate subject located.</p>
   */
  Country?: string;

  /**
   * <p>Legal name of the organization with which the certificate subject is affiliated. </p>
   */
  Organization?: string;

  /**
   * <p>A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.</p>
   */
  OrganizationalUnit?: string;

  /**
   * <p>Disambiguating information for the certificate subject.</p>
   */
  DistinguishedNameQualifier?: string;

  /**
   * <p>State in which the subject of the certificate is located.</p>
   */
  State?: string;

  /**
   * <p>Fully qualified domain name (FQDN) associated with the certificate subject.</p>
   */
  CommonName?: string;

  /**
   * <p>The certificate serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The locality (such as a city or town) in which the certificate subject is located.</p>
   */
  Locality?: string;

  /**
   * <p>A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.</p>
   */
  Title?: string;

  /**
   * <p>Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.</p>
   */
  Surname?: string;

  /**
   * <p>First name.</p>
   */
  GivenName?: string;

  /**
   * <p>Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the first letter of the <b>SurName</b>.</p>
   */
  Initials?: string;

  /**
   * <p>Typically a shortened version of a longer <b>GivenName</b>. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.</p>
   */
  Pseudonym?: string;

  /**
   * <p>Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.</p>
   */
  GenerationQualifier?: string;
}

export type _UnmarshalledASN1Subject = _ASN1Subject;
