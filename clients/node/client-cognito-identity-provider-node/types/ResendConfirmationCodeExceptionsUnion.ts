import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidSmsRoleAccessPolicyException } from "./InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./InvalidSmsRoleTrustRelationshipException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type ResendConfirmationCodeExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | NotAuthorizedException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | LimitExceededException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidEmailRoleAccessPolicyException
  | CodeDeliveryFailureException
  | UserNotFoundException
  | InternalErrorException;
