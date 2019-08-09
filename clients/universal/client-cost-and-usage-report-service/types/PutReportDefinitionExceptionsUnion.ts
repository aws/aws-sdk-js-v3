import { DuplicateReportNameException } from "./DuplicateReportNameException";
import { ReportLimitReachedException } from "./ReportLimitReachedException";
import { InternalErrorException } from "./InternalErrorException";
import { ValidationException } from "./ValidationException";
export type PutReportDefinitionExceptionsUnion =
  | DuplicateReportNameException
  | ReportLimitReachedException
  | InternalErrorException
  | ValidationException;
