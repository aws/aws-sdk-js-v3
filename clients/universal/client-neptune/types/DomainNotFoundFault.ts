import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
 */
export interface DomainNotFoundFault
  extends __ServiceException__<_DomainNotFoundFaultDetails> {
  name: "DomainNotFoundFault";
}

export interface _DomainNotFoundFaultDetails {}
