import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Data was not syntactically valid JSON.</p>
 */
export interface InvalidFormatFault
  extends __ServiceException__<_InvalidFormatFaultDetails> {
  name: "InvalidFormatFault";
}

export interface _InvalidFormatFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
