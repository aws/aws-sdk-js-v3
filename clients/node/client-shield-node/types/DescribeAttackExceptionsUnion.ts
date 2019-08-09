import { InternalErrorException } from "./InternalErrorException";
import { AccessDeniedException } from "./AccessDeniedException";
export type DescribeAttackExceptionsUnion =
  | InternalErrorException
  | AccessDeniedException;
