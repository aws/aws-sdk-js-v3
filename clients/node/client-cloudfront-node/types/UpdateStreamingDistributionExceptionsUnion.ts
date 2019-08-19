import { AccessDenied } from "./AccessDenied";
import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { IllegalUpdate } from "./IllegalUpdate";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { MissingBody } from "./MissingBody";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
import { TooManyStreamingDistributionCNAMEs } from "./TooManyStreamingDistributionCNAMEs";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { InconsistentQuantities } from "./InconsistentQuantities";
export type UpdateStreamingDistributionExceptionsUnion =
  | AccessDenied
  | CNAMEAlreadyExists
  | IllegalUpdate
  | InvalidIfMatchVersion
  | MissingBody
  | NoSuchStreamingDistribution
  | PreconditionFailed
  | TooManyStreamingDistributionCNAMEs
  | InvalidArgument
  | InvalidOriginAccessIdentity
  | TooManyTrustedSigners
  | TrustedSignerDoesNotExist
  | InconsistentQuantities;
