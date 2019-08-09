import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The domain specified is not on the allowlist. All domains for embedded dashboards must be added to the approved list by an Amazon QuickSight admin.</p>
 */
export interface DomainNotWhitelistedException
  extends __ServiceException__<_DomainNotWhitelistedExceptionDetails> {
  name: "DomainNotWhitelistedException";
}

export interface _DomainNotWhitelistedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
