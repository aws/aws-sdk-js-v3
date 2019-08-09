import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { AssessmentRunInProgressException } from "./AssessmentRunInProgressException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type GetAssessmentReportExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AccessDeniedException
  | NoSuchEntityException
  | AssessmentRunInProgressException
  | UnsupportedFeatureException
  | ServiceTemporarilyUnavailableException;
