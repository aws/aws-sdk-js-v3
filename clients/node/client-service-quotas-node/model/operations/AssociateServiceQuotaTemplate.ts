import { AssociateServiceQuotaTemplateInput } from "../shapes/AssociateServiceQuotaTemplateInput";
import { AssociateServiceQuotaTemplateOutput } from "../shapes/AssociateServiceQuotaTemplateOutput";
import { DependencyAccessDeniedException } from "../shapes/DependencyAccessDeniedException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "../shapes/AWSServiceAccessNotEnabledException";
import { OrganizationNotInAllFeaturesModeException } from "../shapes/OrganizationNotInAllFeaturesModeException";
import { TemplatesNotAvailableInRegionException } from "../shapes/TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
