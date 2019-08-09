import { StopBuildInput } from "./StopBuildInput";
import { StopBuildOutput } from "./StopBuildOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopBuildInput
  },
  output: {
    shape: StopBuildOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
