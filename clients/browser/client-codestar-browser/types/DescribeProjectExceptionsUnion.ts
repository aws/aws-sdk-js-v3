import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DescribeProjectExceptionsUnion =
  | ProjectNotFoundException
  | ValidationException
  | InvalidServiceRoleException
  | ProjectConfigurationException
  | ConcurrentModificationException;
