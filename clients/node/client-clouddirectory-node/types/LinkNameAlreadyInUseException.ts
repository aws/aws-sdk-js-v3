import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
 */
export interface LinkNameAlreadyInUseException
  extends __ServiceException__<_LinkNameAlreadyInUseExceptionDetails> {
  name: "LinkNameAlreadyInUseException";
}

export interface _LinkNameAlreadyInUseExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
