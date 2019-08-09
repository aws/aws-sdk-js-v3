import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.</p>
 */
export interface DirectoryAlreadyExistsException
  extends __ServiceException__<_DirectoryAlreadyExistsExceptionDetails> {
  name: "DirectoryAlreadyExistsException";
}

export interface _DirectoryAlreadyExistsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
