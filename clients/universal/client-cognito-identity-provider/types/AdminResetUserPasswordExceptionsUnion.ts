import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminResetUserPasswordExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | NotAuthorizedException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | LimitExceededException
  | UserNotFoundException
  | InvalidSmsRoleAccessPolicyException
  | InvalidEmailRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InternalErrorException;
