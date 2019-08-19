import { GetRequestedServiceQuotaChangeInput } from "../shapes/GetRequestedServiceQuotaChangeInput";
import { GetRequestedServiceQuotaChangeOutput } from "../shapes/GetRequestedServiceQuotaChangeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
