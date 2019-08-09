import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { InvalidRenderingParameterException } from "./InvalidRenderingParameterException";
import { MissingRenderingAttributeException } from "./MissingRenderingAttributeException";
export type TestRenderTemplateExceptionsUnion =
  | TemplateDoesNotExistException
  | InvalidRenderingParameterException
  | MissingRenderingAttributeException;
