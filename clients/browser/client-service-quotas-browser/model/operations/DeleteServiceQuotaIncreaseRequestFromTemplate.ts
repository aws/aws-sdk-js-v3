import { DeleteServiceQuotaIncreaseRequestFromTemplateInput } from "../shapes/DeleteServiceQuotaIncreaseRequestFromTemplateInput";
import { DeleteServiceQuotaIncreaseRequestFromTemplateOutput } from "../shapes/DeleteServiceQuotaIncreaseRequestFromTemplateOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NoSuchResourceException } from "../shapes/NoSuchResourceException";
import { IllegalArgumentException } from "../shapes/IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
