import { DeleteBotVersionInput } from "../shapes/DeleteBotVersionInput";
import { DeleteBotVersionOutput } from "../shapes/DeleteBotVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBotVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBotVersion",
  http: {
    method: "DELETE",
    requestUri: "/bots/{name}/versions/{version}"
  },
  input: {
    shape: DeleteBotVersionInput
  },
  output: {
    shape: DeleteBotVersionOutput
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
