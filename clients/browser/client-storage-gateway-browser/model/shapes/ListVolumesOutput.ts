import { _VolumeInfos } from "./_VolumeInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVolumesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VolumeInfos: {
      shape: _VolumeInfos
    }
  }
};
