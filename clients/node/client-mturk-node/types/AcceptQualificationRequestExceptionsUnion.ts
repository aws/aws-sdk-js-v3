import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
export type AcceptQualificationRequestExceptionsUnion =
  | ServiceFault
  | RequestError;
