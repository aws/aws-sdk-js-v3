import { PutIntentInput } from "./PutIntentInput";
import { PutIntentOutput } from "./PutIntentOutput";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
