import { PutEventSelectorsInput } from "./PutEventSelectorsInput";
import { PutEventSelectorsOutput } from "./PutEventSelectorsOutput";
import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidHomeRegionException } from "./InvalidHomeRegionException";
import { InvalidEventSelectorsException } from "./InvalidEventSelectorsException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "./InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
