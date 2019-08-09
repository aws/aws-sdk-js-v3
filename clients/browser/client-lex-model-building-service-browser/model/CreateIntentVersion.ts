import { CreateIntentVersionInput } from "./CreateIntentVersionInput";
import { CreateIntentVersionOutput } from "./CreateIntentVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
