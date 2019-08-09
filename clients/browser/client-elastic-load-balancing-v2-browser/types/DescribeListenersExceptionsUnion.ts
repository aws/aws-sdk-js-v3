import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
export type DescribeListenersExceptionsUnion =
  | ListenerNotFoundException
  | LoadBalancerNotFoundException
  | UnsupportedProtocolException;
