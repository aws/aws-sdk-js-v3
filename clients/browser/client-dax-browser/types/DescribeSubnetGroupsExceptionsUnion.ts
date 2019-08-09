import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
export type DescribeSubnetGroupsExceptionsUnion =
  | SubnetGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault;
