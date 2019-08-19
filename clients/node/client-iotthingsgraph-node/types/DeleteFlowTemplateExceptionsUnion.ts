import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteFlowTemplateExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | ResourceInUseException;
