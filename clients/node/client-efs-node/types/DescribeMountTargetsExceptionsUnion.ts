import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { MountTargetNotFound } from "./MountTargetNotFound";
export type DescribeMountTargetsExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemNotFound
  | MountTargetNotFound;
