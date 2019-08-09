import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidTemplateException } from "./InvalidTemplateException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateTemplateExceptionsUnion =
  | AlreadyExistsException
  | InvalidTemplateException
  | LimitExceededException;
