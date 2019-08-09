import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
export type ListAttributesExceptionsUnion =
  | ClusterNotFoundException
  | InvalidParameterException;
