import { InternalServerError } from "./InternalServerError";
import { UnsupportedOperatingSystem } from "./UnsupportedOperatingSystem";
import { UnsupportedFeatureRequiredException } from "./UnsupportedFeatureRequiredException";
export type GetDeployablePatchSnapshotForInstanceExceptionsUnion =
  | InternalServerError
  | UnsupportedOperatingSystem
  | UnsupportedFeatureRequiredException;
