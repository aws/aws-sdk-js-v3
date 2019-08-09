import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteWebhookExceptionsUnion =
  | ValidationException
  | ConcurrentModificationException;
