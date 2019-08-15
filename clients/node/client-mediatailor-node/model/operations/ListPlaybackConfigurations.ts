import { ListPlaybackConfigurationsInput } from "../shapes/ListPlaybackConfigurationsInput";
import { ListPlaybackConfigurationsOutput } from "../shapes/ListPlaybackConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
