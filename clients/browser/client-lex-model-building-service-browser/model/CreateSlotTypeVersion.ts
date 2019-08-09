import { CreateSlotTypeVersionInput } from "./CreateSlotTypeVersionInput";
import { CreateSlotTypeVersionOutput } from "./CreateSlotTypeVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSlotTypeVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSlotTypeVersion",
  http: {
    method: "POST",
    requestUri: "/slottypes/{name}/versions"
  },
  input: {
    shape: CreateSlotTypeVersionInput
  },
  output: {
    shape: CreateSlotTypeVersionOutput
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
