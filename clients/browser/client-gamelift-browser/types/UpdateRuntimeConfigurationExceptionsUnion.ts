import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
export type UpdateRuntimeConfigurationExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | InternalServiceException
  | InvalidRequestException
  | InvalidFleetStatusException;
