import { ListRequestedServiceQuotaChangeHistoryInput } from "./ListRequestedServiceQuotaChangeHistoryInput";
import { ListRequestedServiceQuotaChangeHistoryOutput } from "./ListRequestedServiceQuotaChangeHistoryOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
