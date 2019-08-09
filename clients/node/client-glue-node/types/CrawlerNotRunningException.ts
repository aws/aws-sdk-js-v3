import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified crawler is not running.</p>
 */
export interface CrawlerNotRunningException
  extends __ServiceException__<_CrawlerNotRunningExceptionDetails> {
  name: "CrawlerNotRunningException";
}

export interface _CrawlerNotRunningExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
