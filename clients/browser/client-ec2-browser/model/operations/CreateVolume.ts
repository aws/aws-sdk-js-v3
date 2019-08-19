import { CreateVolumeInput } from "../shapes/CreateVolumeInput";
import { CreateVolumeOutput } from "../shapes/CreateVolumeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVolumeInput
  },
  output: {
    shape: CreateVolumeOutput
  },
  errors: []
};
