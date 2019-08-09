import { ValidationException } from "./ValidationException";
import { WebhookNotFoundException } from "./WebhookNotFoundException";
export type DeregisterWebhookWithThirdPartyExceptionsUnion =
  | ValidationException
  | WebhookNotFoundException;
