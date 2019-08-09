import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource you are attempting to create already exists.</p>
 */
export interface ResourceAlreadyExistsFault
  extends __ServiceException__<_ResourceAlreadyExistsFaultDetails> {
  name: "ResourceAlreadyExistsFault";
}

export interface _ResourceAlreadyExistsFaultDetails {
  /**
   * <p/>
   */
  message?: string;

  /**
   * _ResourceArn shape
   */
  resourceArn?: string;
}
