import { UserProfileAlreadyExistsException } from "./UserProfileAlreadyExistsException";
import { ValidationException } from "./ValidationException";
export type CreateUserProfileExceptionsUnion =
  | UserProfileAlreadyExistsException
  | ValidationException;
