import { ProjectAlreadyExistsException } from "./ProjectAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ValidationException } from "./ValidationException";
import { ProjectCreationFailedException } from "./ProjectCreationFailedException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateProjectExceptionsUnion =
  | ProjectAlreadyExistsException
  | LimitExceededException
  | ValidationException
  | ProjectCreationFailedException
  | InvalidServiceRoleException
  | ProjectConfigurationException
  | ConcurrentModificationException;
