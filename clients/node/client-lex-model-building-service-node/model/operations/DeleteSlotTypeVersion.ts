import { DeleteSlotTypeVersionInput } from "../shapes/DeleteSlotTypeVersionInput";
import { DeleteSlotTypeVersionOutput } from "../shapes/DeleteSlotTypeVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSlotTypeVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSlotTypeVersion",
  http: {
    method: "DELETE",
    requestUri: "/slottypes/{name}/version/{version}"
  },
  input: {
    shape: DeleteSlotTypeVersionInput
  },
  output: {
    shape: DeleteSlotTypeVersionOutput
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
