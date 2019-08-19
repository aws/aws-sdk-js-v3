import { GetScalingPlanResourceForecastDataInput } from "../shapes/GetScalingPlanResourceForecastDataInput";
import { GetScalingPlanResourceForecastDataOutput } from "../shapes/GetScalingPlanResourceForecastDataOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetScalingPlanResourceForecastData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetScalingPlanResourceForecastData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetScalingPlanResourceForecastDataInput
  },
  output: {
    shape: GetScalingPlanResourceForecastDataOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InternalServiceException
    }
  ]
};
