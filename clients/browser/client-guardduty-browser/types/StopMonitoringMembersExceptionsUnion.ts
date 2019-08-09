import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type StopMonitoringMembersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
