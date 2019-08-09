import { ListServicesInput } from "./ListServicesInput";
import { ListServicesOutput } from "./ListServicesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServicesInput
  },
  output: {
    shape: ListServicesOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: IllegalArgumentException
    },
    {
      shape: InvalidPaginationTokenException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
