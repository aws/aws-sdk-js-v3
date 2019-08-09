import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type StartMonitoringMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
