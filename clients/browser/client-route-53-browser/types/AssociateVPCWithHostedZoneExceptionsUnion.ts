import { NoSuchHostedZone } from "./NoSuchHostedZone";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidVPCId } from "./InvalidVPCId";
import { InvalidInput } from "./InvalidInput";
import { PublicZoneVPCAssociation } from "./PublicZoneVPCAssociation";
import { ConflictingDomainExists } from "./ConflictingDomainExists";
import { LimitsExceeded } from "./LimitsExceeded";
export type AssociateVPCWithHostedZoneExceptionsUnion =
  | NoSuchHostedZone
  | NotAuthorizedException
  | InvalidVPCId
  | InvalidInput
  | PublicZoneVPCAssociation
  | ConflictingDomainExists
  | LimitsExceeded;
