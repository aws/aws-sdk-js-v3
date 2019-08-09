import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceException } from "./ServiceException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type DeleteServiceQuotaIncreaseRequestFromTemplateExceptionsUnion =
  | AccessDeniedException
  | ServiceException
  | DependencyAccessDeniedException
  | TooManyRequestsException
  | NoSuchResourceException
  | IllegalArgumentException
  | AWSServiceAccessNotEnabledException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
