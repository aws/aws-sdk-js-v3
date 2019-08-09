import { UnauthorizedException } from "./UnauthorizedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type PutSkillAuthorizationExceptionsUnion =
  | UnauthorizedException
  | ConcurrentModificationException;
