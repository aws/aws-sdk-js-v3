import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This occurs when the provided nextToken is not valid. </p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * <p>Error or informational message that can contain more detail about a nextToken failure. </p>
   */
  Message?: string;
}
