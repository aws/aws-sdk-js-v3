import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
export type UpdateGatewayExceptionsUnion =
  | NotFoundException
  | NameInUseException;
