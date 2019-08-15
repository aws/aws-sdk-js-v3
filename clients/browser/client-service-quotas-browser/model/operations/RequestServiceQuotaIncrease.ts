import { RequestServiceQuotaIncreaseInput } from "../shapes/RequestServiceQuotaIncreaseInput";
import { RequestServiceQuotaIncreaseOutput } from "../shapes/RequestServiceQuotaIncreaseOutput";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { QuotaExceededException } from "../shapes/QuotaExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RequestServiceQuotaIncrease: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestServiceQuotaIncrease",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestServiceQuotaIncreaseInput
  },
  output: {
    shape: RequestServiceQuotaIncreaseOutput
  },
  errors: [
    {
      shape: DependencyAccessDeniedException
    },
    {
      shape: QuotaExceededException
    },
    {
      shape: ResourceAlreadyExistsException
    },
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
      shape: InvalidResourceStateException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
