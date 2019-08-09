import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified crawler is stopping.</p>
 */
export interface CrawlerStoppingException
  extends __ServiceException__<_CrawlerStoppingExceptionDetails> {
  name: "CrawlerStoppingException";
}

export interface _CrawlerStoppingExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
