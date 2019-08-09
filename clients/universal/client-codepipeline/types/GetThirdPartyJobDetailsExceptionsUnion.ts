import { JobNotFoundException } from "./JobNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidJobException } from "./InvalidJobException";
export type GetThirdPartyJobDetailsExceptionsUnion =
  | JobNotFoundException
  | ValidationException
  | InvalidClientTokenException
  | InvalidJobException;
