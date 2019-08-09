import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 */
export interface DomainAlreadyExistsFault
  extends __ServiceException__<_DomainAlreadyExistsFaultDetails> {
  name: "DomainAlreadyExistsFault";
}

export interface _DomainAlreadyExistsFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
