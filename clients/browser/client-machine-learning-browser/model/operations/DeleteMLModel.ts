import { DeleteMLModelInput } from "../shapes/DeleteMLModelInput";
import { DeleteMLModelOutput } from "../shapes/DeleteMLModelOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMLModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMLModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMLModelInput
  },
  output: {
    shape: DeleteMLModelOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
