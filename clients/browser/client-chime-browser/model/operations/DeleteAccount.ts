import { DeleteAccountInput } from "../shapes/DeleteAccountInput";
import { DeleteAccountOutput } from "../shapes/DeleteAccountOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
