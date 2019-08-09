import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs when an invalid lookup attribute is specified.</p>
 */
export interface InvalidLookupAttributesException
  extends __ServiceException__<_InvalidLookupAttributesExceptionDetails> {
  name: "InvalidLookupAttributesException";
}

export interface _InvalidLookupAttributesExceptionDetails {}
