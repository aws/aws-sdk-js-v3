import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { DependencyTimeout } from "./DependencyTimeout";
import { MountTargetNotFound } from "./MountTargetNotFound";
export type DeleteMountTargetExceptionsUnion =
  | BadRequest
  | InternalServerError
  | DependencyTimeout
  | MountTargetNotFound;
