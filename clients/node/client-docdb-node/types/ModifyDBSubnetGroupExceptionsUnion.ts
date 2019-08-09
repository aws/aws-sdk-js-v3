import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetQuotaExceededFault } from "./DBSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
export type ModifyDBSubnetGroupExceptionsUnion =
  | DBSubnetGroupNotFoundFault
  | DBSubnetQuotaExceededFault
  | SubnetAlreadyInUse
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet;
