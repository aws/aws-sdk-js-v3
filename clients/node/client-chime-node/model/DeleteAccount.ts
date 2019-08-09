import { DeleteAccountInput } from "./DeleteAccountInput";
import { DeleteAccountOutput } from "./DeleteAccountOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccount",
  http: {
    method: "DELETE",
    requestUri: "/accounts/{accountId}"
  },
  input: {
    shape: DeleteAccountInput
  },
  output: {
    shape: DeleteAccountOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: UnprocessableEntityException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
