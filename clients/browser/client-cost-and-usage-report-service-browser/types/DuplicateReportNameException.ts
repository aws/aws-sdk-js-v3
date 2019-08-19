import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A report with the specified name already exists in the account. Specify a different report name.</p>
 */
export interface DuplicateReportNameException
  extends __ServiceException__<_DuplicateReportNameExceptionDetails> {
  name: "DuplicateReportNameException";
}

export interface _DuplicateReportNameExceptionDetails {
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}
