import { UpdateConfigInput } from "../shapes/UpdateConfigInput";
import { UpdateConfigOutput } from "../shapes/UpdateConfigOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfig",
  http: {
    method: "PUT",
    requestUri: "/config/{configType}/{configId}"
  },
  input: {
    shape: UpdateConfigInput
  },
  output: {
    shape: UpdateConfigOutput
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
