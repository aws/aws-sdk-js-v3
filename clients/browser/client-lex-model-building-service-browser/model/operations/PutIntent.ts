import { PutIntentInput } from "../shapes/PutIntentInput";
import { PutIntentOutput } from "../shapes/PutIntentOutput";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutIntent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutIntent",
  http: {
    method: "PUT",
    requestUri: "/intents/{name}/versions/$LATEST"
  },
  input: {
    shape: PutIntentInput
  },
  output: {
    shape: PutIntentOutput
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
