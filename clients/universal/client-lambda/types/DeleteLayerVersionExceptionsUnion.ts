import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteLayerVersionExceptionsUnion =
  | ServiceException
  | TooManyRequestsException;
