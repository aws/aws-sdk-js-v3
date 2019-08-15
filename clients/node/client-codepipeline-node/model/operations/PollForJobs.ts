import { PollForJobsInput } from "../shapes/PollForJobsInput";
import { PollForJobsOutput } from "../shapes/PollForJobsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ActionTypeNotFoundException } from "../shapes/ActionTypeNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PollForJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForJobsInput
  },
  output: {
    shape: PollForJobsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ActionTypeNotFoundException
    }
  ]
};
