import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidTokenException } from "./InvalidTokenException";
export type ListTagsExceptionsUnion =
  | ResourceNotFoundException
  | CloudTrailARNInvalidException
  | ResourceTypeNotSupportedException
  | InvalidTrailNameException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | InvalidTokenException;
