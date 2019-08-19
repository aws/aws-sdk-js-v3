import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type PutResourcePolicyExceptionsUnion =
  | MalformedPolicyDocumentException
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServiceError
  | InvalidRequestException;
