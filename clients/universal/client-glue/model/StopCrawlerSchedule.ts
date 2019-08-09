import { StopCrawlerScheduleInput } from "./StopCrawlerScheduleInput";
import { StopCrawlerScheduleOutput } from "./StopCrawlerScheduleOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { SchedulerNotRunningException } from "./SchedulerNotRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
