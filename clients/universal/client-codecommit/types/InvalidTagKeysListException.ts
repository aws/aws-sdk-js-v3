import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The list of tags is not valid.</p>
 */
export interface InvalidTagKeysListException
  extends __ServiceException__<_InvalidTagKeysListExceptionDetails> {
  name: "InvalidTagKeysListException";
}

export interface _InvalidTagKeysListExceptionDetails {}
