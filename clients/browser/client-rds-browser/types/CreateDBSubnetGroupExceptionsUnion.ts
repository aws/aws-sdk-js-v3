import { DBSubnetGroupAlreadyExistsFault } from "./DBSubnetGroupAlreadyExistsFault";
import { DBSubnetGroupQuotaExceededFault } from "./DBSubnetGroupQuotaExceededFault";
import { DBSubnetQuotaExceededFault } from "./DBSubnetQuotaExceededFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
export type CreateDBSubnetGroupExceptionsUnion =
  | DBSubnetGroupAlreadyExistsFault
  | DBSubnetGroupQuotaExceededFault
  | DBSubnetQuotaExceededFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet;
