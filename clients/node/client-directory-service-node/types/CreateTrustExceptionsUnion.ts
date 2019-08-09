import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type CreateTrustExceptionsUnion =
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ClientException
  | ServiceException
  | UnsupportedOperationException;
