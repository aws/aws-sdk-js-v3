import { AccessDeniedException } from "./AccessDeniedException";
import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { QuotaExceededException } from "./QuotaExceededException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { AWSServiceAccessNotEnabledException } from "./AWSServiceAccessNotEnabledException";
import { TemplatesNotAvailableInRegionException } from "./TemplatesNotAvailableInRegionException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
export type PutServiceQuotaIncreaseRequestIntoTemplateExceptionsUnion =
  | AccessDeniedException
  | DependencyAccessDeniedException
  | ServiceException
  | TooManyRequestsException
  | IllegalArgumentException
  | QuotaExceededException
  | NoSuchResourceException
  | AWSServiceAccessNotEnabledException
  | TemplatesNotAvailableInRegionException
  | NoAvailableOrganizationException;
