import { CreateIntentVersionInput } from "../shapes/CreateIntentVersionInput";
import { CreateIntentVersionOutput } from "../shapes/CreateIntentVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIntentVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIntentVersion",
  http: {
    method: "POST",
    requestUri: "/intents/{name}/versions"
  },
  input: {
    shape: CreateIntentVersionInput
  },
  output: {
    shape: CreateIntentVersionOutput
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
