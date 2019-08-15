import { StopLoggingInput } from "../shapes/StopLoggingInput";
import { StopLoggingOutput } from "../shapes/StopLoggingOutput";
import { TrailNotFoundException } from "../shapes/TrailNotFoundException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidHomeRegionException } from "../shapes/InvalidHomeRegionException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "../shapes/InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopLoggingInput
  },
  output: {
    shape: StopLoggingOutput
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
