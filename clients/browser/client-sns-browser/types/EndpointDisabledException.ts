import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception error indicating endpoint disabled.</p>
 */
export interface EndpointDisabledException
  extends __ServiceException__<_EndpointDisabledExceptionDetails> {
  name: "EndpointDisabledException";
}

export interface _EndpointDisabledExceptionDetails {
  /**
   * <p>Message for endpoint disabled.</p>
   */
  message?: string;
}
