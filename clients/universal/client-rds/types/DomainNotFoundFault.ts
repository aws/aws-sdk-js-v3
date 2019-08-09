import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>
 */
export interface DomainNotFoundFault
  extends __ServiceException__<_DomainNotFoundFaultDetails> {
  name: "DomainNotFoundFault";
}

export interface _DomainNotFoundFaultDetails {}
