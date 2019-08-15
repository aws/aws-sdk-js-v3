import { GetAWSDefaultServiceQuotaInput } from "../shapes/GetAWSDefaultServiceQuotaInput";
import { GetAWSDefaultServiceQuotaOutput } from "../shapes/GetAWSDefaultServiceQuotaOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAWSDefaultServiceQuota: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAWSDefaultServiceQuota",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAWSDefaultServiceQuotaInput
  },
  output: {
    shape: GetAWSDefaultServiceQuotaOutput
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
