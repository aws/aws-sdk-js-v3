import { InvalidInputException } from "./InvalidInputException";
import { OAuthProviderException } from "./OAuthProviderException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateWebhookExceptionsUnion =
  | InvalidInputException
  | OAuthProviderException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException;
