import { _ConnectionNotificationSet } from "./_ConnectionNotificationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointConnectionNotificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionNotificationSet: {
      shape: _ConnectionNotificationSet,
      locationName: "connectionNotificationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
