import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A reference name is required, but none was provided.</p>
 */
export interface ReferenceNameRequiredException
  extends __ServiceException__<_ReferenceNameRequiredExceptionDetails> {
  name: "ReferenceNameRequiredException";
}

export interface _ReferenceNameRequiredExceptionDetails {}
