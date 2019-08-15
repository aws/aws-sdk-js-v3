import { GetDeliverabilityDashboardOptionsInput } from "../shapes/GetDeliverabilityDashboardOptionsInput";
import { GetDeliverabilityDashboardOptionsOutput } from "../shapes/GetDeliverabilityDashboardOptionsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeliverabilityDashboardOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeliverabilityDashboardOptions",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard"
  },
  input: {
    shape: GetDeliverabilityDashboardOptionsInput
  },
  output: {
    shape: GetDeliverabilityDashboardOptionsOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    }
  ]
};
