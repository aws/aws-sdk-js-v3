import { DeleteIntentInput } from "./DeleteIntentInput";
import { DeleteIntentOutput } from "./DeleteIntentOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
