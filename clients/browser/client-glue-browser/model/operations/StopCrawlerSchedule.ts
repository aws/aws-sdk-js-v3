import { StopCrawlerScheduleInput } from "../shapes/StopCrawlerScheduleInput";
import { StopCrawlerScheduleOutput } from "../shapes/StopCrawlerScheduleOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { SchedulerNotRunningException } from "../shapes/SchedulerNotRunningException";
import { SchedulerTransitioningException } from "../shapes/SchedulerTransitioningException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopCrawlerSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopCrawlerSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopCrawlerScheduleInput
  },
  output: {
    shape: StopCrawlerScheduleOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: SchedulerNotRunningException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
