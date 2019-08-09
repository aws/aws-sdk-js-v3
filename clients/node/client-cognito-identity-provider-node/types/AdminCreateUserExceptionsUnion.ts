import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UsernameExistsException } from "./UsernameExistsException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UnsupportedUserStateException } from "./UnsupportedUserStateException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminCreateUserExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UserNotFoundException
  | UsernameExistsException
  | InvalidPasswordException
  | CodeDeliveryFailureException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | InvalidLambdaResponseException
  | PreconditionNotMetException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | TooManyRequestsException
  | NotAuthorizedException
  | UnsupportedUserStateException
  | InternalErrorException;
