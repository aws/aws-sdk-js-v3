import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DeleteFleetExceptionsUnion =
  | NotFoundException
  | InternalServiceException
  | InvalidFleetStatusException
  | UnauthorizedException
  | InvalidRequestException;
