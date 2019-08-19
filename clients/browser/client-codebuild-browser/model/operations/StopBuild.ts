import { StopBuildInput } from "../shapes/StopBuildInput";
import { StopBuildOutput } from "../shapes/StopBuildOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
