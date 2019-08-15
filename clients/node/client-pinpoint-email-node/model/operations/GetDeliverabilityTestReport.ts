import { GetDeliverabilityTestReportInput } from "../shapes/GetDeliverabilityTestReportInput";
import { GetDeliverabilityTestReportOutput } from "../shapes/GetDeliverabilityTestReportOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeliverabilityTestReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeliverabilityTestReport",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard/test-reports/{ReportId}"
  },
  input: {
    shape: GetDeliverabilityTestReportInput
  },
  output: {
    shape: GetDeliverabilityTestReportOutput
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
