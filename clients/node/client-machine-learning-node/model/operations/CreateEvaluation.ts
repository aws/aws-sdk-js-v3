import { CreateEvaluationInput } from "../shapes/CreateEvaluationInput";
import { CreateEvaluationOutput } from "../shapes/CreateEvaluationOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateEvaluation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEvaluation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEvaluationInput
  },
  output: {
    shape: CreateEvaluationOutput
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
