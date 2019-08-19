import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type ListSubscriptionsByTopicExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | NotFoundException
  | AuthorizationErrorException;
