import { ListRequestedServiceQuotaChangeHistoryByQuotaInput } from "../shapes/ListRequestedServiceQuotaChangeHistoryByQuotaInput";
import { ListRequestedServiceQuotaChangeHistoryByQuotaOutput } from "../shapes/ListRequestedServiceQuotaChangeHistoryByQuotaOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidPaginationTokenException } from "../shapes/InvalidPaginationTokenException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRequestedServiceQuotaChangeHistoryByQuota: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRequestedServiceQuotaChangeHistoryByQuota",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRequestedServiceQuotaChangeHistoryByQuotaInput
  },
  output: {
    shape: ListRequestedServiceQuotaChangeHistoryByQuotaOutput
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
