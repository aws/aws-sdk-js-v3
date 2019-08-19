import { ListAWSDefaultServiceQuotasInput } from "../shapes/ListAWSDefaultServiceQuotasInput";
import { ListAWSDefaultServiceQuotasOutput } from "../shapes/ListAWSDefaultServiceQuotasOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
