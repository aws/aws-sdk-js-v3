import { DeleteBotAliasInput } from "./DeleteBotAliasInput";
import { DeleteBotAliasOutput } from "./DeleteBotAliasOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
