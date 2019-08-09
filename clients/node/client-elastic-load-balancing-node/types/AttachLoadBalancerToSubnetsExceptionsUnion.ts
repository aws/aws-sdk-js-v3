import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
export type AttachLoadBalancerToSubnetsExceptionsUnion =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | SubnetNotFoundException
  | InvalidSubnetException;
