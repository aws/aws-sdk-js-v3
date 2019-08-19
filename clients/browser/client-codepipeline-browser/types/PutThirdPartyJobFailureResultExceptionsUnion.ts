import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
export type PutThirdPartyJobFailureResultExceptionsUnion =
  | ValidationException
  | JobNotFoundException
  | InvalidJobStateException
  | InvalidClientTokenException;
