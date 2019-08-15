import { GetApplicationDateRangeKpiInput } from "../shapes/GetApplicationDateRangeKpiInput";
import { GetApplicationDateRangeKpiOutput } from "../shapes/GetApplicationDateRangeKpiOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
