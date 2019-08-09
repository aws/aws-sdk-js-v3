import { ListMetricsInput } from "./ListMetricsInput";
import { ListMetricsOutput } from "./ListMetricsOutput";
import { InternalServiceFault } from "./InternalServiceFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
