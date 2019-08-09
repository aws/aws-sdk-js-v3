import { PutSlotTypeInput } from "./PutSlotTypeInput";
import { PutSlotTypeOutput } from "./PutSlotTypeOutput";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
