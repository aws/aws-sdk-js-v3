import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { IDPRejectedClaimException } from "./IDPRejectedClaimException";
import { InvalidIdentityTokenException } from "./InvalidIdentityTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { RegionDisabledException } from "./RegionDisabledException";
export type AssumeRoleWithSAMLExceptionsUnion =
  | MalformedPolicyDocumentException
  | PackedPolicyTooLargeException
  | IDPRejectedClaimException
  | InvalidIdentityTokenException
  | ExpiredTokenException
  | RegionDisabledException;
