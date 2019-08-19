import { GetCampaignsInput } from "../shapes/GetCampaignsInput";
import { GetCampaignsOutput } from "../shapes/GetCampaignsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
