import { SubnetGroupInUseFault } from "./SubnetGroupInUseFault";
import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
export type DeleteSubnetGroupExceptionsUnion =
  | SubnetGroupInUseFault
  | SubnetGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault;
