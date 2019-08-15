import { CreateBotVersionInput } from "../shapes/CreateBotVersionInput";
import { CreateBotVersionOutput } from "../shapes/CreateBotVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBotVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBotVersion",
  http: {
    method: "POST",
    requestUri: "/bots/{name}/versions"
  },
  input: {
    shape: CreateBotVersionInput
  },
  output: {
    shape: CreateBotVersionOutput
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
      shape: PreconditionFailedException
    }
  ]
};
