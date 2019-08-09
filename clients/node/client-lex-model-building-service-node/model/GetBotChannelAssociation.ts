import { GetBotChannelAssociationInput } from "./GetBotChannelAssociationInput";
import { GetBotChannelAssociationOutput } from "./GetBotChannelAssociationOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
