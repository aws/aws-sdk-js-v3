import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHubOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HubArn: {
      shape: {
        type: "string"
      }
    },
    SubscribedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
