import { DuplicateTargetGroupNameException } from "./DuplicateTargetGroupNameException";
import { TooManyTargetGroupsException } from "./TooManyTargetGroupsException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
export type CreateTargetGroupExceptionsUnion =
  | DuplicateTargetGroupNameException
  | TooManyTargetGroupsException
  | InvalidConfigurationRequestException;
