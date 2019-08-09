import { GetDeliverabilityTestReportInput } from "./GetDeliverabilityTestReportInput";
import { GetDeliverabilityTestReportOutput } from "./GetDeliverabilityTestReportOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
