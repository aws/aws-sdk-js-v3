import { UpdateConfigInput } from "./UpdateConfigInput";
import { UpdateConfigOutput } from "./UpdateConfigOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
