import { PutSlotTypeInput } from "../shapes/PutSlotTypeInput";
import { PutSlotTypeOutput } from "../shapes/PutSlotTypeOutput";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutSlotType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSlotType",
  http: {
    method: "PUT",
    requestUri: "/slottypes/{name}/versions/$LATEST"
  },
  input: {
    shape: PutSlotTypeInput
  },
  output: {
    shape: PutSlotTypeOutput
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
