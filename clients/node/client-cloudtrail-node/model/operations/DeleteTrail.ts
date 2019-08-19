import { DeleteTrailInput } from "../shapes/DeleteTrailInput";
import { DeleteTrailOutput } from "../shapes/DeleteTrailOutput";
import { TrailNotFoundException } from "../shapes/TrailNotFoundException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidHomeRegionException } from "../shapes/InvalidHomeRegionException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "../shapes/InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrailInput
  },
  output: {
    shape: DeleteTrailOutput
  },
  errors: [
    {
      shape: TrailNotFoundException
    },
    {
      shape: InvalidTrailNameException
    },
    {
      shape: InvalidHomeRegionException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: NotOrganizationMasterAccountException
    },
    {
      shape: InsufficientDependencyServiceAccessPermissionException
    }
  ]
};
