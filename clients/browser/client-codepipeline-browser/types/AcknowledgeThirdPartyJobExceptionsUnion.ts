import { ValidationException } from "./ValidationException";
import { InvalidNonceException } from "./InvalidNonceException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
export type AcknowledgeThirdPartyJobExceptionsUnion =
  | ValidationException
  | InvalidNonceException
  | JobNotFoundException
  | InvalidClientTokenException;
