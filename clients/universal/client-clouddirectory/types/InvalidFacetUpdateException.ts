import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.</p>
 */
export interface InvalidFacetUpdateException
  extends __ServiceException__<_InvalidFacetUpdateExceptionDetails> {
  name: "InvalidFacetUpdateException";
}

export interface _InvalidFacetUpdateExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
