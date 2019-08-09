import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { IncorrectMountTargetState } from "./IncorrectMountTargetState";
import { SecurityGroupLimitExceeded } from "./SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "./SecurityGroupNotFound";
export type ModifyMountTargetSecurityGroupsExceptionsUnion =
  | BadRequest
  | InternalServerError
  | MountTargetNotFound
  | IncorrectMountTargetState
  | SecurityGroupLimitExceeded
  | SecurityGroupNotFound;
