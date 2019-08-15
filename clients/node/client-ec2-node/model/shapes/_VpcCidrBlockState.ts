import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcCidrBlockState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    }
  }
};
