import { GetServiceQuotaIncreaseRequestFromTemplateInput } from "./GetServiceQuotaIncreaseRequestFromTemplateInput";
import { GetServiceQuotaIncreaseRequestFromTemplateOutput } from "./GetServiceQuotaIncreaseRequestFromTemplateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceQuotaIncreaseRequestFromTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceQuotaIncreaseRequestFromTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceQuotaIncreaseRequestFromTemplateInput
  },
  output: {
    shape: GetServiceQuotaIncreaseRequestFromTemplateOutput
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
      shape: NoSuchResourceException
    },
    {
      shape: IllegalArgumentException
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
