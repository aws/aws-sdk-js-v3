import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "./IDPRejectedClaimException";
import { IDPCommunicationErrorException } from "./IDPCommunicationErrorException";
import { InvalidIdentityTokenException } from "./InvalidIdentityTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { RegionDisabledException } from "./RegionDisabledException";
export type AssumeRoleWithWebIdentityExceptionsUnion =
  | MalformedPolicyDocumentException
  | PackedPolicyTooLargeException
  | IDPRejectedClaimException
  | IDPCommunicationErrorException
  | InvalidIdentityTokenException
  | ExpiredTokenException
  | RegionDisabledException;
