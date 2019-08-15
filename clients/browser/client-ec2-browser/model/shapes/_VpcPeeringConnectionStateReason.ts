import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringConnectionStateReason: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      },
      locationName: "code"
    },
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  }
};
