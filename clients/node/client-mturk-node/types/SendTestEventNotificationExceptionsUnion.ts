import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
export type SendTestEventNotificationExceptionsUnion =
  | ServiceFault
  | RequestError;
