import { CreateBotVersionInput } from "./CreateBotVersionInput";
import { CreateBotVersionOutput } from "./CreateBotVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
