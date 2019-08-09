import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified <a>Facet</a> could not be found.</p>
 */
export interface FacetNotFoundException
  extends __ServiceException__<_FacetNotFoundExceptionDetails> {
  name: "FacetNotFoundException";
}

export interface _FacetNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
