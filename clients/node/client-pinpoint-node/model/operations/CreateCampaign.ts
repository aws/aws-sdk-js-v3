import { CreateCampaignInput } from "../shapes/CreateCampaignInput";
import { CreateCampaignOutput } from "../shapes/CreateCampaignOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCampaign",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/campaigns"
  },
  input: {
    shape: CreateCampaignInput
  },
  output: {
    shape: CreateCampaignOutput
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
