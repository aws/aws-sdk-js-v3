import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { SubnetQuotaExceededFault } from "./SubnetQuotaExceededFault";
import { SubnetInUse } from "./SubnetInUse";
import { InvalidSubnet } from "./InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
export type UpdateSubnetGroupExceptionsUnion =
  | SubnetGroupNotFoundFault
  | SubnetQuotaExceededFault
  | SubnetInUse
  | InvalidSubnet
  | ServiceLinkedRoleNotFoundFault;
