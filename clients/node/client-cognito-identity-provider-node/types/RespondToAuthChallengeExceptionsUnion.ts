import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { AliasExistsException } from "./AliasExistsException";
import { InternalErrorException } from "./InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
export type RespondToAuthChallengeExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | CodeMismatchException
  | ExpiredCodeException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | InvalidPasswordException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | InvalidUserPoolConfigurationException
  | MFAMethodNotFoundException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | AliasExistsException
  | InternalErrorException
  | SoftwareTokenMFANotFoundException;
