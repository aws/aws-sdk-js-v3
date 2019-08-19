import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DependencyThrottleException } from "./DependencyThrottleException";
export type DescribeLoadBalancersExceptionsUnion =
  | AccessPointNotFoundException
  | DependencyThrottleException;
