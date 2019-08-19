import { DependencyTimeoutException } from "./DependencyTimeoutException";
import { InvalidMarkerException } from "./InvalidMarkerException";
import { KMSInternalException } from "./KMSInternalException";
import { InvalidArnException } from "./InvalidArnException";
import { NotFoundException } from "./NotFoundException";
export type ListAliasesExceptionsUnion =
  | DependencyTimeoutException
  | InvalidMarkerException
  | KMSInternalException
  | InvalidArnException
  | NotFoundException;
