import { ListDeliverabilityTestReportsInput } from "./ListDeliverabilityTestReportsInput";
import { ListDeliverabilityTestReportsOutput } from "./ListDeliverabilityTestReportsOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
