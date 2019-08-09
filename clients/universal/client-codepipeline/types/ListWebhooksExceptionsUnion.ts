import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListWebhooksExceptionsUnion =
  | ValidationException
  | InvalidNextTokenException;
