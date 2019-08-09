import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { TagRequiredException } from "./TagRequiredException";
import { InvalidTagsToAddException } from "./InvalidTagsToAddException";
import { ArnNotSupportedException } from "./ArnNotSupportedException";
import { InvalidArnException } from "./InvalidArnException";
export type UntagResourceExceptionsUnion =
  | ResourceArnRequiredException
  | ApplicationDoesNotExistException
  | DeploymentGroupDoesNotExistException
  | DeploymentConfigDoesNotExistException
  | TagRequiredException
  | InvalidTagsToAddException
  | ArnNotSupportedException
  | InvalidArnException;
