import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
export type UpdateGatewayGroupExceptionsUnion =
  | NotFoundException
  | NameInUseException;
