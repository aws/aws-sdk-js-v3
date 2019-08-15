import { _HostVolumeProperties } from "./_HostVolumeProperties";
import { _DockerVolumeConfiguration } from "./_DockerVolumeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Volume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    host: {
      shape: _HostVolumeProperties
    },
    dockerVolumeConfiguration: {
      shape: _DockerVolumeConfiguration
    }
  }
};
