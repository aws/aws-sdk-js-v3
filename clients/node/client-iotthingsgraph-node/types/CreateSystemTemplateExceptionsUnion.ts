import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type CreateSystemTemplateExceptionsUnion =
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | InternalFailureException;
