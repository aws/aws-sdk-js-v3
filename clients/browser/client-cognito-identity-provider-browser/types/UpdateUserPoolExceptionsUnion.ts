import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserImportInProgressException } from "./UserImportInProgressException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
export type UpdateUserPoolExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | ConcurrentModificationException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserImportInProgressException
  | InternalErrorException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | UserPoolTaggingException
  | InvalidEmailRoleAccessPolicyException;
