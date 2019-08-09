import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the custom domain to be used for open and click tracking redirects is invalid. This error appears most often in the following situations:</p> <ul> <li> <p>When the tracking domain you specified is not verified in Amazon SES.</p> </li> <li> <p>When the tracking domain you specified is not a valid domain or subdomain.</p> </li> </ul>
 */
export interface InvalidTrackingOptionsException
  extends __ServiceException__<_InvalidTrackingOptionsExceptionDetails> {
  name: "InvalidTrackingOptionsException";
}

export interface _InvalidTrackingOptionsExceptionDetails {}
