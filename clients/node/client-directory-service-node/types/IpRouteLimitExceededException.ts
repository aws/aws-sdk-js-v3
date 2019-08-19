import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.</p>
 */
export interface IpRouteLimitExceededException
  extends __ServiceException__<_IpRouteLimitExceededExceptionDetails> {
  name: "IpRouteLimitExceededException";
}

export interface _IpRouteLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
