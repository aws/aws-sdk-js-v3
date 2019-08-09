import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
 */
export interface FacetValidationException
  extends __ServiceException__<_FacetValidationExceptionDetails> {
  name: "FacetValidationException";
}

export interface _FacetValidationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
