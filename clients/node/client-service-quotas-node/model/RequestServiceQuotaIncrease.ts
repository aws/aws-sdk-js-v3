import { RequestServiceQuotaIncreaseInput } from "./RequestServiceQuotaIncreaseInput";
import { RequestServiceQuotaIncreaseOutput } from "./RequestServiceQuotaIncreaseOutput";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { QuotaExceededException } from "./QuotaExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
