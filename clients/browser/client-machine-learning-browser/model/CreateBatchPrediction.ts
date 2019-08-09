import { CreateBatchPredictionInput } from "./CreateBatchPredictionInput";
import { CreateBatchPredictionOutput } from "./CreateBatchPredictionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
