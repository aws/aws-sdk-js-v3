import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PackedPolicyTooLargeException } from "./PackedPolicyTooLargeException";
import { RegionDisabledException } from "./RegionDisabledException";
export type AssumeRoleExceptionsUnion =
  | MalformedPolicyDocumentException
  | PackedPolicyTooLargeException
  | RegionDisabledException;
