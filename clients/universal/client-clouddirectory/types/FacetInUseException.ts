import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.</p>
 */
export interface FacetInUseException
  extends __ServiceException__<_FacetInUseExceptionDetails> {
  name: "FacetInUseException";
}

export interface _FacetInUseExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
