import { GetUsageForecastInput } from "./GetUsageForecastInput";
import { GetUsageForecastOutput } from "./GetUsageForecastOutput";
import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { UnresolvableUsageUnitException } from "./UnresolvableUsageUnitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUsageForecast: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsageForecast",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUsageForecastInput
  },
  output: {
    shape: GetUsageForecastOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: DataUnavailableException
    },
    {
      shape: UnresolvableUsageUnitException
    }
  ]
};
