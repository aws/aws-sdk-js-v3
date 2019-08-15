import { UpdateLayerInput } from "../shapes/UpdateLayerInput";
import { UpdateLayerOutput } from "../shapes/UpdateLayerOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLayer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLayer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateLayerInput
  },
  output: {
    shape: UpdateLayerOutput
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
