import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export interface CrawlerRunningException
  extends __ServiceException__<_CrawlerRunningExceptionDetails> {
  name: "CrawlerRunningException";
}

export interface _CrawlerRunningExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
