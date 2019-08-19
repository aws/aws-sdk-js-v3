import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { MalformedPolicyException } from "./MalformedPolicyException";
import { VersionsLimitExceededException } from "./VersionsLimitExceededException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type CreatePolicyVersionExceptionsUnion =
  | ResourceNotFoundException
  | MalformedPolicyException
  | VersionsLimitExceededException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
