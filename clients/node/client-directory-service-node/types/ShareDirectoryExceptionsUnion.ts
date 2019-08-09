import { DirectoryAlreadySharedException } from "./DirectoryAlreadySharedException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidTargetException } from "./InvalidTargetException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ShareLimitExceededException } from "./ShareLimitExceededException";
import { OrganizationsException } from "./OrganizationsException";
import { AccessDeniedException } from "./AccessDeniedException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ServiceException } from "./ServiceException";
export type ShareDirectoryExceptionsUnion =
  | DirectoryAlreadySharedException
  | EntityDoesNotExistException
  | InvalidTargetException
  | InvalidParameterException
  | ClientException
  | ShareLimitExceededException
  | OrganizationsException
  | AccessDeniedException
  | UnsupportedOperationException
  | ServiceException;
