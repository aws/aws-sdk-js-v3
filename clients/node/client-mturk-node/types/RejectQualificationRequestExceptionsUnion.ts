import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
export type RejectQualificationRequestExceptionsUnion =
  | ServiceFault
  | RequestError;
