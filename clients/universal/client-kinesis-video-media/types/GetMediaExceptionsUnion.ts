import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidEndpointException } from "./InvalidEndpointException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { ConnectionLimitExceededException } from "./ConnectionLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type GetMediaExceptionsUnion =
  | ResourceNotFoundException
  | NotAuthorizedException
  | InvalidEndpointException
  | ClientLimitExceededException
  | ConnectionLimitExceededException
  | InvalidArgumentException;
