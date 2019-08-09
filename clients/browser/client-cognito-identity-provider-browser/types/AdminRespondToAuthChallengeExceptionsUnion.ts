import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { InternalErrorException } from "./InternalErrorException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "./AliasExistsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
export type AdminRespondToAuthChallengeExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | CodeMismatchException
  | ExpiredCodeException
  | UnexpectedLambdaException
  | InvalidPasswordException
  | UserLambdaValidationException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | InvalidUserPoolConfigurationException
  | InternalErrorException
  | MFAMethodNotFoundException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | AliasExistsException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | SoftwareTokenMFANotFoundException;
