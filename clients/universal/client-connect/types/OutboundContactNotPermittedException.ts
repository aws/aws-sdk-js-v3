import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The contact is not permitted.</p>
 */
export interface OutboundContactNotPermittedException
  extends __ServiceException__<_OutboundContactNotPermittedExceptionDetails> {
  name: "OutboundContactNotPermittedException";
}

export interface _OutboundContactNotPermittedExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
