import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find the requested resource. Check the name and try your request again.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
