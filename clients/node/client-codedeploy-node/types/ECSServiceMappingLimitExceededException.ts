import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The Amazon ECS service is associated with more than one deployment groups. An Amazon ECS service can be associated with only one deployment group. </p>
 */
export interface ECSServiceMappingLimitExceededException
  extends __ServiceException__<
    _ECSServiceMappingLimitExceededExceptionDetails
  > {
  name: "ECSServiceMappingLimitExceededException";
}

export interface _ECSServiceMappingLimitExceededExceptionDetails {}
