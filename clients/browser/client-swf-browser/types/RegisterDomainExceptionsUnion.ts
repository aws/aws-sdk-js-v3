import { DomainAlreadyExistsFault } from "./DomainAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { TooManyTagsFault } from "./TooManyTagsFault";
export type RegisterDomainExceptionsUnion =
  | DomainAlreadyExistsFault
  | LimitExceededFault
  | OperationNotPermittedFault
  | TooManyTagsFault;
