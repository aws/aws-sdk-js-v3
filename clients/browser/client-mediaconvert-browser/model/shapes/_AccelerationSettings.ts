import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccelerationSettings: _Structure_ = {
  type: "structure",
  required: ["Mode"],
  members: {
    Mode: {
      shape: {
        type: "string"
      },
      locationName: "mode"
    }
  }
};
