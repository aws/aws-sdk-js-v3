import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { MalformedPolicyException } from "./MalformedPolicyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type CreatePolicyExceptionsUnion =
  | ResourceAlreadyExistsException
  | MalformedPolicyException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
