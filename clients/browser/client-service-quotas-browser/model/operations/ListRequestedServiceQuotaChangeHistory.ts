import { ListRequestedServiceQuotaChangeHistoryInput } from "../shapes/ListRequestedServiceQuotaChangeHistoryInput";
import { ListRequestedServiceQuotaChangeHistoryOutput } from "../shapes/ListRequestedServiceQuotaChangeHistoryOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRequestedServiceQuotaChangeHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRequestedServiceQuotaChangeHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRequestedServiceQuotaChangeHistoryInput
  },
  output: {
    shape: ListRequestedServiceQuotaChangeHistoryOutput
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
