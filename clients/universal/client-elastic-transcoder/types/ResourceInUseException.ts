import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource you are attempting to change is in use. For example, you are attempting to delete a pipeline that is currently in use.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {}
