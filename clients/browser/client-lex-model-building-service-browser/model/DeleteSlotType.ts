import { DeleteSlotTypeInput } from "./DeleteSlotTypeInput";
import { DeleteSlotTypeOutput } from "./DeleteSlotTypeOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
