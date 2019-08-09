import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.</p>
 */
export interface DirectoryDeletedException
  extends __ServiceException__<_DirectoryDeletedExceptionDetails> {
  name: "DirectoryDeletedException";
}

export interface _DirectoryDeletedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
