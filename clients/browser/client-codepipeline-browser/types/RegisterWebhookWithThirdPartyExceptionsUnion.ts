import { ValidationException } from "./ValidationException";
import { WebhookNotFoundException } from "./WebhookNotFoundException";
export type RegisterWebhookWithThirdPartyExceptionsUnion =
  | ValidationException
  | WebhookNotFoundException;
