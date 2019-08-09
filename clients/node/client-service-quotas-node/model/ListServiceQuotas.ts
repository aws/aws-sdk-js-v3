import { ListServiceQuotasInput } from "./ListServiceQuotasInput";
import { ListServiceQuotasOutput } from "./ListServiceQuotasOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
