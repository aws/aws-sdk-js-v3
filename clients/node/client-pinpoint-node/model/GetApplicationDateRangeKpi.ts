import { GetApplicationDateRangeKpiInput } from "./GetApplicationDateRangeKpiInput";
import { GetApplicationDateRangeKpiOutput } from "./GetApplicationDateRangeKpiOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetApplicationDateRangeKpi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplicationDateRangeKpi",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/kpis/daterange/{kpi-name}"
  },
  input: {
    shape: GetApplicationDateRangeKpiInput
  },
  output: {
    shape: GetApplicationDateRangeKpiOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
