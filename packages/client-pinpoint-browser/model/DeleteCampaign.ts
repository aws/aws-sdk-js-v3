import { DeleteCampaignInput } from "./DeleteCampaignInput";
import { DeleteCampaignOutput } from "./DeleteCampaignOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
