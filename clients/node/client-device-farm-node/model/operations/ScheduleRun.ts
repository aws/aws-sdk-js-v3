import { ScheduleRunInput } from "../shapes/ScheduleRunInput";
import { ScheduleRunOutput } from "../shapes/ScheduleRunOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { IdempotencyException } from "../shapes/IdempotencyException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ScheduleRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ScheduleRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ScheduleRunInput
  },
  output: {
    shape: ScheduleRunOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: IdempotencyException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
