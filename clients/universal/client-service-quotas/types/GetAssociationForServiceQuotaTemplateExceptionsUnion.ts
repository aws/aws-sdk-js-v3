import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceQuotaTemplateNotInUseException } from "./ServiceQuotaTemplateNotInUseException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type GetAssociationForServiceQuotaTemplateExceptionsUnion =
  | DependencyAccessDeniedException
  | ServiceQuotaTemplateNotInUseException
  | AccessDeniedException
  | ServiceException
  | TooManyRequestsException
  | AWSServiceAccessNotEnabledException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
