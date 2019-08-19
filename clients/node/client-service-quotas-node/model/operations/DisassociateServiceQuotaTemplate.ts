import { DisassociateServiceQuotaTemplateInput } from "../shapes/DisassociateServiceQuotaTemplateInput";
import { DisassociateServiceQuotaTemplateOutput } from "../shapes/DisassociateServiceQuotaTemplateOutput";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { ServiceQuotaTemplateNotInUseException } from "../shapes/ServiceQuotaTemplateNotInUseException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateServiceQuotaTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateServiceQuotaTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateServiceQuotaTemplateInput
  },
  output: {
    shape: DisassociateServiceQuotaTemplateOutput
  },
  errors: [
    {
      shape: DependencyAccessDeniedException
    },
    {
      shape: ServiceQuotaTemplateNotInUseException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
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
