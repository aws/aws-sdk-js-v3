import { GetServiceQuotaInput } from "../shapes/GetServiceQuotaInput";
import { GetServiceQuotaOutput } from "../shapes/GetServiceQuotaOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetServiceQuota: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceQuota",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceQuotaInput
  },
  output: {
    shape: GetServiceQuotaOutput
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
