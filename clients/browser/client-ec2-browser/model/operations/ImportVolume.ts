import { ImportVolumeInput } from "../shapes/ImportVolumeInput";
import { ImportVolumeOutput } from "../shapes/ImportVolumeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportVolumeInput
  },
  output: {
    shape: ImportVolumeOutput
  },
  errors: []
};
