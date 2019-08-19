import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { StreamingDistributionAlreadyExists } from "./StreamingDistributionAlreadyExists";
import { InvalidOrigin } from "./InvalidOrigin";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { AccessDenied } from "./AccessDenied";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { MissingBody } from "./MissingBody";
import { TooManyStreamingDistributionCNAMEs } from "./TooManyStreamingDistributionCNAMEs";
import { TooManyStreamingDistributions } from "./TooManyStreamingDistributions";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidTagging } from "./InvalidTagging";
export type CreateStreamingDistributionWithTagsExceptionsUnion =
  | CNAMEAlreadyExists
  | StreamingDistributionAlreadyExists
  | InvalidOrigin
  | InvalidOriginAccessIdentity
  | AccessDenied
  | TooManyTrustedSigners
  | TrustedSignerDoesNotExist
  | MissingBody
  | TooManyStreamingDistributionCNAMEs
  | TooManyStreamingDistributions
  | InvalidArgument
  | InconsistentQuantities
  | InvalidTagging;
