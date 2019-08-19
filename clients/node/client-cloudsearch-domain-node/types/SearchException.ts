import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Information about any problems encountered while processing a search request.</p>
 */
export interface SearchException
  extends __ServiceException__<_SearchExceptionDetails> {
  name: "SearchException";
}

export interface _SearchExceptionDetails {
  /**
   * <p>A description of the error returned by the search service.</p>
   */
  message?: string;
}
