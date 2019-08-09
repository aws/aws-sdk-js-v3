import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscribedWorkteamInput: _Structure_ = {
  type: "structure",
  required: ["WorkteamArn"],
  members: {
    WorkteamArn: {
      shape: {
        type: "string"
      }
    }
  }
};
