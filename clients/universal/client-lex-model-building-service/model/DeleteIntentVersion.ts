import { DeleteIntentVersionInput } from "./DeleteIntentVersionInput";
import { DeleteIntentVersionOutput } from "./DeleteIntentVersionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
