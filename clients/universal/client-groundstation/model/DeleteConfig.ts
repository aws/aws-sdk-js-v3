import { DeleteConfigInput } from "./DeleteConfigInput";
import { DeleteConfigOutput } from "./DeleteConfigOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
