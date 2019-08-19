import { GetDeployablePatchSnapshotForInstanceInput } from "../shapes/GetDeployablePatchSnapshotForInstanceInput";
import { GetDeployablePatchSnapshotForInstanceOutput } from "../shapes/GetDeployablePatchSnapshotForInstanceOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { UnsupportedOperatingSystem } from "../shapes/UnsupportedOperatingSystem";
import { UnsupportedFeatureRequiredException } from "../shapes/UnsupportedFeatureRequiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeployablePatchSnapshotForInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployablePatchSnapshotForInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeployablePatchSnapshotForInstanceInput
  },
  output: {
    shape: GetDeployablePatchSnapshotForInstanceOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: UnsupportedOperatingSystem
    },
    {
      shape: UnsupportedFeatureRequiredException
    }
  ]
};
