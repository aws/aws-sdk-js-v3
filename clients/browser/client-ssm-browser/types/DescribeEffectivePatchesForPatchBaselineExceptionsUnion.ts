import { InvalidResourceId } from "./InvalidResourceId";
import { DoesNotExistException } from "./DoesNotExistException";
import { UnsupportedOperatingSystem } from "./UnsupportedOperatingSystem";
import { InternalServerError } from "./InternalServerError";
export type DescribeEffectivePatchesForPatchBaselineExceptionsUnion =
  | InvalidResourceId
  | DoesNotExistException
  | UnsupportedOperatingSystem
  | InternalServerError;
