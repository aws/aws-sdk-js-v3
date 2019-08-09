import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateUserPoolExceptionsUnion =
  | InvalidParameterException
  | TooManyRequestsException
  | LimitExceededException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidEmailRoleAccessPolicyException
  | NotAuthorizedException
  | UserPoolTaggingException
  | InternalErrorException;
