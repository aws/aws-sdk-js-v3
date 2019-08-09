import { ListAWSDefaultServiceQuotasInput } from "./ListAWSDefaultServiceQuotasInput";
import { ListAWSDefaultServiceQuotasOutput } from "./ListAWSDefaultServiceQuotasOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAWSDefaultServiceQuotas: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAWSDefaultServiceQuotas",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAWSDefaultServiceQuotasInput
  },
  output: {
    shape: ListAWSDefaultServiceQuotasOutput
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
