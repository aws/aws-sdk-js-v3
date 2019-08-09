import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
export type CancelJobExceptionsUnion =
  | InvalidResourceException
  | InvalidJobStateException
  | KMSRequestFailedException;
