import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
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
