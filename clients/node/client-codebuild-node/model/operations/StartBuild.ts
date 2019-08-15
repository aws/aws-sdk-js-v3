import { StartBuildInput } from "../shapes/StartBuildInput";
import { StartBuildOutput } from "../shapes/StartBuildOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccountLimitExceededException } from "../shapes/AccountLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartBuildInput
  },
  output: {
    shape: StartBuildOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccountLimitExceededException
    }
  ]
};
