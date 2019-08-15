import { _MemberDefinitions } from "./_MemberDefinitions";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWorkteamInput: _Structure_ = {
  type: "structure",
  required: ["WorkteamName"],
  members: {
    WorkteamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberDefinitions: {
      shape: _MemberDefinitions
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationConfiguration: {
      shape: _NotificationConfiguration
    }
  }
};
