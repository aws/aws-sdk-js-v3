import { GetTimeSeriesServiceStatisticsInput } from "./GetTimeSeriesServiceStatisticsInput";
import { GetTimeSeriesServiceStatisticsOutput } from "./GetTimeSeriesServiceStatisticsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTimeSeriesServiceStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTimeSeriesServiceStatistics",
  http: {
    method: "POST",
    requestUri: "/TimeSeriesServiceStatistics"
  },
  input: {
    shape: GetTimeSeriesServiceStatisticsInput
  },
  output: {
    shape: GetTimeSeriesServiceStatisticsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
