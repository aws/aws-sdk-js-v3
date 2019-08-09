import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidDBSubnetStateFault } from "./InvalidDBSubnetStateFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
export type DeleteDBSubnetGroupExceptionsUnion =
  | InvalidDBSubnetGroupStateFault
  | InvalidDBSubnetStateFault
  | DBSubnetGroupNotFoundFault;
