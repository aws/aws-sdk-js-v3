import { DeleteBotVersionInput } from "./DeleteBotVersionInput";
import { DeleteBotVersionOutput } from "./DeleteBotVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
