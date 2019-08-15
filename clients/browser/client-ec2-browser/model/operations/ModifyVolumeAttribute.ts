import { ModifyVolumeAttributeInput } from "../shapes/ModifyVolumeAttributeInput";
import { ModifyVolumeAttributeOutput } from "../shapes/ModifyVolumeAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyVolumeAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVolumeAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVolumeAttributeInput
  },
  output: {
    shape: ModifyVolumeAttributeOutput
  },
  errors: []
};
