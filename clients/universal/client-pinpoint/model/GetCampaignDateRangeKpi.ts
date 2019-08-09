import { GetCampaignDateRangeKpiInput } from "./GetCampaignDateRangeKpiInput";
import { GetCampaignDateRangeKpiOutput } from "./GetCampaignDateRangeKpiOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCampaignDateRangeKpi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCampaignDateRangeKpi",
  http: {
    method: "GET",
    requestUri:
      "/v1/apps/{application-id}/campaigns/{campaign-id}/kpis/daterange/{kpi-name}"
  },
  input: {
    shape: GetCampaignDateRangeKpiInput
  },
  output: {
    shape: GetCampaignDateRangeKpiOutput
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
