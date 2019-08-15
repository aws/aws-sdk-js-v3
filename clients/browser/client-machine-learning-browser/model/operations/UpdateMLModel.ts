import { UpdateMLModelInput } from "../shapes/UpdateMLModelInput";
import { UpdateMLModelOutput } from "../shapes/UpdateMLModelOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMLModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMLModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMLModelInput
  },
  output: {
    shape: UpdateMLModelOutput
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
