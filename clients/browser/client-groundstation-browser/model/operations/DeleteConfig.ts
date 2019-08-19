import { DeleteConfigInput } from "../shapes/DeleteConfigInput";
import { DeleteConfigOutput } from "../shapes/DeleteConfigOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfig",
  http: {
    method: "DELETE",
    requestUri: "/config/{configType}/{configId}"
  },
  input: {
    shape: DeleteConfigInput
  },
  output: {
    shape: DeleteConfigOutput
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
