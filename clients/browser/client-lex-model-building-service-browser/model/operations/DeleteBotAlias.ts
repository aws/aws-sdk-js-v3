import { DeleteBotAliasInput } from "../shapes/DeleteBotAliasInput";
import { DeleteBotAliasOutput } from "../shapes/DeleteBotAliasOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBotAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBotAlias",
  http: {
    method: "DELETE",
    requestUri: "/bots/{botName}/aliases/{name}"
  },
  input: {
    shape: DeleteBotAliasInput
  },
  output: {
    shape: DeleteBotAliasOutput
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
    },
    {
      shape: ResourceInUseException
    }
  ]
};
