import { DeleteEmailIdentityInput } from "../shapes/DeleteEmailIdentityInput";
import { DeleteEmailIdentityOutput } from "../shapes/DeleteEmailIdentityOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEmailIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEmailIdentity",
  http: {
    method: "DELETE",
    requestUri: "/v1/email/identities/{EmailIdentity}"
  },
  input: {
    shape: DeleteEmailIdentityInput
  },
  output: {
    shape: DeleteEmailIdentityOutput
  },
  errors: [
    {
      shape: NotFoundException
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
