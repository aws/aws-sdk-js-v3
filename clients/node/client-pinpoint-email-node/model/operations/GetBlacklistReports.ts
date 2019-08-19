import { GetBlacklistReportsInput } from "../shapes/GetBlacklistReportsInput";
import { GetBlacklistReportsOutput } from "../shapes/GetBlacklistReportsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBlacklistReports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBlacklistReports",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard/blacklist-report"
  },
  input: {
    shape: GetBlacklistReportsInput
  },
  output: {
    shape: GetBlacklistReportsOutput
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
