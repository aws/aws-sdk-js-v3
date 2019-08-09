import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
 */
export interface InvalidRelativePath
  extends __ServiceException__<_InvalidRelativePathDetails> {
  name: "InvalidRelativePath";
}

export interface _InvalidRelativePathDetails {
  /**
   * _string shape
   */
  Message?: string;
}
