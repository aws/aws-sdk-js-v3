import { DeleteVolumeInput } from "../shapes/DeleteVolumeInput";
import { DeleteVolumeOutput } from "../shapes/DeleteVolumeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVolumeInput
  },
  output: {
    shape: DeleteVolumeOutput
  },
  errors: []
};
