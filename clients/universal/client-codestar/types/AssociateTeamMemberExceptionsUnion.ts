import { LimitExceededException } from "./LimitExceededException";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { TeamMemberAlreadyAssociatedException } from "./TeamMemberAlreadyAssociatedException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type AssociateTeamMemberExceptionsUnion =
  | LimitExceededException
  | ProjectNotFoundException
  | TeamMemberAlreadyAssociatedException
  | ValidationException
  | InvalidServiceRoleException
  | ProjectConfigurationException
  | ConcurrentModificationException;
