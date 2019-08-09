import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { MFAMethodNotFoundException } from "./MFAMethodNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
export type AdminInitiateAuthExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | InternalErrorException
  | UnexpectedLambdaException
  | InvalidUserPoolConfigurationException
  | UserLambdaValidationException
  | InvalidLambdaResponseException
  | MFAMethodNotFoundException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException;
