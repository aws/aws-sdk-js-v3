import { DetachVolumeInput } from "../shapes/DetachVolumeInput";
import { DetachVolumeOutput } from "../shapes/DetachVolumeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachVolumeInput
  },
  output: {
    shape: DetachVolumeOutput
  },
  errors: []
};
