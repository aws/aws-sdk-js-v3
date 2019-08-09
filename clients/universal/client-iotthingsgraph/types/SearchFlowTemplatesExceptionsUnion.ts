import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type SearchFlowTemplatesExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException;
