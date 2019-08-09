import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type ListServiceQuotaIncreaseRequestsInTemplateExceptionsUnion =
  | AccessDeniedException
  | DependencyAccessDeniedException
  | ServiceException
  | TooManyRequestsException
  | IllegalArgumentException
  | AWSServiceAccessNotEnabledException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
