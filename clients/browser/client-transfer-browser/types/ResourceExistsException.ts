import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource does not exist.</p>
 */
export interface ResourceExistsException
  extends __ServiceException__<_ResourceExistsExceptionDetails> {
  name: "ResourceExistsException";
}

export interface _ResourceExistsExceptionDetails {
  /**
   * _Message shape
   */
  Message: string;

  /**
   * _Resource shape
   */
  Resource: string;

  /**
   * _ResourceType shape
   */
  ResourceType: string;
}
