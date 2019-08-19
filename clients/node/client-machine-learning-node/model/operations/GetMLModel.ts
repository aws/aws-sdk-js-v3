import { GetMLModelInput } from "../shapes/GetMLModelInput";
import { GetMLModelOutput } from "../shapes/GetMLModelOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMLModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMLModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMLModelInput
  },
  output: {
    shape: GetMLModelOutput
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
