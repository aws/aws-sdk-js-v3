import { SubnetGroupAlreadyExistsFault } from "./SubnetGroupAlreadyExistsFault";
import { SubnetGroupQuotaExceededFault } from "./SubnetGroupQuotaExceededFault";
import { SubnetQuotaExceededFault } from "./SubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
export type CreateSubnetGroupExceptionsUnion =
  | SubnetGroupAlreadyExistsFault
  | SubnetGroupQuotaExceededFault
  | SubnetQuotaExceededFault
  | InvalidSubnet
  | ServiceLinkedRoleNotFoundFault;
