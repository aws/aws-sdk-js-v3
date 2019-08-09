import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A generic service exception has occurred.</p>
 */
export interface ElasticBeanstalkServiceException
  extends __ServiceException__<_ElasticBeanstalkServiceExceptionDetails> {
  name: "ElasticBeanstalkServiceException";
}

export interface _ElasticBeanstalkServiceExceptionDetails {
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}
