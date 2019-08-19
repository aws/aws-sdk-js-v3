import { PutPlaybackConfigurationInput } from "../shapes/PutPlaybackConfigurationInput";
import { PutPlaybackConfigurationOutput } from "../shapes/PutPlaybackConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPlaybackConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPlaybackConfiguration",
  http: {
    method: "PUT",
    requestUri: "/playbackConfiguration"
  },
  input: {
    shape: PutPlaybackConfigurationInput
  },
  output: {
    shape: PutPlaybackConfigurationOutput
  },
  errors: []
};
