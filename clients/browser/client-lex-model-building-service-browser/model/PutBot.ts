import { PutBotInput } from "./PutBotInput";
import { PutBotOutput } from "./PutBotOutput";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
