import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidPolicyException } from "./InvalidPolicyException";
import { InvalidTagException } from "./InvalidTagException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateCertificateAuthorityExceptionsUnion =
  | InvalidArgsException
  | InvalidPolicyException
  | InvalidTagException
  | LimitExceededException;
