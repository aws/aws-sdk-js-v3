import { UpdateMLModelInput } from "./UpdateMLModelInput";
import { UpdateMLModelOutput } from "./UpdateMLModelOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
