import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { TagsLimitExceededException } from "./TagsLimitExceededException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
export type AddTagsExceptionsUnion =
  | ResourceNotFoundException
  | CloudTrailARNInvalidException
  | ResourceTypeNotSupportedException
  | TagsLimitExceededException
  | InvalidTrailNameException
  | InvalidTagParameterException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | NotOrganizationMasterAccountException;
