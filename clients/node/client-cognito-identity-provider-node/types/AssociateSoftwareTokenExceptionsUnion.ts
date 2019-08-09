import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
export type AssociateSoftwareTokenExceptionsUnion =
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | InternalErrorException
  | SoftwareTokenMFANotFoundException;
