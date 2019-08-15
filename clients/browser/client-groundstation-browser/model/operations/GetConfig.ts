import { GetConfigInput } from "../shapes/GetConfigInput";
import { GetConfigOutput } from "../shapes/GetConfigOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConfig",
  http: {
    method: "GET",
    requestUri: "/config/{configType}/{configId}"
  },
  input: {
    shape: GetConfigInput
  },
  output: {
    shape: GetConfigOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
