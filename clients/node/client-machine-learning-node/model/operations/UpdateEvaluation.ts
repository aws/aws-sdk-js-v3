import { UpdateEvaluationInput } from "../shapes/UpdateEvaluationInput";
import { UpdateEvaluationOutput } from "../shapes/UpdateEvaluationOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEvaluation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEvaluation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEvaluationInput
  },
  output: {
    shape: UpdateEvaluationOutput
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
