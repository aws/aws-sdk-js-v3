import { ResourceShareInvitationArnNotFoundException } from "./ResourceShareInvitationArnNotFoundException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetResourceShareInvitationsExceptionsUnion =
  | ResourceShareInvitationArnNotFoundException
  | InvalidMaxResultsException
  | MalformedArnException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServerInternalException
  | ServiceUnavailableException;
