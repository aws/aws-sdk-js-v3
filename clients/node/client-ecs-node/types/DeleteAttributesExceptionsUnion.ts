import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
export type DeleteAttributesExceptionsUnion =
  | ClusterNotFoundException
  | TargetNotFoundException
  | InvalidParameterException;
