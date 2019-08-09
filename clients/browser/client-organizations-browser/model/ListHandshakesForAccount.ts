import { ListHandshakesForAccountInput } from "./ListHandshakesForAccountInput";
import { ListHandshakesForAccountOutput } from "./ListHandshakesForAccountOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
