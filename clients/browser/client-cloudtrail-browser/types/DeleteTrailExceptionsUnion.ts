import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidHomeRegionException } from "./InvalidHomeRegionException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "./InsufficientDependencyServiceAccessPermissionException";
export type DeleteTrailExceptionsUnion =
  | TrailNotFoundException
  | InvalidTrailNameException
  | InvalidHomeRegionException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | NotOrganizationMasterAccountException
  | InsufficientDependencyServiceAccessPermissionException;
