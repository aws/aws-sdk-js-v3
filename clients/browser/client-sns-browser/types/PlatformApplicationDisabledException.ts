import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception error indicating platform application disabled.</p>
 */
export interface PlatformApplicationDisabledException
  extends __ServiceException__<_PlatformApplicationDisabledExceptionDetails> {
  name: "PlatformApplicationDisabledException";
}

export interface _PlatformApplicationDisabledExceptionDetails {
  /**
   * <p>Message for platform application disabled.</p>
   */
  message?: string;
}
