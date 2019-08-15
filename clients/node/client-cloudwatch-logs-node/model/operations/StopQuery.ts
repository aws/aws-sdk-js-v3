import { StopQueryInput } from "../shapes/StopQueryInput";
import { StopQueryOutput } from "../shapes/StopQueryOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
