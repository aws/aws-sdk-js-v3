import { UpdateCampaignInput } from "../shapes/UpdateCampaignInput";
import { UpdateCampaignOutput } from "../shapes/UpdateCampaignOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCampaign",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/campaigns/{campaign-id}"
  },
  input: {
    shape: UpdateCampaignInput
  },
  output: {
    shape: UpdateCampaignOutput
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
