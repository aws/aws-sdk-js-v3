import { DeleteLayerInput } from "./DeleteLayerInput";
import { DeleteLayerOutput } from "./DeleteLayerOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
