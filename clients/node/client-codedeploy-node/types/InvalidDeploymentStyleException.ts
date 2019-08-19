import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE" and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and "WITHOUT_TRAFFIC_CONTROL."</p>
 */
export interface InvalidDeploymentStyleException
  extends __ServiceException__<_InvalidDeploymentStyleExceptionDetails> {
  name: "InvalidDeploymentStyleException";
}

export interface _InvalidDeploymentStyleExceptionDetails {}
