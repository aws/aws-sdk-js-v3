import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ThrottlingException } from "./ThrottlingException";
export type DescribeEndpointExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | UnauthorizedException
  | ThrottlingException;
