import { ListMetricsInput } from "../shapes/ListMetricsInput";
import { ListMetricsOutput } from "../shapes/ListMetricsOutput";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMetrics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMetrics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListMetricsInput
  },
  output: {
    shape: ListMetricsOutput,
    resultWrapper: "ListMetricsResult"
  },
  errors: [
    {
      shape: InternalServiceFault
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
