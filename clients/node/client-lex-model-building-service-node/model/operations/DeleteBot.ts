import { DeleteBotInput } from "../shapes/DeleteBotInput";
import { DeleteBotOutput } from "../shapes/DeleteBotOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBot",
  http: {
    method: "DELETE",
    requestUri: "/bots/{name}"
  },
  input: {
    shape: DeleteBotInput
  },
  output: {
    shape: DeleteBotOutput
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
