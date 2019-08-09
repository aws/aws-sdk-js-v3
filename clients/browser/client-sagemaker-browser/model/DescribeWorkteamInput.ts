import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkteamInput: _Structure_ = {
  type: "structure",
  required: ["WorkteamName"],
  members: {
    WorkteamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
