import { _VolumeRecoveryPointInfos } from "./_VolumeRecoveryPointInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVolumeRecoveryPointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeRecoveryPointInfos: {
      shape: _VolumeRecoveryPointInfos
    }
  }
};
