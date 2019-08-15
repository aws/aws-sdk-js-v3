import { DeleteIntentInput } from "../shapes/DeleteIntentInput";
import { DeleteIntentOutput } from "../shapes/DeleteIntentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIntent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntent",
  http: {
    method: "DELETE",
    requestUri: "/intents/{name}"
  },
  input: {
    shape: DeleteIntentInput
  },
  output: {
    shape: DeleteIntentOutput
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
