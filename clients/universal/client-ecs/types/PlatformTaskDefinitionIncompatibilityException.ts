import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified platform version does not satisfy the task definition's required capabilities.</p>
 */
export interface PlatformTaskDefinitionIncompatibilityException
  extends __ServiceException__<
    _PlatformTaskDefinitionIncompatibilityExceptionDetails
  > {
  name: "PlatformTaskDefinitionIncompatibilityException";
}

export interface _PlatformTaskDefinitionIncompatibilityExceptionDetails {}
