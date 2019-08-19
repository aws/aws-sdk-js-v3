import {
  _SubDomainSetting,
  _UnmarshalledSubDomainSetting
} from "./_SubDomainSetting";

/**
 * <p> Subdomain for the Domain Association. </p>
 */
export interface _SubDomain {
  /**
   * <p> Setting structure for the Subdomain. </p>
   */
  subDomainSetting: _SubDomainSetting;

  /**
   * <p> Verified status of the Subdomain </p>
   */
  verified: boolean;

  /**
   * <p> DNS record for the Subdomain. </p>
   */
  dnsRecord: string;
}

export interface _UnmarshalledSubDomain extends _SubDomain {
  /**
   * <p> Setting structure for the Subdomain. </p>
   */
  subDomainSetting: _UnmarshalledSubDomainSetting;
}
