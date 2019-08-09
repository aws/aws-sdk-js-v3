import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The path provided for data repository export isn't valid.</p>
 */
export interface InvalidExportPath
  extends __ServiceException__<_InvalidExportPathDetails> {
  name: "InvalidExportPath";
}

export interface _InvalidExportPathDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
