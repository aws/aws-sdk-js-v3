import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The path provided for data repository import isn't valid.</p>
 */
export interface InvalidImportPath
  extends __ServiceException__<_InvalidImportPathDetails> {
  name: "InvalidImportPath";
}

export interface _InvalidImportPathDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
