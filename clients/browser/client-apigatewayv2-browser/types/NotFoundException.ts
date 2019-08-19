import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified in the request was not found. See the message
 *  field for more information.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;
}
