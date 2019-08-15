import { DeleteBotChannelAssociationInput } from "../shapes/DeleteBotChannelAssociationInput";
import { DeleteBotChannelAssociationOutput } from "../shapes/DeleteBotChannelAssociationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBotChannelAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBotChannelAssociation",
  http: {
    method: "DELETE",
    requestUri: "/bots/{botName}/aliases/{aliasName}/channels/{name}"
  },
  input: {
    shape: DeleteBotChannelAssociationInput
  },
  output: {
    shape: DeleteBotChannelAssociationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
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
