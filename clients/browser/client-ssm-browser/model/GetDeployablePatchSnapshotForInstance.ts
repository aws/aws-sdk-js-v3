import { GetDeployablePatchSnapshotForInstanceInput } from "./GetDeployablePatchSnapshotForInstanceInput";
import { GetDeployablePatchSnapshotForInstanceOutput } from "./GetDeployablePatchSnapshotForInstanceOutput";
import { InternalServerError } from "./InternalServerError";
import { UnsupportedOperatingSystem } from "./UnsupportedOperatingSystem";
import { UnsupportedFeatureRequiredException } from "./UnsupportedFeatureRequiredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
