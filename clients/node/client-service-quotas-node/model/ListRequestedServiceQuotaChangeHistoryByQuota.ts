import { ListRequestedServiceQuotaChangeHistoryByQuotaInput } from "./ListRequestedServiceQuotaChangeHistoryByQuotaInput";
import { ListRequestedServiceQuotaChangeHistoryByQuotaOutput } from "./ListRequestedServiceQuotaChangeHistoryByQuotaOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
