import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { ServiceAccountException } from "./ServiceAccountException";
import { InvalidOperationException } from "./InvalidOperationException";
export type UpdateVPCEConfigurationExceptionsUnion =
  | ArgumentException
  | NotFoundException
  | ServiceAccountException
  | InvalidOperationException;
