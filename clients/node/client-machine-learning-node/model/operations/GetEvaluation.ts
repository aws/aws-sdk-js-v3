import { GetEvaluationInput } from "../shapes/GetEvaluationInput";
import { GetEvaluationOutput } from "../shapes/GetEvaluationOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEvaluation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEvaluation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetEvaluationInput
  },
  output: {
    shape: GetEvaluationOutput
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
