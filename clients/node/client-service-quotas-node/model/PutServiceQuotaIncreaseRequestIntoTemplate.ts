import { PutServiceQuotaIncreaseRequestIntoTemplateInput } from "./PutServiceQuotaIncreaseRequestIntoTemplateInput";
import { PutServiceQuotaIncreaseRequestIntoTemplateOutput } from "./PutServiceQuotaIncreaseRequestIntoTemplateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { QuotaExceededException } from "./QuotaExceededException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutServiceQuotaIncreaseRequestIntoTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutServiceQuotaIncreaseRequestIntoTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutServiceQuotaIncreaseRequestIntoTemplateInput
  },
  output: {
    shape: PutServiceQuotaIncreaseRequestIntoTemplateOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: DependencyAccessDeniedException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: IllegalArgumentException
    },
    {
      shape: QuotaExceededException
    },
    {
      shape: NoSuchResourceException
    },
    {
      shape: AWSServiceAccessNotEnabledException
    },
    {
      shape: TemplatesNotAvailableInRegionException
    },
    {
      shape: NoAvailableOrganizationException
    }
  ]
};
