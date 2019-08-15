import { GetPlaybackConfigurationInput } from "../shapes/GetPlaybackConfigurationInput";
import { GetPlaybackConfigurationOutput } from "../shapes/GetPlaybackConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPlaybackConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPlaybackConfiguration",
  http: {
    method: "GET",
    requestUri: "/playbackConfiguration/{Name}"
  },
  input: {
    shape: GetPlaybackConfigurationInput
  },
  output: {
    shape: GetPlaybackConfigurationOutput
  },
  errors: []
};
