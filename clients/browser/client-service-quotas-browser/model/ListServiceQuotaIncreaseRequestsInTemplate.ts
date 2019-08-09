import { ListServiceQuotaIncreaseRequestsInTemplateInput } from "./ListServiceQuotaIncreaseRequestsInTemplateInput";
import { ListServiceQuotaIncreaseRequestsInTemplateOutput } from "./ListServiceQuotaIncreaseRequestsInTemplateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
