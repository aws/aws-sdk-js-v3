import { UpdateLayerInput } from "./UpdateLayerInput";
import { UpdateLayerOutput } from "./UpdateLayerOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
