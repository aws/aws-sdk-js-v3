import { GetCampaignVersionsInput } from "./GetCampaignVersionsInput";
import { GetCampaignVersionsOutput } from "./GetCampaignVersionsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
