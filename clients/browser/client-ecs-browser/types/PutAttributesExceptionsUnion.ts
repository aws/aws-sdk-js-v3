import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { AttributeLimitExceededException } from "./AttributeLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
export type PutAttributesExceptionsUnion =
  | ClusterNotFoundException
  | TargetNotFoundException
  | AttributeLimitExceededException
  | InvalidParameterException;
