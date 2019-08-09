import { InternalServerError } from "./InternalServerError";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidOptionException } from "./InvalidOptionException";
import { InvalidDeleteInventoryParametersException } from "./InvalidDeleteInventoryParametersException";
import { InvalidInventoryRequestException } from "./InvalidInventoryRequestException";
export type DeleteInventoryExceptionsUnion =
  | InternalServerError
  | InvalidTypeNameException
  | InvalidOptionException
  | InvalidDeleteInventoryParametersException
  | InvalidInventoryRequestException;
