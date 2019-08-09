import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for InternalServerErrorException
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
