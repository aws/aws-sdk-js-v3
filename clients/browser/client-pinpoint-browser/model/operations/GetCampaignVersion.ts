import { GetCampaignVersionInput } from "../shapes/GetCampaignVersionInput";
import { GetCampaignVersionOutput } from "../shapes/GetCampaignVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCampaignVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCampaignVersion",
  http: {
    method: "GET",
    requestUri:
      "/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}"
  },
  input: {
    shape: GetCampaignVersionInput
  },
  output: {
    shape: GetCampaignVersionOutput
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
