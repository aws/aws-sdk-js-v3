import { GetCampaignVersionsInput } from "../shapes/GetCampaignVersionsInput";
import { GetCampaignVersionsOutput } from "../shapes/GetCampaignVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCampaignVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCampaignVersions",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/campaigns/{campaign-id}/versions"
  },
  input: {
    shape: GetCampaignVersionsInput
  },
  output: {
    shape: GetCampaignVersionsOutput
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
