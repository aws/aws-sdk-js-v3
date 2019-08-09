import { DeleteEmailIdentityInput } from "./DeleteEmailIdentityInput";
import { DeleteEmailIdentityOutput } from "./DeleteEmailIdentityOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
