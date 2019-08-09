import { MalformedArnException } from "./MalformedArnException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListPrincipalsExceptionsUnion =
  | MalformedArnException
  | UnknownResourceException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServerInternalException
  | ServiceUnavailableException;
