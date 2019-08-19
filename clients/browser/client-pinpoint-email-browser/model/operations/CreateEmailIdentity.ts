import { CreateEmailIdentityInput } from "../shapes/CreateEmailIdentityInput";
import { CreateEmailIdentityOutput } from "../shapes/CreateEmailIdentityOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateEmailIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEmailIdentity",
  http: {
    method: "POST",
    requestUri: "/v1/email/identities"
  },
  input: {
    shape: CreateEmailIdentityInput
  },
  output: {
    shape: CreateEmailIdentityOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
