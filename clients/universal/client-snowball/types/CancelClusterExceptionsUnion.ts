import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { InvalidResourceException } from "./InvalidResourceException";
export type CancelClusterExceptionsUnion =
  | KMSRequestFailedException
  | InvalidJobStateException
  | InvalidResourceException;
