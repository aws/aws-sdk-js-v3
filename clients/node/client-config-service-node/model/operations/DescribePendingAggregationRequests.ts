import { DescribePendingAggregationRequestsInput } from "../shapes/DescribePendingAggregationRequestsInput";
import { DescribePendingAggregationRequestsOutput } from "../shapes/DescribePendingAggregationRequestsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePendingAggregationRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePendingAggregationRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePendingAggregationRequestsInput
  },
  output: {
    shape: DescribePendingAggregationRequestsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidLimitException
    }
  ]
};
