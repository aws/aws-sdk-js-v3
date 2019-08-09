import { NameAlreadyExistsException } from "./NameAlreadyExistsException";
import { CreatedButModifiedException } from "./CreatedButModifiedException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateStackSetExceptionsUnion =
  | NameAlreadyExistsException
  | CreatedButModifiedException
  | LimitExceededException;
