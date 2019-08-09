import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
export type GetJobUnlockCodeExceptionsUnion =
  | InvalidResourceException
  | InvalidJobStateException;
