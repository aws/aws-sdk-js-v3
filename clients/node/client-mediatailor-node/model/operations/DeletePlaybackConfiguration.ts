import { DeletePlaybackConfigurationInput } from "../shapes/DeletePlaybackConfigurationInput";
import { DeletePlaybackConfigurationOutput } from "../shapes/DeletePlaybackConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePlaybackConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePlaybackConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/playbackConfiguration/{Name}"
  },
  input: {
    shape: DeletePlaybackConfigurationInput
  },
  output: {
    shape: DeletePlaybackConfigurationOutput
  },
  errors: []
};
