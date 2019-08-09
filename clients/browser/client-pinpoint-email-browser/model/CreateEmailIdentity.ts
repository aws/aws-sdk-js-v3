import { CreateEmailIdentityInput } from "./CreateEmailIdentityInput";
import { CreateEmailIdentityOutput } from "./CreateEmailIdentityOutput";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
