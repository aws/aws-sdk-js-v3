import { DeleteSlotTypeInput } from "../shapes/DeleteSlotTypeInput";
import { DeleteSlotTypeOutput } from "../shapes/DeleteSlotTypeOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSlotType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSlotType",
  http: {
    method: "DELETE",
    requestUri: "/slottypes/{name}"
  },
  input: {
    shape: DeleteSlotTypeInput
  },
  output: {
    shape: DeleteSlotTypeOutput
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
      shape: ResourceInUseException
    }
  ]
};
