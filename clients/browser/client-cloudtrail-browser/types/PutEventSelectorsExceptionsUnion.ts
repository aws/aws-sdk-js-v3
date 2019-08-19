import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidHomeRegionException } from "./InvalidHomeRegionException";
import { InvalidEventSelectorsException } from "./InvalidEventSelectorsException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "./InsufficientDependencyServiceAccessPermissionException";
export type PutEventSelectorsExceptionsUnion =
  | TrailNotFoundException
  | InvalidTrailNameException
  | InvalidHomeRegionException
  | InvalidEventSelectorsException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | NotOrganizationMasterAccountException
  | InsufficientDependencyServiceAccessPermissionException;
