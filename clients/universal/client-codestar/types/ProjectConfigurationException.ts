import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Project configuration information is required but not specified.</p>
 */
export interface ProjectConfigurationException
  extends __ServiceException__<_ProjectConfigurationExceptionDetails> {
  name: "ProjectConfigurationException";
}

export interface _ProjectConfigurationExceptionDetails {}
