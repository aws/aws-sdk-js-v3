import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
export type ListSimulationApplicationsExceptionsUnion =
  | InvalidParameterException
  | ThrottlingException
  | InternalServerException;
