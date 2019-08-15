import { ModifyVolumeInput } from "../shapes/ModifyVolumeInput";
import { ModifyVolumeOutput } from "../shapes/ModifyVolumeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVolumeInput
  },
  output: {
    shape: ModifyVolumeOutput
  },
  errors: []
};
