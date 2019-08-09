import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A facet with the same name already exists.</p>
 */
export interface FacetAlreadyExistsException
  extends __ServiceException__<_FacetAlreadyExistsExceptionDetails> {
  name: "FacetAlreadyExistsException";
}

export interface _FacetAlreadyExistsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
