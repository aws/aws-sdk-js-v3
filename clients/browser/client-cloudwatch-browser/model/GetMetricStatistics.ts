import { GetMetricStatisticsInput } from "./GetMetricStatisticsInput";
import { GetMetricStatisticsOutput } from "./GetMetricStatisticsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InternalServiceFault } from "./InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMetricStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMetricStatistics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMetricStatisticsInput
  },
  output: {
    shape: GetMetricStatisticsOutput,
    resultWrapper: "GetMetricStatisticsResult"
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: InternalServiceFault
    }
  ]
};
