import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { OrganizationNotInAllFeaturesModeException } from "./OrganizationNotInAllFeaturesModeException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type AssociateServiceQuotaTemplateExceptionsUnion =
  | DependencyAccessDeniedException
  | AccessDeniedException
  | ServiceException
  | TooManyRequestsException
  | AWSServiceAccessNotEnabledException
  | OrganizationNotInAllFeaturesModeException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
