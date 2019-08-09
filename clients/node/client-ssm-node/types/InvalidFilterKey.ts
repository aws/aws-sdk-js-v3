import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified key is not valid.</p>
 */
export interface InvalidFilterKey
  extends __ServiceException__<_InvalidFilterKeyDetails> {
  name: "InvalidFilterKey";
}

export interface _InvalidFilterKeyDetails {}
