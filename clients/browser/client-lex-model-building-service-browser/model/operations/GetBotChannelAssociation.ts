import { GetBotChannelAssociationInput } from "../shapes/GetBotChannelAssociationInput";
import { GetBotChannelAssociationOutput } from "../shapes/GetBotChannelAssociationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBotChannelAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBotChannelAssociation",
  http: {
    method: "GET",
    requestUri: "/bots/{botName}/aliases/{aliasName}/channels/{name}"
  },
  input: {
    shape: GetBotChannelAssociationInput
  },
  output: {
    shape: GetBotChannelAssociationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};
