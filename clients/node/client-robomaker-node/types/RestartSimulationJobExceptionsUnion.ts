import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
export type RestartSimulationJobExceptionsUnion =
  | ResourceNotFoundException
  | ThrottlingException
  | LimitExceededException
  | InvalidParameterException
  | InternalServerException;
