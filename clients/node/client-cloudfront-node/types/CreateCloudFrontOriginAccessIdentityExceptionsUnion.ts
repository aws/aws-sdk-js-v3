import { CloudFrontOriginAccessIdentityAlreadyExists } from "./CloudFrontOriginAccessIdentityAlreadyExists";
import { MissingBody } from "./MissingBody";
import { TooManyCloudFrontOriginAccessIdentities } from "./TooManyCloudFrontOriginAccessIdentities";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
export type CreateCloudFrontOriginAccessIdentityExceptionsUnion =
  | CloudFrontOriginAccessIdentityAlreadyExists
  | MissingBody
  | TooManyCloudFrontOriginAccessIdentities
  | InvalidArgument
  | InconsistentQuantities;
