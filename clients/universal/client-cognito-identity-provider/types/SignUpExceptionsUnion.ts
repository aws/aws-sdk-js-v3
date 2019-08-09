import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { UsernameExistsException } from "./UsernameExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
export type SignUpExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | NotAuthorizedException
  | InvalidPasswordException
  | InvalidLambdaResponseException
  | UsernameExistsException
  | TooManyRequestsException
  | InternalErrorException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidEmailRoleAccessPolicyException
  | CodeDeliveryFailureException;
