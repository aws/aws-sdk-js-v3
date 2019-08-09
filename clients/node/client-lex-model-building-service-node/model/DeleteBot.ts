import { DeleteBotInput } from "./DeleteBotInput";
import { DeleteBotOutput } from "./DeleteBotOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
