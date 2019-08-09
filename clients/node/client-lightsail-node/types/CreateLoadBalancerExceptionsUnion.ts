import { ServiceException } from "./ServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { NotFoundException } from "./NotFoundException";
import { OperationFailureException } from "./OperationFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountSetupInProgressException } from "./AccountSetupInProgressException";
import { UnauthenticatedException } from "./UnauthenticatedException";
export type CreateLoadBalancerExceptionsUnion =
  | ServiceException
  | InvalidInputException
  | NotFoundException
  | OperationFailureException
  | AccessDeniedException
  | AccountSetupInProgressException
  | UnauthenticatedException;
