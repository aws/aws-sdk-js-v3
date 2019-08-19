import { PollForThirdPartyJobsInput } from "../shapes/PollForThirdPartyJobsInput";
import { PollForThirdPartyJobsOutput } from "../shapes/PollForThirdPartyJobsOutput";
import { ActionTypeNotFoundException } from "../shapes/ActionTypeNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PollForThirdPartyJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForThirdPartyJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForThirdPartyJobsInput
  },
  output: {
    shape: PollForThirdPartyJobsOutput
  },
  errors: [
    {
      shape: ActionTypeNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
