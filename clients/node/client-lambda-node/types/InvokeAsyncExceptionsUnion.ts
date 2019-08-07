import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestContentException } from "./InvalidRequestContentException";
import { InvalidRuntimeException } from "./InvalidRuntimeException";
export type InvokeAsyncExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | InvalidRequestContentException
  | InvalidRuntimeException;
