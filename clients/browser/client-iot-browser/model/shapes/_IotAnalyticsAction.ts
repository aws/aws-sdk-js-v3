import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IotAnalyticsAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    channelArn: {
      shape: {
        type: "string"
      }
    },
    channelName: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
