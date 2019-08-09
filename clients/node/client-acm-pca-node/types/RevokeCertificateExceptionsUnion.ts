import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateException } from "./InvalidStateException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestAlreadyProcessedException } from "./RequestAlreadyProcessedException";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
export type RevokeCertificateExceptionsUnion =
  | ConcurrentModificationException
  | InvalidArnException
  | InvalidRequestException
  | InvalidStateException
  | LimitExceededException
  | ResourceNotFoundException
  | RequestAlreadyProcessedException
  | RequestInProgressException
  | RequestFailedException;
