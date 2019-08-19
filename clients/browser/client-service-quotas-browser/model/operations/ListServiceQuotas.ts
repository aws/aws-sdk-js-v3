import { ListServiceQuotasInput } from "../shapes/ListServiceQuotasInput";
import { ListServiceQuotasOutput } from "../shapes/ListServiceQuotasOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServiceQuotas: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServiceQuotas",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServiceQuotasInput
  },
  output: {
    shape: ListServiceQuotasOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: NoSuchResourceException
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
