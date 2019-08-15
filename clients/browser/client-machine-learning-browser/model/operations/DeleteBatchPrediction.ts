import { DeleteBatchPredictionInput } from "../shapes/DeleteBatchPredictionInput";
import { DeleteBatchPredictionOutput } from "../shapes/DeleteBatchPredictionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBatchPrediction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBatchPrediction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBatchPredictionInput
  },
  output: {
    shape: DeleteBatchPredictionOutput
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
