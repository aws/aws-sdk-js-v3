import { GetServiceQuotaInput } from "./GetServiceQuotaInput";
import { GetServiceQuotaOutput } from "./GetServiceQuotaOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
