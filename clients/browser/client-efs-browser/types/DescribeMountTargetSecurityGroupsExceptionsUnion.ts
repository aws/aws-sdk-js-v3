import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { IncorrectMountTargetState } from "./IncorrectMountTargetState";
export type DescribeMountTargetSecurityGroupsExceptionsUnion =
  | BadRequest
  | InternalServerError
  | MountTargetNotFound
  | IncorrectMountTargetState;
