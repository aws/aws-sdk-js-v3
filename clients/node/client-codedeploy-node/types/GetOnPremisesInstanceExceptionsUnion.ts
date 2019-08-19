import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InstanceNotRegisteredException } from "./InstanceNotRegisteredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
export type GetOnPremisesInstanceExceptionsUnion =
  | InstanceNameRequiredException
  | InstanceNotRegisteredException
  | InvalidInstanceNameException;
