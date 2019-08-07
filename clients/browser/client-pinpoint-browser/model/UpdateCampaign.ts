import { UpdateCampaignInput } from "./UpdateCampaignInput";
import { UpdateCampaignOutput } from "./UpdateCampaignOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
