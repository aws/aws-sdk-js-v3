import { GetMetricStatisticsInput } from "../shapes/GetMetricStatisticsInput";
import { GetMetricStatisticsOutput } from "../shapes/GetMetricStatisticsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
