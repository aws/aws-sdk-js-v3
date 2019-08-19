import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { AliasExistsException } from "./AliasExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
export type AdminUpdateUserAttributesExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | InvalidLambdaResponseException
  | AliasExistsException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | InternalErrorException
  | InvalidSmsRoleAccessPolicyException
  | InvalidEmailRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException;
