import { DescribeBatchPredictionsInput } from "./DescribeBatchPredictionsInput";
import { DescribeBatchPredictionsOutput } from "./DescribeBatchPredictionsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeBatchPredictions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBatchPredictions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBatchPredictionsInput
  },
  output: {
    shape: DescribeBatchPredictionsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    }
  ]
};
