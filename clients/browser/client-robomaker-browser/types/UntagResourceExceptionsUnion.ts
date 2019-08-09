import { InternalServerException } from "./InternalServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
export type UntagResourceExceptionsUnion =
  | InternalServerException
  | ResourceNotFoundException
  | InvalidParameterException
  | ThrottlingException;
