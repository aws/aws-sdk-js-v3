import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { IncompatibleImageException } from "./IncompatibleImageException";
export type StartImageBuilderExceptionsUnion =
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | IncompatibleImageException;
