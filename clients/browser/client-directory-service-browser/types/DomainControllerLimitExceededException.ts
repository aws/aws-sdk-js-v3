import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.</p>
 */
export interface DomainControllerLimitExceededException
  extends __ServiceException__<_DomainControllerLimitExceededExceptionDetails> {
  name: "DomainControllerLimitExceededException";
}

export interface _DomainControllerLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
