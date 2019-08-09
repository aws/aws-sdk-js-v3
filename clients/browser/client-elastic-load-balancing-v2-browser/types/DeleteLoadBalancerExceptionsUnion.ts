import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteLoadBalancerExceptionsUnion =
  | LoadBalancerNotFoundException
  | OperationNotPermittedException
  | ResourceInUseException;
