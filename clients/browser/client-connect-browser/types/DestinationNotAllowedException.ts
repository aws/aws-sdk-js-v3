import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export interface DestinationNotAllowedException
  extends __ServiceException__<_DestinationNotAllowedExceptionDetails> {
  name: "DestinationNotAllowedException";
}

export interface _DestinationNotAllowedExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
