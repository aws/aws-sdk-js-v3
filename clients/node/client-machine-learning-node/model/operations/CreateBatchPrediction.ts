import { CreateBatchPredictionInput } from "../shapes/CreateBatchPredictionInput";
import { CreateBatchPredictionOutput } from "../shapes/CreateBatchPredictionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBatchPrediction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBatchPrediction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBatchPredictionInput
  },
  output: {
    shape: CreateBatchPredictionOutput
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
