import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidSequenceTokenException } from "./InvalidSequenceTokenException";
import { DataAlreadyAcceptedException } from "./DataAlreadyAcceptedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnrecognizedClientException } from "./UnrecognizedClientException";
export type PutLogEventsExceptionsUnion =
  | InvalidParameterException
  | InvalidSequenceTokenException
  | DataAlreadyAcceptedException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | UnrecognizedClientException;
