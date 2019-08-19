import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified key does not exist.</p>
 */
export interface NoSuchKey extends __ServiceException__<_NoSuchKeyDetails> {
  name: "NoSuchKey";
}

export interface _NoSuchKeyDetails {}
