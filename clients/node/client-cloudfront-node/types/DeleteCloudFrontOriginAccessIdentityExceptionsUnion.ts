import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "./PreconditionFailed";
import { CloudFrontOriginAccessIdentityInUse } from "./CloudFrontOriginAccessIdentityInUse";
export type DeleteCloudFrontOriginAccessIdentityExceptionsUnion =
  | AccessDenied
  | InvalidIfMatchVersion
  | NoSuchCloudFrontOriginAccessIdentity
  | PreconditionFailed
  | CloudFrontOriginAccessIdentityInUse;
