import { _SubDomain, _UnmarshalledSubDomain } from "./_SubDomain";

/**
 * <p> Structure for Domain Association, which associates a custom domain with an Amplify App. </p>
 */
export interface _DomainAssociation {
  /**
   * <p> ARN for the Domain Association. </p>
   */
  domainAssociationArn: string;

  /**
   * <p> Name of the domain. </p>
   */
  domainName: string;

  /**
   * <p> Enables automated creation of Subdomains for branches. </p>
   */
  enableAutoSubDomain: boolean;

  /**
   * <p> Status fo the Domain Association. </p>
   */
  domainStatus:
    | "PENDING_VERIFICATION"
    | "IN_PROGRESS"
    | "AVAILABLE"
    | "PENDING_DEPLOYMENT"
    | "FAILED"
    | "CREATING"
    | "REQUESTING_CERTIFICATE"
    | "UPDATING"
    | string;

  /**
   * <p> Reason for the current status of the Domain Association. </p>
   */
  statusReason: string;

  /**
   * <p> DNS Record for certificate verification. </p>
   */
  certificateVerificationDNSRecord?: string;

  /**
   * <p> Subdomains for the Domain Association. </p>
   */
  subDomains: Array<_SubDomain> | Iterable<_SubDomain>;
}

export interface _UnmarshalledDomainAssociation extends _DomainAssociation {
  /**
   * <p> Subdomains for the Domain Association. </p>
   */
  subDomains: Array<_UnmarshalledSubDomain>;
}
