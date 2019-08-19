import { DeleteCampaignInput } from "../shapes/DeleteCampaignInput";
import { DeleteCampaignOutput } from "../shapes/DeleteCampaignOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCampaign",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/campaigns/{campaign-id}"
  },
  input: {
    shape: DeleteCampaignInput
  },
  output: {
    shape: DeleteCampaignOutput
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
