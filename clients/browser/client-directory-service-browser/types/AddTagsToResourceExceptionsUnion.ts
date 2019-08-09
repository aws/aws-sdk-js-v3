import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type AddTagsToResourceExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidParameterException
  | TagLimitExceededException
  | ClientException
  | ServiceException;
