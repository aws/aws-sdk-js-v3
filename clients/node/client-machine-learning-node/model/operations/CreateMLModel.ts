import { CreateMLModelInput } from "../shapes/CreateMLModelInput";
import { CreateMLModelOutput } from "../shapes/CreateMLModelOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMLModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMLModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateMLModelInput
  },
  output: {
    shape: CreateMLModelOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    },
    {
      shape: IdempotentParameterMismatchException
    }
  ]
};
