import { CreateSlotTypeVersionInput } from "../shapes/CreateSlotTypeVersionInput";
import { CreateSlotTypeVersionOutput } from "../shapes/CreateSlotTypeVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
