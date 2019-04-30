import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteReplicaAction: _Structure_ = {
  type: "structure",
  required: ["RegionName"],
  members: {
    RegionName: {
      shape: {
        type: "string"
      }
    }
  }
};
