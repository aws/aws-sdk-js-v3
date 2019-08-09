import { _SubscribedWorkteam } from "./_SubscribedWorkteam";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscribedWorkteamOutput: _Structure_ = {
  type: "structure",
  required: ["SubscribedWorkteam"],
  members: {
    SubscribedWorkteam: {
      shape: _SubscribedWorkteam
    }
  }
};
