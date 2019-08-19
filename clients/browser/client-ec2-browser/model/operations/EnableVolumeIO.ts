import { EnableVolumeIOInput } from "../shapes/EnableVolumeIOInput";
import { EnableVolumeIOOutput } from "../shapes/EnableVolumeIOOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableVolumeIO: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableVolumeIO",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableVolumeIOInput
  },
  output: {
    shape: EnableVolumeIOOutput
  },
  errors: []
};
