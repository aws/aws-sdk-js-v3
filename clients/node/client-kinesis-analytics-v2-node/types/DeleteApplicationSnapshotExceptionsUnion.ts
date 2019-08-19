import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteApplicationSnapshotExceptionsUnion =
  | ResourceInUseException
  | InvalidArgumentException
  | UnsupportedOperationException
  | InvalidRequestException
  | ResourceNotFoundException;
