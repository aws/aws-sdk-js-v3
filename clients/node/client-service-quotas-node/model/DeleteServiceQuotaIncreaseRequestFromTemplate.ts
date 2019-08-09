import { DeleteServiceQuotaIncreaseRequestFromTemplateInput } from "./DeleteServiceQuotaIncreaseRequestFromTemplateInput";
import { DeleteServiceQuotaIncreaseRequestFromTemplateOutput } from "./DeleteServiceQuotaIncreaseRequestFromTemplateOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteServiceQuotaIncreaseRequestFromTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServiceQuotaIncreaseRequestFromTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceQuotaIncreaseRequestFromTemplateInput
  },
  output: {
    shape: DeleteServiceQuotaIncreaseRequestFromTemplateOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: ServiceException
    },
    {
      shape: DependencyAccessDeniedException
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
