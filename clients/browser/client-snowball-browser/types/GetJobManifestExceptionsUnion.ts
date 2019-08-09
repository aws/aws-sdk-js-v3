import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
export type GetJobManifestExceptionsUnion =
  | InvalidResourceException
  | InvalidJobStateException;
