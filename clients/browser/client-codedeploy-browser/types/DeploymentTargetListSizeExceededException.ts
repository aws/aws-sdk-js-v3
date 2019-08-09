import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The maximum number of targets that can be associated with an Amazon ECS or AWS Lambda deployment was exceeded. The target list of both types of deployments must have exactly one item. This exception does not apply to EC2/On-premises deployments. </p>
 */
export interface DeploymentTargetListSizeExceededException
  extends __ServiceException__<
    _DeploymentTargetListSizeExceededExceptionDetails
  > {
  name: "DeploymentTargetListSizeExceededException";
}

export interface _DeploymentTargetListSizeExceededExceptionDetails {}
