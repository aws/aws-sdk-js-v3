import { GetCampaignInput } from "./GetCampaignInput";
import { GetCampaignOutput } from "./GetCampaignOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCampaign",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/campaigns/{campaign-id}"
  },
  input: {
    shape: GetCampaignInput
  },
  output: {
    shape: GetCampaignOutput
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
