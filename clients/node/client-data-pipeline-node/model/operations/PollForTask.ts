import { PollForTaskInput } from "../shapes/PollForTaskInput";
import { PollForTaskOutput } from "../shapes/PollForTaskOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TaskNotFoundException } from "../shapes/TaskNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PollForTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForTaskInput
  },
  output: {
    shape: PollForTaskOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TaskNotFoundException
    }
  ]
};
