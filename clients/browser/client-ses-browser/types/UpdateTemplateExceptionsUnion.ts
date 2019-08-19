import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { InvalidTemplateException } from "./InvalidTemplateException";
export type UpdateTemplateExceptionsUnion =
  | TemplateDoesNotExistException
  | InvalidTemplateException;
