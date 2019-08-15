import { StartLoggingInput } from "../shapes/StartLoggingInput";
import { StartLoggingOutput } from "../shapes/StartLoggingOutput";
import { TrailNotFoundException } from "../shapes/TrailNotFoundException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidHomeRegionException } from "../shapes/InvalidHomeRegionException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "../shapes/InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartLoggingInput
  },
  output: {
    shape: StartLoggingOutput
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
