import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot delete the platform version because there are still environments running on it.</p>
 */
export interface PlatformVersionStillReferencedException
  extends __ServiceException__<
    _PlatformVersionStillReferencedExceptionDetails
  > {
  name: "PlatformVersionStillReferencedException";
}

export interface _PlatformVersionStillReferencedExceptionDetails {}
