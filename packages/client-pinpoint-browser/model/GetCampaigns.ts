import { GetCampaignsInput } from "./GetCampaignsInput";
import { GetCampaignsOutput } from "./GetCampaignsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCampaigns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCampaigns",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/campaigns"
  },
  input: {
    shape: GetCampaignsInput
  },
  output: {
    shape: GetCampaignsOutput
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
