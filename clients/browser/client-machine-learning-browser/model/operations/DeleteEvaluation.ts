import { DeleteEvaluationInput } from "../shapes/DeleteEvaluationInput";
import { DeleteEvaluationOutput } from "../shapes/DeleteEvaluationOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEvaluation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEvaluation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEvaluationInput
  },
  output: {
    shape: DeleteEvaluationOutput
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
