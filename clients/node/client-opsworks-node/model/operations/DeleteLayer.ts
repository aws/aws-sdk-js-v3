import { DeleteLayerInput } from "../shapes/DeleteLayerInput";
import { DeleteLayerOutput } from "../shapes/DeleteLayerOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLayer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLayer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLayerInput
  },
  output: {
    shape: DeleteLayerOutput
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
