import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface BucketAlreadyOwnedByYou
  extends __ServiceException__<_BucketAlreadyOwnedByYouDetails> {
  name: "BucketAlreadyOwnedByYou";
}

export interface _BucketAlreadyOwnedByYouDetails {}
