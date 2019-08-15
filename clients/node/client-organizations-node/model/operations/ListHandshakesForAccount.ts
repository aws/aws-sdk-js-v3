import { ListHandshakesForAccountInput } from "../shapes/ListHandshakesForAccountInput";
import { ListHandshakesForAccountOutput } from "../shapes/ListHandshakesForAccountOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHandshakesForAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHandshakesForAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHandshakesForAccountInput
  },
  output: {
    shape: ListHandshakesForAccountOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
