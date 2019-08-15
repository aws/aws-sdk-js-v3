import { CreateLayerInput } from "../shapes/CreateLayerInput";
import { CreateLayerOutput } from "../shapes/CreateLayerOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLayer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLayer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLayerInput
  },
  output: {
    shape: CreateLayerOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
