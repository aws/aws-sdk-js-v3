import { GetDomainStatisticsReportInput } from "./GetDomainStatisticsReportInput";
import { GetDomainStatisticsReportOutput } from "./GetDomainStatisticsReportOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainStatisticsReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainStatisticsReport",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard/statistics-report/{Domain}"
  },
  input: {
    shape: GetDomainStatisticsReportInput
  },
  output: {
    shape: GetDomainStatisticsReportOutput
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
