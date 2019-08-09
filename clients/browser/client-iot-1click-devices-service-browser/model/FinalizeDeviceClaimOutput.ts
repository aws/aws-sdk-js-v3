import { Structure as _Structure_ } from "@aws-sdk/types";

export const FinalizeDeviceClaimOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
