import { ListPlaybackConfigurationsInput } from "./ListPlaybackConfigurationsInput";
import { ListPlaybackConfigurationsOutput } from "./ListPlaybackConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPlaybackConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPlaybackConfigurations",
  http: {
    method: "GET",
    requestUri: "/playbackConfigurations"
  },
  input: {
    shape: ListPlaybackConfigurationsInput
  },
  output: {
    shape: ListPlaybackConfigurationsOutput
  },
  errors: []
};
