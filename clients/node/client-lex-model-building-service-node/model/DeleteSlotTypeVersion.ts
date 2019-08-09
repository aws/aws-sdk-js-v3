import { DeleteSlotTypeVersionInput } from "./DeleteSlotTypeVersionInput";
import { DeleteSlotTypeVersionOutput } from "./DeleteSlotTypeVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
