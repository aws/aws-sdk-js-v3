import { ConcurrentModification } from "./ConcurrentModification";
import { VPCAssociationAuthorizationNotFound } from "./VPCAssociationAuthorizationNotFound";
import { NoSuchHostedZone } from "./NoSuchHostedZone";
import { InvalidVPCId } from "./InvalidVPCId";
import { InvalidInput } from "./InvalidInput";
export type DeleteVPCAssociationAuthorizationExceptionsUnion =
  | ConcurrentModification
  | VPCAssociationAuthorizationNotFound
  | NoSuchHostedZone
  | InvalidVPCId
  | InvalidInput;
