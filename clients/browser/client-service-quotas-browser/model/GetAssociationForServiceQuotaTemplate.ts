import { GetAssociationForServiceQuotaTemplateInput } from "./GetAssociationForServiceQuotaTemplateInput";
import { GetAssociationForServiceQuotaTemplateOutput } from "./GetAssociationForServiceQuotaTemplateOutput";
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

export const GetAssociationForServiceQuotaTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAssociationForServiceQuotaTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAssociationForServiceQuotaTemplateInput
  },
  output: {
    shape: GetAssociationForServiceQuotaTemplateOutput
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
