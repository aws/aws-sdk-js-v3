import { GetUsageForecastInput } from "../shapes/GetUsageForecastInput";
import { GetUsageForecastOutput } from "../shapes/GetUsageForecastOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { UnresolvableUsageUnitException } from "../shapes/UnresolvableUsageUnitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
