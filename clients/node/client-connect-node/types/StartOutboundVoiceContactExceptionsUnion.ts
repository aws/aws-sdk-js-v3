import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { LimitExceededException } from "./LimitExceededException";
import { DestinationNotAllowedException } from "./DestinationNotAllowedException";
import { OutboundContactNotPermittedException } from "./OutboundContactNotPermittedException";
export type StartOutboundVoiceContactExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalServiceException
  | LimitExceededException
  | DestinationNotAllowedException
  | OutboundContactNotPermittedException;
