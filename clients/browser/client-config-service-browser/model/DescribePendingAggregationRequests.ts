import { DescribePendingAggregationRequestsInput } from "./DescribePendingAggregationRequestsInput";
import { DescribePendingAggregationRequestsOutput } from "./DescribePendingAggregationRequestsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
