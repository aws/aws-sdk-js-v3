import { GetAWSDefaultServiceQuotaInput } from "./GetAWSDefaultServiceQuotaInput";
import { GetAWSDefaultServiceQuotaOutput } from "./GetAWSDefaultServiceQuotaOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
