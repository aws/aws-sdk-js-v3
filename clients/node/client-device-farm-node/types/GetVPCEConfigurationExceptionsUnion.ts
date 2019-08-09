import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { ServiceAccountException } from "./ServiceAccountException";
export type GetVPCEConfigurationExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | ServiceAccountException;
