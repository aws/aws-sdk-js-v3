import { StartBuildInput } from "./StartBuildInput";
import { StartBuildOutput } from "./StartBuildOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccountLimitExceededException } from "./AccountLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
