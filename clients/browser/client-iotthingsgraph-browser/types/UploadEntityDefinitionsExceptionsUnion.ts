import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type UploadEntityDefinitionsExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ThrottlingException;
