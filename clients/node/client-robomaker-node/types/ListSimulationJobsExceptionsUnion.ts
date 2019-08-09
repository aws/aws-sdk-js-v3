import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
export type ListSimulationJobsExceptionsUnion =
  | InvalidParameterException
  | InternalServerException
  | ThrottlingException;
