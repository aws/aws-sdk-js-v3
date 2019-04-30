import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified multipart upload does not exist.</p>
 */
export interface NoSuchUpload
  extends __ServiceException__<_NoSuchUploadDetails> {
  name: "NoSuchUpload";
}

export interface _NoSuchUploadDetails {}
