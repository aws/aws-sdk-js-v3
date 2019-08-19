import { AccessDenied } from "./AccessDenied";
import { IllegalUpdate } from "./IllegalUpdate";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { MissingBody } from "./MissingBody";
import { NoSuchCloudFrontOriginAccessIdentity } from "./NoSuchCloudFrontOriginAccessIdentity";
import { PreconditionFailed } from "./PreconditionFailed";
import { InvalidArgument } from "./InvalidArgument";
import { InconsistentQuantities } from "./InconsistentQuantities";
export type UpdateCloudFrontOriginAccessIdentityExceptionsUnion =
  | AccessDenied
  | IllegalUpdate
  | InvalidIfMatchVersion
  | MissingBody
  | NoSuchCloudFrontOriginAccessIdentity
  | PreconditionFailed
  | InvalidArgument
  | InconsistentQuantities;
