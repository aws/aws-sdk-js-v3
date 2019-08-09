import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { TagRequiredException } from "./TagRequiredException";
import { InvalidTagException } from "./InvalidTagException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { InstanceLimitExceededException } from "./InstanceLimitExceededException";
import { InstanceNotRegisteredException } from "./InstanceNotRegisteredException";
export type AddTagsToOnPremisesInstancesExceptionsUnion =
  | InstanceNameRequiredException
  | InvalidInstanceNameException
  | TagRequiredException
  | InvalidTagException
  | TagLimitExceededException
  | InstanceLimitExceededException
  | InstanceNotRegisteredException;
