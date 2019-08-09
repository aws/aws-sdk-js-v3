import { UserProfileNotFoundException } from "./UserProfileNotFoundException";
import { ValidationException } from "./ValidationException";
export type UpdateUserProfileExceptionsUnion =
  | UserProfileNotFoundException
  | ValidationException;
