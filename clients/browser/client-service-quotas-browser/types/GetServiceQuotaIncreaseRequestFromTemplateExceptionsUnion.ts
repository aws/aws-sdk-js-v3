import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type GetServiceQuotaIncreaseRequestFromTemplateExceptionsUnion =
  | AccessDeniedException
  | DependencyAccessDeniedException
  | ServiceException
  | TooManyRequestsException
  | NoSuchResourceException
  | IllegalArgumentException
  | AWSServiceAccessNotEnabledException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
