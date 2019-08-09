import { UserProfileNotFoundException } from "./UserProfileNotFoundException";
import { ValidationException } from "./ValidationException";
export type DescribeUserProfileExceptionsUnion =
  | UserProfileNotFoundException
  | ValidationException;
