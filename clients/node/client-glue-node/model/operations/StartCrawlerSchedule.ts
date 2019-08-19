import { StartCrawlerScheduleInput } from "../shapes/StartCrawlerScheduleInput";
import { StartCrawlerScheduleOutput } from "../shapes/StartCrawlerScheduleOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { SchedulerRunningException } from "../shapes/SchedulerRunningException";
import { SchedulerTransitioningException } from "../shapes/SchedulerTransitioningException";
import { NoScheduleException } from "../shapes/NoScheduleException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartCrawlerSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartCrawlerSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartCrawlerScheduleInput
  },
  output: {
    shape: StartCrawlerScheduleOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: SchedulerRunningException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: NoScheduleException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
