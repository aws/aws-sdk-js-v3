import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateGatewayGroupExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException;
