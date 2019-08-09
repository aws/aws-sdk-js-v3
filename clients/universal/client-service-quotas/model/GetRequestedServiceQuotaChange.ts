import { GetRequestedServiceQuotaChangeInput } from "./GetRequestedServiceQuotaChangeInput";
import { GetRequestedServiceQuotaChangeOutput } from "./GetRequestedServiceQuotaChangeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRequestedServiceQuotaChange: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRequestedServiceQuotaChange",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRequestedServiceQuotaChangeInput
  },
  output: {
    shape: GetRequestedServiceQuotaChangeOutput
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
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
