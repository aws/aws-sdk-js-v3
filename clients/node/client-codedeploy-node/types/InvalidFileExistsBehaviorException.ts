import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid fileExistsBehavior option was specified to determine how AWS CodeDeploy handles files or directories that already exist in a deployment target location, but weren't part of the previous successful deployment. Valid values include "DISALLOW," "OVERWRITE," and "RETAIN."</p>
 */
export interface InvalidFileExistsBehaviorException
  extends __ServiceException__<_InvalidFileExistsBehaviorExceptionDetails> {
  name: "InvalidFileExistsBehaviorException";
}

export interface _InvalidFileExistsBehaviorExceptionDetails {}
