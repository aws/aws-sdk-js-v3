import { CreateEvaluationInput } from "./CreateEvaluationInput";
import { CreateEvaluationOutput } from "./CreateEvaluationOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
