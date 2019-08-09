import { GetCostForecastInput } from "./GetCostForecastInput";
import { GetCostForecastOutput } from "./GetCostForecastOutput";
import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCostForecast: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCostForecast",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCostForecastInput
  },
  output: {
    shape: GetCostForecastOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: DataUnavailableException
    }
  ]
};
