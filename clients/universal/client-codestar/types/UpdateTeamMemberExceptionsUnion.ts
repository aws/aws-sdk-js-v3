import { LimitExceededException } from "./LimitExceededException";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TeamMemberNotFoundException } from "./TeamMemberNotFoundException";
export type UpdateTeamMemberExceptionsUnion =
  | LimitExceededException
  | ProjectNotFoundException
  | ValidationException
  | InvalidServiceRoleException
  | ProjectConfigurationException
  | ConcurrentModificationException
  | TeamMemberNotFoundException;
