import { PutServiceQuotaIncreaseRequestIntoTemplateInput } from "../shapes/PutServiceQuotaIncreaseRequestIntoTemplateInput";
import { PutServiceQuotaIncreaseRequestIntoTemplateOutput } from "../shapes/PutServiceQuotaIncreaseRequestIntoTemplateOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { QuotaExceededException } from "../shapes/QuotaExceededException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
