import { PutEventSelectorsInput } from "../shapes/PutEventSelectorsInput";
import { PutEventSelectorsOutput } from "../shapes/PutEventSelectorsOutput";
import { TrailNotFoundException } from "../shapes/TrailNotFoundException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidHomeRegionException } from "../shapes/InvalidHomeRegionException";
import { InvalidEventSelectorsException } from "../shapes/InvalidEventSelectorsException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "../shapes/InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEventSelectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEventSelectors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutEventSelectorsInput
  },
  output: {
    shape: PutEventSelectorsOutput
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
      shape: InvalidEventSelectorsException
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
