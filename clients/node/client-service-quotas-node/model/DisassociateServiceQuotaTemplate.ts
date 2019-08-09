import { DisassociateServiceQuotaTemplateInput } from "./DisassociateServiceQuotaTemplateInput";
import { DisassociateServiceQuotaTemplateOutput } from "./DisassociateServiceQuotaTemplateOutput";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceQuotaTemplateNotInUseException } from "./ServiceQuotaTemplateNotInUseException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
