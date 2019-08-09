import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorDebugOption: _Structure_ = {
  type: "structure",
  required: ["detectorModelName"],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    keyValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
