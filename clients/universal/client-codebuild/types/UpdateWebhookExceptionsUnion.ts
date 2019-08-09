import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OAuthProviderException } from "./OAuthProviderException";
export type UpdateWebhookExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | OAuthProviderException;
