import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.</p>
 */
export interface BucketAlreadyExists
  extends __ServiceException__<_BucketAlreadyExistsDetails> {
  name: "BucketAlreadyExists";
}

export interface _BucketAlreadyExistsDetails {}
