import { DeleteIntentVersionInput } from "../shapes/DeleteIntentVersionInput";
import { DeleteIntentVersionOutput } from "../shapes/DeleteIntentVersionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIntentVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntentVersion",
  http: {
    method: "DELETE",
    requestUri: "/intents/{name}/versions/{version}"
  },
  input: {
    shape: DeleteIntentVersionInput
  },
  output: {
    shape: DeleteIntentVersionOutput
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
