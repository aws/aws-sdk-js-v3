import { DeleteBotChannelAssociationInput } from "./DeleteBotChannelAssociationInput";
import { DeleteBotChannelAssociationOutput } from "./DeleteBotChannelAssociationOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
