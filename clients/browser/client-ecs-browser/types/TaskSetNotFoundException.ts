import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified task set could not be found. You can view your available container instances with <a>DescribeTaskSets</a>. Task sets are specific to each cluster, service and Region.</p>
 */
export interface TaskSetNotFoundException
  extends __ServiceException__<_TaskSetNotFoundExceptionDetails> {
  name: "TaskSetNotFoundException";
}

export interface _TaskSetNotFoundExceptionDetails {}
