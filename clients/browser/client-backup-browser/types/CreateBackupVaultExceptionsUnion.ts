import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
export type CreateBackupVaultExceptionsUnion =
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException
  | LimitExceededException
  | AlreadyExistsException;
