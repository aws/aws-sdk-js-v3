import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
export type RemoveTagsExceptionsUnion =
  | ResourceNotFoundException
  | CloudTrailARNInvalidException
  | ResourceTypeNotSupportedException
  | InvalidTrailNameException
  | InvalidTagParameterException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | NotOrganizationMasterAccountException;
