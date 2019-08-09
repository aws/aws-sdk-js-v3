import { StartLoggingInput } from "./StartLoggingInput";
import { StartLoggingOutput } from "./StartLoggingOutput";
import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidHomeRegionException } from "./InvalidHomeRegionException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { InsufficientDependencyServiceAccessPermissionException } from "./InsufficientDependencyServiceAccessPermissionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
