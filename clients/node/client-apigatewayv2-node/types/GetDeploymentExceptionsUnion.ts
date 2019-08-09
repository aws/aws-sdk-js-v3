import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetDeploymentExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
