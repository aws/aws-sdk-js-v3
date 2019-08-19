import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OAuthProviderException } from "./OAuthProviderException";
export type DeleteWebhookExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | OAuthProviderException;
