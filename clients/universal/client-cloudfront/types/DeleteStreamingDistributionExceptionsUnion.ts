import { AccessDenied } from "./AccessDenied";
import { StreamingDistributionNotDisabled } from "./StreamingDistributionNotDisabled";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
export type DeleteStreamingDistributionExceptionsUnion =
  | AccessDenied
  | StreamingDistributionNotDisabled
  | InvalidIfMatchVersion
  | NoSuchStreamingDistribution
  | PreconditionFailed;
