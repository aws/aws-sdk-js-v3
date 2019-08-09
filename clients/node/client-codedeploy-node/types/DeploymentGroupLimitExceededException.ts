import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The deployment groups limit was exceeded.</p>
 */
export interface DeploymentGroupLimitExceededException
  extends __ServiceException__<_DeploymentGroupLimitExceededExceptionDetails> {
  name: "DeploymentGroupLimitExceededException";
}

export interface _DeploymentGroupLimitExceededExceptionDetails {}
