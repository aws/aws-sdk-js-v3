import { ListDeliverabilityTestReportsInput } from "../shapes/ListDeliverabilityTestReportsInput";
import { ListDeliverabilityTestReportsOutput } from "../shapes/ListDeliverabilityTestReportsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeliverabilityTestReports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeliverabilityTestReports",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard/test-reports"
  },
  input: {
    shape: ListDeliverabilityTestReportsInput
  },
  output: {
    shape: ListDeliverabilityTestReportsOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    }
  ]
};
