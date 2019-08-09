import { StopQueryInput } from "./StopQueryInput";
import { StopQueryOutput } from "./StopQueryOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopQueryInput
  },
  output: {
    shape: StopQueryOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
