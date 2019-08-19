import { ListServiceQuotaIncreaseRequestsInTemplateInput } from "../shapes/ListServiceQuotaIncreaseRequestsInTemplateInput";
import { ListServiceQuotaIncreaseRequestsInTemplateOutput } from "../shapes/ListServiceQuotaIncreaseRequestsInTemplateOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServiceQuotaIncreaseRequestsInTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServiceQuotaIncreaseRequestsInTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServiceQuotaIncreaseRequestsInTemplateInput
  },
  output: {
    shape: ListServiceQuotaIncreaseRequestsInTemplateOutput
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
