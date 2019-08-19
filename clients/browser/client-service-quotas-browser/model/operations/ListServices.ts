import { ListServicesInput } from "../shapes/ListServicesInput";
import { ListServicesOutput } from "../shapes/ListServicesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
