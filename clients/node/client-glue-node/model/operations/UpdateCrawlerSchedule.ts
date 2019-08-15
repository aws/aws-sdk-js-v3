import { UpdateCrawlerScheduleInput } from "../shapes/UpdateCrawlerScheduleInput";
import { UpdateCrawlerScheduleOutput } from "../shapes/UpdateCrawlerScheduleOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { SchedulerTransitioningException } from "../shapes/SchedulerTransitioningException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCrawlerSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCrawlerSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCrawlerScheduleInput
  },
  output: {
    shape: UpdateCrawlerScheduleOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: VersionMismatchException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
