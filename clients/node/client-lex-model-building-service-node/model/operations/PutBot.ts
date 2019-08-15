import { PutBotInput } from "../shapes/PutBotInput";
import { PutBotOutput } from "../shapes/PutBotOutput";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBot",
  http: {
    method: "PUT",
    requestUri: "/bots/{name}/versions/$LATEST"
  },
  input: {
    shape: PutBotInput
  },
  output: {
    shape: PutBotOutput
  },
  errors: [
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
      shape: PreconditionFailedException
    }
  ]
};
