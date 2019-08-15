import { _TapeRecoveryPointInfos } from "./_TapeRecoveryPointInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTapeRecoveryPointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeRecoveryPointInfos: {
      shape: _TapeRecoveryPointInfos
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
