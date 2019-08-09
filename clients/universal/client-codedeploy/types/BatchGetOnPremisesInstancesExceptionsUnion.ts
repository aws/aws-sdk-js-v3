import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
export type BatchGetOnPremisesInstancesExceptionsUnion =
  | InstanceNameRequiredException
  | InvalidInstanceNameException
  | BatchLimitExceededException;
