import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Unable to delete the Amazon S3 source bundle associated with the application version. The application version was deleted successfully.</p>
 */
export interface SourceBundleDeletionException
  extends __ServiceException__<_SourceBundleDeletionExceptionDetails> {
  name: "SourceBundleDeletionException";
}

export interface _SourceBundleDeletionExceptionDetails {}
