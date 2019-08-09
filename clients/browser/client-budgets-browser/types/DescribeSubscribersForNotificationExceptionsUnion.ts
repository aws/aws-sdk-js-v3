import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
export type DescribeSubscribersForNotificationExceptionsUnion =
  | InternalErrorException
  | NotFoundException
  | InvalidParameterException
  | InvalidNextTokenException
  | ExpiredNextTokenException;
