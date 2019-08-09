import { AccessDenied } from "./AccessDenied";
import { DistributionNotDisabled } from "./DistributionNotDisabled";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
export type DeleteDistributionExceptionsUnion =
  | AccessDenied
  | DistributionNotDisabled
  | InvalidIfMatchVersion
  | NoSuchDistribution
  | PreconditionFailed;
