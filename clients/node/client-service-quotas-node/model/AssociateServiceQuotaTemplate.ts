import { AssociateServiceQuotaTemplateInput } from "./AssociateServiceQuotaTemplateInput";
import { AssociateServiceQuotaTemplateOutput } from "./AssociateServiceQuotaTemplateOutput";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { OrganizationNotInAllFeaturesModeException } from "./OrganizationNotInAllFeaturesModeException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateServiceQuotaTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateServiceQuotaTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateServiceQuotaTemplateInput
  },
  output: {
    shape: AssociateServiceQuotaTemplateOutput
  },
  errors: [
    {
      shape: DependencyAccessDeniedException
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
      shape: OrganizationNotInAllFeaturesModeException
    },
    {
      shape: TemplatesNotAvailableInRegionException
    },
    {
      shape: NoAvailableOrganizationException
    }
  ]
};
