import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action.</p>
 */
export interface ExpiredIteratorException
  extends __ServiceException__<_ExpiredIteratorExceptionDetails> {
  name: "ExpiredIteratorException";
}

export interface _ExpiredIteratorExceptionDetails {
  /**
   * <p>The provided iterator exceeds the maximum age allowed.</p>
   */
  message?: string;
}
