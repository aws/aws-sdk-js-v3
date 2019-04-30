import { CreateCampaignInput } from "./CreateCampaignInput";
import { CreateCampaignOutput } from "./CreateCampaignOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
