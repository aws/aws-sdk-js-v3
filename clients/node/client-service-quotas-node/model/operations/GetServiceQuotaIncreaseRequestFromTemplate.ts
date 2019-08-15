import { GetServiceQuotaIncreaseRequestFromTemplateInput } from "../shapes/GetServiceQuotaIncreaseRequestFromTemplateInput";
import { GetServiceQuotaIncreaseRequestFromTemplateOutput } from "../shapes/GetServiceQuotaIncreaseRequestFromTemplateOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
