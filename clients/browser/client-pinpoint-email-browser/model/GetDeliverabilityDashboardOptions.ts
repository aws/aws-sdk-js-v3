import { GetDeliverabilityDashboardOptionsInput } from "./GetDeliverabilityDashboardOptionsInput";
import { GetDeliverabilityDashboardOptionsOutput } from "./GetDeliverabilityDashboardOptionsOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
