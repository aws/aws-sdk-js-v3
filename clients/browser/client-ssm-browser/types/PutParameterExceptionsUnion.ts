import { InternalServerError } from "./InternalServerError";
import { InvalidKeyId } from "./InvalidKeyId";
import { ParameterLimitExceeded } from "./ParameterLimitExceeded";
import { TooManyUpdates } from "./TooManyUpdates";
import { ParameterAlreadyExists } from "./ParameterAlreadyExists";
import { HierarchyLevelLimitExceededException } from "./HierarchyLevelLimitExceededException";
import { HierarchyTypeMismatchException } from "./HierarchyTypeMismatchException";
import { InvalidAllowedPatternException } from "./InvalidAllowedPatternException";
import { ParameterMaxVersionLimitExceeded } from "./ParameterMaxVersionLimitExceeded";
import { ParameterPatternMismatchException } from "./ParameterPatternMismatchException";
import { UnsupportedParameterType } from "./UnsupportedParameterType";
import { PoliciesLimitExceededException } from "./PoliciesLimitExceededException";
import { InvalidPolicyTypeException } from "./InvalidPolicyTypeException";
import { InvalidPolicyAttributeException } from "./InvalidPolicyAttributeException";
import { IncompatiblePolicyException } from "./IncompatiblePolicyException";
export type PutParameterExceptionsUnion =
  | InternalServerError
  | InvalidKeyId
  | ParameterLimitExceeded
  | TooManyUpdates
  | ParameterAlreadyExists
  | HierarchyLevelLimitExceededException
  | HierarchyTypeMismatchException
  | InvalidAllowedPatternException
  | ParameterMaxVersionLimitExceeded
  | ParameterPatternMismatchException
  | UnsupportedParameterType
  | PoliciesLimitExceededException
  | InvalidPolicyTypeException
  | InvalidPolicyAttributeException
  | IncompatiblePolicyException;
