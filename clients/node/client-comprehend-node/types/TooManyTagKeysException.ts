import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per resource).</p>
 */
export interface TooManyTagKeysException
  extends __ServiceException__<_TooManyTagKeysExceptionDetails> {
  name: "TooManyTagKeysException";
}

export interface _TooManyTagKeysExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
