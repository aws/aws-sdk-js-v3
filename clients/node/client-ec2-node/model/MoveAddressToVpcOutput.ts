import { Structure as _Structure_ } from "@aws-sdk/types";

export const MoveAddressToVpcOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      },
      locationName: "allocationId"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
