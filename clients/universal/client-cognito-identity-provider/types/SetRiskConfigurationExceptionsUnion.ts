import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { InternalErrorException } from "./InternalErrorException";
export type SetRiskConfigurationExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserPoolAddOnNotEnabledException
  | CodeDeliveryFailureException
  | InvalidEmailRoleAccessPolicyException
  | InternalErrorException;
