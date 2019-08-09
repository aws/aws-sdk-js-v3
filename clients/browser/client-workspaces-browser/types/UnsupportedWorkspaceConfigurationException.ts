import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. </p>
 */
export interface UnsupportedWorkspaceConfigurationException
  extends __ServiceException__<
    _UnsupportedWorkspaceConfigurationExceptionDetails
  > {
  name: "UnsupportedWorkspaceConfigurationException";
}

export interface _UnsupportedWorkspaceConfigurationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
