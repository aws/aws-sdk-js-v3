import { _Subscribers } from "./_Subscribers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubscribersForNotificationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subscribers: {
      shape: _Subscribers
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
