import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GetSystemTemplateExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ResourceNotFoundException;
