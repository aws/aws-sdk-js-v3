import { GetConfigInput } from "./GetConfigInput";
import { GetConfigOutput } from "./GetConfigOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
