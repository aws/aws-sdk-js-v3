import { _MemberDefinitions } from "./_MemberDefinitions";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWorkteamInput: _Structure_ = {
  type: "structure",
  required: ["WorkteamName", "MemberDefinitions", "Description"],
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
    },
    Tags: {
      shape: _TagList
    }
  }
};
